import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "原始檔 GitHub": "https://github.com/youngmd-notes/youngmd-notes.github.io",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.ConditionalRender({
      component: Component.PrintPdf(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.CollapsibleSections(),
    Component.ClinicalCalc(),
    Component.QuizMode(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "筆記分類",
      folderDefaultState: "collapsed",
      sortFn: (a, b) => {
        const order = [
          "nephrology",
          "cardiology",
          "pulmonology",
          "infectious-disease",
          "gastroenterology",
          "endocrinology",
          "hematology-oncology",
          "critical-care",
          "pharmacology",
          "teaching",
        ]
        const ia = order.indexOf(a.slugSegment)
        const ib = order.indexOf(b.slugSegment)
        if (ia !== -1 || ib !== -1) {
          return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib)
        }
        if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
        return a.displayName.localeCompare(b.displayName, "zh-Hant", {
          numeric: true,
          sensitivity: "base",
        })
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      title: "筆記分類",
      folderDefaultState: "collapsed",
      sortFn: (a, b) => {
        const order = [
          "nephrology",
          "cardiology",
          "pulmonology",
          "infectious-disease",
          "gastroenterology",
          "endocrinology",
          "hematology-oncology",
          "critical-care",
          "pharmacology",
          "teaching",
        ]
        const ia = order.indexOf(a.slugSegment)
        const ib = order.indexOf(b.slugSegment)
        if (ia !== -1 || ib !== -1) {
          return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib)
        }
        if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
        return a.displayName.localeCompare(b.displayName, "zh-Hant", {
          numeric: true,
          sensitivity: "base",
        })
      },
    }),
  ],
  right: [],
}
