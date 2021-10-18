<template>
  <div class="list" :class="{'none':none}" :style="'margin-left:' +mar+ 'rem'" >
    <div class="item"  v-for="item in list">

      <el-checkbox :key="item.key" :label="item.label">{{ item.label }}</el-checkbox>
      <el-checkbox-group v-model="checkedCityList">

        <rule :list="item.child" :mar="mar + .5" :none="isNone(item.child)"></rule>
      </el-checkbox-group>
    </div>
  </div>

</template>

<script>
export default {
  name:'rule',
  props:{
    list:Array,
    mar: {
      type: Number,
      default: .5
    },
    none: Boolean
  },
  methods:{
    isNone(row){



      let ret = true;

      row.forEach((item, index) =>{

        if(item.child.length > 0){
         ret = false
        }
      })

      return ret;

    }
  }
}
</script>

<style scoped lang="less">

.none{
  display:flex;
  width:100%;
  flex-wrap: wrap;

}
.list{
   .item{
     margin:0 .2rem;
   }
 }


</style>