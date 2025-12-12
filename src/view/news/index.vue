<template>
  <div class="news-list c-pd">
    <div class="c-banner">
      <div class="img-box">
        <img
          v-show="activeTab === 0"
          src="https://www.corex.cc//uploads/images/2021/0319/WQmVieWnjsMqB1fe21Fua5S7LKHGCdy4ImePQXjk.jpg"
          alt=""
        />
        <img
          v-show="activeTab === 1"
          src="https://www.corex.cc//uploads/images/2021/0319/3kM3raquphMOXU2vqnJfCMDvA0DY9dcJqnkmBWvb.jpg"
          alt=""
        />
        <img
          v-show="activeTab === 2"
          src="https://www.corex.cc//uploads/images/2021/0319/0jRjl5FSsr4FzKcMTCMlCQY2OSyn3fvvukUeZJjR.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="c-content">
      <div class="wrapper">
        <div class="flex">
          <div class="left-block">
            <div class="title">
              <h3 class="h3">新闻与公告</h3>
              <span>News and Announcements</span>
            </div>
            <div class="link">
              <div
                class="box"
                :class="{ active: activeTab === 0 }"
                @click="switchTab(0)"
              >
                <a @click.prevent>通知公告</a>
              </div>
              <div
                class="box"
                :class="{ active: activeTab === 1 }"
                @click="switchTab(1)"
              >
                <a @click.prevent>公司动态</a>
              </div>
              <div
                class="box"
                :class="{ active: activeTab === 2 }"
                @click="switchTab(2)"
              >
                <a @click.prevent>行业资讯</a>
              </div>
            </div>
          </div>
          <!-- 通知公告 -->
          <div class="right-block" v-show="activeTab === 0">
            <div class="c-crumbs">
              <a href="/" class="home"></a>
              <a href="#/news?tab=0" class="link">新闻与公告</a>
              <a href="#/news?tab=0" class="link">通知公告</a>
            </div>
            <div class="news-list-s1">
              <div class="items">
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>11/21</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">关于增加浮动定价指数及调整相关公式的公告</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>09/26</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">关于发布北铁指数的公告</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>09/19</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">关于暂停发布人民币62%基准价的公告</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>07/09</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">关于更正麦克粉成交价格的公告</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>07/02</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">关于调整交易标的的公告</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>05/29</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">关于暂停发布曹妃甸指数的公告</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>05/20</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">关于会员信息变更的公告</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>05/16</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">关于会员信息变更的公告</h3>
                  </a>
                </div>
              </div>
              <div class="comm-page">
                <li class="active" aria-current="page"><a>1</a></li>
              </div>
            </div>
          </div>
          <!-- 公司动态 -->
          <div class="right-block" v-show="activeTab === 1">
            <div class="c-crumbs">
              <a href="/" class="home"></a>
              <a href="#/news?tab=0" class="link">新闻与公告</a>
              <a href="#/news?tab=1" class="link">公司动态</a>
            </div>
            <div class="news-list-s1">
              <div class="items">
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>11/11</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">重钢首次通过北铁中心完成混矿招标</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>11/06</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      北铁指数应用备忘录签署！产业协同迈入新阶段
                    </h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>11/03</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">北铁中心拜访日韩地区行业企业</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>10/21</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">浦项国际（北京）到访北京铁矿石交易中心</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>09/28</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      北京铁矿石交易中心发布铁矿石港口现货价格指数
                    </h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>09/19</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      共促定价机制完善 服务行业高质量发展
                      北铁指数专家委员会工作启动会在京召开
                    </h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>05/13</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">中物联大宗商品流通分会调研组到访北铁中心</h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>04/11</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">建龙集团副总裁赵忻一行到访北铁中心</h3>
                  </a>
                </div>
              </div>
              <div class="comm-page">
                <li class="active" aria-current="page"><a>1</a></li>
              </div>
            </div>
          </div>
          <!-- 行业资讯 -->
          <div class="right-block" v-show="activeTab === 2">
            <div class="c-crumbs">
              <a href="/" class="home"></a>
              <a href="#/news?tab=0" class="link">新闻与公告</a>
              <a href="#/news?tab=2" class="link">行业资讯</a>
            </div>
            <div class="news-list-s1">
              <div class="items">
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>11/12</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      西芒杜铁矿项目投产：几内亚总统敦布亚，中国国务院副总理刘国中等出席仪式
                    </h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>11/07</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      10家钢铁产业链重点企业共同签署北铁指数应用备忘录
                    </h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>11/06</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      10家钢铁产业链重点企业共同签署北铁指数应用备忘录
                    </h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>11/06</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      10家钢铁产业链重点企业共同签署北铁指数应用备忘录
                    </h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>09/28</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      【新华财经】贴近终端
                      反映即期供需！北铁中心发布铁矿石港口现货价格指数
                    </h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>09/28</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      【经济日报】北京铁矿石交易中心发布铁矿石港口现货价格指数
                    </h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>09/28</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      【中国冶金报】精准刻画中国市场，丰富完善指数品种——北铁中心发布铁矿石港口现货价格指数
                    </h3>
                  </a>
                </div>
                <div class="item">
                  <a>
                    <!-- <div class="date">
                      <span>09/26</span>
                      <i>2025</i>
                    </div> -->
                    <h3 class="h3">
                      淡水河谷重启卡帕内玛矿区——
                      2026年铁矿石年产能预计达到3.4亿~3.6亿吨
                    </h3>
                  </a>
                </div>
              </div>
              <div class="comm-page">
                <li class="active" aria-current="page"><a>1</a></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const activeTab = ref(0);

const switchTab = (index) => {
  activeTab.value = index;
};

// 从路由查询参数初始化或更新 tab
const updateTabFromRoute = () => {
  const tabParam = route.query.tab;
  if (tabParam !== undefined) {
    const tabIndex = parseInt(tabParam);
    if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex <= 2) {
      activeTab.value = tabIndex;
    }
  }
};

onMounted(() => {
  updateTabFromRoute();
});

// 监听路由变化
watch(() => route.query.tab, () => {
  updateTabFromRoute();
});
</script>

<style scoped>
/* 确保所有a标签都有手型光标 */
a {
  cursor: pointer;
}
</style>
