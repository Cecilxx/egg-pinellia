<template>
  <el-dialog :visible.sync="showModal"
    @close="_close"
    title="手工导入">
    <el-form :model="form"
      ref="importForm"
      :label-width="formLabelWidth"
      :rules="rules">
      <el-form-item label="名称"
        prop="title">
        <el-input v-model="form.title"
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
      <el-button @click="_close">取 消</el-button>
      <el-button type="primary"
        @click="_import">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import API from '~api'
  export default {
    props: {
      dialogFormVisible: {
        type: Boolean,
        default: false
      },
      values: {
        type: Object,
        default: () => ({})
      }
    },
    data () {
      return {
        form: {
          title: this.values.title,
          author: this.values.author,
          remark: this.values.remark
        },
        rules: {
          title: [{
            required: true
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
        this.$emit('cancel')
      },
      _import () {
        this.$refs.importForm.validate(valid => {
          if (valid) {
            this.$emit('ok', this.form)
          }
        })
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