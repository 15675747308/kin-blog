<template>
  <div class="app">
      <div class="login">
        <el-row align="middle">
          <el-col :span="6">名称</el-col>
          <el-col :span="18">
            <el-input v-model="name"></el-input>
          </el-col>
        </el-row>

        <el-row align="middle">
          <el-col :span=6>密码</el-col>
          <el-col :span="18">
            <el-input type="password" v-model="pwd"></el-input>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-button  @click="login"> 登录 </el-button>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: '',
      pwd: ''
    }
  },
  mounted(){

  },
  methods: {
    login(){
    //  console.log('name:', this.name, '; pwd:' , this.pwd);
      this.$router.push('/')
    },
  }
}
</script>
<style scoped lang="less">
 .app{
   display:flex;
   align-items: center;
   justify-content: center;
   width:100vw;
   height:100vh;
   .login{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     justify-items: center;
     .el-row{
       margin:10px 0;
     }
   }
 }
</style>