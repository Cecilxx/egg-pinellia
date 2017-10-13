<template>
  <el-col class="card-box">
    <el-card :body-style="{ padding: '0px' }">
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
    height: 100%;
  }

  .el-card:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    border-color: transparent;
  }

  .card-box {
    width: 250px;
    height: 350px;
    margin-bottom: 20px;
  }
</style>

