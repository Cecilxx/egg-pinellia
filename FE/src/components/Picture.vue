<template>
  <div class="box-pic">
    <el-row :gutter="20">
      <myBook>
        <img slot="img"
          src="https://img12.360buyimg.com/n7/jfs/t2779/56/3892652095/277373/29e1d2f1/57a01084N1718119c.jpg"
          alt="">
      </myBook>
      <myBook></myBook>
      <myBook></myBook>
      <myBook></myBook>
      <myBook></myBook>
      <myBook></myBook>
      <myBook></myBook>
      <myBook></myBook>
      <myBook></myBook>
    </el-row>
  </div>
</template>

<script>
  import myBook from './Book'
  import myUpload from './Upload'

  export default {
    components: {
      myBook,
      myUpload
    }
  }
</script>

<style>
  .box-pic {
    padding: 20px;
  }
</style>

