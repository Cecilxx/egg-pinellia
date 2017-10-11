// const rand = require("csprng");
const bcrypt = require("bcrypt");

module.exports = app => {
  class UserService extends app.Service {
    async create(name, password) {
      // 获取随机盐
      // const salt = rand();
      // 数据库查询当前用户名
      const sqlName = await app.mysql.get("user_info", { name });

      if (!name || !password) {
        return {
          code: 1,
          msg: "无效的用户名或密码"
        };
      }

      if (sqlName) {
        return {
          code: 1,
          msg: "用户名已存在"
        };
      }

      const salt = await bcrypt.genSalt(10);

      const hash = await bcrypt.hash(password, salt);

      await app.mysql.insert("user_info", { name, salt, hash });

      return {
        code: 0,
        msg: "注册成功"
      };
    }
  }
  return UserService;
};
