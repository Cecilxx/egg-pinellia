module.exports = app => {
  app.post('/register', app.controller.user.register)
  app.post('/login', app.controller.user.login)
  app.post('/importbook', app.controller.book.importBook)
  app.get('/booklist', app.controller.book.getBookList)
  app.post('/editbook', app.controller.book.editBook)
  app.post('/deletebook', app.controller.book.deleteBook)
}
