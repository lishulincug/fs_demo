<template>
  <div id="tree">
    <div v-for="item in table" :key="item.title">
      <tree :table="item"></tree>
    </div>
  </div>
</template>
<script>
  import tree from './tree.vue'

  export default {
    data() {
      return {
        table: [{
          title: '图层列表',
          status: false,
          icon: require('../../assets/photo/Diagram/arrow@2x.png'),
          type: [
            {
              title: '专题图层',
              status: false,
              icon: require('../../assets/photo/Diagram/zhuanti@2x.png'),
              type: [
                {
                  title: '森林监控',
                  status: false,
                  icon: require('../../assets/photo/Diagram/cam_senfang@2x.png'),
                  type: []
                },
                {
                  title: '森防蓄水池',
                  status: false,
                  icon: require('../../assets/photo/Diagram/xushuichi@2x.png'),
                  type: []
                },
                {
                  title: '森林指示牌',
                  status: false,
                  icon: require('../../assets/photo/Diagram/zhishipai@2x.png'),
                  type: []
                },
                {
                  title: '森防网络',
                  status: false,
                  icon: require('../../assets/photo/Diagram/senfanggird@2x.png'),
                  type: []
                },
                {
                  title: '防火林带',
                  status: false,
                  icon: require('../../assets/photo/Diagram/fanghuolindai@2x.png'),
                  type: []
                },
                {
                  title: '防火通道',
                  status: false,
                  icon: require('../../assets/photo/Diagram/firespath@2x.png'),
                  type: []
                },
                {
                  title: '地址灾害',
                  status: false,
                  icon: require('../../assets/photo/Diagram/dizhizaihai@2x.png'),
                  type: []
                },
                {
                  title: '森林车道',
                  status: false,
                  icon: require('../../assets/photo/Diagram/chedao@2x.png'),
                  type: []
                }
              ]
            },
            {
              title: '基础图层',
              status: false,
              icon: require('../../assets/photo/Diagram/jichutuceng@2x.png'),
              type: [
                {
                  title: '地名',
                  status: false,
                  icon: require('../../assets/photo/Diagram/diming@2x.png'),
                  type: []
                },
                {
                  title: '道路',
                  status: false,
                  icon: require('../../assets/photo/Diagram/daolu@2x.png'),
                  type: []
                }
              ]
            }
          ]
        }]
      }
    },
    components: {
      tree
    }
  }
</script>


<style scoped>
  #tree {
    width: 250px;
    right: 24px;
    top: 80px;
    position: absolute;
    z-index: 10;
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

</style>
