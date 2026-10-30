// @ts-ignore
import script from "./scripts/quizmode.inline"
import styles from "./styles/quizmode.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

// 測驗模式：遮住螢光筆重點與內專考點卡的答案，點擊才顯示
const QuizMode: QuartzComponent = () => null

QuizMode.afterDOMLoaded = script
QuizMode.css = styles

export default (() => QuizMode) satisfies QuartzComponentConstructor
