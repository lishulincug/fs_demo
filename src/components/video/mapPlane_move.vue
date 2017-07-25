<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
  import airplane from '../../assets/drone@2x.png'
  /* eslint-disable no-undef,no-redeclare */

  // 使用方法 把你要的坐标 传入ponits中 如place1
  // 然后 触发 planeMove 方法,要把place1传入
  // 我这里就把方法放到钩子里了

  export default {
    name: 'map',
    data () {
      return {
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
        }
      }
    },
    methods: {
      planeMove (place) {
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
        function startlushu () {
          lushu.start() // 启动路书函数
        }
      }
    },
    mounted () {
      this.planeMove(this.points.place1)
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: "微软雅黑";
  }

  #map {
    width: 100%;
    height: 500px;
  }

</style>
