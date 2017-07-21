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
             this.$router.push("/greenGuardian/hxqxdjyb");
        },
        drawChart(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('Chart1'));
            // 绘制图表
            myChart.setOption({
                legend: {
                    data:['高度(km)与气温(°C)变化关系']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                tooltip : {
                    trigger: 'axis',
                    formatter: "Temperature : <br/>{b}km : {c}°C"
                },
                xAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} °C'
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'category',
                        axisLine : {onZero: false},
                        axisLabel : {
                            formatter: '{value} km'
                        },
                        boundaryGap : false,
                        data : ['0', '10', '20', '30', '40', '50', '60', '70', '80']
                    }
                ],
                series : [
                    {
                        name:'高度(km)与气温(°C)变化关系',
                        type:'line',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    shadowColor : 'rgba(0,0,0,0.4)'
                                }
                            }
                        },
                        data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
                    }
                ]
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

    width: 600px;
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