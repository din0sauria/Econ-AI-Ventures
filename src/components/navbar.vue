<template>
  <nav class="nav-container">
    <el-menu mode="horizontal" class="nav-menu" :ellipsis="false" background-color="transparent" text-color="#fff"
      active-text-color="#fff">
      <!-- Logo部分 -->
      <div class="logo-item" @click="$router.push('/home')" style="cursor: pointer;">
        <img src="@/assets/logo.svg" />
        <p class="brand-name">经智创投</p>
      </div>

      <!-- 自动填充空白 -->
      <div class="flex-grow"></div>

      <!-- 导航菜单项 -->

      <el-menu-item index="expert" class="nav-item" @click="$router.push('/expert')">专家智萃</el-menu-item>
      <!-- 修改 -->
      <el-menu-item index="project" class="nav-item" @click="$router.push('/cor')">企业项目</el-menu-item>

      <el-menu-item index="fund" class="nav-item">私董智库</el-menu-item>
      <el-menu-item index="chain" class="nav-item" @click="$router.push('/skv')"><el-dropdown>
          <span class="el-dropdown-link nav-item" style="color: white;">
            全链智溯
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="settings">
                <el-icon>
                  <Setting />
                </el-icon>设置</el-dropdown-item>
              <el-dropdown-item command="notifications"><el-icon>
                  <ChatDotRound />
                </el-icon>消息通知</el-dropdown-item>
              <el-dropdown-item command="favorites"><el-icon>
                  <Star />
                </el-icon>我的关注</el-dropdown-item>
              <el-dropdown-item command="enterprise" class="green-bg"><el-icon>
                  <OfficeBuilding />
                </el-icon>企业入驻</el-dropdown-item>
              <el-dropdown-item command="logout" divided><el-icon>
                  <Right />
                </el-icon>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown></el-menu-item>

      <!-- 登录按钮 -->
      <el-menu-item index="login" class="nav-item">
        <el-avatar type="text" class="login-btn" @click="$router.push('/login')">
          Login
        </el-avatar>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script setup lang="ts">
import { ElMenu, ElMenuItem, ElButton, ElAvatar } from 'element-plus'
import { ChatDotRound, Setting, Star, OfficeBuilding, Right } from '@element-plus/icons-vue'
</script>

<style scoped>
.nav-container {
  width: 100%;
  height: 80px;
  padding: 20px 100px;
  background: transparent;
}

/* 深度选择器 */
:deep(.nav-menu) {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-bottom: none !important;
}

:deep(.el-menu--horizontal) {
  --el-menu-active-color: #fff;
  --el-menu-hover-bg-color: transparent;
}

.logo-item {
  display: flex;
  align-items: center;
  color: #fff;
  width: 300px;
}

.brand-name {
  font-weight: 700;
  font-size: 20px;
  width: 100px;
}

.flex-grow {
  flex: 1;
}

.nav-item {
  padding: 0 !important;
  border-bottom: none !important;
  font-weight: bold !important;
  font-size: 1rem;
}

.nav-item:hover {
  background: transparent !important;
  color: #2d6ff7 !important;
}

.login-btn {
  color: white !important;
  font-weight: bold;
  padding: 0 !important;
}

.login-btn:hover {
  color: #2d6ff7 !important;
}

.el-dropdown-link:focus {
  outline: none;
}
</style>