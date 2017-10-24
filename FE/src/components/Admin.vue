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
    <el-button @click="_login">登录</el-button>
  </el-form>
</template>

<script>
  import API from '~api'

  export default {
    data() {
      return {
        ruleForm: {},
        ruleForm2: {},
        rules: {
          name: [
            {
              required: true
            }
          ],
          password: [
            {
              required: true
            }
          ]
        }
      }
    },
    methods: {
      _message(message, type = 'success') {
        this.$message({
          message,
          type
        })
      },
      _login() {
        this.$refs.ruleForm2.validate(valid => {
          if (valid) {
            API.login({
              name: this.ruleForm2.name,
              password: this.ruleForm2.password,
              type: 2
            })
              .then(({ data }) => {
                this._message(data.msg)
                window.sessionStorage.setItem('username', this.ruleForm2.name)
                window.sessionStorage.setItem('usertype', 2)
                this.$router.push('pic')
              })
              .catch(() => {
                this._message('登录失败', 'error')
              })
          }
        })
      }
    }
  }
</script>