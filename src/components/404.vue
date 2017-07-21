<template>
    <!-- <p class="page-container">404 page not found</p> -->
    <div>
  <li v-for="item in options" v-bind:key="item.label">
      {{item.value}}
  </li>
</div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '1'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '2'
        }],
        value4: '1'
      }
    }
  }
</script>
<style  scoped>
    .page-container {
        font-size: 20px;
        text-align: center;
        color: rgb(192, 204, 218);
    }
</style>