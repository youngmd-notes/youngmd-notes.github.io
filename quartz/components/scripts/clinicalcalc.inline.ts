// 電解質／酸鹼計算機：輸入有的數值，能算的結果就會出現
type Field = { key: string; label: string; unit: string }

const FIELDS: Field[] = [
  { key: "na", label: "Na", unit: "mmol/L" },
  { key: "cl", label: "Cl", unit: "mmol/L" },
  { key: "hco3", label: "HCO₃⁻", unit: "mmol/L" },
  { key: "glu", label: "Glucose", unit: "mg/dL" },
  { key: "bun", label: "BUN", unit: "mg/dL" },
  { key: "alb", label: "Albumin", unit: "g/dL" },
  { key: "mosm", label: "Measured osm", unit: "mOsm/kg" },
  { key: "pco2", label: "PaCO₂", unit: "mmHg" },
]

const fmt = (x: number, d = 1) => (Math.round(x * 10 ** d) / 10 ** d).toString()

type Row = { name: string; formula: string; value: string; note: string; flag?: "hi" | "lo" }

function compute(v: Record<string, number | undefined>): Row[] {
  const rows: Row[] = []
  const { na, cl, hco3, glu, bun, alb, mosm, pco2 } = v

  if (na !== undefined && glu !== undefined) {
    const excess = Math.max(glu - 100, 0) / 100
    const c16 = na + 1.6 * excess
    const c24 = na + 2.4 * excess
    rows.push({
      name: "校正血鈉",
      formula: "Na + 1.6 × (Glucose − 100) / 100",
      value: fmt(c16),
      note: `用係數 2.4 則為 ${fmt(c24)}；${c16 > 145 ? "偏高 → 真正的高張脫水" : c16 < 135 ? "偏低" : "正常範圍"}`,
      flag: c16 > 145 ? "hi" : c16 < 135 ? "lo" : undefined,
    })
    const eff = 2 * na + glu / 18
    rows.push({
      name: "Calculated effective osmolality",
      formula: "2 × Na + Glucose / 18",
      value: fmt(eff),
      note: eff > 300 ? "> 300：符合 HHS 滲透壓門檻" : eff < 275 ? "< 275：低張" : "未達 HHS 門檻",
      flag: eff > 300 ? "hi" : eff < 275 ? "lo" : undefined,
    })
    if (bun !== undefined) {
      const tot = eff + bun / 2.8
      rows.push({
        name: "Calculated total osmolality",
        formula: "2 × Na + Glucose / 18 + BUN / 2.8",
        value: fmt(tot),
        note: tot > 320 ? "> 320：符合 HHS 滲透壓門檻" : "未達 320",
        flag: tot > 320 ? "hi" : undefined,
      })
      if (mosm !== undefined) {
        const gap = mosm - tot
        rows.push({
          name: "Osmolal gap",
          formula: "Measured − calculated total",
          value: fmt(gap),
          note: gap > 10 ? "> 10 升高：想到 methanol、ethylene glycol 等未測溶質" : "正常（< 10）",
          flag: gap > 10 ? "hi" : undefined,
        })
      }
    }
  }

  if (na !== undefined && cl !== undefined && hco3 !== undefined) {
    const ag = na - (cl + hco3)
    rows.push({
      name: "Anion gap",
      formula: "Na − (Cl + HCO₃⁻)",
      value: fmt(ag),
      note: ag > 12 ? "升高（正常約 8–12，依各院參考值）" : "正常",
      flag: ag > 12 ? "hi" : undefined,
    })
    let agUse = ag
    if (alb !== undefined) {
      agUse = ag + 2.5 * (4 - alb)
      rows.push({
        name: "白蛋白校正 AG",
        formula: "AG + 2.5 × (4 − Albumin)",
        value: fmt(agUse),
        note: "低白蛋白會讓 AG 看起來正常，要用校正值判斷",
        flag: agUse > 12 ? "hi" : undefined,
      })
    }
    if (agUse > 12 && hco3 < 24) {
      const dr = (agUse - 12) / (24 - hco3)
      rows.push({
        name: "Delta ratio",
        formula: "(AG − 12) / (24 − HCO₃⁻)",
        value: fmt(dr, 2),
        note:
          dr < 1
            ? "< 1：高 AG 酸中毒合併 normal AG 酸中毒"
            : dr > 2
              ? "> 2：高 AG 酸中毒合併代謝性鹼中毒"
              : "1–2：單純高 AG 代謝性酸中毒",
      })
    }
  }

  if (hco3 !== undefined && hco3 < 24) {
    const exp = 1.5 * hco3 + 8
    let note = "代謝性酸中毒時預期的 PaCO₂（± 2）"
    let flag: Row["flag"]
    if (pco2 !== undefined) {
      if (pco2 < exp - 2) {
        note = `實際 ${pco2} 更低 → 合併呼吸性鹼中毒`
        flag = "lo"
      } else if (pco2 > exp + 2) {
        note = `實際 ${pco2} 更高 → 合併呼吸性酸中毒`
        flag = "hi"
      } else note = `實際 ${pco2} 在範圍內 → 呼吸代償適當`
    }
    rows.push({
      name: "Winter 公式",
      formula: "預期 PaCO₂ = 1.5 × HCO₃⁻ + 8 ± 2",
      value: `${fmt(exp - 2)}–${fmt(exp + 2)}`,
      note,
      flag,
    })
  }
  return rows
}

function build(el: HTMLElement) {
  if (el.dataset.ready) return
  el.dataset.ready = "1"
  const title = el.dataset.title ?? "電解質／酸鹼計算機"
  el.innerHTML = `
    <div class="calc-head"><strong>🧮 ${title}</strong><button type="button" class="calc-clear">清除</button></div>
    <p class="calc-hint">輸入手上有的數值，能算的結果會自動出現（單位見欄位）。</p>
    <div class="calc-grid">
      ${FIELDS.map(
        (f) => `<label><span>${f.label} <small>${f.unit}</small></span>
        <input type="number" step="any" inputmode="decimal" data-k="${f.key}"></label>`,
      ).join("")}
    </div>
    <div class="calc-out"></div>`

  const inputs = Array.from(el.querySelectorAll<HTMLInputElement>("input[data-k]"))
  const out = el.querySelector<HTMLElement>(".calc-out")!

  const render = () => {
    const v: Record<string, number | undefined> = {}
    for (const i of inputs) {
      const n = parseFloat(i.value)
      v[i.dataset.k!] = Number.isFinite(n) ? n : undefined
    }
    const rows = compute(v)
    out.innerHTML = rows.length
      ? `<table><thead><tr><th>項目</th><th>結果</th><th>判讀</th></tr></thead><tbody>${rows
          .map(
            (r) =>
              `<tr class="${r.flag ?? ""}"><td>${r.name}<div class="calc-f">${r.formula}</div></td><td class="calc-v">${r.value}</td><td>${r.note}</td></tr>`,
          )
          .join("")}</tbody></table>`
      : `<p class="calc-empty">尚無足夠數值。例如輸入 Na 和 Glucose，就能算校正血鈉與 effective osmolality。</p>`
  }

  for (const i of inputs) {
    i.addEventListener("input", render)
    window.addCleanup(() => i.removeEventListener("input", render))
  }
  const clear = el.querySelector<HTMLButtonElement>(".calc-clear")!
  const onClear = () => {
    for (const i of inputs) i.value = ""
    render()
  }
  clear.addEventListener("click", onClear)
  window.addCleanup(() => clear.removeEventListener("click", onClear))

  // 可用 data-example="na=151,glu=525" 預先帶入數值
  if (el.dataset.example) {
    for (const pair of el.dataset.example.split(",")) {
      const [k, val] = pair.split("=").map((s) => s.trim())
      const inp = inputs.find((i) => i.dataset.k === k)
      if (inp) inp.value = val
    }
  }
  render()
}

document.addEventListener("nav", () => {
  document.querySelectorAll<HTMLElement>(".center article .calc").forEach(build)
})
