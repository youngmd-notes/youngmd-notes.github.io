// @ts-ignore
import script from "./scripts/clinicalcalc.inline"
import styles from "./styles/clinicalcalc.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

// 筆記中寫 <div class="calc" data-calc="lytes"></div>，頁面載入後就會長出電解質／酸鹼計算機
const ClinicalCalc: QuartzComponent = () => null

ClinicalCalc.afterDOMLoaded = script
ClinicalCalc.css = styles

export default (() => ClinicalCalc) satisfies QuartzComponentConstructor
