<template>
  <el-dialog :visible.sync="showModal"
    @close="_close"
    title="借阅">
    <el-form :model="form"
      ref="borrowForm"
      :label-width="formLabelWidth"
      :rules="rules">
      <el-form-item label="借阅人"
        prop="borrowName">
        <el-input v-model="form.borrowName" :disabled="true"
          auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="时间"
        prop="borrowDate">
        <el-date-picker
          style="width: 100%"
          v-model="form.borrowDate"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
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
          borrowName: sessionStorage.getItem('username'),
          borrowDate: ''
        },
        value11: '',
        rules: {
          borrowName: [
            {
              required: true
            }
          ],
          borrowDate: [
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