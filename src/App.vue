<template>
  <div
    class="header"
    :class="{ down: isScrolledDown }"
    :style="{
      display: state.isChannel ? 'none' : 'block',
    }"
  >
    <a href="/" class="logo">
      <img src="./assets/images/logo-1.png" alt="" class="show" />
      <img src="./assets/images/logo-2.png" alt="" class="hide" />
    </a> 
    <div class="main">
      <ul class="nav" :class="{ active: isNavOpen }">
        <li class="active">
          <a href="#/" class="single">首页</a>
        </li>
        <li>
          <a href="#/channel" class="single">业务与服务</a>
        </li>
        <li>
          <a href=" #/about" class="single">关于我们</a>
          <div class="drop">
            <a href="#/about?tab=0">公司简介</a>
            <a href="#/about?tab=1">董事长寄语</a>
            <a href="#/about?tab=2">总裁致辞</a>
            <a href="#/about?tab=3">管理团队</a>
            <a href="#/about?tab=4">企业文化</a>
          </div>
        </li>
        <li>
          <a href="#/news" class="single">新闻与公告</a>
          <div class="drop">
            <a href="#/news?tab=0">通知公告</a>
            <a href="#/news?tab=1">公司动态</a>
            <a href="#/news?tab=2">行业资讯</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="mNavBtn" :class="{ active: isNavOpen }" @click="toggleNav">
      <span class="line1"></span><span class="line2"></span
      ><span class="line3"></span>
    </div>
  </div>

  <RouterView />

  <div
    class="footer"
    :style="{
      display: state.isChannel ? 'none' : 'block',
    }"
  >
    <div class="top-block">
      <div class="nav m-show">
        <div
          class="box"
          :class="{ active: activeFooterBox === 0 }"
          @click="toggleFooterBox(0)"
        >
          <h3 class="h3">
            <a href="#/about">关于我们</a>
          </h3>
          <div
            class="link"
            :style="{ display: activeFooterBox === 0 ? 'block' : 'none' }"
          >
            <a href="#/about?tab=0">公司简介</a>
            <a href="#/about?tab=1">董事长寄语</a>
            <a href="#/about?tab=2">总裁致辞</a>
            <a href="#/about?tab=3">管理团队</a>
            <a href="#/about?tab=4">企业文化</a>
          </div>
        </div>
        <div
          class="box"
          :class="{ active: activeFooterBox === 2 }"
          @click="toggleFooterBox(2)"
        >
          <h3 class="h3">
            <a href="#/news">新闻与公告</a>
          </h3>
          <div
            class="link"
            :style="{ display: activeFooterBox === 2 ? 'block' : 'none' }"
          >
            <a href="#/news?tab=0">通知公告</a>
            <a href="#/news?tab=1">公司动态</a>
            <a href="#/news?tab=2">行业资讯</a>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="logo">
          <img src="./assets/images/logo-1.png" alt="" />
        </div>
      </div>
      <div class="nav m-hide">
        <div class="box">
          <h3 class="h3">
            <a href="#/about">关于我们</a>
          </h3>
          <div class="link">
            <a href="#/about?tab=0">公司简介</a>
            <a href="#/about?tab=1">董事长寄语</a>
            <a href="#/about?tab=2">总裁致辞</a>
            <a href="#/about?tab=3">管理团队</a>
            <a href="#/about?tab=4">企业文化</a>
          </div>
        </div>
        <div class="box">
          <h3 class="h3">
            <a href="#/news">新闻与公告</a>
          </h3>
          <div class="link">
            <a href="#/news?tab=0">通知公告</a>
            <a href="#/news?tab=1">公司动态</a>
            <a href="#/news?tab=2">行业资讯</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mid-block"></div>
    <div class="bot-block">
      <div class="left-box">
        <p>版权所有 © 2021 北京铁矿石交易中心股份有限公司</p>
        <p>
          <a>京ICP备14044759号</a>
          <a
            ><img
              src="./assets/images/g.png"
              alt=""
              style="
                display: inline-block;
                vertical-align: middle;
                margin-right: 5px;
              "
            />京公网安备 11010702002121号</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch, onMounted, ref, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import config from "./config";

const state = reactive({
  isChannel: false,
});

// 导航菜单展开状态
const isNavOpen = ref(false);

// 滚动状态
const isScrolledDown = ref(false);

// 关于我们下拉菜单展开状态
const isAboutDropdownOpen = ref(false);

// Footer box 激活状态（null 表示没有激活的，0-4 表示对应的 box 索引）
const activeFooterBox = ref(null);

// 切换导航菜单
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

// 关闭导航菜单
const closeNav = () => {
  isNavOpen.value = false;
};

// 切换关于我们下拉菜单
const toggleAboutDropdown = (event) => {
  // 在移动端，阻止默认的链接跳转行为
  if (window.innerWidth <= 767) {
    event.preventDefault();
    isAboutDropdownOpen.value = !isAboutDropdownOpen.value;
  }
};

// 关闭关于我们下拉菜单
const closeAboutDropdown = () => {
  isAboutDropdownOpen.value = false;
};

// 切换 Footer box 的 active 状态
const toggleFooterBox = (index) => {
  // 如果点击的是当前激活的 box，则关闭它
  if (activeFooterBox.value === index) {
    activeFooterBox.value = null;
  } else {
    // 否则激活新的 box
    activeFooterBox.value = index;
  }
};

const route = useRoute();
watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (newPath == "/channel") {
      state.isChannel = true;
    } else {
      state.isChannel = false;
    }
    // 路由变化时重新检查header状态
    handleScroll();
  }
);

// 处理滚动事件
const handleScroll = () => {
  // 如果是首页，需要滚动超过100px才添加down类
  if (route.path === "/" || route.path === "/index") {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    isScrolledDown.value = scrollTop > 100;
  } else {
    // 其他页面直接添加down类
    isScrolledDown.value = true;
  }
};

onMounted(() => {
  document.title = config.TITLE;
  // 添加滚动监听
  window.addEventListener("scroll", handleScroll);
  // 初始化检查
  handleScroll();
});

onUnmounted(() => {
  // 移除滚动监听
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
a:hover {
  cursor: pointer;
}
</style>
