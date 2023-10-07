<template><div><h1 id="节点属性雷达图可视设计方法" tabindex="-1"><a class="header-anchor" href="#节点属性雷达图可视设计方法" aria-hidden="true">#</a> 节点属性雷达图可视设计方法</h1>
<ol>
<li>
<p>节点属性雷达图是一种观察节点属性分布的图表。当我们有一组节点数据，每个节点有n个属性，我们可以通过节点属性雷达图来可视化节点的属性分布和属性本身的特征，如图所示。</p>
</li>
<li>
<p>节点属性雷达图可以分为两个部分，包括外圈的不同颜色的圆环和内圈的大量小饼图。</p>
</li>
<li>
<p>每个饼图代表一个节点的属性比例，不同颜色的圆环代表不同属性，饼图到各个圆环的距离表示节点与属性的相关程度。距离越近，表示节点与该属性高度相关。因此，我们可以观察所有饼图的位置分布来判断哪些节点与哪些属性相关。</p>
</li>
<li>
<p>圆环本身也编码了属性的统计信息，如非0比例。</p>
</li>
</ol>
<h2 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h2>
<h3 id="输入数据如下-其中属性不定长-但所有记录的属性名称是一致的。" tabindex="-1"><a class="header-anchor" href="#输入数据如下-其中属性不定长-但所有记录的属性名称是一致的。" aria-hidden="true">#</a> 输入数据如下，其中属性不定长，但所有记录的属性名称是一致的。</h3>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token punctuation">[</span>
   <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> node<span class="token operator">:</span> <span class="token string">"192.168.1.1"</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token string">"2020-19-20 10:00"</span><span class="token punctuation">,</span> attr_0<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> attr_n<span class="token operator">:</span> <span class="token number">0.1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> node<span class="token operator">:</span> <span class="token string">"192.168.1.2"</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token string">"2020-19-20 10:00"</span><span class="token punctuation">,</span> attr_0<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> attr_n<span class="token operator">:</span> <span class="token number">0.1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> node<span class="token operator">:</span> <span class="token string">"192.168.1.3"</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token string">"2020-19-20 10:00"</span><span class="token punctuation">,</span> attr_0<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> attr_n<span class="token operator">:</span> <span class="token number">0.1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> node<span class="token operator">:</span> <span class="token string">"192.168.1.4"</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token string">"2020-19-20 10:00"</span><span class="token punctuation">,</span> attr_0<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> attr_n<span class="token operator">:</span> <span class="token number">0.1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> node<span class="token operator">:</span> <span class="token string">"192.168.1.5"</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token string">"2020-19-20 10:00"</span><span class="token punctuation">,</span> attr_0<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> attr_n<span class="token operator">:</span> <span class="token number">0.1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<ol>
<li>获得数据后，组件会根据ip进行聚合（不同的记录可以来自相同的ip），保证每个饼图对应一个ip。聚合方式是累加聚合，即先对相同的attr进行累加平均，再计算不同attr的比例，从而绘制饼图和计算到不同圆环的距离。</li>
<li>单个记录中所有的attr相加为1</li>
</ol>
<h2 id="交互" tabindex="-1"><a class="header-anchor" href="#交互" aria-hidden="true">#</a> 交互</h2>
<p>此组件包含两个交互。</p>
<ol>
<li>
<p>首先是属性过滤，可以点击上方的颜色方块来选中或取消某个属性的展示，方块颜色和圆环颜色一一对应。取消则节点属性雷达图不再计算和显示该属性的圆环，所有饼图也不计算和显示该属性的比例。选中则反之。请注意，初始状态是选中，当取消展示，方块会变得透明，当重新选中，方块的透明度会复原。</p>
</li>
<li>
<p>其次是圈选，可以通过鼠标左键圈选一组饼图。圈选后选中的饼图饱和度提高，未选中的饼图变得透明。选中的饼图的节点id信息将生成一个事件，发送到更上层的组件中。</p>
</li>
</ol>
</div></template>


