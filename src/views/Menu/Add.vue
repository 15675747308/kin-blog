<template>
  <div>
    <el-dialog
        title="添加标题"
        v-model="status"
        width="30%"
    >
      <div class="body">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="菜单类型">
            <el-radio v-model="form.type" label="1">是</el-radio>
            <el-radio v-model="form.type" label="0">否</el-radio>
          </el-form-item>
          <el-form-item label="父级">
            <el-select v-model="form.parent" placeholder="placeholder">
              <el-option
                  v-for="item in formatMenu(menuList)"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"

              >

              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.url" placeholder="url地址"></el-input>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="form.title" placeholder="标题"></el-input>
          </el-form-item>
          <el-form-item label="图标">
            <el-input v-model="form.icon" placeholder="请输入图标class"></el-input>
          </el-form-item>
          <el-form-item label="权重">
            <el-input v-model="form.weights" placeholder="权重"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-input v-model="form.status" placeholder="状态"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.remark" placeholder="备注"></el-input>
          </el-form-item>
        </el-form>
      </div>


      <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
      </template>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data(){
    return {
      form:{
        type: '1'
      },
      menuList: [
        {
          id: 1,
          title: '文章管理',
          icon: 'location',
          sub: [
            {
              id: 1,
              title: '文章列表',
              icon: 'location',
              path: '/article',
              sub: []
            },
            {
              id: 2,
              title: '分类管理',
              icon: 'location',
              path: '/classify',
              sub: []
            },
          ]
        },
        {
          id: 2,
          title: '系统设置',
          icon: 'document',
          sub: [
            {
              id: 1,
              title: '菜单管理',
              icon: 'document',
              path: '/menu',
              sub: [
                {
                  id: 1,
                  title: '菜单管理',
                  icon: 'document',
                  path: '/menu'
                }
              ]
            }
          ]
        },
      ]
    }
  },
  methods:{
    formatMenu(menu, prefix = '├'){
      let list = [];
      menu.forEach( (value, index, array) => {
        console.log(value);

        if(prefix === '├'){
          var titles = value.title;
        } else {
          var titles = prefix + ' ' + value.title;
        }

        list.push({
         title: titles,
         id: value.id
        })
        if(value.sub) {
          list.push(...this.formatMenu(value.sub, prefix + '─'));
        }



        console.log(value);
      })
    return list;
    }
  },
  props:{
    status:Boolean,
  }
}
</script>

<style scoped>

</style>