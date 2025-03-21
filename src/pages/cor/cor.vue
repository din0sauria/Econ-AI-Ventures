<template>
    <div id="app">
        <!-- 引入导航栏组件 -->
        <navbar style="background-color: black;" />
        <!-- 左右分栏布局 -->
        <div class="main-content">
            <!-- 左边筛选栏 -->
            <div class="left-column  fixed-left">
                <el-button class="custom-button" @click="handleButtonClick">开始筛选</el-button>

                <el-collapse @change="handleCollapseChange">
                    <el-collapse-item
                        v-for="(category, index) in categories"
                        :key="index"
                        :name="index"
                        :class="{ 'custom-collapse-item': isCollapseItemActive(index) }"
                    >
                        <template #title>
                            <span class="common-rectangle" :class="{ 'blue-rectangle': isCollapseItemActive(index) }"></span>
                            <span class="common-text" :class="{ 'blue-text': isCollapseItemActive(index) }">{{ category.title }}</span>
                        </template>
                        <el-checkbox-group v-model="category.selectedOptions">
                            <el-checkbox
                                v-for="(option, optionIndex) in category.options"
                                :key="optionIndex"
                                :label="option"
                                class="single-line-checkbox"
                            >
                                {{ option }}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="right-column">
            <!-- 右边上面搜索栏及下面内容栏 -->
                <div class="right-column-up">
                    <div class="search-box">
                        <input type="text" placeholder="请输入企业或项目关键词" disabled>
                        <span class="magnifier">🔍</span>
                    </div>
                    <el-checkbox-group v-model="checkedOptions">
                        <el-checkbox label="仅公司" ></el-checkbox>
                        <el-checkbox label="仅项目" ></el-checkbox>
                        <el-checkbox label="仅关注" ></el-checkbox>
                    </el-checkbox-group>
                </div>
                
                <div class="right-column-mid">
                    <div>已为您找到<font color="red"> {{searchLen}} </font>条相关搜索结果：</div>
                </div>

                <div class="right-column-down">



                    <div v-for="(box, index) in visibleBoxes" :key="index" class="info-box-wrapper">
                    <div class="info-box">
                        <div class="top-section">
                            <div class="left-section">
                                <img :src="box.imageSrc" alt="Logo" class="logo" />
                            </div>
                            <div class="right-section">
                                <div class="title-section" @click="$router.push('/corhome')">
                                <span class="company-name">{{ box.companyName }}</span>
                                <button class="tag-button1">连锁零售巨头</button>
                                <button class="tag-button2">全渠道零售</button>
                                </div>
                                <div class="industry-section">
                                <span class="value">所属行业：{{ box.industry }}</span>
                                </div>
                                <div class="introduction-section">
                                <span class="value">企业简介：{{ box.introduction }}</span>
                                </div>
                                <div class="operation-section">
                                <span class="value">经营地域：{{ box.operationScene }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-section">
                        <div class="investment-section">
                            <span class="circle-label">{{ box.labelNumber }}</span>
                            <span class="value">创投项目：{{ box.investmentProjects }}</span>
                        </div>
                        </div>
                    </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import navbar from '@/components/navbar.vue';
import { ref } from 'vue';
import { ElCheckbox, ElCheckboxGroup, ElCollapse, ElCollapseItem } from 'element-plus';

import logo1 from '@/assets/cortab/cor1.png'; 
const imageSrc1 = ref(logo1);
import logo2 from '@/assets/cortab/cor2.png'; 
const imageSrc2 = ref(logo2);
import logo3 from '@/assets/cortab/cor3.png'; 
const imageSrc3 = ref(logo3);
import logo4 from '@/assets/cortab/cor4.png'; 
const imageSrc4 = ref(logo4);
import logo5 from '@/assets/cortab/cor5.png'; 
const imageSrc5 = ref(logo5);
import logo6 from '@/assets/cortab/cor6.png'; 
const imageSrc6 = ref(logo6);

// 初始化折叠项状态
const categories = ref([
    {
        title: '主要行业',
        expanded: false,
        options: ['餐饮', '服务', '零售', '文体', '其他'],
        selectedOptions: []
    },
    {
        title: '分布区域',
        expanded: false,
        options: ['选项4', '选项5'],
        selectedOptions: []
    },
    {
        title: '初创状态',
        expanded: false,
        options: ['需求', '解决方案', '商业模式', '增长', '壁垒'],
        selectedOptions: []
    },
    {
        title: '风险等级',
        expanded: false,
        options: ['红（>70分）', '橙（50 - 70分）', '绿（<50分）'],
        selectedOptions: []
    },
    {
        title: 'AI推荐指数',
        expanded: false,
        options: ['1星', '2星', '3星', '4星', '5星'],
        selectedOptions: []
    },
    {
        title: '估值区间',
        expanded: false,
        options: ['100万以下', '100万 - 300万', '300万 - 500万', '500万以上'],
        selectedOptions: []
    }
]);


const allBoxes = [
  {
    imageSrc: imageSrc1,
    companyName: '安徽老乡鸡餐饮有限公司',
    tags: ['标签1', '标签2'],
    industry: '餐饮',
    introduction: '安徽老乡鸡餐饮有限公司是一家从事餐饮服务,食品销售,食品生产等业务的公司，成立于2003年10月22日。',
    operationScene: '安徽省合肥市蜀山区',
    labelNumber: '1',
    investmentProjects: '有'
  },
  {
    imageSrc: imageSrc2,
    companyName: '海底捞国际控股有限公司',
    tags: ['标签1', '标签2'],
    industry: '餐饮',
    introduction: '海底捞1994 年在四川简阳创立，以优质服务闻名于世 。海底捞提供丰富多样的火锅菜品，锅底口味众多，能满足不同消费者需求。',
    operationScene: '在中国各大城市核心商圈、商业综合体等地开设大量门店，形成广泛覆盖 。在国际上，已在新加坡、美国、英国、韩国等多个国家和地区开设分店，将中国火锅推向世界 。',
    labelNumber: '2',
    investmentProjects: '有'
  },
  {
    imageSrc: imageSrc3,
    companyName: '蜜雪冰城股份有限公司',
    tags: ['标签1', '标签2'],
    industry: '餐饮',
    introduction: '蜜雪冰城1997年创立于河南郑州，定位“极致性价比”的国民茶饮品牌，以均价6-10元的冰淇淋、果茶及奶茶为核心产品。',
    operationScene: '国内下沉市场渗透率第一，海外重点布局东南亚（越南、印尼、菲律宾等），同步拓展欧美华人社区。',
    labelNumber: '3',
    investmentProjects: '有'
  },
  {
    imageSrc: imageSrc4,
    companyName: '惠州妙喜厨餐饮管理有限公司',
    tags: ['标签1', '标签2'],
    industry: '餐饮',
    introduction: '喜厨成立于2023年11月，总部位于广东惠州，是以"现包水饺+砂锅菜"为核心品类的品质餐饮品牌。通过精选食材与标准化工艺，打造手工水饺、特色砂锅等家庭化场景餐饮服务。',
    operationScene: '以惠州为起点，辐射珠三角地区。',
    labelNumber: '4',
    investmentProjects: '有'
  },
  {
    imageSrc: imageSrc5,
    companyName: '中国邮政集团有限公司',
    tags: ['标签1', '标签2'],
    industry: '服务',
    introduction: '中国邮政集团有限公司是依照《中华人民共和国公司法》组建的国有独资公司，由中央管理，是国有重要骨干企业。主要从事邮件寄递、邮政汇兑和邮政储蓄等业务，同时经营邮票发行业务等。',
    operationScene: '立足国内，覆盖全国城乡。',
    labelNumber: '6',
    investmentProjects: '有'
  },
  {
    imageSrc: imageSrc6,
    companyName: '上海盒马网络科技有限公司',
    tags: ['标签1', '标签2'],
    industry: '零售',
    introduction: '盒马成立于 2016 年，是阿里巴巴旗下以数据和技术驱动的新零售平台，融合了线上线下业务，提供生鲜食品、餐饮、日用品等多种商品和服务',
    operationScene: '主要在中国各大城市布局，包括北京、上海、广州、深圳等一二线城市，逐步向其他城市拓展。',
    labelNumber: '5',
    investmentProjects: '有'
  }
];

const visibleBoxes = ref(allBoxes);
const searchLen = ref(6);

const handleButtonClick = () => {
  visibleBoxes.value = visibleBoxes.value.slice(0, 4);
  searchLen.value = 4;
};


const activeCollapseItems = ref([]);

const handleCollapseChange = (value) => {
    activeCollapseItems.value = value;
    console.log(activeCollapseItems.value);
};

const isCollapseItemActive = (index) => {
    return activeCollapseItems.value.includes(index);
};
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.main-content {
    background-color: #f0f0f0;
    display: flex;
}

.left-column {
    flex: 1;
    background-color: #ffffff;
}

.right-column {
    flex: 4;

}

.right-column-up {
    background-color: #ffffff;
    margin-bottom: -20px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 50px;
}

.right-column-mid {
    background-color: #ffffff;
    margin-top: -20px;
    text-emphasis-color: blue;
    color: black;
    padding: 20px;
    font-size: small;
}
.right-column-down {
    background-color: #ffffff;
}

.custom-button {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 70%;
    height: 46px;
    background-color: #3761F5;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 12px 24px;
    font-size: 18px;
    margin-left: 40px;
}

.common-rectangle {
    display: inline-block;
    width: 8px;
    height: 20px;
    margin-right: 8px;
    background-color: white;
    vertical-align: middle;
    transition: background-color 0.3s ease;
}

.blue-rectangle {
    background-color: blue;
}

.common-text {
    margin-left: 60px;
}

.blue-text {
    margin-left: 60px;
    color: blue;
    transition: color 0.3s ease;
}

.el-collapse-item__header {
    transition: background-color 0.3s ease; /* 添加过渡效果 */
}

/* 新增激活状态下的背景颜色样式 */
.el-collapse-item__header.active {
    background-color: lightblue;
}

/* 根据激活状态添加类名 */
.el-collapse-item__header.is-active {
    background-color: lightblue;
}

.single-line-checkbox {
    margin-left: 20px;
    display: block;
}


/* 以下为搜索框 */
.search-box {
    position: relative;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
}

input {
    width: 100%;
    padding: 8px 30px 8px 10px;
    border: none;
    outline: none;
    color: gray;
}

/* 以下为放大镜符号 */
.magnifier {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
}


/* 以下为右侧文本框 */
.info-box-wrapper {
  background-color: #f0f0f0; /* 页面背景色 */
  padding: 10px; /* 根据需要调整 */
  color: #111;
}

.info-box {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  background-color: #fff; /* 框内背景色 */
}
.top-section {
  display: flex;
  margin-bottom: 15px;
}
.left-section {
  width: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 10px;
}
.logo {
  max-width: 100%;
  max-height: 100%;
}
.right-section {
  flex: 1;
  padding-left: 15px;
  font-size: 13px;
}
.title-section {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  transition: color 0.2s ease;
}
.company-name {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}
.tag-button2 {
  background-color: rgba(55, 97, 245, 0.12); 
  color: #3761F5; 
  border: 1px solid #3761F5; 
  border-radius: 5px; 
  padding: 5px 10px;  
  cursor: pointer; 
}
.tag-button1 {
  background-color: rgba(255, 235, 59, 0.12); 
  color: #FFC300; 
  border: 1px solid #FFEB3B; 
  margin-right: 20px;
  margin-left: 30px;
  border-radius: 5px; 
  padding: 5px 10px;  
  cursor: pointer; 
}

/* 以下是企业框中下面的内容 */
.label {
  font-weight: bold;
  margin-right: 5px;
}
.bottom-section {
  font-size: 13px;
  margin-top: -10px;
  margin-left: 18px;
  color: #3761F5;
}
.circle-label {
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 2px solid #99ccff; /* 边框颜色 */
  border-radius: 50%; /* 圆形 */
  text-align: center;
  line-height: 25px;
  color: #99ccff; /* 文字颜色 */
  margin-right: 5px;
}
.introduction-section {
    margin-top: 3px;
    margin-bottom: 3px;  
}

.fixed-left {
  position: sticky; /* 粘性定位 */
  top: 10px; /* 开始固定的位置，距离顶部的距离，可调整 */
}

.title-section:hover {
    color: #3761F5;
    transition: color 0.2s ease;
}

</style>