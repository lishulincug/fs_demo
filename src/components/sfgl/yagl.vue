<template>
    <div id="fhfa" >
		<div class="wrap">
		<div class="bt">
     		 <span>  <strong class="title">防火方案</strong></span>
			  <img  src="../../assets/photo/close@2x.png" @click="tableClose"/>	
			  <img  src="../../assets/photo/window zoom1@2x.png" />	
			
		</div>	
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="输入查询内容"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getFhfa">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">添加</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="fhfas" highlight-current-row stripe v-loading="listLoading"  style="width: 100%;"height="250" border>
			<el-table-column type="id" label="id"width="60">
			</el-table-column>
			<el-table-column prop="name" label="名称" width="120" sortable>
			</el-table-column>
			<el-table-column prop="scope" label="预防范围" width="180" sortable>
			</el-table-column>
			<el-table-column prop="preventRank" label="预防等级" width="120" sortable>
			</el-table-column>
			<el-table-column prop="respondRank" label="响应等级" width="120" sortable>
			</el-table-column>
			<el-table-column prop="department" label="预防解析部门" min-width="180" sortable>
			</el-table-column>
            </el-table-column>
			<el-table-column prop="creatdAT" label="发布时间" min-width="180" sortable>
			</el-table-column>
            </el-table-column>
			<el-table-column prop="effectiveTime" label="实施时间" min-width="180" sortable>
			</el-table-column>
            </el-table-column>
			<el-table-column prop="recorder" label="记录人" min-width="180" sortable>
			</el-table-column>
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
		<!--添加界面-->
		 <el-dialog title="添加" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="预防范围" prop="scope">
					<el-input v-model="addForm.scope" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="预防等级" prop="preventRank">
					<el-select v-model="addForm.preventRank" clearable placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="响应等级" prop="respondRank">
					<el-select v-model="addForm.respondRank" clearable placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="解析部门" prop="department">
					<el-input v-model="addForm.department" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="实施日期">
					<el-date-picker type="date" placeholder="选择日期" v-model="addForm.effectiveTime"></el-date-picker>
				</el-form-item>
                <el-form-item label="记录人">
					<el-input v-model="addForm.recorder" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="备注">
					<el-input v-model="addForm.mark" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog> 
		<!--编辑界面-->
		 <el-dialog title="编辑" v-model="editFormVisible" size="small" >
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="预防范围" prop="scope">
					<el-input v-model="editForm.scope"></el-input>
				</el-form-item>
				<el-form-item label="预防等级" prop="preventRank">
					<el-select v-model="editForm.preventRank" clearable placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="响应等级" prop="respondRank">
					<el-select v-model="editForm.respondRank" clearable placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="解析部门" prop="department">
					<el-input v-model="editForm.department" ></el-input>
				</el-form-item>
				<el-form-item label="实施日期">
					<el-date-picker type="date" placeholder="选择日期" v-model="editForm.effectiveTime"></el-date-picker>
				</el-form-item>
                <el-form-item label="记录人">
					<el-input v-model="editForm.recorder" ></el-input>
				</el-form-item>
                <el-form-item label="备注">
					<el-input v-model="editForm.mark" ></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog> 
	</section>
	</div>
    </div>
</template>

<script>
	export default {
        name: 'Yagl',
		data() {
			return {


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
				fhfas: [
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"121-12-2",
                    department:"buzhidao",effectiveTime:"12-12-12",recorder:"lisi",mark:"asd" },
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"121-12-2",
                    department:"buzhidao",effectiveTime:"12-12-12",recorder:"lisi",mark:"asd" },
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"121-12-2",
                    department:"buzhidao",effectiveTime:"12-12-12",recorder:"lisi",mark:"asd" },
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"121-12-2",
                    department:"buzhidao",effectiveTime:"12-12-12",recorder:"lisi",mark:"asd" },
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"121-12-2",
                    department:"buzhidao",effectiveTime:"12-12-12",recorder:"lisi",mark:"asd" },
                    {name:"qwe",scope:"广州",preventRank:"1级",respondRank:"1级",creatdAT:"121-12-2",
                    department:"buzhidao",effectiveTime:"12-12-12",recorder:"lisi",mark:"asd" },
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
                    name: '',
                    scope:'',
					preventRank: '',
					respondRank: '',
					department: '',
                    effectiveTime: '',
                    recorder:'',
                    mark:'',
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
                    name: '',
                    scope:'',
					preventRank: '',
					respondRank: '',
					department: '',
                    effectiveTime: '',
                    recorder:'',
                    mark:'',
				}
			}
		},
		methods: {
			tableClose(){
				this.$router.push('/')
			},
            //获取数据
			getFhfa() {
				
            },
            //删除
			handleDel (index, row) {
				// this.$confirm('确认删除该记录吗?', '提示', {
				// 	type: 'warning'
				// }).then(() => {
				// 	this.listLoading = true;
				// 	//NProgress.start();
				// 	let para = { id: row.id };
				// }).catch(() => {
				// });
			},
			//显示编辑界面
			handleEdit (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
				console.log(editForm);
			},
			//显示新增界面
			handleAdd () {
				this.addFormVisible = true;
				this.addForm = {
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
				// this.$refs.editForm.validate((valid) => {
				// 	if (valid) {
				// 		this.$confirm('确认提交吗？', '提示', {}).then(() => {
				// 			this.editLoading = true;
				// 			//NProgress.start();
				// 			let para = Object.assign({}, this.editForm);
				// 			para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
				// 			editUser(para).then((res) => {
				// 				this.editLoading = false;
				// 				//NProgress.done();
				// 				this.$message({
				// 					message: '提交成功',
				// 					type: 'success'
				// 				});
				// 				this.$refs['editForm'].resetFields();
				// 				this.editFormVisible = false;
				// 				this.getUsers();
				// 			});
				// 		});
				// 	}
				// });
			},
			//新增
			addSubmit () {
				// this.$refs.addForm.validate((valid) => {
				// 	if (valid) {
				// 		this.$confirm('确认提交吗？', '提示', {}).then(() => {				
				// 		});
				// 	}
				// });
			},
		}
		// ,
		// mounted() {
		
		// }
	}
</script>

<style scoped>
#fhfa{
    position: absolute;
    bottom: 0px;
    left: 96px;
	background: #FFFFFF;
	border: 1px solid #D9D9D9;
}
.wrap{
	padding: 0 10px;
}
span{
	font-size: 14px;
	color: #666666;
	line-height: 48px;
	
}
.bt{
	height: 48%;
	border-bottom: 1px solid;
	margin-bottom: 10px;
}
img{
	display: inline-block;
	width: 16px;
	height: 16px;
	float: right;
	padding-top: 14px;
	padding-right: 14px;
}
</style>