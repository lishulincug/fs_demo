<template>
    <div id="OBtower" >
		<div class="wrap">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>瞭望塔信息管理</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="save(1)"/>	
                
            </div>	
            
        <section >
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item>
                        <el-input  class="OBtower-input" v-model="filters.name" placeholder="输入查询内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="OBtower-button" :click="getOBtower">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="OBtower-button"  @click="handleAdd">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!--列表-->
            <el-table :data="OBtowers" highlight-current-row stripe v-loading="listLoading"  style="width: 100%;"height="200" border>            
                <el-table-column prop="name" label="名称" min-width="150" sortable>
                </el-table-column>
                <el-table-column prop="user" label="责任人" min-width="150" sortable>
                </el-table-column>
                <el-table-column prop="phone" label="联系方式" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="address" label="位置" min-width="120" sortable>
                </el-table-column>
                <el-table-column prop="longitude" label="经度" min-width="120" sortable>
                </el-table-column>
                <el-table-column prop="laitude" label="经度" min-width="120" sortable>
                </el-table-column>
                <el-table-column prop="mark" label="备注" min-width="150" sortable>
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
                <span class="title">  <strong>{{editFormTitle}}</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="editFormVisible = false"/>	               
            </div>	
            <el-form label-position="left" label-width="80px" :model="editForm" class="editForm-form">
            <el-form-item label="名称" class="editForm-item">
                <el-input v-model="editForm.name"></el-input>
            </el-form-item>
            <el-form-item label="责任人" class="editForm-item">
                <el-input v-model="editForm.user"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" class="editForm-item">
                <el-input v-model="editForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="位置" class="editForm-item">
                <el-input v-model="editForm.address"></el-input>
            </el-form-item>
            <el-form-item label="经度" class="editForm-item">
                <el-input v-model="editForm.longitude"></el-input>
            </el-form-item>
            <el-form-item label="纬度" class="editForm-item">
                <el-input v-model="editForm.laitude"></el-input>
            </el-form-item>            
            <el-form-item label="备注" class="editForm-item">
                <el-input v-model="editForm.mark"></el-input>
            </el-form-item>  
                <button class="editForm-button" @click="editFormVisible = false" >取消</button> <button class="editForm-button" @click="save(2)" >保存</button>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
        name: 'OBtower',
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
				OBtowers: [
                    {name:"瞭望塔1",mark:" ",user:"张三",phone:"15766659999",
                    address:"广州海珠",longitude:"123.5",laitude:"23" },
                    {name:"瞭望塔2",mark:" ",user:"张三",phone:"15766659999",
                    address:"广州海珠",longitude:"123.5",laitude:"23" },
                    {name:"瞭望塔3",mark:" ",user:"张三",phone:"15766659999",
                    address:"广州海珠",longitude:"123.5",laitude:"23" },
                    {name:"瞭望塔4",mark:" ",user:"张三",phone:"15766659999",
                    address:"广州海珠",longitude:"123.5",laitude:"23" },
                    {name:"瞭望塔",mark:" ",user:"张三",phone:"15766659999",
                    address:"广州海珠",longitude:"123.5",laitude:"23" },
                    {name:"瞭望塔",mark:" ",user:"张三",phone:"15766659999",
                    address:"广州海珠",longitude:"123.5",laitude:"23" },
                ],
				total: 0,
				page: 1,
                        
                listLoading: false,
                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
				//编辑界面数据
                editForm: {
                        name:'',
                        mark: '',
                        user: '',
                        phone: '',
                        address:'',
                        laitude:'',
                        longitude:'',
                },

		    }
		},
		methods: {
            //获取数据
			getOBtower() {
				
            },
			//显示编辑界面
			handleEdit (index, row) {
                this.editFormTitle='编辑瞭望塔信息';
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd () {
                this.editFormTitle='添加瞭望塔信息';
				this.editFormVisible = true;
                this.editForm={
                        name:'',
                        mark: '',
                        user: '',
                        phone: '',
                        address:'',
                        laitude:'',
                        longitude:'',
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
#OBtower{
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
.OBtower-button{
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
    height: 434px;
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