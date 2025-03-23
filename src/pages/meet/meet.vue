<template>
    <div id="app">
      <navbar style="background-color:black;"/>
        <div class="main-content-1">
          <div class="block-11">
            <div class="par-box">
              <img :src="par1Src" alt="Logo" class="par-class" />
              加入会议
            </div>


            <div class="par-box">
              <img :src="par2Src" alt="Logo" class="par-class" />
              预约会议
            </div>
            <div class="par-box">
              <img :src="par3Src" alt="Logo" class="par-class" />
              快速会议
            </div>
          </div>
          <div class="block-12">
            <div class="meeting-header">
              <span>会议安排</span>
              <div class="divider"></div>
            </div>
            <el-table
              :data="meetingList"
              border
              class="datatable-12"
            >
              <el-table-column type="selection" width="50"></el-table-column>
              <el-table-column
                prop="meetingTime"
                label="会议时间"
              ></el-table-column>
              <el-table-column
                prop="projectName"
                label="项目名称"
              >
              <template #default="{ row }">
                <span :style="{ color: '#3761F5' }">{{ row.projectName }}</span>
              </template>
              </el-table-column>
              <el-table-column
                prop="participantNumber"
                label="参会人数"
              ></el-table-column>
            </el-table>
          </div>


          <div class="block-21">

            <div class="meeting-header">
              <span>通讯录</span>
              <div class="divider"></div>
            </div>
              <el-table
                :data="tableData_2"
                border
                style="width: 100%;"
              >
                <el-table-column
                  prop="name"
                  label="名称"
                  width="64"

                >
                
              </el-table-column>
                <el-table-column
                  prop="remark"
                  label="备注"
                  width="150"
                >
              </el-table-column>
                <el-table-column
                  prop="identity"
                  label="身份"
                  width="77"
                >
                <template #default="{ row }">
                  <span :style="getContentColor(row.identity)">{{ row.identity }}</span>
                </template>
                </el-table-column>
              </el-table>
          </div>


          <div class="block-22">
            <div class="meeting-header">
              <span>会议录制</span>
              <div class="divider"></div>
            </div>
            <div class="recording-container">
              <div 
                v-for="(item, index) in recordingList" 
                :key="index" 
                class="recording-item"
              >
                  <img :src="item.pic"  alt="Logo" class="thumbnail" />
                
                <div class="info">
                  <div class="project-name">项目名称 {{ item.projectName }}</div>
                  <div class="meeting-info">
                    <span>{{ item.meetingTime }}</span>
                    <span>人数 {{ item.participantNumber }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';

import navbar from '@/components/navbar.vue';

import par1 from '@/assets/meettab/par1.svg'
const par1Src = ref(par1);

import par2 from '@/assets/meettab/par2.svg'
const par2Src = ref(par2);

import par3 from '@/assets/meettab/par3.svg'
const par3Src = ref(par3);


import meet1 from '@/assets/meettab/meet1.jpg'; 
import meet2 from '@/assets/meettab/会议2.png'; 
import meet3 from '@/assets/meettab/会议3.png'; 
import meet4 from '@/assets/meettab/会议4.png'; 



import logo1 from '@/assets/cortab/cor1.png'; 
const imageSrc1 = ref(logo1);




const meetingList = ref([
  {
    meetingTime: '2025-03-02 15:30-16:40',
    projectName: '老乡鸡项目私董智汇会议',
    participantNumber: '6人',
  },
  {
    meetingTime: '2025-03-05 14:00-15:30',
    projectName: '老乡鸡供应链优化研讨会',
    participantNumber: '8人',
  },
  {
    meetingTime: '2025-03-10 10:00-11:30',
    projectName: '老乡鸡市场拓展策略会议',
    participantNumber: '7人',
  },
  {
    meetingTime: '2025-03-15 13:30-15:00',
    projectName: '老乡鸡品牌建设专题会议',
    participantNumber: '5人',
    pic: meet4
  }
]);

const tableData_2 = ref([
  { name: '束从轩', remark: '老乡鸡创始人兼董事长', identity: '融资主体' },
  { name: '张瑞婷', remark: '老乡鸡首席执行官', identity: '融资主体' },
  { name: '陈思明', remark: '中信证券RBF业务部高级经理', identity: '卖方' },
  { name: '刘静', remark: '高瓴资本合伙人', identity: '投资人' },
  { name: '林晓峰', remark: '老乡鸡资深投资人', identity: '投资人' },
  { name: '杨晨', remark: '艾媒咨询餐饮行业首席分析师', identity: '专家' },
  { name: '王芳', remark: '老乡鸡市场总监', identity: '融资主体' },
  { name: '陈伟', remark: '老乡鸡财务总监', identity: '融资主体' },
  { name: '刘洋', remark: '老乡鸡运营总监', identity: '融资主体' },
  { name: '张伟', remark: '老乡鸡产品研发总监', identity: '融资主体' },
  { name: '孙娜', remark: '老乡鸡人力资源总监', identity: '融资主体' },
  { name: '周杰', remark: '老乡鸡供应链管理总监', identity: '融资主体' },
  { name: '李强', remark: '知名餐饮行业分析师', identity: '专家' },
  { name: '赵敏', remark: '餐饮市场趋势研究员', identity: '专家' }
]);

const recordingList = ref([
  {
    projectName: '老乡鸡项目私董智汇会议',
    meetingTime: '03-02 15:30-16:40',
    participantNumber: '6人',
    pic: meet1
  },
  {
    projectName: '老乡鸡供应链优化研讨会',
    meetingTime: '03-05 14:00-15:30',
    participantNumber: '8人',
    pic: meet2
  },
  {
    projectName: '老乡鸡市场拓展策略会议',
    meetingTime: '03-10 10:00-11:30',
    participantNumber: '7人',
    pic: meet3
  },
  {
    projectName: '老乡鸡品牌建设专题会议',
    meetingTime: '03-15 13:30-15:00',
    participantNumber: '5人',
    pic: meet4
  }
]);

const setColumnColor = () => {
  return {
    color: '#3761F5'
  };
};

const getContentColor = (content) => {
  if (content == '投资人') {
    return { color: '#2D6FF7' };
  } else if (content == '融资主体') {
    return { color: '#FF8D1A' };
  }
  return { color: '#FFC994' }; // 默认颜色，可按需调整
};

</script>

<style scoped>
.main-content-1 {
  background-color: #f9f9f9;
  display: grid;
  grid-template-columns: repeat(2, auto); /* 两列，宽度自适应 */
  grid-template-rows: repeat(2, auto); /* 两行，高度自适应 */
  gap: 20px; /* 块之间的间隔 */
  justify-content: center; /* 水平居中 */
  align-content: center; /* 垂直居中 */
  padding: 20px;
}

.block-11 {
  width: 350px; 
  height: 270px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  background-color: white;
  box-shadow: 5px 5px 10px 0 rgba(153, 153, 153, 0.3); 
  padding: 60px;
  border-radius: 15px 15px 15px 15px;
  align-items: center;
  justify-content: center;
}

.block-12 {
  width: 700px; 
  height: 270px;
  padding: 15px 30px 15px 30px;
  background-color: white;
  color: black;
  font-size: 12px;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 5px 5px 10px 0 rgba(153, 153, 153, 0.3); 
}

.block-21 {
  color: black;
  font-size: 12px;
  padding: 15px 30px 15px 30px;
  width: 350px; 
  height: 800px;
  background-color: white;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 5px 5px 10px 0 rgba(153, 153, 153, 0.3); 
}

.block-22 {
  width: 700px; 
  padding: 15px 30px 15px 30px;
  height: 800px;
  color: black;
  background-color: white;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 5px 5px 10px 0 rgba(153, 153, 153, 0.3); 
  font-size: small;
}

.divider {
  width: 100%; /* 横线宽度与容器同宽 */
  height: 1px; /* 横线高度 */
  background-color: #E5E5E5; /* 横线颜色，可按需调整 */
  margin-top: 10px;
  margin-bottom: 10px;
}

.par-box {
  color: black;
  font-size: small;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:5px;
}

.par-class {
  width: 40px;
  height: 40px;
  background-color: rgb(89,109,248);
  padding: 8px;
  border-radius: 5px;
  transition: width 0.2s ease, height 0.2s ease;
}

.par-class:hover {
  width: 45px;
  height: 45px;
  transition: width 0.2s ease, height 0.2s ease;
}


:deep(.el-table__header) th {
  color: #000;
  font-size: small;
  border-bottom: none;
  line-height: 10px;
}
/* 表格内容样式 */
:deep(.el-table__body) td {
  color: black;
  font-size: small!important;
  line-height: 10px;
  border-bottom: none;
}
:deep(.el-table__header) tr {
  height: 30px; 
  font-size: small!important;
}

.datatable-12{
  width: 100%; margin-top: 10px;
}

.recording-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 四列，平均分配宽度 */
  grid-template-rows: repeat(2, auto); /* 两行，高度自适应 */
  gap: 20px; /* 元素之间的间隔 */
}

.recording-item {
  display: flex;
  flex-direction: column;
}

.thumbnail {
  width: 100%;
  height: 150px;
  background-color: #ccc; /* 灰色背景模拟缩略图 */
  border-radius: 5px;
  margin-bottom: 10px;
}

.info {
  display: flex;
  flex-direction: column;
}

.project-name {
  margin-bottom: 5px;
}

.meeting-info {
  display: flex;
  justify-content: space-between;
}
</style>