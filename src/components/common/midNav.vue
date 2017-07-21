<template>
<div class="grid-content ">
        <el-row>
            <el-col :span="12"><div class="grid-content ">
                    <el-input
                        class="mid-input"
                        placeholder="请选择搜索信息"
                        size="small"
                        icon="search"
                        v-model="search"
                        :on-icon-click="handleIconClick">
                    </el-input>
              </div></el-col> 
              <el-col :span="12">
                   <el-col :span="4"><img class="imgIcon" src="../../assets/photo/zoom+@2x.png"/></el-col> 
                    <el-col :span="4"><img class="imgIcon" src="../../assets/photo/zoom-@2x.png"/></el-col>
                   <el-col :span="4"><img class="imgIcon" src="../../assets/photo/Group 2@2x.png"/></el-col>
                    <el-col :span="4"><img class="imgIcon" src="../../assets/photo/Group@2x.png"/></el-col>
                  <el-col :span="4"><img class="imgIcon" src="../../assets/photo/edit@2x.png"/></el-col> 
                  <el-col :span="4"><img class="imgIcon" src="../../assets/photo/export@2x.png"/></el-col> 
              </el-col> 
            </el-row>
    </div>
</template>

<script>
export default {
  name: 'midNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search:"",
    }
  },
  methods:{
    handleIconClick(){
        alert("这是搜索框")
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .imgIcon{
        display: inline-block;
        width: 24px;
        height: 24px;
        padding: 12px 10px 12px 10px;

    }
    .mid-input{
        padding-top:8px;
        height: 32px;
    }

    i.el-input__icon{
    padding-top: 7px;
    }

    
</style>