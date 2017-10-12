<template>
  <el-card class="box-card">
    <el-tabs>
      <el-tab-pane label="注册">
        <el-form :model="ruleForm"
          status-icon
          ref="ruleForm"
          :rules="rules">
          <el-form-item label="用户名"
            prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码"
            prop="password">
            <el-input type="password"
              v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-button @click="_register">注册</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="登录">
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
      </el-tab-pane>
    </el-tabs>
  </el-card>
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

  .box-card {
    width: 300px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
</style>