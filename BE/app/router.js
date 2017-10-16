module.exports = app => {
  app.post('/register', app.controller.user.register)
  app.post('/login', app.controller.user.login)
}
