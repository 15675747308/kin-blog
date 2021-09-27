<template>
  <div id="app">

    <div class="head">
      <div class="l">
        <el-button size="mini" @click="add.status = true">添加</el-button>
      </div>
      <div class="r">
        <el-input placeholder="请输入" v-model="search_value" class="search" size="small">
<template #append>
  <el-button class="el-icon-search" size="small"></el-button>
</template>
        </el-input>
      </div>
    </div>

    <div class="data">
      <el-table :data="article">
        <el-table-column type="expand">
          <template #default="props">
            {{props.row.content}}
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" width="50"></el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="classify" label="分类" width="100"></el-table-column>
        <el-table-column prop="hits" sortable="" label="浏览量" width="100"></el-table-column>
        <el-table-column prop="comment_count" sortable="" label="评论数" width="100"></el-table-column>
        <el-table-column prop="create_date" sortable="" label="发布时间" width="200"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>

        <el-table-column label="操作" width="200" align="center">
          <template #default="scope">
            <el-button size="mini" @click="edit.id=scope.row.id , edit.status = true">编辑</el-button>
            <el-popconfirm title="确定删除吗？" confirmButtonText="确定"
                           cancelButtonText="取消" @confirm="delArticle(scope.row.id)">
              <template #reference>
                <el-button type="danger" size="mini">删除</el-button>
              </template>
            </el-popconfirm>

          </template>
        </el-table-column>

      </el-table>
    </div>

    <Edit :id="edit.id" :status="edit.status" :closed="()=>{edit.status = false}"></Edit>
    <Add  :status="add.status" :closed="()=>{add.status = false}"></Add>


  </div>
</template>
<script>
import Edit from '../../components/Article/Edit.vue'
import Add from '../../components/Article/Add.vue'
import {ElMessage} from 'element-plus'
export default {
  data() {
    return {

      add:{
        status: false
      },
      edit: {
        status: false,
        id: 0,
      },
      search_value:'',
      article:[
        {
          id: 1,
          title: '标题1',
          classify: 'PHP',
          hits: 1234,
          comment_count: 81,
          description: '描述...',
          create_date: '2021-1-1 11:55:07',
          content:'2021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:07'
        },
        {
          id: 2,
          title: '标题2',
          classify: 'PHP',
          hits: 12344,
          comment_count: 181,
          description: '描述...',
          create_date: '2021-1-1 11:55:09',
          content:'2021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:07'
        },
        {
          id: 3,
          title: '标题3',
          classify: 'CSS',
          hits: 12134,
          comment_count: 61,
          description: '描述...',
          create_date: '2021-1-1 11:55:06',
          content:'2021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:072021-1-1 11:55:07'
        },
      ]
    }
  },
  mounted() {

  },
  methods: {
    delArticle(id){
      ElMessage.success({
        message: '删除成功',

      });
    }
  },
  components:{
    Edit,
    Add
  }
}
</script>

<style lang="less" scoped>
@import "index";

</style>
