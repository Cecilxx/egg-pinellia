// const rand = require("csprng");
const bcrypt = require('bcrypt')

module.exports = app => {
  class UserService extends app.Service {
    async register(name, password, type) {
      const sqlName = await app.mysql.get('user_info', { name, type })

      if (!name || !password) {
        return {
          code: 1,
          msg: '无效的用户名或密码'
        }
      }
      if (sqlName) {
        return {
          code: 1,
          msg: '用户名已存在'
        }
      }

      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
      await app.mysql.insert('user_info', { name, hash, type })
      return {
        code: 0,
        msg: '注册成功'
      }
    }

    async login(name, password, type) {
      // 根据当前用户名查询salt和hash
      const sqlUserInfo = await app.mysql.get('user_info', { name, type })

      if (!sqlUserInfo) {
        return {
          code: 1,
          msg: '用户名或密码错误'
        }
      }

      const sqlHash = sqlUserInfo.hash
      const checkPassword = await bcrypt.compare(password, sqlHash)

      if (checkPassword) {
        return {
          code: 0,
          msg: '登录成功'
        }
      } else {
        return {
          code: 1,
          msg: '用户名或密码错误'
        }
      }
    }
  }
  return UserService
}
