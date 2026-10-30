// 每個 h2 前面加收合按鈕：收起時隱藏該 h2 到下一個 h2 之間的內容
const HIDDEN = "cs-hidden"
const COLLAPSED = "cs-collapsed"

function sectionOf(h2: HTMLElement): HTMLElement[] {
  const items: HTMLElement[] = []
  let el = h2.nextElementSibling as HTMLElement | null
  while (el && el.tagName !== "H2") {
    items.push(el)
    el = el.nextElementSibling as HTMLElement | null
  }
  return items
}

function setCollapsed(h2: HTMLElement, collapsed: boolean) {
  h2.classList.toggle(COLLAPSED, collapsed)
  const btn = h2.querySelector<HTMLButtonElement>(".cs-toggle")
  if (btn) {
    btn.setAttribute("aria-expanded", String(!collapsed))
    btn.title = collapsed ? "展開這一段" : "收起這一段"
  }
  for (const el of sectionOf(h2)) el.classList.toggle(HIDDEN, collapsed)
}

function headings(): HTMLElement[] {
  const article = document.querySelector<HTMLElement>(".center article")
  if (!article) return []
  return Array.from(article.children).filter((el) => el.tagName === "H2") as HTMLElement[]
}

function updateAllButton() {
  const btn = document.querySelector<HTMLButtonElement>(".cs-all")
  if (!btn) return
  const anyOpen = headings().some((h) => !h.classList.contains(COLLAPSED))
  btn.dataset.mode = anyOpen ? "collapse" : "expand"
  btn.querySelector("span")!.textContent = anyOpen ? "全部收合" : "全部展開"
}

// 如果目標（例如目錄點到的小標）在收起的段落裡，先把那段展開
function revealTarget(target: Element | null) {
  if (!target) return
  const article = document.querySelector(".center article")
  if (!article || !article.contains(target)) return
  let top: Element | null = target
  while (top && top.parentElement !== article) top = top.parentElement
  if (!top) return
  if (top.tagName === "H2") return
  let prev = top.previousElementSibling
  while (prev && prev.tagName !== "H2") prev = prev.previousElementSibling
  if (prev && prev.classList.contains(COLLAPSED)) {
    setCollapsed(prev as HTMLElement, false)
    updateAllButton()
    target.scrollIntoView()
  }
}

function revealHash() {
  const id = decodeURIComponent(location.hash.slice(1))
  if (id) revealTarget(document.getElementById(id))
}

function setup() {
  const hs = headings()
  if (hs.length === 0) return

  for (const h2 of hs) {
    if (h2.querySelector(".cs-toggle")) continue
    const btn = document.createElement("button")
    btn.type = "button"
    btn.className = "cs-toggle"
    btn.setAttribute("aria-expanded", "true")
    btn.title = "收起這一段"
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>'
    const onClick = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      setCollapsed(h2, !h2.classList.contains(COLLAPSED))
      updateAllButton()
    }
    btn.addEventListener("click", onClick)
    window.addCleanup(() => btn.removeEventListener("click", onClick))
    h2.prepend(btn)
  }

  // 「全部收合／全部展開」放在下載 PDF 按鈕旁邊
  if (!document.querySelector(".cs-all")) {
    const all = document.createElement("button")
    all.type = "button"
    all.className = "cs-all"
    all.innerHTML =
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg><span>全部收合</span>'
    const onAll = () => {
      const collapse = all.dataset.mode !== "expand"
      for (const h of headings()) setCollapsed(h, collapse)
      updateAllButton()
    }
    all.addEventListener("click", onAll)
    window.addCleanup(() => all.removeEventListener("click", onAll))
    const pdf = document.querySelector(".print-pdf")
    if (pdf) pdf.after(all)
    else hs[0].before(all)
  }
  updateAllButton()

  // 點目錄或頁內連結時，自動展開目標所在段落
  const onLinkClick = (e: MouseEvent) => {
    const a = (e.target as Element).closest?.("a[href*='#']") as HTMLAnchorElement | null
    if (!a || a.pathname !== location.pathname || !a.hash) return
    revealTarget(document.getElementById(decodeURIComponent(a.hash.slice(1))))
  }
  document.addEventListener("click", onLinkClick, true)
  window.addCleanup(() => document.removeEventListener("click", onLinkClick, true))
  window.addEventListener("hashchange", revealHash)
  window.addCleanup(() => window.removeEventListener("hashchange", revealHash))
  revealHash()
}

document.addEventListener("nav", setup)
