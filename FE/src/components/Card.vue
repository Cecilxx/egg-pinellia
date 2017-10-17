<template>
  <el-col class="card-box">
    <el-card :body-style="{ padding: '0px', height: '100%' }">
      <slot>暂无照片</slot>
    </el-card>
  </el-col>
</template>

<script>
  export default {
    data () {
      return {
        currentDate: new Date().toDateString()
      }
    }
  }
</script>

<style>
  .el-card {
    box-shadow: none;
    transition: all .2s;
  }

  .el-card:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    border-color: transparent;
  }

  .card-box {
    width: 250px;
    height: 330px;
    margin-bottom: 20px;
    position: relative;
  }
</style>

