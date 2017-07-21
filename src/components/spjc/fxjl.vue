<template>
  <div id="fxjl">
    <div class="wrap">
        <div class="bt">
            <span>  <strong class="title">飞行记录</strong></span>
            <img  src="../../assets/photo/close@2x.png" @click="tableClose"/>	
            <img  src="../../assets/photo/window zoom1@2x.png" />	
          
        </div>	
        <div>
            <el-col :span="5" class="sum">
                    <p><span><strong class="title">飞行记录</strong></span></p>
                    <span class="info"><strong class="title">总飞行时长</strong></span> 
                    <span class="info"><strong class="title">飞行次数</strong></span>
                    <span class="info"><strong class="title">13h 12m 30s</strong></span>                 
                    <span class="info"><strong class="title">12</strong></span>
                    <span class="info"><strong class="title">总航程</strong></span>
                    <span class="info"><strong class="title">最高海拔</strong></span>
                    <span class="info"><strong class="title">120km</strong></span> 
                    <span class="info"><strong class="title">560m</strong></span>
                    <span class="info"><strong class="title">最远距离</strong></span>                 
                    <span class="info"><strong class="title">最高时速</strong></span>
                    <span class="info"><strong class="title">2.3km</strong></span>
                    <span class="info"><strong class="title">42km/h</strong></span>
            </el-col>
            <el-col :span="19">
                <section>
                    <!--工具条-->
                    <el-col :span="24" class="toolbar" >
                        <el-form :inline="true" :model="filters">
                        <el-form-item>
                                <el-date-picker
                                v-model="filters.date"
                                type="daterange"
                                placeholder="选择日期范围">
                                </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" v-on:click="getHxqxdjyb">查询</el-button>
                        </el-form-item>
                        </el-form>
                    </el-col>
                    <!--列表-->
                    <el-table :data="tableData" stripe style="width: 100%"  height="200" border>
                        <el-table-column prop="date" align="right"label="飞行日期" width="120"></el-table-column>
                        <el-table-column prop="startTime" align="right"label="开始时间" width="120"></el-table-column>
                        <el-table-column prop="endTime" align="right"label="结束时间" width="120"></el-table-column>
                        <el-table-column prop="flyTime" align="right"label="飞行时长" width="120"></el-table-column>
                        <el-table-column prop="aviator" align="right"label="飞行员" width="120"></el-table-column>
                        <el-table-column prop="avgSpeed" align="right"label="平均时速 km/h" min-width="120"></el-table-column>
                        <el-table-column prop="range" align="right"label="航程 k/m" min-width="120"></el-table-column>
                        <el-table-column prop="maxAltitude" align="right"label="最高海拔 m" min-width="120"></el-table-column>
                        <el-table-column prop="latest" align="right"label="最远距离 km" min-width="120"></el-table-column>
                        <el-table-column prop="maxSpeed" align="right"label="最高时速 km/h" min-width="120"></el-table-column>
                    </el-table>
                </section>
            </el-col>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'fxjl',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData:[
         {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,
         {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,
          {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,   
         {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,
         {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,
          {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} , 
         {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,
         {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,
          {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,   
         {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,
         {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,
          {  date:"11-2-1",startTime:"11-2-1",endTime:"11-2-1",flyTime:"11-2-1",aviator:"1121",
            avgSpeed:"1121",range:"121",maxAltitude:"1121",latest:"1121",maxSpeed:"1121"} ,                         
        ],   
      //过滤
      filters: {
					date: ''
        },
    }
  },
  methods:{
    tableClose(){
		this.$router.push('/')
      },
      showChart(){

      },
      getHxqxdjyb(){
        alert("这里是getHxqxdjyb方法");
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#fxjl{
    position: absolute;
    bottom: 0px;
    left: 96px;
	background: #FFFFFF;
	border: 1px solid #D9D9D9;
}
.wrap{
	padding: 0 10px;
    height: 326px;
}
.title{
	font-size: 14px;
	color: #666666;
	line-height: 48px;
	
}
span.info{
    display: inline-block;
    width: 45%;
    text-align: center;
    height: 14px;
}
.bt{
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
	padding-right: 14px;
}
.sum{
    background: #FFFFFF;
    display: inline-block;

}
p{
    text-align: center;
}
</style>