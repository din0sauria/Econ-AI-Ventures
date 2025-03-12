<template>
  <div class="container">
    <!-- 导航栏保留原有组件 -->
    <navbar />

    <header class="left">
      <el-card shadow="never" class="header-card">
        <div class="header-content">
          <h1 class="el-title" style="font-size: 45px;">经智创投</h1>
          <h2 class="el-subtitle" style="font-size: 40px;">RBF投融资模式的LLM数智先锋</h2>
          <el-divider class="custom-divider" />
          <div class="text">
            <el-space direction="vertical" :size="20">
              <p>ASDT GHJ KLZKCR QWRAPSG SGQHALNKK ASDT GHJ KLZKCR QWRAPSG</p>
              <p>XCXR QWRAPSG SGQHALNKK ASDT GHJ KLZKCR QWRAPSG SGQHALNKK.</p>
            </el-space>
          </div>
        </div>
      </el-card>
    </header>

  </div>
</template>

<script setup>
import navbar from '@/components/navbar.vue'
import { ElCard, ElDivider, ElSpace } from 'element-plus'
</script>

<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: no-repeat url('../../assets/home-bgm.png');
  background-size: cover;
}

.left {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
}

.header-card {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: fit-content;
  backdrop-filter: blur(5px);
}

.header-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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