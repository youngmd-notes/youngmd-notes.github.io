// 列印前：展開所有折疊提示框、暫時切換成淺色主題、用筆記標題當檔名
// 列印後：恢復原本狀態
let restore: (() => void) | null = null

function prepareForPrint() {
  if (restore) return
  const root = document.documentElement
  const prevTheme = root.getAttribute("saved-theme")
  const prevTitle = document.title

  const opened: HTMLElement[] = []
  document.querySelectorAll<HTMLElement>(".callout.is-collapsed").forEach((el) => {
    el.classList.remove("is-collapsed")
    const content = el.querySelector<HTMLElement>(".callout-content")
    if (content) content.style.gridTemplateRows = "1fr"
    opened.push(el)
  })

  root.setAttribute("saved-theme", "light")
  const heading = document.querySelector(".article-title")?.textContent?.trim()
  if (heading) document.title = heading

  restore = () => {
    opened.forEach((el) => {
      el.classList.add("is-collapsed")
      const content = el.querySelector<HTMLElement>(".callout-content")
      if (content) content.style.gridTemplateRows = "0fr"
    })
    if (prevTheme) root.setAttribute("saved-theme", prevTheme)
    document.title = prevTitle
    restore = null
  }
}

function finishPrint() {
  restore?.()
}

function onClick() {
  prepareForPrint()
  // 等畫面套用展開後的版面再列印
  requestAnimationFrame(() => setTimeout(() => window.print(), 50))
}

window.addEventListener("beforeprint", prepareForPrint)
window.addEventListener("afterprint", finishPrint)

document.addEventListener("nav", () => {
  for (const btn of document.getElementsByClassName("print-pdf")) {
    btn.addEventListener("click", onClick)
    window.addCleanup(() => btn.removeEventListener("click", onClick))
  }
})
