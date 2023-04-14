---
title: Butterfly主题说明文档
date: 2023/03/16
tags: [hexo,博客]
categories: 博客记录
description: Butterfly主题说明文档及示例,常用的markdown格式示例。
cover: https://bu.dusays.com/2023/04/11/64350b027215d.jpg
---
### 页面配置

```
---
title:
date:
updated:
type:
comments:
description:
keywords:
top_img:
mathjax:
katex:
aside:
aplayer:
highlight_shrink:
---
```

|写法| 解释|
| -------- | -------- |
| title |【必需】页面标题 |
| date | 【必需】页面创建日期 |
| type | 【必需】标签、分类和友情链接三个页面需要配置 |
| updated |【可选】页面更新日期 |
| description | 【可选】页面描述 |
| keywords | 【可选】页面关键字 |
| comments | 【可选】显示页面评论模块(默认 true) |
| top_img| 【可选】页面顶部图片 |
| mathjax | 【可选】显示mathjax(当设置mathjax的per_page: false时，才需要配置，默认 false) |
| katex | 【可选】显示katex(当设置katex的per_page: false时，才需要配置，默认 false) |
| aside | 【可选】显示侧边栏 (默认 true) |
| aplayer | 【可选】在需要的页面加载aplayer的js和css,请参考文章下面的音乐 配置 |
| highlight_shrink | 【可选】配置代码框是否展开(true/false)(默认为设置中highlight_shrink的配置) |

<br>

### 文章页配置

```
---
title:
date:
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---
```

|写法| 解释|
| -------- | -------- |
| title	| 【必需】文章标题| 
| date	| 【必需】文章创建日期| 
| updated| 【可选】文章更新日期| 
| tags	| 【可选】文章标签| 
| categories| 	【可选】文章分类| 
| keywords	| 【可选】文章关键字| 
| description	| 【可选】文章描述| 
| top_img| 	【可选】文章顶部图片| 
| cover	| 【可选】文章缩略图(如果没有设置top_img,文章页顶部将显示缩略图，可设为false/图片地址/留空)| 
| comments| 【可选】显示文章评论模块(默认 true)| 
| toc	| 【可选】显示文章TOC(默认为设置中toc的enable配置)| 
| toc_number| 	【可选】显示toc_number(默认为设置中toc的number配置)| 
| toc_style_simple	| 【可选】显示 toc 简洁模式| 
| copyright	| 【可选】显示文章版权模块(默认为设置中post_copyright的enable配置)| 
| copyright_author	| 【可选】文章版权模块的文章作者| 
| copyright_author_href	| 【可选】文章版权模块的文章作者链接| 
| copyright_url	| 【可选】文章版权模块的文章连结链接| 
| copyright_info	| 【可选】文章版权模块的版权声明文字| 
| mathjax	| 【可选】显示mathjax(当设置mathjax的per_page: false时，才需要配置，默认 false)| 
| katex	| 【可选】显示katex(当设置katex的per_page: false时，才需要配置，默认 false)| 
| aplayer	| 【可选】在需要的页面加载aplayer的js和css,请参考文章下面的音乐 配置
| highlight_shrink| 	【可选】配置代码框是否展开(true/false)(默认为设置中highlight_shrink的配置)| 
| aside	| 【可选】显示侧边栏 (默认 true)| 

<br>






### 一、 代码输出

```java
// FileName: HelloWorld.java
public class HelloWorld {
  // Java 入口程序，程序从此入口
  public static void main(String[] args) {
    System.out.println("Hello,World!"); // 向控制台打印一条语句
  }
}
```

<br>

### 二、 表格

|名  称| 用 法|
| -------- | -------- |
| color |【可选】顔色(default / blue / pink / red / purple / orange / green) |
| icon | 【可选】可配置自定义 icon (只支持 fontawesome 图标, 也可以配置 no-icon ) |
| style | 【可选】可以覆盖配置中的 style（simple/modern/flat/disabled） |


```
|名  称| 用 法|
| -------- | -------- |
| color |【可选】顔色(default / blue / pink / red / purple / orange / green) |
| icon | 【可选】可配置自定义 icon (只支持 fontawesome 图标, 也可以配置 no-icon ) |
| style | 【可选】可以覆盖配置中的 style（simple/modern/flat/disabled） |
```

<br>


### 三、 标签

1.`simple`
{% note green 'fab fa-internet-explorer' simple %}
前端最讨厌的浏览器
{% endnote %}
```
{% note green 'fab fa-internet-explorer' simple %}
前端最讨厌的浏览器
{% endnote %}
```

2.`引用`
> **甘特图**内在思想简单。基本是一条线条图，横轴表示时间，纵轴表示活动（项目），线条表示在整个期间上计划和实际的活动完成情况。它直观地表明任务计划在什么时候进行，及实际进展与计划要求的对比。
```
> **甘特图**内在思想简单。基本是一条线条图，横轴表示时间，纵轴表示
```

3.`modern`
{% note green 'fab fa-internet-explorer' modern %}
前端最讨厌的浏览器
{% endnote %}

```
{% note green 'fab fa-internet-explorer' modern %}
前端最讨厌的浏览器
{% endnote %}
```

4.`flat`
{% note green 'fab fa-internet-explorer' flat %}
前端最讨厌的浏览器
{% endnote %}
```
{% note green 'fab fa-internet-explorer' flat %}
前端最讨厌的浏览器
{% endnote %}
```

5.`disabled`
{% note green 'fab fa-internet-explorer' disabled %}
前端最讨厌的浏览器
{% endnote %}
```
{% note green 'fab fa-internet-explorer' disabled %}
前端最讨厌的浏览器
{% endnote %}
```

6.`no-icon`

{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}
```
{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}
```
<br>

### 四、工作进度
- [x] 🎉 通常 `Markdown` 解析器自带的基本功能；
- [x] 🍀 支持**流程图**、**甘特图**、**时序图**、**任务列表**；
- [x] 🏁 支持粘贴 HTML 自动转换为 Markdown；
- [x] 🦑 支持五线谱、及[部分站点、视频、音频解析](/)；
- [x] 🌟 增加对**所见即所得**编辑模式的支持(`⌘-⇧-M`)；

#### 一些表情例子

😄 😆 😵 😭 😰 😅  😢 😤 😍 😌
👍 👎 💯 👏 🔔 🎁 ❓ 💣 ❤️ ☕️ 🌀 🙇 💋 🙏 💢

```
- [x] 🎉 通常 `Markdown` 解析器自带的基本功能；
- [x] 🍀 支持**流程图**、**甘特图**、**时序图**、**任务列表**；
- [x] 🏁 支持粘贴 HTML 自动转换为 Markdown；
- [x] 🦑 支持五线谱、及[部分站点、视频、音频解析](/)；
- [x] 🌟 增加对**所见即所得**编辑模式的支持(`⌘-⇧-M`)；
```
<br>

### 五、Gallery相册图库

<div class="gallery-group-main">
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

|名  称| 用 法|
| -------- | -------- |
| name |图库名字 |
| description | 图库描述 |
| link | 连接到对应相册的地址 |
| img-url | 图库封面的地址 |

```
<div class="gallery-group-main">
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图
片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>
```

<br>

### 六、Gallery相册图库

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
{% endgallery %}


|名  称| 用 法|
| -------- | -------- |
| lazyload |【可选】点击按钮加载更多图片，填写 true/false。默认为 false|
| rowHeight | 【可选】图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。默认为 220。 |
| limit | 【可选】每次加载多少张照片。默认为 10。 |

```
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
{% endgallery %}
```

<br>

### 七、标签外挂

#### 1、标签一

哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}

门里站着一个人? {% hideInline 闪 %}


```
哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}

门里站着一个人? {% hideInline 闪 %}
```

#### 2、标签二

查看答案
{% hideBlock 查看答案 %}
傻子，怎么可能有答案
{% endhideBlock %}


```
查看答案
{% hideBlock 查看答案 %}
傻子，怎么可能有答案
{% endhideBlock %}
```
#### 3、标签三

{% hideToggle Butterfly安装方法 %}
在你的博客根目录里
如果想要安装比较新的dev分支，可以
{% endhideToggle %}



```
{% hideToggle Butterfly安装方法 %}
在你的博客根目录里
如果想要安装比较新的dev分支，可以
{% endhideToggle %}
```

<br>

### 八、mermaid

使用mermaid标签可以绘制Flowchart（流程图）、Sequence diagram（时序图 ）、Class Diagram（类别图）、State Diagram（状态图）、Gantt（甘特图）和Pie Chart（圆形图），具体可以查看[mermaid文档](https://mermaid.js.org/#/)

{% mermaid %}
pie
    title 这是一个测试
    "大饼" : 42.96
    "小饼" : 50.05
    "中型饼" : 10.01
    "画的饼" :  5
{% endmermaid %}

```
{% mermaid %}
pie
    title 这是一个测试图
    "大饼" : 42.96
    "小饼" : 50.05
    "中型饼" : 10.01
    "画的饼" :  5
{% endmermaid %}
```

<br>

### 九、Tabs

{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

预选

{% tabs 分类, 2 %}
<!-- tab 炸弹@fas fa-bomb -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab 弹@fas fa-bomb -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab 炸@fas fa-bomb -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

{% tabs test3, -1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

```
{% tabs 分类, 3 %}
<!-- tab 炸弹@fas fa-bomb -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab 弹@fas fa-bomb -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab 炸@fas fa-bomb -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

<br>



### 十、Button

这是测试按钮 {% btn 'https://butterfly.js.org/',Butterfly %}
这是测试按钮 {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right %}
这是测试按钮 {% btn 'https://butterfly.js.org/',Butterfly,,outline %}
这是测试按钮 {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline %}
这是测试按钮 {% btn 'https://butterfly.js.org/',文字,far fa-hand-point-right,orange %}

{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block center larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block right outline larger %}


{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,green larger %}


<div class="btn-center">
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline green larger %}
</div>

```
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

[url]         : 链接
[text]        : 按钮文字
[icon]        : [可选] 图标
[color]       : [可选] 按钮背景顔色(默认style时）
                      按钮字体和边框顔色(outline时)
                      default/blue/pink/red/purple/orange/green
[style]       : [可选] 按钮样式 默认实心
                      outline/留空
[layout]      : [可选] 按钮佈局 默认为line
                      block/留空
[position]    : [可选] 按钮位置 前提是设置了layout为block 默认为左边
                      center/right/留空
[size]        : [可选] 按钮大小
                      larger/留空
```

<br>



### 十一、inlineImg

你看我长得漂亮不
![](https://i.loli.net/2021/03/19/2P6ivUGsdaEXSFI.png)
我觉得很漂亮 {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}

```
你看我长得漂亮不
![](https://i.loli.net/2021/03/19/2P6ivUGsdaEXSFI.png)
我觉得很漂亮 {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}

{% inlineImg [src] [height] %}
[src]      :    图片链接
[height]   ：   图片高度限制【可选】
```

### 十二、高亮文字

【可选】背景颜色，默认为 default   default/blue/pink/red/purple/orange/green

臣亮言：{% label 先帝 %}创业未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此诚{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈于内；{% label 忠志之士 purple %}，忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气；不宜妄自菲薄，引喻失义，以塞忠谏之路也。
宫中、府中，俱为一体；陟罚臧否，不宜异同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及为忠善者，宜付有司，论其刑赏，以昭陛下平明之治；不宜偏私，使内外异法也。


```
臣亮言：{% label 先帝 %}创业未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此诚{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈于内；{% label 忠志之士 purple %}，忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气；不宜妄自菲薄，引喻失义，以塞忠谏之路也。
宫中、府中，俱为一体；陟罚臧否，不宜异同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及为忠善者，宜付有司，论其刑赏，以昭陛下平明之治；不宜偏私，使内外异法也。

```

### 十三、timeline

color	timeline 颜色
default(留空)  / blue / pink / red / purple / orange / green



{% timeline 2088,green %}

<!-- timeline 04-11 -->
这是测试页面11
<!-- endtimeline -->
<!-- timeline 04-10 -->
这是测试页面11
<!-- endtimeline -->

<!-- timeline 04-09 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}




```
{% timeline 2088,purple %}
<!-- timeline 04-11 -->
这是测试页面11
<!-- endtimeline -->
<!-- timeline 04-10 -->
这是测试页面11
<!-- endtimeline -->
<!-- timeline 04-09 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}
```

