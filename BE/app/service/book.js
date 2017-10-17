module.exports = app => {
  class BookService extends app.Service {
    async importbook({ title, author, remark, status = 101 }) {
      const date = new Date().toDateString()
      const insertResult = await app.mysql.insert('book_info', {
        title,
        author,
        remark,
        status,
        import_date: date
      })

      if (insertResult.affectedRows === 1) {
        return {
          code: 0,
          msg: '录入成功',
          id: insertResult.insertId
        }
      }
    }

    async getBookList() {
      const results = await app.mysql.select('book_info')

      return {
        code: 0,
        msg: '查询成功',
        list: results
      }
    }
  }
  return BookService
}
