<template>
  <el-col :span="6"
    class="pic-item">
    <el-upload class="pic-upload"
      drag>
      <i class="el-icon-plus uploader-icon"></i>
    </el-upload>
  </el-col>
</template>

<script>
  export default {}
</script>

<style>
  .pic-upload {
    width: 100%;
    .el-upload {
      width: 100%;
      outline: none;
      .el-upload-dragger {
        width: 100%;
        border: 1px solid #e6ebf5;
        transition: all .3s;
        height: 388px;
      }

      .el-upload-dragger:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      }

      .uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 378px;
        line-height: 378px;
        text-align: center;
      }
    }
  }
</style>

