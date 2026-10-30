// @ts-ignore
import printPdfScript from "./scripts/printpdf.inline"
import styles from "./styles/printpdf.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// 「下載 PDF」按鈕：開啟瀏覽器列印視窗，選「另存為 PDF」即可存檔
const PrintPdf: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "print-pdf")} type="button" title="將這篇筆記存成 PDF">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      <span>下載 PDF</span>
    </button>
  )
}

PrintPdf.afterDOMLoaded = printPdfScript
PrintPdf.css = styles

export default (() => PrintPdf) satisfies QuartzComponentConstructor
