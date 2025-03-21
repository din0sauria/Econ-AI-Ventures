<template>
  <div id="app">
    <navbar style="background-color: black;" />
    <div class="main-content">
      <div class="upper-layout">
        <span class="gray-text">SPV概况</span>
      </div>
      <!-- 下布局 -->
      <div class="lower-layout">
        <el-card v-for="(item, index) in dataList_1" :key="index" class="data-card-1" shadow="always">
          <div class="card-content">
            <span class="title">{{ item.title }}</span>
            <span class="value">{{ item.value }}</span>
            <template v-if="item.subValue">
              <span class="sub-value">{{ item.subValue }}</span>
            </template>
          </div>
        </el-card>

        <el-card v-for="(item, index) in dataList_2" :key="index" class="data-card-2" shadow="always">
          <div class="card-content">
            <span class="title">{{ item.title }}</span>
            <span class="value">{{ item.value }}</span>
            <template v-if="item.subValue">
              <span class="sub-value">{{ item.subValue }}</span>
            </template>
          </div>
        </el-card>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';

import navbar from '@/components/navbar.vue';

const dataList_1 = ref([
  {
    title: '成交总金额（元）',
    value: '8,400,000.00',
    subValue: '份额总数（份） 7,000,000'
  },
])

const dataList_2 = ref([

  {
    title: '',
    value: '5.000%',
    subValue: '(同比提升)'
  },
  {
    title: '数据输入 (KB)',
    value: '0.1500',
    subValue: '(同比提升)'
  },
  {
    title: '查询比',
    value: '10X'
  },
  {
    title: '响应速率',
    value: '10%'
  },
  {
    title: '数据总量',
    value: '35,000,000.00'
  }
]);
</script>


<style scoped>
.main-content {
  background-color: #f9f9f9;
}

.upper-layout {
  margin-bottom: 15px;
}

.gray-text {
  color: #666;
  font-size: 14px;
}

.lower-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.data-card {
  width: 180px;
  padding: 15px;
}

.data-card-1 {
  background-color: rgb(97, 120, 246);
  color: white;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 14px;
  margin-bottom: 5px;
}

.value {
  font-size: 20px;
  font-weight: bold;
}

.sub-value {
  font-size: 12px;
  margin-top: 3px;
}
</style>