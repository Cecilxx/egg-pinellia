<template>
  <div class="box-pic">
    <el-row :gutter="20">
      <myAddBtn></myAddBtn>
    </el-row>
  </div>
</template>

<script>
  import myBookbox from './BookBox'
  import myAddBtn from './AddBtn'

  export default {
    components: {
      myBookbox,
      myAddBtn
    }
  }
</script>

<style>
  .box-pic {
    padding: 20px;
  }
</style>

