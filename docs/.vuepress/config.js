import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
  title: '可视化组件文档',
  description: '可视化组件文档-中南大学',
  theme: defaultTheme({ //主题
    logo:'/logo.svg',
    contributors:false,
    lastUpdatedText:'最后一次更新',
    sidebar:[
        {
            text:'课题三',
            link:'/topic3/',
            collapsible:false,
            children:[

            ],
        },
        {
            text:'课题四',
            link:'/topic4/README.md',
            collapsible:false,
            children:[
                {
                    text:'多层网络',
                    link:'/topic4/multi_layer.md',
                },
                {
                    text:'特征等高线',
                    link:'/topic4/feature_contour.md',
                },
                {
                  text:'面向信息流构建的网络通联行为可视化方法',
                  link:'/topic4/mes_flow.md',
              },
              {
                text:'动态弦图',
                link:'/topic4/dynamicparallel.md',
            },
            ]
        }
    ]
  }),
  plugins: [
    searchPlugin({ //搜索插件

    }),

  ],

})
