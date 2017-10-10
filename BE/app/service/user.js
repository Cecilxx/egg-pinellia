module.exports = app => {
  class UserService extends app.Service {
    async create(name, password) {
      const sqlName = await app.mysql.get("user_info", { name });

      if (!name || !password) {
        //用户名或密码为空
        return {
          code: 1,
          msg: "请输入正确的用户名和密码"
        };
      }

      if (sqlName) {
        return {
          code: 1,
          msg: "用户名已存在"
        };
      }

      await app.mysql.insert("user_info", { name, password });

      return {
        code: 0,
        msg: "注册成功"
      };
    }
  }
  return UserService;
};
