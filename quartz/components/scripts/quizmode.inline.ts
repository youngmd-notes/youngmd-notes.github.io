const KEY = "quiz-mode"
const SHOWN = "qz-shown"

function readMode(): boolean {
  try {
    return localStorage.getItem(KEY) === "on"
  } catch {
    return false
  }
}
function saveMode(on: boolean) {
  try {
    localStorage.setItem(KEY, on ? "on" : "off")
  } catch {}
}

// 找出「🎯 內專考點」大標底下的題目重點卡
function examCards(article: Element): HTMLElement[] {
  const cards: HTMLElement[] = []
  let inExam = false
  for (const el of Array.from(article.children)) {
    if (el.tagName === "H2") {
      inExam = (el.textContent ?? "").includes("內專考點")
      continue
    }
    if (inExam && el.matches(".callout[data-callout='note']")) cards.push(el as HTMLElement)
  }
  return cards
}

// 把每張卡的答案部分標記起來
function markAnswers(card: HTMLElement) {
  if (card.dataset.qzReady) return
  card.dataset.qzReady = "1"
  card.classList.add("qz-card")
  const content = card.querySelector(".callout-content")
  const blocks = content ? Array.from(content.children) : []

  // 「答」「重點」段落之後全部遮住
  const startIdx = blocks.findIndex((b) => /^(答|重點)\s*[:：]/.test((b.textContent ?? "").trim()))
  if (startIdx !== -1) blocks.slice(startIdx).forEach((b) => b.classList.add("qz-answer"))

  // 「何者錯誤」題型：選項後面的「→ 對／錯」遮住
  card.querySelectorAll("li").forEach((li) => {
    if (li.closest(".qz-answer")) return
    const walker = document.createTreeWalker(li, NodeFilter.SHOW_TEXT)
    let node: Text | null
    while ((node = walker.nextNode() as Text | null)) {
      const idx = node.data.indexOf("→")
      if (idx === -1) continue
      const rest = node.splitText(idx)
      const span = document.createElement("span")
      span.className = "qz-answer qz-inline"
      const parent = rest.parentNode!
      parent.insertBefore(span, rest)
      let sib: Node | null = rest
      while (sib) {
        const next: Node | null = sib.nextSibling
        span.appendChild(sib)
        sib = next
      }
      break
    }
  })
}

function apply(on: boolean) {
  document.documentElement.classList.toggle("quiz-mode", on)
  document.querySelectorAll(`.${SHOWN}`).forEach((el) => el.classList.remove(SHOWN))
  const btn = document.querySelector<HTMLButtonElement>(".qz-toggle")
  if (btn) {
    btn.setAttribute("aria-pressed", String(on))
    btn.querySelector("span")!.textContent = on ? "測驗模式：開" : "測驗模式"
  }
}

function setup() {
  const article = document.querySelector(".center article")
  if (!article) return
  const cards = examCards(article)
  cards.forEach(markAnswers)
  const hasContent = cards.length > 0 || article.querySelector(".text-highlight")
  if (!hasContent) return

  if (!document.querySelector(".qz-toggle")) {
    const btn = document.createElement("button")
    btn.type = "button"
    btn.className = "qz-toggle"
    btn.title = "遮住螢光筆重點和考點卡答案，點擊才顯示"
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/></svg><span>測驗模式</span>'
    const onClick = () => {
      const on = !document.documentElement.classList.contains("quiz-mode")
      saveMode(on)
      apply(on)
    }
    btn.addEventListener("click", onClick)
    window.addCleanup(() => btn.removeEventListener("click", onClick))
    const anchor = document.querySelector(".cs-all") ?? document.querySelector(".print-pdf")
    if (anchor) anchor.after(btn)
    else article.prepend(btn)
  }

  // 點擊遮罩顯示答案；點考點卡的任一答案，整張卡的答案一起顯示
  const onReveal = (e: MouseEvent) => {
    if (!document.documentElement.classList.contains("quiz-mode")) return
    const t = e.target as Element
    const hl = t.closest?.(".text-highlight")
    if (hl) {
      hl.classList.toggle(SHOWN)
      return
    }
    const ans = t.closest?.(".qz-answer")
    if (ans) {
      const card = ans.closest(".qz-card")
      const all = card ? card.querySelectorAll(".qz-answer") : [ans]
      const show = !ans.classList.contains(SHOWN)
      all.forEach((a) => a.classList.toggle(SHOWN, show))
    }
  }
  article.addEventListener("click", onReveal as EventListener)
  window.addCleanup(() => article.removeEventListener("click", onReveal as EventListener))

  apply(readMode())
}

document.addEventListener("nav", setup)
