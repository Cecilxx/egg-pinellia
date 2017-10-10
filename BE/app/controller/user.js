module.exports = app => {
  class UserController extends app.Controller {
    async create() {
      // this.ctx.set("Access-Control-Allow-Origin", "*");
      // this.ctx.set("Access-Control-Expose-Headers", "Set-Cookie");
      // this.ctx.set("Access-Control-Allow-Methods", "GET, POST, PUT,OPTIONS");
      // this.ctx.set("Access-Control-Allow-Credentials", true);
      // this.ctx.set(
      //   "Access-Control-Allow-Headers",
      //   "Accept,x-csrf-token,X-Custom-Header,X-Requested-With,Origin, Content-Type, Authorization"
      // );
      const ctx = this.ctx;
      const service = ctx.service;
      const body = ctx.request.body;
      const name = body.name;
      const password = body.password;

      const result = await service.user.create(name, password);

      ctx.body = result;
    }
  }
  return UserController;
};
