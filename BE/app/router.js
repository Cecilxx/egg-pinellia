module.exports = app => {
  app.post('/register', app.controller.user.register)
  app.post('/login', app.controller.user.login)
  app.post('/importbook', app.controller.book.importbook)
  app.get('/booklist', app.controller.book.getBookList)
}
