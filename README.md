## 如何启动项目

1. 安装依赖

   ```
   yarn install
   或
   npm install
   ```

2. 启动项目

   ```
   yarn docs:dev
   npm run docs:dev
   ```

3. 进入http://localhost:8088/



## 如何添加文档

1. 在`docs`下的对应课题目录（topic3或者topic4）下添加markdown文档
2. 在`docs/.vuepress/config.js`中配置项的theme->sidebar中绑定新添加文档的位置
3. 把markdown文档中用到的图片放到`docs/.vuepress/public`中的对应位置下