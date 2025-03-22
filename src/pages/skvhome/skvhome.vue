<template>
    <div id="app">
      <navbar style="background-color:black;"/>
        <div class="main-content">
          
          <div class="header-layout">
            <img :src="dundunSrc" alt="Logo" class="dundun-class" />
            <img :src="spvSrc" alt="Logo" class="spv-class" />
          </div>

          <div class="main-layout"> 
          
          <div class="top-box">
              <span class="gray-text">SPV概况</span>
          </div>
          

        <div class="mid-box">
            <el-card
                v-for="(item, index) in dataList_1"
                :key="index"
                class="data-card-1"
                shadow="always"
            >
                <div class="card-content">
                <span class="title-0">{{ item.title }}</span>
                <span class="value">{{ item.value }}</span>
                <span class="sub-value">份额总数（份）<p>7,000,000</p></span>
                
                </div>
            </el-card>

            <el-card
                v-for="(item, index) in dataList_2"
                :key="index"
                class="data-card-2"
                shadow="always"
            >
                <div class="card-content">
                <span class="title">{{ item.title }}</span>
                <span class="value-1">{{ item.value }} 
                  <p class="black-sub-text">{{ item.subLevel }}</p>
                  <el-button class="custom-button-2-3">{{item.tag}}</el-button>
                </span>
                
                <div class="divider"></div>
                <span class="sub-value-1">{{ item.subValue }}<p>{{item.subLevel}}</p> <div class="gray-sub-text">{{item.subTag}}</div></span>
                
                </div>
            </el-card>

            <el-card
                v-for="(item, index) in dataList_3"
                :key="index"
                class="data-card-3"
                shadow="always"
            >
                <div class="card-content-double">
                  <div class="card-content">
                    <span class="title">{{ item.title1 }}</span>
                    <span class="value-1">{{ item.value1 }}</span>
                    <div class="divider"></div>
                    <el-button class="custom-button-4">{{item.level1}}</el-button>
                    </div>
                  <div class="card-content">
                    <span class="title">{{ item.title2 }}</span>
                    <span class="value-1">{{ item.value2 }}</span>
                    <div class="divider"></div>
                    <el-button class="custom-button-4">{{item.level2}}</el-button>
                    </div>
                  </div>
            </el-card>

            
            <el-card
                v-for="(item, index) in dataList_4"
                :key="index"
                class="data-card-4"
                shadow="always"
            >
                <div class="card-content">
                <span class="title">{{ item.title }}</span>
                <span class="value-2">{{ item.value }}<p>{{item.level}}</p></span>
                <div class="divider"></div>
                </div>
            </el-card>
        </div>


        <div class="gap-box">
              <span class="gray-text">投资人份额估值概况</span>
        </div>


          <el-table :data="tableData" 
          class="guzhi-style"  >
            <el-table-column 
              v-for="(column, index) in tableColumns" 
              :key="index" 
              :prop="column.prop" 
              :label="column.label"
              :align="'center'"
              >
            </el-table-column>
          </el-table>
        
          <div class="gap-box-2">
              <span class="colorful-text">根据SPV预设的分账频率，假设此Repo是月底设立，设立后3个月每个月月底均为检视点，具体估值过程如下：</span>
              <span class="colorful-text-2">每期取实际摊销记账金额与检视减记记账金额的较小值，此合约最终得到的每月估值为：</span>
        </div>

   
        <el-table :data="tableData_2" 
          class="guzhi-style-2"  >
            <el-table-column 
              v-for="(column, index) in tableColumns_2" 
              :key="index" 
              :prop="column.prop" 
              :label="column.label"
              :align="'center'"
              >
            </el-table-column>
          </el-table>

          <div class="gap-box">
              <span class="gray-text">脑图</span>
        </div>

          <div class="down-box">
            <img :src="brainSrc" alt="Brain" class="brain-class" />
          </div>
        
      </div>        
        </div>
            
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';

import navbar from '@/components/navbar.vue';
import dundun from '@/assets/spvhometab/dundun.svg'
import spvfig from '@/assets/spvhometab/spvfig.svg'
import brain from '@/assets/spvhometab/brain.svg'
const dundunSrc = ref(dundun);
const spvSrc = ref(spvfig);
const brainSrc = ref(brain);

const dataList_1 = ref([
  {
    title: '成交总金额（元）',
    value: '8,400,000.00'
  },
])

  const dataList_2 = ref([

  {
    title: '份额价格（元/份额）',
    value: '5.0000',
    tag: '最新成交',
    level: '元',
    subValue: '2.6667',
    subLevel: '元',
    subTag: '历史平均'
  },
  {
    title: '份额收入（月）',
    value: '0.1500',
    tag: '最新预报',
    level: '元',
    subValue: '0.1500',
    subLevel: '元',
    subTag: '实际平均'
  }
  ])

  const dataList_3 = ref([
  {
    title1: '市收比',
    value1: '10X',
    level1: '最新成交',
    title2: '约定收益率',
    value2: '10%',
    level2: '最新成交',
  }
]);

const dataList_4 = ref([
  {
    title: '市值',
    value: '35,000,000',
    level: '元',
  }
]);


const tableData_2 = [
  {
    月份: '第1个月',
    实际收入: 80,
    收益支付: 1.8,
    扣除每期收益后实际可摊销: 78.2,
    实际收入摊销记账: 101.8,
    最小摊销金额: 68.2,
    检视减记记账: 111.8,
    估值记账: 101.8
  },
  {
    月份: '第2个月',
    实际收入: 30,
    收益支付: 1.8,
    扣除每期收益后实际可摊销: 28.2,
    实际收入摊销记账: 73.6,
    最小摊销金额: 68.2,
    检视减记记账: 43.6,
    估值记账: 43.6
  },
  {
    月份: '第3个月',
    实际收入: 40,
    收益支付: 1.8,
    扣除每期收益后实际可摊销: 38.2,
    实际收入摊销记账: 35.4,
    最小摊销金额: 68.2,
    检视减记记账: 0,
    估值记账: 0
  }
];

const tableColumns_2 = [
  { prop: '月份', label: '月份' },
  { prop: '实际收入', label: '实际收入（元）' },
  { prop: '收益支付', label: '收益支付（元）' },
  { prop: '扣除每期收益后实际可摊销', label: '扣除每期收益后实际可摊销（元）' },
  { prop: '实际收入摊销记账', label: '实际收入摊销记账（元）' },
  { prop: '最小摊销金额', label: '最小摊销金额（元）' },
  { prop: '检视减记记账', label: '检视减记记账（元）' },
  { prop: '估值记账', label: '估值记账（元）' }
];


const tableData = ref([
{
    'SPV分红频率': '每自然日',
    '买入份额价格（份额）': '180元',
    '约定收益率（月平息）': '1%',
    '预报收入（月）': '70元',
    '预期回购期限': '3个月',
    '实际收入（月）': '30元'
  }
]);

// 模拟表格列配置
const tableColumns = ref([
  { prop: 'SPV分红频率', label: 'SPV分红频率' },
  { prop: '买入份额价格（份额）', label: '买入份额价格（份额）' },
  { prop: '约定收益率（月平息）', label: '约定收益率（月平息）' },
  { prop: '预报收入（月）', label: '预报收入（月）' },
  { prop: '预期回购期限', label: '预期回购期限' },
  { prop: '实际收入（月）', label: '实际收入（月）' }
]);

</script>


<style scoped>

.main-content {
    background-color: #f9f9f9;
}

.header-layout {
  background-color: white;
  height: 70px;
  box-shadow: 5px 5px 5px #f1f1f1;
}

.main-layout {
  padding: 40px;
  margin-top: -20px;
}

.top-box {
    margin-bottom: 10px;
}

.gap-box {
  margin-top: 20px;
  margin-bottom: 10px;
}

.gap-box-2 {
  display: flex;
  margin-left: 40px;
  width: 85%;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
}

.gray-text {
  color: #8f8f8f;
  font-size: 13px;
  font-weight: bold;
}

.colorful-text {
  color: #ABBDFF;
  font-size: 10px;
}

.colorful-text-2{
  color: #FFC994;
  font-size: 10px;
  display: inline;
}

.mid-box {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.data-card-2 {
  width: 18%;
}

.data-card-1 {
  width: 18%;
    background-color: rgb(97,120,246);
    color: white;
    box-shadow: inset 1px 1px 6px 10px rgb(156, 164, 204);
}

.data-card-3 {
  width: 18%;
  box-shadow: inset 1px 1px 6px 10px rgb(156, 164, 204);
}

.data-card-4 {
  box-shadow: inset 1px 1px 6px 10px rgb(156, 164, 204);
  width: 18%;
}

.card-content-double {
  display: grid; /* 将大容器设置为grid布局 */
  grid-template-columns: 1fr 1fr; /* 定义两列，每列各占一半空间 */
}

.card-content {
  display: flex;
  flex-direction: column;  
}

.title-0 {
  font-size: 14px;
  margin-bottom: 5px;
  color: white;
}

.title {
  font-size: 14px;
  margin-bottom: 5px;
  color: #7f7f7f;
}

.value {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.sub-value {
            display: inline-flex;
            align-items: center;
  font-size: 10px;
  
}

.sub-value p{
  font-size: 15px;

            margin-left: 5px;
}

.sub-value-1 {
  color: #3761F5;
  font-weight: bold;
            display: inline-flex;
            align-items: center;
            margin-bottom: -10px;
  font-size: 15px;
  
}

.sub-value-1 p{
  color: #3761F5;
  font-size: 10px;
            margin-left: 5px;
}

.value-1{
            display: inline-flex;
            align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
}


.value-1 p {
  margin-top: 4px;
  font-size: 10px;
}

.value-2{
            display: inline-flex;
            align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #FF8D1A;
  margin-bottom: 10px;
}


.value-2 p {
  margin-top: 4px;
  color: #FF8D1A;
  margin-left: 10px;
  font-size: 10px;
}

.custom-button-2-3 {
  background-color: white; /* 白色背景 */
  color: #63D2B4; /* 绿色字体 */
  border: 1px solid #63D2B4; /* 绿色边框 */
  border-radius: 4px; /* 圆角 */
  height:18px;
  margin-left: 20px;
  width: 50px;
  font-size: 10px; /* 调整字体大小，使其变小 */
}

.custom-button-4 {
  background-color: white; /* 白色背景 */
  color: #63D2B4; /* 绿色字体 */
  border: 1px solid #63D2B4; /* 绿色边框 */
  border-radius: 4px; /* 圆角 */
  height:18px;
  width: 50px;
  font-size: 10px; /* 调整字体大小，使其变小 */
}

.dundun-class {
  margin-top: 20px;
  margin-left: 40px;
  height: 30px;
}

.spv-class {
  margin-top: 20px;
  margin-left: 10px;
  height: 15px;
}

.gray-sub-text {
 font-size: 12px;
 margin-left: 40px;
 color: #A6A6A6;
}

.black-sub-text {
 font-size: 12px;
 margin-left: 10px;
 color: black;
}

.divider {
  width: 100%; /* 横线宽度与容器同宽 */
  height: 2px; /* 横线高度 */
  background-color: #E5E5E5; /* 横线颜色，可按需调整 */
  margin: 6px 0; /* 上下外边距，调整横线与div的间距 */
}


::v-deep .el-table__header th {
  color: #000;
  font-size: small;
}
/* 表格内容样式 */
::v-deep .el-table__body td {
  color: #3761F5;
  font-size: small;
}

::v-deep .guzhi-style {
  background-color: white;
  width: 95%;
  box-shadow: inset 1px 1px 6px 10px rgb(156, 164, 204);
} 

::v-deep .guzhi-style-2 {
  background-color: white;
  width: 95%;
  box-shadow: inset 4px 1px 6px 10px rgb(156, 164, 204);
} 

.down-box {
  width: 95%;
  padding: 10px;
  background-color: white;
  text-align: center
  /* box-shadow: inset 1px 1px 6px 10px rgb(156, 164, 204); */
} 


</style>