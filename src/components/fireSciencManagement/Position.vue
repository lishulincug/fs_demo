<template>
   <div class="position">
         <div class="higher">
                <p class="position-title">坐标定位</p>
                <span>经度<input  type="text" placeholder="内容"></input></span>
                <span>纬度<input  type="text" placeholder="内容"></input></span>
                
                <button class="position-button"> 查询</button>
        </div>
        <div class="line"></div>
        <div class="mid"> 
                <div v-for="Info in Infos" :key="Info.key">
                  <div class=" Info-key">{{Info.key}}</div>
                  <div class=" Info-value">{{Info.value}}</div>
                </div>
        </div>
  </div>
</template>

<script>
    export default {
  name:'position',
  data(){
      return {
        Infos: [
          {key: '经度', value: '23"78"'},
          {key: '纬度', value: '23"78"'},
          {key: '定位', value: '平山镇牛头村'},        
          {key: '所属片区', value: '平山管辖区'},
          {key: '负责人', value: '张三'},
          {key: '联系方式', value: '131 111 11'}
        ],
      }
  },
  methods:{
      setWidth() {
          var position=document.getElementsByClassName("position")[0];
          var total = document.documentElement.clientHeight;
          position.style.height=total-48+"px";
      }
      },
      mounted() {
        setTimeout(this.setWidth(),10000);
      }
}
</script>
<style scoped>
.position{
    position: absolute;
    top:48px;
    left: 96px;
    z-index: 1;
    background-color: #ffffff;
    width:208px;
    padding: 0 16px;
}
p.position-title{
    padding-top:10px; 
    font-size: 14px;
    color:  #37403F;
    line-height: 32px;
}
  .line {
    margin: 16px 0;
    height: 1px;
    background-color: #E3E6E5; 
  }
input{
    color: #37403F;
    width: 150px;
    margin-left:30px; 
    line-height: 30px;
    border-bottom:1px solid #E3E6E5;
}
.position-button{
    width: 208px;
    background: #5EBF1D;
    height: 32px;
    font-size: 12px;
    color: #ffffff;
}
span{
    display: inline-block;
    font-size: 12px;
    color: #37403F;
    padding: 5px 0;
}

  /*----------- 2部分 */
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

</style>
