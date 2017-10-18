module.exports = app => {
  class BookController extends app.Controller {
    async importBook() {
      const ctx = this.ctx
      const service = ctx.service
      const body = ctx.request.body
      const result = await service.book.importBook(body)

      ctx.body = result
    }

    async getBookList() {
      const ctx = this.ctx
      const service = ctx.service
      const result = await service.book.getBookList()

      ctx.body = result
    }

    async editBook() {
      const ctx = this.ctx
      const service = ctx.service
      const body = ctx.request.body
      const result = await service.book.editBook(body)

      ctx.body = result
    }

    async deleteBook() {
      const ctx = this.ctx
      const service = ctx.service
      const body = ctx.request.body
      const result = await service.book.deleteBook(body)

      ctx.body = result
    }
  }
  return BookController
}
