<template><div><h1 id="面向信息流构建的网络通联行为可视化方法" tabindex="-1"><a class="header-anchor" href="#面向信息流构建的网络通联行为可视化方法" aria-hidden="true">#</a> 面向信息流构建的网络通联行为可视化方法</h1>
<p>本组件的分析目标是基于网络通信起始点和终止点的消息流图，通过分析这些图形，自动选取出潜在的组织结构通信记录，并依赖于分析人员的交互操作进行进一步分析。为了实现这一目标，我们首先设计了基于网络通信起始点和终止点的消息流图可视化，以便对大规模网络数据进行筛选和选取。分析人员可以根据自身经验选择有价值的通信记录，进行下一步的分析。</p>
<p><img src="@source/.vuepress/public/topic4/mes_flow/imgs/1696581270804.png" alt="1696581270804"></p>
<p><strong>Demo</strong>：<a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080<ExternalLinkIcon/></a></p>
<h2 id="输入数据" tabindex="-1"><a class="header-anchor" href="#输入数据" aria-hidden="true">#</a> 输入数据</h2>
<ul>
<li>描述：网络通信数据，展示出节点之间的通信关系</li>
<li>类型：均为<code v-pre>Array</code>，满足json格式</li>
</ul>
<p>每条信息代表一次网络通信，source和target分别代表消息起始点和终止点（IP段），time为时间。</p>
<p>数据的样例请详见章节<a href="#%E4%BD%BF%E7%94%A8%E7%94%A8%E4%BE%8B">使用用例</a></p>
<h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2>
<h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//绘制消息流图，tabledata为检索结果</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generateVis2</span><span class="token punctuation">(</span>tabledata<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入数据" tabindex="-1"><a class="header-anchor" href="#导入数据" aria-hidden="true">#</a> 导入数据</h3>
<ul>
<li>数据名称：<code v-pre>this.tabledata</code></li>
<li>接口名称：<code v-pre>uploadFileTest</code></li>
<li>操作步骤：点击导入按钮，输入时间片信息，单位为10分钟</li>
</ul>
<p><img src="@source/.vuepress/public/topic4/mes_flow/imgs/1696581346094.png" alt="1696581346094"></p>
<h3 id="数据筛选" tabindex="-1"><a class="header-anchor" href="#数据筛选" aria-hidden="true">#</a> 数据筛选</h3>
<ul>
<li>
<p>数据名称：form表单<code v-pre>this.formInline</code></p>
</li>
<li>
<p>接口名称：<code v-pre>onSubmit</code></p>
</li>
<li>
<p>操作步骤：对IP段、时间范围、跳数、时间阈值依次进行输入和选择，点击查询，筛选后的数据展现在下方；点击重置，筛选内容清空，数据展示为全部数据。其中IP段输入格式为：IP段;IP段……以顿号分割。时间阈值的单位为导入数据中输入的时间片。</p>
<p><img src="@source/.vuepress/public/topic4/mes_flow/imgs/1696582670422.png" alt="1696582670422"></p>
</li>
</ul>
<h3 id="消息流绘制" tabindex="-1"><a class="header-anchor" href="#消息流绘制" aria-hidden="true">#</a> 消息流绘制</h3>
<ul>
<li>接口名称：<code v-pre>generateVis2</code></li>
<li>操作步骤：通过数据筛选的数据，输入纵轴精确度，点击绘制进行消息流绘制。其中筛选的IP段标红。对消息数据可以进行选择和取消选择。</li>
</ul>
<p><img src="@source/.vuepress/public/topic4/mes_flow/imgs/1696582813875.png" alt="1696582813875"></p>
<h2 id="外部接口" tabindex="-1"><a class="header-anchor" href="#外部接口" aria-hidden="true">#</a> 外部接口</h2>
<h3 id="数据导出" tabindex="-1"><a class="header-anchor" href="#数据导出" aria-hidden="true">#</a> 数据导出</h3>
<ul>
<li>
<p>数据名称：<code v-pre>this.filterresFromUser</code></p>
</li>
<li>
<p>接口名称：<code v-pre>exportall</code></p>
</li>
<li>
<p>接口描述：导出用户筛选后在消息流视图中选取的数据。数据格式为消息数据的ID</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="使用用例" tabindex="-1"><a class="header-anchor" href="#使用用例" aria-hidden="true">#</a> 使用用例</h2>
<p>在本示例中，使用的数据为：</p>
<p>::: tabledata数据</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"192.168.1.1"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"192.168.1.2"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-08-23 00:00"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"192.168.1.3"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"192.168.1.4"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-08-23 00:10"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"192.168.1.5"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"192.168.1.6"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-08-23 00:20"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"192.168.1.7"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"192.168.1.8"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-08-23 00:30"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"192.168.1.9"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"192.168.1.10"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-08-23 00:40"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"192.168.1.11"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"192.168.1.12"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-08-23 00:50"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"192.168.1.13"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"192.168.1.14"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-08-23 01:00"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"192.168.1.15"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"192.168.1.16"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-08-23 01:10"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"192.168.1.17"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"192.168.1.18"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-08-23 01:20"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"192.168.1.19"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"192.168.1.20"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> <span class="token string">"2023-08-23 01:30"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::开始绘制</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">"mestree"</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//这里的component指的是组件mestree.vue的vue实例</span>

component<span class="token punctuation">.</span><span class="token function">generateVis2</span><span class="token punctuation">(</span>tabledata<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绘图效果如下所示：</p>
<p><img src="@source/.vuepress/public/topic4/mes_flow/imgs/1696659045455.png" alt="1696659045455"></p>
</div></template>


