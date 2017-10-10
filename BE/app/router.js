module.exports = app => {
  app.get("/", app.controller.home.index);
  app.get("/news", app.controller.news.list);
  app.post("/form", app.controller.form.index);
  app.post("/user", app.controller.user.create);
};
