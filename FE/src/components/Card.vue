<template>
  <el-col :span="6"
    class="pic-item">
    <el-card class="card"
      :body-style="{ padding: '0px' }">
      <img src="http://element.eleme.io/2.0/static/hamburger.50e4091.png"
        class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text"
            class="button">操作按钮</el-button>
        </div>
      </div>
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
  .pic-item {
    margin-bottom: 10px;
    .el-card {
      box-shadow: none;
      transition: all .3s;
    }
    .card:hover {
      box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
      border-color: transparent;
    }
    .image {
      width: 100%;
      display: block;
      height: 310px;
      ;
    }
    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }
  }
</style>

