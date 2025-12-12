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
                <img src="../../assets/images/img-4-6.jpg" alt="" />
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
    <div class="index-s5">
      <div class="left-box cell-box">
        <div class="cell">
          <div class="index-tit white">
            <h3>联系我们</h3>
          </div>
          <div class="info">
            <span>北京市石景山区石景山路31号院盛景国际广场A座20层</span>
            <span>100043</span>
            <span>010-57712888</span>
            <span>010-57712899</span>
            <span>enquiry@corex.cc</span>
            <span>https://www.corex.cc</span>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="map">
          <img
            src="../../assets/images/addr.jpg"
            style="width: 100%; height: 100%; object-fit: cover"
            alt=""
          />
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
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1920
);
const swiperContainer1 = ref(null);
const swiperContainer2 = ref(null);
const mShowSwiperContainer = ref(null);
const mShowPagination = ref(null);
const mShowSwiperContainer2 = ref(null);
const mShowPagination2 = ref(null);
let swiper1 = null;
let swiper2 = null;
let mShowSwiper = null;
let mShowSwiper2 = null;
let Swiper = null;
const mapSwipers = new Map(); // 存储所有地点的swiper实例

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
});

onUnmounted(() => {
  // 移除窗口大小变化监听
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
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
