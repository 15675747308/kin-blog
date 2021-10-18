<template>
  <el-table :data="data" style="width: 100%">

    <el-table-column  :label="col.name" :width="col.width" v-for="col in column.filter((item) =>{ return item.type !== 'operate'})">
      <template #default="item">
        <div v-html="col.call?callback(col.call, item.row[col.field], item.row, col):item.row[col.field] "></div>
      </template>
    </el-table-column>

    <el-table-column fixed="right" label="操作" v-for="col in column.filter((item) =>{ return item.type === 'operate'})">
      <template #default>
        <el-button  type="primary" size="mini">编辑</el-button>
        <el-button  type="danger" size="mini" @click="" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
export default {
  props:{
    data:Array,
    column:Array
  },
  data() {
    return {
     format_func:{
       //时间戳转日期
       format_date(value, row, col){

         let date = new Date(Number(value) * 1000)

         return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

       }
     }
    }
  },
  methods: {
    callback(call, value, row, col) {


      if(typeof call == 'function'){
        return call(value, row, col)
      } else {
        if(typeof this.format_func[call] == 'function'){
          return this.format_func[call](value, row, col)
        } else {
          return value
        }
      }


    },
  },
}
</script>
