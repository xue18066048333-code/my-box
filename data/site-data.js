/* ============================================================================
 *  中诚特卫 · 网站内容数据文件
 * ----------------------------------------------------------------------------
 *  【这就是你后期唯一需要修改的文件】
 *
 *  修改方法：
 *    1. 用「记事本」打开本文件（右键 → 打开方式 → 记事本）。
 *    2. 只改动【双引号中间】的文字，不要删除引号、逗号、大括号。
 *    3. 保存文件，然后重新发布网站，改动即生效。
 *
 *  语言说明：
 *    凡是写成 { cn: "中文", en: "English" } 的地方，都是中英双语内容。
 *    cn 对应网站中文版，en 对应英文版，请两处都改。
 *
 *  安全提示：
 *    每一条内容后面都有英文逗号，最后一条没有逗号。改完保存前请勿动这些符号。
 * ========================================================================== */

window.SITE_DATA = {

  /* ---- 品牌信息 ---------------------------------------------------------- */
  brand: {
    nameCn: "中诚特卫",
    nameEn: "ZHONGCHENG SPECIAL SECURITY",
    slogan: "LOYALTY SECURITY",
    logo: "assets/logo.jpg",              /* 浅色背景用（原图，带米白底） */
    logoOnDark: "assets/logo-light.png",  /* 深色背景用（骨白墨迹 + 朱红，当前页面使用此版） */
    founded: { cn: "2026 年 5 月", en: "May 2026" },
    team:    { cn: "特级安保 50 人", en: "50 Elite Operators" },
    languages: { cn: "中文 / English", en: "Chinese / English" }
  },

  /* ---- 顶部导航 ---------------------------------------------------------- */
  nav: [
    { href: "#services", label: { cn: "服务类型", en: "Services" } },
    { href: "#ops",      label: { cn: "安保方案", en: "Operations" } },
    { href: "#coverage", label: { cn: "覆盖地区", en: "Coverage" } },
    { href: "#media",    label: { cn: "团队实力", en: "Team" } },
    { href: "#pricing",  label: { cn: "报价",     en: "Pricing" } },
    { href: "#about",    label: { cn: "关于我们", en: "About" } }
  ],

  /* ---- 首屏 -------------------------------------------------------------- */
  hero: {
    eyebrow: { cn: "海外安保 · 一体化解决方案", en: "OVERSEAS SECURITY · INTEGRATED SOLUTIONS" },
    lead: {
      cn: "我们为在非洲与东南亚开展业务的企业与个人，提供人员护卫、驻场安保、车队护送、风险评估与安保培训的一体化服务。",
      en: "We deliver close protection, on-site security, convoy escort, risk assessment and security training for companies and individuals operating across Africa and Southeast Asia."
    },
    ctaPrimary:   { cn: "获取安保报价", en: "Request a Quote" },
    ctaSecondary: { cn: "查看服务类型", en: "View Services" },
    scroll:       { cn: "向下滚动", en: "Scroll" }
  },

  /* ---- 数据条 ------------------------------------------------------------ */
  stats: [
    { value: "2026.05", label: { cn: "公司成立",     en: "Founded" } },
    { value: "50",      label: { cn: "特级安保人员", en: "Elite Operators" } },
    { value: "4",       label: { cn: "覆盖国家",     en: "Countries Covered" } },
    { value: "5",       label: { cn: "核心服务类型", en: "Core Services" } }
  ],

  /* ---- 服务类型（首页产品展示区，每张卡片可发起询价） --------------------- */
  sectionServices: {
    index: "01",
    title: { cn: "服务类型", en: "Services" },
    sub:   { cn: "点击任一服务，直接发起询价", en: "Select any service to request a quote" }
  },
  services: [
    {
      id: "bodyguard",
      img: "assets/img/svc-bodyguard.jpg",
      code: "CP",
      name: { cn: "人员护卫", en: "Close Protection" },
      sub:  { cn: "贴身护卫 · 要人随卫", en: "Personal Security Detail" },
      desc: {
        cn: "为要人、企业高管及随行家属提供贴身护卫，覆盖商务出行、医疗转运与高风险地区通行。",
        en: "Close protection for principals, executives and accompanying family members, covering business travel, medical transfer and movement through high-risk areas."
      },
      tags: [
        { cn: "贴身随卫", en: "Body Cover" },
        { cn: "商旅随行", en: "Business Travel" },
        { cn: "医疗转运", en: "Medical Transfer" },
        { cn: "高风险通行", en: "High-risk Movement" }
      ]
    },
    {
      id: "onsite",
      img: "assets/img/svc-site.jpg",
      code: "OS",
      name: { cn: "驻场安保", en: "On-site Security" },
      sub:  { cn: "固定岗哨 · 营地防卫", en: "Static Posts & Camp Defence" },
      desc: {
        cn: "为矿区、厂区、营地与项目部提供固定岗哨、门禁管理与全天候巡逻。",
        en: "Static posts, access control and round-the-clock patrol for mining sites, factories, camps and project offices."
      },
      tags: [
        { cn: "固定岗哨", en: "Static Posts" },
        { cn: "门禁管理", en: "Access Control" },
        { cn: "全天候巡逻", en: "24H Patrol" },
        { cn: "营地防卫", en: "Camp Defence" }
      ]
    },
    {
      id: "convoy",
      img: "assets/img/svc-convoy.jpg",
      code: "CV",
      name: { cn: "车队护送", en: "Convoy Escort" },
      sub:  { cn: "陆路押运 · 路线勘查", en: "Road Movement & Reconnaissance" },
      desc: {
        cn: "为人员与物资提供陆路押运，包含路线勘查、前导车与收尾车配置。",
        en: "Road movement for personnel and cargo, including route reconnaissance and lead and trail vehicle configuration."
      },
      tags: [
        { cn: "路线勘查", en: "Route Recce" },
        { cn: "前导收尾", en: "Lead & Trail" },
        { cn: "物资押运", en: "Cargo Escort" },
        { cn: "车辆配置", en: "Vehicle Setup" }
      ]
    },
    {
      id: "risk",
      img: "assets/img/svc-risk.jpg",
      code: "RA",
      name: { cn: "风险评估", en: "Risk Assessment" },
      sub:  { cn: "国别形势 · 驻地勘查", en: "Country & Site Survey" },
      desc: {
        cn: "提供国别安全形势分析、路线与驻地风险勘查，输出可执行的安全预案与撤离方案。",
        en: "Country security outlook, route and site risk surveys, delivering actionable security and evacuation plans."
      },
      tags: [
        { cn: "国别风险", en: "Country Risk" },
        { cn: "路线勘查", en: "Route Survey" },
        { cn: "驻地评估", en: "Site Assessment" },
        { cn: "撤离预案", en: "Evacuation Plan" }
      ]
    },
    {
      id: "training",
      img: "assets/img/svc-training.jpg",
      code: "TR",
      name: { cn: "安保培训", en: "Security Training" },
      sub:  { cn: "安全意识 · 应急演练", en: "Awareness & Drills" },
      desc: {
        cn: "面向外派员工与本地雇员开展安全意识培训、防绑架应对与应急演练。",
        en: "Security awareness training for expatriate and local staff, including kidnap avoidance and emergency drills."
      },
      tags: [
        { cn: "安全意识", en: "Awareness" },
        { cn: "防绑架",   en: "Kidnap Avoidance" },
        { cn: "应急演练", en: "Emergency Drills" },
        { cn: "防卫驾驶", en: "Defensive Driving" }
      ]
    }
  ],
  serviceCta: { cn: "发起询价", en: "Request Quote" },

  /* ---- 安保方案可视化（服务交付流程） ------------------------------------ */
  sectionOps: {
    index: "02",
    title: { cn: "安保方案如何落地", en: "How We Deliver" },
    sub:   { cn: "从需求评估到现场执行，四个阶段全程留痕", en: "Four stages from assessment to deployment" }
  },
  ops: [
    {
      step: "01",
      name: { cn: "需求评估", en: "Assess" },
      desc: { cn: "明确人员、地点、时间窗口与风险等级，确定任务边界。", en: "Define personnel, location, time window and risk level to set the mission scope." }
    },
    {
      step: "02",
      name: { cn: "方案设计", en: "Design" },
      desc: { cn: "配置人员数量、装备与行进路线，输出书面安保方案。", en: "Configure manpower, equipment and routes, then issue a written security plan." }
    },
    {
      step: "03",
      name: { cn: "现场执行", en: "Deploy" },
      desc: { cn: "安保团队进场，按方案执行任务并提交每日安全汇报。", en: "The team deploys, executes the plan and submits a daily security report." }
    },
    {
      step: "04",
      name: { cn: "复盘调整", en: "Review" },
      desc: { cn: "任务结束后复盘，动态调整下一阶段的安保配置。", en: "Post-mission review, with adjustments carried into the next phase." }
    }
  ],

  /* ---- 覆盖地区 ---------------------------------------------------------- */
  /* 说明：lon / lat 是各国地理中心的近似坐标，仅用于在地图上定位示意点，
     不是精确的城市坐标，也不代表实际作业地点。 */
  sectionCoverage: {
    index: "03",
    title: { cn: "覆盖地区", en: "Coverage" },
    sub:   { cn: "当前主要服务区域", en: "Current operating regions" },
    mapHint: { cn: "坐标部署示意 · 位置为指示性", en: "Deployment grid · positions indicative" },
    note:  {
      cn: "上图以经纬网格标示主要服务国家的相对位置，仅作示意，不代表精确地理边界。具体城市与作业范围将在对接时确认。",
      en: "The grid above shows the relative positions of our primary service countries for illustration only; it does not depict precise geographic boundaries. Specific cities and operating scope are confirmed during engagement."
    }
  },
  coverage: [
    { name: { cn: "坦桑尼亚", en: "Tanzania" },   region: { cn: "东非",   en: "East Africa" },   lon: 34.89, lat: -6.37 },
    { name: { cn: "肯尼亚",   en: "Kenya" },      region: { cn: "东非",   en: "East Africa" },   lon: 37.91, lat: -0.02 },
    { name: { cn: "马达加斯加", en: "Madagascar" }, region: { cn: "印度洋", en: "Indian Ocean" }, lon: 46.87, lat: -18.77 },
    { name: { cn: "泰国",     en: "Thailand" },   region: { cn: "东南亚", en: "Southeast Asia" }, lon: 100.99, lat: 15.87 }
  ],

  /* ---- 团队实力（视频） -------------------------------------------------- */
  sectionMedia: {
    index: "04",
    title: { cn: "团队与设施", en: "Team & Facilities" },
    sub:   { cn: "办公场所、训练场与日常训练记录", en: "Our offices, training grounds and day-to-day training" }
  },
  media: [
    {
      id: "office",
      src: "assets/video/office.mp4",
      poster: "assets/video/office.jpg",
      duration: "0:18",
      name: { cn: "办公场所", en: "Our Offices" },
      desc: {
        cn: "公司前台、监控中心、资质陈列与办公区域实拍。",
        en: "Reception, monitoring centre, credentials display and office areas."
      }
    },
    {
      id: "training",
      src: "assets/video/training.mp4",
      poster: "assets/video/training.jpg",
      duration: "0:14",
      name: { cn: "射击训练", en: "Marksmanship Training" },
      desc: {
        cn: "单手持枪射击训练，记录于室外靶场。",
        en: "One-handed shooting drills recorded at an outdoor range."
      }
    },
    {
      id: "field",
      src: "assets/video/field.mp4",
      poster: "assets/video/field.jpg",
      duration: "0:18",
      name: { cn: "综合训练", en: "Field Training" },
      desc: {
        cn: "靶场射击、装备操作与格斗训练综合记录。",
        en: "A compilation of range shooting, weapon handling and close-quarter training."
      }
    }
  ],

  /* ---- 报价档位 ---------------------------------------------------------- */
  sectionPricing: {
    index: "05",
    title: { cn: "服务档位", en: "Engagement Tiers" },
    sub:   { cn: "安保服务按需求定制，以下为常见合作方式", en: "Security is scoped per requirement; below are our usual engagement models" }
  },
  plans: [
    {
      id: "single",
      name: { cn: "单次任务", en: "Single Mission" },
      forWhom: { cn: "短期出行、一次性护送、单次风险评估", en: "Short trips, one-off escorts and single assessments" },
      price: { cn: "按任务报价", en: "Quoted per mission" },
      featured: false,
      features: [
        { cn: "单次任务执行",     en: "Single mission execution" },
        { cn: "1–3 名安保人员",   en: "1–3 operators" },
        { cn: "任务前路线勘查",   en: "Pre-mission route recce" },
        { cn: "任务后书面简报",   en: "Post-mission written debrief" },
        { cn: "中文或英文对接",   en: "Chinese or English liaison" }
      ]
    },
    {
      id: "monthly",
      name: { cn: "月度驻场", en: "Monthly On-site" },
      forWhom: { cn: "项目现场、营地、厂区的长期安保", en: "Long-term security for project sites, camps and plants" },
      price: { cn: "按月度报价", en: "Quoted monthly" },
      featured: true,
      badge: { cn: "最常选择", en: "Most Selected" },
      features: [
        { cn: "全天候轮班岗哨",   en: "Round-the-clock posts" },
        { cn: "4–10 名安保人员",  en: "4–10 operators" },
        { cn: "月度风险评估",     en: "Monthly risk assessment" },
        { cn: "每日安全汇报",     en: "Daily security reporting" },
        { cn: "应急预案与演练",   en: "Emergency plans and drills" },
        { cn: "专属项目经理",     en: "Dedicated project manager" }
      ]
    },
    {
      id: "annual",
      name: { cn: "年度框架", en: "Annual Framework" },
      forWhom: { cn: "多国多点的长期合作", en: "Multi-country, multi-site long-term partnership" },
      price: { cn: "按框架协议报价", en: "Quoted by framework agreement" },
      featured: false,
      features: [
        { cn: "多国多任务协同",   en: "Multi-country coordination" },
        { cn: "人员规模按需配置", en: "Scalable manpower" },
        { cn: "季度风险报告",     en: "Quarterly risk reports" },
        { cn: "安保培训服务",     en: "Security training included" },
        { cn: "24 小时应急响应",  en: "24-hour emergency response" },
        { cn: "年度框架协议价",   en: "Annual framework rates" }
      ]
    }
  ],
  planCta: { cn: "获取报价", en: "Get a Quote" },

  /* ---- 关于我们 ---------------------------------------------------------- */
  sectionAbout: {
    index: "06",
    title: { cn: "关于中诚特卫", en: "About Us" }
  },
  about: {
    body: {
      cn: "中诚特卫成立于 2026 年 5 月，是一支由 50 名特级安保人员组成的海外安保团队。我们服务于在非洲与东南亚开展业务的企业与个人，提供从风险评估到现场执行的完整安保链条，并以中英双语对接客户。",
      en: "Founded in May 2026, Zhongcheng Special Security is an overseas security team of 50 elite operators. We serve companies and individuals operating across Africa and Southeast Asia, providing a complete chain from risk assessment to on-the-ground execution, with bilingual Chinese and English liaison."
    },
    facts: [
      { label: { cn: "成立时间", en: "Founded" },     value: { cn: "2026 年 5 月", en: "May 2026" } },
      { label: { cn: "团队规模", en: "Team" },        value: { cn: "特级安保 50 人", en: "50 Elite Operators" } },
      { label: { cn: "服务语言", en: "Languages" },   value: { cn: "中文 / English", en: "Chinese / English" } },
      { label: { cn: "服务区域", en: "Regions" },     value: { cn: "非洲 · 东南亚", en: "Africa · Southeast Asia" } }
    ]
  },

  /* ---- 询价表单 ---------------------------------------------------------- */
  sectionQuote: {
    index: "07",
    title: { cn: "发起询价", en: "Request a Quote" },
    sub:   { cn: "填写需求后，我们会与你联系确认细节并给出报价", en: "Tell us your requirement and we will get back to you with a quote" }
  },
  form: {
    fields: {
      service:  { cn: "服务类型", en: "Service" },
      name:     { cn: "称呼", en: "Name" },
      contact:  { cn: "邮箱或即时通讯账号", en: "Email or messenger ID" },
      location: { cn: "所在国家 / 城市", en: "Country / City" },
      start:    { cn: "需求开始时间", en: "Start date" },
      scale:    { cn: "人数规模", en: "Personnel scale" },
      message:  { cn: "补充说明", en: "Additional details" }
    },
    submit: { cn: "提交询价", en: "Submit Request" },
    notice: {
      cn: "当前为演示版本，提交后不会真实发送。正式上线前需接入表单接收服务或企业邮箱。",
      en: "Demo version: submissions are not actually sent. A form service or company mailbox must be connected before launch."
    },
    success: {
      cn: "已收到你的询价需求。正式上线后，我们会尽快与你联系确认细节。",
      en: "Your request has been received. Once live, we will contact you shortly to confirm the details."
    }
  },

  /* ---- 页脚 -------------------------------------------------------------- */
  footer: {
    note: {
      cn: "联系方式（邮箱、即时通讯账号）将在后续版本中加入。",
      en: "Contact details (email, messenger ID) will be added in a later version."
    },
    copyright: { cn: "中诚特卫 版权所有", en: "Zhongcheng Special Security. All rights reserved." }
  },

  /* ---- 界面通用文字 ------------------------------------------------------ */
  ui: {
    orderTitle: { cn: "发起询价", en: "Request a Quote" },
    close:      { cn: "关闭", en: "Close" },
    menu:       { cn: "菜单", en: "Menu" }
  }
};
