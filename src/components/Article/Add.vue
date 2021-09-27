<template>
  <div id="app">

    <el-dialog
        custom-class="form"
        title="编辑"
        v-model="status"
        width="50%"
        height="300px"
        @closed="closed"
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
          <div  ref="ct" style="text-align: left"></div>
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

import E from 'wangeditor'
import {watch} from "vue";



export default {
  props: {
    status: Boolean,
    closed: Function
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
      ],
      cmOptions:{
        mode: 'text/javascript', // Language mode
        theme: 'dracula', // Theme
        lineNumbers: true, // Show line number
        smartIndent: true, // Smart indent
        indentUnit: 2, // The smart indent unit is 2 spaces in length
        foldGutter: true, // Code folding
        styleActiveLine: true, // Display the style of the selected row
      }
    }
  },
  mounted() {

   let ct = setInterval(()=>{
      if (this.$refs.ct !== undefined){
        console.log(this.$refs.ct)
        const editor = new E(this.$refs.ct)
        editor.create()
        clearInterval(ct)
      }

    }, 1000);


/*    const editor = new E(this.$refs.)
    editor.create()*/
  },
  /*setup(props){
    let that = this;
    watch(
        ()=>props.status,(newValue, oldValue) => {
          if (newValue == 1) {
            console.log(this.$refs.ct);
          }
        }
    )
  }*/
}
</script>

<style scoped>

@import "add.less";
</style>