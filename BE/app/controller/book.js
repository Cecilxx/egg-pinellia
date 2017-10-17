module.exports = app => {
  class BookController extends app.Controller {
    async importbook() {
      const ctx = this.ctx
      const service = ctx.service
      const body = ctx.request.body
      const result = await service.book.importbook(body)

      ctx.body = result
    }

    async getBookList() {
      const ctx = this.ctx
      const service = ctx.service
      const result = await service.book.getBookList()

      ctx.body = result
    }
  }
  return BookController
}
