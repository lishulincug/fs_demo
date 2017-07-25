<template>
  <div class="main" id="main">
      <headerTool></headerTool>
        <Diagram class="bdmap"></Diagram>
        <div class="outFireConduct">
         <div class="higher">
                <p class="outFireConduct-title">火点查询</p>
                <el-input 
                placeholder="请搜索内容"
                icon="search"
                class="outFireConduct-input"
                v-model="input2"
                :on-icon-click="handleIconClick">
                </el-input>
                <button class="outFireConduct-button">添加</button>

        </div>
        <div class="line"></div>
        <div class="mid">
            <div v-for="result in lossResults" :key="result.address">
                <div class="result">
                    <div class="result-address">
                        <img  class="addressLogo"src="../assets/photo/position_cell2@2x.png">
                    </div>
                    <div class="result-info">
                        <span class="info">{{result.address}}</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <span class="info info-lvl">{{result.lvl}}</span>
                        <p  class="info">{{result.time}}</p>
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
        <div class="down"> 
           <p class="outFireConduct-title">周边资源</p>
            <img class="resourceLogo" src="../assets/photo/Diagram/duiwu@2x.png">
            <img class="resourceLogo" src="../assets/photo/Diagram/fanghuo@2x.png">
            <img class="resourceLogo" src="../assets/photo/Diagram/car@2x.png">
            <img class="resourceLogo" src="../assets/photo/Diagram/cangku@2x.png">
            <img class="resourceLogo" src="../assets/photo/Diagram/xushuichi@2x.png">
            <img class="resourceLogo" src="../assets/photo/Diagram/firespath@2x.png">
            <img class="resourceLogo" src="../assets/photo/Diagram/xushuichi@2x.png">
            <img class="resourceLogo" src="../assets/photo/Diagram/village@2x.png">
            <img class="resourceLogo" src="../assets/photo/Diagram/chedao@2x.png">
            <img class="resourceLogo" src="../assets/photo/Diagram/binan@2x.png">

        </div>  
        <div class="line"></div>
        <div > 
                 <div v-for="result in carResults" :key="result.address">
                <div class="result">
                    <div class="carinfo-info">
                        <p  class="carinfo">{{result.id}}</p>
                        <span class="carinfo">联系人：{{result.user}}</span>
                        <span class="carinfo info-phone">{{result.phone}}</span>
                        
                    </div>                
                </div>
           </div>
            <el-pagination
            small
            layout="prev, pager, next"
            :total="50">
            </el-pagination>
        </div>    
  </div>
  </div>  
</template>
<script>
import Diagram from './common/Diagram.vue'
import headerTool from './common/headerTool.vue'
export default {
  name:'outFireConduct',
  data(){
      return {
        input2: '',
        lossResults: [{address:"小横琴物资库1号",time:"2017/03/23 12:32",lvl:"1级"},
        {address:"小横琴物资库1号",time:"2017/03/23 12:32",lvl:"1级"},
        {address:"小横琴物资库1号",time:"2017/03/23 12:32",lvl:"1级"}],
        Infos: [
          {key: 'ID', value: '123456789'},
          {key: '等级', value: '1'},
          {key: '起始时间', value: '2017/03/23 12:32'},
          {key: '结束时间', value: '2017/03/23 12:32'},          
          {key: '地点', value: '平顶山'},
          {key: '经度', value: '23"78"'},
          {key: '纬度', value: '23"78"'},
          {key: '影响范围', value: '2 km'},
          {key: '负责人', value: '张三'},
          {key: '联系方式', value: '131 111 11'}
        ],
        carResults:[{id:"粤A 12334AS",user :"张三",phone:"123 12233 12323"},{id:"粤A 12Dd4AS",user :"李三",phone:"123 12233 12323"},{id:"粤A 1D34AS",user :"王三",phone:"123 12233 12323"},]
      }
  },
  methods:{
      handleIconClick(){

      },
      setWidth() {
          var outFireConduct=document.getElementsByClassName("outFireConduct")[0];
          var total = document.documentElement.clientHeight;
          outFireConduct.style.height=total-48+"px";
          document.getElementsByClassName("bdmap")[0].style.height=total-48+"px";
      }
  },
  components:{
    Diagram,
    headerTool,
  },
    mounted() {
      this.setWidth();
    }
}
</script>
<style scoped>
.main{
    height:100%;
}


.outFireConduct{
    position: absolute;
    top:48px;
    left: 96px;
    z-index: 1;
    background-color: #ffffff;
    width:208px;
    padding: 0 16px;
}
.outFireConduct-input{
    width:148px;
}
.outFireConduct-button{
    width:48px;
    background-color: #5EBF1D;
    color: #ffffff;
    height: 36px;

}
p.outFireConduct-title{
    padding-top:10px; 
    font-size: 14px;
    color:  #37403F;
    line-height: 48px;
}

.line{
    width: 208px;
    margin: 10px 0;
    border: 1px solid #E3E6E5;
}
/*--------第2部分  */
  .result {
    width: 208px;
    height: 48px;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 12px;
  }

  .result:hover {
    background:  rgba(174,230,138,0.15);
  }
  .addressLogo{
        padding: 12px 0px;
        width: 24px;
        height: 24px;

  }
  .result-address{
        width: 32px;
        height: 48px; 
        text-align: center;
        display: inline-block;
  }
  .result-info{
        width: 170px;
        height: 48px; 
        display: inline-block;
  }
  .info{
    size: 12px; 
    line-height: 12px;
    color: #37403F;
  }
  p.info{
     line-height: 39px;
     color: #79807F;
  }

  /*----------- 3部分 */
    .Info-key {
    font-size: 12px;
    color: #37403F;
    letter-spacing: 0;
    line-height: 32px;
    width: 80px;
    display: inline-block;
  }

  .Info-value {
    font-size: 12px;
    color: #79807F;
    letter-spacing: 0;
    line-height: 32px;
    text-align: right;
    width: 120px;
    display: inline-block;

  }
    div.inlineclass.Info-key {
    box-sizing: border-box;
    padding-left: 12px;
  }
   /*-----------4部分---  */
   .resourceLogo{
       width: 16px;
       height: 16px;
       padding: 10px 10px;
   }
  /*-----------5部分---  */
  .carinfo{
    font-size: 12px;
    padding: 6px 0;

  }
  span.carinfo{
      display: inline-block;
      width: 100px;
  }
    .carinfo-Info{
        width: 208;
    }
</style>
