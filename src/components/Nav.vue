<template>
  <el-affix :offset="0">


  <div id="nav">
    <div class="title">后台管理</div>
    <div class="avatar-name">
      <div class="avatar el-col-1">
        <img
            src="https://img0.baidu.com/it/u=561041293,259965800&fm=26&fmt=auto&gp=0.jpg"
            alt="">
      </div>
      <div class="name el-col-2">kin</div>
    </div>
    <div class="signOut">
      <el-button size="small" @click="signOut">退出</el-button>
    </div>
  </div>
  </el-affix>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    signOut(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
#nav {
  border-bottom:1px solid #ccc;
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0 15px;
  background-color:#fff;

  .title {
    flex: 1;
    text-align: left;
    font-size: 24px;
  }

  .avatar-name {

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .avatar {
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .name{
      text-align: left;
      margin-left:5px;
      font-size:20px;
    }
  }
}

</style>