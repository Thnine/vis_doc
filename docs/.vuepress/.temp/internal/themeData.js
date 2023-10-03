export const themeData = JSON.parse("{\"logo\":\"/logo.svg\",\"contributors\":false,\"lastUpdatedText\":\"最后一次更新\",\"sidebar\":[{\"text\":\"课题三\",\"link\":\"/topic3/\",\"collapsible\":false,\"children\":[]},{\"text\":\"课题四\",\"link\":\"/topic4/README.md\",\"collapsible\":false,\"children\":[{\"text\":\"多层网络\",\"link\":\"/topic4/multi_layer.md\"},{\"text\":\"特征等高线\",\"link\":\"/topic4/feature_contour.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
