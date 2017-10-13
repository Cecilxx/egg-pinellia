<template>
  <myCard>
    <div class="img-box">
      <img :src="src"
        alt="">
    </div>
    <div class="title-box">
      {{title}}
    </div>

    <div class="status-box">
      <div class="left">
        <span :class="statusClass">
          {{ statusValue }}

          <el-tooltip v-if="status === 102"
            :content="borrowInfo"
            placement="top"
            effect="light">
            <i class="el-icon-information"></i>
          </el-tooltip>
        </span>

      </div>
    </div>
  </myCard>
</template>

<script>
  import myCard from './Card'

  export default {
    components: {
      myCard
    },
    props: {
      src: {
        type: String,
        default: 'https://img12.360buyimg.com/n7/jfs/t2779/56/3892652095/277373/29e1d2f1/57a01084N1718119c.jpg',
      },
      title: {
        type: String,
        default: '眼药水',
      },
      status: {
        type: Number,
        default: 101,
      },
      statusValue: {
        type: String,
        default: '正常'
      },
      borrowInfo: {
        type: String,
        default: '刘星星 2017.10.1-2017.12.1'
      }
    },
    data () {
      return {
        statusClass: this.status === 101 ? 'normal' : 'borrow'
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
  }

  .status-box {
    padding: 0 10px 10px 10px;

    & .normal {
      color: green
    }
    & .borrow {
      color: red
    }
  }
</style>
