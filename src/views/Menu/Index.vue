<template>
  <div>
    <div class="head">
      <el-button type="primary" size="small" @click="add.status = true">添加</el-button>
    </div>
    <div class="body">
      <el-table :data="menuList" style="width: 100%">

        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column label="图标">
          <template #default="scope">
            <div :class="'el-icon-' + scope.row.icon"></div>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="path" label="路由"></el-table-column>
        <el-table-column prop="way" label="路径"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="primary" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Add :status="add.status"></Add>
    </div>
  </div>
</template>

<script>
import Add from "./Add";
export default {
  components:{
    Add
  },
  data() {
    return {
      add:{
        status: false
      },
      menuList: [
        {
          id: 1,
          title: '文章管理',
          icon: 'location',
          way: '1'
        },
        {
          id: 2,
          title: '文章列表',
          icon: 'location',
          path: '/article',
          way: '1-2'
        },
        {
          id: 3,
          title: '分类管理',
          icon: 'location',
          path: '/classify',
          way: '1-3'
        },
        {
          id: 4,
          title: '系统设置',
          icon: 'document',
          way: '4'
        },
        {
          id: 5,
          title: '菜单管理',
          icon: 'document',
          path: '/menu',
          way: '4-5'
        }
      ]
    }
  },
  mounted() {

  },
  methods: {}
}
</script>

<style scoped lang="less">
@import "index";
</style>