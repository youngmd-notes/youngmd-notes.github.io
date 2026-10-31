const REPO = "youngmd-notes/notes-sources"
const TOKEN_KEY = "origfig-token"
const AUTO_KEY = "origfig-auto"
const CACHE_NAME = "orig-figs-v1"
const w = window as any
w.__origFigUrls ||= new Map<string, string>()

const getToken = (): string | null => {
  try {
    return localStorage.getItem(TOKEN_KEY)
  } catch {
    return null
  }
}
const getAuto = (): boolean => {
  try {
    return localStorage.getItem(AUTO_KEY) === "on"
  } catch {
    return false
  }
}

const apiUrl = (path: string) =>
  `https://api.github.com/repos/${REPO}/contents/${path.split("/").map(encodeURIComponent).join("/")}`

class FigError extends Error {
  constructor(public kind: "auth" | "notfound" | "network" | "other") {
    super(kind)
  }
}

// 先看這台裝置有沒有存過，沒有才向 GitHub 抓（存下來之後沒網路也能看）
async function loadImage(path: string, token: string): Promise<string> {
  const mem: Map<string, string> = w.__origFigUrls
  if (mem.has(path)) return mem.get(path)!
  const key = `https://orig-figs.local/${path}`
  let cache: Cache | null = null
  try {
    cache = await caches.open(CACHE_NAME)
    const hit = await cache.match(key)
    if (hit) {
      const url = URL.createObjectURL(await hit.blob())
      mem.set(path, url)
      return url
    }
  } catch {}
  let res: Response
  try {
    res = await fetch(apiUrl(path), {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.raw" },
    })
  } catch {
    throw new FigError("network")
  }
  if (res.status === 401 || res.status === 403) throw new FigError("auth")
  if (res.status === 404) throw new FigError("notfound")
  if (!res.ok) throw new FigError("other")
  const blob = new Blob([await res.arrayBuffer()], { type: "image/png" })
  try {
    await cache?.put(key, new Response(blob, { headers: { "Content-Type": "image/png" } }))
  } catch {}
  const url = URL.createObjectURL(blob)
  mem.set(path, url)
  return url
}

const MSG: Record<string, string> = {
  auth: "權杖無效或已過期，請到設定重新貼上。",
  notfound: "找不到原圖，或權杖沒有讀取 notes-sources 的權限。",
  network: "目前沒有網路，而且這張原圖還沒存在這台裝置上。",
  other: "讀取原圖時發生錯誤，請稍後再試。",
}

function render(box: HTMLElement) {
  const paths = (box.dataset.src ?? "").split(",").map((s) => s.trim()).filter(Boolean)
  const label = box.dataset.label ?? "原圖"
  const token = getToken()
  box.innerHTML = ""
  const head = document.createElement("div")
  head.className = "of-head"
  head.innerHTML = `<span class="of-title">📷 原圖：${label}<span class="of-src">（2024 ESC 指引）</span></span>`
  box.appendChild(head)
  const body = document.createElement("div")
  body.className = "of-body"
  box.appendChild(body)

  if (!token) {
    box.classList.add("of-locked")
    head.insertAdjacentHTML("beforeend", `<span class="of-lock">🔒 僅限本人檢視</span>`)
    const set = document.createElement("button")
    set.type = "button"
    set.className = "of-link"
    set.textContent = "設定"
    set.addEventListener("click", openSettings)
    head.appendChild(set)
    return
  }
  box.classList.remove("of-locked")

  const btn = document.createElement("button")
  btn.type = "button"
  btn.className = "of-btn"
  btn.textContent = paths.length > 1 ? `顯示原圖（${paths.length} 頁）` : "顯示原圖"
  head.appendChild(btn)

  const show = async () => {
    if (box.dataset.open === "1") {
      box.dataset.open = "0"
      body.innerHTML = ""
      btn.textContent = paths.length > 1 ? `顯示原圖（${paths.length} 頁）` : "顯示原圖"
      return
    }
    box.dataset.open = "1"
    btn.textContent = "收起原圖"
    body.innerHTML = `<p class="of-msg">載入中…</p>`
    try {
      const urls = await Promise.all(paths.map((p) => loadImage(p, token)))
      body.innerHTML = urls
        .map(
          (u, i) =>
            `<a href="${u}" target="_blank" rel="noopener" title="點圖片可在新分頁放大"><img src="${u}" alt="${label} 原圖${paths.length > 1 ? `（第 ${i + 1} 頁）` : ""}" loading="lazy"/></a>`,
        )
        .join("")
    } catch (e) {
      const kind = e instanceof FigError ? e.kind : "other"
      body.innerHTML = `<p class="of-msg of-err">${MSG[kind]}</p>`
      box.dataset.open = "0"
      btn.textContent = "再試一次"
    }
  }
  btn.addEventListener("click", show)
  if (getAuto()) show()
}

function renderAll() {
  document.querySelectorAll<HTMLElement>(".center article .orig-fig").forEach(render)
}

// 設定視窗：貼上／清除權杖
function openSettings() {
  document.querySelector(".of-backdrop")?.remove()
  const has = !!getToken()
  const bg = document.createElement("div")
  bg.className = "of-backdrop"
  bg.innerHTML = `
    <div class="of-sheet" role="dialog" aria-modal="true" aria-label="原圖設定">
      <div class="of-sheet-title">🔑 原圖檢視設定</div>
      <p class="of-sheet-text">原圖存放在私人資料庫，只有貼上自己 GitHub 權杖的瀏覽器才看得到。權杖只存在這台裝置。</p>
      ${
        has
          ? `<p class="of-ok">✅ 這台裝置已設定權杖</p>`
          : `<label class="of-field"><span>GitHub 權杖（github_pat_ 開頭）</span><input type="password" autocomplete="off" spellcheck="false" placeholder="github_pat_…" /></label>`
      }
      <label class="of-check"><input type="checkbox" ${getAuto() ? "checked" : ""}/> 打開筆記時自動顯示所有原圖</label>
      <p class="of-msg of-status"></p>
      <div class="of-actions">
        ${has ? `<button type="button" class="of-clear">清除權杖與已存原圖</button>` : `<button type="button" class="of-save">驗證並儲存</button>`}
        <button type="button" class="of-close">關閉</button>
      </div>
    </div>`
  document.body.appendChild(bg)
  const status = bg.querySelector<HTMLElement>(".of-status")!
  const close = () => {
    bg.remove()
    renderAll()
  }
  bg.addEventListener("click", (e) => {
    if (e.target === bg || (e.target as Element).closest(".of-close")) close()
  })
  bg.querySelector<HTMLInputElement>(".of-check input")!.addEventListener("change", (e) => {
    try {
      localStorage.setItem(AUTO_KEY, (e.target as HTMLInputElement).checked ? "on" : "off")
    } catch {}
  })
  bg.querySelector(".of-save")?.addEventListener("click", async () => {
    const input = bg.querySelector<HTMLInputElement>(".of-field input")!
    const t = input.value.trim()
    if (!t) {
      status.textContent = "請先貼上權杖。"
      return
    }
    status.textContent = "驗證中…"
    try {
      const r = await fetch(`https://api.github.com/repos/${REPO}`, {
        headers: { Authorization: `Bearer ${t}`, Accept: "application/vnd.github+json" },
      })
      if (!r.ok) throw new Error(String(r.status))
      try {
        localStorage.setItem(TOKEN_KEY, t)
      } catch {
        status.textContent = "這個瀏覽器不允許儲存（可能是無痕模式）。"
        return
      }
      status.textContent = "✅ 驗證成功！之後打開筆記就能看原圖。"
      input.value = ""
      setTimeout(close, 1200)
    } catch {
      status.textContent = "❌ 驗證失敗：權杖錯誤、過期，或沒有勾選 notes-sources 的讀取權限。"
    }
  })
  bg.querySelector(".of-clear")?.addEventListener("click", async () => {
    try {
      localStorage.removeItem(TOKEN_KEY)
    } catch {}
    try {
      await caches.delete(CACHE_NAME)
    } catch {}
    ;(w.__origFigUrls as Map<string, string>).clear()
    status.textContent = "已清除這台裝置上的權杖與原圖。"
    setTimeout(close, 1000)
  })
}
w.__openOrigFigSettings = openSettings

document.addEventListener("nav", () => {
  renderAll()
  // 頁面上的「原圖設定」連結
  document.querySelectorAll<HTMLElement>(".of-settings-link").forEach((a) => {
    a.addEventListener("click", openSettings)
    window.addCleanup(() => a.removeEventListener("click", openSettings))
  })
})
