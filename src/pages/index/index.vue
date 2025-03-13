<template>
  <div class="bgm">
    <el-carousel height="80vh" motion-blur interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="bgmimg" src="../../assets/home-bgm.png">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="container">
    <navbar />
    <header class="left">
      <div class="header-content">
        <h1 style="font-size: 45px">经智创投</h1>
        <h2 style="font-size: 40px">RBF投融资模式的LLM数智先锋</h2>
        <el-divider class="custom-divider" />
        <div class="text">
          <el-space direction="vertical" :size="20">
            <p>ASDT GHJ KLZKCR QWRAPSG SGQHALNKK ASDT GHJ KLZKCR QWRAPSG</p>
            <p>XCXR QWRAPSG SGQHALNKK ASDT GHJ KLZKCR QWRAPSG SGQHALNKK.</p>
          </el-space>
        </div>
      </div>
    </header>
    <div style="font-size: 20px;color:white;margin-left: 100px;font-weight: bold;z-index: 1;">最新动态</div>
    <div class="sth" style="height: 100px;"></div>
    <div style="font-size: 20px;color:white;margin-left: 100px;font-weight: bold;">产品功能</div>
    <div class="fun" style="display: flex;">
      <div class="left-content">
        <el-tabs v-model="activeTab" tab-position="right" class="left-tabs" stretch>
          <el-tab-pane v-for="tab in tabList" :key="tab.name" :label="tab.label" :name="tab.name" class="left-tab"
            :stretch="true">
            <template #label>
              <div style="display: block;">
                <div class="tab-label">{{ tab.label }}</div>
                <div class="tab-into">{{ tab.description }}</div>
              </div>
            </template>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="right-content">
        <div class="image-container">
          <img :src="currentTab.image" :alt="currentTab.label" class="feature-image" />
        </div>
        <div class="description">
          {{ currentTab.description }}
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import navbar from '@/components/navbar.vue'
import { ElDivider, ElSpace, ElCarousel } from 'element-plus'
import { ref, computed } from 'vue';

// 图片需要放在public或assets目录，这里假设放在assets/images
const tabList = ref([
  {
    name: 'diligence',
    label: '尽调智理功能',
    image: new URL('../../assets/image.png', import.meta.url).href,
    description: '尽调智理功能'
  },
  {
    name: 'canvas',
    label: '多阶智导画布',
    image: new URL('../../assets/image.png', import.meta.url).href,
    description: '多阶智导画布'
  },
  {
    name: 'expert',
    label: '专家智萃中心',
    image: new URL('../../assets/image.png', import.meta.url).href,
    description: '专家智萃中心'
  },
  {
    name: 'private',
    label: '私募智慧空间',
    image: new URL('../../assets/image.png', import.meta.url).href,
    description: '私募智慧空间'
  },
  {
    name: 'chain',
    label: '全链智溯系统',
    image: new URL('../../assets/image.png', import.meta.url).href,
    description: '全链智溯系统'
  }
]);

const activeTab = ref(tabList.value[0].name);

const currentTab = computed(() =>
  tabList.value.find(tab => tab.name === activeTab.value)
);

</script>

<style scoped>
.container {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1B1F25;
}

.bgm {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: auto;
}

.bgmimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.left {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  width: 50%;
  height: 450px;
  z-index: 1;
}

.header-content {
  padding: 2rem;
}

.custom-divider {
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.5rem 0;
}

.text p {
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
}

.fun {
  padding: 20px;
  height: max-content;
}

.el-tabs {
  --el-tabs-header-height: 100px;
}

::v-deep .el-tabs__item {
  padding: 32px;
  color: #ccc;
}

.tab-label {
  font-size: 32px;
}

.left-content {
  flex: 1;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-content {
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 600px;
  width: 800px;
}

.feature-image {
  object-fit: cover;
  overflow: hidden;
}

.description {
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}
</style>