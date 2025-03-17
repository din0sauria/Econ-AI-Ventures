<template>
  <div class="bgm">
    <el-carousel height="80vh" motion-blur interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="bgmimg" src="../../assets/home-bgm.png" />
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
    <div style="font-size: 20px; color: white; margin-left: 100px; font-weight: bold; z-index: 1;">最新动态</div>
    <div class="sth" style="height: 100px;"></div>
    <div style="font-size: 20px; color: white; margin-left: 100px; font-weight: bold;">产品功能</div>
    <div class="fun" style="display: flex;">
      <div class="left-content">
        <el-tabs v-model="activeTab" tab-position="right" class="left-tabs" stretch>
          <el-tab-pane v-for="tab in tabList" :key="tab.name" :label="tab.label" :name="tab.name" class="left-tab">
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
        <div class="grid-container">
          <div v-for="(image, index) in currentTabImages" :key="index" class="grid-item">
            <img :src="getImage(image.imgurl)" class="grid-image" :alt="image.caption" loading="lazy" />
            <div class="image-caption">{{ image.caption }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import navbar from '@/components/navbar.vue';
import { ElDivider, ElSpace, ElCarousel } from 'element-plus';
import { ref, computed } from 'vue';

const getImage = (imgurl) => {
  if (!imgurl) return '';
  try {
    return new URL(`${imgurl}`, import.meta.url).href;
  } catch (error) {
    console.error('Invalid image path:', imgname);
  }
};

// 图片需要放在public或assets目录，这里假设放在assets/images
const tabList = ref([
  {
    name: 'diligence',
    label: '尽调智理功能',
    images: [
      { imgurl: '../../assets/hometab/尽调-上传.png', caption: '上传' },
      { imgurl: '../../assets/hometab/尽调-提取.png', caption: '提取' },
      { imgurl: '../../assets/hometab/尽调-编辑.jpg', caption: '编辑' },
      { imgurl: '../../assets/hometab/尽调-同步.jpg', caption: '同步' }
    ],
    description: '创新多模态数据结构化处理赋能画布'
  },
  {
    name: 'canvas',
    label: '多阶智导画布',
    images: [
      { imgurl: '../../assets/hometab/多阶-智能生成.webp', caption: '智能生成' },
      { imgurl: '../../assets/hometab/多阶-材料上传.jpg', caption: '材料上传' },
      { imgurl: '../../assets/hometab/多阶-AI建议.webp', caption: 'AI建议' },
      { imgurl: '../../assets/hometab/多阶-历史迭代.jpg', caption: '历史迭代' }
    ],
    description: '多模块画布智能迭代覆盖全场景运用'
  },
  {
    name: 'private',
    label: '私董智汇空间',
    images: [
      { imgurl: '../../assets/hometab/私董-预约.jpg', caption: '预约' },
      { imgurl: '../../assets/hometab/私董-交互.jpg', caption: '交互' },
      { imgurl: '../../assets/hometab/私董-纪要.png', caption: '纪要' },
      { imgurl: '../../assets/hometab/私董-优化.jpeg', caption: '优化' }
    ],
    description: '智能投融协作视频会议AI辅助三阶推进'
  },
  {
    name: 'expert',
    label: '专家智萃中心',
    images: [
      { imgurl: '../../assets/hometab/专家-智能推荐.png', caption: '智能推荐' },
      { imgurl: '../../assets/hometab/专家-深度挖掘.jpg', caption: '深度挖掘' },
      { imgurl: '../../assets/hometab/专家-交互问答.jpg', caption: '交互问答' },
      { imgurl: '../../assets/hometab/专家-辅助决策.jpg', caption: '辅助决策' }
    ],
    description: '专家访谈智能整合知识服务支持决策'
  },
  {
    name: 'chain',
    label: '全链智溯系统',
    images: [
      { imgurl: '../../assets/hometab/全链-spv列表.jpg', caption: 'spv列表' },
      { imgurl: '../../assets/hometab/全链-我的投资.jpg', caption: '我的投资' },
      { imgurl: '../../assets/hometab/全链-我的投资2.jpg', caption: '更多投资' },
      { imgurl: '../../assets/hometab/全链-项目管理.jpeg', caption: '项目管理' }
    ],
    description: '区块链全链条追溯智能合约透明投研'
  }
]);

const activeTab = ref('diligence'); // 设置默认值

const currentTab = computed(() =>
  tabList.value.find(tab => tab.name === activeTab.value) || {}
);

const currentTabImages = computed(() => currentTab.value.images || []);

</script>

<style scoped>

.container {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1B1F25;
  box-sizing: border-box;
}

.bgm {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: auto;
  box-sizing: border-box;
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
:deep( .el-tabs__item) {
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  width: 800px;
  margin: 0 auto;
}

.grid-item {
  position: relative;
  aspect-ratio: 1.5;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item:hover .grid-image {
  transform: scale(1.05);
}

.image-caption {
  position: absolute;
  right: 15px;
  bottom: 15px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  backdrop-filter: blur(2px);
}
</style>