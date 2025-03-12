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

  </div>
</template>

<script setup>
import navbar from '@/components/navbar.vue'
import { ElDivider, ElSpace, ElCarousel } from 'element-plus'
</script>

<style scoped>
.container {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.bgm {
  position: fixed;
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

.el-title {
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
  color: white;
}

.el-subtitle {
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
  color: white;
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
</style>