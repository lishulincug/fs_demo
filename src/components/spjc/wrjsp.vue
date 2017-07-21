<template>
  <div  class="clear-float">
    <div class="video"></div>
    <div class="" >
         <div class="control-info">
              <div class="font-title">无人机信息</div>
                <div v-for="planeInfo in planeInfo" :key="planeInfo.key">
                  <div class="inlineclass planeInfo-key">{{planeInfo.key}}</div>
                  <div class="inlineclass right-float planeInfo-value">{{planeInfo.value}}</div>
                </div>
        </div>
        <div class="control-board">
          <div class="control control-top" style="background: black">1</div>
          <div class="control control-right" style="background: black">2</div>
          <div class="control control-bottom" style="background: black">3</div>
          <div class="control control-left" style="background: black">4</div>
          <div class="control control-small" style="background: black">5</div>
          <div class="control control-big" style="background: black">6</div>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name:"wrjsp",
    data () {
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
    }
  }
</script>
<style>
  .clear-float {
    position: absolute;
    right: 0;
   width: 654px;
   top:48px;
   height: 94.8%;
  }
  .video {
    width: 654px;
    height: 66.5%;
    background-color: aqua;
  }

  .control-info {
    width: 194px;
    height: 253px;
    padding: 24px 30px 23px 32px;
    float: left;
    background: #F7F7F7;
  }

  .font-title {
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 14px;
    padding-bottom: 15.8px;
  }

  .planeInfo-key {
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 32px;
  }

  .planeInfo-value {
    font-size: 14px;
    color: #999999;
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
    height: 301px;
    float: right;
    position: relative;
    background-color: #666666;
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


</style>
