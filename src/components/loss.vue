<template>
  <div class="main" id="main">
    <headerTool></headerTool>
    <div @click="modifyLayer" style="height:700px;">
      <Diagram  class="bdmap"></Diagram>
    </div>
    <div class="loss" id="loss">
      <div class="higher">
        <p class="loss-title">损失评估</p>
        <el-input
          placeholder="请搜索内容"
          icon="search"
          class="loss-input"
          v-model="input2"
          :on-icon-click="handleIconClick">
        </el-input>
      </div>
      <div class="line"></div>
      <div class="mid">
        <div v-for="result in lossResults" :key="result.address">
          <div class="result">
            <div class="result-address">
              <img class="addressLogo" src="../assets/photo/position_cell2@2x.png">
            </div>
            <div class="result-info" @click="move(map,result.point)">
              <span class="info">{{result.address}}</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
              <span class="info info-lvl">{{result.lvl}}</span>
              <p class="info">{{result.time}}</p>
            </div>
          </div>
        </div>
        <el-pagination
          small
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>

      <div class="line"></div>
      <div class="lower">
        <div v-for="Info in Infos" :key="Info.key">
          <div class=" Info-key">{{Info.key}}</div>
          <div class=" Info-value">{{Info.value}}</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="down">
        <p class="loss-title">损失统计</p>
        <div class="inlineclass Info-key">林地损失</div>
        <div class="inlineclass right-float Info-value">1234 km2</div>
        <div class="inlineclass Info-key">畜地损失</div>
        <div class="inlineclass right-float Info-value">435 km2</div>
        <div class="inlineclass Info-key">影响人数</div>
        <div class="inlineclass right-float Info-value">2345</div>
      </div>
    </div>
  </div>
</template>

<script>
  // 存在问题 只要图层被点击 就会把标志物清除，原因是在图层里写了 清除标志物，暂时解决方法，写了个点击事件
  // 正确方法 应该是 重新 设计 地图 的 方法 数据 都应该 放在 同个js vuex 中 ，每次 地图操作 是去更改地图信息，让地图更新
  // 而不是 清除 地图的上个操作，重新加载新数据 让地图更新
  import Diagram from './common/Diagram.vue'
  import BDmap from './common/map.vue'
  import headerTool from './common/headerTool.vue'

  import Bus from '../bus.js'
  import icon from '../assets/position@2x.png'

  export default {
    name: 'loss',
    data() {
      return {
        input2: '',
        lossResults: [
          {
            address: "小横琴物资库1号", time: "2017/03/23 12:32", lvl: "1级",
            point: new BMap.Point(113.3045102246, 23.1902358112)
          },
          {
            address: "小横琴物资库2号", time: "2017/03/23 12:32", lvl: "1级",
            point: new BMap.Point(113.297, 23.196016)
          },
          {
            address: "小横琴物资库3号", time: "2017/03/23 12:32", lvl: "1级",
            point: new BMap.Point(113.310008, 23.199869)
          }],
        Infos: [
          {key: 'ID', value: '123456789'},
          {key: '等级', value: '1'},
          {key: '起始时间', value: '2017/03/23 12:32'},
          {key: '结束时间', value: '2017/03/23 12:32'},
          {key: '地点', value: '平顶山'},
          {key: '经度', value: '23"78"'},
          {key: '纬度', value: '23"78"'},
          {key: '影响范围', value: '2 km'},
          {key: '负责人', value: '张三'},
          {key: '联系方式', value: '131 111 11'}
        ],
        map: {},
        movePoint: {
          lng: 113.319422,
          lat: 23.2004
        },
        tempPointMarker: ''
      }
    },
    methods: {
      handleIconClick() {
      },
      init(map, Points, centerPoint) {
        var center = new BMap.Point(Number(centerPoint.lng), Number(centerPoint.lat))
        map.enableScrollWheelZoom(true)
        map.centerAndZoom(center, 15)
        const that = this
        // target这里有坑
        var getAttr = function (marker) {
          var p = marker.target.getPosition()       // 获取marker的位置
          that.movePoint.lng = p.lng
          that.movePoint.lat = p.lat
          console.log('marker的位置是' + p.lng + ',' + p.lat)
        }
        for (var i = 0; i < Points.length; i++) {
          var marker = new BMap.Marker(Points[i].point)  // 创建标注
          var label = new BMap.Label('id:' + Points[i].address, {offset: new BMap.Size(20, -10)})
          map.addOverlay(marker)              // 将标注添加到地图中
          marker.setLabel(label)
          marker.addEventListener('click', getAttr)
        }
      },
      move(map, movePoint) {
        if (this.tempPointMarker !== '') {
          map.removeOverlay(this.tempPointMarker)
        }
        var myIcon = new BMap.Icon(icon, new BMap.Size(48, 48))
        var point = new BMap.Point(Number(movePoint.lng), Number(movePoint.lat))
        var marker = new BMap.Marker(point, {icon: myIcon})  // 创建标注
        map.addOverlay(marker)              // 将标注添加到地图中
        this.tempPointMarker = marker
        map.panTo(point)
      },
      modifyLayer() {
        this.init(this.map, this.lossResults, {lng: 113.3045102246, lat: 23.1902358112})
      },
      setWidth() {
          var loss=document.getElementById("loss");
          var total = document.documentElement.clientHeight;
          loss.style.height=total-48+"px";
         var bdmap=document.getElementsByClassName("bdmap")[0];
          bdmap.style.height=total-48+"px";
      }
    },
    components: {
      Diagram,
      BDmap,
      headerTool,
    },
    beforeCreate() {
      Bus.$on('commonMap', data => {
        this.map = data
      })
    },
    mounted() {
      this.init(this.map, this.lossResults, {lng: 113.3045102246, lat: 23.1902358112})
      this.setWidth();
    }
  }
</script>
<style scoped>
  .main {
    height: 100%;
  }

  .BDmap {
    height: 100%;
    width: 100%;
  }

  .loss {
    position: absolute;
    top: 48px;
    left: 96px;
    z-index: 1;
    background-color: #ffffff;
    width: 208px;
    padding: 0 16px;
  }

  .loss-input {
    width: 208px;
  }

  p.loss-title {
    font-size: 14px;
    color: #37403F;
    line-height: 48px;
  }

  .line {
    width: 208px;
    margin: 16px 0;
    border: 1px solid #E3E6E5;
  }

  /*--------第2部分  */
  .result {
    width: 208px;
    height: 48px;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 12px;
  }

  .result:hover {
    background: rgba(174, 230, 138, 0.15);
  }

  .addressLogo {
    padding: 12px 0px;
    width: 24px;
    height: 24px;

  }

  .result-address {
    width: 32px;
    height: 48px;
    text-align: center;
    display: inline-block;
  }

  .result-info {
    width: 170px;
    height: 48px;
    display: inline-block;
  }

  .info {
    size: 12px;
    line-height: 12px;
    color: #37403F;
  }

  p.info {
    line-height: 39px;
    color: #79807F;
  }

  /*----------- 3,4部分 */
  .Info-key {
    font-size: 12px;
    color: #37403F;
    letter-spacing: 0;
    line-height: 32px;
    width: 80px;
    display: inline-block;
  }

  .Info-value {
    font-size: 12px;
    color: #79807F;
    letter-spacing: 0;
    line-height: 32px;
    text-align: right;
    width: 120px;
    display: inline-block;

  }

  div.inlineclass.Info-key {
    box-sizing: border-box;
    padding-left: 12px;
  }
</style>
