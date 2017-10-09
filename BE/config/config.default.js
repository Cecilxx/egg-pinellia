exports.keys = "123123123";

// 添加 view 配置
exports.view = {
  defaultViewEngine: "nunjucks",
  mapping: {
    ".tpl": "nunjucks"
  }
};

exports.news = {
  pageSize: 5,
  serverUrl: "https://hacker-news.firebaseio.com/v0"
};

// add middleware robot
exports.middleware = ["robot"];
// robot's configurations
exports.robot = {
  ua: [/Baiduspider/i]
};

exports.security = {
  csrf: {
    enable: false
  },
  domainWhiteList: ["http://localhost:8081"] // 这个端口一定要跟你实际的一致
};
