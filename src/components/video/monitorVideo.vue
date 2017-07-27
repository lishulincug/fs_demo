<template>
  <div id="mv">
    <div class="monitorVideoNav">
          <el-row class="monitorVideoNav-col">
            <el-col :span="19" class="monitorVideoNav-col">
                <img class="imglogo" src="../../assets/photo/title@1x.png"/>
            </el-col>
            <el-col :span="3" class="monitorVideoNav-col">
                <div id="mn">
                      <ul>
                          <li class="monitorVideoNav-li"><img class="r-img" src="../../assets/photo/camera1@2x.png" @click="change(1)"/></li>    
                          <li class="monitorVideoNav-li"><img class="r-img" src="../../assets/photo/camera4@2x.png" @click="change(4)"/></li>    
                          <li class="monitorVideoNav-li"><img class="r-img" src="../../assets/photo/camera9@2x.png" @click="change(9)"/></li>    
                          <li class="monitorVideoNav-li"><img class="r-img" src="../../assets/photo/camera16@2x.png" @click="change(16)"/></li>    
                      </ul>     
                </div>
            </el-col>
            <el-col :span="2" class="monitorVideoNav-col">  
                <div id="rn">
                <ul>
                    <li class="monitorVideoNav-li"><img class="r-img"src="../../assets/photo/home@2x.png" @click="routerGo('/')"/></li>    
                    <li class="monitorVideoNav-li"><img class="r-img"src="../../assets/photo/user@2x.png" @click="routerGo('/userinfo')"/></li>    
                    <li class="monitorVideoNav-li"><img class="r-img"src="../../assets/photo/logout@2x.png"   @click="logout()"/></li> 
                </ul> 
                </div>
            </el-col>
          </el-row>
    </div>
    <div class="monitorVideo" id="monitorVideo">
          <div class="left" v-show="videoShow">
              <div class="higher">
                  <p class="monitorVideo-p">监测站视频</p>
                  <el-select v-model="value" placeholder="请选择" class="monitorVideo-sel">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
              </div>
              <div class="line"></div>
              <div class="search-content" id="searchContent">
                <div v-for="result in searchResult" :key="result">
                  <div class="result">
                    <span>01</span>&nbsp&nbsp&nbsp
                    <span>{{result}}</span> 
                  </div>
                </div>
              </div>
          </div>
          <div class="right" v-show="videoShow">
            <el-row>
                 <el-col :span="24"><img class="right-img" src="../../assets/photo/video/1.png"/></el-col> 
            </el-row>  
          </div>
          <div id="all" v-show="!videoShow">
                  <img id="allVideo" v-bind:src="imgSrc" />
          </div>
      </div>
  </div>  
</template>

<script type="text/ecmascript-6">
  export default {
    name:"monitorVideo",
    data () {
      return {
        imgSrc:"",
        videoShow:true,
        options: [{
          value: '选项1',
          label: '站点1'
        }, {
          value: '选项2',
          label: '站点1'
        }, {
          value: '选项3',
          label: '站点1'
        }, {
          value: '选项4',
          label: '站点1'
        }, {
          value: '选项5',
          label: '站点1'
        }],
        value: '',
        keyword: '',
        rowResult: ['二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202'],
        searchResult: ['二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202', '二井湾HQ202']
      }
    },
    methods: {
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
      },
      change(index){
          if(index>1){
            this.videoShow=false; 
            this.imgSrc=require("../../assets/photo/video/"+index+".png");
          }else{
            this.videoShow=true;             
          }  
      },
      search () {
        var result = []
        for (var i = 0; i < this.rowResult.length; i++) {
          if (this.rowResult[i].indexOf(this.keyword) >= 0) {
            result.push(this.rowResult[i])
          }
        }
        this.searchResult = result
      },
      setWidth() {
          var monitorVideo=document.getElementsByClassName("monitorVideo")[0];
          var total = document.documentElement.clientHeight;
          monitorVideo.style.height=total-48+"px";
          var searchContent=document.getElementById("searchContent");
          searchContent.style.height=total-180+"px";
          var rightImg=document.getElementsByClassName('right-img')[0];
          rightImg.style.height=total-48+"px";
          rightImg.style.width=document.documentElement.clientWidth-97-260+'px';
          var allVideo=document.getElementById("allVideo");
          allVideo.style.height=total-48+"px";
          allVideo.style.width=document.documentElement.clientWidth-96+"px";
      }
    },
      mounted() {
      this.setWidth();
    }
}

</script>

<style scoped>
#mv{
  height: 100%;
  
}
/*---------头部  */
.monitorVideoNav{
  background: #505958;
}
#rn{
  background-color:  rgba(41,51,50,0.30);  
  text-align: center;
  height:48px
}
.monitorVideoNav-col{
      height:48px
}
.monitorVideoNav-li{
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
/*   --------  */
  .monitorVideo {
    background-color: #454D4C;
    width: 100%;
  }
  .left{
    width: 247px;
    height: 100%;
    display: inline-block;
    box-sizing: border-box;
    background-color: #454D4C;
    color: #ffffff;
  }
  .monitorVideo-p{
      font-size: 14px;
      line-height: 60px;
      padding:0 15px;
  }


  .line{
    width: 223px;
    margin: 16px 12px;
    border: 1px solid  #9FA6A5;
}
.monitorVideo-sel{
  padding-left:12px; 
  width: 223px;
}

  .search-content {
    width: 247px;
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden
    /*background-color: aqua;*/
  }

  /* 滚动条 */
  .search-content::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .search-content::-webkit-scrollbar-thumb {
    background-color: rgba(192, 192, 192, 1);
    border-radius: 0;
  }


  .result {
    width: 247px;
    height: 56px;
    padding: 25px 15px 19px 15px;
    box-sizing: border-box;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 12px;
    background-color: #454D4C;
  }

  .result:hover {
    background: #5EBF1D;
  }
  /*---------右边  */
  .right{
    float: right;
    height: 100%;
 }


</style>
