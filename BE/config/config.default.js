exports.keys = '123123123'

// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
}

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
}

// add middleware robot
exports.middleware = ['robot']
// robot's configurations
exports.robot = {
  ua: [/Baiduspider/i]
}

exports.security = {
  csrf: {
    enable: false
  },
  domainWhiteList: ['http://localhost:8081'] // 这个端口一定要跟你实际的一致
}

exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: 'localhost',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: 'Lxx0730',
    // 数据库名
    database: 'pinellia'
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false
}
