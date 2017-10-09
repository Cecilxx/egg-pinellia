module.exports = app => {
  class FormController extends app.Controller {
    async index() {
      const a = await "Hello form";
      this.ctx.body = a;
    }
  }

  return FormController;
};
