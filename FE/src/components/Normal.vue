<template>
  <el-form :model="ruleForm"
    status-icon
    ref="ruleForm"
    :rules="rules">
    <el-form-item label="用户名"
      prop="name">
      <el-input v-model="ruleForm.name"
        ></el-input>
    </el-form-item>
    <el-form-item label="密码"
      prop="password">
      <el-input type="password"
        v-model="ruleForm.password"
        ></el-input>
    </el-form-item>
    <el-button @click="_register"
      >注册</el-button>
    <el-button @click="_login"
      >登录</el-button>
  </el-form>
</template>

<script>
  import axios from 'axios'
  import API from '~api'
  export default {
    data() {
      return {
        ruleForm: {},
        ruleForm: {},
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
      _message(message, type) {
        this.$message({
          message,
          type
        })
      },
      _register() {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            API.register({
              name: this.ruleForm.name,
              password: this.ruleForm.password,
              type: 1
            })
              .then(({ data }) => {
                this._message(data.msg)
              })
              .catch(() => {
                this._message('注册失败', 'error')
              })
          }
        })
      },

      _login() {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            API.login({
              name: this.ruleForm.name,
              password: this.ruleForm.password,
              type: 1
            })
              .then(({ data }) => {
                this._message(data.msg)
                window.sessionStorage.setItem('username', this.ruleForm.name)
                window.sessionStorage.setItem('usertype', 1)
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