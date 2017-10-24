<template>
  <el-dialog :visible.sync="showModal"
    @close="_close"
    title="借阅">
    <el-form :model="form"
      ref="borrowForm"
      :label-width="formLabelWidth"
      :rules="rules">
      <el-form-item label="借阅人"
        prop="name">
        <el-input v-model="form.name"
          auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="时间"
        prop="date">
        <el-input v-model="form.date"
          auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer"
      class="dialog-footer">
      <el-button @click="_close">取 消</el-button>
      <el-button type="primary"
        @click="_borrow">确 定</el-button>
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
      }
    },
    data() {
      return {
        form: {
          title: '',
          date: ''
        },
        rules: {
          name: [
            {
              required: true
            }
          ],
          date: [
            {
              required: true
            }
          ]
        },
        formLabelWidth: '80px'
      }
    },
    methods: {
      _close() {
        this.$emit('cancel')
      },
      _borrow() {
        this.$refs.borrowForm.validate(valid => {
          if (valid) {
            this.$emit('ok', this.form)
          }
        })
      }
    },
    computed: {
      showModal: {
        get: function() {
          return this.dialogFormVisible
        },
        set: function() {}
      }
    }
  }
</script>