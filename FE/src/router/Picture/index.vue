<template>
  <main>
    <my-picture></my-picture>
  </main>
</template>

<script>
  import myPicture from '~components/Picture'

  export default {
    components: {
      myPicture
    },
    methods: {
      hello () {
        this.$message('Hello Vue')
      }
    }
  }

</script>