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
    "title": "特征等高线增强的多维数据投影视图可视设计",
    "headers": [
      {
        "level": 2,
        "title": "输入数据",
        "slug": "输入数据",
        "link": "#输入数据",
        "children": []
      },
      {
        "level": 2,
        "title": "如何使用",
        "slug": "如何使用",
        "link": "#如何使用",
        "children": [
          {
            "level": 3,
            "title": "启动",
            "slug": "启动",
            "link": "#启动",
            "children": []
          },
          {
            "level": 3,
            "title": "交互",
            "slug": "交互",
            "link": "#交互",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "外部接口",
        "slug": "外部接口",
        "link": "#外部接口",
        "children": [
          {
            "level": 3,
            "title": "发送",
            "slug": "发送",
            "link": "#发送",
            "children": []
          },
          {
            "level": 3,
            "title": "接收",
            "slug": "接收",
            "link": "#接收",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "使用示例",
        "slug": "使用示例",
        "link": "#使用示例",
        "children": []
      }
    ],
    "path": "/topic4/feature_contour.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "面向信息流构建的网络通联行为可视化方法",
    "headers": [
      {
        "level": 2,
        "title": "输入数据",
        "slug": "输入数据",
        "link": "#输入数据",
        "children": []
      },
      {
        "level": 2,
        "title": "如何使用",
        "slug": "如何使用",
        "link": "#如何使用",
        "children": [
          {
            "level": 3,
            "title": "启动",
            "slug": "启动",
            "link": "#启动",
            "children": []
          },
          {
            "level": 3,
            "title": "导入数据",
            "slug": "导入数据",
            "link": "#导入数据",
            "children": []
          },
          {
            "level": 3,
            "title": "数据筛选",
            "slug": "数据筛选",
            "link": "#数据筛选",
            "children": []
          },
          {
            "level": 3,
            "title": "消息流绘制",
            "slug": "消息流绘制",
            "link": "#消息流绘制",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "外部接口",
        "slug": "外部接口",
        "link": "#外部接口",
        "children": [
          {
            "level": 3,
            "title": "数据导出",
            "slug": "数据导出",
            "link": "#数据导出",
            "children": []
          }
        ]
      }
    ],
    "path": "/topic4/mes_flow.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "基于多层网络的2.5D可视化",
    "headers": [
      {
        "level": 2,
        "title": "输入数据",
        "slug": "输入数据",
        "link": "#输入数据",
        "children": []
      },
      {
        "level": 2,
        "title": "如何使用",
        "slug": "如何使用",
        "link": "#如何使用",
        "children": [
          {
            "level": 3,
            "title": "启动",
            "slug": "启动",
            "link": "#启动",
            "children": []
          },
          {
            "level": 3,
            "title": "布局",
            "slug": "布局",
            "link": "#布局",
            "children": []
          },
          {
            "level": 3,
            "title": "交互",
            "slug": "交互",
            "link": "#交互",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "外部接口",
        "slug": "外部接口",
        "link": "#外部接口",
        "children": [
          {
            "level": 3,
            "title": "发送",
            "slug": "发送",
            "link": "#发送",
            "children": []
          },
          {
            "level": 3,
            "title": "接收",
            "slug": "接收",
            "link": "#接收",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "使用示例",
        "slug": "使用示例",
        "link": "#使用示例",
        "children": []
      },
      {
        "level": 2,
        "title": "引用",
        "slug": "引用",
        "link": "#引用",
        "children": []
      }
    ],
    "path": "/topic4/multi_layer.html",
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
