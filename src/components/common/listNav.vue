<template>
  <div id="listNav">
        <div class="navUp" >
            <img   class="logo" src="../../assets/photo/logo_聚升2@2x.png"/>
            <div class="line"></div>
        </div>
        <div>
       <ul>
            <li class="listNav-li">
                <div class="li-div" @click="routerGo(0,'/')">
                    <img src="../../assets/photo/nav/map@2x.png"/>
                    <p><small>森防地图</small></p>                              
                </div>
            </li>
             <li class="listNav-li">
                <div class="li-div" @click="routerGo(1,'/resource')">
                        <img src="../../assets/photo/nav/ziyuan@2x.png"/>
                        <p><small>资源管理</small></p>                                 
                </div>
            </li>
             <li class="listNav-li">
                    <el-dropdown class="listNav-dropdown"  >
                        <span class="el-dropdown-link">
                            <div class="li-div">
                                <img src="../../assets/photo/nav/shipinjiance@2x.png"/>
                                <p><small>视频监测</small></p>                              
                            </div>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="listNav-menu">
                            <el-dropdown-item  v-on:click.native="routerGo(2,'/video/monitorVideo')" class="listNav-item">监测站</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(2,'/video/plane')" class="listNav-item">无人机</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>   
            </li>            
             <li class="listNav-li">
                    <el-dropdown class="listNav-dropdown"  >
                        <span class="el-dropdown-link">
                            <div class="li-div">
                                <img src="../../assets/photo/nav/senfang@2x.png"/>
                                <p><small>气象监测</small></p>                              
                            </div>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="listNav-menu">
                            <el-dropdown-item  v-on:click.native="routerGo(3,'/weather/monitoringManagement')" class="listNav-item">监测管理</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(3,'/weather/analyse')" class="listNav-item">对比分析</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>   
            </li>               
            <li class="listNav-li">
                    <el-dropdown class="listNav-dropdown"  >
                        <span class="el-dropdown-link">
                            <div class="li-div">
                                <img src="../../assets/photo/nav/xuncha@2x.png"/>
                                <p><small>巡护监测</small></p>                              
                            </div>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="listNav-menu">
                            <el-dropdown-item  v-on:click.native="routerGo(4,'/patrol/user')" class="listNav-item">巡护人员</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(4,'/')" class="listNav-item">巡护排班</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(4,'/')" class="listNav-item">实时监测</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(4,'/')" class="listNav-item">轨迹回放</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>   
            </li>               
            <li class="listNav-li">
                    <el-dropdown class="listNav-dropdown"  >
                        <span class="el-dropdown-link">
                            <div class="li-div">
                                <img src="../../assets/photo/nav/yujing@2x.png"/>
                                <p><small>防火预警</small></p>                              
                            </div>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="listNav-menu">
                            <el-dropdown-item  v-on:click.native="routerGo(5,'/')" class="listNav-item">火险气象等级预警</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(5,'/fireWarning/plan')" class="listNav-item">防火应急预警</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(5,'/')" class="listNav-item">可燃物管理</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>   
            </li>               
            <li class="listNav-li">
                    <el-dropdown class="listNav-dropdown"  >
                        <span class="el-dropdown-link">
                            <div class="li-div">
                                <img src="../../assets/photo/nav/huozai@2x.png"/>
                                <p><small>火灾管理</small></p>                              
                            </div>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="listNav-menu">
                            <el-dropdown-item  v-on:click.native="routerGo(6,'/fireSciencManagement/position')" class="listNav-item">坐标定位</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(6,'/')" class="listNav-item">火点定位</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(6,'/')" class="listNav-item">火灾档案</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(6,'/')" class="listNav-item">成果管理</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>   
            </li>               
            <li class="listNav-li">
                <div class="li-div" @click="routerGo(7,'/outFireConduct')">
                    <img src="../../assets/photo/nav/yingjidiaodu@2x.png"/>
                    <p><small>扑火指挥</small></p>                              
                 </div> 
            </li>               
            <li class="listNav-li">
                <div class="li-div" @click="routerGo(8,'/loss')">
                    <img src="../../assets/photo/nav/pinggu@2x.png"/>
                    <p><small>损失评估</small></p>                              
                </div>

            </li>                      
        </ul> 

        </div>
  
  </div>
</template>

<script>
export default {
  name: 'listNav',
      data() {
      return {
        defaultIndex:0,
        activeIndex:""
      };
    },
    methods: {
        routerGo(index,url){
            this.changeColor(index)
            this.$router.push(url);
        },
        changeColor(index){
            var ary=document.getElementsByClassName("listNav-li");
                for(var i=0;i<ary.length;i++){
                    if(i!=index){
                        ary[i].style.backgroundColor="#37403F"  
                    }else{
                        ary[index].style.backgroundColor="#5EBF1D"                
                    }
                }
        }
    } ,
    mounted(){
        this.changeColor(this.defaultIndex)
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#listNav{
    background-color:#37403F;
    width: 96px;
    height: 100%;
    position: fixed;

}
 img{
    display: block;
    height:32px;
    width: 32px;
    padding-left: 16px;
} 
.navUp{
  padding: 0 12px;
}
.logo{
    display: block;
    height:72px;
    width: 72px;
    padding: 12px 1px 12px;;
}
.line{
    background: rgba(227,230,229, 0.2);
    height: 1px;
    width: 72px;
}

li{
    display: block;
    height: 80px;
    list-style-type:none
}
.li-div{
    padding:14px 16px 14px; 
    margin: 0;
    width: 64px;
    text-align: center;
}
p{
    font-size: 12px;
    color: rgba(255,255,255,0.80);
    line-height: 12px;
    padding-top:8px
}
    .listNav-menu{
        background: #505958;
        border: 0px;
        padding: 0;
        margin-left: 100px;
        margin-top: -70px;
        color: #ffffff;
        font-size: 12px;
        line-height: 12px;
    }
    .listNav-item{
        height: 40px;
        width: 100px;
    }
    .listNav-item:hover{
        background: #5EBF1D;
        color: #FFFFFF;
    }
li:hover{
        background: #5EBF1D;

}
</style>