  <template>
    <div id="app">
      <!-- 引入导航栏组件 -->
      <navbar />
      <!-- 左右分栏布局 -->
      <div class="main-content">
        <!-- 左边筛选栏 -->




        <div class="left-column">
        <el-button class="custom-button">开始筛选</el-button>
        <el-collapse v-model="activeCollapseItems" @change="handleCollapseChange">
            <el-collapse-item
                v-for="(category, index) in categories"
                :key="index"
                :name="index.toString()"
                :class="{'gray-collapse-item': isCollapseItemActive(index), 'active-collapse-item': isCollapseItemActive(index)}"
                @click="handleCollapseItemClick(index)"
            >
                <template #title>
                    <span class="rectangle" :class="{ 'blue-rectangle': isCollapseItemActive(index) }"></span>
                    <span :class="{ 'blue-text': isCollapseItemActive(index) }">{{ category.title }}</span>
                </template>
                <el-checkbox-group v-model="category.selectedOptions">
                    <el-checkbox v-for="(option, optionIndex) in category.options" :key="optionIndex" :label="option">
                        {{ option }}
                    </el-checkbox>
                </el-checkbox-group>
            </el-collapse-item>
        </el-collapse>
    </div>



        
        <!-- 右边上面搜索栏及下面内容栏 -->
        <div class="right-column">
         
        </div>
      </div>
    </div>
  </template>


<script setup>
import navbar from '@/components/navbar.vue';

import { ref } from 'vue';

// 初始化折叠项状态
const activeCollapseItems = ref([]);


const categories = ref([
  {
    title: '主要行业',
    options: ['餐饮','服务','零售','文体','其他'],
    selectedOptions: []
  },
  {
    title: '分布区域',
    options: ['选项4', '选项5'],
    selectedOptions: []
  },
  {
    title: '初创状态',
    options: ['需求','解决方案','商业模式','增长','壁垒'],
    selectedOptions: []
  },
  {
    title: '风险等级',
    options: ['红（>70分）','橙（50-70分）','绿（<50分）'],
    selectedOptions: []
  },
  {
    title: 'AI推荐指数',
    options: ['1星', '2星','3星','4星','5星'],
    selectedOptions: []
  },
  {
    title: '估值区间',
    options: ['100万以下', '100万-300万', '300万-500万', '500万以上'],
    selectedOptions: []
  }
]);

const isCollapseItemActive = (index) => {
    return activeCollapseItems.value.includes(index.toString());
};

// 处理折叠项点击事件
const handleCollapseItemClick = (index) => {
    const indexStr = index.toString();
    if (activeCollapseItems.value.includes(indexStr)) {
        activeCollapseItems.value = activeCollapseItems.value.filter(item => item!== indexStr);
    } else {
        activeCollapseItems.value.push(indexStr);
    }
};

// 处理折叠项展开/收起事件
const handleCollapseChange = (value) => {
    activeCollapseItems.value = value;
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}

.main-content {
  display: flex;
  height: calc(100vh - 40px); /* 减去导航栏高度 */
}

.left-column {
  flex: 1;
  background-color: #ffffff;
  text-align: center;
}

.right-column {
  flex: 4;
  background-color: #ffffff;
  padding: 20px;
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
  font-size: 16px;
}



.rectangle {
  display: inline-block;
  width: 3px;
  height: 40px;
  margin-right: 8px;
  background-color: white;
  vertical-align: middle;
  transition: background-color 0.3s ease; /* 添加过渡效果 */
}

.blue-rectangle {
  background-color: #3761F5;
}

.blue-text {
  color: #3761F5;
  transition: color 0.3s ease; /* 添加字体颜色过渡效果 */
}

.gray-collapse-item {
    background-color: #f0f0f0;
}

.active-collapse-item {
    background-color: #e0e0e0; /* 改变分类框背景颜色 */
}
</style>    