<template>
    <div id="warehouse" >
		<div class="wrap">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>小横琴物资库1号</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="routerGO('/resource')"/>	
                
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
                    <button class="warehouse-button warehouse-right"  @click="routerGO('/resource/list')">盘点记录</button>
                    <button  class="warehouse-button warehouse-right" @click="routerGO('/resource/check')">检查记录</button>
                    <button  class="warehouse-button warehouse-right" @click="routerGO('/resource/warehouse')">物资清单</button>

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
    <!--修改  -->
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
            <div class="editForm-button-div">            
                <button class="editForm-button" @click="editFormVisible = false" >取消</button> <button class="editForm-button" @click="editSubmit()" >保存</button>
            </div>
            </el-form>
        </div>
        <!--添加  -->
        <div v-show="addFormVisible" class="addForm-div">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>小横琴物资库1号</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="addFormVisible = false"/>	               
            </div>	
            <el-form label-position="left" label-width="80px" :model="addForm" class="editForm-form">
            <el-form-item label="ID" class="editForm-item">
                <el-input v-model="addForm.id"></el-input>
            </el-form-item>
            <el-form-item label="名称" class="editForm-item">
                <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="类型" class="editForm-item">
                <el-select v-model="addForm.type" placeholder="请选择类型">
                    <el-option label="生存" value="shanghai"></el-option>
                    <el-option label="休息" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="品牌" class="editForm-item">
                <el-input v-model="addForm.brand"></el-input>
            </el-form-item>
            <el-form-item label="型号" class="editForm-item">
                <el-input v-model="addForm.size"></el-input>
            </el-form-item>
            <el-form-item label="购买时间" class="editForm-item">
                      <el-date-picker type="date" placeholder="选择日期" v-model="addForm.buyTime" style="width: 100%;" ></el-date-picker>
            </el-form-item>
            <el-form-item label="现有库存" class="editForm-item">
                <el-input v-model="addForm.sum"></el-input>
            </el-form-item>
            <el-form-item label="警戒库存" class="editForm-item">
                <el-input v-model="addForm.limit"></el-input>
            </el-form-item>
            <el-form-item label="最后使用" class="editForm-item">
                      <el-date-picker type="date" placeholder="选择日期" v-model="addForm.last" style="width: 100%;" ></el-date-picker>
            </el-form-item>
            <el-form-item label="检查时间" class="editForm-item">
                      <el-date-picker type="date" placeholder="选择日期" v-model="addForm.check" style="width: 100%;" ></el-date-picker>
            </el-form-item>
            <el-form-item label="状态" class="editForm-item">
                <el-select v-model="addForm.state" placeholder="请选择状态">
                    <el-option label="良好" value="shanghai"></el-option>
                    <el-option label="一般" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <div class="editForm-button-div">
                <button class="editForm-button" @click="addFormVisible = false" >取消</button> <button class="editForm-button" @click="editSubmit()" >保存</button>
            </div>
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
                addFormVisible: false,
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
                },
                addForm:{},
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
			getwarehouse() {
				
            },
			//显示编辑界面
			handleEdit (index, row) {
                this.addFormVisible = false;
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd () {
                this.editFormVisible = false;
				this.addFormVisible = true;
				this.addForm = {
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
	border-bottom: 1px solid #E3E6E5;
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
    height: 660px;
    background: #FFFFFF;
    border: 1px solid #D7D9D8;
    box-sizing: border-box;
    padding: 0 16px;
}
.addForm-div{
    position: fixed;
    top:64px;
    left:352px;
    width: 240px;
    height: 660px;
    background: #FFFFFF;
    border: 1px solid #D7D9D8;
    box-sizing: border-box;
    padding: 0 16px;
}
.editForm-form{
    display: inline-block;
    height: 572px;
}
.editForm-item{
    display: inline-block;
    /* height: 36px ！important; */
    margin-bottom: 10px ;
}
.editForm-button-div{
    position: absolute;
    bottom: 0;
    width: 240px;
    height: 44px;
    margin-left: -16px;
}
.editForm-button{
    height: 44px;
    font-size: 14px;
    color: #37403F;
    letter-spacing: 0;
    line-height: 14px;
    border: 1px solid #D9D9D9;
    box-sizing: border-box;
    display: inline-block;
    width: 116px;;
    background-color: #FFFFFF;
}
.editForm-button:hover{
    color: #5EBF1D;
    border: 1px solid #5EBF1D;

}

</style>
