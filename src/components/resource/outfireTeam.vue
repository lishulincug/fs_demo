<template>
    <div id="outfireTeam" >
		<div class="wrap">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>救火队成员信息</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="save(1)"/>	
                
            </div>	
            
        <section >
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item>
                        <el-input  class="outfireTeam-input" v-model="filters.name" placeholder="输入查询内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="outfireTeam-button" :click="getoutfireTeam">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="outfireTeam-button"  @click="handleAdd">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!--列表-->
            <el-table :data="outfireTeams" highlight-current-row stripe v-loading="listLoading"  style="width: 100%;"height="200" border>            
                <el-table-column prop="name" label="姓名" min-width="100" sortable>
                </el-table-column>
                <el-table-column prop="age" label="年龄" min-width="100" sortable>
                </el-table-column>
                <el-table-column prop="phone" label="联系方式" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="address" label="地址" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="team" label="所属队伍" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="state" label="状态" min-width="120" sortable>
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
    <!--x修改  -->
        <div v-show="editFormVisible" class="editForm-div">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>{{editFormTitle}}</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="editFormVisible = false"/>	               
            </div>	
            <el-form label-position="left" label-width="80px" :model="editForm" class="editForm-form">
            <el-form-item label="姓名" class="editForm-item">
                <el-input v-model="editForm.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄" class="editForm-item">
                <el-input v-model="editForm.age"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" class="editForm-item">
                <el-input v-model="editForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="地址" class="editForm-item">
                <el-input v-model="editForm.address"></el-input>
            </el-form-item>
            <el-form-item label="所属队伍" class="editForm-item">
                <el-input v-model="editForm.team"></el-input>
            </el-form-item>
            <el-form-item label="状态" class="editForm-item">
                <el-input v-model="editForm.state"></el-input>
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
            <el-form-item label="姓名" class="editForm-item">
                <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄" class="editForm-item">
                <el-input v-model="addForm.age"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" class="editForm-item">
                <el-input v-model="addForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="地址" class="editForm-item">
                <el-input v-model="addForm.address"></el-input>
            </el-form-item>
            <el-form-item label="所属队伍" class="editForm-item">
                <el-input v-model="addForm.team"></el-input>
            </el-form-item>
            <el-form-item label="状态" class="editForm-item">
                <el-input v-model="addForm.state"></el-input>
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
        name: 'outfireTeam',
		data() {
			return {
                editFormTitle:'',
                value:"",
				filters: {
					name: ''
				},
				outfireTeams: [
                    {team:"1班",name:"张三",phone:"157 2356 1245",address:"广州 海珠",age:"25",state:"休息" },
                    {team:"2班",name:"李三",phone:"157 2226 7245",address:"广州 海珠",age:"25",state:"正常工作" },
                    {team:"3班",name:"王三",phone:"157 2376 1745",address:"广州 海珠",age:"25",state:"休息" },
                    {team:"1班",name:"张三",phone:"157 2356 1245",address:"广州 海珠",age:"25",state:"正常工作" },
                    {team:"1班",name:"张三",phone:"157 2356 1245",address:"广州 海珠",age:"25",state:"休息" },
                    {team:"1班",name:"张三",phone:"157 2356 1245",address:"广州 海珠",age:"25",state:"正常工作" },
                ],
				total: 0,
				page: 1,
                addFormVisible: false,       
                listLoading: false,
                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                //编辑界面数据
                addForm: {},
                editForm: {
                        team:'',
                        name: '',
                        age: '',
                        phone: '',
                        address: '',
                        state:'',
                },

		    }
		},
		methods: {
            //获取数据
			getoutfireTeam() {
				
            },
			//显示编辑界面
			handleEdit (index, row) {
                this.editFormTitle='编辑救火队员信息';
                this.addFormVisible = false;
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd () {
                this.editFormTitle='添加救火队员信息';
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
#outfireTeam{
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
.outfireTeam-button{
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
    height: 420px;
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
    height: 420px;
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
.editForm-button-div{
    position: absolute;
    bottom: 0px;
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