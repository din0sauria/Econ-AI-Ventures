<template>
  <div class="container">
    <!-- 导航栏 -->
    <navbar />

    <header class="left">
      <h1 style="font-weight: bold;font-size: 45px;">经智创投</h1>
      <h2 style="font-weight: bold;font-size: 40px;">RBF投融资模式的LLM数智先锋</h2>
      <div class="text">
        <p>ASDT GHJ KLZKCR QWRAPSG SGQHALNKK ASDT GHJ KLZKCR QWRAPSG</p>
        <p>XCXR QWRAPSG SGQHALNKK ASDT GHJ KLZKCR QWRAPSG SGQHALNKK.</p>
      </div>
    </header>

  </div>
</template>

<script setup>
import navbar from '@/components/navbar.vue'
import { ref } from 'vue'


</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('../../assets/home-bgm.png')
}

.left {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-left: 10%;
}

/* 主要内容区域样式 */
.content {
  flex: 1;
  padding: 2rem 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.business-section,
.news-section {
  flex: 1;
  min-width: 300px;
}

.business-content {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.business-card {
  flex: 1;
  min-width: 200px;
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.news-item {
  padding: 1rem;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
