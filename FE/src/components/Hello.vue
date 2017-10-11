<template>
  <el-tabs class="my-tabs">
    <el-tab-pane label="注册">
      <el-form :model="ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-button @click="_register">注册</el-button>
      </el-form>
    </el-tab-pane>

    <el-tab-pane label="登录">
      <el-form :model="ruleForm2">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm2.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm2.password"></el-input>
        </el-form-item>
        <el-button @click="_login">登录</el-button>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        ruleForm: {},
        ruleForm2: {}
      }
    },
    methods: {
      _register() {
        axios.post('http://localhost:8080/register', {
          name: this.ruleForm.name,
          password: this.ruleForm.password
        }).then(res => {
          console.log(res)
          const data = res.data

          alert(data.msg)
        })
      },

      _login() {
        axios.post('http://localhost:8080/login', {
          name: this.ruleForm2.name,
          password: this.ruleForm2.password
        }).then(res => {
          console.log(res)
          const data = res.data

          alert(data.msg)
        })
      }
    }
  }

</script>

<style>
  .my-tabs {
    width: 200px;
    height: 300px;
    background: #fff;
    box-shadow: 1px solid #ccc;
    border: 1px solid #333;
    padding: 20px;
    margin: 0 auto;
  }
</style>