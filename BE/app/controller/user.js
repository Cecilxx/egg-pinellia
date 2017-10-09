module.exports = app => {
  class UserController extends app.Controller {
    async index() {
      // this.ctx.set("Access-Control-Allow-Origin", "*");
      // this.ctx.set("Access-Control-Expose-Headers", "Set-Cookie");
      // this.ctx.set("Access-Control-Allow-Methods", "GET, POST, PUT,OPTIONS");
      // this.ctx.set("Access-Control-Allow-Credentials", true);
      // this.ctx.set(
      //   "Access-Control-Allow-Headers",
      //   "Accept,x-csrf-token,X-Custom-Header,X-Requested-With,Origin, Content-Type, Authorization"
      // );

      const a = await "Hello form";
      this.ctx.body = {
        code: 0,
        msg: "操作成功",
        data: {
          name: this.ctx.request.body.name,
          password: this.ctx.request.body.password
        }
      };
    }
  }

  return UserController;
};
