<template>

  <div class="header">
    <el-button type="primary" size="mini" @click="add.status = true">添加管理员</el-button>
  </div>

    <KTable :data="data" :column="column" >

    </KTable>

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
        status: false,
      },
      data:[
        {name: 'admin', group: '超级管理员', status: "1", last_ip: '127.0.0.1', last_time: '1634525698'}
      ],
      column:[
        {
          field: 'name',
          name: '用户名',
        },
        {
          field: 'group',
          name: '组别',
        },
        {
          field: 'status',
          name: '状态',
        },
        {
          field: 'last_ip',
          name: '最后登录ip',
        },
        {
          field: 'last_time',
          name: '最后登录时间',
          call: 'format_date'
        },
        {
          field: '',
          name: '操作',
          type:'operate',

        },
      ]
    }
  }
}
</script>

<style scoped>
@import './less/index.less';

</style>