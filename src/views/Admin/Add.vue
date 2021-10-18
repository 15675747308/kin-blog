<template>
  <div>
    <el-dialog v-model="status" title="添加管理员" width="30%" >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="所属分组">
          <el-select v-model="form.group" placeholder="选择组别" multiple>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户名">
          <el-input v-model="form.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
              v-model="form.status"
          >
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="danger">取消</el-button>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props:{
    status: {
      type: Boolean,
      default: false,
    }
  },
  data(){
    return {
      form:{

      },
      options:[
        {
          label: '超级管理员',
          value: 1,
          child:[
            {label: '管理员', value: 2}
          ]
        },
        {
          label: '运营',
          value: 3
        },
      ]
    }
  }
}
</script>

<style scoped>
@import "./less/add.less";


</style>