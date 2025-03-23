<template>
    <Navbar class="custom-navbar" />
    <div class="business-onboarding">
        <div class="form-header">
            <h1>企业入驻</h1>
            <p class="subtitle">请填写企业基本信息完成入驻登记</p>
        </div>

        <el-form :model="form" :rules="rules" ref="formRef" label-width="180px" label-position="left"
            class="enhanced-form">
            <!-- 基础信息区块 -->
            <div class="form-section">
                <h2 class="section-title">基础信息</h2>

                <el-form-item label="企业团队背景：" prop="teamBackground">
                    <el-input v-model="form.teamBackground" type="textarea" :rows="4"
                        placeholder="请简要描述核心团队构成（包括创始人背景、核心成员履历等）" show-word-limit maxlength="500" />
                </el-form-item>

                <el-row :gutter="32">
                    <el-col :xs="24" :sm="12">
                        <el-form-item label="企业经营地域：" prop="businessArea">
                            <el-input v-model="form.businessArea" placeholder="请输入主要经营地区" />
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12">
                        <el-form-item label="企业所属行业：" prop="industry">
                            <el-select v-model="form.industry" placeholder="请选择行业分类" filterable>
                                <el-option v-for="item in industryOptions" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>

            <!-- 工商信息区块 -->
            <div class="form-section">
                <h2 class="section-title">工商信息</h2>

                <el-row :gutter="32">
                    <el-col :xs="24" :sm="12">
                        <el-form-item label="统一社会信用代码：" prop="creditCode">
                            <el-input v-model="form.creditCode" placeholder="请输入18位统一社会信用代码" />
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12">
                        <el-form-item label="法定代表人：" prop="legalRepresentative">
                            <el-input v-model="form.legalRepresentative" placeholder="请输入法定代表人姓名" />
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="32">
                    <el-col :xs="24" :sm="12">
                        <el-form-item label="注册资本（万元）：" prop="registeredCapital">
                            <el-input v-model="form.registeredCapital" placeholder="请输入注册资本金额">
                                <template #append>万元</template>
                            </el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12">
                        <el-form-item label="成立日期：" prop="establishmentDate">
                            <el-date-picker v-model="form.establishmentDate" type="date" placeholder="选择成立日期"
                                value-format="YYYY-MM-DD" style="width: 100%" />
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>

            <!-- 联系信息区块 -->
            <div class="form-section">
                <h2 class="section-title">联系信息</h2>

                <el-row :gutter="32">
                    <el-col :xs="24" :sm="12">
                        <el-form-item label="联系电话：" prop="phone">
                            <el-input v-model="form.phone" placeholder="请输入联系人手机号码" />
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12">
                        <el-form-item label="企业邮箱：" prop="email">
                            <el-input v-model="form.email" placeholder="请输入企业邮箱" />
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="32">
                    <el-col :xs="24" :sm="12">
                        <el-form-item label="企业官网：" prop="website">
                            <el-input v-model="form.website" placeholder="请输入企业官网地址">
                                <template #prepend>https://</template>
                            </el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12">
                        <el-form-item label="企业地址：" prop="address">
                            <el-input v-model="form.address" placeholder="请输入详细办公地址" />
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>

            <!-- 证件上传区块 -->
            <div class="form-section">
                <h2 class="section-title">资质文件上传</h2>
                <p class="section-tip">请上传以下证件扫描件（支持PDF/JPG/PNG格式，单文件最大10MB）</p>

                <el-row :gutter="24">
                    <el-col v-for="(upload, index) in uploadConfig" :key="index" :xs="24" :sm="12" :md="8" :lg="6">
                        <div class="upload-card">
                            <div class="upload-header">
                                <el-icon :size="24" class="upload-icon">
                                    <Document />
                                </el-icon>
                                <h3>{{ upload.title }}</h3>
                                <el-tag v-if="upload.optional" type="info" size="small">选填</el-tag>
                            </div>

                            <el-upload :action="uploadUrl" :limit="1" :file-list="form[upload.field]"
                                :on-change="(file, files) => handleUploadChange(files, upload.field)"
                                :on-remove="() => handleRemove(upload.field)">
                                <el-button type="primary" plain class="upload-button">
                                    <el-icon>
                                        <Upload />
                                    </el-icon>
                                    点击上传
                                </el-button>
                                <template #tip>
                                    <div class="upload-tip">{{ upload.tip }}</div>
                                </template>
                            </el-upload>

                            <div v-if="form[upload.field].length > 0" class="file-list">
                                已上传：{{ form[upload.field][0]?.name }}
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <!-- 操作按钮 -->
            <div class="form-actions">
                <el-button type="primary" size="large" @click="submitForm" :loading="submitting">
                    提交申请
                </el-button>
                <el-button size="large" @click="resetForm">
                    重置表单
                </el-button>
            </div>
        </el-form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { Document, Upload } from '@element-plus/icons-vue'
import Navbar from '@/components/navbar.vue'

// 表单引用
const formRef = ref(null)
const submitting = ref(false)

// 表单数据
const form = reactive({
    teamBackground: '',
    businessArea: '',
    industry: '',
    creditCode: '',
    phone: '',
    legalRepresentative: '',
    email: '',
    registeredCapital: '',
    website: '',
    establishmentDate: '',
    address: '',
    businessLicense: [],
    legalIdCard: [],
    taxRegistration: [],
    organizationCode: [],
    bankAccount: []
})

// 行业选项
const industryOptions = ref([
    { value: 'it', label: '信息技术' },
    { value: 'manufacturing', label: '制造业' },
    { value: 'finance', label: '金融服务业' },
    { value: 'retail', label: '零售贸易' },
    { value: 'logistics', label: '物流运输' },
    { value: 'healthcare', label: '医疗健康' },
    { value: 'education', label: '教育培训' },
    { value: 'other', label: '其他行业' }
])

// 上传配置
const uploadConfig = ref([
    {
        title: '营业执照',
        field: 'businessLicense',
        tip: '需在有效期内，彩色扫描件',
        optional: false
    },
    {
        title: '法人身份证明',
        field: 'legalIdCard',
        tip: '身份证正反面或护照扫描件',
        optional: false
    },
    {
        title: '税务登记证',
        field: 'taxRegistration',
        tip: '三证合一可不传',
        optional: true
    },
    {
        title: '组织机构代码证',
        field: 'organizationCode',
        tip: '三证合一可不传',
        optional: true
    },
    {
        title: '银行开户许可',
        field: 'bankAccount',
        tip: '基本户开户许可证扫描件',
        optional: false
    }
])

// 验证规则
const rules = reactive({
    teamBackground: [
        { required: true, message: '请输入团队背景信息', trigger: 'blur' },
        { min: 20, message: '至少输入20个字符', trigger: 'blur' }
    ],
    businessArea: [
        { required: true, message: '请输入经营地域', trigger: 'blur' }
    ],
    industry: [
        { required: true, message: '请选择所属行业', trigger: 'change' }
    ],
    creditCode: [
        { required: true, message: '请输入统一社会信用代码', trigger: 'blur' },
        { pattern: /^[0-9A-HJ-NPQRTUWXY]{18}$/, message: '信用代码格式不正确' }
    ],
    phone: [
        { required: true, message: '请输入联系电话', trigger: 'blur' },
    ],
    legalRepresentative: [
        { required: true, message: '请输入法定代表人', trigger: 'blur' }
    ],
    email: [
        { required: true, message: '请输入企业邮箱', trigger: 'blur' },
        { type: 'email', message: '邮箱格式不正确' }
    ],
    registeredCapital: [
        { required: true, message: '请输入注册资本', trigger: 'blur' },
        { pattern: /^\d+(\.\d{1,2})?$/, message: '请输入有效金额' }
    ],
    establishmentDate: [
        { required: true, message: '请选择成立日期', trigger: 'change' }
    ],
    address: [
        { required: true, message: '请输入企业地址', trigger: 'blur' }
    ]
})

// 处理文件上传
const handleUploadChange = (files, field) => {
    if (files.length > 0) {
        form[field] = [files[files.length - 1]]
        ElMessage.success(`${uploadConfig.value.find(u => u.field === field).title}上传成功`)
    }
}

// 删除文件
const handleRemove = (field) => {
    form[field] = []
}

// 提交表单
const submitForm = async () => {
    try {
        submitting.value = true
        await formRef.value.validate()

        // 实际提交逻辑
        ElMessage.success('表单验证通过，正在提交...')
        console.log('提交数据:', JSON.parse(JSON.stringify(form)))

    } catch (error) {
        ElMessage.warning('请完善表单信息')
    } finally {
        submitting.value = false
    }
}

// 重置表单
const resetForm = () => {
    formRef.value.resetFields()
    Object.keys(form).forEach(key => {
        if (Array.isArray(form[key])) form[key] = []
    })
    ElMessage.info('表单已重置')
}
</script>

<style scoped>
.custom-navbar {
    background: #001529;
}

.business-onboarding {
    max-width: 1280px;
    margin: 24px auto;
    padding: 32px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.form-header {
    text-align: center;
    margin-bottom: 40px;
}

.form-header h1 {
    font-size: 28px;
    color: #303133;
    margin-bottom: 8px;
}

.subtitle {
    color: #909399;
    font-size: 14px;
}

.form-section {
    margin-bottom: 40px;
    padding: 24px;
    background: #f8fafc;
    border-radius: 8px;
}

.section-title {
    font-size: 18px;
    color: #303133;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebeef5;
}

.section-tip {
    color: #909399;
    font-size: 12px;
    margin-bottom: 16px;
}

.upload-card {
    background: #fff;
    border: 1px solid #ebeef5;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    transition: all 0.2s;
}

.upload-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.upload-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    color:black;
}

.upload-icon {
    color: #409EFF;
    margin-right: 8px;
}

.upload-header h3 {
    font-size: 14px;
    margin-right: 8px;
}

.upload-button {
    width: 100%;
    margin-top: 8px;
}

.upload-tip {
    color: #909399;
    font-size: 12px;
    line-height: 1.4;
    margin-top: 8px;
}

.file-list {
    font-size: 12px;
    color: #67C23A;
    margin-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.form-actions {
    text-align: center;
    margin-top: 40px;
}

.form-actions .el-button {
    min-width: 120px;
    margin: 0 12px;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .business-onboarding {
        padding: 16px;
        margin: 16px;
    }

    .form-section {
        padding: 16px;
    }

    .form-actions .el-button {
        width: 100%;
        margin: 8px 0;
    }
}
</style>