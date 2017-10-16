<template>
  <el-card class="box-card">
    <el-tabs>
      <el-tab-pane label="普通用户">
        <Normal></Normal>
      </el-tab-pane>

      <el-tab-pane label="管理员">
        <Admin></Admin>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
  import Normal from './Normal'
  import Admin from './Admin'

  export default {
    components: {
      Normal,
      Admin
    }
  }
</script>

<style>
  .my-tabs {
    width: 200px;
    height: 300px;
    background: #fff;
    box-shadow: 1px solid #ccc;
    border: 1px solid #333;
    padding: 20px;
    margin: 0 auto;
  }

  .box-card {
    width: 300px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
</style>