<template>
  <div class="box-pic">
    <el-row :gutter="32">
      <myCard></myCard>
      <myCard></myCard>
      <myCard></myCard>
      <myUpload></myUpload>
    </el-row>
  </div>
</template>

<script>
  import myCard from './Card'
  import myUpload from './Upload'

  export default {
    components: {
      myCard,
      myUpload
    }
  }
</script>

<style>
  .box-pic {
    padding: 20px;
  }
</style>

