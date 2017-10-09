module.exports = app => {
  class NewsController extends app.Controller {
    async list() {
      const ctx = this.ctx;
      const page = ctx.query.page || 1;
      const newsList = await ctx.service.news.list(page);
      await ctx.render("news/list.tpl", { list: newsList });
    }
  }
  return NewsController;
};
