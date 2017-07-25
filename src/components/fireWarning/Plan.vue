<template>
    <div id="plan" >
		<div class="wrap">
            <div class="bt">
                <span class="title">  <strong>防火应急预案</strong></span>              
            </div>	
        <section>
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="filters">
                    <el-form-item>
                        <el-input  class="plan-input"v-model="filters.name" placeholder="输入查询内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="getPlan">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleAdd">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <!--列表-->
            <el-table :data="plans" highlight-current-row stripe v-loading="listLoading"  style="width: 100%;"height="200" border>
                <el-table-column prop="name" label="名称" width="120" sortable>
                </el-table-column>
                <el-table-column prop="scope" label="预防范围" width="180" sortable>
                </el-table-column>
                <el-table-column prop="preventRank" label="预防等级" width="120" sortable>
                </el-table-column>
                <el-table-column prop="respondRank" label="响应等级" width="120" sortable>
                </el-table-column>
                <el-table-column prop="department" label="预防解析部门" width="180" sortable>
                </el-table-column>
                <el-table-column prop="creatdAT" label="发布时间" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="effectiveTime" label="实施时间" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="recorder" label="记录人" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="mark" label="备注" min-width="180" sortable>
                </el-table-column>
                <el-table-column label="操作" width="150">
                        <template scope="scope">
                            <el-button size="small" @click="handleEdit(scope.$id, scope.row)">编辑</el-button>
                            <el-button type="danger" size="small" @click="handleDel(scope.$id, scope.row)">删除</el-button>
                        </template>
                </el-table-column>
            </el-table>
            <!--添加修改页面  -->
            <div v-show="editFormVisible" class="editForm-div">
                <div class="bt">
                    <img src="../../assets/photo/detail-on@2x.png">
                    <span class="title"><strong>{{editFormTitle}}</strong></span>
                    <img class="tableClose" src="../../assets/photo/close@2x.png" @click="editFormVisible = false"/>	               
                </div>	
                <el-form :model="editForm" label-position="left"  label-width="80px"  class="editForm-form">
                    <el-form-item label="姓名" prop="name" class="editForm-item" >
                        <el-input v-model="editForm.name" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="预防范围" prop="scope" class="editForm-item">
                        <el-input v-model="editForm.scope" placeholder="范围"></el-input>
                    </el-form-item>
                    <el-form-item label="预防等级" prop="preventRank" class="editForm-item">
                        <el-select v-model="editForm.preventRank" clearable placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="响应等级" prop="respondRank" class="editForm-item">
                        <el-select v-model="editForm.respondRank" clearable placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="解析部门" prop="department" class="editForm-item">
                        <el-input v-model="editForm.department"  placeholder="部门"></el-input>
                    </el-form-item>
                    <el-form-item label="发布时间" class="editForm-item">
                        <el-date-picker type="date" placeholder="选择日期" v-model="editForm.effectiveTime"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="实施时间" class="editForm-item">
                        <el-date-picker type="date" placeholder="选择日期" v-model="editForm.effectiveTime"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="记录时间" class="editForm-item">
                        <el-date-picker type="date" placeholder="选择日期" v-model="editForm.effectiveTime"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="editForm.mark"> </el-input>
                    </el-form-item>
                    <el-form-item label="记录人" class="editForm-item">
                        <el-input v-model="editForm.recorder"  placeholder="记录人"></el-input>
                    </el-form-item>
                    <button class="editForm-button editForm-button-left" @click="editFormVisible = false" >取消</button> <button class="editForm-button editForm-button-left" @click="save(2)" >保存</button>                
                </el-form>
            </div>	    
        </section>
	</div>
    </div>
</template>

<script>
	export default {
        name: 'plan',
		data() {
			return {

                editFormTitle:'',
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
				plans: [
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"1211-12-21",
                    department:"平顶山居委会",effectiveTime:"1112-12-12",recorder:"lisi",mark:"asd" },
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"1241-12-2",
                    department:"平顶山居委会",effectiveTime:"1112-12-12",recorder:"lisi",mark:"asd" },
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"1241-12-2",
                    department:"平顶山居委会",effectiveTime:"1112-12-12",recorder:"lisi",mark:"asd" },
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"1241-12-2",
                    department:"平顶山居委会",effectiveTime:"1112-12-12",recorder:"lisi",mark:"asd" },
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"1241-12-2",
                    department:"平顶山居委会",effectiveTime:"1112-12-12",recorder:"lisi",mark:"asd" },
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"1214-12-2",
                    department:"平顶山居委会",effectiveTime:"1112-12-12",recorder:"lisi",mark:"asd" },
                ],
				total: 0,
				page: 1,
                listLoading: false,
                
                editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				//编辑界面数据
				editForm: {
                    name: '',
                    scope:'',
					preventRank: '',
					respondRank: '',
					department: '',
                    effectiveTime: '',
                    recorder:'',
                    mark:'',
				},
			}
		},
		methods: {
            //获取数据
			getPlan() {
				
            },
            //删除
			handleDel (index, row) {

			},
			//显示编辑界面
			handleEdit (index, row) {
                this.editFormTitle='修改预案';
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd () {
                this.editFormTitle='新增预案';
				this.editFormVisible = true;
				this.editForm = {
                    name: '',
                    scope:'',
					preventRank: '',
					respondRank: '',
					department: '',
					effectiveTime: ''
				};
            },
            			//编辑
			editSubmit() {

			},
            setWidth() {
          var plan=document.getElementById("plan");
          var total = document.documentElement.clientWidth;
          plan.style.width=total-99+"px";
            }
        },
        mounted() {
        this.setWidth();
        }
}
</script>

<style scoped>
#plan{
    position: absolute;
    bottom: 0px;
    height: 336px;
    left: 96px;
	background: #FFFFFF;
	border: 1px solid #D9D9D9;
}
.wrap{
	padding: 0 10px;
}


/*-----------  */
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
/* ---修改框 添加框  */
.editForm-div{
    position: fixed;
    top:64px;
    left:112px;
    width: 300px;
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
    width: 134px;
    /* margin-left:-16px; */
    background-color: #FFFFFF;
}
.editForm-button-right{
    margin-left:0;
    margin-right:-16px;
}
.editForm-button:hover{
    color: #5EBF1D;
    border: 1px solid #5EBF1D;

}

</style>