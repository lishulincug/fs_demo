<template>
    <div id="list" >
		<div class="wrap">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>小横琴物资库1号-盘点记录</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="routerGO('/resource')"/>	                
            </div>	            
        <section >
            <!--工具条-->
            <el-col :span="24" class="toolbar">
                      <el-select v-model="value" placeholder="请选择">
                        <el-option
                        class="list-select"
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <button class="list-button list-add" @click="handleAdd">盘点</button>
                    <button class="list-button list-right"  @click="routerGO('/resource/list')">盘点记录</button>
                    <button  class="list-button list-right" @click="routerGO('/resource/check')">检查记录</button>
                    <button  class="list-button list-right" @click="routerGO('/resource/warehouse')">物资清单</button>

            </el-col>

            <!--列表-->
            <el-table :data="lists" highlight-current-row stripe v-loading="listLoading"  style="width: 100%;"height="200" border>            
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
                            <el-button type="danger" size="small" @click="handleDel(scope.$id, scope.row)">删除</el-button>
                        </template>
                </el-table-column>
            </el-table>
        </section>
	</div>
            <div v-show="editFormVisible" class="log" @click="editFormVisible=false">
                 <img class="lon-on" src="../../assets/photo/log-on@2x.png"> 
                <span >盘点记录</span>
                <img @click="show" class="log-img " src="../../assets/photo/close@2x.png">
                <div class="line"></div>
                <el-date-picker
                v-model="input2"
                class="log-input"
                type="daterange"
                placeholder="选择日期范围">
                </el-date-picker>
            <div>
            <el-table :data="reslists" highlight-current-row stripe v-loading="listLoading"  style="width: 100%;"height="400" border>            
                <el-table-column prop="time" label="盘点时间" width="120" sortable>
                </el-table-column>
                <el-table-column prop="people" label="盘点人" width="100" sortable>
                </el-table-column>
                <el-table-column prop="res" label="盘点结果" width="120" sortable>
                </el-table-column>
            </el-table>
            </div>
        </div>

    </div>
</template>

<script>
	export default {
        name: 'list',
		data() {
			return {
                value:"",
				filters: {
					name: ''
                },
                reslists:[{time:"2015/7/12",people:"张三",res:'完成'},{time:"2015/7/12",people:"张三",res:'完成'},{time:"2015/7/12",people:"张三",res:'完成'},
                {time:"2015/7/12",people:"张三",res:'完成'},{time:"2015/7/12",people:"张三",res:'完成'},{time:"2015/7/12",people:"张三",res:'完成'},
                 {time:"2015/7/12",people:"张三",res:'完成'},{time:"2015/7/12",people:"张三",res:'完成'},{time:"2015/7/12",people:"张三",res:'完成'},
                   {time:"2015/7/12",people:"张三",res:'完成'},{time:"2015/7/12",people:"张三",res:'完成'},{time:"2015/7/12",people:"张三",res:'完成'},],
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
				lists: [
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
            routerGO(url){
                this.$router.push(url); 
            },
            //获取数据
			getlist() {
				
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

    },		
	mounted() {
		
	}
}
</script>

<style scoped>
#list{
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
.list-button{
    display: inline-block;
    width: 82px;
    height: 36px;
    color: #37403F;
    background-color: #FFFFFF;
    border: 1px solid #D7D9D8;
    margin: 10px 15px;
}
.list-button:hover{
    border: 1px solid #5EBF1D;
}
.list-add{
    color: #FFFFFF;
    background-color: #5EBF1D;
    border: 0;
}
.list-right{
    float:right; 
}

/*------------记录  */
.log{
    position: fixed;
    top:96px;
    left:352px;
    width: 358px;
    height: 503px;
    background: #FFFFFF;
    border: 1px solid #D7D9D8;
    padding: 0px 0 0 16px;;
}
.line{
    margin: 15px 16px 15px 0;
    height: 1px;
    background-color: #E3E6E5; 
}
.lon-on{
    display: inline-block;
    width:16px;
    height: 16px;
    padding-right: 15px;
    padding-top:16px; 
}

.log-img{
    padding:  16px;
    width: 14px;
    height: 14px;
    float: right;
}
.log-title{
    display: inline-block;
    width: 110px;
    line-height: 34px;
    font-size: 14px;
    text-align: center;
}


.log-input{
    width: 342px;
}
</style>
