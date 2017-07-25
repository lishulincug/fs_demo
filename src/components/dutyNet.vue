<template>
  <div style="width:100%;height:100%;">
    <div style="width:100%;height:100%;" id="map"
    ></div>
  </div>
</template>

<script>
  /* eslint-disable no-undef,no-unused-vars */
  export default {
    data() {
      return {
        map: {},
        place1: {
          points: [
            new BMap.Point(113.304905, 23.204519),
            new BMap.Point(113.302103, 23.202991),
            new BMap.Point(113.305983, 23.199537),
            new BMap.Point(113.310942, 23.198542),
            new BMap.Point(113.316619, 23.199271),
            new BMap.Point(113.318703, 23.201928),
            new BMap.Point(113.317194, 23.204453),
            new BMap.Point(113.309505, 23.205582),
            new BMap.Point(113.304905, 23.204519)
          ]
        }
      }
    },
    methods: {
      judge(lng, lat, areaImg) {
        var pt = new BMap.Point(lng, lat)
        var result = BMapLib.GeoUtils.isPointInPolygon(pt, areaImg)

        if (result === true) {
          var opts = {
            width : 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title : "负责人：张三" , // 信息窗口标题
            enableMessage:true,//设置允许信息窗发送短息
          }
          var infoWindow = new BMap.InfoWindow('巡护中', opts);
          this.map.openInfoWindow(infoWindow,pt);
        } else {
          var opts = {
            width : 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title : "负责人：无" , // 信息窗口标题
            enableMessage:true,//设置允许信息窗发送短息
          }
          var infoWindow = new BMap.InfoWindow('', opts);
          this.map.openInfoWindow(infoWindow,pt);        }

      },
      chose(area) {
        const that = this
        var pt = new BMap.Point(113.3045102246, 23.1902358112)
        var map = that.map
        map.centerAndZoom(pt, 15)
        map.enableScrollWheelZoom() // 开启滚动缩放
        map.enableContinuousZoom() // 开启缩放平滑
        var areaImg = new BMap.Polygon(area)

        function paintImage() {
          map.clearOverlays()
          map.addOverlay(areaImg)
        }

        paintImage()
        map.addEventListener('mousemove', function (e) {
          that.judge(e.point.lng, e.point.lat, areaImg)
        })
      }
    },
    mounted() {
      this.map = new BMap.Map('map')
      this.chose(this.place1.points)
    }
  }
</script>

<style scoped>

</style>
