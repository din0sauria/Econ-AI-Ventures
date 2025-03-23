<template>
  <div id="app">
    <navbar style="background-color: black;" />
    <div class="main-content">

      <div class="business-header">
        <img :src=spvlistSrc class="spvlist-pic" />

        <div class="search-box">
          <input type="text" placeholder="请输入企业或项目关键词" disabled>
          <span class="magnifier">🔍</span>
        </div>


        <div class="select-wrapper">
          <div class="label-table">币种</div>
          <el-select v-model="currency" placeholder="币种">
            <el-option label="全部" value="all"></el-option>
            <el-option label="RMB" value="rmb"></el-option>
            <el-option label="USD" value="usd"></el-option>
            <el-option label="HKD" value="hkd"></el-option>
          </el-select>
        </div>


        <div class="select-wrapper">
          <div class="label-table">分账方式</div>
          <el-select v-model="distributionMethod" placeholder="分账方式">
            <el-option label="全部" value="all"></el-option>
            <el-option label="自动代扣" value="automatic"></el-option>
            <el-option label="手动转账" value="manual"></el-option>
          </el-select>
        </div>


        <div class="select-wrapper">
          <div class="label-table">分成频率</div>
          <el-select v-model="splitFrequency" placeholder="分成频率">
            <el-option label="全部" value="all"></el-option>
            <el-option label="每天" value="daily"></el-option>
            <el-option label="每月" value="monthly"></el-option>
          </el-select>
        </div>


      </div>


      <div class="business-mid">
        <div><img :src=spvSrc class="spv-pic" /></div>
        <div class="spv-title">单一资产融资载体</div>
        <div>是在XXX挂牌交易的一类资产组合库，份额可以被视为“上市公司”的“股票”或“债券”。</div>
      </div>

      <div class="business-table">
        <el-table :data="tableData" border style="width: 100%" @row-click="$router.push('/skvhome')"           >
          <el-table-column v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label"
            :sortable="true" :align="column.align  || 'center'" />
        </el-table>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';
import spv from '@/assets/spvtab/spv.svg';
const spvSrc = ref(spv);
import spvlist from '@/assets/spvtab/spv_list.svg';
const spvlistSrc = ref(spvlist);

import navbar from '@/components/navbar.vue';
// 模拟表格数据
const tableData = ref([{ 'name': '吨吨', 'spv': 'SPV.100237', 'price': '5', 'income': '1.7751', 'parameter': '611', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '35000000.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': 'KN SPV I', 'spv': 'SPV.100224', 'price': '5.8824', 'income': '1.4853', 'parameter': '525', 'frequency': '每月', 'datetime': '每月23日', 'way': '手动转账', 'value': '2000016.0', 'type': 'USD', 'ddl': '2025-03-03 ' }, { 'name': '初朵集团', 'spv': 'SPV.100131', 'price': '2.2576', 'income': '0.4346', 'parameter': '329', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '6716454.82', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': 'Choco Up SPV I', 'spv': 'SPV.100203', 'price': '4.5349', 'income': '1.0368', 'parameter': '685', 'frequency': '每月', 'datetime': '每月15日', 'way': '手动转账', 'value': '6500021.82', 'type': 'HKD', 'ddl': '2025-03-03 ' }, { 'name': '欧洲智象信息技术有限公司', 'spv': 'SPV.100229', 'price': '6', 'income': '0.3905', 'parameter': '525', 'frequency': '每月', 'datetime': '每月15日', 'way': '手动转账', 'value': '818742.0', 'type': 'USD', 'ddl': '2025-03-03 ' }, { 'name': '荣悦台', 'spv': 'SPV.100132', 'price': '4.2058', 'income': '0.7923', 'parameter': '372', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '5829238.8', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '大牛寿喜烧', 'spv': 'SPV.100134', 'price': '1.822', 'income': '0.3386', 'parameter': '454', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '2699914.3', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '第十四章', 'spv': 'SPV.100227', 'price': '2.5', 'income': '1.2108', 'parameter': '500', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '2500000.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '粤能新能源2号', 'spv': 'SPV.100216', 'price': '13.45', 'income': '0.0219', 'parameter': '378', 'frequency': '每月', 'datetime': '每月28日', 'way': '手动转账', 'value': '2405088.65', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '粤能新能源', 'spv': 'SPV.100208', 'price': '10.7', 'income': '0.4588', 'parameter': '522', 'frequency': '每月', 'datetime': '每月28日', 'way': '手动转账', 'value': '1590448.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '格林酒店集团加盟商_泊津湾_壹号', 'spv': 'SPV.100124', 'price': '2.7342', 'income': '0.5126', 'parameter': '397', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '900008.41', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '乐达永溢', 'spv': 'SPV.100107', 'price': '1.3575', 'income': '0.2115', 'parameter': '435', 'frequency': '每月', 'datetime': '每月1日', 'way': '手动转账', 'value': '769249.1', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': 'OKEY BAKERY', 'spv': 'SPV.100240', 'price': '1.36', 'income': '0.3237', 'parameter': '500', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '506600.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '茗星坊', 'spv': 'SPV.100231', 'price': '2.2913', 'income': '0.9096', 'parameter': '525', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '499989.16', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '蜂派出行', 'spv': 'SPV.100121', 'price': '1.99', 'income': '0.3987', 'parameter': '460', 'frequency': '每月', 'datetime': '每月1日', 'way': '手动转账', 'value': '497500.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '谨愚台球', 'spv': 'SPV.100225', 'price': '1.84', 'income': '0.5519', 'parameter': '426', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '467665.44', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '小美微针', 'spv': 'SPV.100169', 'price': '1.8121', 'income': '0.3503', 'parameter': '406', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '459985.28', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '碧水1号资产包', 'spv': 'SPV.100233', 'price': '10.8695', 'income': '--', 'parameter': '500', 'frequency': '每月', 'datetime': '每月28日', 'way': '手动转账', 'value': '414399.69', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '令狐充新能源', 'spv': 'SPV.100109', 'price': '5.9017', 'income': '0.7945', 'parameter': '544', 'frequency': '每周', 'datetime': '每周第1天', 'way': '手动转账', 'value': '300001.12', 'type': 'HKD', 'ddl': '2025-03-03 ' }, { 'name': 'LEGEND ENERGY智慧光储先锋号', 'spv': 'SPV.100235', 'price': '12.0004', 'income': '--', 'parameter': '500', 'frequency': '每月', 'datetime': '每月28日', 'way': '手动转账', 'value': '189690.32', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '蜜蜂数据矿机', 'spv': 'SPV.100239', 'price': '0.9826', 'income': '0.7407', 'parameter': '500', 'frequency': '每周', 'datetime': '每周第1天', 'way': '手动转账', 'value': '1019.94', 'type': 'USD', 'ddl': '2025-03-03 ' }, { 'name': '南京薏凡特体育发展有限公司', 'spv': 'SPV.100221', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月20日', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '万辉零售', 'spv': 'SPV.100219', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每周', 'datetime': '每周第1天', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '苏州神州鹰网络科技有限公司', 'spv': 'SPV.100220', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月1日', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '恒堡会有限公司10%收入分成', 'spv': 'SPV.100215', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月28日', 'way': '手动转账', 'value': '0.0', 'type': 'HKD', 'ddl': '2025-03-03 ' }, { 'name': '发条鸭无人健身房', 'spv': 'SPV.100218', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': 'MallBook收入分成系统001', 'spv': 'SPV.100217', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月25日', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '秘地壹号', 'spv': 'SPV.100209', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '老友记餐饮', 'spv': 'SPV.100223', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月20日', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '云南大掌柜超市有限公司', 'spv': 'SPV.100226', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '酷享玩家1号', 'spv': 'SPV.100228', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每周', 'datetime': '每周第1天', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '农本方诊所控股有限公司', 'spv': 'SPV.100230', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'HKD', 'ddl': '2025-03-03 ' }, { 'name': '华筑通跨商云', 'spv': 'SPV.100232', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月1日', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': 'LEGEND ENERGY智慧光储南通燕达号', 'spv': 'SPV.100236', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月28日', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '紫鹤光伏优选1号', 'spv': 'SPV.100238', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月27日', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '根本酒店OTA', 'spv': 'SPV.100241', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月10日', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '源潇记', 'spv': 'SPV.100242', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '飞书深诺', 'spv': 'SPV.100104', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月10日', 'way': '自动代扣', 'value': '0.0', 'type': 'USD', 'ddl': '2025-03-03 ' }, { 'name': '童年搭档', 'spv': 'SPV.100129', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '俄士厨房', 'spv': 'SPV.100125', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月1日', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '鹿岛', 'spv': 'SPV.100164', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '--', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '小美严选', 'spv': 'SPV.100167', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '都氏二当家', 'spv': 'SPV.100171', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '网星纵横达人100 SPV1号', 'spv': 'SPV.100105', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月1日', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '薈真集', 'spv': 'SPV.100319', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月1日', 'way': '手动转账', 'value': '0.0', 'type': 'MOP', 'ddl': '2025-03-03 ' }, { 'name': '唐山市路北区大坛子李饭店', 'spv': 'SPV.100162', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月1日', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '礼悦东方壹号', 'spv': 'SPV.100163', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': 'Venturant Group 创丰集团', 'spv': 'SPV.100102', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'USD', 'ddl': '2025-03-03 ' }, { 'name': '重庆容通实业集团', 'spv': 'SPV.100103', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月1日', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '恒美植发', 'spv': 'SPV.100127', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '锋生有限公司10%收入分成', 'spv': 'SPV.100214', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月28日', 'way': '手动转账', 'value': '0.0', 'type': 'HKD', 'ddl': '2025-03-03 ' }, { 'name': '益航科技 WH', 'spv': 'SPV.100159', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月28日', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '上海恋音之季琴行', 'spv': 'SPV.100126', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月1日', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '俏巴渝壹号', 'spv': 'SPV.100201', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '动网智慧体育 SPV1', 'spv': 'SPV.100204', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月28日', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '秘地贰号', 'spv': 'SPV.100205', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '菩圣SPA壹号', 'spv': 'SPV.100206', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '东方山茶', 'spv': 'SPV.100207', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '月采厨房', 'spv': 'SPV.100135', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': 'Nodi', 'spv': 'SPV.100210', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月1日', 'way': '手动转账', 'value': '0.0', 'type': 'HKD', 'ddl': '2025-03-03 ' }, { 'name': '36cake', 'spv': 'SPV.100211', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每天', 'datetime': '--', 'way': '自动代扣', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '福州超体健康科技/超鹿运动', 'spv': 'SPV.100212', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每周', 'datetime': '每周第3天', 'way': '手动转账', 'value': '0.0', 'type': 'RMB', 'ddl': '2025-03-03 ' }, { 'name': '恒堡有限公司10%收入分成', 'spv': 'SPV.100213', 'price': '--', 'income': '--', 'parameter': '--', 'frequency': '每月', 'datetime': '每月28日', 'way': '手动转账', 'value': '0.0', 'type': 'HKD', 'ddl': '2025-03-03 ' }]);

// 定义表格列
const columns = ref([
  { prop: 'name', label: 'SPV名称', align: 'left' },
  { prop: 'spv', label: 'SPV编码', align: 'left' },
  { prop: 'price', label: '价格（元/份额）', align: 'right' },
  { prop: 'income', label: '月收入（元/份额）', align: 'right' },
  { prop: 'parameter', label: '业绩参数（0-1000）', align: 'right' },
  { prop: 'frequency', label: '分成频率', align: 'right' },
  { prop: 'datetime', label: '分成日期', align: 'right' },
  { prop: 'way', label: '分账方式', align: 'right' },
  { prop: 'value', label: '市值(元)', align: 'right' },
  { prop: 'type', label: '币种', align: 'right' },
  { prop: 'ddl', label: '数据截至', align: 'right' },

]);




</script>

<style scoped>
.main-content {
  background-color: #f9f9f9;
}

.business-table {
  padding: 30px;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  width: 200px;
}

.search-button {
  padding: 8px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.business-header {
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  padding: 20px;
}

/* 以下为搜索框 */
.search-box {
  position: relative;
  width: 300px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #ABBDFF;
  /* 修改边框颜色为橙色 */
  background-color: #F7F9FF;
  /* 修改背景颜色为淡粉色 */
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

.el-select {
  width: 150px;
  margin-right: 10px;
  background-color: #ABBDFF;
}

.el-select {
  border: 1px solid #ABBDFF;
  /* 修改边框颜色为橙色 */
  background-color: #ABBDFF;
  /* 修改背景颜色为淡粉色 */
  border-radius: 6px;
}

.el-select .el-input__inner {
  background-color: inherit;
  /* 让输入框内部背景继承父元素颜色 */
}

.select-wrapper {
  color: #888;
  display: flex;
  align-items: center;
}

.label-table {
  color: #324FB8;
  margin-right: 12px;
}

.business-mid {
  padding: 10px;
  font-size: 12px;
  margin-left: 30px;
  color: #383838;
  display: flex;
  align-items: center;
}

.spvlist-pic {
  width: 110px;
}

.spv-pic {
  width: 60px;
  margin-top: 8px;
}

.spv-title {
  margin-right: 10px;
  font-size: 18px;
}

::v-deep .custom-table-row:hover {
    color: #3761F5;
    transition: color 0.2s ease;
}

::v-deep .custom-table-row {
    transition: color 0.2s ease;
    font-size: 13px;
}

::v-deep .custom-table-header {
  background-color: #f0f0f0;
  color: #333;
  font-weight: bold;
  font-size: 11px;
}

</style>