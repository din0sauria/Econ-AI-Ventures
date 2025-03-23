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
                            <el-button><el-icon>
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
            <h2>分区</h2>
            <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane v-for="tab in tabsData" :key="tab.name" :label="tab.label" :name="tab.name">
                    <div v-for="(section, index) in tab.sections" :key="index" class="pay">
                        <p>{{ section.title }}</p>
                        <div class="pay-content">
                            <div v-for="(item, itemIndex) in section.items" :key="itemIndex" class="pay-item"
                                @click="$router.push({ path: '/expertVideo' })">
                                <div class="imgcon"><img :src="getImage(item.img)" :alt="item.title" /></div>
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
        return new URL(`../../assets/experttab/${imgurl}`, import.meta.url).href;
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
                    { img: '图片1.png', title: '邵德春讲餐饮：餐饮定位班', subtitle: '餐饮老板面临老店转型难、客源和利润问题等十大困惑，餐饮定位是在顾客心智中占据独特位置。' },
                    { img: '图片2.png', title: '蜜雪冰城准备上市，从路边摊到2.2万家店，是如何创业成功的？', subtitle: '江湖人称茶饮界的拼多多，从路边摊起家到2万多家门店市值200多亿，如今又冲刺A股茶饮第一股' }
                ]
            },
            {
                title: '今日推荐',
                items: [
                    { img: '图片3.png', title: '一天看懂一家创业公司 ：茶百道 | 创投笔记本', subtitle: '2023 年 6 月 9 日，茶百道完成首轮 10 亿元 Pre-IPO 融资，领投方为兰馨亚洲，正心谷、草根知本、中金、番茄资本跟投，投后估值近 180 亿元。' },
                    { img: '图片4.png', title: '百事可乐"分公司"百胜餐饮集团，拥有肯德基必胜客塔可钟等品牌！', subtitle: '百胜餐饮集团曾是百事可乐 “分公司” ，旗下拥有肯德基、必胜客、塔可钟等知名餐饮品牌。' },
                    { img: '图片5.png', title: '惊！13年杭城老店，疫情期间聚集一大堆90后！', subtitle: '黄龙海鲜大排档通过明确企业定位，从而吸引很多年轻顾客，挖掘新市场，实现收入额递增。' }
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
                    { img: '图片6.png', title: '焦点访谈｜快递业“跑”出加速度，“货畅其流”展现中国经济蓬勃活力', subtitle: '当前全球快递业持续稳健增长，行业正从快速增长转向高质量发展，数字化智能化助力行业集约高效、安全低碳，同时快递服务现代农业步伐也在加快 。' },
                    { img: '图片7.png', title: '标题2', subtitle: '副标题2' }
                ]
            },
            {
                title: '今日推荐',
                items: [
                    { img: '图片8.png', title: '从“价格战”进入到“质量战”，中通快递能否继续领跑通达系？', subtitle: '在快递行业从“价格战”转向“质量战”的背景下，中通快递凭借品牌、技术、末端服务网络等优势拥有发展机遇，但也面临同行竞争加剧、成本控制难度增加和客户需求多样化等挑战，其未来发展前景取决于能否有效应对这些情况。 ' },
                    { img: '图片9.png', title: '菜鸟网络VS京东物流，“轻”“重”模式的巅峰对决！', subtitle: '菜鸟集团 2013 年脱胎于阿里巴巴电商生态，凭科技与电商融合，在跨境物流、国内供应链等领域领先，全球布局，全流程数字化，践行 ESG 理念。2023 年成为阿里 6 大业务集团之一，未来将持续提升物流服务，推动行业变革。' },
                    { img: '图片10.png', title: '中国邮政品牌故事', subtitle: '中国邮政传递企业精神、饱含温度与情怀有着独特魅力与担当。' }
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
                    { img: '图片11.png', title: '零售行业简史（一个分析零售行业的通用视角）', subtitle: '集合多位顾问心血结晶的零售业视频课程，有零售业职业发展、中国零售业现状、零售业发展趋势等内容，还涉及沃尔玛、奥乐齐、华润万家、盒马等知名零售业公司校园招聘点睛。' },
                    { img: '图片12.png', title: '从乡村小店到世界零售巨头：全方位剖析沃尔玛成功历程', subtitle: '沃尔玛坚持“天天平价”，拓展线上业务，优化供应链，发力全球市场。' }
                ]
            },
            {
                title: '今日推荐',
                items: [
                    { img: '图片13.png', title: '奥乐齐 百年折扣超市——奥乐齐', subtitle: '1913年创立的德国连锁超市奥乐齐，2017年入华，以平价社区超市为定位，靠自有品牌低价策略发展 。 ' },
                    { img: '图片14.png', title: '盒马鲜生——中国零售市场的新物种：商业模式演变', subtitle: '盒马从生鲜电商切入，融合线上线下，拓展品类、升级服务，持续迭代商业模式 。 ' },
                    { img: '图片15.png', title: '以药店起家的屈臣氏，年入800亿，屈臣氏是如何俘获年轻人的心', subtitle: '屈臣氏通过打造潮流店铺风格、引入小众热门品牌、开展线上互动及定制专属优惠，精准挖掘年轻人市场 。' }
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
        box-shadow: #1B1F25 0 0 10px;
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
    margin: 15vh auto 0;
    /* 改为水平居中 */
    width: 90%;
    /* 增加宽度百分比 */
    max-width: 1200px;
    /* 添加最大宽度限制 */

    .el-tabs {
        &__header {
            margin: 0 0 24px;
        }

        &__content {
            padding: 20px 0;
            color: #333;
            font-size: 16px;
        }
    }

    .pay {
        padding: 20px;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        /* 添加柔和阴影 */
        margin-bottom: 24px;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-2px);
        }

        p {
            font-size: 20px;
            color: #1a1a1a;
            margin-bottom: 16px;
            font-weight: 600;
        }

        .pay-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
            width: 100%;

            .pay-item {
                padding: 16px;
                border-radius: 8px;
                background: #f8f9fa;
                transition: all 0.3s ease;

                &:hover {
                    background-color: #fff;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    scale: 1.05;
                }

                .imgcon {
                    position: relative;
                    width: 100%;
                    padding-top: 56.25%;
                    /* 16:9 比例 */
                    border-radius: 6px;
                    overflow: hidden;

                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                h3 {
                    margin: 12px 0 6px;
                    font-size: 16px;
                    color: #1a1a1a;
                }

                h4 {
                    margin: 0;
                    font-size: 14px;
                    color: #666;
                    font-weight: 400;
                }
            }
        }
    }
}

/* 移动端适配 */
@media (max-width: 768px) {
    .content {
        width: 94%;
        margin-top: 10vh;

        .pay {
            padding: 16px;

            .pay-content {
                grid-template-columns: 1fr;
                gap: 16px;
            }
        }
    }
}
</style>