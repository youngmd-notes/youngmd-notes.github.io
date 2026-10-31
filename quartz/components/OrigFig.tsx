// @ts-ignore
import script from "./scripts/origfig.inline"
import styles from "./styles/origfig.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

// 私人原圖：筆記中寫 <div class="orig-fig" data-src="心臟科/af-originals/figure-03.png" data-label="Figure 3"></div>
// 原圖放在私人 repo notes-sources；只有在瀏覽器設定過 GitHub 權杖的人（Young 本人）看得到
const OrigFig: QuartzComponent = () => null

OrigFig.afterDOMLoaded = script
OrigFig.css = styles

export default (() => OrigFig) satisfies QuartzComponentConstructor
