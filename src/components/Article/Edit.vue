<template>
  <div id="app">

    <el-dialog
        title="编辑"
        v-model="status"
        width="50%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title" size="small"></el-input>
        </el-form-item>
        <el-form-item label="分类选择">
          <el-select-v2 v-model="form.classify"  multiple :options="classify" style="width: 100%;text-align:left;"  />
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="form.description"></el-input>
        </el-form-item>

        <el-form-item label="内容">
          <QuillEditor theme="show"></QuillEditor>
        </el-form-item>

      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="status = false">取 消</el-button>
          <el-button type="primary" @click="status = false">发布</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import QuillEditor from "@vueup/vue-quill"
import '@vueup/vue-quill/dist/vue-quill.snow.css'


export default {
  props: {
    status: Boolean,
    id: Number
  },
  data() {
    return {
      form: {
        classify:[]
      },
      classify: [
        {value: 1, label: '测试选项1'},
        {value: 2, label: '测试选项2'},
        {value: 3, label: '测试选项3'},
      ]
    }
  },
  mounted() {

  },
  components:{
    QuillEditor
  }
}
</script>

<style scoped>
@import "edit.less";
</style>