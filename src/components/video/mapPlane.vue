<template>
  <div id="bdmap">
    <div id="allmap">
    </div>
  </div>
</template>

<script>
  import airplane from '../../assets/drone@2x.png'
  export default {
    name: 'map',
    data () {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.table.type &&
          this.table.type.length
      }
    },
    methods: {
      getmap () {
        var map = new BMap.Map("allmap");    // 创建Map实例
        var myIcon = new BMap.Icon(airplane, new BMap.Size(48,48));
        var marker2 = new BMap.Marker(new BMap.Point(113.2885102246, 23.1902358112),{icon:myIcon});  // 创建标注
        map.addOverlay(marker2);
        map.centerAndZoom(new BMap.Point(113.297292, 23.178829), 16);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      }
    },
    mounted(){
      this.getmap();
    }
  }
</script>

<style >
  #allmap{
    width: 100%;
    height: 100%;
  }
  #bdmap{
    width: 100%;
    height: 100%;

  }

</style>
