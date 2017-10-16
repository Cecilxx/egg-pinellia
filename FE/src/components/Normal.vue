<template>
  <el-form :model="ruleForm"
    status-icon
    ref="ruleForm"
    :rules="rules">
    <el-form-item label="用户名"
      prop="name">
      <el-input v-model="ruleForm.name"
        disabled></el-input>
    </el-form-item>
    <el-form-item label="密码"
      prop="password">
      <el-input type="password"
        v-model="ruleForm.password"
        disabled></el-input>
    </el-form-item>
    <el-button @click="_register"
      disabled>暂未开放</el-button>
  </el-form>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        ruleForm: {},
        ruleForm2: {},
        rules: {
          name: [{
            required: true
          }],
          password: [{
            required: true
          }]
        }
      }
    },
    methods: {
      _register () {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            axios.post('http://localhost:8080/register', {
              name: this.ruleForm.name,
              password: this.ruleForm.password
            }).then(res => {
              const data = res.data

              this.$message({
                message: data.msg,
                type: data.code === 0 ? 'success' : 'warning'
              });
            })
          }
        })
      },

      _login () {
        this.$refs.ruleForm2.validate(valid => {
          if (valid) {
            axios.post('http://localhost:8080/login', {
              name: this.ruleForm2.name,
              password: this.ruleForm2.password
            }).then(res => {
              const data = res.data

              this.$message({
                message: data.msg,
                type: data.code === 0 ? 'success' : 'warning'
              });
            })
          }
        })
      }
    }
  }
</script>