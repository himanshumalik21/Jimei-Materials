// about-translations.js - Internationalization for About Page
// Author: Jimei Materials Development Team
// Version: 1.0.0
// Last Updated: 2024

(function() {
    'use strict';

    // Translations object
    const translations = {
        en: {
            // Meta & SEO
            "about_page_title": "About Jimei Materials | Leading Ceramic Substrate Manufacturer",
            "about_meta_description": "Jimei Materials: Leading manufacturer of ceramic metallization substrates since 2016. Specializing in DBC, DPC, and bare ceramic substrates for power electronics, EV, semiconductor, and thermal management applications. ISO 14001:2015 certified.",
            "about_meta_keywords": "ceramic substrate manufacturer, DBC manufacturer, DPC manufacturer, about Jimei Materials, ceramic metallization company, thermal management solutions, power electronics substrates, semiconductor packaging manufacturer, AlN substrates, Al2O3 substrates",
            "about_og_title": "About Jimei Materials | Ceramic Substrate Manufacturer | DBC & DPC Solutions",
            "about_og_description": "Leading manufacturer of ceramic metallization substrates with ISO 14001:2015 certification. Specializing in DBC, DPC, and bare ceramic solutions for power electronics and thermal management.",
            "about_twitter_title": "About Jimei Materials | Ceramic Substrate Manufacturer | DBC & DPC Solutions",
            "about_twitter_description": "Leading manufacturer of ceramic metallization substrates with ISO 14001:2015 certification. Specializing in DBC, DPC, and bare ceramic solutions for power electronics and thermal management.",

            // Navigation
            "nav_home": "Home",
            "nav_products": "Products",
            "nav_dpc": "Direct Plated Copper (DPC)",
            "nav_dbc": "Direct Bonded Copper (DBC)",
            "nav_bare": "Bare Ceramic Substrates",
            "nav_all_products": "All Products",
            "nav_resources": "Resources",
            "nav_about": "About",
            "nav_contact": "Contact",
            "nav_request_quote": "Request Quote",
            "nav_blog": "Blog",

            // Breadcrumbs
            "breadcrumb_home": "Home",
            "breadcrumb_about": "About Us",

            // Page Header
            "about_main_title": "About Jimei Materials",
            "about_subtitle": "Leading manufacturer of ceramic metallization substrates since 2016",
            "about_image_alt": "Jimei Materials Manufacturing Facility",

            // Company Overview Section
            "overview_title": "Our Mission",
            "overview_mission": "To advance thermal management technology through innovative ceramic substrate solutions that enable more efficient, reliable, and sustainable power electronics.",
            "overview_description": "Founded in 2016, Jimei Materials has established itself as a leading manufacturer of high-performance ceramic metallization substrates. We specialize in Direct Bonded Copper (DBC) and Direct Plated Copper (DPC) technologies, serving industries ranging from electric vehicles and renewable energy to semiconductor packaging and telecommunications.",
            
            // Buttons
            "btn_contact_us": "Contact Us",
            "btn_view_products": "View Products",
            "btn_partner": "Partner Today",

            // Company Stats Section
            "stats_title": "By The Numbers",
            "stats_description": "Driving innovation in ceramic substrate manufacturing",
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
            "expertise_dpc_desc": "Precision electroplating and photolithography for fine-pitch circuits, optimized for RF/microwave and semiconductor applications with superior electrical performance.",
            "expertise_dbc_title": "DBC Technology",
            "expertise_dbc_desc": "High-temperature copper bonding for superior thermal conductivity, ideal for power electronics, EV inverters, and industrial drives requiring robust heat dissipation.",
            "expertise_materials_title": "Material Science",
            "expertise_materials_desc": "Deep expertise in AlN, Al₂O₃, Si₃N₄, and ZrO₂ ceramics, optimizing material properties for specific thermal, mechanical, and electrical requirements.",

            // Quality & Certifications Section
            "quality_title": "Quality & Certifications",
            "quality_description": "We maintain rigorous quality standards and environmental responsibility throughout our manufacturing processes.",
            "cert_iso": "ISO 14001:2015 Certified",
            "cert_rohs": "RoHS Compliant",
            "cert_testing": "In-House Testing Labs",
            "cert_spc": "Statistical Process Control",
            "quality_process": "Our quality management system includes comprehensive material testing, in-process inspections, and final verification to ensure every substrate meets or exceeds customer specifications and industry standards.",
            "quality_testing_title": "Testing Capabilities",
            "test_thermal": "Thermal Conductivity Measurement",
            "test_electrical": "Electrical Breakdown Testing",
            "test_mechanical": "Mechanical Strength Testing",
            "test_surface": "Surface Roughness Analysis",
            "test_xray": "X-ray Inspection",
            "test_thermal_cycle": "Thermal Cycling Reliability",

            // Company Timeline Section
            "timeline_title": "Our Journey",
            "timeline_description": "Milestones in our growth and innovation",
            "timeline_2016": "2016 - Foundation",
            "timeline_2016_desc": "Jimei Materials founded in Shenzhen, China, focusing on ceramic substrate manufacturing for local electronics industry.",
            "timeline_2018": "2018 - Technology Expansion",
            "timeline_2018_desc": "Launched DPC production line and expanded into international markets, serving customers in Europe and North America.",
            "timeline_2020": "2020 - Quality Certification",
            "timeline_2020_desc": "Achieved ISO 14001:2015 certification and expanded manufacturing capacity to meet growing EV industry demand.",
            "timeline_2022": "2022 - R&D Center",
            "timeline_2022_desc": "Established advanced R&D laboratory focusing on next-generation thermal management materials and processes.",
            "timeline_2024": "2024 - Global Expansion",
            "timeline_2024_desc": "Expanded technical support teams in key regions and launched advanced Si₃N₄ substrate production capabilities.",

            // Global Presence Section
            "global_title": "Global Presence",
            "global_description": "Serving customers across multiple industries worldwide",
            "industry_ev": "Electric Vehicles",
            "industry_ev_desc": "Power modules and inverters for leading EV manufacturers worldwide.",
            "industry_telecom": "Telecommunications",
            "industry_telecom_desc": "5G infrastructure and RF power amplifiers for global telecom networks.",
            "industry_semiconductor": "Semiconductor",
            "industry_semiconductor_desc": "Advanced packaging substrates for semiconductor manufacturers.",

            // FAQ Section
            "faq_title": "Frequently Asked Questions",
            "faq_description": "Answers to common questions about our ceramic substrate manufacturing",
            "faq_q1": "Which industries use your ceramic substrates (DBC / DPC)?",
            "faq_a1": "We serve power electronics, EV inverters, semiconductor packaging, laser & photonics modules, RF/5G components and renewable energy systems. Our DBC and DPC ceramic substrates are specified where high thermal conductivity, electrical insulation and long‑term reliability are required.",
            "faq_q2": "What materials and substrate types do you manufacture?",
            "faq_a2": "We produce metallized AlN and Al2O3 substrates and provide Direct Bonded Copper (DBC), Direct Plated Copper (DPC) and specialized ceramic metallization. Materials and copper thicknesses are optimized to match thermal, electrical and assembly requirements for each application.",
            "faq_q3": "What is your manufacturing capacity and typical lead time?",
            "faq_a3": "With 250+ skilled professionals and advanced production lines, we support prototype to volume production for DBC and DPC substrates. Typical lead times depend on quantity and complexity — contact us for an ETA; expedited prototyping is available for engineering samples.",
            "faq_q4": "Do you offer custom designs, prototyping and engineering support?",
            "faq_a4": "Yes — we provide design-for-manufacture guidance, custom metallization patterns, fine‑pitch DPC solutions and rapid prototyping. Our engineering team partners with customers on thermal simulations, layout optimization and qualification to accelerate product development.",
            "faq_q5": "What quality systems and certifications do you maintain?",
            "faq_a5": "Our manufacturing follows ISO-grade quality processes, environmental management and rigorous in‑line and final testing. We provide documentation and test reports to support reliability, RoHS/REACH and customer-specific qualification requirements.",
            "faq_q6": "How can I request samples, quotes or a technical consultation?",
            "faq_a6": "Use our Contact page to request a quote or samples — include substrate type, material, copper thickness, quantities and any layout files. For technical consultations, select 'Contact Our Technical Team' and we will assign an engineer to review requirements and provide next steps.",

            // CTA Section
            "about_cta_title": "Partner With Us",
            "about_cta_description": "Join leading companies worldwide who trust Jimei Materials for their ceramic substrate requirements.",
            "cta_expertise": "Technical Expertise",
            "cta_expertise_desc": "8+ years specialized experience",
            "cta_quality": "Quality Assurance",
            "cta_quality_desc": "ISO 14001:2015 certified processes",
            "cta_phone": "+86-147-4537-3293",

            // Footer
            "footer_description": "Leading manufacturer of ceramic metallization substrates for power electronics and thermal management applications since 2016. ISO 14001:2015 certified with global manufacturing capabilities.",
            "footer_products": "Products",
            "footer_company": "Company",
            "footer_contact": "Contact Info",
            "footer_address": "First Industrial Zone, Haosan Linpokeng, Xinqiao Street, Bao'an District, Shenzhen, China",
            "footer_hours": "Mon-Fri: 8:00 AM - 6:00 PM (GMT+8)",
            "footer_languages": "Support: English, Chinese, Japanese, Korean, German",
            "footer_rights": "All rights reserved.",
            "footer_privacy": "Privacy Policy",
            "footer_terms": "Terms of Service",
            "footer_sitemap": "Sitemap"
        },
        
        zh: {
        // 元标签 - 强调“关于我们”及企业定位
        "about_page_title": "关于吉美材料 | 领先的陶瓷基板制造商",
        "about_meta_description": "吉美材料：自2016年成立的陶瓷金属化基板领先制造商。专注于为功率电子、电动汽车、半导体及热管理应用提供DBC、DPC及裸陶瓷基板解决方案。通过ISO 14001:2015认证。",
        "about_meta_keywords": "陶瓷基板制造商, DBC基板生产商, DPC基板厂家, 关于吉美材料, 陶瓷金属化公司, 热管理解决方案, 功率电子基板, 半导体封装制造商, 氮化铝基板, 氧化铝基板",
        "about_og_title": "关于吉美材料 | 陶瓷基板制造商 | DBC与DPC解决方案专家",
        "about_og_description": "通过ISO 14001:2015认证的陶瓷金属化基板领先制造商。专注于为功率电子和热管理领域提供DBC、DPC及裸陶瓷基板解决方案。",
        "about_twitter_title": "关于吉美材料 | 陶瓷基板制造商 | DBC与DPC解决方案专家",
        "about_twitter_description": "通过ISO 14001:2015认证的陶瓷金属化基板领先制造商。专注于为功率电子和热管理领域提供DBC、DPC及裸陶瓷基板解决方案。",

        // 导航 (与全站保持一致)
        "nav_home": "首页",
        "nav_products": "产品中心",
        "nav_dpc": "直接镀铜陶瓷基板 (DPC)",
        "nav_dbc": "直接覆铜陶瓷基板 (DBC)",
        "nav_bare": "裸陶瓷基板",
        "nav_all_products": "全部产品",
        "nav_resources": "技术资源",
        "nav_about": "关于吉美",
        "nav_contact": "联系我们",
        "nav_request_quote": "在线询价",
        "nav_blog": "技术博客",

        // 面包屑导航
        "breadcrumb_home": "首页",
        "breadcrumb_about": "关于我们",

        // 页面标题区
        "about_main_title": "关于吉美材料",
        "about_subtitle": "自2016年起，致力于成为陶瓷金属化基板的领先者",
        "about_image_alt": "吉美材料现代化生产车间",

        // 公司概况
        "overview_title": "我们的使命",
        "overview_mission": "通过创新的陶瓷基板解决方案推动热管理技术进步，赋能更高效、更可靠、更可持续的功率电子系统。",
        "overview_description": "吉美材料成立于2016年，现已发展成为高性能陶瓷金属化基板的领先制造商。我们专注于直接覆铜和直接镀铜技术，服务于从电动汽车、可再生能源到半导体封装和通信设备等诸多行业，以卓越的品质和可靠的技术解决方案支持全球客户。",
        
        // 按钮
        "btn_contact_us": "联系我们",
        "btn_view_products": "查看产品",
        "btn_partner": "立即合作",

        // 公司数据
        "stats_title": "我们的足迹",
        "stats_description": "以创新驱动陶瓷基板制造发展",
        "stat_years": "8+",
        "stat_years_label": "年行业深耕",
        "stat_employees": "250+",
        "stat_employees_label": "专业技术人员",
        "stat_countries": "30+",
        "stat_countries_label": "服务国家与地区",
        "stat_projects": "5000+",
        "stat_projects_label": "成功交付项目",

        // 技术专长
        "expertise_title": "核心技术与专长",
        "expertise_description": "深耕陶瓷金属化与热管理领域，具备深厚专业知识",
        "expertise_dpc_title": "DPC技术",
        "expertise_dpc_desc": "精密电镀与光刻工艺，实现细线路与高精度图形，专为射频/微波及半导体应用优化，提供卓越的电学性能与信号完整性。",
        "expertise_dbc_title": "DBC技术",
        "expertise_dbc_desc": "高温共晶键合工艺，实现超高导热与强结合力，是功率模块、电动汽车逆变器及工业驱动器等需要高效散热与大电流承载应用的理想选择。",
        "expertise_materials_title": "材料科学与选型",
        "expertise_materials_desc": "在氮化铝、氧化铝、氮化硅及氧化锆等陶瓷材料方面拥有深厚积累，能够根据特定的热学、机械及电学要求，为客户优化材料选型方案。",

        // 质量与认证
        "quality_title": "质量体系与认证",
        "quality_description": "我们在全制造流程中坚持严格的质量标准，并积极践行环境责任。",
        "cert_iso": "ISO 14001:2015 认证",
        "cert_rohs": "符合RoHS标准",
        "cert_testing": "自有检测实验室",
        "cert_spc": "统计过程控制",
        "quality_process": "我们的质量管理体系涵盖从原材料检测、过程监控到最终验证的全流程，确保每一片基板都满足甚至超越客户规格与行业标准。",
        "quality_testing_title": "检测能力一览",
        "test_thermal": "导热系数测试",
        "test_electrical": "介电击穿强度测试",
        "test_mechanical": "结合强度与机械性能测试",
        "test_surface": "表面粗糙度与形貌分析",
        "test_xray": "X射线无损检测",
        "test_thermal_cycle": "热循环可靠性测试",

        // 发展历程
        "timeline_title": "成长与创新之路",
        "timeline_description": "记录我们发展的关键里程碑",
        "timeline_2016": "2016 - 创立之初",
        "timeline_2016_desc": "吉美材料在中国深圳成立，初期专注于服务本地电子行业的陶瓷基板制造。",
        "timeline_2018": "2018 - 技术拓展",
        "timeline_2018_desc": "建成DPC生产线，业务拓展至海外市场，开始服务欧洲及北美客户。",
        "timeline_2020": "2020 - 体系认证与扩产",
        "timeline_2020_desc": "获得ISO 14001:2015环境管理体系认证，并扩大产能以应对快速增长的新能源汽车行业需求。",
        "timeline_2022": "2022 - 研发中心成立",
        "timeline_2022_desc": "成立先进研发实验室，专注于下一代热管理材料与工艺的研发。",
        "timeline_2024": "2024 - 全球化布局深化",
        "timeline_2024_desc": "在关键区域扩充技术支持团队，并成功量产高性能氮化硅陶瓷基板。",

        // 全球布局与行业应用
        "global_title": "全球视野与行业赋能",
        "global_description": "为全球多元化的行业客户提供关键基板解决方案",
        "industry_ev": "电动汽车",
        "industry_ev_desc": "为全球领先的电动汽车制造商提供电驱功率模块与逆变器用关键基板。",
        "industry_telecom": "通信设备",
        "industry_telecom_desc": "为全球通信网络提供5G基站设备与射频功率放大器用高可靠基板。",
        "industry_semiconductor": "半导体封装",
        "industry_semiconductor_desc": "为半导体制造商提供用于先进封装技术的高性能衬底与互联基板。",

        // 常见问题 - 优化问答表述，使其更符合中文口语和逻辑
        "faq_title": "常见问题解答",
        "faq_description": "关于我们陶瓷基板制造的常见问题",
        "faq_q1": "贵司的陶瓷基板（DBC/DPC）主要应用于哪些行业？",
        "faq_a1": "我们服务于功率电子、电动汽车逆变器、半导体先进封装、激光与光电子模块、射频/5G组件以及可再生能源系统等领域。我们的DBC和DPC陶瓷基板主要应用于对高导热率、高电绝缘性及长期可靠性有严苛要求的场景。",
        "faq_q2": "贵司生产哪些材料和类型的基板？",
        "faq_a2": "我们生产金属化的氮化铝和氧化铝基板，并提供直接覆铜、直接镀铜及其他特种陶瓷金属化服务。材料和铜厚可根据不同应用的热学、电学及组装要求进行定制优化。",
        "faq_q3": "贵司的制造产能和典型交货期是多久？",
        "faq_a3": "我们拥有超过250名专业技术人员和先进产线，支持从原型到批量的DBC/DPC基板生产。典型交货期取决于订单数量与工艺复杂度，请联系我们获取准确交期。针对工程样品，我们可提供加急打样服务。",
        "faq_q4": "贵司是否提供定制设计、打样和工程支持？",
        "faq_a4": "是的。我们提供可制造性设计指导、定制化图形设计、细线路DPC解决方案及快速打样服务。我们的工程团队可参与客户的热仿真、布局优化及产品认证过程，加速产品开发。",
        "faq_q5": "贵司遵循哪些质量体系和认证？",
        "faq_a5": "我们的制造遵循ISO级质量管理流程和环境管理体系，并进行严格的在线及最终测试。我们可提供完整的文档和测试报告，以支持可靠性、RoHS/REACH及客户特定的认证要求。",
        "faq_q6": "如何申请样品、报价或技术咨询？",
        "faq_a6": "您可以通过“联系我们”页面提交询价或样品申请。请注明基板类型、材料、铜厚、数量及任何设计文件。如需技术咨询，请选择“联系技术团队”，我们将安排工程师对接，评估需求并提供后续步骤。",

        // CTA区
        "about_cta_title": "携手吉美，共创未来",
        "about_cta_description": "加入全球众多领先企业的行列，信赖吉美材料，满足您对高性能陶瓷基板的需求。",
        "cta_expertise": "专业技术",
        "cta_expertise_desc": "8年以上行业专注经验",
        "cta_quality": "品质保障",
        "cta_quality_desc": "ISO 14001:2015 认证体系",
        "cta_phone": "+86-147-4537-3293",

        // 页脚 (风格统一)
        "footer_description": "吉美材料——专注于高性能陶瓷基板研发与制造，为全球功率电子及热管理应用提供可靠解决方案。自2016年成立以来，凭借ISO 14001:2015体系认证与先进制程，服务各行业领先客户。",
        "footer_products": "产品中心",
        "footer_company": "关于吉美",
        "footer_contact": "联系我们",
        "footer_address": "中国广东省深圳市宝安区新桥街道豪三林坡坑第一工业区",
        "footer_hours": "工作日 8:00 - 18:00 (北京时间 GMT+8)",
        "footer_languages": "支持语言: 中文、英语、日语、韩语、德语",
        "footer_rights": "版权所有。",
        "footer_privacy": "隐私政策",
        "footer_terms": "使用条款",
        "footer_sitemap": "网站地图"
    },
        
        ja: {
        // Meta & SEO
        "about_page_title": "会社概要 | セラミック基板メーカー Jimei Materials",
        "about_meta_description": "Jimei Materials（深圳吉美材料科技有限公司）は、2016年創業のセラミックメタライゼーション基板のリーディングメーカーです。パワーエレクトロニクス、EV、半導体、熱管理アプリケーション向けにDBC、DPC、未金属化セラミック基板を専門に製造。ISO 14001:2015認証取得。",
        "about_meta_keywords": "セラミック基板 メーカー, DBC メーカー, DPC メーカー, Jimei Materials 会社概要, セラミックメタライゼーション 企業, 熱管理ソリューション, パワーエレクトロニクス基板, 半導体パッケージング メーカー, AlN基板, Al2O3基板",
        "about_og_title": "会社概要 | セラミック基板メーカー Jimei Materials | DBC・DPCソリューション",
        "about_og_description": "ISO 14001:2015認証を取得したセラミックメタライゼーション基板のリーディングメーカー。パワーエレクトロニクスおよび熱管理向けDBC、DPC、未金属化セラミックソリューションを専門に提供。",
        "about_twitter_title": "会社概要 | セラミック基板メーカー Jimei Materials | DBC・DPCソリューション",
        "about_twitter_description": "ISO 14001:2015認証を取得したセラミックメタライゼーション基板のリーディングメーカー。パワーエレクトロニクスおよび熱管理向けDBC、DPC、未金属化セラミックソリューションを専門に提供。",

        // Navigation (統一維持)
        "nav_home": "ホーム",
        "nav_products": "製品情報",
        "nav_dpc": "直接鍍金銅（DPC）基板",
        "nav_dbc": "直接接合銅（DBC）基板",
        "nav_bare": "未金属化セラミック基板",
        "nav_all_products": "製品一覧",
        "nav_resources": "技術資料",
        "nav_about": "会社概要",
        "nav_contact": "お問い合わせ",
        "nav_request_quote": "見積もり依頼",
        "nav_blog": "技術ブログ",

        // Breadcrumbs
        "breadcrumb_home": "ホーム",
        "breadcrumb_about": "会社概要",

        // Page Header
        "about_main_title": "Jimei Materials について",
        "about_subtitle": "2016年創業、セラミックメタライゼーション基板のリーディングメーカー",
        "about_image_alt": "Jimei Materials 製造施設",

        // Company Overview Section
        "overview_title": "企業理念",
        "overview_mission": "革新的なセラミック基板ソリューションを通じて熱管理技術を推進し、より効率的で信頼性が高く、持続可能なパワーエレクトロニクスの実現に貢献します。",
        "overview_description": "2016年に創業したJimei Materialsは、高性能セラミックメタライゼーション基板のリーディングメーカーとしての地位を確立しています。当社は直接接合銅（DBC）および直接鍍金銅（DPC）技術を専門とし、電気自動車、再生可能エネルギーから半導体パッケージング、通信機器に至るまで、幅広い産業にサービスを提供しています。",
        
        // Buttons
        "btn_contact_us": "お問い合わせ",
        "btn_view_products": "製品を見る",
        "btn_partner": "パートナーになる",

        // Company Stats Section
        "stats_title": "数字で見る当社",
        "stats_description": "セラミック基板製造におけるイノベーションの推進",
        "stat_years": "8+",
        "stat_years_label": "年の実績",
        "stat_employees": "250+",
        "stat_employees_label": "技術者",
        "stat_countries": "30+",
        "stat_countries_label": "サービス提供国",
        "stat_projects": "5000+",
        "stat_projects_label": "完了プロジェクト数",

        // Technology Expertise Section
        "expertise_title": "技術分野における専門性",
        "expertise_description": "セラミックメタライゼーションおよび熱管理に関する専門知識",
        "expertise_dpc_title": "DPC技術",
        "expertise_dpc_desc": "微細配線形成のための高精度電気めっきおよびフォトリソグラフィ技術。優れた高周波特性が求められるRF/マイクロ波および半導体アプリケーションに最適化されています。",
        "expertise_dbc_title": "DBC技術",
        "expertise_dbc_desc": "優れた熱伝導性を実現する高温銅接合技術。堅牢な放熱が求められるパワーエレクトロニクス、EVインバータ、産業用ドライバに理想的です。",
        "expertise_materials_title": "材料科学",
        "expertise_materials_desc": "AlN、Al₂O₃、Si₃N₄、ZrO₂といったセラミック材料に関する深い知見を持ち、特定の熱的、機械的、電気的要件に応じて材料特性を最適化します。",

        // Quality & Certifications Section
        "quality_title": "品質管理と認証",
        "quality_description": "製造プロセス全体において、厳格な品質基準と環境への責任を維持しています。",
        "cert_iso": "ISO 14001:2015 認証取得",
        "cert_rohs": "RoHS指令準拠",
        "cert_testing": "自社内試験ラボ",
        "cert_spc": "統計的工程管理（SPC）",
        "quality_process": "当社の品質マネジメントシステムは、包括的な材料試験、工程中の検査、最終検証を含み、全ての基板がお客様の仕様および業界標準を満たし、それを上回ることを保証します。",
        "quality_testing_title": "試験・評価能力",
        "test_thermal": "熱伝導率測定",
        "test_electrical": "絶縁破壊電圧試験",
        "test_mechanical": "機械的強度試験",
        "test_surface": "表面粗さ分析",
        "test_xray": "X線検査",
        "test_thermal_cycle": "熱サイクル信頼性試験",

        // Company Timeline Section
        "timeline_title": "当社の沿革",
        "timeline_description": "成長と革新の軌跡",
        "timeline_2016": "2016年 - 創業",
        "timeline_2016_desc": "中国・深圳にてJimei Materialsを創業。国内電子産業向けのセラミック基板製造に注力。",
        "timeline_2018": "2018年 - 技術拡大",
        "timeline_2018_desc": "DPC生産ラインを立ち上げ、欧州および北米の顧客へのサービス提供を開始し、国際市場へ進出。",
        "timeline_2020": "2020年 - 品質認証取得",
        "timeline_2020_desc": "ISO 14001:2015認証を取得。成長するEV産業の需要に対応するため、製造能力を拡大。",
        "timeline_2022": "2022年 - 研究開発センター設立",
        "timeline_2022_desc": "次世代熱管理材料およびプロセスに焦点を当てた先進的な研究開発ラボを設立。",
        "timeline_2024": "2024年 - グローバル展開の拡大",
        "timeline_2024_desc": "主要地域における技術サポートチームを拡充し、先進的なSi₃N₄（窒化ケイ素）基板の生産能力を開始。",

        // Global Presence Section
        "global_title": "グローバルな事業展開",
        "global_description": "世界中の多様な産業にわたるお客様にサービスを提供",
        "industry_ev": "電気自動車",
        "industry_ev_desc": "世界中の主要EVメーカー向けパワーモジュールおよびインバータ。",
        "industry_telecom": "通信機器",
        "industry_telecom_desc": "グローバル通信ネットワーク向け5GインフラおよびRFパワーアンプ。",
        "industry_semiconductor": "半導体",
        "industry_semiconductor_desc": "半導体メーカー向け先進パッケージング基板。",

        // FAQ Section
        "faq_title": "よくあるご質問",
        "faq_description": "当社のセラミック基板製造に関する一般的な質問への回答",
        "faq_q1": "どのような産業でお客様のセラミック基板（DBC / DPC）が使用されていますか？",
        "faq_a1": "当社は、パワーエレクトロニクス、EVインバータ、半導体パッケージング、レーザー・フォトニクスモジュール、RF/5G部品、再生可能エネルギーシステムなど、多様な産業にサービスを提供しています。当社のDBCおよびDPCセラミック基板は、高い熱伝導性、電気絶縁性、および長期信頼性が求められる用途に採用されています。",
        "faq_q2": "どのような材料および基板タイプを製造していますか？",
        "faq_a2": "当社は、金属化されたAlN（窒化アルミニウム）およびAl2O3（アルミナ）基板を製造し、直接接合銅（DBC）、直接鍍金銅（DPC）、および特殊なセラミックメタライゼーションを提供しています。材料および銅厚は、各アプリケーションの熱的、電気的、実装要件に合わせて最適化されます。",
        "faq_q3": "製造能力および標準的な納期はどのようになっていますか？",
        "faq_a3": "250名を超える技術者と先進的な生産ラインを有し、DBCおよびDPC基板の試作から量産までをサポートしています。標準的な納期は数量および複雑さによって異なります。詳細な日程についてはお問い合わせください。エンジニアリングサンプル向けの迅速な試作サービスもご利用いただけます。",
        "faq_q4": "カスタム設計、試作、およびエンジニアリングサポートは提供していますか？",
        "faq_a4": "はい、提供しています。製造適合性設計（DFM）に関するガイダンス、カスタム金属化パターン、微細配線DPCソリューション、および迅速な試作サービスをご提供します。当社のエンジニアリングチームは、熱シミュレーション、レイアウト最適化、および品質評価においてお客様と連携し、製品開発を加速します。",
        "faq_q5": "どのような品質システムおよび認証を維持していますか？",
        "faq_a5": "当社の製造は、ISO基準の品質プロセス、環境マネジメント、および厳格な工程内・最終試験に従っています。信頼性、RoHS/REACH、およびお客様固有の認定要件をサポートする文書および試験報告書を提供します。",
        "faq_q6": "サンプル、見積もり、または技術相談を依頼するにはどうすればよいですか？",
        "faq_a6": "見積もりまたはサンプルのご依頼は、お問い合わせページをご利用ください。その際、基板タイプ、材料、銅厚、数量、およびレイアウトファイル（如果有）などをご記載ください。技術相談の場合は、「技術チームに連絡」を選択いただくと、要件を確認し次のステップをご案内するエンジニアが担当いたします。",

        // CTA Section
        "about_cta_title": "ぜひ、当社とご一緒に",
        "about_cta_description": "セラミック基板の要件においてJimei Materialsを信頼する、世界中の主要企業に加わってください。",
        "cta_expertise": "技術的専門性",
        "cta_expertise_desc": "8年以上の専門的経験",
        "cta_quality": "品質保証",
        "cta_quality_desc": "ISO 14001:2015認証プロセス",
        "cta_phone": "+86-147-4537-3293",

        // Footer (統一維持)
        "footer_description": "2016年創業以来、パワーエレクトロニクスおよび熱管理アプリケーション向けの高信頼性セラミックメタライゼーション基板を提供するリーディングメーカーです。ISO 14001:2015認証を取得し、グローバルな製造・供給体制を有しています。",
        "footer_products": "製品カテゴリ",
        "footer_company": "企業情報",
        "footer_contact": "連絡先",
        "footer_address": "中国 広東省 深圳市 宝安区 新橋街道 豪三林坡坑 第一工業区",
        "footer_hours": "営業時間: 月〜金 8:00 - 18:00 (中国標準時 GMT+8)",
        "footer_languages": "対応言語: 英語、中国語、日本語、韓国語、ドイツ語",
        "footer_rights": "© Jimei Materials. All Rights Reserved.",
        "footer_privacy": "プライバシーポリシー",
        "footer_terms": "利用規約",
        "footer_sitemap": "サイトマップ"
    },
        
        ko: {
    // Meta & SEO
    "about_page_title": "Jimei Materials 소개 | 세라믹 기판 선도 제조사",
    "about_meta_description": "Jimei Materials: 2016년 설립 이래 세라믹 금속화 기판의 선도적 제조사. 전력전자, 전기차, 반도체 및 열 관리 애플리케이션을 위한 DBC, DPC 및 비금속화 세라믹 기판 전문. ISO 14001:2015 인증.",
    "about_meta_keywords": "세라믹 기판 제조사, DBC 제조업체, DPC 제조업체, Jimei Materials 소개, 세라믹 금속화 전문 기업, 열 관리 솔루션, 전력전자용 기판, 반도체 패키징 제조사, AlN 기판, Al2O3 기판",
    "about_og_title": "Jimei Materials 소개 | 세라믹 기판 제조사 | DBC & DPC 솔루션",
    "about_og_description": "ISO 14001:2015 인증을 보유한 세라믹 금속화 기판의 선도적 제조사. 전력전자 및 열 관리를 위한 DBC, DPC 및 비금속화 세라믹 솔루션 전문.",
    "about_twitter_title": "Jimei Materials 소개 | 세라믹 기판 제조사 | DBC & DPC 솔루션",
    "about_twitter_description": "ISO 14001:2015 인증을 보유한 세라믹 금속화 기판의 선도적 제조사. 전력전자 및 열 관리를 위한 DBC, DPC 및 비금속화 세라믹 솔루션 전문.",

    // Navigation (일관성 유지)
    "nav_home": "홈",
    "nav_products": "제품",
    "nav_dpc": "DPC (Direct Plated Copper) 기판",
    "nav_dbc": "DBC (Direct Bonded Copper) 기판",
    "nav_bare": "비금속화 세라믹 기판",
    "nav_all_products": "제품 전체보기",
    "nav_resources": "기술 자료",
    "nav_about": "회사소개",
    "nav_contact": "문의",
    "nav_request_quote": "견적 문의",
    "nav_blog": "기술 블로그",

    // Breadcrumbs
    "breadcrumb_home": "홈",
    "breadcrumb_about": "회사소개",

    // Page Header
    "about_main_title": "Jimei Materials 소개",
    "about_subtitle": "2016년 설립 이래 세라믹 금속화 기판의 선도적 제조사",
    "about_image_alt": "Jimei Materials 제조 시설",

    // Company Overview Section
    "overview_title": "미션 & 비전",
    "overview_mission": "보다 효율적이고 신뢰할 수 있으며 지속 가능한 전력전자를 가능하게 하는 혁신적인 세라믹 기판 솔루션을 통해 열 관리 기술을 선도합니다.",
    "overview_description": "2016년에 설립된 Jimei Materials는 고성능 세라믹 금속화 기판의 선도적 제조사로 자리매김했습니다. 당사는 직접 접합 동(DBC) 및 직접 도금 동(DPC) 기술을 전문으로 하며, 전기 자동차 및 신재생 에너지부터 반도체 패키징 및 통신에 이르기까지 다양한 산업 분야에 서비스를 제공하고 있습니다.",
    
    // Buttons
    "btn_contact_us": "문의하기",
    "btn_view_products": "제품 보기",
    "btn_partner": "파트너십 문의",

    // Company Stats Section
    "stats_title": "Jimei Materials를 숫자로 보다",
    "stats_description": "세라믹 기판 제조 분야의 혁신을 주도합니다",
    "stat_years": "8년+",
    "stat_years_label": "기술 노하우",
    "stat_employees": "250명+",
    "stat_employees_label": "전문 기술 인력",
    "stat_countries": "30개국+",
    "stat_countries_label": "진출 국가",
    "stat_projects": "5,000건+",
    "stat_projects_label": "완료 프로젝트",

    // Technology Expertise Section
    "expertise_title": "핵심 기술 역량",
    "expertise_description": "세라믹 금속화 및 열 관리 분야의 전문 지식",
    "expertise_dpc_title": "DPC 기술",
    "expertise_dpc_desc": "미세 패턴 회로를 위한 정밀 전해 도금 및 포토리소그래피 기술로, 우수한 전기적 성능이 요구되는 RF/마이크로파 및 반도체 애플리케이션에 최적화되어 있습니다.",
    "expertise_dbc_title": "DBC 기술",
    "expertise_dbc_desc": "뛰어난 열전도성을 위한 고온 동 접합 기술로, 견고한 방열 성능이 필요한 전력전자, EV 인버터 및 산업용 구동 장치에 이상적입니다.",
    "expertise_materials_title": "재료 과학",
    "expertise_materials_desc": "AlN, Al₂O₃, Si₃N₄ 및 ZrO₂ 세라믹에 대한 깊은 전문 지식을 바탕으로 특정 열, 기계 및 전기적 요구 사항에 맞게 재료 특성을 최적화합니다.",

    // Quality & Certifications Section
    "quality_title": "품질 관리 및 인증",
    "quality_description": "당사는 제조 공정 전반에 걸쳐 엄격한 품질 기준과 환경적 책임을 유지합니다.",
    "cert_iso": "ISO 14001:2015 인증",
    "cert_rohs": "RoHS 준수",
    "cert_testing": "사내 시험실 운영",
    "cert_spc": "통계적 공정 관리(SPC)",
    "quality_process": "당사의 품질 관리 시스템은 포괄적인 재료 시험, 공정 중 검사 및 최종 검증을 포함하여 모든 기판이 고객 사양 및 산업 표준을 충족하거나 초과하도록 보장합니다.",
    "quality_testing_title": "시험 및 분석 능력",
    "test_thermal": "열전도도 측정",
    "test_electrical": "전기적 절연 내압 시험",
    "test_mechanical": "기계적 강도 시험",
    "test_surface": "표면 거칠기 분석",
    "test_xray": "X-선 검사",
    "test_thermal_cycle": "열 충격 신뢰성 시험",

    // Company Timeline Section
    "timeline_title": "성장의 발자취",
    "timeline_description": "혁신과 성장의 주요 이정표",
    "timeline_2016": "2016년 - 창립",
    "timeline_2016_desc": "중국 선전에서 Jimei Materials 설립, 지역 전자 산업을 위한 세라믹 기판 제조에 주력.",
    "timeline_2018": "2018년 - 기술 다각화",
    "timeline_2018_desc": "DPC 생산 라인 가동 및 국제 시장 진출, 유럽 및 북미 고객사에 서비스 제공 시작.",
    "timeline_2020": "2020년 - 품질 인증 획득",
    "timeline_2020_desc": "ISO 14001:2015 인증 획득 및 증가하는 EV 산업 수요를 충족시키기 위한 제조 능력 확장.",
    "timeline_2022": "2022년 - R&D 센터 설립",
    "timeline_2022_desc": "차세대 열 관리 재료 및 공정에 중점을 둔 고급 R&D 연구실 설립.",
    "timeline_2024": "2024년 - 글로벌 확장",
    "timeline_2024_desc": "주요 지역의 기술 지원 팀 확장 및 고급 Si₃N₄ 기판 생산 능력 가동.",

    // Global Presence Section
    "global_title": "글로벌 시장에서의 위상",
    "global_description": "전 세계 다양한 산업의 고객사에 서비스를 제공합니다",
    "industry_ev": "전기 자동차",
    "industry_ev_desc": "전 세계 선도적인 EV 제조업체를 위한 파워 모듈 및 인버터.",
    "industry_telecom": "통신 장비",
    "industry_telecom_desc": "글로벌 통신 네트워크를 위한 5G 인프라 및 RF 전력 증폭기.",
    "industry_semiconductor": "반도체",
    "industry_semiconductor_desc": "반도체 제조업체를 위한 고급 패키징 기판.",

    // FAQ Section
    "faq_title": "자주 묻는 질문",
    "faq_description": "당사 세라믹 기판 제조에 관한 일반적인 질문에 대한 답변",
    "faq_q1": "어떤 산업에서 당사의 세라믹 기판(DBC/DPC)을 사용하나요?",
    "faq_a1": "당사는 전력전자, EV 인버터, 반도체 패키징, 레이저 및 광학 모듈, RF/5G 부품 및 신재생 에너지 시스템 분야에 서비스를 제공합니다. 당사의 DBC 및 DPC 세라믹 기판은 고열전도도, 전기적 절연 및 장기 신뢰성이 요구되는 분야에 채택되고 있습니다.",
    "faq_q2": "어떤 재료 및 기판 유형을 제조하나요?",
    "faq_a2": "당사는 금속화된 AlN 및 Al2O3 기판을 생산하며, 직접 접합 동(DBC), 직접 도금 동(DPC) 및 특수 세라믹 금속화 공정을 제공합니다. 재료 및 동박 두께는 각 애플리케이션의 열적, 전기적 및 조립 요구 사항에 맞게 최적화됩니다.",
    "faq_q3": "제조 능력과 일반적인 납기는 어떻게 되나요?",
    "faq_a3": "250명 이상의 숙련된 전문가와 고급 생산 라인을 통해 DBC 및 DPC 기판의 프로토타입부터 대량 생산까지 지원합니다. 일반적인 납기는 수량 및 복잡성에 따라 달라지며, 정확한 납기 확인을 위해 문의해 주십시오. 엔지니어링 샘플을 위한 신속한 프로토타이핑 서비스도 제공합니다.",
    "faq_q4": "맞춤형 설계, 프로토타이핑 및 엔지니어링 지원을 제공하나요?",
    "faq_a4": "예 — 당사는 제조를 고려한 설계 지도, 맞춤형 금속화 패턴, 미세 피치 DPC 솔루션 및 신속한 프로토타이핑을 제공합니다. 당사 엔지니어링 팀은 열 시뮬레이션, 레이아웃 최적화 및 품질 인증을 통해 고객의 제품 개발을 가속화하기 위해 협력합니다.",
    "faq_q5": "어떤 품질 관리 시스템 및 인증을 유지하고 있나요?",
    "faq_a5": "당사의 제조 공정은 ISO 등급 품질 프로세스, 환경 관리 및 엄격한 공정 중/최종 시험을 준수합니다. 당사는 신뢰성, RoHS/REACH 및 고객별 품질 인증 요구 사항을 지원하기 위한 문서 및 시험 보고서를 제공합니다.",
    "faq_q6": "샘플, 견적 또는 기술 상담을 어떻게 요청할 수 있나요?",
    "faq_a6": "견적 또는 샘플 요청은 문의 페이지를 이용해 주십시오. 기판 유형, 재료, 동박 두께, 수량 및 레이아웃 파일을 포함해 주시기 바랍니다. 기술 상담의 경우 '기술 팀에 문의'를 선택하시면 엔지니어가 요구 사항을 검토하고 다음 단계를 안내해 드립니다.",

    // CTA Section
    "about_cta_title": "당사와 함께하십시오",
    "about_cta_description": "세라믹 기판 요구 사항에 Jimei Materials를 신뢰하는 전 세계 선도 기업들과 함께하십시오.",
    "cta_expertise": "기술 전문성",
    "cta_expertise_desc": "8년 이상의 특화된 경험",
    "cta_quality": "품질 보증",
    "cta_quality_desc": "ISO 14001:2015 인증 공정",
    "cta_phone": "+86-147-4537-3293",

    // Footer (일관성 유지)
    "footer_description": "Jimei Materials는 2016년 설립 이래 전력전자 및 열 관리 응용 분야를 위한 세라믹 기판을 제조해 왔습니다. ISO 14001:2015 인증을 보유한 글로벌 제조 능력을 갖추고 있습니다.",
    "footer_products": "제품",
    "footer_company": "회사",
    "footer_contact": "연락처",
    "footer_address": "중국 광동성 선전시 바오안구 신차오 가도 하오산 린포켱 제1공업구",
    "footer_hours": "업무 시간: 월-금, 오전 8시 - 오후 6시 (GMT+8)",
    "footer_languages": "지원 언어: 영어, 중국어, 일본어, 한국어, 독일어",
    "footer_rights": "All rights reserved.",
    "footer_privacy": "개인정보처리방침",
    "footer_terms": "이용약관",
    "footer_sitemap": "사이트맵"
},

        de: {
    // Meta & SEO
    "about_page_title": "Über Jimei Materials | Führender Hersteller von Keramiksubstraten",
    "about_meta_description": "Jimei Materials: Führender Hersteller von Keramikmetallisierungssubstraten seit 2016. Spezialisiert auf DBC-, DPC- und Reinkeramik-Substrate für Leistungselektronik, E-Mobilität, Halbleiter und Wärmemanagement-Anwendungen. ISO 14001:2015 zertifiziert.",
    "about_meta_keywords": "Keramiksubstrat Hersteller, DBC Hersteller, DPC Hersteller, über Jimei Materials, Keramikmetallisierung Unternehmen, Wärmemanagement Lösungen, Substrate Leistungselektronik, Halbleiter-Verpackung Hersteller, AlN Substrate, Al2O3 Substrate",
    "about_og_title": "Über Jimei Materials | Keramiksubstrat Hersteller | DBC & DPC Lösungen",
    "about_og_description": "Führender Hersteller von Keramikmetallisierungssubstraten mit ISO 14001:2015 Zertifizierung. Spezialisiert auf DBC-, DPC- und Reinkeramik-Lösungen für Leistungselektronik und Wärmemanagement.",
    "about_twitter_title": "Über Jimei Materials | Keramiksubstrat Hersteller | DBC & DPC Lösungen",
    "about_twitter_description": "Führender Hersteller von Keramikmetallisierungssubstraten mit ISO 14001:2015 Zertifizierung. Spezialisiert auf DBC-, DPC- und Reinkeramik-Lösungen für Leistungselektronik und Wärmemanagement.",

    // Navigation
    "nav_home": "Startseite",
    "nav_products": "Produkte",
    "nav_dpc": "Direct Plated Copper (DPC)",
    "nav_dbc": "Direct Bonded Copper (DBC)",
    "nav_bare": "Reinkeramik-Substrate",
    "nav_all_products": "Alle Produkte",
    "nav_resources": "Wissenswertes",
    "nav_about": "Über uns",
    "nav_contact": "Kontakt",
    "nav_request_quote": "Angebot anfordern",
    "nav_blog": "Blog",

    // Breadcrumbs
    "breadcrumb_home": "Startseite",
    "breadcrumb_about": "Über uns",

    // Page Header
    "about_main_title": "Über Jimei Materials",
    "about_subtitle": "Führender Hersteller von Keramikmetallisierungssubstraten seit 2016",
    "about_image_alt": "Jimei Materials Fertigungsanlage",

    // Company Overview Section
    "overview_title": "Unsere Mission",
    "overview_mission": "Fortschrittliche Wärmemanagement-Technologie durch innovative Keramiksubstrat-Lösungen zu ermöglichen, die effizientere, zuverlässigere und nachhaltigere Leistungselektronik möglich machen.",
    "overview_description": "Gegründet im Jahr 2016 hat sich Jimei Materials als führender Hersteller von Hochleistungs-Keramikmetallisierungssubstraten etabliert. Wir sind spezialisiert auf Direct Bonded Copper (DBC) und Direct Plated Copper (DPC) Technologien und beliefern Industrien von Elektrofahrzeugen und erneuerbaren Energien bis hin zu Halbleiter-Verpackung und Telekommunikation.",
    
    // Buttons
    "btn_contact_us": "Kontaktieren Sie uns",
    "btn_view_products": "Produkte ansehen",
    "btn_partner": "Jetzt Partner werden",

    // Company Stats Section
    "stats_title": "In Zahlen",
    "stats_description": "Innovation in der Keramiksubstrat-Fertigung vorantreiben",
    "stat_years": "8+",
    "stat_years_label": "Jahre Erfahrung",
    "stat_employees": "250+",
    "stat_employees_label": "Qualifizierte Fachkräfte",
    "stat_countries": "30+",
    "stat_countries_label": "Weltweit beliefert",
    "stat_projects": "5000+",
    "stat_projects_label": "Abgeschlossene Projekte",

    // Technology Expertise Section
    "expertise_title": "Technologie-Expertise",
    "expertise_description": "Spezialisiertes Wissen in Keramikmetallisierung und Wärmemanagement",
    "expertise_dpc_title": "DPC-Technologie",
    "expertise_dpc_desc": "Präzisionsgalvanik und Fotolithografie für Feinstleiterbahnen, optimiert für HF/Mikrowellen- und Halbleiteranwendungen mit überlegener elektrischer Performance.",
    "expertise_dbc_title": "DBC-Technologie",
    "expertise_dbc_desc": "Hochtemperatur-Kupferverbondung für hervorragende Wärmeleitfähigkeit, ideal für Leistungselektronik, EV-Wechselrichter und Industrieantriebe mit Anforderungen an robuste Wärmeableitung.",
    "expertise_materials_title": "Materialwissenschaft",
    "expertise_materials_desc": "Tiefgreifende Expertise in AlN, Al₂O₃, Si₃N₄ und ZrO₂ Keramiken, Optimierung der Materialeigenschaften für spezifische thermische, mechanische und elektrische Anforderungen.",

    // Quality & Certifications Section
    "quality_title": "Qualität & Zertifizierungen",
    "quality_description": "Wir halten strenge Qualitätsstandards und Umweltverantwortung in allen unseren Fertigungsprozessen ein.",
    "cert_iso": "ISO 14001:2015 Zertifiziert",
    "cert_rohs": "RoHS Konform",
    "cert_testing": "Eigene Testlabore",
    "cert_spc": "Statistische Prozesskontrolle",
    "quality_process": "Unser Qualitätsmanagementsystem umfasst umfassende Materialtests, In-Prozess-Inspektionen und Endprüfungen, um sicherzustellen, dass jedes Substrat die Kundenspezifikationen und Industriestandards erfüllt oder übertrifft.",
    "quality_testing_title": "Testfähigkeiten",
    "test_thermal": "Wärmeleitfähigkeitsmessung",
    "test_electrical": "Elektrische Durchschlagprüfung",
    "test_mechanical": "Mechanische Festigkeitsprüfung",
    "test_surface": "Oberflächenrauheitsanalyse",
    "test_xray": "Röntgeninspektion",
    "test_thermal_cycle": "Temperaturwechsel-Zuverlässigkeit",

    // Company Timeline Section
    "timeline_title": "Unser Weg",
    "timeline_description": "Meilensteine unseres Wachstums und unserer Innovation",
    "timeline_2016": "2016 - Gründung",
    "timeline_2016_desc": "Jimei Materials wird in Shenzhen, China, gegründet und konzentriert sich auf die Herstellung von Keramiksubstraten für die lokale Elektronikindustrie.",
    "timeline_2018": "2018 - Technologieerweiterung",
    "timeline_2018_desc": "Start der DPC-Produktionslinie und Expansion in internationale Märkte, um Kunden in Europa und Nordamerika zu beliefern.",
    "timeline_2020": "2020 - Qualitätszertifizierung",
    "timeline_2020_desc": "Erreichung der ISO 14001:2015 Zertifizierung und Erweiterung der Fertigungskapazitäten, um der wachsenden Nachfrage der E-Mobilitätsindustrie gerecht zu werden.",
    "timeline_2022": "2022 - F&E-Zentrum",
    "timeline_2022_desc": "Einrichtung eines modernen F&E-Labors mit Fokus auf Materialien und Prozesse der nächsten Generation für das Wärmemanagement.",
    "timeline_2024": "2024 - Globale Expansion",
    "timeline_2024_desc": "Ausbau der technischen Support-Teams in Schlüsselregionen und Einführung fortschrittlicher Si₃N₄-Substrat-Fertigungskapazitäten.",

    // Global Presence Section
    "global_title": "Globale Präsenz",
    "global_description": "Wir beliefern Kunden in verschiedenen Industrien weltweit",
    "industry_ev": "Elektrofahrzeuge",
    "industry_ev_desc": "Leistungsmodule und Wechselrichter für führende EV-Hersteller weltweit.",
    "industry_telecom": "Telekommunikation",
    "industry_telecom_desc": "5G-Infrastruktur und HF-Leistungsverstärker für globale Telekommunikationsnetze.",
    "industry_semiconductor": "Halbleiter",
    "industry_semiconductor_desc": "Fortschrittliche Verpackungssubstrate für Halbleiterhersteller.",

    // FAQ Section
    "faq_title": "Häufig gestellte Fragen",
    "faq_description": "Antworten auf häufig gestellte Fragen zu unserer Keramiksubstrat-Fertigung",
    "faq_q1": "Welche Industrien nutzen Ihre Keramiksubstrate (DBC / DPC)?",
    "faq_a1": "Wir beliefern die Leistungselektronik, EV-Wechselrichter, Halbleiter-Verpackung, Laser- & Photonik-Module, HF-/5G-Komponenten und Systeme erneuerbarer Energie. Unsere DBC- und DPC-Keramiksubstrate werden dort eingesetzt, wo hohe Wärmeleitfähigkeit, elektrische Isolierung und langfristige Zuverlässigkeit erforderlich sind.",
    "faq_q2": "Welche Materialien und Substrattypen stellen Sie her?",
    "faq_a2": "Wir produzieren metallisierte AlN- und Al2O3-Substrate und bieten Direct Bonded Copper (DBC), Direct Plated Copper (DPC) und spezielle Keramikmetallisierungen an. Materialien und Kupferdicken werden optimiert, um den thermischen, elektrischen und Montage-Anforderungen jeder Anwendung gerecht zu werden.",
    "faq_q3": "Wie hoch ist Ihre Fertigungskapazität und was ist die typische Lieferzeit?",
    "faq_a3": "Mit über 250 qualifizierten Fachkräften und modernen Produktionslinien unterstützen wir Prototypen- bis Volumenproduktion für DBC- und DPC-Substrate. Typische Lieferzeiten hängen von Menge und Komplexität ab — kontaktieren Sie uns für eine ETA; beschleunigtes Prototyping ist für Engineering-Muster verfügbar.",
    "faq_q4": "Bieten Sie kundenspezifische Designs, Prototyping und technische Unterstützung an?",
    "faq_a4": "Ja — wir bieten Design-for-Manufacture-Beratung, kundenspezifische Metallisierungsmuster, Feinstleiterbahn-DPC-Lösungen und schnelles Prototyping. Unser Ingenieurteam arbeitet mit Kunden an thermischen Simulationen, Layout-Optimierung und Qualifizierung, um die Produktentwicklung zu beschleunigen.",
    "faq_q5": "Welche Qualitätssysteme und Zertifizierungen halten Sie ein?",
    "faq_a5": "Unsere Fertigung folgt ISO-konformen Qualitätsprozessen, Umweltmanagement und rigorosen In-Line- und Endtests. Wir stellen Dokumentation und Testberichte zur Unterstützung von Zuverlässigkeit, RoHS/REACH und kundenspezifischen Qualifizierungsanforderungen bereit.",
    "faq_q6": "Wie kann ich Muster, Angebote oder eine technische Beratung anfordern?",
    "faq_a6": "Nutzen Sie unsere Kontaktseite, um ein Angebot oder Muster anzufordern — geben Sie Substrattyp, Material, Kupferdicke, Mengen und eventuelle Layout-Dateien an. Wählen Sie für technische Beratungen 'Unser technisches Team kontaktieren' und wir weisen einen Ingenieur zu, der die Anforderungen prüft und nächste Schritte aufzeigt.",

    // CTA Section
    "about_cta_title": "Werden Sie unser Partner",
    "about_cta_description": "Schließen Sie sich weltweit führenden Unternehmen an, die Jimei Materials für ihre Keramiksubstrat-Anforderungen vertrauen.",
    "cta_expertise": "Technische Expertise",
    "cta_expertise_desc": "8+ Jahre spezialisierte Erfahrung",
    "cta_quality": "Qualitätssicherung",
    "cta_quality_desc": "ISO 14001:2015 zertifizierte Prozesse",
    "cta_phone": "+86-147-4537-3293",

    // Footer
    "footer_description": "Seit 2016 führender Hersteller von Keramikmetallisierungssubstraten für Leistungselektronik und Wärmemanagement-Anwendungen. ISO 14001:2015 zertifiziert mit globalen Fertigungskapazitäten.",
    "footer_products": "Produkte",
    "footer_company": "Unternehmen",
    "footer_contact": "Kontakt",
    "footer_address": "First Industrial Zone, Haosan Linpokeng, Xinqiao Street, Bao'an District, Shenzhen, China",
    "footer_hours": "Mo-Fr: 8:00 - 18:00 Uhr (GMT+8)",
    "footer_languages": "Support: Englisch, Chinesisch, Japanisch, Koreanisch, Deutsch",
    "footer_rights": "Alle Rechte vorbehalten.",
    "footer_privacy": "Datenschutz",
    "footer_terms": "Nutzungsbedingungen",
    "footer_sitemap": "Sitemap"
}
    };

    // Default language
    let currentLang = 'en';

    // Function to change language
    function changeLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = translations[lang][key];
                } else if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else if (element.hasAttribute('title')) {
                    element.setAttribute('title', translations[lang][key]);
                } else if (element.hasAttribute('alt')) {
                    element.setAttribute('alt', translations[lang][key]);
                } else if (element.hasAttribute('content')) {
                    element.setAttribute('content', translations[lang][key]);
                } else {
                    element.innerHTML = translations[lang][key];
                }
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${lang}`);
            }
        });
        
        // Update image alt text if it has data-i18n-attr
        document.querySelectorAll('[data-i18n-attr]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const attr = element.getAttribute('data-i18n-attr');
            if (key && translations[lang] && translations[lang][key] && attr) {
                element.setAttribute(attr, translations[lang][key]);
            }
        });
        
        // Update language dropdown
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
        
        // Update current language display
        const langNames = { en: 'English', zh: '中文', ja: '日本語', ko: '한국어', de: 'Deutsch' };
        const currentLangElement = document.getElementById('currentLanguage');
        if (currentLangElement) {
            currentLangElement.textContent = langNames[lang];
        }
        
        // Save preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
        
        // Close dropdown if it exists
        const languageDropdown = document.getElementById('languageDropdown');
        if (languageDropdown) {
            languageDropdown.classList.remove('show');
        }
    }

    // Initialize language on page load
    document.addEventListener('DOMContentLoaded', function() {
        // Check for saved language preference
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && translations[savedLang]) {
            changeLanguage(savedLang);
        } else {
            // Default to browser language or English
            const browserLang = navigator.language.split('-')[0];
            if (translations[browserLang]) {
                changeLanguage(browserLang);
            } else {
                changeLanguage('en');
            }
        }
        
        // Language dropdown toggle
        const languageBtn = document.getElementById('languageBtn');
        if (languageBtn) {
            languageBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const dropdown = document.getElementById('languageDropdown');
                if (dropdown) {
                    dropdown.classList.toggle('show');
                }
            });
        }
        
        // Language selection
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            const dropdown = document.getElementById('languageDropdown');
            if (dropdown) {
                dropdown.classList.remove('show');
            }
        });
        
        // Stop propagation for dropdown clicks
        const languageDropdown = document.getElementById('languageDropdown');
        if (languageDropdown) {
            languageDropdown.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
        
        // Update current year in footer
        const currentYearElement = document.getElementById('currentYear');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }
    });
})();