module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      this.ctx.body = await "Hello world";
    }
  }
  return HomeController;
};
