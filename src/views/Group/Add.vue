<template>
  <div>
    <el-dialog
        title="添加分组"
        v-model="status"
        :visible.sync="status"
        width="30%"
    >

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="父级">
          <el-select v-model="form.parent" placeholder="父级">
            <el-option
                v-for="item in groupList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="权限">

            <Rule :list="purview"></Rule>

        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">提 交</el-button>
        </span>
    </el-dialog>
  </div>

</template>

<script>
import Rule from "./template/Rule"

export default {
  components: {
    Rule
  },
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {},
      groupList: [
        {label: '超级管理员', value: 1}
      ],
      purview: [
        {
          key: 1, label: '权限1', child: [
            {key: 2, label: '权限1-1', child: []}
          ]
        },
        {
          key: 3, label: '权限2', child: [
            {key: 4, label: '权限2-1', child: []},
            {key: 5, label: '权限2-2', child: []},
            {
              key: 6, label: '权限2-3', child: [
                {key: 7, label: '权限2-3-1', child: []},
                {key: 8, label: '权限2-3-2', child: []},
                {key: 9, label: '权限2-3-3', child: []},
              ]
            },
          ]
        },
      ]
    }
  },
  mounted() {

  },
  methods: {}
}
</script>

<style scoped>
    @import "./less/add.less";
</style>