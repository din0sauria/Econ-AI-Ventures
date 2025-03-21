<template>
    <div class="business-project">
        <navbar />

        <div class="container">
            <h1>创建项目</h1>
            <p class="subtitle">Create a project</p>

            <!-- 项目信息表单 -->
            <el-form :model="projectForm" :rules="formRules" ref="projectFormRef" label-width="120px"
                class="project-form">
                <el-form-item label="1.项目名称：" prop="name">
                    <el-input v-model="projectForm.name" placeholder="请输入项目名称"></el-input>
                </el-form-item>

                <el-form-item label="2.融资需求：" prop="funding">
                    <el-input v-model="projectForm.funding" placeholder="请输入融资需求"></el-input>
                </el-form-item>

                <el-form-item label="3.融资目的：" prop="purpose">
                    <el-input v-model="projectForm.purpose" placeholder="请输入融资目的"></el-input>
                </el-form-item>
            </el-form>

            <!-- 文件上传标签页 -->
            <el-tabs v-model="activeTab" class="file-tabs">
                <el-tab-pane label="需求阶段材料" name="first"></el-tab-pane>
                <el-tab-pane label="解决方案材料" name="second"></el-tab-pane>
                <el-tab-pane label="商业模式材料" name="third"></el-tab-pane>
                <el-tab-pane label="增长阶段材料" name="fourth"></el-tab-pane>
                <el-tab-pane label="壁垒阶段材料" name="fifth"></el-tab-pane>
                <el-tab-pane label="访谈材料" name="sixth"></el-tab-pane>
                <el-tab-pane label="其他材料" name="seventh"></el-tab-pane>
            </el-tabs>

            <!-- 五步法画布区域 -->
            <div class="canvas-section">
                <div class="canvas-header">
                    <h2>五步法画布 草稿（故事版）</h2>
                    <div class="version-buttons">
                        <el-button size="small">故事版</el-button>
                        <el-button size="small">定性版</el-button>
                        <el-button size="small">定量版</el-button>
                    </div>
                </div>

                <div class="canvas-content">
                    <!-- 需求阶段 -->
                    <div class="canvas-card demand">
                        <div class="card-header">
                            <h3>需求阶段</h3>
                            <el-button size="small" type="primary">编辑</el-button>
                        </div>
                        <div class="card-body">
                            <div class="content-section">
                                <p>目标用户：主要是年龄在25-45岁的上班族及家庭消费者。</p>
                                <p>消费习惯：消费者要求性价比高、方便快捷的用餐体验，同时注重食物的品质和口味。</p>
                                <p>消费场景：多为午餐、晚餐和工作餐。</p>
                                <p>健康需求：随着健康意识的提升，消费者更注重餐饮的健康性。</p>
                                <p>多样化需求：不同消费者对于菜品的口味、种类有着不同的偏好。</p>
                            </div>
                            <div class="upload-section">
                                <p>未上传画布内容，无生成内容。</p>
                                <p class="upload-tip">上传文档，AI生成</p>
                                <p class="upload-tip">/导出</p>
                            </div>
                        </div>
                    </div>

                    <!-- 解决方案 -->
                    <div class="canvas-card solution">
                        <div class="card-header">
                            <h3>解决方案</h3>
                            <el-button size="small" type="primary">编辑</el-button>
                        </div>
                        <div class="card-body">
                            <div class="content-section">
                                <p>老乡村可以通过多种经营策略满足消费者需求：</p>
                                <p>1. 提供高品质、性价比高的中式快餐；</p>
                                <p>2. 提供多样化的菜品选择，满足不同消费者的口味偏好；</p>
                                <p>3. 注重食材的新鲜度和健康性；</p>
                                <p>4. 提供便捷的点餐和配送服务。</p>
                            </div>
                            <div class="upload-section">
                                <p>未上传画布内容，无生成内容。</p>
                                <p class="upload-tip">上传文档，AI生成</p>
                                <p class="upload-tip">/导出</p>
                            </div>
                        </div>
                    </div>

                    <!-- 商业模式 -->
                    <div class="canvas-card business-model">
                        <div class="card-header">
                            <h3>商业模式</h3>
                            <el-button size="small" type="primary">编辑</el-button>
                        </div>
                        <div class="card-body">
                            <div class="content-section">
                                <p>老乡村的商业模式主要包括：</p>
                                <p>1. 直营店模式：通过直营店树立品牌形象，保证服务质量和产品品质；</p>
                                <p>2. 加盟模式：通过加盟快速扩张市场，增加品牌影响力；</p>
                                <p>3. 外卖服务：通过与外卖平台合作，扩大服务范围；</p>
                                <p>4. 原材料供应：建立稳定的原材料供应渠道，保证产品品质。</p>
                            </div>
                        </div>
                    </div>

                    <!-- 增长 -->
                    <div class="canvas-card growth">
                        <div class="card-header">
                            <h3>增长</h3>
                            <el-button size="small" type="primary">编辑</el-button>
                        </div>
                        <div class="card-body">
                            <div class="content-section">
                                <p>老乡村的增长策略包括：</p>
                                <p>1. 品牌建设：通过线上线下结合的品牌推广活动提升品牌知名度；</p>
                                <p>2. 会员体系：建立会员制度，通过积分、优惠券等方式提高客户忠诚度；</p>
                                <p>3. 数据驱动：利用数据分析优化营销策略和产品开发；</p>
                                <p>4. 新市场拓展：逐步进入新的城市和区域市场。</p>
                            </div>
                        </div>
                    </div>

                    <!-- 壁垒 -->
                    <div class="canvas-card barrier">
                        <div class="card-header">
                            <h3>壁垒</h3>
                            <el-button size="small" type="primary">编辑</el-button>
                        </div>
                        <div class="card-body">
                            <div class="content-section">
                                <p>老乡村的竞争壁垒包括：</p>
                                <p>1. 品牌优势：经过多年的经营，建立了良好的品牌声誉；</p>
                                <p>2. 供应链：拥有稳定的原材料供应和严格的品质控制；</p>
                                <p>3. 产品创新：持续推出新的菜品和口味，满足消费者不断变化的需求；</p>
                                <p>4. 运营效率：通过标准化流程提高运营效率，降低成本。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 辅助建议区域 -->
            <div class="advice-section">
                <h2>迭代辅导建议</h2>
                <div class="advice-content">
                    <p>卖方可通过新建项目功能创建新项目信息，其中项目信息依托于企业信息展开（企业：项目1、项目2……）。</p>
                    <p>卖方新项目创建时即可关联上传企业资料和五步法思维框架材料创建初始版本（故事版）的五步法智导画布。</p>
                    <p>卖方可通过智导画布功能上传尽调材料，用于补充五步法智导画布的生成依据。</p>
                    <p>卖方可通过专家智囊专区上传专家访谈视频用于补充五步法智导画布的生成依据。</p>
                    <p>卖方智导画布可在线编辑、AI生成/优化/PPT生成功能。</p>
                    <p>所有用户可观看开放的专家访谈视频，使用AI对话、总结、PPT生成功能。</p>
                </div>
                <div class="advice-actions">
                    <el-button type="text">AI自动生成辅导意见</el-button>
                    <el-button>保存</el-button>
                </div>
            </div>

            <!-- 底部操作按钮 -->
            <div class="action-buttons">
                <el-button type="primary">生成画布</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue';

export default {
    components: {
        navbar
    },
    data() {
        return {
            activeTab: 'first',
            projectForm: {
                name: '',
                funding: '',
                purpose: ''
            },
            formRules: {
                name: [
                    { required: true, message: '请输入项目名称', trigger: 'blur' }
                ],
                funding: [
                    { required: true, message: '请输入融资需求', trigger: 'blur' }
                ],
                purpose: [
                    { required: true, message: '请输入融资目的', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm() {
            this.$refs.projectFormRef.validate((valid) => {
                if (valid) {
                    alert('表单提交成功!');
                } else {
                    console.log('表单验证失败!');
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
.business-project {
    width: 100%;
    min-height: 100vh;
    background-color: #f5f7fa;
    padding: 20px;
    box-sizing: border-box;
}

.container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
}

.subtitle {
    font-size: 14px;
    color: #999;
    margin-bottom: 20px;
}

.project-form {
    width: 50%;
    margin-bottom: 20px;
}

.file-tabs {
    margin-bottom: 20px;
}

.canvas-section {
    margin-bottom: 20px;
}

.canvas-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.version-buttons .el-button {
    background-color: #f0f2f5;
    color: #666;
    border: none;
    margin-left: 5px;
}

.version-buttons .el-button.is-focused {
    background-color: #e6f7ff;
    color: #1890ff;
}

.canvas-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.canvas-card {
    width: 19%;
    background-color: #f9f9f9;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 15px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.card-header h3 {
    font-size: 16px;
    color: #333;
}

.card-body {
    font-size: 14px;
    line-height: 1.5;
    color: #666;
}

.demand {
    background-color: #f5f7ff;
}

.solution {
    background-color: #fff0f0;
}

.business-model {
    background-color: #f9f9f9;
}

.growth {
    background-color: #e6f7e6;
}

.barrier {
    background-color: #fff9e6;
}

.upload-section {
    margin-top: 10px;
    padding: 10px;
    border: 1px dashed #ddd;
    border-radius: 4px;
    background-color: #fff;
}

.upload-tip {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
}

.advice-section {
    margin: 30px 0;
}

.advice-section h2 {
    margin-bottom: 15px;
    font-size: 18px;
}

.advice-content {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
    margin-bottom: 15px;
}

.advice-content p {
    margin-bottom: 8px;
}

.advice-actions {
    display: flex;
    justify-content: flex-end;
}

.action-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.action-buttons .el-button {
    background-color: #409EFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.action-buttons .el-button:hover {
    background-color: #66b1ff;
}
</style>