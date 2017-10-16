<template>
  <el-dialog :visible.sync="showModal"
    :close-on-click-modal="false"
    @close="_close"
    title="手工导入">
    <el-form :model="form"
      :label-width="formLabelWidth"
      :rules="rules">
      <el-form-item label="名称"
        prop="name">
        <el-input v-model="form.name"
          auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="作者"
        prop="author">
        <el-input v-model="form.author"
          auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="备注"
        prop="remark">
        <el-input v-model="form.remark"
          type="textarea"
          resize="none"
          :rows="3"
          auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer"
      class="dialog-footer">
      <el-button>取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    props: {
      dialogFormVisible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [{
            required: true,
            message: '必填'
          }],
          author: [{
            required: true
          }]
        },
        formLabelWidth: '60px',
        autoSize: { minRows: 3, maxRows: 3 }
      }
    },
    methods: {
      _close () {
        this.$emit('close')
      }
    },
    computed: {
      showModal: {
        get: function () {
          return this.dialogFormVisible
        },
        set: function () { }
      }
    }
  }
</script>