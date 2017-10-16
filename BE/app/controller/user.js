module.exports = app => {
  class UserController extends app.Controller {
    async register() {
      const ctx = this.ctx
      const service = ctx.service
      const body = ctx.request.body
      const name = body.name
      const password = body.password
      const type = body.type
      const result = await service.user.register(name, password, type)

      ctx.body = result
    }

    async login() {
      const ctx = this.ctx
      const service = ctx.service
      const body = ctx.request.body
      const name = body.name
      const password = body.password
      const type = body.type
      const result = await service.user.login(name, password, type)

      ctx.body = result
    }
  }
  return UserController
}
