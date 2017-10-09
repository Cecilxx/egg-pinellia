<template>
  <main>
    <hello></hello>
  </main>
</template>

<script>
  import Hello from '~components/Hello'

  export default {
    components: {
      Hello
    },
    methods: {
      hello() {
        this.$message('Hello Vue')
      }
    }
  }

</script>