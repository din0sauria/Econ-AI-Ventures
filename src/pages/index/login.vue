<template>
  <div class="container">
    <Navbar />
    <div class="main">
      <header class="left">
        <div class="header-content">
          <h1 style="font-size: 45px">经智创投</h1>
          <h2 style="font-size: 40px">RBF投融资模式的LLM数智先锋</h2>
          <el-divider class="custom-divider" />
          <div class="text">
            <el-space direction="vertical" :size="20">
              <p>Revolutionizing RBF with LLM-driven precision—bridging data, scalability, and trust for smarter
                investment ecosystems.</p>
            </el-space>
          </div>
        </div>
      </header>

      <!-- 登录表单 -->
      <main class="right">
        <el-form label-position="top" class="login-form">
          <el-form-item label="Your Email">
            <el-input type="email" placeholder="123456789@163.com" size="large" v-model="email" />
          </el-form-item>

          <el-form-item label="Password">
            <el-input type="logo-item" placeholder="**********" show-password size="large" v-model="pwd" />
          </el-form-item>

          <div class="remember-forgot">
            <el-checkbox>Remember me!</el-checkbox>
            <el-link type="primary" :underline="false">Forget Password?</el-link>
          </div>

          <el-button type="primary" size="large" class="signin-btn" @click="toHome">
            Sign In
          </el-button>

          <el-divider class="separator">OR USE</el-divider>

        </el-form>
        <div class="social-media">
          <div class="social-icon" style="display: flex;justify-content: space-around;">
            <img src="../../assets/支付宝_logo.png" width="32px" height="32px" />
            <img src="../../assets/qq_symbol.png" width="32px" height="32px" />
            <img src="../../assets/wx_logo.png" width="32px" height="32px" />
            <el-icon size="32px">
              <MoreFilled />
            </el-icon>
          </div>

        </div>
      </main>
    </div>

  </div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue'
import router from '@/router'
import { ElDivider, ElSpace, ElForm, ElFormItem, ElInput, ElCheckbox, ElLink, ElButton } from 'element-plus'
import { MoreFilled } from '@element-plus/icons-vue';
import { ref } from 'vue'
const email = ref('')
const pwd = ref('')
const toHome = () => {
  router.push({
    path: '/home'
  })
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-image: url('../../assets/login-bgm.png');
  background-size: cover;
}

.main {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 2rem;
}

.left {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 450px;
}

.right {
  background-color: white;
  width: 400px;
  min-height: 500px;
  padding: 50px;
  border-radius: 10px;
}

.header-content {
  padding: 2rem;
}

.custom-divider {
  background-color: rgba(255, 255, 255, 0.3);
  margin: 1rem 0;
}

.text p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

:deep(.el-form-item__label) {
  font-weight: bold;
  color: #666;
  padding-bottom: 8px;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.signin-btn {
  width: 100%;
  font-size: 16px;
  letter-spacing: 1px;
}

.separator {
  color: #666;
  margin: 1.5rem 0;
}

.footer {
  margin-top: auto;
  text-align: center;
  color: #999;
  font-size: 0.9rem;
  padding: 2rem 0;
}
</style>