<template>
      <div id="headerTool">
          <el-row class="headerTool-col">
            <el-col :span="12" class="headerTool-col">
                <img class="imglogo" src="../../assets/photo/title@1x.png"/>
            </el-col>
            <el-col :span="10" class="headerTool-col">
                      <el-row class="headerTool-col">
                            <el-col :span="12" >
                                    <el-input
                                        class="mid-input"
                                        placeholder="请选择搜索信息"
                                        size="small"
                                        icon="search"
                                        v-model="search"
                                        :on-icon-click="handleIconClick">
                                    </el-input>
                              </el-col> 
                              <el-col :span="12">
                                  <el-col :span="4"><img class="imgIcon" src="../../assets/photo/zoom+@2x.png"/></el-col> 
                                  <el-col :span="4"><img class="imgIcon" src="../../assets/photo/zoom-@2x.png"/></el-col>
                                  <el-col :span="4">
                                      <!-- <img class="imgIcon" src="../../assets/photo/Group 2@2x.png"/> -->
                                    <el-dropdown class="headerTool-dropdown" menu-align="start">
                                        <span class="el-dropdown-link">
                                          <img class="imgIcon" src="../../assets/photo/Group 2@2x.png"/>
                                        </span>
                                        <el-dropdown-menu slot="dropdown" class="headerTool-menu">
                                            <el-dropdown-item class="headerTool-item">测量距离</el-dropdown-item>
                                            <el-dropdown-item class="headerTool-item">面积测量</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-dropdown class="headerTool-dropdown" menu-align="start">
                                        <span class="el-dropdown-link">
                                          <img class="imgIcon" src="../../assets/photo/Group@2x.png"/>
                                        </span>
                                        <el-dropdown-menu slot="dropdown" class="headerTool-menu">
                                            <el-dropdown-item class="headerTool-item">测量距离</el-dropdown-item>
                                            <el-dropdown-item class="headerTool-item">面积测量</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>                  
                                  </el-col>
                                  <el-col :span="4"><img class="imgIcon" src="../../assets/photo/edit@2x.png"/></el-col> 
                                  <el-col :span="4"><img class="imgIcon" src="../../assets/photo/export@2x.png"/></el-col> 
                              </el-col> 
                            </el-row>
            </el-col>
            <el-col :span="2" class="headerTool-col">  
                <div id="rn">
                <ul>
                    <li class="headerTool-li"><img class="r-img"src="../../assets/photo/home@2x.png" @click="routerGo('/')"/></li>    
                    <li class="headerTool-li"><img class="r-img"src="../../assets/photo/user@2x.png" @click="routerGo('/userinfo')"/></li>    
                    <li class="headerTool-li"><img class="r-img"src="../../assets/photo/logout@2x.png"   @click="logout()"/></li> 
                </ul> 
                </div>
            </el-col>
          </el-row>
      </div>    
</template>
<script>
export default {
    name: 'headerTool',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      signupActive:'',
      search:'',
    }
  },

  methods:{
    routerGo(url){
        this.$router.push(url);
      },
      handleIconClick(){

      },
    logout(){
      var _this = this;
       this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				})
          .then(function(){
              sessionStorage.removeItem('user');
              _this.$router.push('/signin');
          });
    }
  },
}
</script>
<style scoped>
#headerTool{
  background: #505958;
}
#rn{
  background-color:  rgba(41,51,50,0.30);  
  text-align: center;
  height:48px
}
.headerTool-col{
      height:48px
}
.headerTool-li{
    list-style-type:none;
    display: inline-block;
}
.r-img{
    display: inline-block;
    width: 24px;
    height: 24px;
    padding: 10px 10px ;
}
.imglogo{
  display: inline-block;
  height: 28px;
  padding:10px 24px;
}

/*  中间项 */
  .imgIcon{
        display: inline-block;
        width: 24px;
        height: 24px;
        padding: 12px 10px 12px 10px;

    }
    .mid-input{
        margin-top:8px;
        height: 32px;
    }
    .headerTool-dropdown{
        display: inline-block;
        width: 24px;
        height: 24px;  
        color: #ffffff; 
    }
    .headerTool-menu{
        background: #505958;
        border: 0px;
        padding: 0;
        margin-top: 30px;
        color: #ffffff;
    }
    .headerTool-item:hover{
        background: #5EBF1D;
    }
</style>
