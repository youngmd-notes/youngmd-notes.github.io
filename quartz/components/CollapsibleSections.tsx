// @ts-ignore
import script from "./scripts/collapsiblesections.inline"
import styles from "./styles/collapsiblesections.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

// 讓筆記每個大標（h2）可以收合／展開；按鈕由 script 在頁面載入後加上
const CollapsibleSections: QuartzComponent = () => null

CollapsibleSections.afterDOMLoaded = script
CollapsibleSections.css = styles

export default (() => CollapsibleSections) satisfies QuartzComponentConstructor
