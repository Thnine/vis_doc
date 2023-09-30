import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
  title: '可视化组件文档',
  description: '可视化组件文档-中南大学',
  theme: defaultTheme({ //主题
    logo:'/logo.svg',
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
                    text:'多层网络可视组件',
                    link:'/topic4/multilayer.md',
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
