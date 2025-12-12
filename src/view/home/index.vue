<template>
  <div class="index-main">
    <div class="index-s1">
      <div
        class="items swiper-container swiper-container-initialized swiper-container-horizontal"
      >
        <div class="swiper-wrapper">
          <div
            class="item swiper-slide swiper-slide-active"
            :style="{ width: windowWidth + 'px' }"
          >
            <video
              src="../../assets/images/video.mp4?v=2"
              poster="../../assets/images/video.jpg"
              autoplay
              muted
              loop
            ></video>
            <div class="video-bg"></div>
            <div class="txt-box cell-box">
              <div class="cell">
                <h3
                  data-swiper-parallax="-100%"
                  data-swiper-parallax-duration="1000"
                  style="transform: translate3d(0%, 0px, 0px)"
                >
                  致力于建立科学合理的商品定价机制
                </h3>
                <p
                  data-swiper-parallax="-100%"
                  data-swiper-parallax-duration="1000"
                  style="transform: translate3d(0%, 0px, 0px)"
                >
                  独立、开放、透明
                </p>
              </div>
            </div>
          </div>
        </div>
        <span
          class="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
      <div
        class="button button-prev swiper-button-disabled"
        tabindex="0"
        role="button"
        aria-label="Previous slide"
        aria-disabled="true"
      ></div>
      <div
        class="button button-next swiper-button-disabled"
        tabindex="0"
        role="button"
        aria-label="Next slide"
        aria-disabled="true"
      ></div>
      <div
        class="pagination swiper-pagination-clickable swiper-pagination-bullets"
      >
        <span
          class="default active"
          tabindex="0"
          role="button"
          aria-label="Go to slide 1"
        ></span>
      </div>
      <div class="scroll">
        <span>scroll</span>
        <i></i>
      </div>
    </div>
    <div class="index-s2">
      <div class="data-info">
        <div class="item">
          <h3 class="h3">会员数量</h3>
          <div class="num">
            <span class="count" ref="memberCountRef" data-target="657">0</span>
            <i>家</i>
          </div>
        </div>
        <div class="item">
          <h3 class="h3">累计交易量</h3>
          <div class="num">
            <span class="count" ref="tradeCountRef" data-target="61717">0</span>
            <i>万吨</i>
          </div>
        </div>
      </div>
      <div class="tab-wrap">
        <div class="tab-tit">
          <div
            class="item"
            :class="{ active: priceIndexTab === 0 }"
            @click="switchPriceIndexTab(0)"
          >
            <span>铁矿石港口现货价格指数(61% 青岛港)</span>
          </div>
          <div
            class="item"
            :class="{ active: priceIndexTab === 1 }"
            @click="switchPriceIndexTab(1)"
          >
            <span>铁矿石港口现货价格指数(61% 曹妃甸港)</span>
          </div>
        </div>
        <div class="tab-cont">
          <div class="child" :class="{ active: priceIndexTab === 0 }">
            <div class="flex">
              <div class="left-block">
                <div
                  class="trend"
                  id="trend4"
                  _echarts_instance_="ec_1765535674181"
                  style="
                    -webkit-tap-highlight-color: transparent;
                    user-select: none;
                    position: relative;
                  "
                >
                  <div
                    style="
                      position: relative;
                      width: 1114px;
                      height: 420px;
                      padding: 0px;
                      margin: 0px;
                      border-width: 0px;
                      cursor: default;
                    "
                  >
                    <canvas
                      data-zr-dom-id="zr_0"
                      width="1114"
                      height="420"
                      style="
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width: 1114px;
                        height: 420px;
                        user-select: none;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        padding: 0px;
                        margin: 0px;
                        border-width: 0px;
                      "
                    ></canvas>
                  </div>
                  <div
                    style="
                      position: absolute;
                      display: none;
                      border-style: solid;
                      white-space: nowrap;
                      z-index: 9999999;
                      transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1),
                        top 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                      background-color: rgba(50, 50, 50, 0.7);
                      border-width: 0px;
                      border-color: rgb(51, 51, 51);
                      border-radius: 4px;
                      color: rgb(255, 255, 255);
                      font: 14px / 21px 'Microsoft YaHei';
                      padding: 5px;
                      left: 910px;
                      top: 61px;
                      pointer-events: none;
                    "
                  >
                    2025-12-04<br /><span
                      style="
                        display: inline-block;
                        margin-right: 5px;
                        border-radius: 10px;
                        width: 10px;
                        height: 10px;
                        background-color: #8e2623;
                      "
                    ></span
                    >792
                  </div>
                </div>
              </div>
              <div class="right-block">
                <div class="title">
                  <!-- <h3 class="h3">基准价</h3> -->
                  <div class="info">
                    <!-- <span class="date table-date">2025.12.12</span> -->
                    <!-- <span>单位：元/湿吨</span> -->
                    <!-- <span>基港：青岛</span> -->
                  </div>
                </div>
                <div class="table" id="table4">
                  <div class="top">
                    <!-- <span>标准品</span> -->
                    <span style="flex: 2" id="table4-date">2025-12-12</span>
                    <span>涨跌</span>
                    <span>月均</span>
                  </div>
                  <div class="bot">
                    <ul>
                      <li class="t0">
                        <span
                          ><i style="color: #8e2623">指数</i
                          ><em
                            style="
                              display: block;
                              font-size: 12px;
                              font-style: normal;
                            "
                            >（元/湿吨）</em
                          ></span
                        >
                        <span class="table4-v11">779.00</span>
                        <span class="table4-v12">0.00</span>
                        <span class="table4-v13">787.50</span>
                      </li>
                      <li class="t1">
                        <span
                          ><i style="color: #e47e30">干吨折算价</i
                          ><em
                            style="
                              display: block;
                              font-size: 12px;
                              font-style: normal;
                            "
                            >（元/干吨）</em
                          ></span
                        >
                        <span class="table4-v21">851.37</span>
                        <span class="table4-v22">0.00</span>
                        <span class="table4-v23">860.66</span>
                      </li>
                      <li class="t2">
                        <span
                          ><i style="color: #2f3e51">美元折算价</i
                          ><em
                            style="
                              display: block;
                              font-size: 12px;
                              font-style: normal;
                            "
                            >（美元/干吨）</em
                          ></span
                        >
                        <span class="table4-v31">102.95</span>
                        <span class="table4-v32">0.03</span>
                        <span class="table4-v33">103.97</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="child" :class="{ active: priceIndexTab === 1 }">
            <div class="flex">
              <div class="left-block">
                <div
                  class="trend"
                  id="trend1"
                  _echarts_instance_="ec_1765535674179"
                  style="
                    -webkit-tap-highlight-color: transparent;
                    user-select: none;
                    position: relative;
                  "
                >
                  <div
                    style="
                      position: relative;
                      width: 1114px;
                      height: 420px;
                      padding: 0px;
                      margin: 0px;
                      border-width: 0px;
                      cursor: default;
                    "
                  >
                    <canvas
                      data-zr-dom-id="zr_0"
                      width="1114"
                      height="420"
                      style="
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width: 1114px;
                        height: 420px;
                        user-select: none;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        padding: 0px;
                        margin: 0px;
                        border-width: 0px;
                      "
                    ></canvas>
                  </div>
                  <div
                    style="
                      position: absolute;
                      display: none;
                      border-style: solid;
                      white-space: nowrap;
                      z-index: 9999999;
                      transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1),
                        top 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                      background-color: rgba(50, 50, 50, 0.7);
                      border-width: 0px;
                      border-color: rgb(51, 51, 51);
                      border-radius: 4px;
                      color: rgb(255, 255, 255);
                      font: 14px / 21px 'Microsoft YaHei';
                      padding: 5px;
                      left: 999px;
                      top: 85px;
                      pointer-events: none;
                    "
                  >
                    2025-12-11<br /><span
                      style="
                        display: inline-block;
                        margin-right: 5px;
                        border-radius: 10px;
                        width: 10px;
                        height: 10px;
                        background-color: #8e2623;
                      "
                    ></span
                    >792
                  </div>
                </div>
              </div>
              <div class="right-block">
                <div class="title">
                  <!-- <h3 class="h3">基准价</h3> -->
                  <div class="info">
                    <!-- <span class="date table-date">2025.12.12</span> -->
                    <!-- <span>单位：美元/干吨</span> -->
                    <!-- <span>CFR 青岛</span> -->
                  </div>
                </div>
                <div class="table" id="table1">
                  <div class="top">
                    <!-- <span>标准品</span> -->
                    <span style="flex: 2" id="table1-date">2025-12-12</span>
                    <span>涨跌</span>
                    <span>月均</span>
                  </div>
                  <div class="bot">
                    <ul>
                      <li class="t0">
                        <span
                          ><i style="color: #8e2623">指数</i
                          ><em
                            style="
                              display: block;
                              font-size: 12px;
                              font-style: normal;
                            "
                            >（元/湿吨）</em
                          ></span
                        >
                        <span class="table1-v11">796.00</span>
                        <span class="table1-v12">4.00</span>
                        <span class="table1-v13">798.70</span>
                      </li>
                      <li class="t1">
                        <span
                          ><i style="color: #e47e30">干吨折算价</i
                          ><em
                            style="
                              display: block;
                              font-size: 12px;
                              font-style: normal;
                            "
                            >（元/干吨）</em
                          ></span
                        >
                        <span class="table1-v21">869.95</span>
                        <span class="table1-v22">4.38</span>
                        <span class="table1-v23">872.90</span>
                      </li>
                      <li class="t2">
                        <span
                          ><i style="color: #2f3e51">美元折算价</i
                          ><em
                            style="
                              display: block;
                              font-size: 12px;
                              font-style: normal;
                            "
                            >（美元/干吨）</em
                          ></span
                        >
                        <span class="table1-v31">104.92</span>
                        <span class="table1-v32">0.58</span>
                        <span class="table1-v33">105.15</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="child">
            <div class="flex">
              <div class="left-block">
                <div
                  class="trend"
                  id="trend3"
                  _echarts_instance_="ec_1765535674180"
                  style="
                    -webkit-tap-highlight-color: transparent;
                    user-select: none;
                    position: relative;
                  "
                >
                  <div
                    style="
                      position: relative;
                      width: 1114px;
                      height: 420px;
                      padding: 0px;
                      margin: 0px;
                      border-width: 0px;
                    "
                  >
                    <canvas
                      data-zr-dom-id="zr_0"
                      width="1114"
                      height="420"
                      style="
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width: 1114px;
                        height: 420px;
                        user-select: none;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        padding: 0px;
                        margin: 0px;
                        border-width: 0px;
                      "
                    ></canvas>
                  </div>
                  <div></div>
                </div>
              </div>
              <!-- <div class="right-block">
                            <h3 class="h3">曹妃甸铁矿石价格指数</h3>
                            <div class="info-1">
                                <span class="date table-date">2025.12.12</span>
                                <span>单位：元/湿吨，车板价</span>
                            </div>
                            <div class="descs">
                                <div class="desc">
                                    <span>标准品</span>
                                    <p class="table3-k1"></p>
                                </div>
                                <div class="desc">
                                    <span>指数</span>
                                    <p class="table3-v1"></p>
                                </div>
                                <div class="desc">
                                    <span>涨跌</span>
                                    <p class="table3-v2"></p>
                                </div>
                                <div class="desc">
                                    <span>月均</span>
                                    <p class="table3-v3"></p>
                                </div>
                            </div>
                        </div> -->
              <div class="right-block">
                <div class="title">
                  <!-- <h3 class="h3">基准价</h3> -->
                  <div class="info">
                    <span class="date table-date">2025-12-12</span>
                    <span>单位：元/湿吨</span>
                    <span>基港：曹妃甸</span>
                  </div>
                </div>
                <div class="table" id="table3">
                  <div class="top">
                    <span>标准品</span>
                    <span>指数</span>
                    <span>涨跌</span>
                    <span>月均</span>
                  </div>
                  <div class="bot">
                    <ul>
                      <li class="t0">
                        <span><i style="color: #e47e30">62%</i>粉矿</span>
                        <span class="table3-v1">796.00</span>
                        <span class="table3-v2">4.00</span>
                        <span class="table3-v3">798.70</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-s3">
      <div class="index-tit white">
        <h3>会员展示</h3>
      </div>
      <div class="tab-cont">
        <div class="tab-tit">
          <span
            :class="{ active: activeMemberTab === 0 }"
            @click="switchMemberTab(0)"
            >国际会员</span
          >
          <span
            :class="{ active: activeMemberTab === 1 }"
            @click="switchMemberTab(1)"
            >国内会员</span
          >
        </div>
      </div>
      <div class="c-map-cont">
        <div :class="['child', { active: activeMemberTab === 0 }]">
          <div class="world">
            <img src="../../assets/images/map-1.png" alt="" class="bg" />
            <div class="circle-box">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="dots">
              <div class="dot jianada" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">加拿大</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>Cliffs Asia Pacific Iron Ore PTY LTD</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot baxi" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">巴西</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>Companhia Siderúrgica Nacional</p>
                              <p>Vale International SA</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot yingguo" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">英国</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>Argus Media Limited</p>
                              <p>METAL BULLETIN IRON ORE INDEX</p>
                              <p>S&amp;P Global Asian Holdings Pte. Ltd.</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot ruishi" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">瑞士</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>Glencore International AG</p>
                              <p>Vale International SA</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot wulanke" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">乌兰克</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>Metinvest International S.A.</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot nanfei" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">南非</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>KUMBA SINGAPORE PTE. LTD.</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot eluosi" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">俄罗斯</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>EuroChem Trading GmbH</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div
                class="dot hanguo active"
                @mouseenter="handleDotHover($event)"
              >
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">韩国</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>POSCO Co., Ltd</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot riben" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">日本</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p style="font-size: 12px">
                                MITSUBISHI CORPORATION RTM INTERNATIONAL PTE.
                                LTD.
                              </p>
                              <p>Marubeni Corporation</p>
                              <p>三井物产株式会社</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>伊藤忠商事株式会社</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span
                          ><span
                            class="default"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 2"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot yindu" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">印度</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>
                                FOMENTO ASSOCIATED SINGAPORE HOLDINGS PTE. LTD.
                              </p>
                              <p>Radiant World PTE. LTD.</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot xinjiapo" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">新加坡</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>BRIGHT RUBY RESOURCES PTE. LIMITED</p>
                              <p>
                                BHP Billiton Marketing AG (Singapore Branch)
                              </p>
                              <p>Cliffs Asia Pacific Iron Ore PTY LTD</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>KUMBA SINGAPORE PTE. LTD.</p>
                              <p>LIANFENG INTERNATIONAL PTE. LTD.</p>
                              <p>MOREBRO PTE. LTD.</p>
                            </div>
                            <div class="item swiper-slide" style="width: 357px">
                              <p>Rio Tinto Commercial Pte. Ltd.</p>
                              <p>
                                SWISS SINGAPORE OVERSEAS ENTERPRISES PTE. LTD.
                              </p>
                              <p>TOPTIP HOLDING PTE. LTD.</p>
                            </div>
                            <div class="item swiper-slide" style="width: 357px">
                              <p>Trafigura Pte Ltd</p>
                              <p>Vale International SA</p>
                              <p>XINSHA INTERNATIONAL PTE. LTD.</p>
                            </div>
                            <div class="item swiper-slide" style="width: 357px">
                              <p>超凯资源有限公司</p>
                              <p>嘉吉国际贸易私人有限公司</p>
                              <p>联核资源有限公司</p>
                            </div>
                            <div class="item swiper-slide" style="width: 357px">
                              <p>信达资源（新加坡）有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span
                          ><span
                            class="default"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 2"
                          ></span
                          ><span
                            class="default"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 3"
                          ></span
                          ><span
                            class="default"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 4"
                          ></span
                          ><span
                            class="default"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 5"
                          ></span
                          ><span
                            class="default"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 6"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot aodaliya" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">澳大利亚</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>
                                BHP Billiton Marketing AG (Singapore Branch)
                              </p>
                              <p>FORTESCUE METALS GROUP LTD</p>
                              <p>Rio Tinto Commercial Pte. Ltd.</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>ROY HILL HOLDINGS PTY LTD</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span
                          ><span
                            class="default"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 2"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot qundao" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">英属维尔京群岛</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div class="swiper-wrapper">
                            <div class="item swiper-slide">
                              <p>合众矿业</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        >
                          <span
                            class="default active"
                            tabindex="0"
                            role="button"
                            aria-label="Go to slide 1"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="m-show">
            <div ref="mShowSwiperContainer" class="m-items swiper-container">
              <div class="swiper-wrapper" style="height: 58px">
                <div class="m-item swiper-slide">
                  <h3 class="h3">加拿大</h3>
                  <div class="para">
                    <p>Cliffs Asia Pacific Iron Ore PTY LTD</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">巴西</h3>
                  <div class="para">
                    <p>Companhia Siderúrgica Nacional</p>
                    <p>Vale International SA</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">英国</h3>
                  <div class="para">
                    <p>Argus Media Limited</p>
                    <p>METAL BULLETIN IRON ORE INDEX</p>
                    <p>S&amp;P Global Asian Holdings Pte. Ltd.</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">瑞士</h3>
                  <div class="para">
                    <p>Glencore International AG</p>
                    <p>Vale International SA</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">乌兰克</h3>
                  <div class="para">
                    <p>Metinvest International S.A.</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">南非</h3>
                  <div class="para">
                    <p>KUMBA SINGAPORE PTE. LTD.</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">俄罗斯</h3>
                  <div class="para">
                    <p>EuroChem Trading GmbH</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">韩国</h3>
                  <div class="para">
                    <p>POSCO Co., Ltd</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">日本</h3>
                  <div class="para">
                    <p>MITSUBISHI CORPORATION RTM INTERNATIONAL PTE. LTD.</p>
                    <p>Marubeni Corporation</p>
                    <p>三井物产株式会社</p>
                    <p>伊藤忠商事株式会社</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">印度</h3>
                  <div class="para">
                    <p>FOMENTO ASSOCIATED SINGAPORE HOLDINGS PTE. LTD.</p>
                    <p>Radiant World PTE. LTD.</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">新加坡</h3>
                  <div class="para">
                    <p>BRIGHT RUBY RESOURCES PTE. LIMITED</p>
                    <p>BHP Billiton Marketing AG (Singapore Branch)</p>
                    <p>Cliffs Asia Pacific Iron Ore PTY LTD</p>
                    <p>KUMBA SINGAPORE PTE. LTD.</p>
                    <p>LIANFENG INTERNATIONAL PTE. LTD.</p>
                    <p>MOREBRO PTE. LTD.</p>
                    <p>Rio Tinto Commercial Pte. Ltd.</p>
                    <p>SWISS SINGAPORE OVERSEAS ENTERPRISES PTE. LTD.</p>
                    <p>TOPTIP HOLDING PTE. LTD.</p>
                    <p>Trafigura Pte Ltd</p>
                    <p>Vale International SA</p>
                    <p>XINSHA INTERNATIONAL PTE. LTD.</p>
                    <p>超凯资源有限公司</p>
                    <p>嘉吉国际贸易私人有限公司</p>
                    <p>联核资源有限公司</p>
                    <p>信达资源（新加坡）有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">澳大利亚</h3>
                  <div class="para">
                    <p>BHP Billiton Marketing AG (Singapore Branch)</p>
                    <p>FORTESCUE METALS GROUP LTD</p>
                    <p>Rio Tinto Commercial Pte. Ltd.</p>
                    <p>ROY HILL HOLDINGS PTY LTD</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">英属维尔京群岛</h3>
                  <div class="para">
                    <p>合众矿业</p>
                  </div>
                </div>
              </div>
              <span
                class="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
            <div
              ref="mShowPagination"
              class="pagination swiper-pagination-clickable swiper-pagination-bullets"
            >
              <span
                class="default active"
                tabindex="0"
                role="button"
                aria-label="Go to slide 1"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 2"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 3"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 4"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 5"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 6"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 7"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 8"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 9"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 10"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 11"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 12"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 13"
              ></span>
            </div>
          </div>
        </div>
        <div :class="['child', { active: activeMemberTab === 1 }]">
          <div class="china">
            <img src="../../assets/images/map-2.png" alt="" class="bg" />
            <div class="circle-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="dots">
              <div class="dot xianggang" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">香港</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>Caravel Metallurgical Limited</p>
                              <p>国创资源有限公司</p>
                              <p>冀东发展（香港）国际有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>华中矿业（集团）有限公司</p>
                              <p>TROIS CORPORATION HK LIMITED</p>
                              <p>第一资源（香港）发展有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>锋睿国际（香港）有限公司</p>
                              <p>恒厚实业（香港）有限公司</p>
                              <p>首集国际贸易有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>香港凯隆资源有限公司</p>
                              <p>永通兴业发展有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot shanghai" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">上海</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>宝武集团</p>
                              <p>淡水河谷金属（上海）有限公司</p>
                              <p>嘉吉投资（中国）有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>宝钢资源有限公司</p>
                              <p>宝矿国际贸易有限公司</p>
                              <p>东汇投资控股集团有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>力拓矿业商贸（上海）有限公司</p>
                              <p>齐切斯特金属（上海）有限公司</p>
                              <p>瑞昕（上海）贸易有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>桑鹰（上海）贸易有限公司</p>
                              <p>上海钢联电子商务股份有限公司</p>
                              <p>上海美匡供应链管理有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>上海闽路润贸易有限公司</p>
                              <p>托克投资（中国）有限公司</p>
                              <p>中建材供应链管理有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot beijing" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">北京</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>河钢集团北京国际贸易有限公司</p>
                              <p>中国首钢国际贸易工程有限公司</p>
                              <p>中信金属股份有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>北京瑞钢联金属有限公司</p>
                              <p>五矿发展股份有限公司</p>
                              <p>中钢贸易有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>中国矿产有限责任公司</p>
                              <p>中化国际（控股）股份有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot chongqing" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">重庆</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>重庆钢铁股份有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot tianjin" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">天津</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>天津建龙钢铁实业有限公司</p>
                              <p>德天（天津）国际贸易发展有限公司</p>
                              <p>天津锦亿供应链管理有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>天津滨海敬业进出口贸易有限公司</p>
                              <p>天津渤海新兴国际贸易有限公司</p>
                              <p>天津钢铁集团有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>天津铁厂有限公司</p>
                              <p>天津文安国际贸易有限公司</p>
                              <p>天津物产能源资源发展有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot tangshan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">唐山</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>中国五矿集团（唐山曹妃甸）矿石控股有限公司</p>
                              <p>首钢股份公司迁安钢铁公司</p>
                              <p>迁安市九江线材有限责任公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>河北华西钢铁有限公司</p>
                              <p>河北津西钢铁集团股份有限公司</p>
                              <p>河北天柱钢铁集团有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>河北文丰钢铁有限公司</p>
                              <p>唐山港陆钢铁有限公司</p>
                              <p>唐山国义特种钢铁有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>唐山金马钢铁集团有限公司</p>
                              <p>唐山瑞丰钢铁（集团）有限公司</p>
                              <p>唐山市德龙钢铁有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>五矿（唐山）矿石发展有限公司</p>
                              <p>河北鑫达钢铁集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot handan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">邯郸</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>金鼎重工有限公司</p>
                              <p>武安市裕华钢铁有限公司</p>
                              <p>河北普阳钢铁有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>河北新武安钢铁集团鑫汇冶金有限公司</p>
                              <p>新武安钢铁有限公司</p>
                              <p>新兴铸管股份有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div
                class="dot shijiazhuang"
                @mouseenter="handleDotHover($event)"
              >
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">石家庄</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>河北敬业集团敬业物资采购有限公司</p>
                              <p>河钢集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot changzhi" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">长治</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>首钢长治钢铁有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot taiyuan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">太原</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>太原钢铁（集团）有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot linfen" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">临汾</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>山西建邦集团有限公司</p>
                              <p>山西建龙钢铁有限公司</p>
                              <p>山西晋南钢铁集团有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>襄汾县新金山特钢有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot jincheng" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">晋城</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>山西晋城钢铁控股集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot hangzhou" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">杭州</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>杭州杭钢对外经济贸易有限公司</p>
                              <p>杭州热联集团股份有限公司</p>
                              <p>浙江物产金属集团有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>浙江永安资本管理有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot ningbo" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">宁波</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>宁波宁钢国际贸易有限公司</p>
                              <p>宁波市恒厚实业有限公司</p>
                              <p>宁波象石实业有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>宁波钢铁有限公司</p>
                              <p>中基宁波集团股份有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot lingyuan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">凌源</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>凌源钢铁股份有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot fushun" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">抚顺</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>抚顺新钢铁有限责任公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot anshan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">鞍山</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>鞍钢集团国际经济贸易有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot tonghua" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">通化</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>通化钢铁股份有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot acheng" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">阿城</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>建龙阿城钢铁有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot nanjing" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">南京</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>南京钢铁股份有限公司</p>
                              <p>苏美达国际技术贸易有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div
                class="dot zhangjiagang"
                @mouseenter="handleDotHover($event)"
              >
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">张家港</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>江苏沙钢集团有限公司</p>
                              <p>江苏永钢集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot changshu" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">常熟</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>常熟市龙腾特种钢有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot changzhou" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">常州</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>中天钢铁集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot maanshan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">马鞍山</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>马鞍山钢铁股份有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot luan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">六安</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>六安钢铁控股集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot xiamen" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">厦门</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>厦门国贸集团股份有限公司</p>
                              <p>厦门建发矿业资源有限公司</p>
                              <p>厦门信达股份有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>厦门象屿物流集团有限责任公司</p>
                              <p>新天钢国贸矿业有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot xinyu" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">新余</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>新余钢铁集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot nanchang" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">南昌</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>方大特钢科技股份有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot pingxiang" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">萍乡</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>江西萍钢实业股份有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot jinan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">济南</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>山东钢铁股份有限公司</p>
                              <p>山东莱钢永锋钢铁有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot qingdao" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">青岛</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>青岛钢铁有限公司</p>
                              <p>青岛世纪瑞丰集团有限公司</p>
                              <p>青岛联合同创矿业有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot zouping" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">邹平</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>山东传洋集团有限公司</p>
                              <p>西王特钢有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot rizhao" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">日照</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>日照宝华钢铁有限公司</p>
                              <p>日照钢铁控股集团有限公司</p>
                              <p>山东来银国际贸易有限公司</p>
                            </div>
                            <div class="item swiper-slide">
                              <p>山东亚融国际贸易有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot weifang" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">潍坊</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>潍坊特钢集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot anyang" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">安阳</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>安阳钢铁集团公司</p>
                              <p>安阳华诚博盛钢铁有限公司</p>
                              <p>安阳市新普钢铁有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot wuhan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">武汉</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>宝武集团鄂城钢铁有限公司</p>
                              <p>大冶特殊钢股份有限公司</p>
                              <p>武钢集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot changsha" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">长沙</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>湖南华菱钢铁集团有限责任公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot shaoguan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">韶关</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>宝武集团广东韶关钢铁有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot haikou" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">海口</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>海南矿业股份有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot shuicheng" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">水城</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>首钢水城钢铁（集团）有限责任公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot kunming" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">昆明</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>云南昆钢国际贸易有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot xian" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">西安</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>陕西钢铁集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot hanzhong" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">汉中</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>陕钢集团汉中钢铁有限责任公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot weinan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">渭南</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>陕西龙门钢铁有限责任公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot jiayuguan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">嘉峪关</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>酒泉钢铁（集团）有限责任公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot guigang" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">贵港</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>广西贵港钢铁集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div
                class="dot fangchenggang"
                @mouseenter="handleDotHover($event)"
              >
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">防城港</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>广西盛隆冶金有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot liuzhou" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">柳州</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>广西柳州钢铁集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot aomen" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">澳门</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>三瑞澳门离岸商业服务有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot wulumuqi" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">乌鲁木齐</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>宝钢集团新疆八一钢铁有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot yili" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">伊犁</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>新疆伊犁钢铁有限责任公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot wuhai" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">乌海</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>内蒙古德晟实业集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot baotou" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">包头</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>包头钢铁(集团)有限责任公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot shizuishan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">石嘴山</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>宁夏兴华钢铁有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot zhongwei" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">中卫</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>宁夏钢铁（集团）有限责任公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
              <div class="dot yinchuan" @mouseenter="handleDotHover($event)">
                <div class="range"><i></i><i></i><i></i></div>
                <span class="name">银川</span>
                <div class="cont">
                  <div class="box">
                    <div class="info">
                      <div class="main">
                        <div class="items swiper-container">
                          <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms"
                          >
                            <div class="item swiper-slide">
                              <p>宁夏晟晏实业集团有限公司</p>
                            </div>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div
                          class="pagination swiper-pagination-clickable swiper-pagination-bullets"
                        ></div>
                      </div>
                    </div>
                    <i class="ani lt"></i>
                    <i class="ani lb"></i>
                    <i class="ani rt"></i>
                    <i class="ani rb"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="m-show">
            <div ref="mShowSwiperContainer2" class="m-items swiper-container">
              <div class="swiper-wrapper">
                <div class="m-item swiper-slide">
                  <h3 class="h3">香港</h3>
                  <div class="para">
                    <p>Caravel Metallurgical Limited</p>
                    <p>国创资源有限公司</p>
                    <p>冀东发展（香港）国际有限公司</p>
                    <p>华中矿业（集团）有限公司</p>
                    <p>TROIS CORPORATION HK LIMITED</p>
                    <p>第一资源（香港）发展有限公司</p>
                    <p>锋睿国际（香港）有限公司</p>
                    <p>恒厚实业（香港）有限公司</p>
                    <p>首集国际贸易有限公司</p>
                    <p>香港凯隆资源有限公司</p>
                    <p>永通兴业发展有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">上海</h3>
                  <div class="para">
                    <p>宝武集团</p>
                    <p>淡水河谷金属（上海）有限公司</p>
                    <p>嘉吉投资（中国）有限公司</p>
                    <p>宝钢资源有限公司</p>
                    <p>宝矿国际贸易有限公司</p>
                    <p>东汇投资控股集团有限公司</p>
                    <p>力拓矿业商贸（上海）有限公司</p>
                    <p>齐切斯特金属（上海）有限公司</p>
                    <p>瑞昕（上海）贸易有限公司</p>
                    <p>桑鹰（上海）贸易有限公司</p>
                    <p>上海钢联电子商务股份有限公司</p>
                    <p>上海美匡供应链管理有限公司</p>
                    <p>上海闽路润贸易有限公司</p>
                    <p>托克投资（中国）有限公司</p>
                    <p>中建材供应链管理有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">北京</h3>
                  <div class="para">
                    <p>河钢集团北京国际贸易有限公司</p>
                    <p>中国首钢国际贸易工程有限公司</p>
                    <p>中信金属股份有限公司</p>
                    <p>北京瑞钢联金属有限公司</p>
                    <p>五矿发展股份有限公司</p>
                    <p>中钢贸易有限公司</p>
                    <p>中国矿产有限责任公司</p>
                    <p>中化国际（控股）股份有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">重庆</h3>
                  <div class="para">
                    <p>重庆钢铁股份有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">天津</h3>
                  <div class="para">
                    <p>天津建龙钢铁实业有限公司</p>
                    <p>德天（天津）国际贸易发展有限公司</p>
                    <p>天津锦亿供应链管理有限公司</p>
                    <p>天津滨海敬业进出口贸易有限公司</p>
                    <p>天津渤海新兴国际贸易有限公司</p>
                    <p>天津钢铁集团有限公司</p>
                    <p>天津铁厂有限公司</p>
                    <p>天津文安国际贸易有限公司</p>
                    <p>天津物产能源资源发展有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">唐山</h3>
                  <div class="para">
                    <p>中国五矿集团（唐山曹妃甸）矿石控股有限公司</p>
                    <p>首钢股份公司迁安钢铁公司</p>
                    <p>迁安市九江线材有限责任公司</p>
                    <p>河北华西钢铁有限公司</p>
                    <p>河北津西钢铁集团股份有限公司</p>
                    <p>河北天柱钢铁集团有限公司</p>
                    <p>河北文丰钢铁有限公司</p>
                    <p>唐山港陆钢铁有限公司</p>
                    <p>唐山国义特种钢铁有限公司</p>
                    <p>唐山金马钢铁集团有限公司</p>
                    <p>唐山瑞丰钢铁（集团）有限公司</p>
                    <p>唐山市德龙钢铁有限公司</p>
                    <p>五矿（唐山）矿石发展有限公司</p>
                    <p>河北鑫达钢铁集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">邯郸</h3>
                  <div class="para">
                    <p>金鼎重工有限公司</p>
                    <p>武安市裕华钢铁有限公司</p>
                    <p>河北普阳钢铁有限公司</p>
                    <p>河北新武安钢铁集团鑫汇冶金有限公司</p>
                    <p>新武安钢铁有限公司</p>
                    <p>新兴铸管股份有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">石家庄</h3>
                  <div class="para">
                    <p>河北敬业集团敬业物资采购有限公司</p>
                    <p>河钢集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">长治</h3>
                  <div class="para">
                    <p>首钢长治钢铁有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">太原</h3>
                  <div class="para">
                    <p>太原钢铁（集团）有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">临汾</h3>
                  <div class="para">
                    <p>山西建邦集团有限公司</p>
                    <p>山西建龙钢铁有限公司</p>
                    <p>山西晋南钢铁集团有限公司</p>
                    <p>襄汾县新金山特钢有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">晋城</h3>
                  <div class="para">
                    <p>山西晋城钢铁控股集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">杭州</h3>
                  <div class="para">
                    <p>杭州杭钢对外经济贸易有限公司</p>
                    <p>杭州热联集团股份有限公司</p>
                    <p>浙江物产金属集团有限公司</p>
                    <p>浙江永安资本管理有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">宁波</h3>
                  <div class="para">
                    <p>宁波宁钢国际贸易有限公司</p>
                    <p>宁波市恒厚实业有限公司</p>
                    <p>宁波象石实业有限公司</p>
                    <p>宁波钢铁有限公司</p>
                    <p>中基宁波集团股份有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">凌源</h3>
                  <div class="para">
                    <p>凌源钢铁股份有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">抚顺</h3>
                  <div class="para">
                    <p>抚顺新钢铁有限责任公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">鞍山</h3>
                  <div class="para">
                    <p>鞍钢集团国际经济贸易有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">通化</h3>
                  <div class="para">
                    <p>通化钢铁股份有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">阿城</h3>
                  <div class="para">
                    <p>建龙阿城钢铁有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">南京</h3>
                  <div class="para">
                    <p>南京钢铁股份有限公司</p>
                    <p>苏美达国际技术贸易有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">张家港</h3>
                  <div class="para">
                    <p>江苏沙钢集团有限公司</p>
                    <p>江苏永钢集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">常熟</h3>
                  <div class="para">
                    <p>常熟市龙腾特种钢有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">常州</h3>
                  <div class="para">
                    <p>中天钢铁集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">马鞍山</h3>
                  <div class="para">
                    <p>马鞍山钢铁股份有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">六安</h3>
                  <div class="para">
                    <p>六安钢铁控股集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">厦门</h3>
                  <div class="para">
                    <p>厦门国贸集团股份有限公司</p>
                    <p>厦门建发矿业资源有限公司</p>
                    <p>厦门信达股份有限公司</p>
                    <p>厦门象屿物流集团有限责任公司</p>
                    <p>新天钢国贸矿业有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">新余</h3>
                  <div class="para">
                    <p>新余钢铁集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">南昌</h3>
                  <div class="para">
                    <p>方大特钢科技股份有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">萍乡</h3>
                  <div class="para">
                    <p>江西萍钢实业股份有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">济南</h3>
                  <div class="para">
                    <p>山东钢铁股份有限公司</p>
                    <p>山东莱钢永锋钢铁有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">青岛</h3>
                  <div class="para">
                    <p>青岛钢铁有限公司</p>
                    <p>青岛世纪瑞丰集团有限公司</p>
                    <p>青岛联合同创矿业有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">邹平</h3>
                  <div class="para">
                    <p>山东传洋集团有限公司</p>
                    <p>西王特钢有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">日照</h3>
                  <div class="para">
                    <p>日照宝华钢铁有限公司</p>
                    <p>日照钢铁控股集团有限公司</p>
                    <p>山东来银国际贸易有限公司</p>
                    <p>山东亚融国际贸易有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">潍坊</h3>
                  <div class="para">
                    <p>潍坊特钢集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">安阳</h3>
                  <div class="para">
                    <p>安阳钢铁集团公司</p>
                    <p>安阳华诚博盛钢铁有限公司</p>
                    <p>安阳市新普钢铁有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">武汉</h3>
                  <div class="para">
                    <p>宝武集团鄂城钢铁有限公司</p>
                    <p>大冶特殊钢股份有限公司</p>
                    <p>武钢集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">长沙</h3>
                  <div class="para">
                    <p>湖南华菱钢铁集团有限责任公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">韶关</h3>
                  <div class="para">
                    <p>宝武集团广东韶关钢铁有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">海口</h3>
                  <div class="para">
                    <p>海南矿业股份有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">水城</h3>
                  <div class="para">
                    <p>首钢水城钢铁（集团）有限责任公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">昆明</h3>
                  <div class="para">
                    <p>云南昆钢国际贸易有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">西安</h3>
                  <div class="para">
                    <p>陕西钢铁集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">汉中</h3>
                  <div class="para">
                    <p>陕钢集团汉中钢铁有限责任公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">渭南</h3>
                  <div class="para">
                    <p>陕西龙门钢铁有限责任公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">嘉峪关</h3>
                  <div class="para">
                    <p>酒泉钢铁（集团）有限责任公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">贵港</h3>
                  <div class="para">
                    <p>广西贵港钢铁集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">防城港</h3>
                  <div class="para">
                    <p>广西盛隆冶金有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">柳州</h3>
                  <div class="para">
                    <p>广西柳州钢铁集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">澳门</h3>
                  <div class="para">
                    <p>三瑞澳门离岸商业服务有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">乌鲁木齐</h3>
                  <div class="para">
                    <p>宝钢集团新疆八一钢铁有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">伊犁</h3>
                  <div class="para">
                    <p>新疆伊犁钢铁有限责任公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">乌海</h3>
                  <div class="para">
                    <p>内蒙古德晟实业集团有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">包头</h3>
                  <div class="para">
                    <p>包头钢铁(集团)有限责任公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">石嘴山</h3>
                  <div class="para">
                    <p>宁夏兴华钢铁有限公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">中卫</h3>
                  <div class="para">
                    <p>宁夏钢铁（集团）有限责任公司</p>
                  </div>
                </div>
                <div class="m-item swiper-slide">
                  <h3 class="h3">银川</h3>
                  <div class="para">
                    <p>宁夏晟晏实业集团有限公司</p>
                  </div>
                </div>
              </div>
              <span
                class="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
            <div
              ref="mShowPagination2"
              class="pagination swiper-pagination-clickable swiper-pagination-bullets"
            >
              <span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 1"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 2"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 3"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 4"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 5"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 6"
              ></span
              ><span
                class="default active"
                tabindex="0"
                role="button"
                aria-label="Go to slide 7"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 8"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 9"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 10"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 11"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 12"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 13"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 14"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 15"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 16"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 17"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 18"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 19"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 20"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 21"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 22"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 23"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 24"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 25"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 26"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 27"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 28"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 29"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 30"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 31"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 32"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 33"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 34"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 35"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 36"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 37"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 38"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 39"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 40"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 41"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 42"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 43"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 44"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 45"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 46"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 47"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 48"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 49"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 50"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 51"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 52"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 53"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 54"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 55"
              ></span
              ><span
                class="default"
                tabindex="0"
                role="button"
                aria-label="Go to slide 56"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-s4">
      <div class="top-block">
        <div class="index-tit gray">
          <h3>新闻与公告</h3>
        </div>
        <div class="tab-tit">
          <span class="active" data-url="/tongzhi.html" @click="switchTab(0)"
            >通知公告</span
          >
          <span @click="switchTab(1)">公司动态</span>
        </div>
        <a href="#/news" class="more">更多新闻</a>
      </div>
      <div class="mid-block">
        <div :class="['child', { active: activeTab === 0 }]">
          <div ref="swiperContainer1" class="items swiper-container">
            <div class="swiper-wrapper">
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    关于增加浮动定价指数及调整相关公式的公告
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    关于发布北铁指数的公告
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    关于暂停发布人民币62%基准价的公告
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    关于更正麦克粉成交价格的公告
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    关于调整交易标的的公告
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    关于暂停发布曹妃甸指数的公告
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    关于会员信息变更的公告
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    关于会员信息变更的公告
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
            </div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
          <div
            class="pagination swiper-pagination-clickable swiper-pagination-bullets"
          >
            <span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 1"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 2"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 3"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 4"
            ></span
            ><span
              class="default active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 5"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 6"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 7"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 8"
            ></span>
          </div>
        </div>
        <div :class="['child', { active: activeTab === 1 }]">
          <div ref="swiperContainer2" class="items swiper-container">
            <div class="swiper-wrapper">
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    重钢首次通过北铁中心完成混矿招标
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    北铁指数应用备忘录签署！产业协同迈入新阶段
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    北铁中心拜访日韩地区行业企业
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    浦项国际（北京）到访北京铁矿石交易中心
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    北京铁矿石交易中心发布铁矿石港口现货价格指数
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    中物联大宗商品流通分会调研组到访北铁中心
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    建龙集团副总裁赵忻一行到访北铁中心
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    北铁中心召开年度股东大会暨董事会会议
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    鞍钢集团国际经济贸易有限公司总经理张永帅一行到访北铁中心
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
              <div class="item swiper-slide">
                <a>
                  <h3 data-swiper-parallax="-100%" class="h3">
                    北铁中心拜访厦门地区行业企业
                  </h3>
                  <span data-swiper-parallax="-100%">了解详情</span>
                </a>
              </div>
            </div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
          <div
            class="pagination swiper-pagination-clickable swiper-pagination-bullets"
          >
            <span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 1"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 2"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 3"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 4"
            ></span
            ><span
              class="default active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 5"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 6"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 7"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 8"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 9"
            ></span
            ><span
              class="default"
              tabindex="0"
              role="button"
              aria-label="Go to slide 10"
            ></span>
          </div>
        </div>
      </div>
      <div class="bot-block">
        <div :class="['child', { active: activeTab === 0 }]"></div>
        <div :class="['child', { active: activeTab === 1 }]">
          <div class="item">
            <a>
              <div class="img-box">
                <img src="../../assets/images/img-4-4.jpg" alt="" />
              </div>
              <div class="txt-box cell-box">
                <div class="cell">
                  <h3 class="h3">重钢首次通过北铁中心完成混矿招标</h3>
                  <!--<p></p>-->
                  <span>了解详情</span>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a>
              <div class="img-box">
                <img src="../../assets/images/img-4-5.jpg" alt="" />
              </div>
              <div class="txt-box cell-box">
                <div class="cell">
                  <h3 class="h3">北铁指数应用备忘录签署！产业协同迈入新阶段</h3>
                  <span>了解详情</span>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a>
              <div class="img-box">
                <img src="../../assets/images/img-4-5.jpg" alt="" />
              </div>
              <div class="txt-box cell-box">
                <div class="cell">
                  <!-- <div class="date">03</div>
                  <div class="month">2025/11</div> -->
                  <h3 class="h3">北铁中心拜访日韩地区行业企业</h3>
                  <!--<p></p>-->
                  <span>了解详情</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted } from "vue";
import "../../assets/css/swiper.min.css";

const activeTab = ref(0);
const activeMemberTab = ref(0); // 会员展示tab：0-国际会员，1-国内会员
const priceIndexTab = ref(0); // 价格指数tab：0-青岛港，1-曹妃甸港（默认显示曹妃甸港）
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1920
);
const swiperContainer1 = ref(null);
const swiperContainer2 = ref(null);
const mShowSwiperContainer = ref(null);
const mShowPagination = ref(null);
const mShowSwiperContainer2 = ref(null);
const mShowPagination2 = ref(null);
const memberCountRef = ref(null);
const tradeCountRef = ref(null);
let swiper1 = null;
let swiper2 = null;
let mShowSwiper = null;
let mShowSwiper2 = null;
let Swiper = null;
const mapSwipers = new Map(); // 存储所有地点的swiper实例
let countObserver = null; // 数字滚动观察器

// 加载 Swiper
const loadSwiper = async () => {
  if (typeof window !== "undefined" && window.Swiper) {
    Swiper = window.Swiper;
    return;
  }

  try {
    const swiperModule = await import("swiper");
    Swiper = swiperModule.default || swiperModule.Swiper || swiperModule;
  } catch (e) {
    console.warn("Swiper not found. Please install: npm install swiper");
    // 如果无法导入，尝试使用全局Swiper
    if (typeof window !== "undefined" && window.Swiper) {
      Swiper = window.Swiper;
    }
  }
};

const initSwiper = (container, index) => {
  if (!container || !Swiper) return null;

  const paginationEl = container.parentElement?.querySelector(".pagination");

  const swiper = new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    parallax: true,
    // 不使用 Swiper 的自动分页器，手动管理
    pagination: false,
    on: {
      init: function () {
        // 初始化时更新分页器状态
        if (paginationEl) {
          const bullets = paginationEl.querySelectorAll(".default");
          bullets.forEach((bullet, i) => {
            bullet.classList.toggle("active", i === this.activeIndex);
          });
        }
      },
      slideChange: function () {
        // 切换时更新分页器状态
        if (paginationEl) {
          const bullets = paginationEl.querySelectorAll(".default");
          bullets.forEach((bullet, i) => {
            bullet.classList.toggle("active", i === this.activeIndex);
          });
        }
      },
    },
  });

  // 手动绑定分页器点击事件
  if (paginationEl) {
    const bullets = paginationEl.querySelectorAll(".default");
    bullets.forEach((bullet, bulletIndex) => {
      bullet.addEventListener("click", () => {
        swiper.slideTo(bulletIndex);
      });
    });
  }

  return swiper;
};

const switchTab = (index) => {
  activeTab.value = index;
  nextTick(() => {
    if (index === 0 && swiperContainer1.value && !swiper1) {
      swiper1 = initSwiper(swiperContainer1.value, 0);
    } else if (index === 1 && swiperContainer2.value && !swiper2) {
      swiper2 = initSwiper(swiperContainer2.value, 1);
    }

    // 更新tab标题的active状态
    const tabTitles = document.querySelectorAll(".index-s4 .tab-tit span");
    tabTitles.forEach((tab, i) => {
      tab.classList.toggle("active", i === index);
    });
  });
};

// 初始化所有地点的swiper
const initMapSwipers = () => {
  if (!Swiper) return;

  // 查找所有地点的swiper容器
  const mapContainers = document.querySelectorAll(
    ".c-map-cont .dot .items.swiper-container"
  );

  mapContainers.forEach((container) => {
    const dot = container.closest(".dot");
    if (!dot) return;

    const dotClass = Array.from(dot.classList).find(
      (cls) => cls !== "dot" && cls !== "active"
    );
    if (!dotClass) return;

    // 查找分页器
    const paginationEl = container.parentElement?.querySelector(".pagination");
    const slides = container.querySelectorAll(".swiper-slide");

    if (slides.length === 0) return;

    // 初始化swiper
    const swiper = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 600,
      pagination:
        paginationEl && slides.length > 1
          ? {
              el: paginationEl,
              clickable: true,
              bulletClass: "default",
              bulletActiveClass: "active",
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '" tabindex="0" role="button" aria-label="Go to slide ' +
                  (index + 1) +
                  '"></span>'
                );
              },
            }
          : false,
      on: {
        init: function () {
          if (paginationEl && slides.length > 1) {
            const bullets = paginationEl.querySelectorAll(".default");
            bullets.forEach((bullet, i) => {
              bullet.classList.toggle("active", i === this.activeIndex);
            });
          }
        },
        slideChange: function () {
          if (paginationEl && slides.length > 1) {
            const bullets = paginationEl.querySelectorAll(".default");
            bullets.forEach((bullet, i) => {
              bullet.classList.toggle("active", i === this.activeIndex);
            });
          }
        },
      },
    });

    // 手动绑定分页器点击事件（如果有多个slide）
    if (paginationEl && slides.length > 1) {
      const bullets = paginationEl.querySelectorAll(".default");
      bullets.forEach((bullet, bulletIndex) => {
        bullet.addEventListener("click", () => {
          swiper.slideTo(bulletIndex);
        });
      });
    }

    mapSwipers.set(dotClass, swiper);
  });
};

// 处理地点hover事件
const handleDotHover = (event) => {
  const target = event.currentTarget || event.target.closest(".dot");
  if (!target) return;

  // 移除所有dot的active类
  const allDots = document.querySelectorAll(".dots .dot");
  allDots.forEach((dot) => dot.classList.remove("active"));

  // 给被hover的dot添加active类
  target.classList.add("active");
};

// 切换会员展示tab
const switchMemberTab = (index) => {
  activeMemberTab.value = index;
};

// 切换价格指数tab
const switchPriceIndexTab = (index) => {
  priceIndexTab.value = index;
};

// 数字递增动画函数
const animateNumber = (element, target, duration = 1000) => {
  if (!element) return;
  
  const start = 0;
  const startTime = performance.now();
  const targetNum = parseInt(target, 10);
  
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // 使用缓动函数（ease-out）
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (targetNum - start) * easeOut);
    
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.textContent = targetNum.toLocaleString();
    }
  };
  
  requestAnimationFrame(animate);
};

// 初始化数字滚动动画
const initCountAnimation = () => {
  if (typeof window === "undefined" || !window.IntersectionObserver) {
    // 如果不支持 IntersectionObserver，直接执行动画
    if (memberCountRef.value) {
      const target = memberCountRef.value.getAttribute("data-target");
      animateNumber(memberCountRef.value, target);
    }
    if (tradeCountRef.value) {
      const target = tradeCountRef.value.getAttribute("data-target");
      animateNumber(tradeCountRef.value, target);
    }
    return;
  }

  // 创建 Intersection Observer
  countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const target = entry.target.getAttribute("data-target");
          animateNumber(entry.target, target);
          entry.target.dataset.animated = "true";
          // 动画完成后取消观察
          countObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // 当元素50%可见时触发
      rootMargin: "0px",
    }
  );

  // 观察数字元素
  if (memberCountRef.value) {
    countObserver.observe(memberCountRef.value);
  }
  if (tradeCountRef.value) {
    countObserver.observe(tradeCountRef.value);
  }
};

// 更新窗口宽度
const updateWindowWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(async () => {
  // 初始化窗口宽度
  updateWindowWidth();

  // 监听窗口大小变化
  if (typeof window !== "undefined") {
    // console.log(111)
    window.addEventListener("resize", updateWindowWidth);
  }

  // 初始化数字滚动动画
  await nextTick();
  initCountAnimation();

  await loadSwiper();
  await nextTick();

  // 初始化第一个轮播（默认显示）
  if (swiperContainer1.value && Swiper) {
    swiper1 = initSwiper(swiperContainer1.value, 0);
  }

  // 初始化所有地点的swiper
  if (Swiper) {
    initMapSwipers();
  }

  // 初始化m-show轮播
  if (mShowSwiperContainer.value && mShowPagination.value && Swiper) {
    const slides = mShowSwiperContainer.value.querySelectorAll(".swiper-slide");
    if (slides.length > 0) {
      mShowSwiper = new Swiper(mShowSwiperContainer.value, {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 600,
        pagination: {
          el: mShowPagination.value,
          clickable: true,
          bulletClass: "default",
          bulletActiveClass: "active",
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '" tabindex="0" role="button" aria-label="Go to slide ' +
              (index + 1) +
              '"></span>'
            );
          },
        },
        on: {
          init: function () {
            const bullets = mShowPagination.value.querySelectorAll(".default");
            bullets.forEach((bullet, i) => {
              bullet.classList.toggle("active", i === this.activeIndex);
            });
          },
          slideChange: function () {
            const bullets = mShowPagination.value.querySelectorAll(".default");
            bullets.forEach((bullet, i) => {
              bullet.classList.toggle("active", i === this.activeIndex);
            });
          },
        },
      });

      // 手动绑定分页器点击事件
      const bullets = mShowPagination.value.querySelectorAll(".default");
      bullets.forEach((bullet, bulletIndex) => {
        bullet.addEventListener("click", () => {
          mShowSwiper.slideTo(bulletIndex);
        });
      });
    }
  }

  // 初始化第二个m-show轮播（国内会员）
  if (mShowSwiperContainer2.value && mShowPagination2.value && Swiper) {
    const slides =
      mShowSwiperContainer2.value.querySelectorAll(".swiper-slide");
    if (slides.length > 0) {
      mShowSwiper2 = new Swiper(mShowSwiperContainer2.value, {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 600,
        pagination: {
          el: mShowPagination2.value,
          clickable: true,
          bulletClass: "default",
          bulletActiveClass: "active",
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '" tabindex="0" role="button" aria-label="Go to slide ' +
              (index + 1) +
              '"></span>'
            );
          },
        },
        on: {
          init: function () {
            const bullets = mShowPagination2.value.querySelectorAll(".default");
            bullets.forEach((bullet, i) => {
              bullet.classList.toggle("active", i === this.activeIndex);
            });
          },
          slideChange: function () {
            const bullets = mShowPagination2.value.querySelectorAll(".default");
            bullets.forEach((bullet, i) => {
              bullet.classList.toggle("active", i === this.activeIndex);
            });
          },
        },
      });

      // 手动绑定分页器点击事件
      const bullets = mShowPagination2.value.querySelectorAll(".default");
      bullets.forEach((bullet, bulletIndex) => {
        bullet.addEventListener("click", () => {
          mShowSwiper2.slideTo(bulletIndex);
        });
      });
    }
  }

  // 初始化 echarts - trend1
  await nextTick();
  // 等待 DOM 完全渲染，可能需要多次 nextTick
  await nextTick();
  const trend1Element = document.getElementById("trend1");
  if (trend1Element && window.echarts) {
    // 检查元素是否有宽度和高度
    if (trend1Element.offsetWidth === 0 || trend1Element.offsetHeight === 0) {
      console.warn("trend1 element has no dimensions, waiting...");
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const myChart1 = window.echarts.init(trend1Element);
    if (!myChart1) {
      console.error("Failed to initialize echarts");
      return;
    }
    myChart1.off("legendselectchanged");

    const option = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["65%粉矿"],
        right: 60,
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
        },
        {
          type: "inside",
          realtime: true,
        },
      ],
      grid: {
        show: false,
        top: 40,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#c0c5ca",
          },
        },
        axisLabel: {
          fontSize: 12,
          color: "#2f3e51",
        },
        data: [],
      },
      yAxis: {
        type: "value",
        max: "dataMax",
        min: "dataMin",
        axisLine: {
          show: true,
          lineStyle: {
            color: "#c0c5ca",
          },
        },
        axisLabel: {
          fontSize: 12,
          color: "#2f3e51",
        },
      },
      series: [
        {
          // name: "65%粉矿",
          type: "line",
          // smooth: true,
          sampling: "average",
          itemStyle: {
            color: "#8e2623",
          },
          data: [],
        },
      ],
    };

    myChart1.on("legendselectchanged", function (params) {
      const name = params.name;
      const selected = params.selected;
      const select_key = Object.keys(selected);
      const select_value = Object.values(selected);
      const $ = window.$ || window.jQuery;
      if ($) {
        if (name == "65%粉矿" && select_value[0] == false) {
          $("#table1 li.t0").hide();
        } else if (name == "65%粉矿" && select_value[0] == true) {
          $("#table1 li.t0").show();
        } else if (name == "62%粉矿" && select_value[1] == false) {
          $("#table1 li.t1").hide();
        } else if (name == "62%粉矿" && select_value[1] == true) {
          $("#table1 li.t1").show();
        } else if (name == "58%粉矿" && select_value[2] == false) {
          $("#table1 li.t2").hide();
        } else if (name == "58%粉矿" && select_value[2] == true) {
          $("#table1 li.t2").show();
        }
      }
    });

    // 直接设置初始数据（硬编码的数据）
    const xAxisData = [
      "2025-09-28",
      "2025-09-29",
      "2025-09-30",
      "2025-10-09",
      "2025-10-10",
      "2025-10-11",
      "2025-10-13",
      "2025-10-14",
      "2025-10-15",
      "2025-10-16",
      "2025-10-17",
      "2025-10-20",
      "2025-10-21",
      "2025-10-22",
      "2025-10-23",
      "2025-10-24",
      "2025-10-27",
      "2025-10-28",
      "2025-10-29",
      "2025-10-30",
      "2025-10-31",
      "2025-11-03",
      "2025-11-04",
      "2025-11-05",
      "2025-11-06",
      "2025-11-07",
      "2025-11-10",
      "2025-11-11",
      "2025-11-12",
      "2025-11-13",
      "2025-11-14",
      "2025-11-17",
      "2025-11-18",
      "2025-11-19",
      "2025-11-20",
      "2025-11-21",
      "2025-11-24",
      "2025-11-25",
      "2025-11-26",
      "2025-11-27",
      "2025-11-28",
      "2025-12-01",
      "2025-12-02",
      "2025-12-03",
      "2025-12-04",
      "2025-12-05",
      "2025-12-08",
      "2025-12-09",
      "2025-12-10",
      "2025-12-11",
      "2025-12-12",
    ];

    // 将字符串数据转换为数字
    const seriesData = [
      781, 778, 774, 781, 788, 788, 793, 783, 781, 782, 783, 780, 781, 786, 785,
      781, 796, 801, 810, 807, 805, 793, 789, 789, 790, 782, 786, 780, 787, 786,
      780, 795, 799, 799, 798, 795, 803, 805, 804, 805, 802, 807, 809, 806, 803,
      794, 792, 792, 796, 792, 796,
    ];

    // 更新 option 中的数据
    option.xAxis.data = xAxisData;
    option.series[0].data = seriesData;

    myChart1.setOption(option, true); // true 表示不合并，完全替换

    // 确保图表正确渲染
    setTimeout(() => {
      myChart1.resize();
    }, 100);

    // 异步获取数据（如果需要从服务器更新数据）
    const $ = window.$ || window.jQuery;
    if ($ && $.post) {
      $.post("/asyn-request/report/cfd2.html", {
        _token: "QgRUnr04s6bcpvDojLVSS8JFoCb98xhRt5inyy2c",
      })
        .done(function (data) {
          // console.log(data.data.key)
          if (data && data.data) {
            $(".table-date").html(data.data.key[data.data.key.length - 1]);
            $("#table1-date").html(data.data.date);
            // 如果服务器返回了新数据，更新图表
            if (data.data.key && data.data.v1) {
              // 确保 v1 数据是数字数组
              const serverData = data.data.v1.map((val) => Number(val));
              myChart1.setOption({
                xAxis: {
                  data: data.data.key,
                },
                series: [
                  {
                    data: serverData,
                  },
                ],
              });
            }
          }
        })
        .fail(function () {
          console.warn(
            "Failed to load chart data from server, using default data"
          );
        });

      $.post("/asyn-request/report/cfd2-data.html", {
        _token: "QgRUnr04s6bcpvDojLVSS8JFoCb98xhRt5inyy2c",
      }).done(function (data) {
        // console.log(data.data)
        $(".table1-v11").html(data.data.v1[0]);
        $(".table1-v12").html(data.data.v2[0]);
        $(".table1-v13").html(data.data.v3[0]);
        $(".table1-v21").html(data.data.v1[1]);
        $(".table1-v22").html(data.data.v2[1]);
        $(".table1-v23").html(data.data.v3[1]);
        $(".table1-v31").html(data.data.v1[2]);
        $(".table1-v32").html(data.data.v2[2]);
        $(".table1-v33").html(data.data.v3[2]);
      });
    }
  }

  // 初始化 echarts - trend4
  await nextTick();
  await nextTick();
  const trend4Element = document.getElementById("trend4");
  if (trend4Element && window.echarts) {
    // 检查元素是否有宽度和高度
    if (trend4Element.offsetWidth === 0 || trend4Element.offsetHeight === 0) {
      console.warn("trend4 element has no dimensions, waiting...");
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const myChart4 = window.echarts.init(trend4Element);
    if (!myChart4) {
      console.error("Failed to initialize echarts for trend4");
      return;
    }
    myChart4.off("legendselectchanged");

    const option4 = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["65%粉矿"],
        right: 60,
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
        },
        {
          type: "inside",
          realtime: true,
        },
      ],
      grid: {
        show: false,
        top: 40,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#c0c5ca",
          },
        },
        axisLabel: {
          fontSize: 12,
          color: "#2f3e51",
        },
        data: [],
      },
      yAxis: {
        type: "value",
        max: "dataMax",
        min: "dataMin",
        axisLine: {
          show: true,
          lineStyle: {
            color: "#c0c5ca",
          },
        },
        axisLabel: {
          fontSize: 12,
          color: "#2f3e51",
        },
      },
      series: [
        {
          // name: "65%粉矿",
          type: "line",
          // smooth: true,
          sampling: "average",
          itemStyle: {
            color: "#8e2623",
          },
          data: [],
        },
      ],
    };

    myChart4.on("legendselectchanged", function (params) {
      const name = params.name;
      const selected = params.selected;
      const select_key = Object.keys(selected);
      const select_value = Object.values(selected);
      const $ = window.$ || window.jQuery;
      if ($) {
        if (name == "65%粉矿" && select_value[0] == false) {
          $("#table4 li.t0").hide();
        } else if (name == "65%粉矿" && select_value[0] == true) {
          $("#table4 li.t0").show();
        } else if (name == "62%粉矿" && select_value[1] == false) {
          $("#table4 li.t1").hide();
        } else if (name == "62%粉矿" && select_value[1] == true) {
          $("#table4 li.t1").show();
        } else if (name == "58%粉矿" && select_value[2] == false) {
          $("#table4 li.t2").hide();
        } else if (name == "58%粉矿" && select_value[2] == true) {
          $("#table4 li.t2").show();
        }
      }
    });

    // 使用 trend1 的相同数据（稍后可以替换）
    const xAxisData4 = [
      "2025-09-28",
      "2025-09-29",
      "2025-09-30",
      "2025-10-09",
      "2025-10-10",
      "2025-10-11",
      "2025-10-13",
      "2025-10-14",
      "2025-10-15",
      "2025-10-16",
      "2025-10-17",
      "2025-10-20",
      "2025-10-21",
      "2025-10-22",
      "2025-10-23",
      "2025-10-24",
      "2025-10-27",
      "2025-10-28",
      "2025-10-29",
      "2025-10-30",
      "2025-10-31",
      "2025-11-03",
      "2025-11-04",
      "2025-11-05",
      "2025-11-06",
      "2025-11-07",
      "2025-11-10",
      "2025-11-11",
      "2025-11-12",
      "2025-11-13",
      "2025-11-14",
      "2025-11-17",
      "2025-11-18",
      "2025-11-19",
      "2025-11-20",
      "2025-11-21",
      "2025-11-24",
      "2025-11-25",
      "2025-11-26",
      "2025-11-27",
      "2025-11-28",
      "2025-12-01",
      "2025-12-02",
      "2025-12-03",
      "2025-12-04",
      "2025-12-05",
      "2025-12-08",
      "2025-12-09",
      "2025-12-10",
      "2025-12-11",
      "2025-12-12",
    ];

    // 将字符串数据转换为数字（使用 trend1 的相同数据）
    const seriesData4 = [
      772, 769, 765, 774, 777, 777, 784, 772, 769, 770, 770, 768, 772, 777, 777,
      777, 787, 790, 801, 799, 797, 780, 777, 777, 782, 769, 769, 768, 777, 775,
      777, 791, 793, 793, 793, 789, 794, 796, 797, 797, 795, 799, 799, 797, 792,
      782, 778, 783, 787, 779, 779,
    ];

    // 更新 option 中的数据
    option4.xAxis.data = xAxisData4;
    option4.series[0].data = seriesData4;

    myChart4.setOption(option4, true); // true 表示不合并，完全替换

    // 确保图表正确渲染
    setTimeout(() => {
      myChart4.resize();
    }, 100);

    // 异步获取数据（如果需要从服务器更新数据）
    const $ = window.$ || window.jQuery;
    if ($ && $.post) {
      // 注意：这里使用的是 trend1 的接口，稍后可以改为 trend4 的接口
      $.post("/asyn-request/report/cfd2.html", {
        _token: "QgRUnr04s6bcpvDojLVSS8JFoCb98xhRt5inyy2c",
      })
        .done(function (data) {
          if (data && data.data) {
            $(".table-date").html(data.data.key[data.data.key.length - 1]);
            $("#table4-date").html(data.data.date);
            // 如果服务器返回了新数据，更新图表
            if (data.data.key && data.data.v1) {
              // 确保 v1 数据是数字数组
              const serverData = data.data.v1.map((val) => Number(val));
              myChart4.setOption({
                xAxis: {
                  data: data.data.key,
                },
                series: [
                  {
                    data: serverData,
                  },
                ],
              });
            }
          }
        })
        .fail(function () {
          console.warn(
            "Failed to load chart data from server for trend4, using default data"
          );
        });

      $.post("/asyn-request/report/cfd2-data.html", {
        _token: "QgRUnr04s6bcpvDojLVSS8JFoCb98xhRt5inyy2c",
      }).done(function (data) {
        if (data && data.data) {
          $(".table4-v11").html(data.data.v1[0]);
          $(".table4-v12").html(data.data.v2[0]);
          $(".table4-v13").html(data.data.v3[0]);
          $(".table4-v21").html(data.data.v1[1]);
          $(".table4-v22").html(data.data.v2[1]);
          $(".table4-v23").html(data.data.v3[1]);
          $(".table4-v31").html(data.data.v1[2]);
          $(".table4-v32").html(data.data.v2[2]);
          $(".table4-v33").html(data.data.v3[2]);
        }
      });
    }
  }
});

onUnmounted(() => {
  // 移除窗口大小变化监听
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }
  
  // 清理数字滚动观察器
  if (countObserver) {
    countObserver.disconnect();
    countObserver = null;
  }
});
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
.index-s1 .item video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  display: block;
  z-index: 1;
}
</style>
