# 多层网络

本组件能够将多层图数据以多个2.5D节点连接图平面的形式可视化，并呈现平面之间的节点连接关系。

针对各个平面上节点连接图的布局，本组件集成了两种布局算法：力导引布局算法，增强多层网络心理地图保持效果的力引导布局算法[1]。选择合适的布局算法，能够更好的呈现多层图数据的潜在模式。



<div align="center"><img src="/topic4/multi_layer/imgs/comp_consist.png"></div>

<center style="font-size:18px;color:gray;">组件结构</center>



**Demo**：[http://localhost:8080](http://localhost:8080)



## 输入数据

+ 描述：各层的图数据`innerGraphs`和各层之间的连接边数据`outerLinks`，层数不限
+ 类型：均为`Array`，满足json格式

`innerGraphs`是保存了各层的图数据的数组，数组的每一个 元素代表了每一层的图数据，数组从头到尾依次对应多层视图的自顶而下。在每层的图数据中，键值`nodes`对应的是图的点数据数组，其中每一个元素是一个`node`对象，对应每一个点 ；键值`links`对应的是图的边数据数组，其中每一个元素是`link`对象，对应每一条边。

`outerLinks`是保存了层与层之间连接边数据的数组，数组的每一个元素代表了相邻层之间的连接边数据；数组的第`i`个元素对应了第`i`层和第`i+1`层之间的连接数据（最顶层视为第0层），用户可以通过访问每个元素中的键值`links`来获取层之间的连接数据数组，该数组每一个元素是`link`对象，对应每一条边。

`node`对象中`id`属性和`layer`属性是必须的。`id`属性表示节点的唯一标识符，是`string`类型；`layer`属性表示了节点所处层次，是`int`类型，越小的数字代表越上层；除此这两个必选属性外，用户也可以自己添加自定义属性。但是这些自定义属性除了作为额外信息显示以外，不会影响组件视觉效果的呈现。

`link`对象中`source`属性和`target`属性是必须的。`source`属性绑定了起始节点的`id`，`target`属性绑定了目标节点的`id`，且均为`string`类型。除此这两个必选属性外，用户也可以自己添加自定义属性。但是这些自定义属性除了会作为额外信息显示以外，不会影响组件视觉效果的呈现。

数据的样例请详见章节[使用示例](#使用示例)



## 如何使用

### 启动

```javascript
//multi_layer为组件MultiLayer.vue的vue实例，innerGraphs和outerLinks为数据
multi_layer.setData(innerGraphs,outerLinks)
multi_layer.draw()
```

### 布局

在启动前，我们也可以设置组件对单个平面的节点连接图的布局算法（默认力导引算法），因此，需要修改组件内部（MultiLayer.vue）的setInitLayout函数。

```javascript
//力导引布局
async setInitLayout(){
    this.getForceDirectedLayout(this.innerGraphs,this.outerLinks);
}
```

```javascript
//增强多层网络心理地图保持效果的力引导布局算法
async setInitLayout(){//上层节点多于下层节点的情况
    await this.getWangZixiaoLayout_upper_more(this.innerGraphs,this.outerLinks);
}
```

```javascript
//增强多层网络心理地图保持效果的力引导布局算法
async setInitLayout(){//下层节点多于上层节点的情况
    await this.getWangZixiaoLayout_upper_less(this.innerGraphs,this.outerLinks);
}
```

::: warning  注意

如果要使用的增强多层网络心理地图保持效果的力引导布局算法，必须事先启动对应的算法服务。

:::

### 交互

在该组件上，可以实现以下交互：

+ **修改图像样式**：点击设置按钮弹出对应平面的设置界面，可以在此修改该平面的节点大小，连接边粗细等一系列样式。
+ **图像移动与复位**： 当处于缩放模式时（在设置中设置），通过在平面上鼠标拖动以及鼠标滚轮滚动，可以实现节点连接图的移动和放缩；点击平面右侧的复位按钮，可以使得节点连接图的位置和大小恢复到刚好适应平面的状态。
+ **选择和清空选择**：当处于圈选模式时（在设置中设置），用户可以在平面上通过鼠标圈选节点；点击平面右侧的清空按钮，可以清空在该层选择的点。选择和清空选择均会触发[圈选数据](#圈选数据)的外部接口。
+ **翻转式聚焦**：翻转式布局是指通过平面翻转，着重呈现两个平面之间的模式和关系；在设置界面中，将翻转式聚焦选项调为”是“，会将对应平面翻转，并根据和其下方平面的连接关系依靠多层网络心理地图保持效果的力引导布局算法服务重新生成布局。

::: warning  注意

使用翻转式聚焦前，请先启动增强多层网络心理地图保持效果的力引导布局算法服务

:::



## 外部接口

### 发送

#### 圈选数据

+ 接口名称：`exportChosenData`
+ 交互描述：鼠标圈选点或者清空，各层处于圈选状态的点的id会向外发送
+ 数据格式：`array`类型的数据，满足json格式。数组的每一个元素也是一个`array`，对应各层处于圈选状态的id

::: details 样例

```json
[
    ['id_1','id_4'],//第0层被选中的点
    ['id_64','id_77','id_169'],//第1层被选中的点
    ['id_204'],//第2层被选中的点
]
```

:::

如何绑定接口请详见章节[使用示例](#使用示例)

### 接收

暂无接口



## 使用示例

在本示例中，使用的数据为：

::: details innerGraphs数据

```json
[{
	"nodes": [{
		"id": "id_0",
		"layer": 0,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": 1.0,
		"v2": 1.0,
		"ip": "128.12.214.12"
	}, {
		"id": "id_1",
		"layer": 0,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": -1.0,
		"v2": -1.0,
		"ip": "175.190.76.170"
	}],
	"links": [{
		"source": "id_0",
		"target": "id_1",
		"time": "2023-09-02 00:00:00"
	}]
}, {
	"nodes": [{
		"id": "id_2",
		"layer": 1,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": -0.6300062537193298,
		"v2": 1.2661139965057373,
		"ip": "240.68.106.24"
	}, {
		"id": "id_3",
		"layer": 1,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": 0.6300055384635925,
		"v2": -1.2661137580871582,
		"ip": "152.247.190.242"
	}, {
		"id": "id_4",
		"layer": 1,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": -1.2661325931549072,
		"v2": -0.6300442814826965,
		"ip": "110.183.247.183"
	}, {
		"id": "id_5",
		"layer": 1,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": 1.2661333084106445,
		"v2": 0.6300440430641174,
		"ip": "104.117.164.43"
	}],
	"links": [{
		"source": "id_2",
		"target": "id_3",
		"time": "2023-09-01 01:00:00"
	}, {
		"source": "id_2",
		"target": "id_4",
		"time": "2023-09-01 00:00:00"
	}, {
		"source": "id_2",
		"target": "id_5",
		"time": "2023-09-02 00:00:00"
	}, {
		"source": "id_3",
		"target": "id_4",
		"time": "2023-09-02 00:00:00"
	}, {
		"source": "id_3",
		"target": "id_5",
		"time": "2023-09-03 00:00:00"
	}, {
		"source": "id_4",
		"target": "id_5",
		"time": "2023-09-01 01:00:00"
	}]
}, {
	"nodes": [{
		"id": "id_6",
		"layer": 2,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": -0.567392885684967,
		"v2": 1.4012207984924316,
		"ip": "126.46.102.203"
	}, {
		"id": "id_7",
		"layer": 2,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": -0.09675832092761993,
		"v2": -1.5087891817092896,
		"ip": "124.24.54.168"
	}, {
		"id": "id_8",
		"layer": 2,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": 0.7418608665466309,
		"v2": 1.3174396753311157,
		"ip": "195.187.201.115"
	}, {
		"id": "id_9",
		"layer": 2,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": 1.4923847913742065,
		"v2": 0.24137860536575317,
		"ip": "113.174.78.103"
	}, {
		"id": "id_10",
		"layer": 2,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": -1.4495127201080322,
		"v2": 0.430115282535553,
		"ip": "208.170.8.138"
	}, {
		"id": "id_11",
		"layer": 2,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": 1.2397497357596876e-06,
		"v2": -2.627200501592597e-06,
		"ip": "224.140.56.23"
	}, {
		"id": "id_12",
		"layer": 2,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": -1.2398625612258911,
		"v2": -0.8649770021438599,
		"ip": "43.213.68.101"
	}, {
		"id": "id_13",
		"layer": 2,
		"label": [0],
		"copy_label": [0],
		"show": 0,
		"v1": 1.1192796230316162,
		"v2": -1.016385555267334,
		"ip": "49.49.105.11"
	}],
	"links": [{
		"source": "id_6",
		"target": "id_8",
		"time": "2023-09-03 00:00:00"
	}, {
		"source": "id_6",
		"target": "id_9",
		"time": "2023-09-03 00:00:00"
	}, {
		"source": "id_6",
		"target": "id_10",
		"time": "2023-09-01 00:00:00"
	}, {
		"source": "id_6",
		"target": "id_11",
		"time": "2023-09-01 00:00:00"
	}, {
		"source": "id_6",
		"target": "id_12",
		"time": "2023-09-02 00:00:00"
	}, {
		"source": "id_7",
		"target": "id_9",
		"time": "2023-09-01 00:00:00"
	}, {
		"source": "id_7",
		"target": "id_10",
		"time": "2023-09-01 00:00:00"
	}, {
		"source": "id_7",
		"target": "id_11",
		"time": "2023-09-01 00:00:00"
	}, {
		"source": "id_7",
		"target": "id_12",
		"time": "2023-09-01 00:00:00"
	}, {
		"source": "id_7",
		"target": "id_13",
		"time": "2023-09-01 01:00:00"
	}, {
		"source": "id_8",
		"target": "id_9",
		"time": "2023-09-03 00:00:00"
	}, {
		"source": "id_8",
		"target": "id_10",
		"time": "2023-09-02 00:00:00"
	}, {
		"source": "id_8",
		"target": "id_11",
		"time": "2023-09-03 00:00:00"
	}, {
		"source": "id_8",
		"target": "id_13",
		"time": "2023-09-03 00:00:00"
	}, {
		"source": "id_9",
		"target": "id_11",
		"time": "2023-09-01 00:00:00"
	}, {
		"source": "id_9",
		"target": "id_13",
		"time": "2023-09-02 00:00:00"
	}, {
		"source": "id_10",
		"target": "id_11",
		"time": "2023-09-03 00:00:00"
	}, {
		"source": "id_10",
		"target": "id_12",
		"time": "2023-09-02 00:00:00"
	}, {
		"source": "id_11",
		"target": "id_12",
		"time": "2023-09-03 00:00:00"
	}, {
		"source": "id_11",
		"target": "id_13",
		"time": "2023-09-02 00:00:00"
	}, {
		"source": "id_12",
		"target": "id_13",
		"time": "2023-09-02 00:00:00"
	}]
}]
```

:::

::: details outerLinks数据

```json
[{
	"links": [{
		"source": "id_0", 
		"time": "2023-09-02 00:00:00"
	}, {
		"source": "id_0",
		"target": "id_4",
		"time": "2023-09-01 00:00:00"
	}]
}, {
	"links": [{
		"source": "id_4",
		"target": "id_6",
		"time": "2023-09-02 00:00:00"
	}, {
		"source": "id_4",
		"target": "id_13",
		"time": "2023-09-01 00:00:00"
	}, {
		"source": "id_5",
		"target": "id_12",
		"time": "2023-09-01 01:00:00"
	}, {
		"source": "id_3",
		"target": "id_8",
		"time": "2023-09-01 00:00:00"
	}]
}]
```

::: 

我们在设定布局算法为增强多层网络心理地图保持效果的力引导布局算法。

```javascript
//修改组件内部的setInitLayout函数为如下形式
async setInitLayout(){
	await this.getWangZixiaoLayout_upper_less(this.innerGraphs,this.outerLinks);
}
```

绑定接口：

```html
<Multilayer @exportChosenData="handleExportChosenData"><!--Multilayer为多层网络组件-->
```

```javascript
function handleExportChosenData(data){//exportChosenData的处理函数，data为接口传输的数据
	...
}
```

然后开始绘图：

```javascript
const component = this.$refs['MultiLayer'];//这里的component指的是组件MultiLayer.vue的vue实例，采取合理的方法获取即可

component.setData(innerGraphs,outerLinks)
component.draw()
```

绘图效果如下所示：



<div align="center"><img src="/topic4/multi_layer/imgs/example1.png"></div>

<center style="font-size:18px;color:gray;">样例效果</center>





## 引用

[1] 奎晓燕, 王子潇, 郑智浩, 等. 增强多层网络心理地图保持效果的力引导布局算法[J]. 计算机辅助设计与图形学学报
