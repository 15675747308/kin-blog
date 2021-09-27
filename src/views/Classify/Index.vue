<template>
  <div class="app">

    <div class="l">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="分类名称">
            <el-input v-model="form.name" placeholder="分类名称"></el-input>
        </el-form-item>
       <el-form-item>
         <el-button type="primary" class="add">添加</el-button>
       </el-form-item>
      </el-form>
    </div>
    <div class="r">

      <el-table
          :data="[{ id: '1', name: 'PHP' }, { id: '2', name: 'Go' }]"
          >
        <el-table-column prop="id" label="ID" width="50">
        </el-table-column>
        <el-table-column prop="name" label="分类" >
        </el-table-column>
        <el-table-column label="操作" width="100px">
          <template #default="scope">
            <el-button type="primary" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      form:{}
    }
  }
}
</script>

<style scoped lang="less">
@import "index.less";
</style>