<template>
    <div id="equipment" >
		<div class="wrap">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>气象仪设备信息</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="save(1)"/>	
                
            </div>	
            
        <section >
            <!--工具条-->
            <el-col :span="24" class="toolbar">
               <el-form :inline="true" :model="filters">
                    <el-form-item>
                        <el-input  class="equipment-input" v-model="filters.name" placeholder="输入查询内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="equipment-button" :click="getequipment">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="equipment-button"  @click="handleAdd">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!--列表-->
            <el-table :data="equipments" highlight-current-row stripe v-loading="listLoading"  style="width: 100%;"height="200" border>            
                <el-table-column prop="name" label="名称" width="100" sortable>
                </el-table-column>
                <el-table-column prop="address" label="地址" width="100" sortable>
                </el-table-column>
                <el-table-column prop="longitude" label="经度" width="100" sortable>
                </el-table-column>
                <el-table-column prop="laitude" label="纬度" width="100" sortable>
                </el-table-column>
                <el-table-column prop="user" label="负责人" min-width="150" sortable>
                </el-table-column>
                <el-table-column prop="phone" label="联系方式" min-width="120" sortable>
                </el-table-column>
                <el-table-column prop="des" label="描述" min-width="120" sortable>
                </el-table-column>
                <el-table-column prop="addTime" label="添加时间"min- width="180" sortable>
                </el-table-column>
                <el-table-column prop="editTime" label="修改时间" min-width="150" sortable>
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
                <span class="title">  <strong>气象仪设备信息</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="editFormVisible = false"/>	               
            </div>	
            <el-form label-position="left" label-width="80px" :model="editForm" class="editForm-form">
            <el-form-item label="名称" class="editForm-item">
                <el-input v-model="editForm.name"></el-input>
            </el-form-item>
            <el-form-item label="地址" class="editForm-item">
                <el-input v-model="editForm.address"></el-input>
            </el-form-item>
            <el-form-item label="经度" class="editForm-item">
                <el-input v-model="editForm.longitude"></el-input>
            </el-form-item>
            <el-form-item label="纬度" class="editForm-item">
                <el-input v-model="editForm.laitude"></el-input>
            </el-form-item>
            <el-form-item label="负责人" class="editForm-item">
                <el-input v-model="editForm.user"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" class="editForm-item">
                <el-input v-model="editForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="描述" class="editForm-item">
                <el-input v-model="editForm.des"></el-input>
            </el-form-item>
            <el-form-item label="添加时间" class="editForm-item">
                      <el-date-picker type="date" placeholder="选择日期" v-model="editForm.addTime" style="width: 100%;" ></el-date-picker>
            </el-form-item>
            <el-form-item label="修改时间" class="editForm-item">
                      <el-date-picker type="date" placeholder="选择日期" v-model="editForm.editTime" style="width: 100%;" ></el-date-picker>
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
        name: 'equipment',
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
				equipments: [
                    {id:"345543123",name:"气象仪1号",address:"广州 海珠",user:"张三",phone:'154 1234 7330',des:'xxxx',
                    longitude:"123.5",laitude:"23",editTime:"2017/6/20",state:"良好",addTime:'2015/12/12' },
                    {id:"345543123",name:"气象仪2号",tyaddresspe:"广州 天河",user:"李三",phone:'154 1234 7330',des:'xxxx',
                    longitude:"123.5",laitude:"23",editTime:"2017/6/20",state:"良好",addTime:'2015/12/12' },
                    {id:"345543123",name:"气象仪3号",address:"广州 越秀",user:"王三",phone:'154 1234 7330',des:'xxxx',
                    longitude:"123.5",laitude:"23",editTime:"2017/6/20",state:"良好",addTime:'2015/12/12' ,addTime:'2015/12/12'},
                    {id:"345543123",name:"气象仪14号",address:"广州 海珠",user:"怡宝",phone:'154 1234 7330',des:'xxxx',
                    longitude:"123.5",laitude:"23",editTime:"2017/6/20",state:"良好",addTime:'2015/12/12' },
                    {id:"345543123",name:"气象仪1号",address:"广州 海珠",user:"怡宝",phone:'154 1234 7330',des:'xxxx',
                    longitude:"123.5",laitude:"23",editTime:"2017/6/20",state:"良好",addTime:'2015/12/12' },
                    {id:"345543123",name:"气象仪1号",address:"广州 海珠",user:"怡宝",phone:'154 1234 7330',des:'xxxx',
                    longitude:"123.5",laitude:"23",editTime:"2017/6/20",state:"良好",addTime:'2015/12/12' },
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
					address: '',
					phone: '',
					addTime: '',
                    longitude: '',
                    laitude:'',
                    des:'',
                    user:'',
                    state:'',
                    editTime:'',
				},

			}
		},
		methods: {
            //获取数据
			getequipment() {
				
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
#equipment{
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
.equipment-button{
    display: inline-block;
    width: 82px;
    height: 36px;
    color: #FFFFFF;
    background-color: #5EBF1D;
    border: 1px solid #D7D9D8;
}
/* ---修改框 添加框  */
.editForm-div{
    position: fixed;
    top:64px;
    left:352px;
    width: 240px;
    height: 570px;
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
