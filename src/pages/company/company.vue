<template>
    <div class="business-onboarding">
        <h1>企业入驻</h1>

        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
            <!-- 企业团队背景 -->
            <el-form-item label="1.企业团队背景：" prop="teamBackground">
                <el-input v-model="form.teamBackground" type="textarea" placeholder="请输入企业团队背景"></el-input>
            </el-form-item>

            <!-- 企业经营地域 -->
            <el-form-item label="2.企业经营地域：" prop="businessArea">
                <el-input v-model="form.businessArea" placeholder="请输入企业经营地域"></el-input>
            </el-form-item>

            <!-- 企业所属行业 -->
            <el-form-item label="3.企业所属行业：" prop="industry">
                <el-select v-model="form.industry" placeholder="请选择">
                    <el-option v-for="item in industryOptions" :key="item.value" :label="item.label"
                        :value="item.value"></el-option>
                </el-select>
            </el-form-item>

            <!-- 基本工商信息 -->
            <div class="basic-info">
                <el-form-item label="4.基本工商信息："></el-form-item>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="①统一社会信用代码：" prop="creditCode">
                            <el-input v-model="form.creditCode" placeholder="请输入统一社会信用代码"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="⑤电话：" prop="phone">
                            <el-input v-model="form.phone" placeholder="请输入联系电话"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="②法定代表人：" prop="legalRepresentative">
                            <el-input v-model="form.legalRepresentative" placeholder="请输入法定代表人姓名"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="⑥邮箱：" prop="email">
                            <el-input v-model="form.email" placeholder="请输入企业邮箱"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="③注册资本：" prop="registeredCapital">
                            <el-input v-model="form.registeredCapital" placeholder="请输入注册资本"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="⑦官网：" prop="website">
                            <el-input v-model="form.website" placeholder="请输入企业官网"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="④成立日期：" prop="establishmentDate">
                            <el-date-picker v-model="form.establishmentDate" type="date"
                                placeholder="选择成立日期"></el-date-picker>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="⑧地址：" prop="address">
                            <el-input v-model="form.address" placeholder="请输入企业地址"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- 文件上传区域 -->
                <div class="upload-section">
                    <h3>请上传：</h3>

                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                                :limit="1" :file-list="form.businessLicense" @change="handleBusinessLicenseChange">
                                <el-button type="primary">点击上传</el-button>
                                <template #tip>
                                    <div class="el-upload__title">营业执照</div>
                                    <div class="el-upload__tip">
                                        请上传企业营业执照扫描件，需在有效期
                                    </div>
                                </template>
                            </el-upload>
                            <div v-for="i of form.businessLicense" class="el-upload__tip">
                                已上传文件：{{ i.name }}
                            </div>
                        </el-col>

                        <el-col :span="6">
                            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                                :limit="1" :file-list="form.legalIdCard" @change="handleLegalIdCardChange">
                                <el-button type="primary">点击上传</el-button>
                                <template #tip>
                                    <div class="el-upload__title">法人身份证明</div>
                                    <div class="el-upload__tip">
                                        请上传法人身份证正反面扫描件；若为非法人本人办理，需上传法人授权委托书及经办人身份证正反面扫描件
                                    </div>
                                </template>
                            </el-upload>
                            <div v-for="i of form.legalIdCard" class="el-upload__tip">
                                已上传文件：{{ i.name }}
                            </div>
                        </el-col>

                        <el-col :span="6">
                            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                                :limit="1" :file-list="form.taxRegistration" @change="handleTaxRegistrationChange">
                                <el-button type="primary">点击上传</el-button>
                                <template #tip>
                                    <div class="el-upload__title">税务登记证</div>
                                    <div class="el-upload__tip">
                                        如三证合一可不填；若非三证合一请上传税务登记证扫描件
                                    </div>
                                </template>
                            </el-upload>
                            <div v-for="i of form.taxRegistration" class="el-upload__tip">
                                已上传文件：{{ i.name }}
                            </div>
                        </el-col>

                        <el-col :span="6">
                            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                                :limit="1" :file-list="form.organizationCode" @change="handleOrganizationCodeChange">
                                <el-button type="primary">点击上传</el-button>
                                <template #tip>
                                    <div class="el-upload__title">组织机构代码证</div>
                                    <div class="el-upload__tip">
                                        如三证合一可不填；若非三证合一请上传组织机构代码证扫描件
                                    </div>
                                </template>
                            </el-upload>
                            <div v-for="i of form.organizationCode" class="el-upload__tip">
                                已上传文件：{{ i.name }}
                            </div>
                        </el-col>

                        <el-col :span="6">
                            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                                :limit="1" :file-list="form.bankAccount" @change="handleBankAccountChange">
                                <el-button type="primary">点击上传</el-button>
                                <template #tip>
                                    <div class="el-upload__title">银行开户许可证</div>
                                    <div class="el-upload__tip">
                                        请上传银行开户许可证扫描件
                                    </div>
                                </template>
                            </el-upload>
                            <div v-for="i of form.bankAccount" class="el-upload__tip">
                                已上传文件：{{ i.name }}
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>

            <!-- 按钮区域 -->
            <div class="button-group">
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
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
            },

            industryOptions: [
                { value: 'it', label: '信息技术' },
                { value: 'manufacturing', label: '制造业' },
                { value: 'finance', label: '金融' },
                { value: 'education', label: '教育' },
                { value: 'healthcare', label: '医疗保健' },
                { value: 'other', label: '其他' }
            ],

            rules: {
                teamBackground: [
                    { required: true, message: '请输入企业团队背景', trigger: 'blur' }
                ],
                businessArea: [
                    { required: true, message: '请输入企业经营地域', trigger: 'blur' }
                ],
                industry: [
                    { required: true, message: '请选择企业所属行业', trigger: 'change' }
                ],
                creditCode: [
                    { required: true, message: '请输入统一社会信用代码', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请输入联系电话', trigger: 'blur' },
                    { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号码', trigger: 'blur' }
                ],
                legalRepresentative: [
                    { required: true, message: '请输入法定代表人姓名', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请输入企业邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入有效的邮箱地址', trigger: ['blur', 'change'] }
                ],
                registeredCapital: [
                    { required: true, message: '请输入注册资本', trigger: 'blur' }
                ],
                establishmentDate: [
                    { type: 'date', required: true, message: '请选择成立日期', trigger: 'change' }
                ],
                address: [
                    { required: true, message: '请输入企业地址', trigger: 'blur' }
                ]
            }
        };
    },

    methods: {
        // 处理营业执照上传
        handleBusinessLicenseChange(file, fileList) {
            this.form.businessLicense.push(fileList[0]);
        },

        // 处理法人身份证明上传
        handleLegalIdCardChange(file, fileList) {
            this.form.legalIdCard.push(fileList[0]);
        },

        // 处理税务登记证上传
        handleTaxRegistrationChange(file, fileList) {
            this.form.taxRegistration.push(fileList[0]);
        },

        // 处理组织机构代码证上传
        handleOrganizationCodeChange(file, fileList) {
            this.form.organizationCode.push(fileList[0]);
        },

        // 处理银行开户许可证上传
        handleBankAccountChange(file, fileList) {
            this.form.bankAccount.push(fileList[0]);
        },

        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('提交成功!');
                    // 在实际应用中，这里应该发送表单数据到后端
                    console.log('提交的数据:', this.form);
                } else {
                    console.log('表单验证失败!');
                    return false;
                }
            });
        },

        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style scoped>
.business-onboarding {
    width: 90%;
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    background-color: #fff;
}

h1 {
    color: #333;
    margin-bottom: 20px;
    font-size: 24px;
}

h2 {
    color: #666;
    margin: 20px 0 15px;
    font-size: 18px;
}

h3 {
    color: #666;
    margin: 15px 0 10px;
    font-size: 16px;
}

.basic-info {
    margin-top: 20px;
}

.upload-section {
    margin-top: 20px;
}

.button-group {
    text-align: center;
    margin-top: 30px;
}

.button-group .el-button {
    margin: 0 10px;
}

.el-upload__tip {
    font-size: 12px;
    color: #999;
}

.el-upload__title {
    margin-top: 10px;
}

.el-col {
    margin-bottom: 20px;
}
</style>