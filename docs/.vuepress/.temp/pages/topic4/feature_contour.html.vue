<template><div><h1 id="特征等高线增强的多维数据投影视图可视设计" tabindex="-1"><a class="header-anchor" href="#特征等高线增强的多维数据投影视图可视设计" aria-hidden="true">#</a> 特征等高线增强的多维数据投影视图可视设计</h1>
<p>本组件主要用于呈现高维数据的分布模式，以及交互式补全缺失的类型。</p>
<div align="center"><img src="/topic4/feature_contour/imgs/界面介绍.png"></div>
<center style="font-size:18px;color:gray;">组件界面</center>
<p><strong>Demo</strong>：<a href="http://localhost:8081" target="_blank" rel="noopener noreferrer">http://localhost:8081<ExternalLinkIcon/></a></p>
<h2 id="输入数据" tabindex="-1"><a class="header-anchor" href="#输入数据" aria-hidden="true">#</a> 输入数据</h2>
<ul>
<li>描述：需要补全类别的高维数据</li>
<li>类型：<code v-pre>Array</code>，满足json格式。</li>
</ul>
<p>数据的每一个元素代表一条高维数据，高维数据为<code v-pre>object</code>格式。</p>
<p>每条高维数据中，必须包含<code v-pre>id</code>属性和<code v-pre>label</code>属性。<code v-pre>id</code>属性是该高维数据的唯一标识符，为<code v-pre>String</code>类型；<code v-pre>label</code>属性是该高维数据的类型，为<code v-pre>String</code>类型，如果该高维数据类型缺失，则用空字符串表示；剩下的属性则全部被当作高维数据的特征值，为<code v-pre>Number</code>类型。</p>
<p>数据的样例请详见章节<a href="#%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">使用示例</a></p>
<h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2>
<h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//component为ComponentContainer.vue的vue对象，data为数据</span>
component<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交互" tabindex="-1"><a class="header-anchor" href="#交互" aria-hidden="true">#</a> 交互</h3>
<p>在该组件上，可以支持以下交互：</p>
<ul>
<li><strong>特征排序与还原</strong>：点击特征分布直方图中的排序按钮，依据EMD指标，特征分布直方图会将在各个类别上分布差异大的特征排在靠前的位置；点击还原按钮，特征恢复初始排序。</li>
<li><strong>特征选择与清空</strong>：在特征分布直方图中，点击特征名前的方框可以选择该特征，点击下方确定按钮，特征分布直方图会将选中特征送往投影视图计算投影；点击重置按钮，可以将选中的特征清空。</li>
<li><strong>图像移动</strong>：当投影视图处于查看模式时，通过在平面上鼠标拖动以及鼠标滚轮滚动，可以实现节点连接图的移动和放缩。</li>
<li><strong>圈选标注</strong>：当投影视图处于圈选模式时，通过鼠标在投影视图上圈选事件类型未确定的点，然后可以通过标注工具中蓝色标注按钮将这些全选点标注为某一类型；也可以通过标注工具中红色清空按钮将标注全部清空。</li>
</ul>
<h2 id="外部接口" tabindex="-1"><a class="header-anchor" href="#外部接口" aria-hidden="true">#</a> 外部接口</h2>
<h3 id="发送" tabindex="-1"><a class="header-anchor" href="#发送" aria-hidden="true">#</a> 发送</h3>
<p>暂无接口</p>
<h3 id="接收" tabindex="-1"><a class="header-anchor" href="#接收" aria-hidden="true">#</a> 接收</h3>
<p>暂无接口</p>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2>
<p>在本示例中，使用的数据为：</p>
<details class="custom-container details"><summary>数据样例</summary>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-1.2414250887923688</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">16.02069011892632</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-14.674924382930977</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.221774175688749</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.19682574794874633</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">1.8077318846417616</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-26.433089722093484</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.3847608617343755</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.207547941774433</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">36.9045900321906</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id1"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">2.0152869094664645</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.956398353469611</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.72526553446683</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.042866455086477</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-1.741180564584957</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.29817990009581724</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-12.246797792133481</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.798652021660696</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">16.579134554649286</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">9.745782279625882</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id2"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.1265062842904045</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.13976674599973</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.149002891290618</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">16.169900959148947</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.5751218426621376</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.018905027611827475</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">28.252523602339412</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.09252437142149669</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-14.882068948294542</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-38.827132603491506</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id3"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.9594484540818086</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">17.299000567540148</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-14.09282685920838</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-16.206010396863235</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">2.262695124878923</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.5872483642557221</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-28.270081379074014</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.9416564341836741</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.437259056399991</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">38.604708960861046</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id4"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.7712716188191164</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">11.376618196458814</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-16.85456297984462</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-13.51827119035721</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.5711531579882674</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.4458310580353146</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-26.075200857536032</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.15872035384505825</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.949156094351313</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">37.385105237112626</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id5"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.0754973319882632</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-14.16679597613705</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">17.99065902490222</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-13.555891081718805</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">2.5458174629335497</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.4457671388993039</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">2.005943817465584</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.7610301690732401</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-15.200484034490218</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-13.793272442679804</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id6"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.4657114844210143</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.530750867129235</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.41788416551562</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.23659096317527</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.28525236678401744</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.813837069317107</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-11.700955775066548</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.1063149183622412</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.806166407909084</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">8.528635787129812</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id7"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.32748354005147406</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.13675734669208</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-15.148135486385371</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-12.766866338426793</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.07781373212159917</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.08913417148961812</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-24.800435160047677</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.1639867146627897</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.305098860251373</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">35.19754049404086</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id8"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.3345672932437567</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.246646113804585</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">13.606181077772618</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.611216685367493</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.8630142686342073</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.9932694351991143</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-13.039901011636418</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">1.9377583884909757</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.53466492576186</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">10.803856602181844</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id9"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.871177055694949</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">16.826754297779797</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-13.896157010569354</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.335930981309179</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.9232663187849149</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.33542487038855145</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-27.03818079722609</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.18447933897009788</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.005707199168222</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">36.98383251158758</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id10"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.052456812107899306</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.789639479809587</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">17.131186651361453</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-12.829576471673876</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.3834091266198556</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.12214774124747234</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-8.689467284279436</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.9816964587390017</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.124996096031449</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">4.816547184489568</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id11"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.3158721109718934</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-16.403646498685582</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.446427606798085</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.697015838963184</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.20073250269174622</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.7232203404303822</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-0.5399350319206393</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.5409113515761638</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-17.05529980037753</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-10.582700165829866</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id12"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.5104760939171908</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.170222905217253</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-15.112423558791358</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.602131298712408</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">1.2375322101255277</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">1.9274730781439102</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-27.414985593977292</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.0973840342890294</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.286981216167264</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">37.80103582686373</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id13"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-1.119533267680564</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-14.16724629852097</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.090685296236806</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">14.25294396271351</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.3601392172657078</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.224493563450259</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">26.495404003623538</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">1.5389071927571691</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-16.44720831175709</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-37.27584116990005</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id14"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.9851374971641317</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-14.694999154524616</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.575084854796666</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">15.018561210923679</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.9048577843273612</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.5069979883537572</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">27.427394989004263</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.78837206482386</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-15.596536183434601</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-38.29898994392518</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id15"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.3653615666942511</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-14.836129453497737</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">13.015805943393794</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">14.96169233645445</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.7155825031962314</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.5889498414231847</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">26.159953863064157</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.8748282367781273</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-16.071918222512657</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-35.97800653871385</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id16"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.8915592861787779</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-14.728295899334874</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.155854092815638</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.48694233098162</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.7578951773126009</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.9022740934096822</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-1.025177812709206</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.14663345850982493</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-13.275681186949639</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-8.705436870129443</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id17"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.8361256032475558</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.78552323051297</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">16.337615445151933</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">15.414190827388959</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.4525193109851076</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.27106432546011355</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">28.00256433877827</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">1.081089029110012</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-13.03524849675507</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-38.80103278881517</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id18"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.1427754349834511</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.270086261091368</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.70934761622155</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">14.907721757781488</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.9580016336622985</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.18266622083868153</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">26.879511563766254</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.12134833340430361</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-14.865547599838445</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-37.25819589547963</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id19"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.6964900068313086</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.261647408321211</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-14.83328335630404</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.66788497574369</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.40604845177115867</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.06387896296469592</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-26.669503307670297</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.9413598171995204</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.55232055258344</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">37.04383114251851</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id20"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-1.4625985806440753</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-13.902012473371814</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.522592738947921</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">16.22658042776899</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.4819944427350777</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.685993892122359</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">28.529180195114</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.19446681669045815</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-16.668630941715172</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-39.534153623838996</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id21"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.04066663786725943</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.890168426440681</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">12.885269938053352</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-19.07441854713342</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.15088186908352058</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.34515681538815757</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-5.201024359098367</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.5711228284618934</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-16.39636495779358</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-4.60623942364161</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id22"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.5364597144933718</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.182960626207333</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.24771468073796</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">14.488850806086933</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.9443077635914823</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.3647233561167325</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">26.614433697539116</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">1.0135011536892253</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-14.007270788803027</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-37.06729178519296</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id23"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.8919779162959487</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.161745932487241</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-15.45059981523744</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-16.738840648004963</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.29824247742687127</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.6062473823349179</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-28.84306221400974</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.3290602003755593</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.555003239866545</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">39.62247486510019</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id24"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.91388523050796</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.91903069966865</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">16.31055068047878</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.629291766185982</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.35716136703779616</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.4563364421519057</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-11.722275687921437</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.4855868779546575</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.045926094413979</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">8.21785119377602</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id25"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.09866069669489914</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">12.862052902008669</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.501600430899504</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-13.393031621385543</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.5571176119647873</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.6953344175851406</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-9.173241573442093</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.4073727642616851</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">13.352059821717106</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">5.523588983504526</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id26"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.8090273248899418</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-14.12689423423259</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.407582257857833</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">14.580147422596667</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.6540099625931998</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.5917368813949216</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">26.359129746913027</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.259115902959944</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-15.947625081507319</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-36.73627677834702</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id27"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.16915219211485227</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-18.745558796293558</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">17.082540183180193</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.133900223832379</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.4072232951404793</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.3477856681802438</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">1.4196115174520854</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.03645751416202663</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-17.7898779522209</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-13.559770989390614</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id28"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.5357620878044713</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">17.30323550238977</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.392064600552267</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-13.591065487944586</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.6796864767168643</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.7127206170998179</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-10.875208791870449</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.5627489599117541</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">16.854058255753188</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">8.204108533618264</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id29"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.14722276103474127</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.868211297517046</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.88582408471937</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.187037020062352</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.9415540426785047</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.27926316935818024</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-11.576933651780122</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.28738260675068733</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.39961196876094</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">8.326253831127035</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id30"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-1.2646433988442571</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.309715752187088</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">12.180559192368833</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-17.345563412648563</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-1.1034806492130225</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-2.3466829249949743</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-15.561898319351549</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.18274795775062413</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">16.5806452777032</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">14.172331840304349</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id31"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.102867399255764</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.787060984672777</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.094334843098546</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-17.338657873931556</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.5171370215036638</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.11681968070731573</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-14.233276301805919</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.0495769387892044</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.13744152313174</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">11.678798230204134</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id32"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.1906867064610802</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-13.980314674658409</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.182205688018863</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">13.557421637876136</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-1.1758077160487277</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.5418030533271134</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">25.25994274467058</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.8230014157584036</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-15.91728605393659</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-35.51878651273858</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id33"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.47247899260650544</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-17.762913065867593</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">17.253814401051336</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.80638847883984</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.6874619165990187</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">1.0927300982251087</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">0.5170590010804821</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.5902885195179143</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-16.739371851936692</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-12.475271289564674</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id34"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.7022167600684582</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.687718583621995</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.527792633710316</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.078456088454514</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.13172526605059223</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.402077312168826</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-10.236384019304394</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.4102162918391816</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">13.785581207822199</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">6.768575235374219</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id35"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.7006690933859807</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-14.623494340106058</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.063233104911014</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.23986713213741</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.5332396492615624</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.3096885503344836</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-0.783993178651528</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">1.8613900568161366</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-13.786581499437853</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-8.995521330328845</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id36"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.47077707546340913</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.885296249158733</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">13.450581031711154</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-16.416569052168846</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.4252477385130091</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.6401780914623758</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-13.753490867194458</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.905134703708993</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.284801092486532</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">11.520324192764813</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id37"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.5069185828595256</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.293932801638267</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-14.762198315429075</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-16.966813240785754</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-1.4880363651899193</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-3.1888246597902876</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-28.800833608607544</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.03833902068162574</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.739181770567363</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">39.18556297336163</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id38"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.3408345054041189</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.325758210293756</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">17.114939817960014</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">16.74370908230508</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">1.011442485157259</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.7258217458675992</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">29.764529347624645</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.45747138336661713</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-14.434015786441831</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-41.1517854174122</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id39"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.7703176848749859</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">17.554340185492467</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-13.77121800827659</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.772180179382897</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.5821907039669699</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">1.5904433005442735</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-26.63551325083607</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.008176851539499767</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.233110513877918</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">36.61052508627081</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id40"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.7824442749379995</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-13.691972714134904</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">12.331872143221828</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">13.067644024138625</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">1.0599686322804804</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.7435828845234789</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">24.046362762304145</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.1573477114522042</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-17.509382854802368</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-33.75433795460309</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id41"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.8419477209870208</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-14.000533523934727</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.566509456069001</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-13.559738736011724</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-1.2447031354078215</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.2688963703207076</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">0.3981089067734018</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.8884236759326704</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-13.180429488909681</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-10.703628509436912</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id42"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.9508899673103335</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-13.651588313604307</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">13.614306048179126</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.60589207576183</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.06530061945795723</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.9972918595162122</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-2.441961085184314</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.77730847406202</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-14.02694403783715</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-7.1190620095330726</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id43"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.1327547816752952</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.071807409367546</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.918445942848782</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.19583877056379</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.6068745366004746</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">1.5868521253042553</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-10.909672521019862</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-2.3463212627537295</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.868577560969038</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">7.943768342417723</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id44"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.022376754521019</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-13.18218506438144</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">13.17923047919703</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.482116498609521</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.1371043822201366</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.7350144089035343</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-1.8774106232863819</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.6887110472703054</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-13.035479308045254</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-7.275036356789631</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id45"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.141356636232045</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.336148856691592</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-14.642144467144549</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.257931153341955</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">1.1203462376170865</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">1.9326672095012112</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-26.122537470477063</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.12814202553617488</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.026771505712018</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">36.31532075620028</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id46"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.05746465946368573</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-13.38509917734568</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">16.101577719976675</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-12.534890330024787</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-1.6012556290259452</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-2.053652503077188</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">1.5905963022936804</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">1.9358956296852183</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-13.758704162576038</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-12.211063441731602</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id47"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.058243230922193974</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-16.9588598045221</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.498155950102664</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-17.163323129663926</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.5170306041065873</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.2009279032379071</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-1.8399425850158568</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">1.2840997299344614</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-16.550489747644175</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-9.241002774271422</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id48"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.31794440803174656</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.377775808349892</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">13.563660955945616</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.82177677182646</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.5128915412008073</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.3234017681196335</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-13.032786272929616</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.43267869696316424</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.238013090510261</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">10.707900316197035</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id49"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.9086325431363935</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-12.046004106964423</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">16.082743945760875</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-13.778620132579984</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.07264520534308345</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.6858688423237566</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">0.04919783577740855</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">1.9228220558981861</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-13.095144875896072</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-10.452318745802739</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id50"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.9037473563931706</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-18.230723099792414</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">13.769871198936524</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-17.14636420854344</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.6409354255899539</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">1.002940524784198</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-2.457492165650132</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.37535754760899304</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-16.53899155001447</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-7.920506437043759</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id51"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.4818005802009897</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">17.96577252109722</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-13.539897533896834</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-17.927178242088708</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.018786014182492327</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.2566354198968807</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-29.6067825510378</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.07190338155147184</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.743643311308753</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">39.60598266850275</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id52"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.5410856039235123</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">11.281856876487117</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-16.662856505838374</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.569752792374219</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.11251739609695194</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.2787701335485447</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-27.836629050748666</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.8428369952105752</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.80632918449887</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">39.03224658157758</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id53"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.020082305027514034</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">16.053456396903016</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.616255374832551</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.17080874769272</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.5784900190773475</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.0013352030323159959</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-12.36117905614846</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.36569869893925266</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">16.07428235029859</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">9.82015868036745</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id54"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.4372500108271304</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.620482935467576</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.340492324322065</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.795274358674192</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.56348369312012</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">1.4385432800147386</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-11.120009506046568</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.21687932730503587</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.64224371207339</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">7.895595512164731</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id55"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.8650472364871672</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-14.649659693856037</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.803469174992824</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">13.510381315459663</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.0648875859072383</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">1.3553853851486182</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">25.68422935559748</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.12011364031944538</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-15.988127607702058</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-36.27632324135059</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id56"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.3815013264038611</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.518114826804721</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.685293156001485</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">15.611646841908058</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.5805707537141258</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.8354301556764925</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">28.034911879654814</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.9542655105041123</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-14.545403131962045</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-38.80894375911087</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id57"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.8720476936740966</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-16.475689283897097</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">16.15307137391485</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">16.197922839631286</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">1.1807866708998636</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.036571637685020475</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">28.743047015795394</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.6591773254910296</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-12.834965938806041</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-39.46418231952151</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id58"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.8688606125842031</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.166993702574501</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.980755043115595</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">13.329769142459496</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.13036332048603913</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.3154000329256741</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">25.85711640735684</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.16556909238189618</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-13.647944574764622</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-36.56846921751563</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id59"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.8252098481168731</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.393531230925362</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">16.02327774614567</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-13.241306868073211</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.8609898518155898</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.8702216382671226</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">1.5533174433103047</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.5262151661652952</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-15.323508840803434</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-12.55342889911911</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id60"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.8827802593691276</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.21939643032395</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.407565294653569</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.68824587160306</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">1.054348928779439</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.4991184414810091</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-10.806429305353632</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.8836191821962172</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.025511767119355</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">7.411045936281002</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"7"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id61"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.42249734902884883</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">15.465474457190357</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-14.41032065963005</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.317871352435402</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-1.228723372917078</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.8094391766413715</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-26.013665006190514</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.3654333821205052</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">13.577833077651215</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">36.02541990343563</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id62"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.6235088388951068</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">16.983578883966814</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-14.07643124297588</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-17.379045495939494</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.8160994916137043</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.28698937269879604</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-29.21498520710068</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.9537021828326414</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.996460968823044</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">39.44269602533465</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id63"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.1775587898830664</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-17.008762684066085</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">16.63574340204303</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-13.768620244059157</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.573393644492954</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.2842211879172241</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">1.7909785179634339</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.9510394957223939</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-15.837451042692786</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-13.260018757898067</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id64"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.9042214169476784</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">13.643828208157725</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-15.924010648237406</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-16.012310750656855</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.707189243659858</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.649157217728015</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-28.41196463248108</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.25395178190753237</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">16.210593606722583</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">39.495095985843065</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id65"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.9504107432747689</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-16.367920814240023</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.402616647819901</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">13.611744242337233</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.6871356522166282</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.8795849809461777</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">25.969930940398584</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.6612388960048414</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-13.046888130624588</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-36.380993913274864</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id66"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.781271782250406</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.397785865717175</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-15.46630925888124</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.891598710115458</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.7266632401992518</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.10808528729758704</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-28.156800998344107</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.25296845563522835</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.826430385767999</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">39.006819418645236</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id67"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.4337979165656211</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-16.01510217587942</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.037149678444054</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">16.393218224685906</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.9969759244613526</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.5629294424744298</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">28.49937902675463</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.7426298197613522</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-14.372205138939345</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-38.98090220923078</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id68"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.09148987578785948</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.439073926695768</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.199155366767759</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.772347843008003</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.6705252616307439</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.3535718266678296</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-12.518480040491692</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.18657936420521912</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.272376913180375</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">9.729124488733202</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id69"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-1.3804962169201869</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.127269355581019</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.040832691350229</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">15.907933944893049</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-1.8179753060206627</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.2366275333367325</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">27.99657363497224</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.6714890255956639</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-15.166879217305562</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-38.57487460205486</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id70"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">2.1168025123597443</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-16.55876934105262</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">16.739112827692466</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">16.06152393510125</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.13638041877686616</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.9954139761578816</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">28.872065166613574</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.2230879656457982</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-12.435472994893018</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-39.786272155474315</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id71"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.14440915633858425</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-17.216637073870558</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.104245683118757</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.782951905591501</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-1.1027655316356864</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.4905126366720782</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-0.6230573178525027</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">1.2822183757162389</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-17.100471391992002</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-10.403059323636045</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id72"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-1.1879465235010602</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.026233193567997</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">14.85942656549907</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.719879520599696</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.1736182244927504</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-2.6688765248506128</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-12.003536244011498</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.013774233298285211</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.009119841193488</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">8.84236587493799</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id73"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">2.1793910688214306</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-17.74548807027626</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">16.14719943671133</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.590008549225718</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">0.0057484721536315226</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-2.1655046287251833</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">0.31378666691580115</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-0.1512478957707494</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-17.80905157265028</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-11.975224644390723</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id74"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.6437197074585542</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-14.376923991840682</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.958950412532964</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-13.590998972458557</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.4632655037978254</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.16392789289509915</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">0.7937014151479236</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.819793231915951</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-14.096619726440993</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-11.471265703045773</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id75"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.22663620964869283</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">-15.009131450956737</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.775113527156115</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-15.642448294455749</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.3806233228615731</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.7547795195971402</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-0.8977202269839042</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.744466937469739</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">-15.20833479053629</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">-9.940348367286138</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id76"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">0.2368708340727552</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.605240760942506</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">15.613144895076864</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-14.794213053693385</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">1.0118980640849833</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.8309965745877463</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-10.942693680512267</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.5265745694022619</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">14.436443020082569</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">7.55585917837762</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id77"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-0.47273935975829673</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">13.663317846328395</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-16.079397677484998</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-17.47889547511307</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">1.4930620841997035</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-0.5597723505641431</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-30.006482148324498</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.9147132336109846</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">17.158097482323388</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">41.34271553990256</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id78"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">-2.0054512376930416</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">14.783061054372725</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-15.117545707562554</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-16.390671280406437</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.5390979719419025</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">-1.5546253411529756</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-28.418437423022354</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">0.6815195571802446</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.19758098064745</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">39.01733803826957</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id79"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token property">"dimen_1"</span><span class="token operator">:</span> <span class="token number">1.8671413705072482</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_2"</span><span class="token operator">:</span> <span class="token number">16.412756671090953</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_3"</span><span class="token operator">:</span> <span class="token number">-14.358280917568608</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_4"</span><span class="token operator">:</span> <span class="token number">-17.255326632209744</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_5"</span><span class="token operator">:</span> <span class="token number">-0.6224218915549261</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_6"</span><span class="token operator">:</span> <span class="token number">0.6520951230966727</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_7"</span><span class="token operator">:</span> <span class="token number">-29.16660691664065</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_8"</span><span class="token operator">:</span> <span class="token number">-1.4169348159134842</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_9"</span><span class="token operator">:</span> <span class="token number">15.232135708190246</span><span class="token punctuation">,</span>
	<span class="token property">"dimen_10"</span><span class="token operator">:</span> <span class="token number">39.53081357120439</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"id80"</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>开始绘图：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">'component'</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//这里的component指的是ComponentContainer的vue实例，采取合理的方法获取即可</span>

<span class="token comment">//data为数据</span>
component<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绘图效果如下所示：</p>
<div align="center"><img src="/topic4/feature_contour/imgs/效果图1.png"></div>
<center style="font-size:18px;color:gray;">样例效果</center>
</div></template>


