<template>
  <div class="about-intro c-pd">
    <div class="c-banner">
      <div class="img-box">
        <!-- 公司简介 -->
        <img
          v-show="activeTab === 0"
          src="https://www.corex.cc//uploads/images/2021/0319/YBtMFosT2naWMr7epb9CCMQYYwJz4Qq4366Q0EJq.jpg"
          alt=""
        />
        <!-- 董事长寄语 -->
        <img
          v-show="activeTab === 1"
          src="https://www.corex.cc//uploads/images/2021/0319/fW46Jo1trMDjho6vNiK4Y4sCDO00mFB2btW3Dhbh.jpg"
          alt="101"
        />
        <!-- 总裁致辞 -->
        <img
          v-show="activeTab === 2"
          src="https://www.corex.cc//uploads/images/2021/0319/wjdVaam7IcgGI8pQDAXNh0ukbcMVe9SsWN760ytp.jpg"
          alt=""
        />
        <!-- 管理团队 -->
        <img
          v-show="activeTab === 3"
          src="https://www.corex.cc//uploads/images/2021/0319/OTxhbJDRelIZBB0K5CpeS7SdzhaEzl4bj8hQcQwt.jpg"
          alt=""
        />
        <!-- 企业文化 -->
        <img
          v-show="activeTab === 4"
          src="https://www.corex.cc//uploads/images/2021/0319/ROHwIlGfU50CwGynDa5ZzvmG1eMAc60kvAC4GvVb.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="c-content">
      <div class="wrapper">
        <div class="flex">
          <div class="left-block">
            <div class="title">
              <h3 class="h3">关于我们</h3>
              <span>About Us</span>
            </div>
            <div class="link">
              <div
                class="box"
                :class="{ active: activeTab === 0 }"
                @click="switchTab(0)"
              >
                <a @click.prevent>公司简介</a>
              </div>
              <div
                class="box"
                :class="{ active: activeTab === 1 }"
                @click="switchTab(1)"
              >
                <a @click.prevent>董事长寄语</a>
              </div>
              <div
                class="box"
                :class="{ active: activeTab === 2 }"
                @click="switchTab(2)"
              >
                <a @click.prevent>总裁致辞</a>
              </div>
              <div
                class="box"
                :class="{ active: activeTab === 3 }"
                @click="switchTab(3)"
              >
                <a @click.prevent>管理团队</a>
              </div>
              <div
                class="box"
                :class="{ active: activeTab === 4 }"
                @click="switchTab(4)"
              >
                <a @click.prevent>企业文化</a>
              </div>
            </div>
          </div>
          <!-- 公司简介 -->
          <div class="right-block" v-show="activeTab === 0">
            <div class="c-crumbs">
              <a href="/" class="home"></a>
              <a href="#/about?tab=0" class="link">关于我们</a>
              <a href="#/about?tab=0" class="link">公司简介</a>
            </div>
            <div class="about-intro-s1">
              <div class="title">北铁中心</div>
              <div class="para">
                北京铁矿石交易中心股份有限公司（简称“北铁中心”）是经北京市人民政府及相关主管部门批准，由中钢协、宝武、河钢、鞍钢、首钢、五矿、中信、中国矿产、淡水河谷（Vale）、必和必拓（BHP）、力拓（Rio
                Tinto）和福德士河（Fortescue）等相关行业领袖企业共同设立的第一家中外合资股份制交易场所，是中国铁矿石现货交易平台（简称“平台”）的运营机构。平台于2012年5月8日开市运行，采用电子交易系统，为境内外铁矿石生产、贸易和冶炼企业提供高效便捷的电子商务渠道。<br />
                <br />
                自成立以来，北铁中心专注于深耕铁矿石现货交易市场，发挥服务优化、产品创新、科技赋能、运营规范、数据公信等优势，竭诚为产业链上下游企业提供现货交易、市场管理及商务咨询等服务。<br />
                <br />
                经过多年耕耘，北铁中心已成为行业领先的铁矿石现货交易平台。截至2025年11月30日，北铁中心会员企业657家，累计成交20385笔，成交量约6.17亿吨，成交金额约666亿美元；平台交易数据已成为国内外指数机构的数据源和市场风向标。<br />
                <br />
                2020年9月7日，《国务院关于深化北京市新一轮服务业扩大开放综合试点建设国家服务业扩大开放综合示范区工作方案的批复》明确提出推动北铁中心建立科学合理的商品定价机制，成为北京市金融业对外开放的重要组成部分。这对北铁中心未来发展提出了更高、更明确的要求，也为北铁中心创新发展注入了新的动力。
              </div>
              <div class="img-box">
                <img
                  src="https://www.corex.cc//uploads/images/2021/0330/eRQCLWELVatbdYcaH0JWSsjKKZnbbKo9KYn86leZ.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- 董事长寄语 -->
          <div class="right-block" v-show="activeTab === 1">
            <div class="c-crumbs">
              <a href="/" class="home"></a>
              <a href="#/about?tab=0" class="link">关于我们</a>
              <a href="#/about?tab=1" class="link">董事长寄语</a>
            </div>
            <div class="about-message-s1">
              <div class="top-block">
                <div
                  class="img-box"
                  style="width: 250px; padding: 10px 0 0 50px"
                >
                  <img
                    src="https://www.corex.cc//uploads/images/2024/0426/jEX4b7PcZrlgYCBKip2veeUEGu6qpWsrcmOQdSyE.jpg"
                    style="width: 200px"
                    alt="102"
                  />
                </div>
                <div class="txt-box">
                  <p>
                    2014年8月29日，中国钢铁工业协会及境内外主要钢厂、矿山和贸易企业共同合资设立北京铁矿石交易中心股份有限公司（简称“北铁中心”），这是全球铁矿石产业链上下游“共建、共赢、共发展”的积极探索。
                  </p>
                  <br />
                  <p>
                    钢铁工业是我国国民经济的重要基础产业，是中国经济高质量发展的重要支撑，铁矿石是钢铁生产的重要原材料。依托中国最大铁矿石市场份额设立，北铁中心顺应了国际铁矿石贸易模式变化趋势，致力于通过充分发挥市场在资源配置中的决定性作用，推动建立科学合理的铁矿石定价机制，助力钢铁和铁矿石行业的健康、稳定、有序发展，实现产业链互惠共赢。
                  </p>
                  <br />
                  <p>
                    实现“十四五”发展规划，要求深入贯彻新发展理念、准确把握新发展阶段、加快构建新发展格局。面对新形势下的新要求，钢铁和矿石企业要有新思维。未来，我们将坚持以市场为导向，继续与广大市场参与者一道，集思广益，群策群力，共同加速推动平台做大做强，为实体经济提供坚实有力的支持!
                  </p>
                </div>
              </div>
              <div class="bot-block">
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <!-- 总裁致辞 -->
          <div class="right-block" v-show="activeTab === 2">
            <div class="c-crumbs">
              <a href="/" class="home"></a>
              <a href="#/about?tab=0" class="link">关于我们</a>
              <a href="#/about?tab=2" class="link">总裁致辞</a>
            </div>
            <div class="about-message-s1">
              <div class="top-block">
                <div
                  class="img-box"
                  style="width: 250px; padding: 10px 0 0 50px"
                >
                  <img
                    src="https://www.corex.cc//uploads/images/2024/0507/unGq0BzMe8eTs3YEnrxd0yDt8u9L4Tl639CAqN8Y.jpg"
                    style="width: 200px"
                    alt="202"
                  />
                </div>
                <div class="txt-box">
                  功崇惟志，业广惟勤。2014年，在大宗商品市场融合变革之际，为行业健康发展之需，北京铁矿石交易中心股份有限公司（简称“北铁中心”）应时而生。凝聚产业链互惠共赢之愿景，汇集中外股东雄厚实力，北铁中心深耕铁矿石现货交易市场十余载，在各方的支持与见证下已成长为行业领先的铁矿石现货交易平台。
                  <p><br /></p>
                  <p>
                    自成立以来，北铁中心始终坚持以服务实体经济为宗旨，不断做实、做优、做强价格发现与商品流通两项核心功能，积极践行社会责任，推动建立科学合理的铁矿石定价机制。历经沉淀，北铁中心的会员数量和交易规模实现跨越式发展，在会员服务优化、交易系统升级、资讯信息编制、创新业务探索等方面取得了重要进展，资源整合与市场服务能力大为提升。
                  </p>
                  <p><br /></p>
                  <p>
                    立足当下，展望未来，北铁中心将继续秉承市场化、规范化、国际化的发展理念，加强与全球合作伙伴的联动，融入新的发展格局，发挥统一大市场基础设施作用，打造独立、开放、透明的铁矿石综合服务平台，为全球铁矿石及钢铁行业的高质量、可持续发展做出新贡献。
                  </p>
                </div>
              </div>
              <div class="bot-block">
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <!-- 管理团队 -->
          <div class="right-block" v-show="activeTab === 3">
            <div class="c-crumbs">
              <a href="/" class="home"></a>
              <a href="#/about?tab=0" class="link">管理团队</a>
              <a href="#/about?tab=3" class="link">董事会</a>
            </div>
            <div class="about-team-s1">
              <div class="link">
                <a
                  :class="{ active: activeTeamTab === 0 }"
                  @click.prevent="switchTeamTab(0)"
                  >董事会</a
                >
                <a
                  :class="{ active: activeTeamTab === 1 }"
                  @click.prevent="switchTeamTab(1)"
                  >监事会</a
                >
                <a
                  :class="{ active: activeTeamTab === 2 }"
                  @click.prevent="switchTeamTab(2)"
                  >经营团队</a
                >
              </div>
              <div class="items-1" v-show="activeTeamTab === 0">
                <div class="item-1">
                  <div class="box">
                    <h3>石洪卫</h3>
                    <span>董事长</span>
                  </div>
                  <div class="para">
                    北京经济学院经济信息专业理学学士，正高级经济师。<br />
                    现任中国钢铁工业协会副秘书长。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>陈胜</h3>
                    <span>副董事长</span>
                  </div>
                  <div class="para">
                    清华大学材料科学与工程专业工学博士。<br />
                    现任力拓中国副总裁、首席商务官。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>游松</h3>
                    <span>执行董事</span>
                  </div>
                  <div class="para">
                    法国里昂第三大学国际贸易专业硕士、法国巴黎高等商学院（HEC）国际风险管理专业硕士。<br />
                    现任北京铁矿石交易中心股份有限公司总裁。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>朱学滨</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    南京大学工商管理硕士，高级经济师。<br />
                    现任宝钢资源（国际）有限公司、宝钢资源有限公司高级副总裁。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>刘宇</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    北京科技大学钢铁冶金专业工学硕士。<br />
                    现任宝钢资源控股（上海）有限公司（营销中心）业务一部副总经理。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>刘玉旺</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    北京科技大学工商管理硕士。<br />
                    现任河钢集团北京国际贸易有限公司副总经理、董事。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>白景雪</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    北京大学传播学专业文学硕士。<br />
                    现任河钢集团北京国际贸易有限公司市场信息部部长。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>陈文龙</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    上海交通大学机械工程及自动化专业工学学士。<br />
                    现任鞍钢集团国际经济贸易有限公司副总经理。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>张琳</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    北京理工大学市场营销专业管理学学士。<br />
                    现任中国首钢国际贸易工程有限公司副总经理。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>王建平</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    清华大学材料科学与工程专业工学硕士。<br />
                    现任五矿发展股份有限公司专职董监事 。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>姜山</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    湘潭大学产业经济学专业经济学硕士。<br />
                    现任中信金属股份有限公司总经理助理兼矿产资源部总经理。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>姚永波</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    北京大学国民经济管理专业学士。<br />
                    现任中国矿产资源集团有限公司铁矿石事业部副总经理（主持工作）。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>谢雪</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    悉尼麦考瑞大学应用金融硕士。<br />
                    现任淡水河谷公司中国区总裁。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>金丽华</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    北京外国语大学英语专业文学学士。<br />
                    现任必和必拓市场营销中国区总经理（铁矿）。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>高媛</h3>
                    <span>董事</span>
                  </div>
                  <div class="para">
                    华中师范大学英语专业文学学士。<br />
                    现任福德士河贸易（上海）有限公司市场营销部中国区销售总经理。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>陈明亮</h3>
                    <span>独立董事</span>
                  </div>
                  <div class="para">
                    中国政法大学法律专业法律硕士。<br />
                    现任中国五矿化工进出口商会副秘书长兼矿产品部主任。
                  </div>
                </div>
              </div>
              <div class="items-1" v-show="activeTeamTab === 1">
                <div class="item-1">
                  <div class="box">
                    <h3>蔺建杰</h3>
                    <span>监事会主席</span>
                  </div>
                  <div class="para">
                    中共中央党校经济学（经济管理）专业研究生。<br />
                    现任中国矿产资源集团国际供应链有限公司副总经理。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>陈琳</h3>
                    <span>监事</span>
                  </div>
                  <div class="para">
                    辽宁大学会计学专业管理学学士。<br />
                    现任鞍钢集团国际经济贸易有限公司财务部总监。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>张磊</h3>
                    <span>职工监事</span>
                  </div>
                  <div class="para">
                    北京物资学院人力资源管理专业管理学学士。<br />
                    现任北京铁矿石交易中心股份有限公司综合管理部经理。
                  </div>
                </div>
              </div>
              <div class="items-1" v-show="activeTeamTab === 2">
                <div class="item-1">
                  <div class="box">
                    <h3>游松</h3>
                    <span>总裁</span>
                  </div>
                  <div class="para">
                    北京第二外国语学院法语专业文学学士、法国里昂第三大学国际贸易专业硕士、法国巴黎高等商学院（HEC）国际风险管理专业硕士。<br />
                    曾任西南联合产权交易所副总经理、北京国际矿业权交易所副总裁。<br />
                    2014年8月起任北京铁矿石交易中心股份有限公司董事、总裁。现任公司执行董事、总裁。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>陆昊</h3>
                    <span
                      >副总裁<br />
                      董事会秘书</span
                    >
                  </div>
                  <div class="para">
                    同济大学英语专业文学学士，上海财经大学工商管理专业管理学硕士。<br />
                    曾任宝钢集团战略规划经理、宝钢资源营销策划高级经理、重庆钢铁副总经理、四源合基金副总裁、四川升达股份总经理。<br />
                    2024年5月起任公司业务总监、副总裁兼董事会秘书。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>李杰</h3>
                    <span
                      >副总裁<br />
                      财务负责人</span
                    >
                  </div>
                  <div class="para">
                    北方工业大学会计学专业管理学学士、中央党校经济管理专业研究生毕业，高级会计师。<br />
                    曾任首钢京唐钢铁公司计财部资金处处长、首钢总公司计财部结算处（资金结算中心）处长。<br />
                    2015年至今历任公司运营总监、副总裁兼财务负责人。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>陈亚洲</h3>
                    <span>运营总监</span>
                  </div>
                  <div class="para">
                    西安交通大学计算机专业工学学士，中国矿业大学流体传动与控制专业工学硕士。<br />
                    曾任时力科技业务总监、上海大宗钢铁交易中心技术总监。<br />
                    2020年至今历任公司项目总监、运营总监。
                  </div>
                </div>
                <div class="item-1">
                  <div class="box">
                    <h3>高英辉</h3>
                    <span>风控总监</span>
                  </div>
                  <div class="para">
                    中南财经政法大学会计学专业管理学学士、武汉大学法学专业法学学士。<br />
                    曾任安永会计师事务所审计师、湘财祈年期货合规稽核部经理。<br />
                    2014年至今历任公司风险控制部经理、董事会秘书、风控总监。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 企业文化 -->
          <div class="right-block" v-show="activeTab === 4">
            <div class="c-crumbs">
              <a href="/" class="home"></a>
              <a href="#/about?tab=0" class="link">关于我们</a>
              <a href="#/about?tab=3" class="link">企业文化</a>
            </div>
            <div class="about-culture-s1">
              <div class="items">
                <div class="item">
                  <div class="img-box">
                    <img src="../../assets/images/img-6-1.png" alt="" />
                  </div>
                  <div class="txt-box cell-box">
                    <div class="cell">
                      <div class="i-flex">
                        <div class="icon"></div>
                        <div class="box">
                          <h3 class="h3">发展使命</h3>
                          <p>
                            推动建立科学合理的商品定价机制，<br />
                            成为铁矿石领域的全球定价平台
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="img-box">
                    <img src="../../assets/images/img-6-2.png" alt="" />
                  </div>
                  <div class="txt-box cell-box">
                    <div class="cell">
                      <div class="i-flex">
                        <div class="icon"></div>
                        <div class="box">
                          <h3 class="h3">经营宗旨</h3>
                          <p>
                            市场化、国际化、规范化，<br />
                            通过市场发现价格，体现真实的供求关系，为实体经济服务
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="img-box">
                    <img src="../../assets/images/img-6-3.png" alt="" />
                  </div>
                  <div class="txt-box cell-box">
                    <div class="cell">
                      <div class="i-flex">
                        <div class="icon"></div>
                        <div class="box">
                          <h3 class="h3">平台功能</h3>
                          <p>商品流通、价格发现</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="img-box">
                    <img src="../../assets/images/img-6-4.png" alt="" />
                  </div>
                  <div class="txt-box cell-box">
                    <div class="cell">
                      <div class="i-flex">
                        <div class="icon"></div>
                        <div class="box">
                          <h3 class="h3">运营理念</h3>
                          <p>
                            独立——独立运营、客观中立<br />
                            <br />
                            开放——接纳海内外矿山、钢厂、贸易商及各类服务机构共赢发展<br />
                            <br />
                            透明——运营规范、公开透明，具备高度公信力
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="info-block">
                <h3 class="h3">商标寓意</h3>
                <div class="para">
                  <p>
                    公司中文全称为“北京铁矿石交易中心股份有限公司”，简称“北铁中心”；英文全称为“Beijing
                    Iron Ore Trading Center Corporation”，简称COREX，为China Ore
                    Exchange的缩写。<br />
                    <br />
                    公司标志以渐变红铜色为主色调，由三层字母C嵌套和箭头元素组成。<br />
                    <br />
                    红铜色为标志主色调，是铁矿石行业色彩，寓意北铁中心专注于深耕铁矿石现货交易市场，积极响应行业上下游企业切实需求，为中外矿山、钢厂和贸易企业提供优质高效服务。<br />
                    <br />
                    箭头寓意铁矿石交易和流转，三层字母C嵌套则寓意北铁中心立足中国，依托全球最大铁矿石市场份额，致力于推进阳光、透明、高效的铁矿石现货交易，为市场提供客观、真实的交易价格，赋能钢铁和铁矿石行业健康发展。<br />
                    <br />
                    整体图案呈渐变色效果，形如帆船出海，寓意着北铁中心劈波斩浪、扬帆起航的不懈追求和广阔远大的发展空间。
                  </p>
                </div>
                <div class="img-box">
                  <img src="../../assets/images/img-7-1.png" alt="" />
                </div>
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
const activeTeamTab = ref(0);

const switchTab = (index) => {
  activeTab.value = index;
};

const switchTeamTab = (index) => {
  activeTeamTab.value = index;
};

// 从路由查询参数初始化或更新 tab
const updateTabFromRoute = () => {
  const tabParam = route.query.tab;
  if (tabParam !== undefined) {
    const tabIndex = parseInt(tabParam);
    if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex <= 4) {
      activeTab.value = tabIndex;
    }
  }
};

onMounted(() => {
  updateTabFromRoute();
});

// 监听路由变化
watch(
  () => route.query.tab,
  () => {
    updateTabFromRoute();
  }
);
</script>

<style scoped>
/* 确保所有a标签都有手型光标 */
a {
  cursor: pointer;
}
</style>
