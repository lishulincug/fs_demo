<template>
  <div id="listNav">
        <ul>
            <li>
                <div class="li-div" @click="routerGo('/')">
                    <img src="../../assets/photo/map@2x.png"/>
                    <p><small>森防地图</small></p>                              
                </div>
            </li>
            <li>
                 <div class="li-div" @click="routerGo('/greenGuardian')">
                    <img src="../../assets/photo/senfang@2x.png"/>
                    <p><small>森防管理</small></p>                              
                </div>
            </li>
            <li>
                <div class="li-div" @click="routerGo('/emergency')">
                    <img src="../../assets/photo/yingjidiaodu@2x.png"/>
                    <p><small>应急调度</small></p>                              
                </div>
            </li>
            <li>
                <div class="li-div" @click="routerGo('/monitor')">
                    <img src="../../assets/photo/shipinjiance@2x.png"/>
                    <p><small>视频监测</small></p>                              
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'listNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      routerGo(url){

        this.$router.push(url);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#listNav{
    background-color:#0B4D43;
    width: 96px;
    height: 100%;
    position: fixed;

}
li{
    display: block;
    height: 88px;
    list-style-type:none
}
.li-div{
    padding:14px 16px 14px; 
    margin: 0;
    width: 64px;
    text-align: center;
}
p{
    font-size: 14px;
    color: rgba(255,255,255,0.80);
    line-height: 14px;
    padding-top:8px
}
img{
    display: block;
    height:32px;
    width: 32px;
  padding-left: 16px;
}
li:hover{
    background-color: rgba(82,204,188,0.10);
}
</style>