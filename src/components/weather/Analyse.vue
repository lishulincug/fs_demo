<template>
  <div id="analyse">
      <div class="left">
            <div class="higher">
                <p>对比分析</p>
                <button @click="show(0)" class="analyse-button danzhandian" >单站点</button><button @click="show(1)" class="analyse-button" >多站点</button>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    class="date-picker"
                    placeholder="选择日期"
                    :picker-options="pickerOptions0">
                    </el-date-picker>
            </div>
            <div class="line"></div>
            <div class="search-content">
                <div v-for="result in searchResult" :key="result">
                    <div class="result">
                    <span>{{result}}</span>
                    
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="lower">
                <p>监测范围地图</p>  
                <!-- <BDmap></BDmap> -->
            </div>

      </div>
      <div class="right" v-show="showChart">
            <el-row>
                 <el-col :span="24"><img class="chart"src="../../assets/photo/Stacked Group@3x.png"/></el-col> 

            </el-row>    
      </div>
        <div class="right" v-show="!showChart">
            <el-row>
                <el-col :span="24"> <img class="chart" src="../../assets/photo/Group@3x.png"/></el-col>
            </el-row>    
      </div>
  </div>
</template>
<script>

export default {
    name:"analyse",
    data(){
      return {
          showChart:true,
        value1:"",
        defaultIndex: 5,
        index:[],
        pickerOptions0:"",
        searchResult: ['气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1', '气象仪1'],
        srcs:["../../assets/photo/1@1x.png","../../assets/photo/2@1x.png","../../assets/photo/3@1x.png",
        "../../assets/photo/4@1x.png","../../assets/photo/5@1x.png","../../assets/photo/6@1x.png"]
      }
    },
    methods: { 
        show(x){
            if(x>0){
                this. showChart=false;
            }else{
                this. showChart=true;

            }
        },  
        setWidth() {
          var analyse=document.getElementById("analyse");
          var total = document.documentElement.clientHeight;
           var totalWidth= document.documentElement.clientWidth;
          analyse.style.height=total-48+"px";
          analyse.style.width=totalWidth-96+"px";
          var imgChart=document.getElementsByClassName("chart");
          for(var i=0;i<imgChart.length;i++){
                imgChart[i].style.width=totalWidth-380+'px';
                 imgChart[i].style.height=total-64+'px';
          }
      }
      },
    mounted() {
          this.setWidth();
    }
}
</script>
<style scoped>
#analyse{
    position: absolute;
    top:48px;
    left: 96px;
    z-index: 1;
    background-color: #ffffff;
    box-sizing: border-box;
}

/*-----------左边  */
.left{
    display: inline-block;
    width:208px;
    padding: 0 16px;
    height: 100%

}
p{
    font-size: 14px;
    color: #37403F;
    line-height: 32px;
}
.analyse-button{
    display: inline-block;
    width: 98px;
    height: 32px;
    background-color: #ffffff;
    border: 1px solid #D7D9D8;

}
.danzhandian{
    margin-right:10px; 
}
.analyse-button:hover{
    color: #5EBF1D;
    border: 1px solid #5EBF1D;

}
.date-picker{
    margin:16px 0 0px;;
    width: 208px;
    border-bottom: 1px  #E3E6E5;
}
.line{
    background: #E3E6E5;
    height: 1px;
    width: 208px;
    margin: 16px 0;
}

  .search-content {
    width: 208px;
    height: 60%;
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
    width: 208px;
    height: 48px;
    padding: 25px 0 19px 10px;
    box-sizing: border-box;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 12px;
  }

  .result:hover {
    background: rgba(174,230,138,0.15);
  }
  /*----- ditu --- */
  .lower{
    height: 17%;
     width: 240px;
     
  }
/*-----------、右边  */
.right{
    height: 100%;
    box-sizing: border-box;
    background-color:  #F7F7F7;
    float: right; 
}
.chart{
    display: inline-block;
    padding: 0px 10px;
}

</style>
