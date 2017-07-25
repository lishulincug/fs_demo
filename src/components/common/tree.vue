<template>
  <div id="treeMenu">
    <div class="treeline">
      <div @click.prevent="toggle" class="div-nav">
          <span :class="table.title=='图层列表'?'font1':'font2'" class="span-font">
            <span v-if="!isFolder">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img :src="table.icon" class="diagramIcon" />{{table.title}}
          </span>
      </div>
      <div @click="selectAll(table)" class="selecteIcon">
        <img src="../../assets/photo/Diagram/selected@2x.png" v-if="table.display" class="select">
        <img src="../../assets/photo/Diagram/selected2@2x.png" v-if="!table.display" class="select">
      </div>
    </div>
    <div v-show="open" v-if="isFolder">
      <tree-Menu v-for="table in table.type" :table="table" :key="table.id"></tree-Menu>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'treeMenu',
    props: ['table'],
    data() {
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
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      selectAll(table) {
        this.table.display = !this.table.display
        let display = this.table.display
        var solve = (data) => {
          if (data.display === display) {
            for (var i = 0; i < data.type.length; i++) {
              data.type[i].display = display
              solve(data.type[i])
            }
          }
        }
        solve(table)
      }
    }
  }
</script>

<style scoped>
  .treeline {
    height: 24px;
    margin: 12px 6px 12px 12px;
  }

  .div-nav {
    display: inline-block;
    width: 193px;
  }

  .selecteIcon {
    display: inline-block;
    width: 16px
  }

  .select {
    width: 16px;
    height: 16px;
  }

  .diagramIcon {
    width: 24px;
    height: 24px;
    vertical-align: bottom

  }

  .font1 {
    font-size: 16px;
    line-height: 24px;
  }

  .font2 {
    font-size: 12px;
    line-height: 24px;
  }


</style>
