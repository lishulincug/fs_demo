<template>
    <!-- <p class="page-container">404 page not found</p> -->
    <div class="chart">
        <div class="bt">
     		 <span>  <strong class="title">气象仪</strong></span>
			  <img  src="../../assets/photo/close@2x.png" @click="CloseChart"/>	
			
		</div>	
        <div id="Chart1">


        </div>
    </div>
</template>

<script>
  export default {
    name:"chart",
    data () {
      return {
          chartVisible:true,
      }
    },
    methods:{
        CloseChart(){
             this.$router.push("/weather/monitoringManagement");
        },
        drawChart(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('Chart1'));
            // 绘制图表
            myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:'最高气温'
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['0.00','1.00','2.00','3.00','4.00','5.00','6.00','7.00','8.00','9.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                series: 
                    {
                        name:'最高气温',
                        type:'line',
                        data:[11, 11, 15, 13, 12, 13, 10, 11, 15, 13, 12, 13, 1, 11, 15, 13, 12, 13, 10, 11, 15, 13, 12, 13],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    }
    
            });
        }
    },
    mounted(){
    this.drawChart();
    },
  }
</script>
<style  scoped>
.chart{
    background-color: #ffffff;
    position: absolute;
    top:60px;
    left: 120px;
    padding: 0 10px;

}
#Chart1{

    width: 500px;
    height: 400px;

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
</style>