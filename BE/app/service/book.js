module.exports = app => {
  class BookService extends app.Service {
    async importBook({ title, author, remark, status = 101 }) {
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

    async editBook({ title, author, remark, id }) {
      const bookInfo = {
        id,
        title,
        author,
        remark
      }
      const updateResult = await app.mysql.update('book_info', bookInfo)

      if (updateResult.affectedRows === 1) {
        return {
          code: 0,
          msg: '更新成功'
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
