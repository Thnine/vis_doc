<template><div><h1 id="基于多层网络的2-5d可视化" tabindex="-1"><a class="header-anchor" href="#基于多层网络的2-5d可视化" aria-hidden="true">#</a> 基于多层网络的2.5D可视化</h1>
<p>本组件能够将多层图数据以多个2.5D节点连接图平面的形式可视化，并呈现平面之间的节点连接关系。</p>
<p>针对各个平面上节点连接图的布局，本组件集成了两种布局算法：力导引布局算法，增强多层网络心理地图保持效果的力引导布局算法[1]。选择合适的布局算法，能够更好的呈现多层图数据的潜在模式。</p>
<div align="center"><img src="/topic4/multi_layer/imgs/comp_consist.png"></div>
<center style="font-size:18px;color:gray;">组件结构</center>
<p><strong>Demo</strong>：<a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080<ExternalLinkIcon/></a></p>
<h2 id="输入数据" tabindex="-1"><a class="header-anchor" href="#输入数据" aria-hidden="true">#</a> 输入数据</h2>
<ul>
<li>描述：各层的图数据<code v-pre>innerGraphs</code>和各层之间的连接边数据<code v-pre>outerLinks</code>，层数不限</li>
<li>类型：均为<code v-pre>Array</code>，满足json格式</li>
</ul>
<p><code v-pre>innerGraphs</code>是保存了各层的图数据的数组，数组的每一个 元素代表了每一层的图数据，数组从头到尾依次对应多层视图的自顶而下。在每层的图数据中，键值<code v-pre>nodes</code>对应的是图的点数据数组，其中每一个元素是一个<code v-pre>node</code>对象，对应每一个点 ；键值<code v-pre>links</code>对应的是图的边数据数组，其中每一个元素是<code v-pre>link</code>对象，对应每一条边。</p>
<p><code v-pre>outerLinks</code>是保存了层与层之间连接边数据的数组，数组的每一个元素代表了相邻层之间的连接边数据；数组的第<code v-pre>i</code>个元素对应了第<code v-pre>i</code>层和第<code v-pre>i+1</code>层之间的连接数据（最顶层视为第0层），用户可以通过访问每个元素中的键值<code v-pre>links</code>来获取层之间的连接数据数组，该数组每一个元素是<code v-pre>link</code>对象，对应每一条边。</p>
<p><code v-pre>node</code>对象中<code v-pre>id</code>属性和<code v-pre>layer</code>属性是必须的。<code v-pre>id</code>属性表示节点的唯一标识符，是<code v-pre>string</code>类型；<code v-pre>layer</code>属性表示了节点所处层次，是<code v-pre>int</code>类型，越小的数字代表越上层；除此这两个必选属性外，用户也可以自己添加自定义属性。但是这些自定义属性除了作为额外信息显示以外，不会影响组件视觉效果的呈现。</p>
<p><code v-pre>link</code>对象中<code v-pre>source</code>属性和<code v-pre>target</code>属性是必须的。<code v-pre>source</code>属性绑定了起始节点的<code v-pre>id</code>，<code v-pre>target</code>属性绑定了目标节点的<code v-pre>id</code>，且均为<code v-pre>string</code>类型。除此这两个必选属性外，用户也可以自己添加自定义属性。但是这些自定义属性除了会作为额外信息显示以外，不会影响组件视觉效果的呈现。</p>
<p>数据的样例请详见章节<a href="#%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">使用示例</a></p>
<h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2>
<h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//multi_layer为组件MultiLayer.vue的vue实例，innerGraphs和outerLinks为数据</span>
multi_layer<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>innerGraphs<span class="token punctuation">,</span>outerLinks<span class="token punctuation">)</span>
multi_layer<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h3>
<p>在启动前，我们也可以设置组件对单个平面的节点连接图的布局算法（默认力导引算法），因此，需要修改组件内部（MultiLayer.vue）的setInitLayout函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//力导引布局</span>
<span class="token keyword">async</span> <span class="token function">setInitLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getForceDirectedLayout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>innerGraphs<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>outerLinks<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//增强多层网络心理地图保持效果的力引导布局算法</span>
<span class="token keyword">async</span> <span class="token function">setInitLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//上层节点多于下层节点的情况</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getWangZixiaoLayout_upper_more</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>innerGraphs<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>outerLinks<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//增强多层网络心理地图保持效果的力引导布局算法</span>
<span class="token keyword">async</span> <span class="token function">setInitLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//下层节点多于上层节点的情况</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getWangZixiaoLayout_upper_less</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>innerGraphs<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>outerLinks<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>如果要使用的增强多层网络心理地图保持效果的力引导布局算法，必须事先启动对应的算法服务。</p>
</div>
<h3 id="交互" tabindex="-1"><a class="header-anchor" href="#交互" aria-hidden="true">#</a> 交互</h3>
<p>在该组件上，可以实现以下交互：</p>
<ul>
<li><strong>修改图像样式</strong>：点击设置按钮弹出对应平面的设置界面，可以在此修改该平面的节点大小，连接边粗细等一系列样式。</li>
<li><strong>图像移动与复位</strong>： 当处于缩放模式时（在设置中设置），通过在平面上鼠标拖动以及鼠标滚轮滚动，可以实现节点连接图的移动和放缩；点击平面右侧的复位按钮，可以使得节点连接图的位置和大小恢复到刚好适应平面的状态。</li>
<li><strong>选择和清空选择</strong>：当处于圈选模式时（在设置中设置），用户可以在平面上通过鼠标圈选节点；点击平面右侧的清空按钮，可以清空在该层选择的点。选择和清空选择均会触发<a href="#%E5%9C%88%E9%80%89%E6%95%B0%E6%8D%AE">圈选数据</a>的外部接口。</li>
<li><strong>翻转式聚焦</strong>：翻转式布局是指通过平面翻转，着重呈现两个平面之间的模式和关系；在设置界面中，将翻转式聚焦选项调为”是“，会将对应平面翻转，并根据和其下方平面的连接关系依靠多层网络心理地图保持效果的力引导布局算法服务重新生成布局。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>使用翻转式聚焦前，请先启动增强多层网络心理地图保持效果的力引导布局算法服务</p>
</div>
<h2 id="外部接口" tabindex="-1"><a class="header-anchor" href="#外部接口" aria-hidden="true">#</a> 外部接口</h2>
<h3 id="发送" tabindex="-1"><a class="header-anchor" href="#发送" aria-hidden="true">#</a> 发送</h3>
<h4 id="圈选数据" tabindex="-1"><a class="header-anchor" href="#圈选数据" aria-hidden="true">#</a> 圈选数据</h4>
<ul>
<li>接口名称：<code v-pre>exportChosenData</code></li>
<li>交互描述：鼠标圈选点或者清空，各层处于圈选状态的点的id会向外发送</li>
<li>数据格式：<code v-pre>array</code>类型的数据，满足json格式。数组的每一个元素也是一个<code v-pre>array</code>，对应各层处于圈选状态的id</li>
</ul>
<details class="custom-container details"><summary>样例</summary>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">[</span>'id_1'<span class="token punctuation">,</span>'id_4'<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//第0层被选中的点</span>
    <span class="token punctuation">[</span>'id_64'<span class="token punctuation">,</span>'id_77'<span class="token punctuation">,</span>'id_169'<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//第1层被选中的点</span>
    <span class="token punctuation">[</span>'id_204'<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//第2层被选中的点</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>如何绑定接口请详见章节<a href="#%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">使用示例</a></p>
<h3 id="接收" tabindex="-1"><a class="header-anchor" href="#接收" aria-hidden="true">#</a> 接收</h3>
<p>暂无接口</p>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2>
<p>在本示例中，使用的数据为：</p>
<details class="custom-container details"><summary>innerGraphs数据</summary>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
	<span class="token property">"nodes"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_0"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"128.12.214.12"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_1"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">-1.0</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">-1.0</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"175.190.76.170"</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_0"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_1"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"nodes"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_2"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">-0.6300062537193298</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">1.2661139965057373</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"240.68.106.24"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_3"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">0.6300055384635925</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">-1.2661137580871582</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"152.247.190.242"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_4"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">-1.2661325931549072</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">-0.6300442814826965</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"110.183.247.183"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_5"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">1.2661333084106445</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">0.6300440430641174</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"104.117.164.43"</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_2"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_3"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 01:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_2"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_4"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_2"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_5"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_3"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_4"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_3"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_5"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-03 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_4"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_5"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 01:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"nodes"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_6"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">-0.567392885684967</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">1.4012207984924316</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"126.46.102.203"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_7"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">-0.09675832092761993</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">-1.5087891817092896</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"124.24.54.168"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_8"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">0.7418608665466309</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">1.3174396753311157</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"195.187.201.115"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_9"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">1.4923847913742065</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">0.24137860536575317</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"113.174.78.103"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_10"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">-1.4495127201080322</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">0.430115282535553</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"208.170.8.138"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_11"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">1.2397497357596876e-06</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">-2.627200501592597e-06</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"224.140.56.23"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_12"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">-1.2398625612258911</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">-0.8649770021438599</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"43.213.68.101"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id_13"</span><span class="token punctuation">,</span>
		<span class="token property">"layer"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">"label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"copy_label"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">"show"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">"v1"</span><span class="token operator">:</span> <span class="token number">1.1192796230316162</span><span class="token punctuation">,</span>
		<span class="token property">"v2"</span><span class="token operator">:</span> <span class="token number">-1.016385555267334</span><span class="token punctuation">,</span>
		<span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"49.49.105.11"</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_6"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_8"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-03 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_6"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_9"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-03 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_6"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_10"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_6"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_11"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_6"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_12"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_7"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_9"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_7"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_10"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_7"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_11"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_7"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_12"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_7"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_13"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 01:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_8"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_9"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-03 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_8"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_10"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_8"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_11"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-03 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_8"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_13"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-03 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_9"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_11"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_9"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_13"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_10"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_11"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-03 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_10"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_12"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_11"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_12"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-03 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_11"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_13"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_12"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_13"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="custom-container details"><summary>outerLinks数据</summary>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
	<span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_0"</span><span class="token punctuation">,</span> 
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_0"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_4"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_4"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_6"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-02 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_4"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_13"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_5"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_12"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 01:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"id_3"</span><span class="token punctuation">,</span>
		<span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"id_8"</span><span class="token punctuation">,</span>
		<span class="token property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-09-01 00:00:00"</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>我们在设定布局算法为增强多层网络心理地图保持效果的力引导布局算法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//修改组件内部的setInitLayout函数为如下形式</span>
<span class="token keyword">async</span> <span class="token function">setInitLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getWangZixiaoLayout_upper_less</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>innerGraphs<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>outerLinks<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定接口：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Multilayer</span> <span class="token attr-name">@exportChosenData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleExportChosenData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token comment">&lt;!--Multilayer为多层网络组件--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">handleExportChosenData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//exportChosenData的处理函数，data为接口传输的数据</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后开始绘图：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">'MultiLayer'</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//这里的component指的是组件MultiLayer.vue的vue实例，采取合理的方法获取即可</span>

component<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>innerGraphs<span class="token punctuation">,</span>outerLinks<span class="token punctuation">)</span>
component<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绘图效果如下所示：</p>
<div align="center"><img src="/topic4/multi_layer/imgs/example1.png"></div>
<center style="font-size:18px;color:gray;">样例效果</center>
<h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2>
<p>[1] 奎晓燕, 王子潇, 郑智浩, 等. 增强多层网络心理地图保持效果的力引导布局算法[J]. 计算机辅助设计与图形学学报</p>
</div></template>


