<template>
  <el-form :model="ruleForm2"
    status-icon
    ref="ruleForm2"
    :rules="rules">
    <el-form-item label="用户名"
      prop="name">
      <el-input v-model="ruleForm2.name"></el-input>
    </el-form-item>
    <el-form-item label="密码"
      prop="password">
      <el-input type="password"
        v-model="ruleForm2.password"></el-input>
    </el-form-item>
    <el-button @click="_register">注册</el-button>
    <el-button @click="_login">登录</el-button>
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
        this.$refs.ruleForm2.validate(valid => {
          if (valid) {
            axios.post('http://localhost:8080/register', {
              name: this.ruleForm2.name,
              password: this.ruleForm2.password,
              type: 2
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
              password: this.ruleForm2.password,
              type: 2
            }).then(res => {
              const data = res.data

              this.$message({
                message: data.msg,
                type: data.code === 0 ? 'success' : 'warning'
              })
              if (data.code === 0) {
                window.sessionStorage.setItem('username', this.ruleForm2.name)
                window.sessionStorage.setItem('usertype', 2)
                this.$router.push('pic')
              }
            })
          }
        })
      }
    }
  }
</script>