<template>
    <div style="background-color: #eee;">
        <navbar style="background-color: black;" />
        <div class="container">
            <!-- 标题区域 -->
            <div class="head">
                <h1 class="title">{{ videoTitle }}</h1>
                <div class="subtitle">{{ videoSubtitle }}</div>
                <div class="time">{{ videoTime }}</div>
            </div>

            <!-- 主体内容 -->
            <div class="main-content">
                <!-- 视频区域 -->
                <div class="video-container">
                    <div class="video-placeholder">
                        <video src="../../assets/零售行业简史.mp4" controls autoplay width="100%"></video>
                    </div>
                </div>

                <!-- 右侧信息栏 -->
                <div class="info-container">
                    <el-tabs v-model="activeTab" type="border-card" class="demo-tabs">
                        <el-tab-pane label="AI全文内容" name="fulltext">
                            <div class="scroll-content">
                                <p style="white-space: pre-line;">{{ fullTextContent }}</p>
                            </div>
                        </el-tab-pane>

                        <el-tab-pane label="AI要点总结" name="summary">
                            <div class="scroll-content">
                                <p style="white-space: pre-line;">{{ summaryContent }}</p>
                            </div>
                        </el-tab-pane>

                        <el-tab-pane label="对话" name="dialogue">
                            <div class="dialogue-container">
                                <div class="scroll-content">
                                    <p style="white-space: pre-line;" v-for="(dialogue, index) in dialogueContent">
                                        {{ dialogue }}
                                    </p>
                                </div>
                            </div>
                        </el-tab-pane>

                        <el-tab-pane label="AI笔记" name="notes">
                            <div class="scroll-content">
                                <p style="white-space: pre-line;">{{ notesContent }}</p>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <div class="input-area" v-if="activeTab === 'dialogue'">
                        <el-input v-model="inputValue" placeholder="请输入内容" class="input-box" />
                        <el-button type="primary" @click="submitInput" class="send-btn">发送</el-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <h2>相关推荐</h2>
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

import { ref, computed, onMounted } from 'vue';
const searchText = ref('');
const activeName = ref('first');

const videoTitle = '零售行业简史（一个分析零售行业的通用视角）'
const videoSubtitle = '集合多位顾问心血结晶的零售业视频课程，有零售业职业发展、中国零售业现状、零售业发展趋势等内容，还涉及沃尔玛、奥乐齐、华润万家、盒马等知名零售业公司校园招聘点睛。'
const videoTime = '发布时间：2020-08-30 12:57:21'
const activeTab = ref('fulltext')
const inputValue = ref('');

onMounted(() => {
    let index = 0
    const timer = setInterval(() => {
        if (index < rawFullText.length) {
            fullTextContent.value += rawFullText[index]
            index++
        } else {
            clearInterval(timer)
        }
    }, 20)
})

// 长文本内容
const fullTextContent = ref('') // 改为响应式引用
const rawFullText = `零售行业的发展与变迁
本期内容主要讲述了零售行业的发展史，从古代的小作坊式零售到现代的百货商店和邮购，再到直播带货等新商业模式。讲者认为，每个时代的人基本需求都是一样的，希望产品质量更好、价格更便宜、购买更便捷。随着蒸汽机的出现，交通网络的发展，零售行业出现了新的业态，如百货商店、零售店和邮购等。花木兰生活在这个时代，不用东市西市的到处跑，可以去百货公司的军用装备专区，或者去军用装备连锁店，也可以体验最早的网购。

零售业的进化与变革
主要讲述了零售行业的三次进化。第一次进化是20世纪初，福特发行T型车，普通家庭也能买得起汽车，拉森制造了第一台家用电冰箱，为超市的成立提供了先决条件。第二次进化是六七十年代，出现了大型折扣超市，如沃尔玛，通过自建物流体系和IBM开发的零售链接软件，实现了供应链的合理安排和生产效率的提高。第三次进化是会员仓储超市，如Costco和山姆会员店，与沃尔玛形成对立，产品种类较少，但价格更便宜。

零售业的发展逻辑与战略选择
主要讲述了消费者需求的变化和零售行业的发展逻辑。消费者不再需要更多的产品，而是需要知道哪个产品的性能更好、性价比更高。每个时代的人基本欲望和生活满意度相似，关注的是自己那点鸡毛蒜皮。推动零售业发展的力量是技术和消费者需求的双轮驱动，但消费群体发生变化的主要原因还是技术。此外，经济、政治和战争等因素也会影响消费者行为。

零售行业的三步进化与创新
从技术变革的角度来看待零售行业的发展历史，可以分为三步：底层技术的创新、基础设施的创新和商业模式的创新。新的零售业态都是商业模式层面的创新，本质是对现有社会资源进行重新排列组合。在基础设施不完善的时候，甚至是在发展的初期就冲进去，伴随这个基础设施一起成长，才能抓住创业的红利期。关注社会上有哪些基础设施正在逐渐成熟并可以商用，有助于预测未来可能出现的新的零售业态。

新零售的挑战与未来趋势
本段主要讨论了新零售的概念和趋势。新零售并不是一个新概念，而是将ABC等新技术添加到传统的零售模式中。虽然新技术可以帮助大企业，但对于草根创业者和中小企业来说，要想在零售领域取得成功，需要深入研究每个具体品类的需求。此外，基础设施的创新也代表了一种趋势，如冷链运输等看似不酷的基础设施创新。最后，下期将讨论电商行业，包括亚马逊与淘宝、京东、拼多多等平台的对比。
`
const summaryContent = `一、零售业的演进历程
视频全面梳理了零售业从古至今的发展轨迹，从早期“前店后厂”的原始模式，到如今直播带货等数字化新兴业态的崛起，深入剖析了各阶段的核心特征与转型逻辑。这一历史视角帮助我理解行业演变的底层规律。
二、技术革新对行业的重塑力
视频强调技术变革是零售业发展的核心驱动力：从蒸汽机、内燃机到电力制冷技术的底层突破，再到铁路、公路等基础设施的升级，这些创新直接催生了百货商店、连锁超市等新型业态。这启示我必须密切关注技术迭代对商业模式的颠覆性影响。
三、新零售与电商的融合实践
视频指出新零售并非概念炒作，而是通过大数据、AI等技术对传统零售模式的智能化升级。同时提醒电商领域仍存在结构性机遇，例如下期将探讨的亚马逊等巨头的创新实践。这为我思考线上线下一体化战略提供了方向。
四、多维创新驱动行业变革
视频将技术变革细分为区块链等底层技术、5G网络等基础设施和会员制电商等商业模式三大创新维度，揭示了零售业升级的系统性路径。这帮助我构建技术选型与模式设计的评估框架。
五、未来零售的破局关键
视频提出新零售的本质是技术要素的重新组合，并特别强调基础设施成熟度对业态创新的制约作用。这提示我在布局智能货架、无人配送等前沿技术时，需同步考量区域物流网络、支付系统等基础条件的支撑能力。
`
const dialogueContent = [`用户（有志于投身零售行业的创业者）：
"我最近在研究零售行业的演变逻辑，发现从古代小作坊到现代直播带货，行业始终围绕‘性价比’和‘便利性’迭代。但有个问题困扰我：技术驱动和消费者需求变化，到底谁是更核心的变量？比如福特T型车普及和电冰箱发明，直接催生了超市业态，但现代消费者似乎更关注产品性能和决策效率，这种矛盾如何解？”
`,
    `AI专家：
"从行业演进模型来看，技术驱动和消费者需求构成双螺旋结构——电力制冷等技术突破创造供给可能性，而需求升级如从‘买得到’到‘买得好’决定技术落地的方向。以沃尔玛为例，其成功不仅依赖物流技术，更精准捕捉了战后家庭对‘一站式购齐’的隐性需求。当前消费者追求‘性能透明化’，本质上是对信息效率的新需求，这恰恰需要AI推荐算法、区块链溯源等新技术重构信任机制。"
`,
    `用户：
"您提到基础设施成熟度决定创新红利期，这让我想到冷链运输这类‘不酷’的创新。如果我现在切入社区生鲜零售，除了关注5G、物联网这些显性技术，是否应该优先评估区域冷链覆盖率这类隐性基础设施？另外，Costco的会员制模式在国内水土不服，这是否说明仓储会员店的‘少而精’策略需要本土化改造？"
`,
    `AI专家：
"基础设施评估需建立‘技术-经济’双维度模型：冷链覆盖率决定损耗控制边界，而物联网传感器密度影响实时定价能力。关于会员制本土化，建议参考山姆会员店‘预制菜+体验服务’的转型——通过SKU精简释放供应链效率，同时用试吃、亲子课堂等体验服务对冲品类不足的短板。这印证了零售创新的本质是‘效率-体验’的动态平衡。"
`,
    `用户：
“面对亚马逊这类技术巨头，初创企业如何在电商红海中突围？您提到要‘深耕品类需求’，这是否意味着垂直领域的数据壁垒比流量更重要？比如专注母婴品类，通过智能尿布湿度传感器收集用户数据，反向优化供应链？"
`,
    `AI专家：
"精准命中行业痛点！垂直领域的数据资产正在重构竞争壁垒——亚马逊的推荐算法强在广度，但垂直场景的深度数据如母婴用户的睡眠周期、喂养习惯等能催生更精准的预测模型。不过需警惕‘伪垂直’陷阱：单纯做品类切割不够，关键要建立‘数据-供应链’闭环。例如您提到的智能尿布，需同步打通社区仓储网络，实现‘数据预警-即时补货’的分钟级响应，这才是技术赋能零售的本质突破。"
`,
    `用户：
"非常感谢您的体系化解答！看来零售创新的真谛在于‘用技术重新定义基础要素’，无论是冷链还是尿布传感器，本质都是对‘人-货-场’关系的重构。我会优先搭建区域基础设施监测体系，同时聚焦母婴品类的数据资产沉淀。"
`,
    `AI专家：
"完全正确！期待您用‘技术考古学’的视角挖掘零售本质，在基础设施成熟曲线与技术采纳生命周期的交点上，找到属于您的创新奇点。保持对‘隐性基础设施’的敏锐度，这将是新零售时代的关键破局点。"
`
]
const notesContent = `一、零售行业演进的核心逻辑
1.需求本质的稳定性
·消费者底层需求跨越时代：质量更优、价格更低、购买更便捷。
·现代需求升级方向：从“商品丰富度”转向“决策效率”（如性能对比、性价比筛选）。
2.技术驱动的三次关键进化
·第一次进化（20世纪初）：汽车普及+家用电冰箱 → 超市诞生（供应链效率提升）。
·第二次进化（1960-70年代）：沃尔玛模式 → 自建物流+信息化系统（供应链协同）。
·第三次进化（会员仓储模式）：Costco/山姆 → 精简SKU+极致性价比（反向供应链优化）。
3.技术-需求的双螺旋模型
·技术突破创造供给可能性（如冷链技术），需求升级决定技术落地方向（如即时配送）。
·案例：电商早期依赖互联网技术，后期因消费者“即时满足”需求催生前置仓模式。

二、零售行业创新的三层驱动力
1.底层技术创新
·蒸汽机→电力→物联网：基础设施迭代决定业态边界（如冷链覆盖率影响生鲜零售半径）。
·创业启示：优先布局基础设施成熟区域，抢占“技术-需求”共振窗口。
2.基础设施创新
·显性基础设施：5G、物联网（提升运营效率）。
·隐性基础设施：区域冷链覆盖率、支付习惯（决定模式可行性）。
·案例：社区生鲜零售需在冷链覆盖率>70%区域启动，否则损耗成本吞噬利润。
3.商业模式创新
·本质：社会资源的重新排列组合（如会员制重构“人-货”关系）。
·本土化改造要点：Costco模式需叠加体验服务（如试吃、亲子课堂）对冲SKU不足。

三、新零售时代的创业战略框架
1.技术赋能的优先级
·数据资产 > 流量获取：垂直领域深度数据（如母婴用户睡眠周期）比泛流量更关键。
·工具建议：搭建“数据-供应链”闭环（如智能尿布传感器→即时补货系统）。
2.基础设施监测体系
·显性指标：区域5G覆盖率、物流时效。
·隐性指标：社区消费习惯、竞品密度。
·工具：使用GIS热力图分析商圈成熟度，结合第三方数据（如冷链物流企业分布）。
3.品类深耕策略
·垂直领域选择标准：
·高频刚需（如母婴、生鲜）。
·数据采集成本低（如智能设备易部署）。
·供应链可优化空间大（如减少中间环节）。
·案例：母婴品类可通过智能硬件（如智能温奶器）收集用户数据，反向指导选品与库存。

四、关键风险与应对
1.技术采纳生命周期陷阱
·风险：过早投入不成熟技术（如早期无人货架）。
·对策：选择“技术成熟度曲线”中斜率最大的领域（如冷链运输已进入成长期）。
2.巨头竞争壁垒
·亚马逊威胁：全品类+算法优势。
·破局点：聚焦垂直领域，建立“数据-供应链”护城河（如专注宠物用品，通过智能喂食器数据优化SKU）。
3.消费者行为突变
·监测工具：社交媒体情绪分析、Google Trends需求预测。
·案例：疫情催生“即时零售”，需预留10%预算测试新场景（如社区团购）。

五、行动清单（0-1阶段）
1.区域基建扫描
·绘制目标区域“基础设施成熟度地图”（冷链覆盖率、物流时效、支付习惯）。
2.品类数据验证
·选择1-2个垂直品类，通过MVP（最小可行产品）测试数据采集闭环可行性。
3.供应链压力测试
·与本地供应商谈判账期，验证“数据驱动补货”的降本效果。
4.技术合作网络
·接入物联网平台（如涂鸦智能）、冷链服务商（如顺丰冷运），降低初期技术投入。

总结：零售行业本质是“用技术重新定义基础要素”。创业者需以“技术-需求”双螺旋为框架，聚焦垂直领域数据资产，在基础设施成熟曲线与技术采纳生命周期的交点上，找到创新奇点。
`


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
                title: '推荐视频',
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
                title: '推荐视频',
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
                title: '推荐视频',
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
    max-width: 1400px;
    margin: 20px auto;
    width: 90%;

    .head {
        margin-bottom: 20px;
    }

    .title {
        font-size: 24px;
        margin: 0 0 8px 0;
        max-width: 70%;
    }

    .subtitle {
        font-size: 16px;
        color: #666;
        max-width: 70%;
        margin-bottom: 10px;
    }

    .time {
        font-size: 12px;
        color: #999;
    }

    .main-content {
        display: flex;
        gap: 20px;
    }

    .video-container {
        flex: 3;
        min-width: 0;
    }

    .video-placeholder {
        background: #000;
        color: white;
        aspect-ratio: 16/9;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
    }

    .info-container {
        flex: 1;
        min-width: 300px;
    }

    .demo-tabs {
        height: 75vh;
    }

    .scroll-content {
        height: calc(75vh - 60px);
        overflow-y: auto;
        padding: 10px;
        line-height: 1.6;
    }

    .scroll-content p {
        margin: 8px 0;
        padding: 8px;
        background: #f5f5f5;
        border-radius: 4px;
    }

    .input-area {
        display: flex;
        gap: 10px;
        padding: 8px 8px;
        background-color: #fff;
        border-radius: 4px;
    }

    .input-box {
        flex: 1;

        :deep(.el-input__inner) {
            height: 42px;
        }
    }

    .send-btn {
        flex-shrink: 0;
        width: 80px;
    }
}


.content {
    margin: 0 auto;
    /* 改为水平居中 */
    width: 90%;
    /* 增加宽度百分比 */
    max-width: 1400px;
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