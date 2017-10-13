<template>
  <myCard>
    <div class="add"
      @mouseenter="_mouseover"
      @mouseleave="_mouseout">
      <transition name="el-fade-in-linear">
        <i class="el-icon-plus icon"
          v-if="!showBtn"></i>
        <div v-else
          class="icon">
          <el-button type="text"
            @click="_import">手工导入</el-button>
        </div>
      </transition>
      <bookImport :dialogFormVisible="importBook"
        @close="_close"></bookImport>
    </div>
  </myCard>
</template>

<script>
  import myCard from './Card'
  import bookImport from './BookImport'
  export default {
    components: {
      myCard,
      bookImport
    },
    data () {
      return {
        showBtn: false,
        importBook: false
      }
    },
    methods: {
      _mouseover () {
        this.showBtn = true
      },
      _mouseout () {
        this.showBtn = false
      },
      _import () {
        this.importBook = true
      },
      _close () {
        this.importBook = false
      }
    }
  }
</script>

<style>
  .add {
    width: 100%;
    height: 350px;
  }

  .icon {
    font-size: 28px;
    color: #8c939d;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
</style>

