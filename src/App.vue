<template>
  <div class="app">
    <template v-if="this.$data.IsHideNavigation === false">
      <Nav></Nav>
      <div class="body">
        <el-col :span="3">
          <el-menu
              :uniqueOpened="true"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"

          >
            <el-sub-menu v-for="item in menu" :index="item.id">
              <template #title v-if="item.sub">
                <i :class="'el-icon-' + item.icon"></i>
                <span>{{ item.title }}</span>
              </template>

              <template v-if="!item.sub">
                <i :class="'el-icon-' + item.icon"></i>
                <span>{{ item.title }}</span>
              </template>


              <template v-if="item.sub && item.sub[0].sub && item.sub[0].sub.length > 0">
                <el-sub-menu v-for="sub in item.sub" :index="item.id + '-' + sub.id">
                  <template #title>{{ sub.title }}</template>
                  <el-menu-item @click="toPath(sub_sub.path)" :index="item.id + '-' + sub.id + '-' + sub_sub.id" v-for="sub_sub in sub.sub">
                    {{ sub_sub.title }}
                  </el-menu-item>
                </el-sub-menu>
              </template>

              <template v-if="item.sub && (!item.sub[0].sub || item.sub[0].sub.length === 0)">
                <el-menu-item @click="toPath(sub.path)" v-for="sub in item.sub" :index="item.id + '-' + sub.id">{{ sub.title }}</el-menu-item>
              </template>


            </el-sub-menu>

          </el-menu>
        </el-col>
        <el-col :span="24-3" class="el-main">
          <router-view/>
        </el-col>
      </div>

    </template>
    <template v-if="this.$data.IsHideNavigation === true">

          <router-view/>

    </template>


  </div>


</template>

<script>
import Nav from '@/components/Nav'

export default {
  data() {
    return {

      menu: [
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
          title: '菜单2',
          icon: 'document',
          sub: [
            {
              id: 1,
              title: '菜单2-1',
              icon: 'document',
              sub: [
                {
                  id: 1,
                  title: 'Home',
                  icon: 'document',
                  path: '/',
                  sub: []
                }
              ]
            }
          ]
        },
      ]
    }
  },
  mounted() {
    console.log(this.$router);
  },
  methods: {

    toPath(path){
      this.$router.push(path)

      console.log(path);
    },

  },
  components: {
    Nav
  },
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .body{
    display:flex;
  }
}

</style>
