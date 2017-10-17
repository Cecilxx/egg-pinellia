<template>
  <div class="box-pic">
    <el-row :gutter="20">
      <myBookbox v-for="(item, index) in list"
        :key="index"
        :values="item"></myBookbox>
      <myAddBtn @getList="_getList"></myAddBtn>
    </el-row>
  </div>
</template>

<script>
  import myBookbox from './BookBox'
  import myAddBtn from './AddBtn'
  import API from '~api'
  export default {
    components: {
      myBookbox,
      myAddBtn
    },
    created () {
      this._getList()
    },
    data () {
      return {
        list: []
      }
    },
    methods: {
      _getList () {
        API.getBookList().then(({ data }) => {
          this.list = data.list
        })
      }
    }
  }
</script>

<style>
  .box-pic {
    padding: 20px;
  }
</style>

