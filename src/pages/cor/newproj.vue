<template>
    <Navbar style="background-color: black;" />
    <div class="business-project">


        <div class="container">
            <h1>创建项目</h1>
            <p class="subtitle">Create a project</p>

            <!-- 项目信息表单 -->
            <el-form :model="projectForm" :rules="formRules" ref="projectFormRef" label-width="120px"
                class="project-form">
                <el-form-item label="1.企业选择：" prop="title">
                    <el-input v-model="projectForm.title" placeholder="请输入企业名称" />
                </el-form-item>

                <el-form-item label="2.项目名称：" prop="name">
                    <el-input v-model="projectForm.name" placeholder="请输入项目名称" />
                </el-form-item>

                <el-form-item label="3.融资需求：" prop="funding">
                    <el-input v-model="projectForm.funding" placeholder="请输入融资需求（万元）" />
                </el-form-item>

                <el-form-item label="4.融资目的：" prop="purpose">
                    <el-input v-model="projectForm.purpose" placeholder="请输入融资目的" type="textarea" :rows="2" />
                </el-form-item>

                <el-form-item label="5.项目聚焦：" prop="focues">
                    <el-select label="5.项目聚焦：" v-model="distributionMethod" placeholder="聚焦阶段">
                        <el-option label="需求" value="all"></el-option>
                        <el-option label="解决方案" value="automatic"></el-option>
                        <el-option label="商业模式" value="manual"></el-option>
                        <el-option label="壁垒" value="bilei"></el-option>
                    </el-select>
                </el-form-item>




            </el-form>


            <!-- 底部操作按钮 -->
            <div class="action-buttons">
                <el-button type="primary" size="large" @click="saveProject">提交项目</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage, ElUpload } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import Navbar from '@/components/navbar.vue'

// 表单相关
const projectFormRef = ref(null)
const projectForm = reactive({
    name: '',
    funding: '',
    purpose: '',
    title: ''
})
const saveProject = () => {
    ElMessage.success('项目上传成功')
}

const  distributionMethod = ref("")

</script>

<style scoped>
.business-project {
    background-color: #f5f7fa;
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

h1 {
    font-size: 28px;
    color: #303133;
    margin-bottom: 8px;
}

.subtitle {
    color: #909399;
    margin-bottom: 30px;
}

.project-form {
    margin-bottom: 40px;
}

.action-buttons {
    text-align: center;
    margin-top: 40px;
}

.el-button--large {
    padding: 12px 36px;
    font-size: 16px;
}

.select-wrapper {
  color: #888;
  display: flex;
  align-items: center;
  margin-left: 28px;
  width: 97%;
  font-size: 14px;
}

.label-table {
  color: rgb(96,98,102);
  margin-right: 12px;
}

</style>