<template>
    <Navbar style="background-color: black;" />
    <div class="business-project">


        <div class="container">
            <h1>创建项目</h1>
            <p class="subtitle">Create a project</p>

            <!-- 项目信息表单 -->
            <el-form :model="projectForm" :rules="formRules" ref="projectFormRef" label-width="120px"
                class="project-form">
                <el-form-item label="1.项目名称：" prop="name">
                    <el-input v-model="projectForm.name" placeholder="请输入项目名称" />
                </el-form-item>

                <el-form-item label="2.融资需求：" prop="funding">
                    <el-input v-model="projectForm.funding" placeholder="请输入融资需求（万元）" />
                </el-form-item>

                <el-form-item label="3.融资目的：" prop="purpose">
                    <el-input v-model="projectForm.purpose" placeholder="请输入融资目的" type="textarea" :rows="2" />
                </el-form-item>
            </el-form>

            <!-- 文件上传卡片区域 -->
            <div class="upload-cards">
                <el-row :gutter="20">
                    <el-col v-for="(tab, index) in uploadTabs" :key="index" :xs="24" :sm="12" :md="8" :lg="6">
                        <div class="upload-card" :class="{ 'active-tab': activeTab === tab.name }"
                            @click="activeTab = tab.name">
                            <div class="card-icon">{{ tab.icon }}</div>
                            <h3>{{ tab.label }}</h3>
                            <p class="tip-text">点击上传或拖拽文件至此</p>
                            <div class="hover-mask">
                                <el-icon :size="32"><upload-filled /></el-icon>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <!-- 五步法画布表格 -->
            <div class="canvas-table">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column v-for="(col, index) in columns" :key="index" :prop="col.prop" :label="col.label"
                        width="180">
                        <template #default="{ row }">
                            <div class="cell-content">
                                <div v-for="(item, i) in row[col.prop]" :key="i" class="paragraph"
                                    :style="getParagraphStyle(i)">
                                    {{ item || '-- 待补充内容 --' }}
                                </div>
                                <div v-if="!row[col.prop]?.length" class="paragraph">
                                    -- 待补充内容 --
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- 辅助建议区域 -->
            <div class="advice-section">
                <h2>迭代辅导建议</h2>
                <div class="advice-content">
                    <p v-for="(item, index) in adviceList" :key="index">{{ item }}</p>
                </div>
                <div class="advice-actions">
                    <el-button type="text" @click="generateAdvice">AI自动生成辅导意见</el-button>
                    <el-button type="primary" @click="saveProject">保存</el-button>
                </div>
            </div>

            <!-- 底部操作按钮 -->
            <div class="action-buttons">
                <el-button type="primary" size="large" @click="generateCanvas">生成画布</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import Navbar from '@/components/navbar.vue'

// 表单相关
const projectFormRef = ref(null)
const projectForm = reactive({
    name: '',
    funding: '',
    purpose: ''
})

const formRules = reactive({
    name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
    funding: [{ required: true, message: '请输入融资需求', trigger: 'blur' }],
    purpose: [{ required: true, message: '请输入融资目的', trigger: 'blur' }]
})

// 上传选项卡
const activeTab = ref('first')
const uploadTabs = ref([
    { label: '需求阶段材料', name: 'first', icon: '📂' },
    { label: '解决方案材料', name: 'second', icon: '💡' },
    { label: '商业模式材料', name: 'third', icon: '📈' },
    { label: '增长阶段材料', name: 'fourth', icon: '🚀' },
    { label: '壁垒阶段材料', name: 'fifth', icon: '🛡️' },
    { label: '访谈材料', name: 'sixth', icon: '🎥' },
    { label: '其他材料', name: 'seventh', icon: '📦' }
])

// 表格数据
const columns = ref([
    { prop: 'version', label: '版本' },
    { prop: 'demand', label: '需求' },
    { prop: 'solution', label: '解决方案' },
    { prop: 'business', label: '商业模式' },
    { prop: 'growth', label: '增长' },
    { prop: 'barrier', label: '壁垒' }
])

// 颜色生成逻辑
const colorPalette = [
    '#E3F2FD', // 浅蓝
    '#F3E5F5', // 浅紫
    '#FBE9E7', // 浅橙
    '#E8F5E9', // 浅绿
    '#FFF8E1', // 浅黄
    '#FFEBEE', // 浅红
    '#E0F2F1', // 浅青
    '#F5F5F5'  // 浅灰
]

const getParagraphStyle = (index) => {
    return {
        backgroundColor: colorPalette[index % colorPalette.length],
        color: getTextColor(colorPalette[index % colorPalette.length])
    }
}

// 自动计算合适的文字颜色（深色/浅色）
const getTextColor = (bgColor) => {
    const color = bgColor.replace('#', '')
    const rgb = parseInt(color, 16)
    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = (rgb >> 0) & 0xff
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return luminance > 128 ? '#000000' : '#ffffff'
}

// 简化的数据结构（只需文字内容）
const tableData = ref([
    {
        version: ['故事版'],
        demand: [
            '用户画像报告',
            '市场调研数据',
            '竞品分析报告'
        ],
        solution: [
            '智能推荐解决方案',
            '实时数据分析模块'
        ],
        business: ['SaaS订阅模式'],
        growth: [
            '月均30%用户增长',
            '覆盖10+城市'
        ],
        barrier: ['专利技术壁垒']
    },
    {
        version: ['取舍版'],
        demand: [
            '行为调研报告',
            '用户访谈记录'
        ],
        solution: ['自动化处理方案'],
        business: [
            '按需付费模式',
            '定制化收费方案'
        ],
        growth: ['年营收增长150%'],
        barrier: [
            '品牌认知优势',
            '先发市场优势',
            '技术专利布局'
        ]
    }
])

// 辅导建议
const adviceList = ref([
    '卖方可通过新建项目功能创建新项目信息，其中项目信息依托于企业信息展开（企业：项目1、项目2……）。',
    '卖方新项目创建时即可关联上传企业资料和五步法思维框架材料创建初始版本（故事版）的五步法智导画布。',
    '卖方可通过智导画布功能上传尽调材料，用于补充五步法智导画布的生成依据。',
    '卖方可通过专家智囊专区上传专家访谈视频用于补充五步法智导画布的生成依据。',
    '卖方智导画布可在线编辑、AI生成/优化/PPT生成功能。',
    '所有用户可观看开放的专家访谈视频，使用AI对话、总结、PPT生成功能。'
])

// 方法
const generateCanvas = () => {
    projectFormRef.value.validate(valid => {
        if (valid) {
            ElMessage.success('画布生成成功！')
        } else {
            ElMessage.warning('请先完成必填项')
        }
    })
}

const saveProject = () => {
    ElMessage.success('项目保存成功')
}

const generateAdvice = () => {
    ElMessage.info('AI辅导意见生成中...')
}
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

.upload-cards {
    margin: 30px 0;
}

.upload-card {
    background: #f8f9fa;
    border: 2px solid #ebeef5;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.upload-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    border-color: #409EFF;
}

.upload-card.active-tab {
    border-color: #409EFF;
    background: #ecf5ff;
}

.card-icon {
    font-size: 40px;
    margin-bottom: 12px;
}

.upload-card h3 {
    font-size: 16px;
    color: #303133;
    margin-bottom: 8px;
}

.tip-text {
    color: #909399;
    font-size: 12px;
}

.hover-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(64, 158, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    color: white;
}

.upload-card:hover .hover-mask {
    opacity: 1;
}

.canvas-table {
    margin: 30px 0;
}

/* 优化段落样式 */
.paragraph {
    margin: 4px 0;
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 13px;
    line-height: 1.4;
    transition: all 0.3s;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.paragraph:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.paragraph::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    opacity: 0;
    transition: opacity 0.3s;
}

.paragraph:hover::after {
    opacity: 1;
}

.cell-content {
    padding: 8px 0;
}

.advice-section {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 24px;
    margin: 30px 0;
}

.advice-section h2 {
    color: #303133;
    margin-bottom: 16px;
}

.advice-content p {
    color: #606266;
    line-height: 1.8;
    margin-bottom: 12px;
}

.advice-actions {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 20px;
}

.action-buttons {
    text-align: center;
    margin-top: 40px;
}

.el-button--large {
    padding: 12px 36px;
    font-size: 16px;
}
</style>