<template>
  <div class="forestRespGrid">
        <div class="forestRespGridHeader">
            <span>  <strong class="title">火险气象等级预报</strong></span>
            <img  src="../../assets/photo/close@2x.png" @click="tableClose"/>	          
        </div>	
        <div class="forestRespGridInfo">
          <el-input placeholder="请选择日期" icon="search" v-model="keyWord" :on-icon-click="search">
          </el-input>
            <div v-for="result in searchResult" :key="result.id">
              <div class="result">
                
                {{result}}

              </div>
            </div>
          <el-pagination
            small
            page-size	="5"
            layout="prev, pager, next"
            :total="info.length">
          </el-pagination>
          
        </div>
      
  </div>
</template>

<script>
export default {
  name:"forestRespGrid",
  data(){
      return {
        keyWord: '',
        info:{
          length:100,
          data:[
'二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光'
          ]
        },
        searchResult: ['二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光',]
      }
  },
    
    methods:{
      tableClose(){
        this.$router.push("/greenGuardian")
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
      getForestRespGridInfo(index){
        console.log(index);
        alert(index);
      }
    }

}
</script>

<style scoped>
.forestRespGrid{
    background-color: #ffffff;
    position: absolute;
    top:60px;
    left: 120px;
    padding: 0 10px;
    height: 525px;
    width: 240px;

}
.forestRespGridHeader{
	height: 48px;
	border-bottom: 1px solid;
	margin-bottom: 10px;
}
img{
	display: inline-block;
	width: 16px;
	height: 16px;
	float: right;
	padding-top: 14px;
}
span{
	font-size: 14px;
	color: #666666;
	line-height: 48px;
	
}



  
</style>
