<template>
    <div id="app">
      <navbar style="background-color:black;"/>
      
      <div class="main-content">

        <div class="left-section">
            <img src="@/assets/zhihuitab/logo.svg" />
            <div style="height: 20px;"></div>
            <div class="left-title">
                <div class="left-first-title">会议进程</div>
                <div class="button-zhuchi" @click="aiHost">AI主持</div>
            </div>
            <div v-for="(stage, index) in stages" :key="index">
                <div class="left-third-title">
                    <div class="left-second-title">{{stage.title}}</div>
                    <div :class="stage.status === '进行中'? 'in-progress' : 'completed'">{{stage.status}}</div>
                </div>

                <div class="left-first-content">{{stage.description}}</div>
                <div class="left-second-content">
                    <div>时间：{{stage.time}}</div>
                    <div>{{stage.confirmCount}}</div>
                </div>
            </div>
            
            <div style="height: 10px;"></div>
            <div class="button-zhuchi">确认结束该阶段</div>
        </div>
            
        <!-- 右边区域 -->
        <div class="right-section">
        <!-- 右边上部分 -->
        <div class="right-top-section">
            <div style="height: 30px;  color: gray; padding: 5px 15px 5px 15px;">屏幕共享</div>
            <img src='@/assets/meettab/1.png' class="steam_pic"/>
        </div>
        <!-- 右边下部分 -->
        <div class="right-bottom-section">
            <div class="right-bottom-left-section">
                <!-- 右边下部分左边 -->
                <div class="messages">
                    <transition-group name="slide-up">
                        <div
                            v-for="(message, index) in messages"
                            :key="index"
                            :class="['message-container', message.isUser ? 'user-message-container' : 'other-message-container']"
                        >
                            <!-- 其他消息的头像和用户名 -->
                            <div v-if="!message.isUser" class="other-message-info">
                            <img src="@/assets/zhihuitab/peo.svg" alt="头像" class="avatar" />
                            <div class="username">{{ message.username }}</div>
                            </div>
                            <!-- 消息内容 -->
                            <div :class="['message', message.isUser ? 'user-message' : 'other-message']">
                            {{ message.text }}
                            </div>
                        </div>
                    </transition-group>
                </div>

                    <!-- 输入框 -->
                <div class="input-container">
                    <input
                        v-model="newMessage"
                        @keyup.enter="sendMessage"
                        placeholder="请输入您想要发送的内容，按回车发送"
                    />
                </div>
            </div>


            














            <!-- 右边下部分右边 -->
            <div class="right-bottom-right-section">
                <h2 class="title">参会人员</h2>
                <div style="height: 10px;"></div>
                <div class="attendee-info">
                    <img src="@/assets/zhihuitab/peo.svg" alt="头像" class="avatar2" />
                    <div class="name">王芳</div>
                    <div class="company">老乡鸡市场总监</div>
                    <div class="role">融资主体</div>
                    <img src="@/assets/zhihuitab/record.svg" alt="头像" class="recode" />
                </div>

                <div class="attendee-info">
                    <img src="@/assets/meettab/logo2.svg" alt="头像" class="avatar2" />
                    <div class="name">陈伟</div>
                    <div class="company">老乡鸡财务总监</div>
                    <div class="role">融资主体</div>
                    <img src="@/assets/zhihuitab/record2.svg" alt="头像" class="recode" />
                </div>

                <div class="attendee-info">
                    <img src="@/assets/meettab/logo3.svg" alt="头像" class="avatar2" />
                    <div class="name">刘洋</div>
                    <div class="company">老乡鸡运营总监</div>
                    <div class="role">融资主体</div>
                    <img src="@/assets/zhihuitab/record2.svg" alt="头像" class="recode" />
                </div>

                <div class="attendee-info">
                    <img src="@/assets/meettab/logo4.svg" alt="头像" class="avatar2" />
                    <div class="name">刘静</div>
                    <div class="company">高瓴资本合伙人</div>
                    <div class="role">投资人</div>
                    <img src="@/assets/zhihuitab/record2.svg" alt="头像" class="recode" />
                </div>
                
            </div>
        </div>
        </div>
        

      </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';

import navbar from '@/components/navbar.vue';

const stages = ref([
  {
    title: '第一阶段',
    status: '已结束',
    description: '会前筹备阶段：确定会议主题与目标，邀请参会人员，规划会议议程。',
    time: '2025-03-01 16: 12',
    confirmCount: '4人确认'
  },
  {
    title: '第二阶段',
    status: '已结束',
    description: '项目介绍阶段：主持人开场，介绍项目背景、目的、议程安排以及参会人员。',
    time: '2025-03-01 16: 43',
    confirmCount: '4人确认'
  },
  {
    title: '第三阶段',
    status: '进行中',
    description: '互动答疑阶段：投资者就项目相关问题进行提问，项目方进行解答。',
    time: '2025-03-01 16: 57',
    confirmCount: '3人确认'
  }
]);

const aiHost = () => {
  // AI主持相关逻辑，这里暂为空
  console.log('AI主持功能触发');
};

const endStage = (index) => {
  stages.value[index].status = '已结束';
};

const messages = ref([]);
const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    // 添加用户消息
    messages.value.push({ text: newMessage.value, isUser: true });
    newMessage.value = '';

    // 模拟 1 秒后收到其他消息
    setTimeout(() => {
      messages.value.push({
        text: '大家好，我是超级无敌厉害有限公司的张小五。',
        isUser: false,
        username: '张小五',
      });
    }, 1000);
  }
};
</script>

<style scoped>
.main-content {
  background-color: #f9f9f9;
  display: flex;
  padding: 20px;
  gap:20px;

}
.left-section {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow:  1px 1px 6px 3px rgb(226, 226, 226);
}

.left-title {
    display: flex;
    justify-content: space-between;
}

.left-first-title {
    font-size: 16px;
    font-weight: bold;
    color: black;
}

.left-second-title {
    font-size: small;
    color: black;
}

.left-third-title {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.left-second-content{
    display: flex;
    justify-content: space-between;
    color: black;
    font-size: small;
}

.left-first-content{
    color: #A6A6A6;
    font-size: small;
}

.button-zhuchi {
    border: 1px solid #3761F5;
    color:#3761F5;
    border-radius: 5px;
    font-size: 13px;
    padding: 3px;
    height: 28px;
    text-align: center;
    background-color: white;
}

.right-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.right-top-section {
  flex: 1;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow:  1px 1px 6px 3px rgb(226, 226, 226);
}

.right-bottom-section {
  flex: 1;
  display: flex;
  gap: 20px;
}

.right-bottom-left-section {
  flex: 1;
  background-color: white;
  box-shadow:  1px 1px 6px 3px rgb(226, 226, 226);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 300px;
}

.right-bottom-right-section {
  flex: 2;
  background-color: white;
  box-shadow:  1px 1px 6px 3px rgb(226, 226, 226);
  border-radius: 10px;
  padding: 20px;
  border-radius: 8px;
  max-width: 330px;
  margin: 0 auto;
}

.steam_pic {
    width: 95%;
    margin-top: 5px;
    margin-bottom: 15px;
    margin-left: 15px;
    margin-right: 15px;
    border: solid 2px gray;
    border-radius: 10px;
}

.meeting-progress {
  padding: 20px;
}

.completed {
  color: red;
  font-size: small;
}

.in-progress {
  color: green;
  font-size: small;
}

/* 以下是聊天框消息 */
.messages {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message-container {
  display: flex;
  align-items: flex-start;
  font-size: small;
}

.other-message-container {
  flex-direction: row;
  font-size: small;
}

.user-message-container {
  justify-content: flex-end;
  font-size: small;
}

.other-message-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.username {
  color: #007bff;
  font-weight: bold;
  font-size: 12px;
  margin-top: 4px;
}

.message {
  max-width: 70%;
  padding: 10px;
  border-radius: 12px;
  word-wrap: break-word;
  position: relative;
}

.user-message {
  background-color: #007bff;
  color: white;
}

.other-message {
  background-color: #e9ecef;
  color: black;
}

.other-message::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 10px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #e9ecef;
}

.input-container {
  padding: 10px;
  background-color: #fff;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;
  box-sizing: border-box;
}

/* 自定义 placeholder 样式 */
input::placeholder {
  color: #999; /* 灰色 */
  font-style: italic; /* 斜体 */
}

/* 滑入动画 */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 这里开始是参会人 */

.title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
}

.attendee-info {
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;
}

.name {
    font-size: small;
  font-weight: bold;
  color: #007bff;
}
.avatar2 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.company {
    font-size: small;
  color: #555;
}

.recode {
    width: 20px;
}

.role {
    font-size: small;
  color: #777;
  font-style: italic;
}
</style>