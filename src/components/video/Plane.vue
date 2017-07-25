<template>
  <div style="width:100%;height: 100%">
    <headerTool></headerTool>
    <div id="bdmap">
    </div>
    <div class="plane">
      <span>无人机视频</span>
      <div class="video">
        <img class="plane-video " src="../../assets/photo/plane/wurenji.png">
      </div>
      <div class="">
        <div class="control-info">
          <div class="font-title">
            无人机信息
            <img @click="routergo" class="plane-log" src="../../assets/photo/log-off@2x.png">
            记录
          </div>
          <div v-for="planeInfo in planeInfo" :key="planeInfo.key">
            <div class="inlineclass planeInfo-key">{{planeInfo.key}}</div>
            <div class="inlineclass right-float planeInfo-value">{{planeInfo.value}}</div>
          </div>
        </div>
        <div class="control-board">
          <div class="control control-top"><img class="plane-control " src="../../assets/photo/plane/arrow@2x.png">
          </div>
          <div class="control control-right"><img class="plane-control plane-right"
                                                  src="../../assets/photo/plane/arrow@2x.png"></div>
          <div class="control control-bottom"><img class="plane-control plane-bottom"
                                                   src="../../assets/photo/plane/arrow@2x.png"></div>
          <div class="control control-left"><img class="plane-control plane-left"
                                                 src="../../assets/photo/plane/arrow@2x.png"></div>
          <div class="control control-small"><img class="plane-control" src="../../assets/photo/plane/-@2x.png"></div>
          <div class="control control-big"><img class="plane-control" src="../../assets/photo/plane/+@2x.png"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import airplane from '../../assets/drone@2x.png'
  import headerTool from '../common/headerTool.vue'

  export default {
    name: "plane",
    data() {
      return {
        planeInfo: [
          {key: '设备ID', value: '123456789'},
          {key: '经度', value: '32.56'},
          {key: '纬度', value: '23.78'},
          {key: '高度', value: '180m'},
          {key: '距离', value: '1234m'},
          {key: '速度', value: '40km/h'},
          {key: '时间', value: '21:05'}
        ]
      }
    },
    methods: {
      routergo() {
        this.$router.push('/video/recode');
      },
      getmap() {
        var map = new BMap.Map("bdmap");    // 创建Map实例
        var myIcon = new BMap.Icon(airplane, new BMap.Size(48, 48));
        var marker2 = new BMap.Marker(new BMap.Point(113.2885102246, 23.1902358112), {icon: myIcon});  // 创建标注
        map.addOverlay(marker2);
        map.centerAndZoom(new BMap.Point(113.297292, 23.178829), 16);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      },
      setWidth() {
          var videoSize=document.getElementsByClassName("video")[0];
          var planeSize=document.getElementsByClassName("plane")[0];
          var total = document.documentElement.clientHeight;
          planeSize.style.height=total-48+"px";
          videoSize.style.height=total-406+"px";

          document.getElementById("bdmap").style.height=total-48+"px";
      }
    },
    mounted() {
      this.getmap();
      this.setWidth();
    },
    components: {
      headerTool,
      
    },
  }
</script>
<style scoped>

  #bdmap {
    width: 100%;

  }

  .plane {
    position: absolute;
    right: 0;
    width: 674px;
    top: 48px;
    box-sizing: border-box;
    padding: 10px 10px;
    background: #FFFFFF;
  }

  span {
    line-height: 48px;
    font-size: 14px;
    color: #37403F;
  }

  .video {
    width: 654px;
  }

  .plane-video {
    width: 654px;
    height: 100%;
  }

  .control-info {
    width: 194px;
    height: 253px;
    padding: 24px 30px 23px 32px;
    float: left;
    background: #505958;
  }

  .font-title {
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 18px;
    padding-bottom: 15.8px;
    border-bottom: 1px solid #E3E6E5;
  }

  .plane-log {
    padding-left: 30px;
    width: 17px;
    height: 17px;
    vertical-align: center;
  }

  .planeInfo-key {
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 32px;
  }

  .planeInfo-value {
    font-size: 14px;
    color: #D7D9D8;
    letter-spacing: 0;
    line-height: 32px;
    text-align: right;
  }

  .inlineclass {
    width: 80px;
    display: inline-block;
  }

  .control-board {
    width: 398px;
    height: 300px;
    float: right;
    position: relative;
    background-color: #37403F;

  }

  .control {
    width: 48px;
    height: 48px;
    position: absolute;
  }

  .control-top {
    top: 25.7px;
    left: 175px;
  }

  .control-right {
    top: 127.3px;
    right: 43px;
  }

  .control-bottom {
    top: 227.9px;
    left: 175px;
  }

  .control-left {
    top: 127.3px;
    left: 39px;
  }

  .control-small {
    top: 127px;
    left: 134px;
  }

  .control-big {
    top: 127px;
    right: 134px;
  }

  img.plane-control {
    width: 48px;
    height: 48px;
  }

  img.plane-bottom {
    transform: rotate(180deg);
  }

  img.plane-left {
    transform: rotate(270deg);
  }

  img.plane-right {
    transform: rotate(90deg);
  }

</style>
