<template>
  <div class="container">
    <Navbar />
    <div class="main">
      <header class="left">
        <h1 style="font-weight: bold;font-size: 45px;">经智创投</h1>
        <h2 style="font-weight: bold;font-size: 40px;">RBF投融资模式的LLM数智先锋</h2>
        <div class="text">
          <p>ASDT GHJ KLZKCR QWRAPSG SGQHALNKK ASDT GHJ KLZKCR QWRAPSG</p>
          <p>XCXR QWRAPSG SGQHALNKK ASDT GHJ KLZKCR QWRAPSG SGQHALNKK.</p>
        </div>
      </header>

      <!-- 登录表单 -->
      <main class="right">
        <div class="input-group">
          <label>Your Email</label>
          <input type="email" placeholder="123456789@163.com" />
        </div>

        <div class="input-group">
          <label>Password</label>
          <input type="password" placeholder="**********" />
        </div>

        <div class="remember-forgot">
          <label> <input type="checkbox" /> Remember me! </label>
          <a href="#">Forget Password?</a>
        </div>

        <button class="signin-btn" @click="toHome">Sign In</button>

        <div class="separator">OR USE</div>


      </main>


    </div>
    <footer class="footer">
      <p>ASDT GHJ KLZKCR PARKERANK ASDT GHJ KLZ</p>
      <p>XCXR G SGQHALNKK.</p>
    </footer>
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue'
import router from '@/router'
const toHome = () => {
  router.push({
    path: '/home'
  })
}
</script>

<style scoped>
.container {
  height: 100%;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-image: url('../../assets/login-bgm.png');

}

.main {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.left {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.right {
  background-color: white;
  width: 400px;
  padding: 50px;
  gap: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.signin-btn {
  background: #007bff;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.separator {
  text-align: center;
  color: #666;
  position: relative;
  margin: 1rem 0;
}

.signup-btn {
  background: transparent;
  border: 1px solid #007bff;
  color: #007bff;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.footer {
  margin-top: auto;
  text-align: center;
  color: #999;
  font-size: 0.9rem;
  padding: 2rem 0;
}
</style>
