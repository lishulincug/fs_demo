<template>
  <div style="width: 100%;height: 100%">
    <headerTool></headerTool>
    <div id="map"></div>
    <div id="recode">
      <div class="wrap">
        <div class="bt">
          <span>  <strong class="title">飞行记录</strong></span>
          <img src="../../assets/photo/close@2x.png" @click="tableClose"/>

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
              <el-col :span="24" class="toolbar">
                <el-form :inline="true" :model="filters">
                  <el-form-item>
                    <el-date-picker
                      v-model="filters.date"
                      type="daterange"
                      placeholder="选择日期范围">
                    </el-date-picker>
                  </el-form-item>
                </el-form>
              </el-col>
              <!--列表-->
              <el-table :data="tableData" stripe style="width: 100%" height="200" border>
                <el-table-column prop="date" align="right" label="飞行日期" width="120"></el-table-column>
                <el-table-column prop="startTime" align="right" label="开始时间" width="120"></el-table-column>
                <el-table-column prop="endTime" align="right" label="结束时间" width="120"></el-table-column>
                <el-table-column prop="flyTime" align="right" label="飞行时长" width="120"></el-table-column>
                <el-table-column prop="aviator" align="right" label="飞行员" width="120"></el-table-column>
                <el-table-column prop="avgSpeed" align="right" label="平均时速 km/h" min-width="120"></el-table-column>
                <el-table-column prop="range" align="right" label="航程 k/m" min-width="120"></el-table-column>
                <el-table-column prop="maxAltitude" align="right" label="最高海拔 m" min-width="120"></el-table-column>
                <el-table-column prop="latest" align="right" label="最远距离 km" min-width="120"></el-table-column>
                <el-table-column prop="maxSpeed" align="right" label="最高时速 km/h" min-width="120"></el-table-column>
              </el-table>
            </section>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import airplane from '../../assets/drone@2x.png'
  import headerTool from '../common/headerTool.vue'

  export default {
    name: 'recode',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        tableData: [
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
          {
            date: "11-2-1", startTime: "11-2-1", endTime: "11-2-1", flyTime: "11-2-1", aviator: "1121",
            avgSpeed: "1121", range: "121", maxAltitude: "1121", latest: "1121", maxSpeed: "1121"
          },
        ],
        points: {
          place1: {
            start: new BMap.Point(113.3045102246, 23.1902358112), // 创建坐标点
            points: [
              new BMap.Point(113.292545, 23.19296),
              new BMap.Point(113.295707, 23.196879),
              new BMap.Point(113.309433, 23.1909),
              new BMap.Point(113.309505, 23.188243),
              new BMap.Point(113.309577, 23.186781),
              new BMap.Point(113.311445, 23.186515),
              new BMap.Point(113.307708, 23.185253),
              new BMap.Point(113.30584, 23.188774),
              new BMap.Point(113.306199, 23.190568),
              new BMap.Point(113.301743, 23.191565),
              new BMap.Point(113.298869, 23.191365),
              new BMap.Point(113.293838, 23.19389),
              new BMap.Point(113.292545, 23.19296)
            ], // 设置坐标数组
            rate: 200, // 路书速度
            markers: [],
            fixPlace: new BMap.Size(20, 28) // 图标位置修正
          }
        },
        //过滤
        filters: {
          date: ''
        },
      }
    },
    methods: {
      planeMove(place) {
        var map = new BMap.Map('map') // 创建地图实例
        map.enableScrollWheelZoom(true)

        var point = place.start
        var points = place.points
//        var markers = place.markers
        var icon2 = new BMap.Icon(airplane, new BMap.Size(48, 48), {anchor: place.fixPlace}) // 无人机图标
        var polyline = new BMap.Polyline(points, {strokeColor: '#26A69A'}) // 创建折线
        var lushu = new BMapLib.LuShu(map, points, {
          landmarkPois: [
//            {lng: markers[0].lng, lat: markers[0].lat, html: '饶平站到了', pauseTime: 1},
//            {
//              lng: markers[1].lng,
//              lat: markers[1].lat,
//              html: '<img src="http://source.fooleap.org/chaoshan.jpg?imageView2/2/w/150" />潮汕站到了',
//              pauseTime: 2
//            },
//            {lng: markers[2].lng, lat: markers[2].lat, html: '潮阳站到了', pauseTime: 1},
//            {lng: markers[3].lng, lat: markers[3].lat, html: '普宁站到了', pauseTime: 1},
//            {lng: markers[4].lng, lat: markers[4].lat, html: '葵潭站到了', pauseTime: 1}
          ], // 显示的特殊点，似乎是必选参数，可以留空，据说要和距原线路10米内才会暂停，这里就用原线的点
//          defaultContent: '动车继续前行', // 覆盖物内容，这个填上面的特殊点文字才会显示
          speed: place.rate,
          icon: icon2, // 覆盖物图标，默认是百度的红色地点标注
          autoView: false, // 自动调整路线视野
          enableRotation: false  // 覆盖物随路线走向
        })
        map.addOverlay(polyline) // 覆盖折线到地图上
//        for (var i = 0; i < 5; i++) {
//          map.addOverlay(new BMap.Marker(markers[i], {icon: icon1})) // 覆盖动车站标注到地图上
//        }
        // 这块是事件绑定
        map.centerAndZoom(point, 16) // 设置中心坐标及默认缩放级别
        map.addEventListener('tilesloaded', startlushu) // 给地图注册点击事件 我这里设置的是地图加载完就跑
        function startlushu() {
          lushu.start() // 启动路书函数
        }
      },
      tableClose() {
        this.$router.push('/')
      },
      setWidth() {
          var map=document.getElementById("map");
          var total = document.documentElement.clientHeight;
          map.style.height=total-48+"px";
      }
    },
    mounted() {
      this.setWidth();
      this.planeMove(this.points.place1)
    },
    components: {
      headerTool,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #map {
    width: 100%;
    height: 100%;
  }

  #recode {
    position: absolute;
    bottom: 0px;
    left: 96px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
  }

  .wrap {
    padding: 0 10px;
    height: 326px;
  }

  .title {
    font-size: 14px;
    color: #666666;
    line-height: 48px;

  }

  span.info {
    display: inline-block;
    width: 45%;
    text-align: center;
    height: 14px;
  }

  .bt {
    height: 48px;
    border-bottom: 1px solid;
    margin-bottom: 10px;
  }

  img {
    display: inline-block;
    width: 16px;
    height: 16px;
    float: right;
    padding-top: 14px;
    padding-right: 14px;
  }

  .sum {
    background: #FFFFFF;
    display: inline-block;

  }

  p {
    text-align: center;
  }
</style>
