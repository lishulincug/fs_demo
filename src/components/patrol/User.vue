<template>
   <div class="user" id="user">
         <div class="higher">
                <p class="user-title">火点查询</p>
                  <el-select v-model="input2" class="user-select" placeholder="请选择地区">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                
                <el-input 
                placeholder="请搜索内容"
                icon="search"
                class="user-input"
                v-model="input2"
                :on-icon-click="handleIconClick">
                </el-input>
                <button class="user-button">增员</button>

        </div>
        <div class="line"></div>
        <div class="mid">
            <div v-for="item in userInfos" :key="item.name">
                <div class="result">
                    <div class="result-sex">
                         <img v-if="item.sex==1" class="sexLogo" src="../../assets/photo/nan.png"> 
                         <template v-else> 
                            <img  class="sexLogo" src="../../assets/photo/nv.png"> 
                        </template>
                    </div>
                    <div class="result-info">
                        <p  class="info">{{item.name}}</p>
                        <span  class="info">状态：   {{item.active}}</span>                       
                    </div>              
                </div>
           </div>
            <el-pagination
            small
            layout="prev, pager, next"
            :total="50">
            </el-pagination>
        </div>

        <div class="line"></div>
        <div class="lower"> 
                <div v-for="Info in Infos" :key="Info.key">
                  <div class=" Info-key">{{Info.key}}</div>
                  <div class=" Info-value">{{Info.value}}</div>
                </div>
        </div> 
        <div class="line"></div>  
        <img class="editLogo img-l" src="../../assets/photo/edit-off@2x.png">
        <img class="delLogo img-l" src="../../assets/photo/delete@2x.png">
        <img @click="show" class="watchLogo img-l"src="../../assets/photo/log-off@2x.png">

        <div v-show="logOn" class="log">
                 <img class="lon-on" src="../../assets/photo/log-on@2x.png"> 
                <span >巡护记录</span>
                <img @click="show" class="log-img " src="../../assets/photo/close@2x.png">
            <div class="log-line"></div>
                <span class="log-title">出勤次数</span><span class="log-title">总里程</span>
                <span class="log-title">31</span><span class="log-title">1324</span>
            <div class="log-line"></div>
                <el-date-picker
                v-model="input2"
                class="log-input"
                type="daterange"
                placeholder="选择日期范围">
                </el-date-picker>
            <div class="log-content">
                <div v-for="logresult in logResult" :key="logresult.name">
                    <div class="logresult">
                        <p class="log-p">{{logresult.name}}</p>
                        <p class="log-p">{{logresult.time}}</p> 
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    name:'user',
  data(){
      return {
        input2: '',
        logOn:false,
        userInfos: [{name:"张三",sex:"1",active:"巡护中"},
        {name:"李四",sex:"0",active:"休息"},
        {name:"王五",sex:"0",active:"巡护中"},
        {name:"李四",sex:"1",active:"休息"},
        {name:"王五",sex:"1",active:"巡护中"}],
        Infos: [
          {key: '工号', value: '123456789'},
          {key: '姓名', value: '李四'},
          {key: '职位', value: '电工'},
          {key: '住址', value: '广州白云区'},  
          {key: '联系方式', value: '131 111 11'},       
          {key: '巡护范围', value: '平山电视塔'},
          {key: '状态', value: '在岗'},
       
        ],
        options:[{
            value:"越秀区",lable:"越秀区"
        },{
            value:"天河区",lable:"天河区"
        },{
            value:"越秀区",lable:"越秀区"
        }],
        logResult:[{name:"平山风力机1号",time:"2015/12/12 13:12-16:01"},
        {name:"平山风力机1号",time:"2015/12/12 13:12-16:01"},
        {name:"平山风力机2号",time:"2016/12/12 13:12-16:01"},
        {name:"平山风力机3号",time:"2011/12/12 13:12-16:01"},
        {name:"平山风力机1号",time:"2012/12/12 13:12-16:01"},
        {name:"平山风力机4号",time:"2015/12/12 13:12-16:01"},
        {name:"平山风力机1号",time:"2015/12/12 13:12-16:01"},{name:"平山风力机1号",time:"2015/12/12 13:12-16:01"}
        ]
      }
  },
  methods:{
      handleIconClick(){

      },
      show(){
          if(this.logOn==true){
               this.logOn=false;
          }else{
             this.logOn=true;
            console.log(this.logOn);
          }
      },
      setWidth() {
          var user=document.getElementById("user");
          var total = document.documentElement.clientHeight;
          user.style.height=total-48+"px";
      }
      },
      mounted() {
          this.setWidth();
      }
}
</script>
<style scoped>
.user{
    position: absolute;
    top:48px;
    left: 96px;
    z-index: 1;
    background-color: #ffffff;
    height: 100%;
    width:208px;
    padding: 0 16px;
}
.user-input{
    width:148px;
}
.user-button{
    width:50px;
    background-color: #5EBF1D;
    color: #ffffff;
    height: 36px;
    margin-left: 5px;

}
p.user-title{
    padding-top:10px; 
    font-size: 14px;
    color:  #37403F;
    line-height: 32px;
}
.user-select{
    padding: 10px 0;
}
.line{
    width: 208px;
    margin: 15px 0;
    border: 1px solid #E3E6E5;
}
/*--------第2部分  */
  .result {
    width: 208px;
    height: 48px;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 12px;
    display: inline-block;
  }

  .result:hover {
    background:  rgba(174,230,138,0.15);
  }
  .result-sex{
        display: inline-block;
        width:48px;
        height:48px; 
        vertical-align : top; 
  }
  .sexLogo{
        padding: 8px 12px;
        width: 24px;
        height: 32px;
        vertical-align : middle; 
  }
  .result-info{
        display: inline-block;
        width: 150px;
        height: 48px;  
  }
  .info{
    display: inline-block;
    width:140px;
    size: 12px; 
    line-height: 20px;
    color: #37403F;
    
  }
  p.info{
     color: #37403F;
  }

  /*----------- 3部分 */
    .Info-key {
    font-size: 12px;
    color: #37403F;
    letter-spacing: 0;
    line-height:48px;
    width: 80px;
    display: inline-block;
  }

  .Info-value {
    font-size: 12px;
    color: #37403F;
    letter-spacing: 0;
    line-height: 48px;
    text-align: right;
    width: 120px;
    display: inline-block;

  }
    div.inlineclass.Info-key {
    box-sizing: border-box;
    padding-left: 12px;
  }
  /*-----------4部分---  */
.img-l{
   display: inline-block;
   width: 16px;
   height: 16px;
}
.watchLogo{
    float: right;
}
/*------------巡护记录  */
.log{
    position: fixed;
    top:96px;
    left:352px;
    width: 220px;
    height: 449px;
    background: #FFFFFF;
    border: 1px solid #D7D9D8;
    padding: 0px 16px;
}
.log-line{
    width: 220px;
    margin: 15px 0;
    border: 1px solid #E3E6E5;
}
.lon-on{
    display: inline-block;
    width:16px;
    height: 16px;
    padding-right: 15px;
    padding-top:16px; 
}

.log-img{
    padding: 16px 0;
    width: 14px;
    height: 14px;
    float: right;
}
.log-title{
    display: inline-block;
    width: 110px;
    line-height: 34px;
    font-size: 14px;
    text-align: center;
}

 .log-content {
    width: 236px;
    height: 239px;
    padding-top: 10px;
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden
    /*background-color: aqua;*/
  }

  /* 滚动条 */
  .log-content::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .log-content::-webkit-scrollbar-thumb {
    background-color: rgba(192, 192, 192, 1);
    border-radius: 0;
  }


  .logresult {
    width: 220px;
    height: 48px;
    padding: 10px 0 ;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 12px;
    background-color: #ffffff;
  }
.log-p{
    padding: 6px 15px;
}
  .logresult:hover {
    background: rgba(174,230,138,0.15);
  }
</style>
