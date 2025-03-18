<template>
    <div style="background-color: #eee;">
        <div class="bgm">
            <el-carousel height="500px" motion-blur interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img v-if="item === 1" class="bgmimg" src="../../assets/exp-bgm.png" />
                    <img v-else class="bgmimg" src="../../assets/home-bgm.png" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="container">
            <navbar />
            <header class="title">
                <p style="color: white;font-weight: bold;font-size: large;">专家智萃</p>
                <div class="search-container">
                    <el-input v-model="searchText" placeholder="搜索..." clearable>
                        <template #append>
                            <el-button @click="handleSearch"><el-icon>
                                    <Search />
                                </el-icon></el-button>
                        </template>
                    </el-input>

                </div>
                <p></p>
            </header>
            <div class="left">
                <div class="header-content">
                    <h1 style="font-size: 45px">经智创投</h1>
                    <h2 style="font-size: 40px">RBF投融资模式的LLM数智先锋</h2>
                    <el-divider class="custom-divider" />
                    <div class="text">
                        <el-space direction="vertical" :size="20">
                            <p>Revolutionizing RBF with LLM-driven precision—bridging data, scalability, and trust for
                                smarter investment ecosystems.</p>
                        </el-space>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane v-for="tab in tabsData" :key="tab.name" :label="tab.label" :name="tab.name">
                    <div v-for="(section, index) in tab.sections" :key="index" class="pay">
                        <p>{{ section.title }}</p>
                        <div class="pay-content">
                            <div v-for="(item, itemIndex) in section.items" :key="itemIndex" class="pay-item">
                                <img :src="getImage(item.img)" alt="" />
                                <h3>{{ item.title }}</h3>
                                <h4>{{ item.subtitle }}</h4>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup>
import navbar from '@/components/navbar.vue';
import { ElDivider, ElSpace, ElCarousel } from 'element-plus';

import { Search } from '@element-plus/icons-vue';
import { ref, computed } from 'vue';
const searchText = ref('');
const activeName = ref('first');


const getImage = (imgurl) => {
    if (!imgurl) return '';
    try {
        return new URL(`${imgurl}`, import.meta.url).href;
    } catch (error) {
        console.error('Invalid image path:', imgname);
    }
};

const tabsData = [
    {
        label: '餐饮',
        name: 'first',
        sections: [
            {
                title: '付费专区',
                items: [
                    { img: '图片1.png', title: '标题1', subtitle: '副标题1' },
                    { img: '图片2.png', title: '标题2', subtitle: '副标题2' }
                ]
            },
            {
                title: '今日推荐',
                items: [
                    { img: '图片3.png', title: '标题1', subtitle: '副标题1' },
                    { img: '图片4.png', title: '标题2', subtitle: '副标题2' },
                    { img: '图片5.png', title: '标题3', subtitle: '副标题3' }
                ]
            }
        ]
    },
    {
        label: '服务',
        name: 'second',
        sections: [
            {
                title: '付费专区',
                items: [
                    { img: '图片1.png', title: '标题1', subtitle: '副标题1' },
                    { img: '图片2.png', title: '标题2', subtitle: '副标题2' }
                ]
            },
            {
                title: '今日推荐',
                items: [
                    { img: '图片3.png', title: '标题1', subtitle: '副标题1' },
                    { img: '图片4.png', title: '标题2', subtitle: '副标题2' },
                    { img: '图片5.png', title: '标题3', subtitle: '副标题3' }
                ]
            }
        ]
    },
    {
        label: '零售',
        name: 'third',
        sections: [
            {
                title: '付费专区',
                items: [
                    { img: '图片1.png', title: '标题1', subtitle: '副标题1' },
                    { img: '图片2.png', title: '标题2', subtitle: '副标题2' }
                ]
            },
            {
                title: '今日推荐',
                items: [
                    { img: '图片3.png', title: '标题1', subtitle: '副标题1' },
                    { img: '图片4.png', title: '标题2', subtitle: '副标题2' },
                    { img: '图片5.png', title: '标题3', subtitle: '副标题3' }
                ]
            }
        ]
    },
];



</script>

<style scoped type="scss">
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
    top: 20vh;
    left: 10vw;
    width: 80vw;
    height: 80vh;
    pointer-events: auto;
    box-sizing: border-box;

    .bgmimg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.title {
    width: 80%;
    margin-top: 20px;
    margin-left: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search-container {
    background-color: transparent;
    width: 35%;

    :deep(.el-input__wrapper) {
        background-color: rgba(0, 0, 0, 0);
    }


    :deep(.el-input__inner) {
        background-color: rgba(0, 0, 0, 0) !important;
        color: #fff;
    }


    :deep(input:-webkit-autofill) {
        -webkit-text-fill-color: #fff;
        transition: background-color 5000s ease-out 0.5s;
    }


    :deep(input::-webkit-input-placeholder) {
        color: #fff;
    }

    :deep(.el-input-group__append) {
        background-color: transparent;
    }
}

.left {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vh;
    margin-left: 10vw;
    margin-bottom: -10vh;
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

.content {
    margin-top: 15vh;
    margin-left: 10%;
    width: 80%;

    .el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
    }

    .pay {
        padding: 12px;
        border-radius: 20px;
        background-color: #fff;
        margin-top: 10px;

        .pay-content {
            display: flex;
            width: 100%;

            .pay-item {
                flex: 1;

                .img {
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    border-radius: 6px;
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>