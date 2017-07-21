<template>
  <div id="bdmap">
      <div id="allmap">
      </div>
  </div>
</template>

<script>
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
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
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
