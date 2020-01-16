## 💡 简介

[uvstat](https://github.com/Vanessa219/uvstat) 📈 B3log 分布式社区的浏览计数组件，欢迎加入下一代社区网络。

## 🛠️ 使用文档

### CommonJS

* 安装依赖

```shell
npm install uvstat --save
```

* 在代码中引入并初始化对象，可参考 [index.js](https://github.com/Vanessa219/uvstat/blob/master/demo/index.js)

```ts
import Uvstat from 'uvstat'

const uvstat = new Uvstat()
uvstat.renderStat()
uvstat.renderCmtStat()
uvstat.getStat(['http://localhost:9219']).then(stats => {
  console.log('getStat: ', stats)
})
uvstat.addStat()
```

### HTML script

* 在 HTML 中插入 js

```html
<!-- ⚠️生产环境请指定版本号，如 https://cdn.jsdelivr.net/npm/uvstat@x.x.x/dist... -->
<script src="https://cdn.jsdelivr.net/npm/uvstat/dist/index.min.js" defer></script>
```

### 示例代码

* [CommonJS](https://github.com/Vanessa219/uvstat/blob/master/demo/index.js)

### API

#### options

||说明|默认值|
|---|---|---|
|cache|访问过的页面不再进行统计|true|
|cacheId|localStorage 名称|'uvstat'|
|loading|加载中的 svg|-|
|location|计数 url 配置|-|
|location.hash|是否统计 hash|false|
|location.pathname|是否统计 pathname|true|
|location.search|是否统计 search|false|
|renderName|浏览计数元素中的 data 属性名称|'uvstaturl'|
|renderCmtName|评论计数元素中的 data 属性名称|'uvstatcmt'|
|cmtAPI|评论统计请求地址|'https://hacpai.com/apis/vcomment/count'|
|timeout|请求超时 ms|2000|
|url|服务端请求地址|'https://hacpai.com/uvstat'|


#### methods

||说明|
|---|---|
|getStat(urls: IUrlCount[], timeout: number = 0)|获取给定 urls 的浏览数|
|getCmtStat(cmts: ICmtCount[], timeout: number = 0)|获取给定帖子 id 的评论数|
|addStat()|为当前页面添加计数|
|renderStat()|浏览计数渲染|
|renderCmtStat()|评论计数渲染|
|clearCache()|清除缓存|

## 欢迎关注 B3log 开源社区微信公众号 `B3log开源`

![image-d3c00d78](https://user-images.githubusercontent.com/873584/71566370-0d312c00-2af2-11ea-8ea1-0d45d6f0db20.png)
