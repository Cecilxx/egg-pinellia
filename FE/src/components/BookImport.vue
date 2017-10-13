<template>
  <el-dialog :visible.sync="showModal"
    :close-on-click-modal="false"
    @close="_close"
    title="手工导入">
    <el-form :model="form">
      <el-form-item label="活动名称"
        :label-width="formLabelWidth">
        <el-input v-model="form.name"
          auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域"
        :label-width="formLabelWidth">
        <el-select v-model="form.region"
          placeholder="请选择活动区域">
          <el-option label="区域一"
            value="shanghai"></el-option>
          <el-option label="区域二"
            value="beijing"></el-option>
        </el-select>
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
        formLabelWidth: '100px'
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