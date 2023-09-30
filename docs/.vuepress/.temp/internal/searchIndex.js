export const searchIndex = [
  {
    "title": "欢迎",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "这是课题三",
    "headers": [],
    "path": "/topic3/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "多层网络可视组件",
    "headers": [],
    "path": "/topic4/multilayer.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "这是课题四",
    "headers": [],
    "path": "/topic4/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
