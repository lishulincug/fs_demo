<template>
  <div class="zdjc">

      <div class="search-keyword">
        <img class="search-keyword-icon">
        <input class="search-keyword-word" placeholder="这里输入搜索内容" v-model="keyword" @keyup="search">
      </div>
      <div class="search-line"></div>
      <div class="search-content">
        <div v-for="result in searchResult">
          <div class="result">{{result}}</div>
        </div>
      </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        keyword: '',
        rowResult: ['二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光'],
        searchResult: ['二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光', '二井湾HQ202光电跟踪仪白光']
      }
    },
    methods: {
      search () {
        var result = []
        for (var i = 0; i < this.rowResult.length; i++) {
          if (this.rowResult[i].indexOf(this.keyword) >= 0) {
            result.push(this.rowResult[i])
          }
        }
        this.searchResult = result
      }
    }
  }

</script>

<style>
  .zdjc {
    width: 240px;
   height: 94.8%;
    box-sizing: border-box;
    position: absolute;
    top:48px;
    left: 96px;
    background-color: #fff;
  }

  .search-content {
    width: 240px;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    overflow-x: hidden
    /*background-color: aqua;*/
  }

  /* 滚动条 */
  .search-content::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .search-content::-webkit-scrollbar-thumb {
    background-color: rgba(192, 192, 192, 1);
    border-radius: 0;
  }

  .search-keyword {
    width: 216px;
    height: 32px;
    box-sizing: border-box;
    margin: 12px 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    border: 1px solid #D9D9D9;
  }

  .search-keyword-icon {
    width: 16px;
    height: 16px;
    margin-top: 8px;
    box-sizing: border-box;
    background-color: #F7F7F7;
  }

  .search-keyword-word {
    position: relative;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 14px;
  }

  ::-webkit-input-placeholder { /* Chrome */
    color: rgba(217,217,217,0.50);
  }

  :-ms-input-placeholder { /* IE 10+ */
    color: rgba(217,217,217,0.50);
  }

  ::-moz-placeholder { /* Firefox 19+ */
    color: rgba(217,217,217,0.50);
    opacity: 1;
  }

  :-moz-placeholder { /* Firefox 4 - 18 */
    color: rgba(217,217,217,0.50);
    opacity: 1;
  }

  .search-keyword-word:focus {
    outline: none;
  }


  .search-line {
    height: 12px;
    margin: 0 12px;
    border-bottom: 1px solid #D9D9D9;
  }

  .result {
    width: 240px;
    height: 56px;
    padding: 25px 15px 19px 15px;
    box-sizing: border-box;
    font-size: 12px;
    color: #666666;
    letter-spacing: 0;
    line-height: 12px;
  }

  .result:hover {
    background: rgba(186, 230, 115, 0.10);
  }
</style>
