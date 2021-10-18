<template>

  <div class="header">
    <el-button type="primary" size="mini" @click="add.status = true">添加分组</el-button>
  </div>

  <div>
      <KTable :data="data" :column="column"></KTable>
  </div>

  <Add :status="add.status"></Add>
</template>

<script>
import KTable from "../../components/KTable";
import Add from "./Add";

export default {
  components:{
    KTable,
    Add
  },
  data(){
    return {
      add:{
        status: false
      },
      data:[
        {id: 1, parent: 0, name: '超级管理员', status: 1}
      ],
      column:[
        {field: 'id', name:"ID"},
        {field: 'parent', name:"父级"},
        {field: 'name', name:"名称"},
        {field: 'status', name:"状态", type: 'switch'},
        {field: '', name:"操作", type: 'operate'},
      ]
    }
  }


}
</script>

<style scoped>
@import "./less/index.less";

</style>