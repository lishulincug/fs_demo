<template>
    <div id="grade" >
		<div class="wrap">
            <div class="bt">
                <img src="../../assets/photo/detail-on@2x.png">
                <span class="title">  <strong>森林资源小班</strong></span>
                <img class="tableClose" src="../../assets/photo/close@2x.png" @click="save(1)"/>	
                
            </div>	
            
        <section >
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item>
                        <el-input  class="grade-input" v-model="filters.name" placeholder="输入查询内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="grade-button" :click="getgrade">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="grade-button"  @click="handleAdd">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!--列表-->
            <el-table :data="grades" highlight-current-row stripe v-loading="listLoading"  style="width: 100%;"height="200" border>            
                <el-table-column prop="team" label="小班名" width="100" sortable>
                </el-table-column>
                <el-table-column prop="soilType" label="地类" min-width="150" sortable>
                </el-table-column>
                <el-table-column prop="landfrom" label="地形" width="180" sortable>
                </el-table-column>
                <el-table-column prop="origin" label="起源" width="100" sortable>
                </el-table-column>
                <el-table-column prop="treeType" label="林种" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="avgAge" label="平均年龄" min-width="120" sortable>
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
            <el-form-item label="小班名" class="editForm-item">
                <el-input v-model="editForm.team"></el-input>
            </el-form-item>
            <el-form-item label="地类" class="editForm-item">
                <el-input v-model="editForm.soilType"></el-input>
            </el-form-item>
            <el-form-item label="地形" class="editForm-item">
                <el-input v-model="editForm.landfrom"></el-input>
            </el-form-item>
            <el-form-item label="起源" class="editForm-item">
                <el-input v-model="editForm.origin"></el-input>
            </el-form-item>
            <el-form-item label="林种" class="editForm-item">
                <el-input v-model="editForm.treeType"></el-input>
            </el-form-item>
            <el-form-item label="平均年龄" class="editForm-item">
                <el-input v-model="editForm.avgAge"></el-input>
            </el-form-item>           
                <button class="editForm-button" @click="editFormVisible = false" >取消</button> <button class="editForm-button" @click="save(2)" >保存</button>
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
            <el-form-item label="小班名" class="editForm-item">
                <el-input v-model="addForm.team"></el-input>
            </el-form-item>
            <el-form-item label="地类" class="editForm-item">
                <el-input v-model="addForm.soilType"></el-input>
            </el-form-item>
            <el-form-item label="地形" class="editForm-item">
                <el-input v-model="addForm.landfrom"></el-input>
            </el-form-item>
            <el-form-item label="起源" class="editForm-item">
                <el-input v-model="addForm.origin"></el-input>
            </el-form-item>
            <el-form-item label="林种" class="editForm-item">
                <el-input v-model="addForm.treeType"></el-input>
            </el-form-item>
            <el-form-item label="平均年龄" class="editForm-item">
                <el-input v-model="addForm.avgAge"></el-input>
            </el-form-item>           
                <button class="editForm-button" @click="addFormVisible = false" >取消</button> <button class="editForm-button" @click="save(2)" >保存</button>
            </el-form>
        </div>        
    </div>
</template>

<script>
	export default {
        name: 'grade',
		data() {
			return {
                editFormTitle:'',
                value:"",
				filters: {
					name: ''
				},
				grades: [
                    {team:"1班",soilType:"林地",landfrom:"盆地",origin:"广州",treeType:"针叶林",avgAge:"5" },
                    {team:"2班",soilType:"林地",landfrom:"高地",origin:"广州",treeType:"针叶林",avgAge:"5" },
                    {team:"3班",soilType:"林地",landfrom:"高原",origin:"广州",treeType:"针叶林",avgAge:"5" },
                    {team:"1班",soilType:"林地",landfrom:"盆地",origin:"广州",treeType:"针叶林",avgAge:"5" },
                    {team:"1班",soilType:"林地",landfrom:"盆地",origin:"广州",treeType:"针叶林",avgAge:"5" },
                    {team:"1班",soilType:"林地",landfrom:"盆地",origin:"广州",treeType:"针叶林",avgAge:"5" },
                ],
				total: 0,
				page: 1,
                addFormVisible: false,        
                listLoading: false,
                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                addForm: {},
				//编辑界面数据
                editForm: {
                        team:'',
                        soilType: '',
                        landfrom: '',
                        origin: '',
                        treeType: '',
                        avgAge:'',
                },

		    }
		},
		methods: {
            //获取数据
			getgrade() {
				
            },
			//显示编辑界面
			handleEdit (index, row) {
                this.editFormTitle='编辑资源小班信息';
                this.addFormVisible = false;
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd () {
                this.editFormTitle='添加资源小班';
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
          this.addFormVisible = false; 
       },

    },		
	mounted() {
		
	}
}
</script>

<style scoped>
#grade{
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
.grade-button{
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
    height: 382px;
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
    height: 386px;
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