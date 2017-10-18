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
        <i class="el-icon-delete act-icon"></i>
      </div>
      <div v-else>
        <i class="el-icon-star-off"></i>
      </div>
    </div>

    <bookImport :dialogFormVisible="editBook"
      :values="values"
      @ok="_editOk"
      @cancel="_close"></bookImport>
  </myCard>
</template>

<script>
  import myCard from './Card'
  import bookImport from './BookImport'
  import API from '~api'

  export default {
    components: {
      myCard,
      bookImport
    },
    props: {
      src: {
        type: String,
        default: 'https://img12.360buyimg.com/n7/jfs/t2779/56/3892652095/277373/29e1d2f1/57a01084N1718119c.jpg',
      },
      values: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        userType: sessionStorage.getItem('usertype'),
        editBook: false
      }
    },
    methods: {
      _edit () {
        this.editBook = true
      },
      _close () {
        this.editBook = false
      },
      _editOk (formValues) {
        API.editBook({ ...formValues, id: this.values.id }).then(res => {
          this.editBook = false
          this.$emit('getList')
        })
      }
    },
    computed: {
      statusClass () {
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
    & .normal {
      color: #13de3a
    }
    & .borrow {
      color: red
    }

    & .left {
      float: left;
    }

    & .right {
      float: right;
    }
  }

  .action-box {
    padding: 0 10px 10px 10px;
  }

  .act-icon {
    cursor: pointer;
    /* margin-right: 2px; */
  }

  .act-icon:nth-last-child(1) {
    margin: 0
  }
</style>
