<template>
    <div id="app">
      <navbar style="background-color: black;" />
      <div class="main-content">

      <el-card class="company-info-card">
        <div class="header">
          <div class="logo-and-name">
            <img :src="imageSrc1" alt="公司logo" class="company-logo" />
            <div class="name-without-logo">
                <span class="company-name">{{ companyName }}</span>
                <div class="tag-buttons">
                  <button class="tag-button1">连锁零售巨头</button>
                  <button class="tag-button2">全渠道零售</button>
                </div>
            </div>
          </div>
          <el-button class="follow_button" type="text" @click="handleFollow">关注</el-button>
        </div>

        <div class="info-box">
            <div class="industry-section">
                <span class="value"><p>所属行业：{{ industry }}</p></span>
            </div>
            <div class="introduction-section">
            <span class="value">企业简介：{{ intro }}</span>
            </div>
            <div class="operation-section">
            <span class="value">经营地域：{{ businessArea }}</span>
            </div>
        </div>

        <div class="detail-info-1">
          <el-row :gutter="20">
            <el-col :span="8">
              <p><span>统一社会信用代码：</span>{{ creditCode }}</p>
              <p><span>法定代表人：</span>{{ legalRepresentative }}</p>
              <p><span>注册资本：</span>{{ registerCapital }}</p>
              <p><span>成立日期：</span>{{ establishDate }}</p>
            </el-col>
            <el-col :span="8">
              <p><span>电话：</span>{{ phone }}</p>
              <p><span>邮箱：</span>{{ email }}</p>
              <p><span>官网：</span><a :href="website">{{ website }}</a></p>
              <p><span>地址：</span>{{ address }}</p>
            </el-col>
            <el-col :span="8">
                <p><span>所属行业：</span>{{ industry }}</p>
                <p><span>企业规模：</span>{{ companyScale }}</p>
                <p><span>员工人数：</span>{{ employeeNumber }} (2025)</p>
                <p><span>营业收入：</span>{{ revenue }}亿元 (2023)</p>
            </el-col>
          </el-row>
        </div>

        <div class="bottom-detail-info-2">
            <div class="investment-section">
                <span class="circle-label">{{ labelNumber }}</span>
                <span class="value">创投项目：{{ investmentProjects }}</span>
            </div>
        </div>
      </el-card>

    <el-card class="bottom-detail-info-3">
        <el-tabs v-model:active-name="activeTab">
            <el-tab-pane label="工商信息" name="business">
                <el-table :data="tableData_business" style="tableData_stype">
                    <el-table-column
                    v-for="(column, index) in tableColumns_1"
                    :key="index"
                    :label="column.label"
                    :prop="column.prop"
                    :width="column.width || undefined"
                    />
                </el-table>
                <el-table :data="tableData_business" style="tableData_stype">
                    <el-table-column
                    v-for="(column, index) in tableColumns_2"
                    :key="index"
                    :label="column.label"
                    :prop="column.prop"
                    :width="column.width || undefined"
                    />
                </el-table>
                <el-table :data="tableData_business" style="tableData_stype">
                    <el-table-column
                    v-for="(column, index) in tableColumns_3"
                    :key="index"
                    :label="column.label"
                    :prop="column.prop"
                    :width="column.width || undefined"
                    />
                </el-table>

            </el-tab-pane>

            <el-tab-pane label="企业图谱" name="graph">
                <img :src="corhome2Src"  class="bussiness-pic"/>
            </el-tab-pane>
            
            <el-tab-pane label="股权穿透图" name="equity" >
                <img :src="corhome1Src"  class="bussiness-pic"/>
            </el-tab-pane>
        
        </el-tabs>
   </el-card>


<div class="bottom-detail-info-4">


    <div class="left-nav">
        <el-button  class="button-chuangtou-shade"> </el-button>
        <el-button  class="button-chuangtou-title">创投项目</el-button>
        <el-button  class="button-chuangtou-select">进行中 2</el-button>
        <el-button  class="button-chuangtou">待开始 0</el-button>
        <el-button  class="button-chuangtou">已结束 3</el-button>
        <el-button  class="button-chuangtou">已参与 0</el-button>
        <el-button  class="button-chuangtou-new" @click="$router.push('/newproj')">为企业创建新项目</el-button>
    </div>

    

    <div class="right-content">
      <div v-for="(block, index) in 1" :key="index" class="block">
        <el-card>
          <div class="block-header" @click="$router.push('/proj')">
            <img :src=fireSrc  class="firepic" />
            <span>老乡鸡餐饮</span>
          </div>
          <div class="block-info">
            <span>最新融资轮次：B轮</span>
            <!-- <span>最新融资轮次：C轮</span> -->
            <span>成立时间：2003-10-01</span>

          </div>
          <div class="block-desc">
            <p>
              项目简介：老乡鸡餐饮是安徽省连锁快餐企业，研发出竹笋蒸鸡翅、鸡汁腊鱼、凤爪蒸豆米、香草鸡翅等系列菜品，以“健康、营养、美味、快速”的特色，赢得了广大消费者的青睐。老乡鸡餐厅已达240余家，并且在持续发展中。老乡鸡快餐店实行24小时营业，并提供全天候外卖送餐服务，隶属于安徽老乡鸡餐饮有限公司。 </p>
          </div>
          <div class="block-desc">
            <p>所属地：安徽省</p>
        </div>         
        </el-card>
      </div>

      <div v-for="(block, index) in 1" :key="index" class="block">
        <el-card>
          <div class="block-header">
            <img :src=fireSrc  class="firepic" />
            <span>老乡鸡</span>
          </div>
          <div class="block-info">
            <span>最新融资轮次：C轮</span>
            <span>成立时间：2003</span>

          </div>
          <div class="block-desc">
            <p>
              项目简介：老乡鸡是安徽省连锁快餐企业，研发出竹笋蒸鸡翅、鸡汁腊鱼、凤爪蒸豆米、香草鸡翅等系列菜品，以“健康、营养、美味、快速”的特色，赢得了广大消费者的青睐。老乡鸡餐厅已达240余家，并且在持续发展中。老乡鸡快餐店实行24小时营业，并提供全天候外卖送餐服务，隶属于安徽老乡鸡餐饮有限公司。 </p>
          </div>
          <div class="block-desc">
            <p>所属地：安徽省</p>
        </div>         
        </el-card>
      </div>

    </div>


</div>


    </div>
</div>
  </template>
  
  <script setup>
  import navbar from '@/components/navbar.vue';
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
import logo1 from '@/assets/cortab/cor1.png'; 
const imageSrc1 = ref(logo1);


import corhome1 from '@/assets/corhometab/corhome1.png'; 
const corhome1Src = ref(corhome1);
import corhome2 from '@/assets/corhometab/corhome2.png'; 
const corhome2Src = ref(corhome2);
import fire from '@/assets/corhometab/fire.png'; 
const fireSrc = ref(fire);
  

  
  // 公司信息数据
  const companyName = '安徽老乡鸡餐饮有限公司';
  const companyTags = ['连锁零售巨头', '全渠道零售'];
  const industry = '餐饮';
  const intro = '安徽老乡鸡餐饮有限公司是一家从事餐饮服务,食品销售,食品生产等业务的公司，成立于2003年10月22日，公司坐落在安徽省，详细地址为：安徽省合肥市蜀山区经济开发区湖光路自主创新产业基地三期（南区）B座12层1288室。';
  const businessArea = '安徽省合肥市蜀山区';
  const creditCode = '913401007548775701';
  const legalRepresentative = '王琴琴';
  const registerCapital = '69616.359100万元人民币';
  const establishDate = '2003年10月22日';
  const phone = '400-766-1777';
  const email = 'lxj@lxjchina.com.cn';
  const website = 'https://lxjchina.com.cn/';
  const address = '安徽省合肥市蜀山区经济开发区湖光路自主创新产业基地三期（南区）B座12层1288室;';
  const companyScale = '大型';
  const employeeNumber = '10926人';
  const revenue = '56.51';
  const labelNumber = 2;
  const investmentProjects = '2个';  

  const tableData_business = [{
  统一社会信用代码: '法定代表人',
  '913401007548775701': '王琴琴',
  企业名称: '登记状态',
  '安徽老乡鸡餐饮有限公司': '开业',
  曾用名: '成立日期',
  '安徽老乡鸡餐饮股份有限公司': '2003年10月22日',
  所属行业: '纳税人识别号',
  '75487757-0': '其他有限责任公司',
  组织机构代码: '企业类型',
  注册资本: '工商注册号',
  '69,626.3591万元': '340100000004576',
  参保人数: '所属地区',
  餐饮业: '913401007548775701',
  '10926人': '安徽省',
  纳税人资质: '登记机关',
  '增值税一般纳税人': '合肥市市场监督管理局',
  登记机关: '英文名',
  营业期限: '核准日期',
  '2003-10-22 至 无固定期限': '2024-07-31',
  核准日期: '进出口企业代码',
  经营范围: '一般经营项目: 程控交换机、传输设备……'
}];



const tableColumns_1 = [
  { label: '统一社会信用代码', prop: '统一社会信用代码' },
  { label: '913401007548775701', prop: '913401007548775701' },
  { label: '企业名称', prop: '企业名称' },
  { label: '安徽老乡鸡餐饮有限公司', prop: '安徽老乡鸡餐饮有限公司' },
  { label: '曾用名', prop: '曾用名' },
  { label: '安徽老乡鸡餐饮股份有限公司', prop: '安徽老乡鸡餐饮股份有限公司' },
];

const tableColumns_2 = [
  { label: '组织机构代码', prop: '组织机构代码' },
  { label: '75487757-0', prop: '75487757-0' },
  { label: '注册资本', prop: '注册资本' },
  { label: '69,626.3591万元', prop: '69,626.3591万元' },
  { label: '所属行业', prop: '所属行业' },
  { label: '餐饮业', prop: '餐饮业' },
];

const tableColumns_3 = [
  { label: '参保人数', prop: '参保人数' },
  { label: '10926人', prop: '10926人' },
  { label: '营业期限', prop: '营业期限' },
  { label: '2003-10-22 至 无固定期限', prop: '2003-10-22 至 无固定期限' },
  { label: '纳税人资质', prop: '纳税人资质' },
  { label: '增值税一般纳税人', prop: '增值税一般纳税人' },
];

const tableColumns_4 = [
  { label: '国标行业', prop: '国标行业' },
  { label: '国标行业', prop: '国标行业' },
  { label: '登记机关', prop: '登记机关' },
  { label: '登记机关', prop: '登记机关' },
  { label: '核准日期', prop: '核准日期' },
  { label: '核准日期', prop: '核准日期' },
];



  const handleFollow = () => {
  ElMessage.success('已关注！');
};


// 定义当前激活的选项卡，默认显示工商信息
const activeTab = ref('business'); 


  </script>
  
  <style scoped>
.main-content {
    background-color: #f0f0f0;
}
  .company-info-card {
    width: 100%;
    padding: 20px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .logo-and-name {
    display: flex;
    align-items: center;
  }
  .name-without-logo{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .company-logo {
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }
  .company-name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  .tags {
    margin-bottom: 10px;
  }
  .info-section p,

  .detail-info-1 {  
    margin-top: 20px;
    background-color: rgba(55, 97, 245, 0.04)
  }

  .detail-info-1 p {
    font-size: 14px;
    margin: 5px 0;
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
  border-radius: 5px; 
  padding: 5px 10px;  
  cursor: pointer; 
}

.follow_button {
      border: 1px solid #ccc; /* 灰色边框，1px宽度 */
      border-radius: 4px; /* 圆角，数值可根据需求调整 */
      padding: 6px 12px; /* 内边距，调整按钮内文字与边框的距离 */
      color: black; /* 初始文字颜色为黑色 */
      cursor: pointer; /* 鼠标悬停时显示指针样式 */
      transition: all 0.3s ease; /* 过渡效果，让变化更平滑 */
    }
    .follow_button::before {
      content: "\2606"; /* Unicode编码表示空心五角星 */
      display: inline - block;
      margin-right: 5px; /* 调整五角星与文字的间距 */
    }
   .follow_button:hover {
      border: 1px solid #ccc; /* 灰色边框，1px宽度 */
      border-radius: 4px; /* 圆角，数值可根据需求调整 */
      color: #3761F5; /* 鼠标悬浮时文字改为灰色 */
    }

.info-box{
    margin-top: 15px;
    font-size: 14px;
}

.info-box p {
    font-size: 14px;
    font-weight: bold;
  }

.introduction-section {
    margin-top: 3px;
    margin-bottom: 3px;  
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

.bottom-detail-info-2 {
  font-size: 13px;
  margin-top: 10px;
  color: #3761F5;
}

.bottom-detail-info-3 {
    margin-top: 25px;
    margin-left: 25px;
    margin-right: 25px;
}

.bottom-detail-info-4 {
    display: flex;
    flex-direction: row;
    padding: 25px;
    gap: 25px;
}

.bussiness-pic {
    width: 100%;
}

.tableData_stype {
    width: 100%;
    color: #3f3f3f!important;
}

.left-nav {
  flex:1;
  height: 310px;
  background-color: white;
  box-shadow: 5px 5px 10px 0 rgba(153, 153, 153, 0.3); 
  align-items: center;
}
.nav-item {
  padding: 10px;
  cursor: pointer;
}
.nav-item.active {
  background-color: #e0e0e0;
}
.right-content {
  flex: 2;
  display: flex;
  flex-direction: row;
  gap: 30px;

}
.block {
  width: 50%;
  height: 300px;
}
.block-header {
    display: flex;
    align-items: center;
  margin-bottom: 10px;
  margin-left: 0px;
  transition: color 0.2s ease;
}

.block-header > * {
  margin-right: 5px; /* 元素右侧添加10px的外边距，可根据需求调整 */
}

.block-header:hover{
  color: #3761F5;
  transition: color 0.2s ease;
}

.block-info {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
  margin-bottom: 10px;
}

.block-desc {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
  margin-bottom: 10px;
}

.button-chuangtou-title {
    font-size: 16px;
    border: 1px solid white; 
    width: 60%;
    margin-bottom: 10px;
}

.button-chuangtou {
    margin-bottom: 5px;
    width: 60%;
}

.button-chuangtou-select {
    margin-bottom: 5px;
    width: 60%;
    color: white;
    background-color: #3761F5;
}

.button-chuangtou-new {
  margin-top: 10px;
    margin-bottom: 5px;
    width: 60%;
    color: #3761F5;
    background-color: white;
    border: 1px solid #3761F5;

}

.button-chuangtou-shade{
    border: 1px solid white; 
    width: 60%;

}

.firepic {
  width: 19px;
  height: 22px;
}

</style>