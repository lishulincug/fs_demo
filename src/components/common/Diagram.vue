<template>
  <div class="maxScreen">
    <div id="tree">
      <div v-for="item in table" :key="item.title">
        <tree :table="item"></tree>
      </div>
    </div>
    <div id="BDmap">
      <ForestProtectMap :layers="table" ></ForestProtectMap>
    </div>
  </div>
</template>
<script>
  import tree from './tree.vue'
  import ForestProtectMap from './forestProtectMap.vue'

  import forestMonitor from '../../assets/photo/Diagram/cam_senfang@2x.png'
  import forestPoll from '../../assets/photo/Diagram/xushuichi@2x.png'
  import forestSign from '../../assets/photo/Diagram/zhishipai@2x.png'
  import forestNet from '../../assets/photo/Diagram/senfanggird@2x.png'
  import fireMantle from '../../assets/photo/Diagram/fanghuolindai@2x.png'
  import firePath from '../../assets/photo/Diagram/firespath@2x.png'
  import geologicHazard from '../../assets/photo/Diagram/dizhizaihai@2x.png'
  import forestLoad from '../../assets/photo/Diagram/chedao@2x.png'

  export default {
    data() {
      return {
        table: [
          {
            title: '图层列表',
            display: false,
            icon: require('../../assets/photo/Diagram/arrow@2x.png'),
            type: [
              {
                title: '专题图层',
                display: true,
                icon: require('../../assets/photo/Diagram/zhuanti@2x.png'),
                type: [
                  {
                    title: '森林监控',
                    points: [
                      {point: new BMap.Point(113.3045102246, 23.1902358112)},
                      {point: new BMap.Point(113.297, 23.196016)},
                      {point: new BMap.Point(113.310008, 23.199869)},
                      {point: new BMap.Point(113.306271, 23.188309)},
                      {point: new BMap.Point(113.311517, 23.183392)}
                    ],
                    icon: forestMonitor,
                    display: true,
                    type: []
                  },
                  {
                    title: '森防蓄水池',
                    points: [
                      {point: new BMap.Point(113.304905, 23.17708)},
                      {point: new BMap.Point(113.29851, 23.19389)},
                      {point: new BMap.Point(113.319422, 23.2004)},
                      {point: new BMap.Point(113.312451, 23.205449)}
                    ],
                    icon: forestPoll,
                    display: true,
                    type: []
                  },
                  {
                    title: '森林指示牌',
                    points: [
                      {point: new BMap.Point(113.3015102246, 23.1902358112)},
                      {point: new BMap.Point(113.2972, 23.196016)},
                      {point: new BMap.Point(113.292008, 23.199869)},
                      {point: new BMap.Point(113.302271, 23.188309)},
                      {point: new BMap.Point(113.310517, 23.183392)},
                      {point: new BMap.Point(113.304905, 23.17708)}
                    ],
                    icon: forestSign,
                    display: true,
                    type: []
                  },
                  {
                    title: '森防网络',
                    points: [
                      {point: new BMap.Point(113.3045102246, 23.1922358112)},
                      {point: new BMap.Point(113.297, 23.193016)},
                      {point: new BMap.Point(113.310008, 23.194869)},
                      {point: new BMap.Point(113.306271, 23.185309)},
                      {point: new BMap.Point(113.311517, 23.184392)}
                    ],
                    icon: forestNet,
                    display: true,
                    type: []
                  },
                  {
                    title: '防火林带',
                    points: [
                      {point: new BMap.Point(113.3025102246, 23.1912358112)},
                      {point: new BMap.Point(113.298, 23.195016)},
                      {point: new BMap.Point(113.311008, 23.198869)},
                      {point: new BMap.Point(113.305271, 23.189309)},
                      {point: new BMap.Point(113.313517, 23.185392)}
                    ],
                    icon: fireMantle,
                    display: true,
                    type: []
                  },
                  {
                    title: '防火通道',
                    points: [
                      {point: new BMap.Point(113.302905, 23.17808)},
                      {point: new BMap.Point(113.29851, 23.18589)},
                      {point: new BMap.Point(113.310422, 23.204)},
                      {point: new BMap.Point(113.316451, 23.206449)}
                    ],
                    icon: firePath,
                    display: true,
                    type: []
                  },
                  {
                    title: '地址灾害',
                    points: [
                      {point: new BMap.Point(113.305905, 23.17508)},
                      {point: new BMap.Point(113.29351, 23.19389)},
                      {point: new BMap.Point(113.312422, 23.2004)},
                      {point: new BMap.Point(113.312451, 23.205449)}],
                    icon: geologicHazard,
                    display: true,
                    type: []
                  },
                  {
                    title: '森林车道',
                    points: [
                      {point: new BMap.Point(113.3045102246, 23.1922358112)},
                      {point: new BMap.Point(113.310008, 23.194869)},
                      {point: new BMap.Point(113.302905, 23.1728)},
                      {point: new BMap.Point(113.315451, 23.202449)}
                    ],
                    icon: forestLoad,
                    display: true,
                    type: []
                  }]
              },
              {
                title: '基础图层',
                display: false,
                icon: require('../../assets/photo/Diagram/jichutuceng@2x.png'),
                type: [
                  {
                    title: '地名',
                    display: false,
                    icon: require('../../assets/photo/Diagram/diming@2x.png'),
                    type: []
                  },
                  {
                    title: '道路',
                    display: false,
                    icon: require('../../assets/photo/Diagram/daolu@2x.png'),
                    type: []
                  }
                ]
              }
            ]
          }],
        map:{}
      }
    },
    components: {
      tree,
      ForestProtectMap
    },

  }
</script>


<style scoped>
  #tree {
    width: 250px;
    right: 24px;
    top: 80px;
    position: fixed;
    z-index: 99;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    max-height: 400px;
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(192, 192, 192, 1);
    border-radius: 0;
  }

  .maxScreen {
    width: 100%;
    height: 100%;
  }

  #BDmap {
    width: 100%;
    height: 100%;
  }

</style>
