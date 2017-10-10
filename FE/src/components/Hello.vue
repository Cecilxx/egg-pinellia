<template>
  <div>
    <el-form :model="ruleForm" :rules="rules">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-button @click="_click">注册</el-button>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        ruleForm: {},
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      _click() {
        axios.post('http://localhost:8080/user', {
          name: this.ruleForm.name,
          password: this.ruleForm.password
        }).then(res => {
          console.log(res)
          const data = res.data

          alert(data.msg)
        })
      }
    }
  }

</script>