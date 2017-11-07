exports.keys = '123123123'

exports.security = {
  csrf: {
    enable: false
  },
  // methodnoallow: {
  //   enable: false
  // },
  domainWhiteList: ['97.64.43.217:80'] // 这个端口一定要跟你实际的一致
}

exports.cors = {
  origin: '*'
  // allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
}

exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: '97.64.43.217',
    // host: 'localhost',
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
