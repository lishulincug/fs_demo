<template>
    <div id="forestRespGrid" >
		<div class="wrap">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>森防责任网</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="save(1)"/>	
                
            </div>	
            
        <section >
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item>
                        <el-input  class="forestRespGrid-input" v-model="filters.name" placeholder="输入查询内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="forestRespGrid-button" :click="getforestRespGrid">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="forestRespGrid-button"  @click="handleAdd">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!--列表-->
            <el-table :data="forestRespGrids" highlight-current-row stripe v-loading="listLoading"  style="width: 100%;"height="200" border>            
                <el-table-column prop="id" label="网格ID" width="150" sortable>
                </el-table-column>
                <el-table-column prop="name" label="责任人" min-width="150" sortable>
                </el-table-column>
                <el-table-column prop="unit" label="所属单位" width="180" sortable>
                </el-table-column>
                <el-table-column prop="service" label="服务" width="100" sortable>
                </el-table-column>
                <el-table-column prop="phone" label="联系方式" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="address" label="位置" min-width="120" sortable>
                </el-table-column>
                <el-table-column prop="scope" label="辖区" min-width="120" sortable>
                </el-table-column>
                <el-table-column prop="mark" label="备注" min-width="120" sortable>
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
                <span class="title">  <strong>{{editFormTitle}}</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="editFormVisible = false"/>	               
            </div>	
            <el-form label-position="left" label-width="80px" :model="editForm" class="editForm-form">
            <el-form-item label="网格ID" class="editForm-item">
                <el-input v-model="editForm.id"></el-input>
            </el-form-item>
            <el-form-item label="责任人" class="editForm-item">
                <el-input v-model="editForm.name"></el-input>
            </el-form-item>
            <el-form-item label="所属单位" class="editForm-item">
                <el-input v-model="editForm.unit"></el-input>
            </el-form-item>
            <el-form-item label="服务" class="editForm-item">
                <el-input v-model="editForm.service"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" class="editForm-item">
                <el-input v-model="editForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="住址" class="editForm-item">
                <el-input v-model="editForm.address"></el-input>
            </el-form-item>
            <el-form-item label="辖区" class="editForm-item">
                <el-input v-model="editForm.scope"></el-input>
            </el-form-item>
            <el-form-item label="备注" class="editForm-item">
                <el-input v-model="editForm.mark"></el-input>
            </el-form-item>
            <div class="editForm-button-div">             
                <button class="editForm-button" @click="editFormVisible = false" >取消</button> <button class="editForm-button" @click="save(2)" >保存</button>
            </div>
            </el-form>
        </div>
        <!--添加  -->
        <div v-show="addFormVisible" class="addForm-div">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>{{editFormTitle}}</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="addFormVisible = false"/>	               
            </div>	
            <el-form label-position="left" label-width="80px" :model="addForm" class="editForm-form">
            <el-form-item label="网格ID" class="editForm-item">
                <el-input v-model="addForm.id"></el-input>
            </el-form-item>
            <el-form-item label="责任人" class="editForm-item">
                <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="所属单位" class="editForm-item">
                <el-input v-model="addForm.unit"></el-input>
            </el-form-item>
            <el-form-item label="服务" class="editForm-item">
                <el-input v-model="addForm.service"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" class="editForm-item">
                <el-input v-model="addForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="住址" class="editForm-item">
                <el-input v-model="addForm.address"></el-input>
            </el-form-item>
            <el-form-item label="辖区" class="editForm-item">
                <el-input v-model="addForm.scope"></el-input>
            </el-form-item>
            <el-form-item label="备注" class="editForm-item">
                <el-input v-model="addForm.mark"></el-input>
            </el-form-item>
            <div class="editForm-button-div">             
                <button class="editForm-button" @click="addFormVisible = false" >取消</button> <button class="editForm-button" @click="save(2)" >保存</button>
            </div>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
        name: 'forestRespGrid',
		data() {
			return {
                editFormTitle:'',
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
				forestRespGrids: [
                    {name:"张三",id:"123456",unit:"广州森防办",service:"",phone:"15766659999",
                    address:"广州海珠",scope:"海珠区",mark:"23" },
                    {name:"李四",id:"123456",unit:"广州森防办",service:"",phone:"15766659999",
                    address:"广州海珠",scope:"天河区",mark:"23" },
                    {name:"王五",id:"123456",unit:"广州森防办",service:"",phone:"15766659999",
                    address:"广州海珠",scope:"番禺区",mark:"23" },
                    {name:"曹六",id:"123456",unit:"广州森防办",service:"",phone:"15766659999",
                    address:"广州海珠",scope:"番禺区",mark:"23" },
                    {name:"陈二",id:"123456",unit:"广州森防办",service:"",phone:"15766659999",
                    address:"广州海珠",scope:"番禺区",mark:"23" },
                    {name:"黄琦",id:"123456",unit:"广州森防办",service:"",phone:"15766659999",
                    address:"广州海珠",scope:"番禺区",mark:"23" },
                ],
				total: 0,
				page: 1,
                addFormVisible: false,        
                listLoading: false,
                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                addForm:{},
				//编辑界面数据
                editForm: {
                        name:'',
                        id: '',
                        unit: '',
                        service: '',
                        phone: '',
                        address:'',
                        scope:'',
                        mrak:'',
                },

		    }
		},
		methods: {
            //获取数据
			getforestRespGrid() {
				
            },
			//显示编辑界面
			handleEdit (index, row) {
                this.editFormTitle='修改森防网格信息';
                this.addFormVisible = false;
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd () {
                this.editFormTitle='添加网格';
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
        save(index){
          this.editFormVisible = false; 
       },

    },		
	mounted() {
		
	}
}
</script>

<style scoped>
#forestRespGrid{
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
.forestRespGrid-button{
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
    height: 520px;
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
    height: 520px;
    background: #FFFFFF;
    border: 1px solid #D7D9D8;
    box-sizing: border-box;
    padding: 0 16px;
}
.editForm-form{
    display: inline-block;
    height: 468px;
    overflow: hidden
}
.editForm-item{
    display: inline-block;
    /* height: 36px ！important; */
    margin-bottom: 10px ;
}
.editForm-button-div{
    position: absolute;
    bottom: 0px;
    margin-left: -16px;
}
.editForm-button{
    height: 44px;
    font-size: 14px;
    color: #37403F;
    letter-spacing: 0;
    line-height: 14px;
    border: 1px solid #D9D9D9;
    width: 116px;;
    box-sizing: border-box;
    background-color: #FFFFFF;
}
.editForm-button:hover{
    color: #5EBF1D;
    border: 1px solid #5EBF1D;

}

</style>