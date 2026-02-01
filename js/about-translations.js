// about-translations.js - Internationalization for About Page
// Author: Jimei Materials Development Team
// Version: 1.0.0
// Last Updated: 2024

(function () {
    'use strict';

    // Translations object
    const translations = {
        en: {
            // Meta & SEO
            "about_page_title": "About Jimei Materials | DBC, DPC & HTCC Ceramic Substrate Manufacturer",
            "about_meta_description": "Jimei Materials: Leading manufacturer of advanced ceramic substrate solutions since 2016. We specialize in DBC (Direct Bonded Copper), DPC (Direct Plated Copper), and HTCC (High-Temperature Co-fired Ceramic) technologies for power electronics, EV, RF, and hermetic packaging applications. ISO 14001:2015 certified.",
            "about_meta_keywords": "ceramic substrate manufacturer, DBC manufacturer, DPC manufacturer, HTCC manufacturer, High-Temperature Co-fired Ceramic, hermetic ceramic packaging, multilayer ceramic substrates, ceramic metallization company, thermal management solutions, power module substrates, semiconductor packaging manufacturer, AlN substrates, Al₂O₃ substrates",
            "about_og_title": "About Jimei Materials | DBC, DPC & HTCC Ceramic Substrate Solutions",
            "about_og_description": "Leading manufacturer of advanced ceramic substrate solutions with ISO 14001:2015 certification. Specializing in DBC, DPC, and HTCC technologies for power electronics, thermal management, and hermetic packaging.",
            "about_twitter_title": "About Jimei Materials | DBC, DPC & HTCC Ceramic Substrate Solutions",
            "about_twitter_description": "Leading manufacturer of advanced ceramic substrate solutions with ISO 14001:2015 certification. Specializing in DBC, DPC, and HTCC technologies for power electronics, thermal management, and hermetic packaging.",

            // Breadcrumbs
            "breadcrumb_home": "Home",
            "breadcrumb_about": "About Us",

            // Page Header
            "about_main_title": "About Jimei Materials",
            "about_subtitle": "Leading manufacturer of ceramic metallization substrates since 2016",

            // Carousel Controls
            "carousel_prev": "Previous",
            "carousel_next": "Next",

            // Company Overview Section
            "overview_title": "Our Mission",
            "overview_mission": "To advance thermal management technology through innovative ceramic substrate solutions that enable more efficient, reliable, and sustainable power electronics.",
            "overview_description": "Founded in 2016, Jimei Materials has established itself as a leading manufacturer of advanced ceramic substrate solutions. We master three core technologies: Direct Bonded Copper (DBC) for superior thermal performance, Direct Plated Copper (DPC) for high-precision circuits, and High-Temperature Co-fired Ceramic (HTCC) for robust, multilayer hermetic packaging. Serving industries from electric vehicles and renewable energy to RF communications and semiconductor packaging, we provide the critical foundation for next-generation electronics requiring exceptional reliability, thermal management, and performance in harsh environments.",

            // Buttons
            "btn_contact_us": "Contact Us",
            "btn_view_products": "View Products",
            "btn_partner": "Partner Today",

            // Company Stats Section
            "stat_years": "8+",
            "stat_years_label": "Years Experience",
            "stat_employees": "250+",
            "stat_employees_label": "Skilled Professionals",
            "stat_countries": "30+",
            "stat_countries_label": "Countries Served",
            "stat_projects": "5000+",
            "stat_projects_label": "Projects Completed",

            // Technology Expertise Section
            "expertise_title": "Technology Expertise",
            "expertise_description": "Specialized knowledge in ceramic metallization and thermal management",
            "expertise_dpc_title": "DPC Technology",
            "expertise_dpc_desc": "Direct Plated Copper (DPC) utilizes precision electroplating and photolithography for fine-pitch circuits on ceramic. Optimized for RF/microwave applications, laser diodes, photonics, and precision sensors where exceptional planarity, high-frequency performance, and complex circuit patterns are critical for miniaturization and signal integrity.",
            "expertise_dbc_title": "DBC Technology",
            "expertise_dbc_desc": "Direct Bonded Copper (DBC) creates a strong, reliable metallization layer through high-temperature bonding. The preferred choice for power modules, EV traction inverters, and IGBT/wide bandgap semiconductor substrates due to its excellent thermal conductivity, high current-carrying capacity, and superior thermal cycling reliability for demanding power electronics applications.",
            "expertise_htcc_title": "HTCC Technology",
            "expertise_htcc_desc": "High-Temperature Co-fired Ceramic (HTCC) involves sintering multilayer alumina or AlN green tapes with refractory metal (W, Mo) metallization at temperatures above 1500°C. This creates dense, hermetic packages and multilayer ceramic substrates ideal for aerospace electronics, MEMS packaging, RF cavities, and downhole sensors requiring exceptional high-temperature stability and mechanical robustness.",

            // Company Timeline Section
            "timeline_title": "Our Technology Journey",
            "timeline_2016": "2016 - Foundation & DBC Launch",
            "timeline_2016_desc": "Jimei Materials founded in Shenzhen, establishing our first DBC (Direct Bonded Copper) production line for local power electronics manufacturers. Initial focus on Al₂O₃ substrates for consumer electronics thermal management.",
            "timeline_2018": "2018 - DPC Technology & International Expansion",
            "timeline_2018_desc": "Launched our first DPC (Direct Plated Copper) production line with 25μm minimum line spacing capability. Achieved ISO 9001:2015 certification and expanded into European automotive and Japanese semiconductor markets.",
            "timeline_2020": "2020 - EV Revolution & Quality Systems",
            "timeline_2020_desc": "Achieved ISO 14001:2015 environmental certification. Ramped DBC production 300% to support growing EV inverter demand. Established partnerships with three Tier-1 automotive suppliers for SiC power module substrates.",
            "timeline_2022": "2022 - HTCC Development & 5G Applications",
            "timeline_2022_desc": "Commissioned our HTCC (High-Temperature Co-fired Ceramic) R&D line. Developed AlN HTCC for RF/microwave packaging and successfully qualified with two major telecom equipment manufacturers for 5G base station components.",
            "timeline_2024": "2024 - Advanced Materials & Global Engineering",
            "timeline_2024_desc": "Launched volume production of Si₃N₄ substrates and multilayer HTCC packages. Established technical support centers in Germany, Japan, and the USA. Achieved 50μm via capability for advanced DPC photolithography.",
            "timeline_2025": "2025 - Next-Generation Roadmap",
            "timeline_2025_desc": "Currently developing ultra-thin DPC (<100μm total thickness) for medical implants and active metal brazing technology for complex 3D power modules. Expanding HTCC capacity for aerospace and industrial sensor applications.",

            // Global Presence Section
            "global_title": "Global Technology Partnerships",
            "global_description": "Delivering advanced ceramic solutions to innovation leaders worldwide",

            // Regional Technology Focus
            "region_na": "North America",
            "region_na_tech": "EV & Power Electronics",
            "region_na_desc": "Supplying DBC substrates for SiC/GaN power modules to automotive Tier-1s, and DPC substrates for aerospace RF applications. Technical partnerships with 5+ semiconductor companies for advanced packaging solutions.",
            "region_eu": "Europe",
            "region_eu_tech": "Industrial & Automotive",
            "region_eu_desc": "Providing AlN DBC substrates for industrial motor drives and renewable energy converters. HTCC packages for automotive sensors and MEMS devices. Supporting German automotive OEMs with custom thermal management solutions.",
            "region_apac": "Asia-Pacific",
            "region_apac_tech": "Semiconductor & Consumer",
            "region_apac_desc": "Supplying fine-pitch DPC substrates to Japanese/Korean semiconductor companies for advanced packaging. Al₂O₃ DBC for consumer electronics thermal management. HTCC packages for industrial sensors in China/Taiwan manufacturing hubs.",

            // Technology Tags
            "tech_dbc": "DBC",
            "tech_dpc": "DPC",
            "tech_htcc": "HTCC",

            // Application Matrix
            "app_matrix_title": "Technology Application Matrix",
            "app_matrix_desc": "Specific applications across all three ceramic substrate technologies",
            "app_industry": "Industry",
            "app_dbc": "DBC Applications",
            "app_dpc": "DPC Applications",
            "app_htcc": "HTCC Applications",

            // Industry Names
            "industry_ev": "Electric Vehicles",
            "industry_telecom": "Telecom/5G",
            "industry_semiconductor": "Semiconductor",
            "industry_industrial": "Industrial",
            "industry_medical": "Medical",
            "industry_aerospace": "Aerospace/Defense",

            // DBC Applications
            "dbc_ev": "• Main traction inverters (SiC/IGBT) • On-board chargers (OBC) • DC-DC converters • Battery management systems",
            "dbc_telecom": "• RF power amplifiers (GaN/Si LDMOS) • Base station power supplies • Antenna tuning units • High-power RF combiners",
            "dbc_semi": "• SiC/GaN power device packages • High-power LED substrates • Laser diode heat spreaders • Power module baseplates",
            "dbc_industrial": "• Industrial motor drives (VFD) • UPS & power supplies • Welding equipment • Induction heating systems",
            "dbc_medical": "• MRI gradient amplifiers • X-ray generator modules • Surgical power tools • Defibrillator circuits",
            "dbc_aerospace": "• Avionics power modules • Radar power amplifiers • Satellite power systems • Military vehicle drives",

            // DPC Applications
            "dpc_ev": "• Current/voltage sensors • Gate driver circuits • ECU communication modules • HV/LV isolation interfaces",
            "dpc_telecom": "• MMICs for 5G/mmWave • Antenna-in-package (AiP) modules • Low-noise amplifiers • Phase array antenna elements",
            "dpc_semi": "• Advanced IC packaging (FCBGA) • Chip-on-board (COB) modules • MEMS device interposers • Optoelectronic hybrid packages",
            "dpc_industrial": "• Laser diode mounts (fiber/CO₂) • Industrial sensor interfaces • PLC communication modules • Precision current monitoring",
            "dpc_medical": "• Implantable device substrates • Diagnostic sensor interfaces • Medical imaging components • Biopotential measurement circuits",
            "dpc_aerospace": "• Radar/EW front-end modules • Satellite communication systems • Guidance system circuits • Ruggedized control modules",

            // HTCC Applications
            "htcc_ev": "• Pressure sensors (brake/air) • Temperature sensors (battery/motor) • Gas sensors (HV battery monitoring) • Encapsulated power ICs",
            "htcc_telecom": "• Hermetic RF/microwave packages • Cavity filters & duplexers • EMI shielded enclosures • Waveguide-to-coaxial transitions",
            "htcc_semi": "• Hermetic MEMS/sensor packages • Multi-chip modules (MCM) • Ceramic leadless chip carriers (CLCC) • Ceramic pin grid arrays (CPGA)",
            "htcc_industrial": "• High-temperature sensor housings • Corrosive environment packages • Industrial control modules • Vibration-resistant enclosures",
            "htcc_medical": "• Hermetic implantable packages • Sterilizable sensor housings • Medical device interconnects • Biocompatible enclosures",
            "htcc_aerospace": "• Hermetic space-grade packages • Missile guidance modules • High-G resistant enclosures • Radiation-hardened packages",

            // FAQ Section
            "faq_title": "Frequently Asked Questions",
            "faq_description": "Answers to common questions about our ceramic substrate manufacturing",
            "faq_q1": "Which industries use your ceramic substrates (DBC / DPC / HTCC)?",
            "faq_a1": "We serve power electronics, EV inverters, semiconductor packaging, laser & photonics modules, RF/5G components and renewable energy systems. Our DBC, DPC, and HTCC ceramic substrates are specified where high thermal conductivity, electrical insulation, hermeticity, and long‑term reliability are required.",
            "faq_q2": "What ceramic substrate technologies and materials do you manufacture?",
            "faq_a2": "We are a full-spectrum ceramic substrate manufacturer. Our core technologies include Direct Bonded Copper (DBC), Direct Plated Copper (DPC), and High-Temperature Co-fired Ceramic (HTCC). We work with key materials like Aluminum Nitride (AlN), Alumina (Al₂O₃), and specialized tapes for HTCC. Copper thickness, metallization systems (copper, tungsten, gold), and layer counts are engineered to meet specific thermal, electrical, mechanical, and hermetic requirements for each application.",
            "faq_q3": "What is HTCC and what are its key applications?",
            "faq_a3": "High-Temperature Co-fired Ceramic (HTCC) involves sintering alumina or aluminum nitride green tapes with refractory metal (e.g., Tungsten, Molybdenum) metallization at temperatures above 1500°C. This creates dense, multilayer, and hermetic structures. Key applications include: hermetic packages for ICs, MEMS, and sensors; RF/microwave components (cavities, filters); industrial and automotive sensor housings; and substrates for high-temperature electronics. Its primary advantages are exceptional mechanical robustness, excellent high-temperature stability, and reliable performance in harsh environments.",
            "faq_q4": "What is your manufacturing capacity and typical lead time?",
            "faq_a4": "With 250+ skilled professionals and advanced production lines, we support prototype to volume production for DBC, DPC, and HTCC substrates. Typical lead times depend on quantity and complexity — contact us for an ETA; expedited prototyping is available for engineering samples.",
            "faq_q5": "Do you offer custom designs, prototyping and engineering support?",
            "faq_a5": "Yes — we provide design-for-manufacture guidance, custom metallization patterns, fine‑pitch DPC solutions and rapid prototyping. Our engineering team partners with customers on thermal simulations, layout optimization and qualification to accelerate product development.",
            "faq_q6": "What quality systems and certifications do you maintain?",
            "faq_a6": "Our manufacturing follows ISO-grade quality processes, environmental management and rigorous in‑line and final testing. We provide documentation and test reports to support reliability, RoHS/REACH and customer-specific qualification requirements.",
            "faq_q7": "How can I request samples, quotes or a technical consultation?",
            "faq_a7": "Use our Contact page to request a quote or samples — include substrate type, material, copper thickness, quantities and any layout files. For technical consultations, select \"Contact Our Technical Team\" and we will assign an engineer to review requirements and provide next steps.",

            // CTA Section
            "about_cta_title": "Partner With Us",
            "about_cta_description": "Join leading companies worldwide who trust Jimei Materials for their DBC, DPC, and HTCC ceramic substrate requirements in power electronics, RF, and hermetic packaging applications.",
            "cta_expertise": "Technical Expertise",
            "cta_expertise_desc": "8+ years specialized experience",
            "cta_quality": "Quality Assurance",
            "cta_quality_desc": "ISO 14001:2015 certified processes",
            "cta_phone": "+86-147-4537-3293"
        },

        zh: {
            // 元数据与搜索引擎优化
            "about_page_title": "关于集美材料 | DBC、DPC 及 HTCC 陶瓷基板制造商",
            "about_meta_description": "集美材料：自2016年以来，先进的陶瓷基板解决方案领先制造商。我们专精于DBC（直接覆铜）、DPC（直接镀铜）和HTCC（高温共烧陶瓷）技术，服务于电力电子、电动汽车、射频及气密封装应用。通过ISO 14001:2015认证。",
            "about_meta_keywords": "陶瓷基板制造商, DBC制造商, DPC制造商, HTCC制造商, 高温共烧陶瓷, 陶瓷气密封装, 多层陶瓷基板, 陶瓷金属化公司, 热管理解决方案, 功率模块基板, 半导体封装制造商, 氮化铝基板, 氧化铝基板",
            "about_og_title": "关于集美材料 | DBC、DPC 及 HTCC 陶瓷基板解决方案",
            "about_og_description": "通过ISO 14001:2015认证的先进陶瓷基板解决方案领先制造商。专精于面向电力电子、热管理及气密封装的DBC、DPC和HTCC技术。",
            "about_twitter_title": "关于集美材料 | DBC、DPC 及 HTCC 陶瓷基板解决方案",
            "about_twitter_description": "通过ISO 14001:2015认证的先进陶瓷基板解决方案领先制造商。专精于面向电力电子、热管理及气密封装的DBC、DPC和HTCC技术。",

            // 面包屑导航
            "breadcrumb_home": "首页",
            "breadcrumb_about": "关于我们",

            // 页面标题
            "about_main_title": "关于集美材料",
            "about_subtitle": "自2016年起，陶瓷金属化基板的领先制造商",

            // 轮播控件
            "carousel_prev": "上一项",
            "carousel_next": "下一项",

            // 公司概述板块
            "overview_title": "我们的使命",
            "overview_mission": "通过创新的陶瓷基板解决方案推进热管理技术，助力实现更高效、更可靠、更可持续的电力电子系统。",
            "overview_description": "集美材料成立于2016年，现已发展成为先进的陶瓷基板解决方案领先制造商。我们掌握三大核心技术：具备卓越热性能的直接覆铜 (DBC) 技术、用于高精度线路的直接镀铜 (DPC) 技术，以及用于坚固耐用的多层气密封装的高温共烧陶瓷 (HTCC) 技术。从电动汽车、可再生能源到射频通信和半导体封装，我们为需要在高苛刻环境下实现卓越可靠性、热管理及性能的下一代电子产品提供关键基础材料。",

            // 按钮
            "btn_contact_us": "联系我们",
            "btn_view_products": "查看产品",
            "btn_partner": "立即合作",

            // 公司数据板块
            "stat_years": "8+",
            "stat_years_label": "年行业经验",
            "stat_employees": "250+",
            "stat_employees_label": "专业技术人员",
            "stat_countries": "30+",
            "stat_countries_label": "服务国家与地区",
            "stat_projects": "5000+",
            "stat_projects_label": "已完成项目",

            // 技术专长板块
            "expertise_title": "技术专长",
            "expertise_description": "在陶瓷金属化与热管理领域的专业知识",
            "expertise_dpc_title": "DPC 技术",
            "expertise_dpc_desc": "直接镀铜 (DPC) 技术利用精密电镀和光刻工艺在陶瓷上实现精细线路。该技术针对射频/微波应用、激光二极管、光子学和精密传感器进行了优化，在这些领域，卓越的平面度、高频性能及复杂的电路图形对于小型化和信号完整性至关重要。",
            "expertise_dbc_title": "DBC 技术",
            "expertise_dbc_desc": "直接覆铜 (DBC) 技术通过高温键合形成牢固可靠的金属化层。凭借其优异的导热性、高电流承载能力以及在苛刻电力电子应用中的卓越热循环可靠性，成为功率模块、电动汽车牵引逆变器和IGBT/宽禁带半导体基板的首选。",
            "expertise_htcc_title": "HTCC 技术",
            "expertise_htcc_desc": "高温共烧陶瓷 (HTCC) 技术涉及在1500°C以上的温度下，将多层氧化铝或氮化铝生瓷带与难熔金属（钨、钼）导体共烧。此工艺可制造出致密、气密的封装和多层陶瓷基板，非常适用于需要卓越高温稳定性和机械强度的航空航天电子、MEMS封装、射频腔体和井下传感器。",

            // 公司发展历程板块
            "timeline_title": "我们的技术历程",
            "timeline_2016": "2016 - 创立与 DBC 产线启动",
            "timeline_2016_desc": "集美材料在深圳成立，为首批本地电力电子制造商建立了第一条 DBC（直接覆铜）生产线。初期专注于用于消费电子产品热管理的氧化铝基板。",
            "timeline_2018": "2018 - DPC 技术与国际市场拓展",
            "timeline_2018_desc": "启动了首条 DPC（直接镀铜）生产线，具备 25μm 最小线间距能力。获得 ISO 9001:2015 认证，并成功拓展至欧洲汽车和日本半导体市场。",
            "timeline_2020": "2020 - 电动汽车浪潮与质量体系升级",
            "timeline_2020_desc": "获得 ISO 14001:2015 环境管理体系认证。为满足日益增长的电动汽车逆变器需求，DBC 产能提升了300%。与三家汽车 Tier-1 供应商建立了碳化硅功率模块基板合作伙伴关系。",
            "timeline_2022": "2022 - HTCC 研发与 5G 应用",
            "timeline_2022_desc": "HTCC（高温共烧陶瓷）研发线投入使用。开发了用于射频/微波封装的氮化铝 HTCC 技术，并成功通过两家主要电信设备制造商针对 5G 基站组件的认证。",
            "timeline_2024": "2024 - 先进材料与全球工程支持",
            "timeline_2024_desc": "启动氮化硅基板和多层 HTCC 封装的大规模生产。在德国、日本和美国设立了技术支持中心。DPC 光刻技术实现了 50μm 通孔能力。",
            "timeline_2025": "2025 - 下一代技术路线图",
            "timeline_2025_desc": "目前正在开发用于医疗植入的 ultra-thin DPC（总厚度<100μm）以及用于复杂 3D 功率模块的活性金属钎焊技术。正在扩大 HTCC 产能，以满足航空航天和工业传感器应用的需求。",

            // 全球布局板块
            "global_title": "全球技术合作伙伴",
            "global_description": "为世界各地的创新领导者提供先进的陶瓷解决方案",

            // 区域技术聚焦
            "region_na": "北美",
            "region_na_tech": "电动汽车与电力电子",
            "region_na_desc": "为汽车 Tier-1 供应商提供用于碳化硅/氮化镓功率模块的 DBC 基板，并为航空航天射频应用提供 DPC 基板。与超过5家半导体公司建立技术合作，提供先进封装解决方案。",
            "region_eu": "欧洲",
            "region_eu_tech": "工业与汽车",
            "region_eu_desc": "为工业电机驱动和可再生能源变流器提供氮化铝 DBC 基板。为汽车传感器和 MEMS 器件提供 HTCC 封装。为德国汽车 OEM 提供定制热管理解决方案。",
            "region_apac": "亚太地区",
            "region_apac_tech": "半导体与消费电子",
            "region_apac_desc": "向日韩半导体公司供应用于先进封装的精细线路 DPC 基板。为消费电子产品热管理提供氧化铝 DBC 基板。为中国/台湾制造中心的工业传感器提供 HTCC 封装。",

            // 技术标签
            "tech_dbc": "DBC",
            "tech_dpc": "DPC",
            "tech_htcc": "HTCC",

            // 应用矩阵
            "app_matrix_title": "技术应用矩阵",
            "app_matrix_desc": "三大陶瓷基板技术在具体行业的应用",
            "app_industry": "行业",
            "app_dbc": "DBC 应用",
            "app_dpc": "DPC 应用",
            "app_htcc": "HTCC 应用",

            // 行业名称
            "industry_ev": "电动汽车",
            "industry_telecom": "通信/5G",
            "industry_semiconductor": "半导体",
            "industry_industrial": "工业",
            "industry_medical": "医疗",
            "industry_aerospace": "航空航天/国防",

            // DBC 应用
            "dbc_ev": "• 主牵引逆变器（碳化硅/IGBT） • 车载充电机 • DC-DC 变换器 • 电池管理系统",
            "dbc_telecom": "• 射频功率放大器（氮化镓/Si LDMOS） • 基站电源 • 天线调谐单元 • 大功率射频合路器",
            "dbc_semi": "• 碳化硅/氮化镓功率器件封装 • 大功率 LED 基板 • 激光二极管散热片 • 功率模块底板",
            "dbc_industrial": "• 工业电机驱动（变频器） • 不间断电源与电源 • 焊接设备 • 感应加热系统",
            "dbc_medical": "• MRI 梯度场放大器 • X 光发生器模块 • 外科手术动力工具 • 除颤器电路",
            "dbc_aerospace": "• 航电功率模块 • 雷达功率放大器 • 卫星电源系统 • 军用车辆驱动",

            // DPC 应用
            "dpc_ev": "• 电流/电压传感器 • 栅极驱动电路 • ECU 通信模块 • 高/低压隔离接口",
            "dpc_telecom": "• 5G/毫米波 MMIC • 封装天线模块 • 低噪声放大器 • 相控阵天线单元",
            "dpc_semi": "• 先进 IC 封装 • 板上芯片模块 • MEMS 器件中介层 • 光电混合封装",
            "dpc_industrial": "• 激光二极管封装 • 工业传感器接口 • PLC 通信模块 • 精密电流监测",
            "dpc_medical": "• 可植入设备基板 • 诊断传感器接口 • 医学成像组件 • 生物电位测量电路",
            "dpc_aerospace": "• 雷达/电子战前端模块 • 卫星通信系统 • 制导系统电路 • 加固控制模块",

            // HTCC 应用
            "htcc_ev": "• 压力传感器（刹车/空气） • 温度传感器（电池/电机） • 气体传感器（高压电池监控） • 封装功率 IC",
            "htcc_telecom": "• 气密射频/微波封装 • 腔体滤波器与双工器 • EMI 屏蔽外壳 • 波导-同轴转换器",
            "htcc_semi": "• 气密 MEMS/传感器封装 • 多芯片模块 • 陶瓷无引线芯片载体 • 陶瓷针栅阵列",
            "htcc_industrial": "• 高温传感器外壳 • 耐腐蚀环境封装 • 工业控制模块 • 抗振外壳",
            "htcc_medical": "• 气密可植入封装 • 可灭菌传感器外壳 • 医疗设备互连 • 生物相容性外壳",
            "htcc_aerospace": "• 航天级气密封装 • 导弹制导模块 • 耐高过载外壳 • 抗辐射封装",

            // 常见问题板块
            "faq_title": "常见问题",
            "faq_description": "关于我们陶瓷基板制造的常见问题解答",
            "faq_q1": "哪些行业会使用贵公司的陶瓷基板（DBC / DPC / HTCC）？",
            "faq_a1": "我们服务于电力电子、电动汽车逆变器、半导体封装、激光与光子学模块、射频/5G 组件以及可再生能源系统。我们的 DBC、DPC 和 HTCC 陶瓷基板被应用于需要高导热性、电绝缘性、气密性和长期可靠性的场合。",
            "faq_q2": "贵公司制造哪些陶瓷基板技术和材料？",
            "faq_a2": "我们是全谱系陶瓷基板制造商。核心技术包括直接覆铜 (DBC)、直接镀铜 (DPC) 和高温共烧陶瓷 (HTCC)。我们使用诸如氮化铝 (AlN)、氧化铝 (Al₂O₃) 以及 HTCC 专用生瓷带等关键材料。铜厚、金属化系统（铜、钨、金）和层数均根据每个应用的具体热学、电学、机械及气密性要求进行工程设计。",
            "faq_q3": "什么是 HTCC？其主要应用有哪些？",
            "faq_a3": "高温共烧陶瓷 (HTCC) 是指在1500°C以上的温度下，将氧化铝或氮化铝生瓷带与难熔金属（如钨、钼）导体共同烧结。这形成了致密、多层且气密的结构。其主要应用包括：用于 IC、MEMS 和传感器的气密封装；射频/微波组件（腔体、滤波器）；工业和汽车传感器外壳；以及高温电子器件基板。其首要优势在于卓越的机械强度、优异的高温稳定性以及在苛刻环境下的可靠性能。",
            "faq_q4": "贵公司的制造产能和典型交货期是多久？",
            "faq_a4": "我们拥有超过250名专业技术人员和先进的生产线，能够支持从原型到批量生产的 DBC、DPC 和 HTCC 基板制造。典型交货期取决于数量和复杂程度，请联系我们获取准确评估；工程样品可提供加急打样服务。",
            "faq_q5": "贵公司是否提供定制设计、打样和工程支持？",
            "faq_a5": "是的——我们提供可制造性设计指导、定制金属化图形、精细线路 DPC 解决方案和快速打样服务。我们的工程团队可与客户在热仿真、布局优化和产品认证方面合作，以加速产品开发进程。",
            "faq_q6": "贵公司遵循哪些质量体系和认证？",
            "faq_a6": "我们的制造过程遵循 ISO 级别的质量流程、环境管理体系以及严格的在线和最终测试。我们提供支持可靠性、RoHS/REACH 及客户特定认证要求的文档和测试报告。",
            "faq_q7": "如何申请样品、报价或技术咨询？",
            "faq_a7": "请使用我们的“联系我们”页面申请报价或样品——请注明基板类型、材料、铜厚、数量以及任何布局文件。对于技术咨询，请选择“联系我们的技术团队”，我们将指派工程师审核您的需求并提供后续步骤。",

            // 行动号召板块
            "about_cta_title": "与我们合作",
            "about_cta_description": "加入遍布全球的领先公司行列，他们在电力电子、射频及气密封装应用中，信赖集美材料满足其 DBC、DPC 和 HTCC 陶瓷基板需求。",
            "cta_expertise": "技术专长",
            "cta_expertise_desc": "超过8年的专业经验",
            "cta_quality": "质量保证",
            "cta_quality_desc": "通过 ISO 14001:2015 认证的流程",
            "cta_phone": "+86-147-4537-3293"
        },

        ja: {
            // Meta & SEO
            "about_page_title": "会社概要 | Jimei Materials - DBC、DPC、HTCCセラミック基板メーカー",
            "about_meta_description": "Jimei Materialsは2016年創業以来、先進的なセラミック基板ソリューションの主要メーカーです。パワーエレクトロニクス、EV、RF、気密封装アプリケーション向けにDBC（直接接合銅）、DPC（直接めっき銅）、HTCC（高温共焼セラミック）技術を専門としています。ISO 14001:2015認証取得。",
            "about_meta_keywords": "セラミック基板メーカー, DBC製造, DPC製造, HTCC製造, 高温共焼セラミック, セラミック気密封装, 多層セラミック基板, セラミックメタライゼーション企業, 熱管理ソリューション, パワーモジュール基板, 半導体パッケージングメーカー, AlN基板, Al₂O₃基板",
            "about_og_title": "会社概要 | Jimei Materials - DBC、DPC、HTCCセラミック基板ソリューション",
            "about_og_description": "ISO 14001:2015認証を取得した先進的なセラミック基板ソリューションの主要メーカー。パワーエレクトロニクス、熱管理、気密封装向けのDBC、DPC、HTCC技術を専門としています。",
            "about_twitter_title": "会社概要 | Jimei Materials - DBC、DPC、HTCCセラミック基板ソリューション",
            "about_twitter_description": "ISO 14001:2015認証を取得した先進的なセラミック基板ソリューションの主要メーカー。パワーエレクトロニクス、熱管理、気密封装向けのDBC、DPC、HTCC技術を専門としています。",

            // Breadcrumbs
            "breadcrumb_home": "ホーム",
            "breadcrumb_about": "会社概要",

            // Page Header
            "about_main_title": "Jimei Materialsについて",
            "about_subtitle": "2016年創業 セラミックメタライゼーション基板の主要メーカー",

            // Carousel Controls
            "carousel_prev": "前へ",
            "carousel_next": "次へ",

            // Company Overview Section
            "overview_title": "ミッション",
            "overview_mission": "より効率的で信頼性が高く持続可能なパワーエレクトロニクスを実現する革新的なセラミック基板ソリューションを通じて、熱管理技術の進歩に貢献すること。",
            "overview_description": "2016年の創業以来、Jimei Materialsは先進的なセラミック基板ソリューションの主要メーカーとしての地位を確立してきました。当社は3つのコア技術を確立しています：優れた熱性能を実現する直接接合銅（DBC）、高精度回路に対応する直接めっき銅（DPC）、堅牢な多層気密封装を可能にする高温共焼セラミック（HTCC）です。電気自動車や再生可能エネルギーからRF通信、半導体パッケージングに至るまで、様々な産業に貢献し、優れた信頼性、熱管理、過酷な環境下での性能が求められる次世代エレクトロニクスの重要な基盤を提供しています。",

            // Buttons
            "btn_contact_us": "お問い合わせ",
            "btn_view_products": "製品を見る",
            "btn_partner": "パートナーになる",

            // Company Stats Section
            "stat_years": "8年以上",
            "stat_years_label": "事業年数",
            "stat_employees": "250名以上",
            "stat_employees_label": "熟練技術者",
            "stat_countries": "30ヶ国以上",
            "stat_countries_label": "サービス提供国",
            "stat_projects": "5000件以上",
            "stat_projects_label": "完了プロジェクト数",

            // Technology Expertise Section
            "expertise_title": "技術専門性",
            "expertise_description": "セラミックメタライゼーションおよび熱管理における専門的知見",
            "expertise_dpc_title": "DPC技術",
            "expertise_dpc_desc": "直接めっき銅（DPC）は、セラミック上に微細配線を形成するために高精度な電気めっきとフォトリソグラフィを活用します。優れた平坦性、高周波特性、複雑な回路パターンが小型化や信号完全性に不可欠なRF/マイクロ波アプリケーション、レーザーダイオード、フォトニクス、精密センサーに最適化されています。",
            "expertise_dbc_title": "DBC技術",
            "expertise_dbc_desc": "直接接合銅（DBC）は、高温接合によって強固で信頼性の高いメタライゼーション層を形成します。優れた熱伝導率、大電流容量、厳しいパワーエレクトロニクスアプリケーションに必要な優れたサーマルサイクリング信頼性から、パワーモジュール、EVトラクションインバーター、IGBT/ワイドバンドギャップ半導体基板の選択肢として優先されています。",
            "expertise_htcc_title": "HTCC技術",
            "expertise_htcc_desc": "高温共焼セラミック（HTCC）は、1500°C以上の温度で耐火金属（W、Mo）メタライゼーションを施した多層アルミナまたはAlNグリーンテープを焼結する工程を含みます。これにより、高密度で気密性の高いパッケージと多層セラミック基板が作製され、優れた高温安定性と機械的堅牢性が求められる航空宇宙電子機器、MEMSパッケージング、RFキャビティ、ダウンホールセンサーに最適です。",

            // Company Timeline Section
            "timeline_title": "技術開発の歩み",
            "timeline_2016": "2016年 - 創業およびDBC事業開始",
            "timeline_2016_desc": "Jimei Materialsが深圳に設立され、国内パワーエレクトロニクスメーカー向けに最初のDBC（直接接合銅）生産ラインを確立。民生電子機器の熱管理向けAl₂O₃基板に初期重点。",
            "timeline_2018": "2018年 - DPC技術および国際展開",
            "timeline_2018_desc": "最小線間隔25μm対応の最初のDPC（直接めっき銅）生産ラインを立ち上げ。ISO 9001:2015認証を取得し、欧州自動車および日本半導体市場に進出。",
            "timeline_2020": "2020年 - EV革命と品質管理体制構築",
            "timeline_2020_desc": "ISO 14001:2015環境認証を取得。増大するEVインバーター需要に対応するためDBC生産を300%増強。SiCパワーモジュール基板向けに3つの自動車Tier-1サプライヤーとのパートナーシップを確立。",
            "timeline_2022": "2022年 - HTCC開発および5Gアプリケーション",
            "timeline_2022_desc": "HTCC（高温共焼セラミック）研究開発ラインを設置。RF/マイクロ波パッケージング向けAlN HTCCを開発し、5G基地局部品向けに主要通信機器メーカー2社に認定。",
            "timeline_2024": "2024年 - 先進材料およびグローバルエンジニアリング",
            "timeline_2024_desc": "Si₃N₄基板および多層HTCCパッケージの量産を開始。ドイツ、日本、米国に技術サポートセンターを設立。先進DPCフォトリソグラフィ向けに50μmビア能力を確立。",
            "timeline_2025": "2025年 - 次世代ロードマップ",
            "timeline_2025_desc": "現在、医療用インプラント向け超薄型DPC（総厚<100μm）および複雑な3Dパワーモジュール向けアクティブメタルろう付け技術を開発中。航空宇宙および産業用センサーアプリケーション向けHTCC能力を拡大。",

            // Global Presence Section
            "global_title": "グローバル技術パートナーシップ",
            "global_description": "世界中のイノベーションリーダーに先進的なセラミックソリューションを提供",

            // Regional Technology Focus
            "region_na": "北米",
            "region_na_tech": "EVおよびパワーエレクトロニクス",
            "region_na_desc": "自動車Tier-1向けSiC/GaNパワーモジュール用DBC基板、および航空宇宙RFアプリケーション向けDPC基板を供給。先進パッケージングソリューション向けに5社以上の半導体企業と技術提携。",
            "region_eu": "欧州",
            "region_eu_tech": "産業および自動車",
            "region_eu_desc": "産業用モータードライブおよび再生可能エネルギーコンバーター向けAlN DBC基板を提供。自動車センサーおよびMEMSデバイス向けHTCCパッケージ。ドイツ自動車OEM向けカスタム熱管理ソリューションを支援。",
            "region_apac": "アジア太平洋",
            "region_apac_tech": "半導体および民生",
            "region_apac_desc": "日本/韓国の半導体企業に先進パッケージング向け微細DPC基板を供給。民生電子機器熱管理向けAl₂O₃ DBC。中国/台湾の製造ハブにおける産業用センサー向けHTCCパッケージ。",

            // Technology Tags
            "tech_dbc": "DBC",
            "tech_dpc": "DPC",
            "tech_htcc": "HTCC",

            // Application Matrix
            "app_matrix_title": "技術応用マトリックス",
            "app_matrix_desc": "3つのセラミック基板技術にわたる具体的なアプリケーション",

            // Industry Names
            "app_industry": "産業",
            "app_dbc": "DBCアプリケーション",
            "app_dpc": "DPCアプリケーション",
            "app_htcc": "HTCCアプリケーション",
            "industry_ev": "電気自動車",
            "industry_telecom": "通信/5G",
            "industry_semiconductor": "半導体",
            "industry_industrial": "産業機器",
            "industry_medical": "医療",
            "industry_aerospace": "航空宇宙/防衛",

            // DBC Applications
            "dbc_ev": "• メイントラクションインバーター（SiC/IGBT） • 車載充電器（OBC） • DC-DCコンバーター • バッテリー管理システム",
            "dbc_telecom": "• RFパワーアンプ（GaN/Si LDMOS） • 基地局電源 • アンテナチューニングユニット • 高出力RFコンバイナー",
            "dbc_semi": "• SiC/GaNパワーデバイスパッケージ • 高出力LED基板 • レーザーダイオード放熱板 • パワーモジュールベースプレート",
            "dbc_industrial": "• 産業用モータードライブ（VFD） • UPSおよび電源装置 • 溶接機器 • 誘導加熱システム",
            "dbc_medical": "• MRIグラディエントアンプ • X線発生器モジュール • 手術用パワーツール • 除細動器回路",
            "dbc_aerospace": "• アビオニクスパワーモジュール • レーダーパワーアンプ • 衛星電源システム • 軍用車両ドライブ",

            // DPC Applications
            "dpc_ev": "• 電流/電圧センサー • ゲートドライバー回路 • ECU通信モジュール • HV/LV絶縁インターフェース",
            "dpc_telecom": "• 5G/mmWave向けMMIC • アンテナ・イン・パッケージ（AiP）モジュール • 低雑音アンプ • フェーズドアレイアンテナ素子",
            "dpc_semi": "• 先進ICパッケージング（FCBGA） • チップ・オン・ボード（COB）モジュール • MEMSデバイスインターポーザー • 光電子ハイブリッドパッケージ",
            "dpc_industrial": "• レーザーダイオードマウント（ファイバー/CO₂） • 産業用センサーインターフェース • PLC通信モジュール • 高精度電流モニタリング",
            "dpc_medical": "• インプラント可能デバイス基板 • 診断センサーインターフェース • 医療画像処理部品 • 生体電位測定回路",
            "dpc_aerospace": "• レーダー/電子戦フロントエンドモジュール • 衛星通信システム • 誘導システム回路 • 耐環境制御モジュール",

            // HTCC Applications
            "htcc_ev": "• 圧力センサー（ブレーキ/空気） • 温度センサー（バッテリー/モーター） • ガスセンサー（HVバッテリーモニタリング） • 封入パワーIC",
            "htcc_telecom": "• 気密RF/マイクロ波パッケージ • キャビティフィルターおよびデュプレクサー • EMIシールドエンクロージャー • 導波管-同軸変換",
            "htcc_semi": "• 気密MEMS/センサーパッケージ • マルチチップモジュール（MCM） • セラミックリードレスチップキャリア（CLCC） • セラミックピングリッドアレイ（CPGA）",
            "htcc_industrial": "• 高温センサーハウジング • 腐食環境用パッケージ • 産業用制御モジュール • 耐振動エンクロージャー",
            "htcc_medical": "• 気密インプラント可能パッケージ • 滅菌可能センサーハウジング • 医療デバイスインターコネクト • 生体適合性エンクロージャー",
            "htcc_aerospace": "• 気密宇宙グレードパッケージ • ミサイル誘導モジュール • 高G耐性エンクロージャー • 耐放射線パッケージ",

            // FAQ Section
            "faq_title": "よくある質問",
            "faq_description": "当社のセラミック基板製造に関する一般的な質問への回答",
            "faq_q1": "どのような産業で貴社のセラミック基板（DBC/DPC/HTCC）が使用されていますか？",
            "faq_a1": "当社はパワーエレクトロニクス、EVインバーター、半導体パッケージング、レーザーおよびフォトニクスモジュール、RF/5Gコンポーネント、再生可能エネルギーシステムにサービスを提供しています。高熱伝導率、電気絶縁性、気密性、長期信頼性が求められる用途に、当社のDBC、DPC、HTCCセラミック基板が指定されています。",
            "faq_q2": "どのようなセラミック基板技術および材料を製造していますか？",
            "faq_a2": "当社はフルスペクトラムのセラミック基板メーカーです。コア技術には直接接合銅（DBC）、直接めっき銅（DPC）、高温共焼セラミック（HTCC）が含まれます。窒化アルミニウム（AlN）、アルミナ（Al₂O₃）、HTCC用特殊テープなどの主要材料を扱っています。銅厚、メタライゼーションシステム（銅、タングステン、金）、層数は、各アプリケーションの特定の熱的、電気的、機械的、気密性要件を満たすように設計されています。",
            "faq_q3": "HTCCとは何ですか？その主なアプリケーションは何ですか？",
            "faq_a3": "高温共焼セラミック（HTCC）は、1500°C以上の温度で耐火金属（例：タングステン、モリブデン）メタライゼーションを施したアルミナまたは窒化アルミニウムグリーンテープを焼結する工程を含みます。これにより、高密度で多層かつ気密な構造が形成されます。主なアプリケーションには以下が含まれます：IC、MEMS、センサー向け気密パッケージ；RF/マイクロ波コンポーネント（キャビティ、フィルター）；産業および自動車センサーハウジング；高温電子機器用基板。その主な利点は、優れた機械的堅牢性、優れた高温安定性、過酷な環境下での信頼性の高い性能です。",
            "faq_q4": "製造能力および標準的なリードタイムを教えてください。",
            "faq_a4": "250名以上の熟練技術者と先進的な生産ラインを有し、DBC、DPC、HTCC基板の試作から量産まで対応しています。標準的なリードタイムは数量と複雑さによって異なります。詳細はお問い合わせください。エンジニアリングサンプル向けに迅速試作サービスもご利用いただけます。",
            "faq_q5": "カスタム設計、試作、エンジニアリングサポートは提供していますか？",
            "faq_a5": "はい — 当社は製造適合設計ガイダンス、カスタムメタライゼーションパターン、微細DPCソリューション、迅速試作を提供しています。エンジニアリングチームは、熱シミュレーション、レイアウト最適化、認定試験においてお客様と連携し、製品開発を加速します。",
            "faq_q6": "どのような品質システムおよび認証を維持していますか？",
            "faq_a6": "当社の製造はISOグレードの品質プロセス、環境管理、厳格なライン内および最終試験に従っています。信頼性、RoHS/REACHおよびお客様固有の認定要件をサポートする文書および試験報告書を提供します。",
            "faq_q7": "サンプル、見積もり、技術相談を依頼するにはどうすればよいですか？",
            "faq_a7": "見積もりやサンプル依頼にはお問い合わせページをご利用ください。基板タイプ、材料、銅厚、数量、レイアウトファイルなどを含めてください。技術相談の場合は「技術チームに相談」を選択いただくと、要件を確認し次のステップを提供するエンジニアを担当させます。",

            // CTA Section
            "about_cta_title": "パートナーシップ",
            "about_cta_description": "パワーエレクトロニクス、RF、気密封装アプリケーションにおけるDBC、DPC、HTCCセラミック基板要件でJimei Materialsを信頼する、世界中の主要企業にご参加ください。",
            "cta_expertise": "技術専門性",
            "cta_expertise_desc": "8年以上の専門的経験",
            "cta_quality": "品質保証",
            "cta_quality_desc": "ISO 14001:2015認証プロセス",
            "cta_phone": "+86-147-4537-3293"
        },

        ko: {
            // 메타 데이터 및 SEO
            "about_page_title": "Jimei Materials 회사소개 | DBC, DPC 및 HTCC 세라믹 기판 제조사",
            "about_meta_description": "Jimei Materials: 2016년 설립 이래 고급 세라믹 기판 솔루션의 선도적 제조사. 파워일렉트로닉스, 전기차, RF 및 기밀 패키징 응용 분야를 위한 DBC(직접 접합 구리), DPC(직접 도금 구리), HTCC(고온 동시 소성 세라믹) 기술 전문 보유. ISO 14001:2015 인증.",
            "about_meta_keywords": "세라믹 기판 제조사, DBC 제조사, DPC 제조사, HTCC 제조사, 고온 동시 소성 세라믹, 기밀 세라믹 패키징, 다층 세라믹 기판, 세라믹 금속화 전문기업, 열관리 솔루션, 파워 모듈 기판, 반도체 패키징 제조사, AlN 기판, Al₂O₃ 기판",
            "about_og_title": "Jimei Materials 회사소개 | DBC, DPC 및 HTCC 세라믹 기판 솔루션",
            "about_og_description": "ISO 14001:2015 인증을 보유한 고급 세라믹 기판 솔루션의 선도적 제조사. 파워일렉트로닉스, 열관리 및 기밀 패키징을 위한 DBC, DPC, HTCC 기술 전문 기업.",
            "about_twitter_title": "Jimei Materials 회사소개 | DBC, DPC 및 HTCC 세라믹 기판 솔루션",
            "about_twitter_description": "ISO 14001:2015 인증을 보유한 고급 세라믹 기판 솔루션의 선도적 제조사. 파워일렉트로닉스, 열관리 및 기밀 패키징을 위한 DBC, DPC, HTCC 기술 전문 기업.",

            // 브레드크럼
            "breadcrumb_home": "홈",
            "breadcrumb_about": "회사소개",

            // 페이지 헤더
            "about_main_title": "Jimei Materials 회사소개",
            "about_subtitle": "2016년 설립 이래 세라믹 금속화 기판의 선도적 제조사",

            // 캐러셀 컨트롤
            "carousel_prev": "이전",
            "carousel_next": "다음",

            // 회사 개요 섹션
            "overview_title": "미션 & 비전",
            "overview_mission": "보다 효율적이고 신뢰성 높으며 지속 가능한 파워일렉트로닉스를 가능하게 하는 혁신적인 세라믹 기판 솔루션을 통해 열관리 기술을 발전시키는 것",
            "overview_description": "2016년에 설립된 Jimei Materials는 고급 세라믹 기판 솔루션의 선도적 제조사로 자리매김하였습니다. 당사는 세 가지 핵심 기술을 보유하고 있습니다: 우수한 열 성능을 위한 직접 접합 구리 (DBC), 고정밀 회로 구현을 위한 직접 도금 구리 (DPC), 그리고 견고한 다층 기밀 패키징을 위한 고온 동시 소성 세라믹 (HTCC). 전기차 및 재생 에너지부터 RF 통신 및 반도체 패키징에 이르기까지 다양한 산업에 서비스하며, 극한 환경에서 탁월한 신뢰성, 열관리 및 성능을 요구하는 차세대 전자 장치의 핵심 기반을 제공합니다.",

            // 버튼
            "btn_contact_us": "문의하기",
            "btn_view_products": "제품 보기",
            "btn_partner": "지금 협력하기",

            // 회사 현황 섹션
            "stat_years": "8+",
            "stat_years_label": "년간 경험",
            "stat_employees": "250+",
            "stat_employees_label": "숙련된 전문가",
            "stat_countries": "30+",
            "stat_countries_label": "서비스 국가",
            "stat_projects": "5000+",
            "stat_projects_label": "완료 프로젝트",

            // 기술 전문성 섹션
            "expertise_title": "기술 전문성",
            "expertise_description": "세라믹 금속화 및 열관리 분야의 특화된 지식",
            "expertise_dpc_title": "DPC 기술",
            "expertise_dpc_desc": "직접 도금 구리 (DPC)는 세라믹 위에 정밀 전해 도금 및 포토리소그래피를 활용하여 미세 피치 회로를 구현합니다. 탁월한 평탄도, 고주파 성능 및 복잡한 회로 패턴이 소형화 및 신호 무결성에 중요한 RF/마이크로파 응용, 레이저 다이오드, 포토닉스, 그리고 정밀 센서에 최적화되어 있습니다.",
            "expertise_dbc_title": "DBC 기술",
            "expertise_dbc_desc": "직접 접합 구리 (DBC)는 고온 접합을 통해 강력하고 신뢰성 높은 금속화층을 형성합니다. 우수한 열전도도, 높은 전류 전달 능력 및 까다로운 파워일렉트로닉스 응용 분야를 위한 뛰어난 열 사이클링 신뢰성으로 인해 파워 모듈, EV 트랙션 인버터, 그리고 IGBT/광대역 반도체 기판에 선호되는 선택입니다.",
            "expertise_htcc_title": "HTCC 기술",
            "expertise_htcc_desc": "고온 동시 소성 세라믹 (HTCC)은 1500°C 이상의 온도에서 내화성 금속(W, Mo) 금속화층을 갖춘 다층 알루미나 또는 AlN 생테이프를 소성하는 공정을 포함합니다. 이를 통해 고밀도, 기밀 패키지 및 다층 세라믹 기판이 생성되며, 이는 탁월한 고온 안정성과 기계적 강도가 필요한 항공우주 전자 장치, MEMS 패키징, RF 캐비티, 그리고 시추공 센서에 이상적입니다.",

            // 회사 연혁 섹션
            "timeline_title": "기술 발전 연혁",
            "timeline_2016": "2016 - 설립 및 DBC 기술 도입",
            "timeline_2016_desc": "중국 심천에서 Jimei Materials 설립. 현지 파워일렉트로닉스 제조사를 위한 첫 번째 DBC(직접 접합 구리) 생산라인 구축. 소비자 가전 열관리를 위한 Al₂O₃ 기판에 초점.",
            "timeline_2018": "2018 - DPC 기술 도입 및 글로벌 진출",
            "timeline_2018_desc": "최소 선 간격 25μm 능력을 갖춘 첫 번째 DPC(직접 도금 구리) 생산라인 가동. ISO 9001:2015 인증 획득 및 유럽 자동차 및 일본 반도체 시장 진출.",
            "timeline_2020": "2020 - EV 혁신 및 품질 시스템 구축",
            "timeline_2020_desc": "ISO 14001:2015 환경 경영 시스템 인증 획득. 증가하는 EV 인버터 수요에 대응하여 DBC 생산 능력 300% 확대. SiC 파워 모듈 기판 공급을 위해 Tier-1 자동차 부품사 3곳과 파트너십 체결.",
            "timeline_2022": "2022 - HTCC 개발 및 5G 응용",
            "timeline_2022_desc": "HTCC(고온 동시 소성 세라믹) 연구개발 라인 가동. RF/마이크로파 패키징용 AlN HTCC 개발 및 5G 기지국 부품에 대해 주요 통신 장비 제조사 2곳과 성공적으로 자격 인증 완료.",
            "timeline_2024": "2024 - 고급 재료 및 글로벌 엔지니어링",
            "timeline_2024_desc": "Si₃N₄ 기판 및 다층 HTCC 패키지 양산 시작. 독일, 일본 및 미국에 기술 지원 센터 설립. 고급 DPC 포토리소그래피를 위한 50μm 비아 구현 능력 확보.",
            "timeline_2025": "2025 - 차세대 기술 로드맵",
            "timeline_2025_desc": "현재 의료용 임플란트를 위한 초박형 DPC(총 두께 <100μm) 및 복잡한 3D 파워 모듈을 위한 능동 금속 브레이징 기술 개발 중. 항공우주 및 산업용 센서 응용을 위한 HTCC 생산 능력 확장.",

            // 글로벌 현황 섹션
            "global_title": "글로벌 기술 파트너십",
            "global_description": "전 세계 혁신 선도 기업에 고급 세라믹 솔루션 제공",

            // 지역별 기술 포커스
            "region_na": "북아메리카",
            "region_na_tech": "전기차 및 파워일렉트로닉스",
            "region_na_desc": "자동차 Tier-1사에 SiC/GaN 파워 모듈용 DBC 기판 및 항공우주 RF 응용을 위한 DPC 기판 공급. 고급 패키징 솔루션을 위해 5개 이상의 반도체 기업과 기술 파트너십 유지.",
            "region_eu": "유럽",
            "region_eu_tech": "산업용 및 자동차",
            "region_eu_desc": "산업용 모터 구동기 및 재생 에너지 변환기용 AlN DBC 기판 제공. 자동차 센서 및 MEMS 소자용 HTCC 패키지 공급. 독일 자동차 OEM에 맞춤형 열관리 솔루션 지원.",
            "region_apac": "아시아 태평양",
            "region_apac_tech": "반도체 및 소비자 가전",
            "region_apac_desc": "일본/한국 반도체 기업에 고급 패키징을 위한 미세 피치 DPC 기판 공급. 소비자 가전 열관리를 위한 Al₂O₃ DBC 기판 제공. 중국/대만 제조 허브의 산업용 센서를 위한 HTCC 패키지 공급.",

            // 기술 태그
            "tech_dbc": "DBC",
            "tech_dpc": "DPC",
            "tech_htcc": "HTCC",

            // 응용 분야 매트릭스
            "app_matrix_title": "기술별 응용 분야 매트릭스",
            "app_matrix_desc": "세 가지 세라믹 기판 기술의 구체적인 응용 분야",
            "app_industry": "산업 분야",
            "app_dbc": "DBC 응용",
            "app_dpc": "DPC 응용",
            "app_htcc": "HTCC 응용",

            // 산업 분야명
            "industry_ev": "전기차",
            "industry_telecom": "통신/5G",
            "industry_semiconductor": "반도체",
            "industry_industrial": "산업용",
            "industry_medical": "의료",
            "industry_aerospace": "항공우주/방산",

            // DBC 응용 분야
            "dbc_ev": "• 주행용 트랙션 인버터 (SiC/IGBT) • 온보드 충전기 (OBC) • DC-DC 컨버터 • 배터리 관리 시스템",
            "dbc_telecom": "• RF 파워 증폭기 (GaN/Si LDMOS) • 기지장치 전원 공급 장치 • 안테나 튜닝 유닛 • 고출력 RF 결합기",
            "dbc_semi": "• SiC/GaN 파워 소자 패키지 • 고출력 LED 기판 • 레이저 다이오드 열확산판 • 파워 모듈 베이스플레이트",
            "dbc_industrial": "• 산업용 모터 구동기 (VFD) • UPS 및 전원 공급 장치 • 용접 장비 • 유도 가열 시스템",
            "dbc_medical": "• MRI 그라디언트 증폭기 • X-선 발생기 모듈 • 수술용 파워 툴 • 제세동기 회로",
            "dbc_aerospace": "• 항공전자 장치 파워 모듈 • 레이더 파워 증폭기 • 위성 전원 시스템 • 군용 차량 구동 장치",

            // DPC 응용 분야
            "dpc_ev": "• 전류/전압 센서 • 게이트 드라이버 회로 • ECU 통신 모듈 • 고전압/저전압 절연 인터페이스",
            "dpc_telecom": "• 5G/밀리미터파용 MMIC • 패키지 내 안테나 (AiP) 모듈 • 저잡음 증폭기 • 위상 배열 안테나 소자",
            "dpc_semi": "• 고급 IC 패키징 (FCBGA) • 칩 온 보드 (COB) 모듈 • MEMS 소자 인터포저 • 광전자 하이브리드 패키지",
            "dpc_industrial": "• 레이저 다이오드 마운트 (광섬유/CO₂) • 산업용 센서 인터페이스 • PLC 통신 모듈 • 정밀 전류 모니터링",
            "dpc_medical": "• 이식형 장치 기판 • 진단 센서 인터페이스 • 의료 영상 구성 요소 • 생체 전위 측정 회로",
            "dpc_aerospace": "• 레이더/전자전 프론트엔드 모듈 • 위성 통신 시스템 • 유도 시스템 회로 • 강화된 제어 모듈",

            // HTCC 응용 분야
            "htcc_ev": "• 압력 센서 (브레이크/공기) • 온도 센서 (배터리/모터) • 가스 센서 (고전압 배터리 모니터링) • 캡슐화된 파워 IC",
            "htcc_telecom": "• 기밀 RF/마이크로파 패키지 • 캐비티 필터 및 듀플렉서 • EMI 차폐 인클로저 • 도파관-동축 전이",
            "htcc_semi": "• 기밀 MEMS/센서 패키지 • 다중 칩 모듈 (MCM) • 세라믹 리드리스 칩 캐리어 (CLCC) • 세라믹 핀 그리드 어레이 (CPGA)",
            "htcc_industrial": "• 고온 센서 하우징 • 부식성 환경 패키지 • 산업용 제어 모듈 • 진동 저항성 인클로저",
            "htcc_medical": "• 기밀 이식형 패키지 • 멸균 가능 센서 하우징 • 의료기기 인터커넥트 • 생체 적합성 인클로저",
            "htcc_aerospace": "• 기밀 우주 등급 패키지 • 미사일 유도 모듈 • 고가속도 저항성 인클로저 • 방사선 내성 패키지",

            // FAQ 섹션
            "faq_title": "자주 묻는 질문",
            "faq_description": "세라믹 기판 제조에 관한 일반적인 질문에 대한 답변",
            "faq_q1": "어떤 산업 분야에서 당사의 세라믹 기판(DBC/DPC/HTCC)을 사용하나요?",
            "faq_a1": "당사는 파워일렉트로닉스, EV 인버터, 반도체 패키징, 레이저 및 포토닉스 모듈, RF/5G 부품, 재생 에너지 시스템에 서비스하고 있습니다. 당사의 DBC, DPC, HTCC 세라믹 기판은 높은 열전도도, 전기 절연, 기밀성 및 장기 신뢰성이 요구되는 분야에 지정되어 사용됩니다.",
            "faq_q2": "어떤 세라믹 기판 기술 및 재료를 제조하나요?",
            "faq_a2": "당사는 풀 스펙트럼 세라믹 기판 제조사입니다. 핵심 기술에는 직접 접합 구리 (DBC), 직접 도금 구리 (DPC), 그리고 고온 동시 소성 세라믹 (HTCC)이 포함됩니다. 당사는 질화알루미늄 (AlN), 알루미나 (Al₂O₃), HTCC용 특수 테이프와 같은 주요 재료를 다룹니다. 구리 두께, 금속화 시스템(구리, 텅스텐, 금) 및 층수는 각 응용 분야의 특정 열적, 전기적, 기계적 및 기밀성 요구사항을 충족하도록 설계됩니다.",
            "faq_q3": "HTCC란 무엇이며 주요 응용 분야는 무엇인가요?",
            "faq_a3": "고온 동시 소성 세라믹 (HTCC)은 1500°C 이상의 온도에서 내화성 금속(예: 텅스텐, 몰리브덴) 금속화층을 갖춘 알루미나 또는 질화알루미늄 생테이프를 소성하는 공정을 포함합니다. 이를 통해 고밀도, 다층 및 기밀 구조가 생성됩니다. 주요 응용 분야는 다음과 같습니다: IC, MEMS 및 센서용 기밀 패키지; RF/마이크로파 부품 (캐비티, 필터); 산업용 및 자동차 센서 하우징; 그리고 고온 전자 장치용 기판. 주요 장점은 탁월한 기계적 강도, 우수한 고온 안정성 및 가혹한 환경에서의 신뢰할 수 있는 성능입니다.",
            "faq_q4": "제조 능력 및 일반적인 납기는 어떻게 되나요?",
            "faq_a4": "250명 이상의 숙련된 전문가와 고급 생산 라인을 보유하여 DBC, DPC 및 HTCC 기판의 프로토타입부터 양산까지 지원합니다. 일반적인 납기는 수량과 복잡성에 따라 다릅니다 — 예상 납기일은 문의해 주시기 바랍니다; 엔지니어링 샘플에 대해서는 신속한 프로토타이핑 서비스가 가능합니다.",
            "faq_q5": "맞춤형 설계, 프로토타이핑 및 엔지니어링 지원을 제공하나요?",
            "faq_a5": "예 — 당사는 제조용 설계 지도, 맞춤형 금속화 패턴, 미세 피치 DPC 솔루션 및 신속한 프로토타이핑을 제공합니다. 당사 엔지니어링 팀은 열 시뮬레이션, 레이아웃 최적화 및 자격 인증에 대해 고객과 협력하여 제품 개발을 가속화합니다.",
            "faq_q6": "어떤 품질 시스템과 인증을 유지하고 있나요?",
            "faq_a6": "당사의 제조 공정은 ISO 등급 품질 프로세스, 환경 관리 및 엄격한 라인 내 및 최종 검사를 따릅니다. 당사는 신뢰성, RoHS/REACH 및 고객별 자격 요건을 지원하기 위한 문서 및 시험 보고서를 제공합니다.",
            "faq_q7": "샘플, 견적 또는 기술 상담을 요청하려면 어떻게 해야 하나요?",
            "faq_a7": "견적 또는 샘플 요청을 위해 문의 페이지를 이용해 주세요 — 기판 유형, 재료, 구리 두께, 수량 및 레이아웃 파일을 포함해 주세요. 기술 상담을 위해서는 \"기술 팀에 문의하기\"를 선택해 주시면 엔지니어가 요구사항을 검토하고 다음 단계를 제공할 것입니다.",

            // CTA 섹션
            "about_cta_title": "함께 성장해 나갑시다",
            "about_cta_description": "파워일렉트로닉스, RF 및 기밀 패키징 응용 분야에서 DBC, DPC, HTCC 세라믹 기판 요구사항을 위해 Jimei Materials를 신뢰하는 전 세계 선도 기업들과 함께 하세요.",
            "cta_expertise": "기술 전문성",
            "cta_expertise_desc": "8년 이상의 특화된 경험",
            "cta_quality": "품질 보증",
            "cta_quality_desc": "ISO 14001:2015 인증 공정",
            "cta_phone": "+86-147-4537-3293"
        },

        de: {
            // Meta & SEO
            "about_page_title": "Über Jimei Materials | DBC, DPC & HTCC Keramiksubstrat-Hersteller",
            "about_meta_description": "Jimei Materials: Führender Hersteller fortschrittlicher Keramiksubstrat-Lösungen seit 2016. Wir spezialisieren uns auf DBC (Direct Bonded Copper), DPC (Direct Plated Copper) und HTCC (Hochtemperatur-ko-gesinterte Keramik) Technologien für Leistungselektronik, E-Mobilität, Hochfrequenztechnik und hermetische Gehäuseanwendungen. ISO 14001:2015 zertifiziert.",
            "about_meta_keywords": "Keramiksubstrat Hersteller, DBC Hersteller, DPC Hersteller, HTCC Hersteller, Hochtemperatur-ko-gesinterte Keramik, hermetische Keramikgehäuse, Mehrlagen-Keramiksubstrate, Keramikmetallisierung Unternehmen, Wärmemanagement Lösungen, Leistungsmodul Substrate, Halbleitergehäuse Hersteller, AlN Substrate, Al₂O₃ Substrate",
            "about_og_title": "Über Jimei Materials | DBC, DPC & HTCC Keramiksubstrat-Lösungen",
            "about_og_description": "Führender Hersteller fortschrittlicher Keramiksubstrat-Lösungen mit ISO 14001:2015 Zertifizierung. Spezialisiert auf DBC, DPC und HTCC Technologien für Leistungselektronik, Wärmemanagement und hermetische Gehäuse.",
            "about_twitter_title": "Über Jimei Materials | DBC, DPC & HTCC Keramiksubstrat-Lösungen",
            "about_twitter_description": "Führender Hersteller fortschrittlicher Keramiksubstrat-Lösungen mit ISO 14001:2015 Zertifizierung. Spezialisiert auf DBC, DPC und HTCC Technologien für Leistungselektronik, Wärmemanagement und hermetische Gehäuse.",

            // Breadcrumbs
            "breadcrumb_home": "Startseite",
            "breadcrumb_about": "Über uns",

            // Page Header
            "about_main_title": "Über Jimei Materials",
            "about_subtitle": "Führender Hersteller metallisierter Keramiksubstrate seit 2016",

            // Carousel Controls
            "carousel_prev": "Zurück",
            "carousel_next": "Weiter",

            // Company Overview Section
            "overview_title": "Unsere Mission",
            "overview_mission": "Wärmemanagement-Technologie durch innovative Keramiksubstrat-Lösungen voranzutreiben, die effizientere, zuverlässigere und nachhaltigere Leistungselektronik ermöglichen.",
            "overview_description": "Gegründet im Jahr 2016 hat sich Jimei Materials als führender Hersteller fortschrittlicher Keramiksubstrat-Lösungen etabliert. Wir beherrschen drei Kerntechnologien: Direct Bonded Copper (DBC) für überlegene thermische Leistung, Direct Plated Copper (DPC) für hochpräzise Schaltungen und High-Temperature Co-fired Ceramic (HTCC) für robuste, mehrlagige hermetische Gehäuse. Wir bedienen Branchen von Elektrofahrzeugen und erneuerbaren Energien bis hin zu HF-Kommunikation und Halbleitergehäusen und liefern die kritische Grundlage für Elektronik der nächsten Generation, die außergewöhnliche Zuverlässigkeit, Wärmemanagement und Leistung unter anspruchsvollen Umgebungsbedingungen erfordert.",

            // Buttons
            "btn_contact_us": "Kontaktieren Sie uns",
            "btn_view_products": "Produkte ansehen",
            "btn_partner": "Jetzt Partner werden",

            // Company Stats Section
            "stat_years": "8+",
            "stat_years_label": "Jahre Erfahrung",
            "stat_employees": "250+",
            "stat_employees_label": "Qualifizierte Fachkräfte",
            "stat_countries": "30+",
            "stat_countries_label": "Bereiste Länder",
            "stat_projects": "5000+",
            "stat_projects_label": "Abgeschlossene Projekte",

            // Technology Expertise Section
            "expertise_title": "Technologie-Expertise",
            "expertise_description": "Spezialwissen in Keramikmetallisierung und Wärmemanagement",
            "expertise_dpc_title": "DPC-Technologie",
            "expertise_dpc_desc": "Direct Plated Copper (DPC) nutzt Präzisionsgalvanik und Fotolithografie für Feinstleiter-Schaltungen auf Keramik. Optimiert für HF-/Mikrowellenanwendungen, Laserdioden, Photonik und Präzisionssensoren, bei denen außergewöhnliche Planarität, Hochfrequenzleistung und komplexe Schaltungsmuster für Miniaturisierung und Signalintegrität entscheidend sind.",
            "expertise_dbc_title": "DBC-Technologie",
            "expertise_dbc_desc": "Direct Bonded Copper (DBC) erzeugt eine starke, zuverlässige Metallisierungsschicht durch Hochtemperatur-Verbund. Die bevorzugte Wahl für Leistungsmodule, EV-Antriebsumrichter und IGBT/Weitbandlücken-Halbleitersubstrate aufgrund ihrer ausgezeichneten Wärmeleitfähigkeit, hohen Stromtragfähigkeit und überlegenen thermischen Zykluszuverlässigkeit für anspruchsvolle Leistungselektronikanwendungen.",
            "expertise_htcc_title": "HTCC-Technologie",
            "expertise_htcc_desc": "High-Temperature Co-fired Ceramic (HTCC) beinhaltet das Sintern mehrlagiger Aluminiumoxid- oder AlN-Grünfolien mit Metallisierung aus hochschmelzenden Metallen (W, Mo) bei Temperaturen über 1500°C. Dies erzeugt dichte, hermetische Gehäuse und mehrlagige Keramiksubstrate, ideal für Luft- und Raumfahrtelektronik, MEMS-Gehäuse, HF-Resonatoren und Downhole-Sensoren, die außergewöhnliche Hochtemperaturstabilität und mechanische Robustheit erfordern.",

            // Company Timeline Section
            "timeline_title": "Unser Technologieweg",
            "timeline_2016": "2016 - Gründung & DBC-Markteinführung",
            "timeline_2016_desc": "Jimei Materials wird in Shenzhen gegründet und richtet die erste DBC (Direct Bonded Copper)-Produktionslinie für lokale Leistungselektronik-Hersteller ein. Erster Fokus auf Al₂O₃-Substraten für Wärmemanagement in Unterhaltungselektronik.",
            "timeline_2018": "2018 - DPC-Technologie & Internationale Expansion",
            "timeline_2018_desc": "Start der ersten DPC (Direct Plated Copper)-Produktionslinie mit 25 μm minimaler Leiterbahnbreite. Erlangung der ISO 9001:2015 Zertifizierung und Expansion in europäische Automobil- und japanische Halbleitermärkte.",
            "timeline_2020": "2020 - E-Mobilitäts-Revolution & Qualitätssysteme",
            "timeline_2020_desc": "Erlangung der ISO 14001:2015 Umweltzertifizierung. DBC-Produktion um 300 % hochgefahren zur Unterstützung der wachsenden Nachfrage nach EV-Wechselrichtern. Aufbau von Partnerschaften mit drei Tier-1 Automobilzulieferern für SiC-Leistungsmodul-Substrate.",
            "timeline_2022": "2022 - HTCC-Entwicklung & 5G-Anwendungen",
            "timeline_2022_desc": "Inbetriebnahme unserer HTCC (High-Temperature Co-fired Ceramic)-F&E-Linie. Entwicklung von AlN-HTCC für HF-/Mikrowellengehäuse und erfolgreiche Qualifizierung bei zwei großen Telekommunikationsausrüstern für 5G-Basisstationskomponenten.",
            "timeline_2024": "2024 - Fortschrittliche Materialien & Globales Engineering",
            "timeline_2024_desc": "Start der Serienproduktion von Si₃N₄-Substraten und mehrlagigen HTCC-Gehäusen. Einrichtung technischer Support-Zentren in Deutschland, Japan und den USA. Erreichung von 50 μm Durchkontaktierungsfähigkeit für fortschrittliche DPC-Fotolithografie.",
            "timeline_2025": "2025 - Roadmap der nächsten Generation",
            "timeline_2025_desc": "Aktuelle Entwicklung von ultra-dünnen DPC-Substraten (<100 μm Gesamtdicke) für medizinische Implantate und Active-Metal-Brazing-Technologie für komplexe 3D-Leistungsmodule. Ausbau der HTCC-Kapazität für Luft- und Raumfahrt- sowie Industriesensoranwendungen.",

            // Global Presence Section
            "global_title": "Globale Technologiepartnerschaften",
            "global_description": "Lieferung fortschrittlicher Keramiklösungen an Innovationsführer weltweit",

            // Regional Technology Focus
            "region_na": "Nordamerika",
            "region_na_tech": "E-Mobilität & Leistungselektronik",
            "region_na_desc": "Lieferung von DBC-Substraten für SiC/GaN-Leistungsmodule an Automotive Tier-1s und DPC-Substraten für Luft- und Raumfahrt-HF-Anwendungen. Technische Partnerschaften mit 5+ Halbleiterunternehmen für fortschrittliche Gehäuselösungen.",
            "region_eu": "Europa",
            "region_eu_tech": "Industrie & Automotive",
            "region_eu_desc": "Bereitstellung von AlN-DBC-Substraten für Industriemotorantriebe und Wechselrichter für erneuerbare Energien. HTCC-Gehäuse für Automotivsensoren und MEMS-Bauteile. Unterstützung deutscher Automotive-OEMs mit kundenspezifischen Wärmemanagement-Lösungen.",
            "region_apac": "Asien-Pazifik",
            "region_apac_tech": "Halbleiter & Unterhaltungselektronik",
            "region_apac_desc": "Lieferung von Feinstleiter-DPC-Substraten an japanische/koreanische Halbleiterunternehmen für fortschrittliche Gehäusetechnik. Al₂O₃ DBC für Wärmemanagement in Unterhaltungselektronik. HTCC-Gehäuse für Industriesensoren in chinesischen/taiwanischen Fertigungszentren.",

            // Technology Tags
            "tech_dbc": "DBC",
            "tech_dpc": "DPC",
            "tech_htcc": "HTCC",

            // Application Matrix
            "app_matrix_title": "Technologie-Anwendungsmatrix",
            "app_matrix_desc": "Spezifische Anwendungen für alle drei Keramiksubstrat-Technologien",
            "app_industry": "Branche",
            "app_dbc": "DBC-Anwendungen",
            "app_dpc": "DPC-Anwendungen",
            "app_htcc": "HTCC-Anwendungen",

            // Industry Names
            "industry_ev": "Elektrofahrzeuge",
            "industry_telecom": "Telekommunikation/5G",
            "industry_semiconductor": "Halbleiter",
            "industry_industrial": "Industrie",
            "industry_medical": "Medizintechnik",
            "industry_aerospace": "Luft- und Raumfahrt/Verteidigung",

            // DBC Applications
            "dbc_ev": "• Hauptantriebsumrichter (SiC/IGBT) • Bordladegeräte (OBC) • DC-DC-Wandler • Batteriemanagementsysteme",
            "dbc_telecom": "• HF-Leistungsverstärker (GaN/Si LDMOS) • Basisstations-Netzteile • Antennentuning-Einheiten • Hochleistungs-HF-Kombinierer",
            "dbc_semi": "• SiC/GaN-Leistungsbauelement-Gehäuse • Hochleistungs-LED-Substrate • Laserdioden-Wärmespreizer • Leistungsmodul-Grundplatten",
            "dbc_industrial": "• Industriemotorantriebe (VFD) • USV & Netzteile • Schweißausrüstung • Induktionsheizsysteme",
            "dbc_medical": "• MRI-Gradientenverstärker • Röntgengenerator-Module • Chirurgische Leistungswerkzeuge • Defibrillator-Schaltungen",
            "dbc_aerospace": "• Avionik-Leistungsmodule • Radar-Leistungsverstärker • Satelliten-Stromversorgungssysteme • Militärfahrzeugantriebe",

            // DPC Applications
            "dpc_ev": "• Strom-/Spannungssensoren • Gate-Treiberschaltungen • ECU-Kommunikationsmodule • HV/LV-Isolationsschnittstellen",
            "dpc_telecom": "• MMICs für 5G/mmWave • Antenna-in-Package (AiP) Module • Low-Noise-Verstärker • Phased-Array-Antennenelemente",
            "dpc_semi": "• Fortschrittliche IC-Gehäuse (FCBGA) • Chip-on-Board (COB) Module • MEMS-Bauelement-Interposer • Optoelektronische Hybridgehäuse",
            "dpc_industrial": "• Laserdioden-Montagen (Faser/CO₂) • Industriesensor-Schnittstellen • SPS-Kommunikationsmodule • Präzisions-Stromüberwachung",
            "dpc_medical": "• Implantat-Substrate • Diagnosesensor-Schnittstellen • Medizinische Bildgebungskomponenten • Biopotenzial-Messschaltungen",
            "dpc_aerospace": "• Radar/EW-Frontend-Module • Satellitenkommunikationssysteme • Lenksystem-Schaltungen • Verstärkte Steuermodule",

            // HTCC Applications
            "htcc_ev": "• Drucksensoren (Bremse/Luft) • Temperatursensoren (Batterie/Motor) • Gassensoren (HV-Batterieüberwachung) • Einkapselte Leistungs-ICs",
            "htcc_telecom": "• Hermetische HF-/Mikrowellengehäuse • Hohlraumfilter & Duplexer • EMV-geschirmte Gehäuse • Hohlleiter-Koaxial-Übergänge",
            "htcc_semi": "• Hermetische MEMS/Sensor-Gehäuse • Multi-Chip-Module (MCM) • Keramische leadless Chip-Carrier (CLCC) • Keramische Pin-Grid-Arrays (CPGA)",
            "htcc_industrial": "• Hochtemperatur-Sensorgehäuse • Korrosionsbeständige Gehäuse • Industriesteuerungsmodule • Vibrationsresistente Gehäuse",
            "htcc_medical": "• Hermetische Implantatgehäuse • Sterilisierbare Sensorgehäuse • Medizingeräte-Verbindungen • Biokompatible Gehäuse",
            "htcc_aerospace": "• Hermetische raumfahrtqualifizierte Gehäuse • Lenkflugkörper-Steuermodule • Hoch-G-resistente Gehäuse • Strahlungsharte Gehäuse",

            // FAQ Section
            "faq_title": "Häufig gestellte Fragen",
            "faq_description": "Antworten auf häufige Fragen zu unserer Keramiksubstrat-Fertigung",
            "faq_q1": "Welche Branchen nutzen Ihre Keramiksubstrate (DBC / DPC / HTCC)?",
            "faq_a1": "Wir bedienen Leistungselektronik, EV-Wechselrichter, Halbleitergehäuse, Laser- & Photonikmodule, HF-/5G-Komponenten und Systeme für erneuerbare Energien. Unsere DBC-, DPC- und HTCC-Keramiksubstrate werden überall dort eingesetzt, wo hohe Wärmeleitfähigkeit, elektrische Isolation, Hermetizität und langfristige Zuverlässigkeit erforderlich sind.",
            "faq_q2": "Welche Keramiksubstrat-Technologien und Materialien fertigen Sie?",
            "faq_a2": "Wir sind ein Full-Spektrum-Keramiksubstrat-Hersteller. Unsere Kerntechnologien umfassen Direct Bonded Copper (DBC), Direct Plated Copper (DPC) und High-Temperature Co-fired Ceramic (HTCC). Wir arbeiten mit Schlüsselmaterialien wie Aluminiumnitrid (AlN), Aluminiumoxid (Al₂O₃) und speziellen Grünfolien für HTCC. Kupferdicke, Metallisierungssysteme (Kupfer, Wolfram, Gold) und Lagenanzahl werden an die spezifischen thermischen, elektrischen, mechanischen und hermetischen Anforderungen jeder Anwendung angepasst.",
            "faq_q3": "Was ist HTCC und welche sind seine Hauptanwendungen?",
            "faq_a3": "High-Temperature Co-fired Ceramic (HTCC) beinhaltet das Sintern von Aluminiumoxid- oder Aluminiumnitrid-Grünfolien mit Metallisierung aus hochschmelzenden Metallen (z.B. Wolfram, Molybdän) bei Temperaturen über 1500°C. Dies erzeugt dichte, mehrlagige und hermetische Strukturen. Hauptanwendungen umfassen: hermetische Gehäuse für ICs, MEMS und Sensoren; HF-/Mikrowellenkomponenten (Resonatoren, Filter); Industrie- und Automotiv-Sensorgehäuse; und Substrate für Hochtemperaturelektronik. Ihre primären Vorteile sind außergewöhnliche mechanische Robustheit, ausgezeichnete Hochtemperaturstabilität und zuverlässige Leistung unter rauen Umgebungsbedingungen.",
            "faq_q4": "Wie groß ist Ihre Fertigungskapazität und wie lang sind typische Lieferzeiten?",
            "faq_a4": "Mit über 250 qualifizierten Fachkräften und modernen Produktionslinien unterstützen wir die Produktion von Prototypen bis zur Serie für DBC-, DPC- und HTCC-Substrate. Typische Lieferzeiten hängen von Menge und Komplexität ab — kontaktieren Sie uns für eine ETA; beschleunigtes Prototyping ist für Engineering-Muster verfügbar.",
            "faq_q5": "Bieten Sie kundenspezifische Designs, Prototyping und technischen Support?",
            "faq_a5": "Ja — wir bieten Design-for-Manufacture-Beratung, kundenspezifische Metallisierungsmuster, Feinstleiter-DPC-Lösungen und schnelles Prototyping. Unser Engineering-Team arbeitet mit Kunden an thermischen Simulationen, Layout-Optimierung und Qualifizierung, um die Produktentwicklung zu beschleunigen.",
            "faq_q6": "Welche Qualitätssysteme und Zertifizierungen pflegen Sie?",
            "faq_a6": "Unsere Fertigung folgt ISO-konformen Qualitätsprozessen, Umweltmanagement und strengen Inline- sowie Endprüfungen. Wir stellen Dokumentation und Testberichte zur Unterstützung von Zuverlässigkeits-, RoHS/REACH- und kundenspezifischen Qualifizierungsanforderungen bereit.",
            "faq_q7": "Wie kann ich Muster, Angebote oder eine technische Beratung anfordern?",
            "faq_a7": "Nutzen Sie unsere Kontaktseite, um ein Angebot oder Muster anzufordern — geben Sie Substrattyp, Material, Kupferdicke, Mengen und eventuelle Layout-Dateien an. Für technische Beratungen wählen Sie \"Unser technisches Team kontaktieren\" und wir weisen einen Ingenieur zu, der Ihre Anforderungen prüft und nächste Schritte aufzeigt.",

            // CTA Section
            "about_cta_title": "Werden Sie unser Partner",
            "about_cta_description": "Schließen Sie sich führenden Unternehmen weltweit an, die Jimei Materials für ihre DBC-, DPC- und HTCC-Keramiksubstrat-Anforderungen in Leistungselektronik, HF-Technik und hermetischen Gehäusen vertrauen.",
            "cta_expertise": "Technische Expertise",
            "cta_expertise_desc": "8+ Jahre spezialisierte Erfahrung",
            "cta_quality": "Qualitätssicherung",
            "cta_quality_desc": "ISO 14001:2015 zertifizierte Prozesse",
            "cta_phone": "+86-147-4537-3293"
        }
    };

    // Initialize with common translations system
    if (window.CommonTranslations) {
        window.translations = window.CommonTranslations.initLanguageSystem(translations);
    }
})();

