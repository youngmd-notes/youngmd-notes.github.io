// @ts-ignore
import script from "./scripts/installapp.inline"
import styles from "./styles/installapp.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// 「加到桌面」按鈕：Android 直接跳出安裝視窗，iPhone 顯示「分享 → 加入主畫面」步驟
const InstallApp: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button
      class={classNames(displayClass, "install-app")}
      type="button"
      title="把內科筆記加到手機桌面"
      aria-label="加到桌面"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M12 7v7" />
        <path d="m9 11 3 3 3-3" />
        <path d="M10.5 18.5h3" />
      </svg>
    </button>
  )
}

InstallApp.afterDOMLoaded = script
InstallApp.css = styles

export default (() => InstallApp) satisfies QuartzComponentConstructor
