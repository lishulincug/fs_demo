<template>
<<<<<<< HEAD
    <div id="warehouse" >
		<div class="wrap">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>小横琴物资库1号</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="save(1)"/>	
                
            </div>	
            
        <section >
            <!--工具条-->
            <el-col :span="24" class="toolbar">
                      <el-select v-model="value" placeholder="请选择">
                        <el-option
                        class="warehouse-select"
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <button class="warehouse-button warehouse-add" @click="handleAdd">添加</button>
                    <button  class="warehouse-button warehouse-right" @click="handleAdd">物资清单</button>
                    <button  class="warehouse-button warehouse-right" @click="handleAdd">检查记录</button>
                    <button class="warehouse-button warehouse-right"  @click="handleAdd">盘点记录</button>

            </el-col>

            <!--列表-->
            <el-table :data="warehouses" highlight-current-row stripe v-loading="listLoading"  style="width: 100%;"height="200" border>            
                <el-table-column prop="name" label="名称" width="100" sortable>
                </el-table-column>
                <el-table-column prop="type" label="类型" width="100" sortable>
                </el-table-column>
                <el-table-column prop="brand" label="品牌" width="100" sortable>
                </el-table-column>
                <el-table-column prop="size" label="型号" width="100" sortable>
                </el-table-column>
                <el-table-column prop="buyTime" label="购买时间" min-width="150" sortable>
                </el-table-column>
                <el-table-column prop="sum" label="现有库存" min-width="120" sortable>
                </el-table-column>
                <el-table-column prop="limit" label="警戒库存" min-width="120" sortable>
                </el-table-column>
                <el-table-column prop="last" label="最后使用时间"min- width="180" sortable>
                </el-table-column>
                <el-table-column prop="check" label="检查时间" min-width="150" sortable>
                </el-table-column>                
                <el-table-column prop="state" label="状态" min-width="100" sortable>
                </el-table-column>
                <el-table-column label="操作" min-width="150">
                        <template scope="scope">
                            <el-button size="small" @click="handleEdit(scope.$id, scope.row)">编辑</el-button>
                            <el-button type="danger" size="small" @click="handleDel(scope.$id, scope.row)">删除</el-button>
                        </template>
                </el-table-column>
            </el-table>
        </section>
	</div>
        <div v-show="editFormVisible" class="editForm-div">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>小横琴物资库1号</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="editFormVisible = false"/>	               
            </div>	
            <el-form label-position="left" label-width="80px" :model="editForm" class="editForm-form">
            <el-form-item label="ID" class="editForm-item">
                <el-input v-model="editForm.id"></el-input>
            </el-form-item>
            <el-form-item label="名称" class="editForm-item">
                <el-input v-model="editForm.name"></el-input>
            </el-form-item>
            <el-form-item label="类型" class="editForm-item">
                <el-select v-model="editForm.type" placeholder="请选择类型">
                    <el-option label="生存" value="shanghai"></el-option>
                    <el-option label="休息" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="品牌" class="editForm-item">
                <el-input v-model="editForm.brand"></el-input>
            </el-form-item>
            <el-form-item label="型号" class="editForm-item">
                <el-input v-model="editForm.size"></el-input>
            </el-form-item>
            <el-form-item label="购买时间" class="editForm-item">
                      <el-date-picker type="date" placeholder="选择日期" v-model="editForm.buyTime" style="width: 100%;" ></el-date-picker>
            </el-form-item>
            <el-form-item label="现有库存" class="editForm-item">
                <el-input v-model="editForm.sum"></el-input>
            </el-form-item>
            <el-form-item label="警戒库存" class="editForm-item">
                <el-input v-model="editForm.limit"></el-input>
            </el-form-item>
            <el-form-item label="最后使用" class="editForm-item">
                      <el-date-picker type="date" placeholder="选择日期" v-model="editForm.last" style="width: 100%;" ></el-date-picker>
            </el-form-item>
            <el-form-item label="检查时间" class="editForm-item">
                      <el-date-picker type="date" placeholder="选择日期" v-model="editForm.check" style="width: 100%;" ></el-date-picker>
            </el-form-item>
            <el-form-item label="状态" class="editForm-item">
                <el-select v-model="editForm.state" placeholder="请选择状态">
                    <el-option label="良好" value="shanghai"></el-option>
                    <el-option label="一般" value="beijing"></el-option>
                </el-select>
            </el-form-item>
                <button class="editForm-button" @click="editFormVisible = false" >取消</button> <button class="editForm-button" @click="save(2)" >保存</button>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
        name: 'warehouse',
		data() {
			return {
        value:"",
				filters: {
					name: ''
				},
				options: [{
						value: '1级',
						label: '1'
						}, {
						value: '2级',
						label: '2'
						}, {
						value: '3级',
						label: '3'
						}, {
						value: '14级',
						label: '4'
						}],
				warehouses: [
                    {id:"345543123",name:"饮水机",type:"生存",brand:"怡宝",size:"1.5L",buyTime:"2013/12/21",
                    sum:"12",limit:"5",last:"2017/5/20",check:"2017/6/20",state:"良好" },
                    {id:"345543123",name:"饮水机",type:"生存",brand:"怡宝",size:"1.5L",buyTime:"2013/12/2",
                    sum:"12",limit:"5",last:"2017/5/20",check:"2017/6/20",state:"良好" },
                    {id:"345543123",name:"饮水机",type:"生存",brand:"怡宝",size:"1.5L",buyTime:"2013/12/2",
                    sum:"12",limit:"5",last:"2017/5/20",check:"2017/6/20",state:"良好" },
                    {id:"345543123",name:"饮水机",type:"生存",brand:"怡宝",size:"1.5L",buyTime:"2013/12/2",
                    sum:"12",limit:"5",last:"2017/5/20",check:"2017/6/20",state:"良好" },
                    {id:"345543123",name:"饮水机",type:"生存",brand:"怡宝",size:"1.5L",buyTime:"2013/12/2",
                    sum:"12",limit:"5",last:"2017/5/20",check:"2017/6/20",state:"良好" },
                    {id:"345543123",name:"饮水机",type:"生存",brand:"怡宝",size:"1.5L",buyTime:"2013/12/2",
                    sum:"12",limit:"5",last:"2017/5/20",check:"2017/6/20",state:"良好" },
                ],
				total: 0,
				page: 1,
                
        listLoading: false,
        editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
                    id: '',
                    name:'',
					type: '',
					brand: '',
					size: '',
                    buyTime: '',
                    sum:'',
                    limit:'',
                    last:'',
                    check:'',
                    state:'',
				},

			}
		},
		methods: {
            //获取数据
			getwarehouse() {
				
            },
			//显示编辑界面
			handleEdit (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd () {
				this.editFormVisible = true;
				this.editForm = {
                    id: '',
                    name:'',
                    type: '',
                    brand: '',
                    size: '',
                    buyTime: '',
                    sum:'',
                    limit:'',
                    last:'',
                    check:'',
                    state:'',
				    };
        },
        handleDel(){

        },
            			//编辑
			editSubmit() {

			},
      save(index){
          this.editFormVisible = false; 
      },

    },		
	mounted() {
		
	}
}
</script>

<style scoped>
#warehouse{
    position: absolute;
    bottom: 0px;
    height: 336px;
    z-index: 1;
    left: 336px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
}
.wrap{
	margin: 0 10px;
}
.title{
	font-size: 14px;
	color: #666666;
	line-height: 48px;
	
}
.bt{
	height: 48px;
	border-bottom: 1px solid;
	margin-bottom: 10px;
}
img{
	display: inline-block;
	width: 16px;
	height: 16px;
	padding-top: 14px;
	padding-right: 14px;
}
.tableClose{
    float: right;
}
.warehouse-button{
    display: inline-block;
    width: 82px;
    height: 36px;
    color: #37403F;
    background-color: #FFFFFF;
    border: 1px solid #D7D9D8;
    margin: 10px 15px;
}
.warehouse-button:hover{
    border: 1px solid #5EBF1D;
}
.warehouse-add{
    color: #FFFFFF;
    background-color: #5EBF1D;
    border: 0;
}
.warehouse-right{
    float:right; 
}
/* ---修改框 添加框  */
.editForm-div{
    position: fixed;
    top:64px;
    left:352px;
    width: 240px;
    height: 610px;
    background: #FFFFFF;
    border: 1px solid #D7D9D8;
    box-sizing: border-box;
    padding: 0 16px;
}
.editForm-form{
    display: inline-block;
    height: 572px;
    overflow: hidden
}
.editForm-item{
    display: inline-block;
    /* height: 36px ！important; */
    margin-bottom: 10px ;
}
.editForm-button{
    height: 44px;
    color: #FFFFFF;
    font-size: 14px;
    color: #37403F;
    letter-spacing: 0;
    line-height: 14px;
    border: 1px solid #D9D9D9;
    width: 100px;;
    box-sizing: border-box;
    background-color: #FFFFFF;
}
.editForm-button:hover{
    color: #5EBF1D;
    border: 1px solid #5EBF1D;

}

</style>
=======
  <div style="height: 100%">
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
              <img class="addressLogo" src="../../assets/photo/position_cell2@2x.png">
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
      <img class="editLogo img-l" src="../../assets/photo/edit-off@2x.png">
      <img class="delLogo img-l" src="../../assets/photo/delete@2x.png">
      <img @click="show" class="watchLogo img-l" src="../../assets/photo/log-off@2x.png">
    </div>
    <div @click="modifyLayer" style="height: 100%">
      <Diagram></Diagram>
      <detailedInformation v-show="detailedInformationShow"></detailedInformation>
    </div>
  </div>
</template>
<script>

  import Diagram from '../common/Diagram.vue'
  import BDmap from '../common/map.vue'
  import headerTool from '../common/headerTool.vue'
  import Bus from '../../bus.js'
  import icon from '../../assets/position@2x.png'
  import detailedInformation from './detailedInformation.vue'


  export default {
    name: 'warehouse',
    components: {
      Diagram,
      BDmap,
      headerTool,
      detailedInformation,
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
      }
    },
    beforeCreate() {
      Bus.$on('commonMap', data => {
        this.map = data
      })
    },
    mounted() {
      this.init(this.map, this.warehouseResults, {lng: 113.3045102246, lat: 23.1902358112})
    }

  }
</script>
<style scoped>
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
>>>>>>> ed66a361e2180c05fef32b888f87ac6c0ff43cdc
