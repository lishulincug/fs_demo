<template>
  <div class="main" id="main">
    <headerTool></headerTool>
    <div id="res">
          <div class="warehouse">
            <div class="higher">
              <p class="warehouse-title">资源管理</p>
              <el-select v-model="input2" class="warehouse-select" placeholder="请选择地区">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input
                placeholder="请搜索内容"
                icon="search"
                class="warehouse-input"
                v-model="input2"
                :on-icon-click="handleIconClick">
              </el-input>
              <button class="warehouse-button">添加</button>
            </div>
            <div class="line"></div>
            <div class="mid">
              <div v-for="result in warehouseResults" :key="result.address">
                <div class="result">
                  <div class="result-address">
                    <img class="addressLogo" src="../assets/photo/position_cell2@2x.png">
                  </div>
                  <div class="result-info" @click="move(map,result.point)">
                    <p class="info">{{result.name}}</p>
                    <span class="info">位置： {{result.address}}</span>
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
            <img class="editLogo img-l" src="../assets/photo/edit-off@2x.png">
            <img class="delLogo img-l" src="../assets/photo/delete@2x.png">
            <img @click="show" class="watchLogo img-l" src="../assets/photo/log-off@2x.png">
          </div>
              <div @click="modifyLayer" style="height: 700px">
                <Diagram></Diagram>
                <!-- <detailedInformation v-show="detailedInformationShow"></detailedInformation> -->
              </div>
    </div>        
  </div>
</template>

<script>
  import Diagram from './common/Diagram.vue'
  import headerTool from './common/headerTool.vue'
  import Bus from '../bus.js'
  import icon from '../assets/position@2x.png'
  
  export default {
    name: 'resource',
    components: {
      Diagram,
      headerTool,
    },
  data() {
      return {
        detailedInformationShow:false,
        input2: '',
        warehouseResults: [{
          name: "小横琴物资库1号", address: "越秀区",
          point: new BMap.Point(113.3045102246, 23.1902358112)
        },
          {
            name: "小横琴物资库2号", address: "白云区",
            point: new BMap.Point(113.297, 23.196016)
          },
          {
            name: "小横琴物资库3号", address: "天河区",
            point: new BMap.Point(113.310008, 23.199869)
          }],
        Infos: [
          {key: 'ID', value: '123456789'},
          {key: '名称', value: '小横琴社区'},
          {key: '地点', value: '平顶山'},
          {key: '经度', value: '23"78"'},
          {key: '纬度', value: '23"78"'},
          {key: '负责人', value: '张三'},
          {key: '联系方式', value: '131 111 11'},
          {key: '关联站点', value: '避难所1号'},
          {key: '备注', value: '-'},
        ],
        options: [{
          value: "越秀区", lable: "越秀区"
        }, {
          value: "天河区", lable: "天河区"
        }, {
          value: "越秀区", lable: "越秀区"
        }],
        map: {},
        movePoint: {
          lng: 113.319422,
          lat: 23.2004
        },
        tempPointMarker: ''
      }
    },
    methods: {
      show(){
        this.detailedInformationShow=true;
      },
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
          var label = new BMap.Label('id:' + Points[i].name, {offset: new BMap.Size(20, -10)})
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
        this.init(this.map, this.warehouseResults, {lng: 113.3045102246, lat: 23.1902358112})
      },
      setWidth() {
          var BDmap=document.getElementById("BDmap");
          var total = document.documentElement.clientHeight;
          var totalWidth = document.documentElement.clientWidth;
          BDmap.style.height=total-48+"px";
          BDmap.style.width=totalWidth-96+"px";
      }
    },
    beforeCreate() {
      Bus.$on('commonMap', data => {
        this.map = data
      })
    },
    mounted() {
      this.setWidth();
      this.init(this.map, this.warehouseResults, {lng: 113.3045102246, lat: 23.1902358112})
    }

  }
</script>
<style scoped>
.main{
  height: 100%;
  width: 100%;
}

  .warehouse {
    position: absolute;
    top: 48px;
    left: 96px;
    z-index: 1;
    background-color: #ffffff;
    height: 94.6%;
    width: 208px;
    padding: 0 16px;
  }

  .warehouse-input {
    width: 148px;
  }

  .warehouse-button {
    width: 50px;
    background-color: #5EBF1D;
    color: #ffffff;
    height: 36px;
    margin-left: 5px;

  }

  p.warehouse-title {
    padding-top: 10px;
    font-size: 14px;
    color: #37403F;
    line-height: 32px;
  }

  .warehouse-select {
    padding: 10px 0;
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
    box-sizing: border-box;
  }

  .result:hover {
    background: rgba(174, 230, 138, 0.15);
  }

  .result-address {
    width: 32px;
    height: 48px;
    text-align: top;
    display: inline-block;

  }

  .addressLogo {
    width: 24px;
    height: 24px;
    vertical-align: middle;
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

  span.info {
    margin-top: 10px;
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

  .img-l {
    display: inline-block;
    width: 16px;
    height: 16px;
  }

  .watchLogo {
    float: right;
  }
</style>
