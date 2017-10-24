<template>
  <myCard>
    <div class="img-box">
      <img :src="src"
        alt="封面">
    </div>
    <div class="title-box">
      <span class="left">{{values.title}}</span>
      <span class="right">{{values.author}}</span>
    </div>

    <div class="status-box">
      <div class="left">
        入库：{{ values.import_date }}
      </div>
      <div class="right">
        <span :class="statusClass">
          {{ values.status === 102 ? '借阅中' : '正常' }}

          <el-tooltip v-if="values.status === 102"
            :content="borrowInfo"
            placement="top"
            effect="light">
            <i class="el-icon-information"></i>
          </el-tooltip>
        </span>

      </div>
    </div>

    <div class="action-box">
      <div v-if="userType === '2'">
        <i class="el-icon-edit act-icon"
          @click="_edit"></i>
        <el-popover ref="popover"
          v-model="popoverVisible">
          <p>确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini"
              @click="_deleteCancel"
              type="text">取消</el-button>
            <el-button type="text"
              @click="_deleteOk"
              size="mini">确定</el-button>
          </div>
        </el-popover>
        <i class="el-icon-delete act-icon"
          v-popover:popover></i>
      </div>

      <div v-else>
        <i class="el-icon-star-off pointer" v-show="values.status === 101" @click="_borrow"></i>
        <i class="el-icon-time"></i>
      </div>
    </div>

    <bookImport :dialogFormVisible="editBook"
      :values="values"
      @ok="_editOk"
      @cancel="_close"></bookImport>
    <bookBorrow :dialogFormVisible="borrowBook"
      @ok="_borrowOk"
      @cancel="_borrowCancel"></bookBorrow>
  </myCard>
</template>

<script>
  import myCard from './Card'
  import bookImport from './BookImport'
  import bookBorrow from './BookBorrow'
  import API from '~api'

  export default {
    components: {
      myCard,
      bookImport,
      bookBorrow
    },
    props: {
      src: {
        type: String,
        default:
          'https://img12.360buyimg.com/n7/jfs/t2779/56/3892652095/277373/29e1d2f1/57a01084N1718119c.jpg'
      },
      values: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        userType: sessionStorage.getItem('usertype'),
        editBook: false,
        popoverVisible: false,
        borrowBook: false
      }
    },
    methods: {
      _edit() {
        this.editBook = true
      },
      _close() {
        this.editBook = false
      },
      _editOk(formValues) {
        API.editBook({ ...formValues, id: this.values.id }).then(res => {
          this.editBook = false
          this.$emit('getList')
        })
      },
      _delete() {
        this.popoverVisible = true
      },
      _deleteCancel() {
        this.popoverVisible = false
      },
      _deleteOk() {
        API.deleteBook({ id: this.values.id }).then(res => {
          this.popoverVisible = false
          this.$emit('getList')
        })
      },
      _borrow() {
        this.borrowBook = true
      },
      _borrowCancel() {
        this.borrowBook = false
      },
      _borrowOk() {
        this.borrowBook = false
      }
    },
    computed: {
      statusClass() {
        return this.values.status === 101 ? 'normal' : 'borrow'
      }
    }
  }
</script>

<style>
  .img-box {
    height: 228px;

    img {
      width: 100%;
    }
  }

  .title-box {
    padding: 10px;
    color: #666;
    overflow: hidden;
    .left {
      float: left;
    }

    .right {
      float: right;
      color: #ccc;
    }
  }

  .status-box {
    padding: 0 10px 10px 10px;
    overflow: hidden;

    & .left {
      float: left;
    }

    & .right {
      float: right;
    }
  }
  .normal {
    color: #13de3a;
  }
  .borrow {
    color: red;
  }
  .pointer {
    cursor: pointer;
  }
  .action-box {
    padding: 0 10px 10px 10px;
  }

  .act-icon {
    cursor: pointer;
    /* margin-right: 2px; */
  }

  .act-icon:nth-last-child(1) {
    margin: 0;
  }
</style>
