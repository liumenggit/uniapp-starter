## 名词定义
| 定义      | 名词  | 定义      | 名词  |
|:--------|:---:|:--------|:---:|
| create  | 添加  | push    | 推送  |
| delete  | 删除  | send    | 发送  |
| update  | 更新  | notify  | 通知  |
| get     | 获取  | sync    | 同步  |
| list    | 列表  | bind    | 绑定  |
| count   | 统计  | unbind  | 解绑  |
| batch   | 批量  | open    | 开启  |
| search  | 搜索  | close   | 关闭  |
| query   | 查询  | cancel  | 取消  |
| apply   | 申请  | done    | 结束  |
| confirm | 确认  | upload  | 上传  |
| check   | 检查  | accept  | 同意  |
| verify  | 验证  | reply   | 回复  |
| change  | 更改  | refresh | 刷新  |
| fetch   | 拉取  |         |     |
## 目录说明
```
├─components    自定义组件
├─enums         枚举
├─key           key储存目录
├─pages         页面路径
├─router        路由
├─services      数据服务相关
│  ├─api        API
│  ├─mock       Mock
│  └─model      接口
├─static        静态文件
├─store         状态管理
├─theme         主题配置
├─types         全局接口
└─utils         自定义功能
```
## 文件目录格式
```yaml
ls:
  .js: kebab-case
  .ts: kebab-case
  .json: kebab-case
  .vue: PascalCase
  .tsx: PascalCase
  .d.ts: kebab-case
  src/components:
    .dir: kebab-case
    .vue: kebab-case
  src/enums:
    .ts: camelcase

ignore:
  - .git
  - node_modules
  - dist
  - src/tmui
  - src/hybrid/html/js
  - postcss.config.js
  - vite.config.ts
  - src/androidPrivacy.json
```