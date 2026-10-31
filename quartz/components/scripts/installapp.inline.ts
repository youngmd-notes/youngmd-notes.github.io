type BIPEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> }
const w = window as any

// 只註冊一次（Quartz 換頁不會重新載入整個網頁）
if (!w.__installAppInit) {
  w.__installAppInit = true
  w.__deferredInstall = null as BIPEvent | null

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {})
    })
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault()
    w.__deferredInstall = e as BIPEvent
  })
  window.addEventListener("appinstalled", () => {
    w.__deferredInstall = null
    document.querySelectorAll<HTMLElement>(".install-app").forEach((b) => (b.style.display = "none"))
    closeSheet()
  })
}

function isStandalone(): boolean {
  return (
    window.matchMedia?.("(display-mode: standalone)").matches || (navigator as any).standalone === true
  )
}

function platform(): "ios" | "android" | "desktop" {
  const ua = navigator.userAgent
  const iPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1
  if (/iPhone|iPad|iPod/.test(ua) || iPadOS) return "ios"
  if (/Android/.test(ua)) return "android"
  return "desktop"
}

const SHARE_ICON =
  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m8 7 4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>'
const PLUS_ICON =
  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>'

function steps(): string {
  const p = platform()
  if (p === "ios") {
    return `
      <p class="ia-lead">iPhone／iPad 請用 <b>Safari</b> 打開本站，然後：</p>
      <ol class="ia-steps">
        <li><span class="ia-badge">1</span><span class="ia-text">點畫面下方（iPad 在右上角）的 <b>分享</b> ${SHARE_ICON}</span></li>
        <li><span class="ia-badge">2</span><span class="ia-text">往下滑，點 <b>加入主畫面</b> ${PLUS_ICON}</span></li>
        <li><span class="ia-badge">3</span><span class="ia-text">右上角點 <b>新增</b>，桌面就會出現「內科筆記」</span></li>
      </ol>
      <p class="ia-note">如果是用 LINE、Facebook 等 App 內建瀏覽器打開，請先選「用 Safari 開啟」。</p>`
  }
  if (p === "android") {
    return `
      <p class="ia-lead">Android 請用 <b>Chrome</b> 打開本站，然後：</p>
      <ol class="ia-steps">
        <li><span class="ia-badge">1</span><span class="ia-text">點右上角 <b>⋮</b> 選單</span></li>
        <li><span class="ia-badge">2</span><span class="ia-text">點 <b>加到主畫面</b> 或 <b>安裝應用程式</b></span></li>
        <li><span class="ia-badge">3</span><span class="ia-text">點 <b>安裝</b>，桌面就會出現「內科筆記」</span></li>
      </ol>`
  }
  return `
    <p class="ia-lead">電腦上用 <b>Chrome</b> 或 <b>Edge</b>：</p>
    <ol class="ia-steps">
      <li><span class="ia-badge">1</span><span class="ia-text">點網址列右邊的 <b>安裝</b> 圖示（螢幕加向下箭頭）</span></li>
      <li><span class="ia-badge">2</span><span class="ia-text">或從右上角選單選 <b>安裝內科筆記</b>／<b>應用程式 → 將此網站安裝為應用程式</b></span></li>
    </ol>
    <p class="ia-note">想裝在手機上，用手機打開 <b>${location.host}</b> 再按一次這個按鈕。</p>`
}

function closeSheet() {
  document.querySelector(".ia-backdrop")?.remove()
}

function openSheet() {
  closeSheet()
  const bg = document.createElement("div")
  bg.className = "ia-backdrop"
  bg.innerHTML = `
    <div class="ia-sheet" role="dialog" aria-modal="true" aria-label="加到桌面">
      <div class="ia-head">
        <img src="/static/icon-192.png" alt="" width="44" height="44" />
        <div><div class="ia-title">把內科筆記加到桌面</div><div class="ia-sub">之後點桌面圖示就能直接打開，像 App 一樣全螢幕</div></div>
      </div>
      ${steps()}
      <button type="button" class="ia-close">知道了</button>
    </div>`
  bg.addEventListener("click", (e) => {
    if (e.target === bg || (e.target as Element).closest(".ia-close")) closeSheet()
  })
  document.body.appendChild(bg)
  ;(bg.querySelector(".ia-close") as HTMLElement)?.focus()
}

async function onClick() {
  const ev: BIPEvent | null = w.__deferredInstall
  if (ev) {
    w.__deferredInstall = null
    await ev.prompt()
    return
  }
  openSheet()
}

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") closeSheet()
}

document.addEventListener("nav", () => {
  const standalone = isStandalone()
  for (const btn of document.querySelectorAll<HTMLElement>(".install-app")) {
    if (standalone) {
      btn.style.display = "none"
      continue
    }
    btn.addEventListener("click", onClick)
    window.addCleanup(() => btn.removeEventListener("click", onClick))
  }
  document.addEventListener("keydown", onKey)
  window.addCleanup(() => document.removeEventListener("keydown", onKey))
})
