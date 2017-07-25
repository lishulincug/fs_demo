<template>
  <div class="allmap">
    <div id="map">
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
//    import icon from '../assets/position@2x.png'
  import Bus from '../../bus.js'

  export default {
    name: 'sourceManage',
    props: ['layers'],
    data() {
      return {
        init: true,
        map: {}
      }
    },
    methods: {
      paintLayer(map, layer, centerPoint) {
        var Points = layer.points
        if (this.init) {
          var center = new BMap.Point(Number(centerPoint.lng), Number(centerPoint.lat))
          this.init = false
          map.enableScrollWheelZoom(true)
          map.centerAndZoom(center, 15)
        }

        for (var i = 0; i < Points.length; i++) {
          var myIcon = new BMap.Icon(layer.icon, new BMap.Size(16, 16))
          var marker = new BMap.Marker(Points[i].point, {icon: myIcon})  // 创建标注
          map.addOverlay(marker)              // 将标注添加到地图中
        }
      },
      paintLayers() {
        this.map.clearOverlays()
        var layers = this.layers[0].type[0].type
        for (var i = 0; i < layers.length; i++) {
          var _layer = layers[i]
          if (_layer.display) {
            this.paintLayer(this.map, _layer, {lng: 113.3045102246, lat: 23.1902358112})
          }
        }
<<<<<<< HEAD
      },
      setWidth() {
          var map=document.getElementById("map");
          var total = document.documentElement.clientHeight;
          map.style.height=total-48+"px";
=======
>>>>>>> ed66a361e2180c05fef32b888f87ac6c0ff43cdc
      }
    },
    watch: {
      layers: {
        handler: function () {
          this.paintLayers()
        },
        deep: true
      }
    },
    mounted() {
<<<<<<< HEAD
      this.setWidth();
=======
>>>>>>> ed66a361e2180c05fef32b888f87ac6c0ff43cdc
      this.map = new BMap.Map('map')
      const that = this
      this.paintLayers()
      Bus.$emit('commonMap',that.map)
    }
  }
</script>

<style scoped>
  #map {
    width: 100%;
    height: 100%;
  }

  .allmap {
    width: 100%;
    height: 100%;
  }
</style>
