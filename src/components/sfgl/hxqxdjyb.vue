<template>
<div>
  <div id="hxqxdjyb">
    		<div class="wrap">
        <div class="bt">
            <span>  <strong class="title">火险气象等级预报</strong></span>
            <img  src="../../assets/photo/close@2x.png" @click="tableClose"/>	
            <img  src="../../assets/photo/window zoom1@2x.png" />	
          
        </div>	
    <section>
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="filters">
          <el-form-item>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                change="change"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              v-model="filters.date"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-on:click="getHxqxdjyb">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="showChart">图表</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--列表-->

        <el-table :data="tableData" stripe style="width: 100%" height="250" border>
          <el-table-column
            prop="date" align="right"
            label="日期"
            width="110">
          </el-table-column>
         <el-table-column
            prop="temperature" align="right"
            label="气温℃"
            width="90">
          </el-table-column>
          <el-table-column
            prop="humidity" align="right"
            label="湿度%"
            width="100">
          </el-table-column>
          <el-table-column
            prop="barometer" align="right"
            label="气压kpa"
            width="110">
          </el-table-column>
          <el-table-column 
            prop="windSpeed" align="right"
            label="风速m/s"
            width="110">
          </el-table-column>
          <el-table-column
            prop="direction" align="right"
            label="风向"
            width="80">
          </el-table-column>
          <el-table-column
            prop="precipitation" align="right"
            label="降雨量mm"
            width="120">
          </el-table-column>
          <el-table-column
            prop="evaporation" align="right"
            label="蒸发量mm"
            width="120">
          </el-table-column>
          <el-table-column
            prop="radiate"
            label="辐射量W/m2" align="right"
            width="125">
          </el-table-column>
          <el-table-column
            prop="illumination" align="right"
            label="光照度LUX"
            width="120">
          </el-table-column>        
          <el-table-column
            prop="photosynthesis" align="right"
            label="光合有效辐射W/m2"
            width="165">
          </el-table-column>
          <el-table-column
            prop="ultravioletLight" align="right"
            label="紫外线辐射W/m2"
            width="160">
          </el-table-column>
          <el-table-column
            prop="soilWet" align="right"
            label="土壤水分%"
            width="120">
          </el-table-column>
          <el-table-column
            prop="soilTemperature"align="right"
            label="土壤温度℃"
            width="120">
          </el-table-column>   
          <el-table-column
            prop="soilHumidity"align="right"
            label="土壤湿度%"
            width="130">
          </el-table-column>        
      </el-table>
      </section>
      </div>
    </div>
    <router-view></router-view> 
</div>
</template>

<script>
export default {
  name: 'hxqxdjyb',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData:[
        {date:"121-12-12", temperature:"20",humidity:"20", barometer:"20",windSpeed:"20", direction:"20", precipitation:"20",evaporation:"20",
          radiate:"20",illumination:"20",photosynthesis:"20",ultravioletLight:"20",soilWet:"20",soilTemperature:"20",soilHumidity:"20"
      },
        {date:"131-12-12", temperature:"20",humidity:"20", barometer:"20",windSpeed:"20", direction:"20", precipitation:"20",evaporation:"20",
          radiate:"20",illumination:"20",photosynthesis:"20",ultravioletLight:"20",soilWet:"20",soilTemperature:"20",soilHumidity:"20"
      },
         {date:"121-12-12", temperature:"20",humidity:"20", barometer:"20",windSpeed:"20", direction:"20", precipitation:"20",evaporation:"20",
          radiate:"20",illumination:"20",photosynthesis:"20",ultravioletLight:"20",soilWet:"20",soilTemperature:"20",soilHumidity:"20"
      },
        {date:"131-12-12", temperature:"20",humidity:"20", barometer:"20",windSpeed:"20", direction:"20", precipitation:"20",evaporation:"20",
          radiate:"20",illumination:"20",photosynthesis:"20",ultravioletLight:"20",soilWet:"20",soilTemperature:"20",soilHumidity:"20"
      },
              {date:"121-12-12", temperature:"20",humidity:"20", barometer:"20",windSpeed:"20", direction:"20", precipitation:"20",evaporation:"20",
          radiate:"20",illumination:"20",photosynthesis:"20",ultravioletLight:"20",soilWet:"20",soilTemperature:"20",soilHumidity:"20"
      },
        {date:"131-12-12", temperature:"20",humidity:"20", barometer:"20",windSpeed:"20", direction:"20", precipitation:"20",evaporation:"20",
          radiate:"20",illumination:"20",photosynthesis:"20",ultravioletLight:"20",soilWet:"20",soilTemperature:"20",soilHumidity:"20"
      },     
        {date:"141-12-12", temperature:"20",humidity:"20", barometer:"20",windSpeed:"20", direction:"20", precipitation:"20",evaporation:"20",
          radiate:"20",illumination:"20",photosynthesis:"20",ultravioletLight:"20",soilWet:"20",soilTemperature:"20",soilHumidity:"20"
      }],
      value:"",
			options:[{value: '1级',	label: '气象仪1'}, {	value: '2级',label: '气象仪2'}, {value: '3级',	label: '气象仪3'	}, {		value: '14级',	label: '气象仪4'	}],    
      //过滤
      filters: {
					date: ''
        },
        //时间选择
       pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
    }
  },
  methods:{
    tableClose(){
				this.$router.push('/')
      },
      showChart(){
        this.$router.push('/greenGuardian/hxqxdjyb/chart')
      },
      getHxqxdjyb(){
        alert("这里是getHxqxdjyb方法");
      },
      change(){
        alert(this.value)
      },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hxqxdjyb{
    position: absolute;
    bottom: 0px;
    left: 96px;
	background: #FFFFFF;
	border: 1px solid #D9D9D9;
}
.wrap{
	padding: 0 10px;
}
span{
	font-size: 14px;
	color: #666666;
	line-height: 48px;
	
}
.bt{
	height: 48%;
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


#Chart1{
  width: 960px;
    height: 500px;

}

</style>