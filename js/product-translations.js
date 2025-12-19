// translations.js - Internationalization for Jimei Materials Website
// Author: Jimei Materials Development Team
// Version: 1.0.0
// Last Updated: 2024

(function() {
    'use strict';

    // Translations object
    const translations = {
        en: {
            // Meta & SEO
            "products_page_title": "Ceramic Metallization Substrates Products | DBC & DPC Solutions | Jimei Materials",
            "products_meta_description": "Browse our complete range of ceramic metallization substrates including DBC, DPC, and bare ceramic substrates. High-performance solutions for thermal management in power electronics, EV, 5G, and semiconductor applications.",
            "products_meta_keywords": "ceramic substrate products, DBC substrate catalog, DPC ceramic products, bare ceramic substrates, aluminum nitride substrates, alumina ceramic products, thermal management substrates, power electronics substrates, IGBT substrates, RF amplifier substrates, semiconductor packaging materials",
            "products_og_title": "Ceramic Substrate Products Catalog | DBC & DPC Solutions | Jimei Materials",
            "products_og_description": "Complete range of high-performance ceramic metallization substrates including DBC, DPC, and bare ceramic substrates for power electronics and thermal management applications.",
            "products_twitter_title": "Ceramic Substrate Products Catalog | DBC & DPC Solutions | Jimei Materials",
            "products_twitter_description": "Complete range of high-performance ceramic metallization substrates including DBC, DPC, and bare ceramic substrates for power electronics and thermal management applications.",

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
            "breadcrumb_products": "Products",

            // Page Header
            "products_main_title": "Ceramic Substrate Products",
            "products_subtitle": "High-performance solutions for thermal management and power electronics applications",

            // Product Categories Section
            "categories_title": "Product Categories",
            "categories_description": "Browse our comprehensive range of ceramic substrate solutions",
            "category_dpc_title": "Direct Plated<br>Copper (DPC)",
            "category_dpc_desc": "Precision ceramic substrates for RF/microwave applications, semiconductor packaging, and fine-pitch circuitry with superior electrical performance.",
            "category_dbc_title": "Direct Bonded<br>Copper (DBC)",
            "category_dbc_desc": "High thermal conductivity substrates for IGBT modules, EV power systems, and industrial drives requiring superior heat dissipation.",
            "category_bare_title": "Bare Ceramic<br>Substrates",
            "category_bare_desc": "High-quality alumina and aluminum nitride substrates for sensors, insulators, and thermal management components.",
            
            // Specification Badges
            "spec_tolerance": "±10μm Tolerance",
            "spec_line_width": "20μm Line Width",
            "spec_surface_finish": "ENIG/Au Finish",
            "spec_thermal": "170-200 W/mK",
            "spec_copper_thick": "0.2-0.3mm Cu",
            "spec_high_power": "High Power",
            "spec_materials": "AlN/Al2O3/Si3N4",
            "spec_custom_sizes": "Custom Sizes",
            "spec_polished": "Polished/Lapped",

            // Buttons
            "btn_view_category": "View Products",
            "btn_view_resources": "View Resources",
            "btn_request_samples": "Request Samples",
            "btn_contact_engineering": "Contact Engineering",

            // Technology Comparison Section
            "comparison_title": "Technology Comparison",
            "comparison_description": "Choose the right ceramic substrate technology for your application",
            "comparison_feature": "Feature",
            "comparison_dpc": "DPC (Direct Plated Copper)",
            "comparison_dbc": "DBC (Direct Bonded Copper)",
            "comparison_bare": "Bare Ceramic",
            "feature_process": "Process Technology",
            "dpc_process": "Electroplating & Photolithography",
            "dbc_process": "High-Temperature Bonding (1065°C)",
            "bare_process": "Ceramic Fabrication",
            "feature_thermal": "Thermal Conductivity",
            "feature_copper": "Copper Thickness",
            "feature_line_width": "Min. Line Width",
            "feature_none": "N/A",
            "feature_applications": "Primary Applications",
            "dpc_apps": "RF/Microwave, Fine-Pitch, Sensors",
            "dbc_apps": "Power Modules, EV, High Current",
            "bare_apps": "Insulators, Heat Spreaders, Bases",
            "feature_lead_time": "Typical Lead Time",

            // Featured Applications Section
            "applications_title": "Featured Applications",
            "applications_description": "Our ceramic substrates power cutting-edge technologies across industries",
            "app_laser_title": "Laser Diode Heat Sinks",
            "app_laser_desc": "High thermal conductivity substrates for semiconductor lasers used in LiDAR, optical communications, and industrial processing.",
            "app_tec_title": "Thermoelectric Cooler (TEC) Modules",
            "app_tec_desc": "Precision ceramic substrates for Peltier cooling modules used in optical communications, medical devices, and aerospace.",
            "app_ide_title": "Interdigital Electrodes (IDEs)",
            "app_ide_desc": "Precision electrode patterns for capacitive sensors, gas detectors, and biomedical applications requiring fine-pitch circuitry.",
            "app_igbt_title": "IGBT Power Modules",
            "app_igbt_desc": "High-power DBC substrates for industrial motor drives, EV inverters, and renewable energy systems requiring robust thermal management.",
            "app_rf_title": "RF Power Amplifiers",
            "app_rf_desc": "Low-loss DPC substrates for 5G base stations, microwave communications, and radar systems requiring high-frequency performance.",
            "app_led_title": "High-Power LED Packaging",
            "app_led_desc": "Thermal management substrates for automotive headlights, industrial lighting, and UV LED applications requiring efficient heat dissipation.",

            // Material Specifications Section
            "materials_title": "Ceramic Material Properties",
            "materials_description": "Choose the optimal ceramic material for your specific requirements",
            "material_alumina_title": "Alumina (Al₂O₃)",
            "material_alumina_spec1": "Thermal Conductivity: 24-28 W/mK",
            "material_alumina_spec2": "Dielectric Constant: 9.8 @ 1MHz",
            "material_alumina_spec3": "Breakdown Voltage: 15-20 kV/mm",
            "material_alumina_spec4": "CTE: 7.2 ppm/°C (25-300°C)",
            "material_alumina_spec5": "Applications: Cost-effective solutions, general-purpose substrates",
            "material_ain_title": "Aluminum Nitride (AlN)",
            "material_ain_spec1": "Thermal Conductivity: 170-200 W/mK",
            "material_ain_spec2": "Dielectric Constant: 8.9 @ 1MHz",
            "material_ain_spec3": "Breakdown Voltage: 15-20 kV/mm",
            "material_ain_spec4": "CTE: 4.5 ppm/°C (25-300°C)",
            "material_ain_spec5": "Applications: High-power, high-frequency, laser diodes",
            "material_si3n4_title": "Silicon Nitride (Si₃N₄)",
            "material_si3n4_spec1": "Thermal Conductivity: 60-90 W/mK",
            "material_si3n4_spec2": "Dielectric Constant: 8.0 @ 1MHz",
            "material_si3n4_spec3": "Breakdown Voltage: 15-25 kV/mm",
            "material_si3n4_spec4": "CTE: 3.2 ppm/°C (25-300°C)",
            "material_si3n4_spec5": "Applications: High mechanical strength, automotive",
            "material_zro2_title": "Zirconia (ZrO₂)",
            "material_zro2_spec1": "Thermal Conductivity: 2-3 W/mK",
            "material_zro2_spec2": "Dielectric Constant: 25-30 @ 1MHz",
            "material_zro2_spec3": "Breakdown Voltage: 8-12 kV/mm",
            "material_zro2_spec4": "CTE: 10.5 ppm/°C (25-300°C)",
            "material_zro2_spec5": "Applications: Thermal insulation, sensors",

            // Resources Section
            "resources_title": "Technical Resources",
            "resources_description": "Download datasheets, application notes, and design guidelines",
            "resource_datasheets_title": "Product Datasheets",
            "resource_datasheets_desc": "Detailed specifications and technical data for all our ceramic substrate products.",
            "resource_design_title": "Design Guidelines",
            "resource_design_desc": "Best practices for designing with ceramic substrates and optimizing thermal performance.",
            "resource_samples_title": "Request Samples",
            "resource_samples_desc": "Get free samples for evaluation and testing of our ceramic substrate products.",

            // CTA Section
            "products_cta_title": "Need Custom Ceramic Substrate Solutions?",
            "products_cta_description": "Our engineering team specializes in developing custom ceramic substrate solutions tailored to your specific requirements.",
            "cta_prototyping": "Rapid Prototyping",
            "cta_prototyping_desc": "Custom designs in 2-3 weeks",
            "cta_technical_support": "Technical Support",
            "cta_technical_support_desc": "Engineering consultation available",
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
            // 元标签 - 微调以更匹配产品目录页的搜索意图
            "products_page_title": "陶瓷基板产品目录 | DBC/DPC陶瓷基板方案 | 吉美材料",
            "products_meta_description": "探索吉美材料完整的陶瓷基板产品线：直接覆铜(DBC)、直接镀铜(DPC)及裸陶瓷基板。专为功率电子、电动汽车、5G及半导体应用设计的高性能热管理解决方案。",
            "products_meta_keywords": "DBC陶瓷基板, DPC陶瓷基板, 陶瓷基板产品, 氮化铝基板, 氧化铝基板, 功率电子基板, 热管理基板, IGBT基板, 射频基板, 半导体封装基板, 陶瓷散热片",
            "products_og_title": "陶瓷基板产品总览 | DBC/DPC解决方案 | 吉美材料",
            "products_og_description": "吉美材料提供全系列高性能陶瓷基板，包括DBC、DPC及裸陶瓷基板，满足功率电子与先进热管理需求。",
            "products_twitter_title": "陶瓷基板产品总览 | DBC/DPC解决方案 | 吉美材料",
            "products_twitter_description": "吉美材料提供全系列高性能陶瓷基板，包括DBC、DPC及裸陶瓷基板，满足功率电子与先进热管理需求。",
            
            // 面包屑导航
            "breadcrumb_home": "首页",
            "breadcrumb_products": "产品中心",
            
            // 页面标题区 - 标题更具概括性，副标题点明价值
            "products_main_title": "陶瓷基板产品系列",
            "products_subtitle": "为严苛的热管理与电气性能挑战提供可靠解决方案",
            
            // 产品分类区 - 描述更突出技术优势
            "categories_title": "产品系列",
            "categories_description": "根据您的应用需求，选择最合适的陶瓷基板技术",
            "category_dpc_title": "直接镀铜<br>陶瓷基板 (DPC)",
            "category_dpc_desc": "高精度陶瓷基板，采用电镀与光刻工艺，专为射频/微波、半导体先进封装及细线路（低至20μm）应用设计，提供优异的电性能与信号完整性。",
            "category_dbc_title": "直接覆铜<br>陶瓷基板 (DBC)",
            "category_dbc_desc": "高导热陶瓷基板，通过高温共晶键合实现，专为IGBT模块、电动汽车电驱及大功率工业变频器设计，具备卓越的散热能力与载流能力。",
            "category_bare_title": "裸陶瓷<br>基板",
            "category_bare_desc": "提供氧化铝、氮化铝、氮化硅等多种高性能陶瓷材料，适用于传感器衬底、绝缘部件、热扩散板及定制化金属化的基础材料。",
            
            // 规格标签 - 表述更完整、专业
            "spec_tolerance": "加工公差: ±10μm",
            "spec_line_width": "最小线宽: 20μm",
            "spec_surface_finish": "表面处理: ENIG/镀金",
            "spec_thermal": "导热系数: 170-200 W/mK",
            "spec_copper_thick": "铜层厚度: 0.2-0.3mm",
            "spec_high_power": "高功率等级",
            "spec_materials": "材料: AlN/Al2O3/Si3N4",
            "spec_custom_sizes": "支持尺寸定制",
            "spec_polished": "表面: 抛光/研磨",
            
            // 按钮
            "btn_view_category": "查看详情",
            "btn_view_resources": "查看资源",
            "btn_request_samples": "申请样品",
            "btn_contact_engineering": "咨询工程师",
            
            // 技术对比区 - 术语更精准，对比更清晰
            "comparison_title": "核心技术对比",
            "comparison_description": "根据关键参数选择最适配的基板技术",
            "comparison_feature": "技术参数",
            "comparison_dpc": "DPC技术",
            "comparison_dbc": "DBC技术",
            "comparison_bare": "裸陶瓷基片",
            "feature_process": "核心工艺",
            "dpc_process": "薄膜沉积与图形电镀",
            "dbc_process": "高温共晶键合 (1065°C+)",
            "bare_process": "陶瓷烧结与加工",
            "feature_thermal": "导热系数 (W/mK)",
            "feature_copper": "铜层厚度",
            "feature_line_width": "最小线宽/间距",
            "feature_none": "/",
            "feature_applications": "典型应用领域",
            "dpc_apps": "射频器件、传感器、先进封装",
            "dbc_apps": "功率模块、电驱系统、工业电源",
            "bare_apps": "绝缘衬底、散热基板、金属化前体",
            "feature_lead_time": "标准交货期",
            
            // 特色应用区 - 描述更具技术深度，突出基板角色
            "applications_title": "典型应用案例",
            "applications_description": "我们的陶瓷基板赋能各领域前沿技术创新",
            "app_laser_title": "激光器热沉",
            "app_laser_desc": "采用高导热氮化铝或碳化硅基板，用于激光雷达、光纤通信及工业加工领域的边发射或面发射激光二极管，有效管理结温，提升输出功率与寿命。",
            "app_tec_title": "热电制冷器基板",
            "app_tec_desc": "精密陶瓷基板作为帕尔贴模块的关键部件，用于光模块温控、医疗仪器冷却及航空航天设备，要求高平整度、优异绝缘性及可靠的金属化结合力。",
            "app_ide_title": "叉指电极基板",
            "app_ide_desc": "在陶瓷、PI或PET基材上制作精密叉指电极图形，用于气体传感、湿度检测、生物阻抗分析等，要求高尺寸精度、低寄生参数及良好的生物相容性。",
            "app_igbt_title": "IGBT模块衬底",
            "app_igbt_desc": "大尺寸、高可靠DBC基板，作为IGBT/二极管芯片的承载体与散热通道，应用于新能源车电驱、光伏逆变器及变频器，耐受高电压、大电流及温度冲击。",
            "app_rf_title": "射频功率器件",
            "app_rf_desc": "低损耗DPC基板，用于5G AAU、微波通信及雷达系统的GaN/SiC射频功放、LNA及开关模块，满足高频、高效率及高功率密度要求。",
            "app_led_title": "大功率LED衬底",
            "app_led_desc": "陶瓷基板为CSP、COB及倒装LED芯片提供高反射率表面、匹配的热膨胀系数及高效散热路径，用于车灯、特种照明及紫外固化。",
            
            // 材料规格区 - 移除HTML标签，采用更清晰的技术列表格式
            "materials_title": "陶瓷材料性能参数",
            "materials_description": "精选高性能陶瓷材料，满足多样化设计需求",
            "material_alumina_title": "氧化铝 (Al₂O₃， 96%-99.6%)",
            "material_alumina_spec1": "导热系数: 24-28 W/mK",
            "material_alumina_spec2": "介电常数 (@1MHz): 9.8",
            "material_alumina_spec3": "介电强度: 15-20 kV/mm",
            "material_alumina_spec4": "热膨胀系数 (25-300°C): 7.2 ppm/°C",
            "material_alumina_spec5": "特点与应用: 高性价比，机械强度好，通用型绝缘与电路衬底",
            "material_ain_title": "氮化铝 (AlN)",
            "material_ain_spec1": "导热系数: 170-200 W/mK",
            "material_ain_spec2": "介电常数 (@1MHz): 8.9",
            "material_ain_spec3": "介电强度: 15-20 kV/mm",
            "material_ain_spec4": "热膨胀系数 (25-300°C): 4.5 ppm/°C (近Si)",
            "material_ain_spec5": "特点与应用: 高热导，高频低损耗，适用于高功率密度、微波及激光器件",
            "material_si3n4_title": "氮化硅 (Si₃N₄)",
            "material_si3n4_spec1": "导热系数: 60-90 W/mK",
            "material_si3n4_spec2": "介电常数 (@1MHz): 8.0",
            "material_si3n4_spec3": "介电强度: 15-25 kV/mm",
            "material_si3n4_spec4": "热膨胀系数 (25-300°C): 3.2 ppm/°C",
            "material_si3n4_spec5": "特点与应用: 超高机械强度与韧性，抗热震性极佳，适用于汽车电子及恶劣环境",
            "material_zro2_title": "氧化锆 (ZrO₂， 部分稳定)",
            "material_zro2_spec1": "导热系数: 2-3 W/mK",
            "material_zro2_spec2": "介电常数 (@1MHz): 25-30",
            "material_zro2_spec3": "介电强度: 8-12 kV/mm",
            "material_zro2_spec4": "热膨胀系数 (25-300°C): 10.5 ppm/°C (近金属)",
            "material_zro2_spec5": "特点与应用: 低导热（绝热），高介电常数，用于高温传感器、燃料电池及需要热隔离的场合",
            
            // 技术资源区
            "resources_title": "技术支持与资源",
            "resources_description": "获取产品数据、设计工具与评估支持",
            "resource_datasheets_title": "产品数据手册",
            "resource_datasheets_desc": "下载完整的产品规格书、性能曲线及可靠性测试报告。",
            "resource_design_title": "设计指南与工具",
            "resource_design_desc": "获取布局建议、热设计白皮书及材料选择指南，优化您的系统设计。",
            "resource_samples_title": "样品申请与评估",
            "resource_samples_desc": "符合条件的项目可申请免费样品，进行性能验证与工艺测试。",
            
            // CTA区 - 表述更具合作导向
            "products_cta_title": "寻求定制化陶瓷基板解决方案？",
            "products_cta_description": "我们的工程团队可为您提供从材料选型、仿真优化到快速打样的一站式定制服务。",
            "cta_prototyping": "快速打样服务",
            "cta_prototyping_desc": "定制设计验证周期2-3周",
            "cta_technical_support": "全程技术支持",
            "cta_technical_support_desc": "资深工程师提供一对一咨询",
            "cta_phone": "电话: +86-147-4537-3293",
            
            // 页脚 (与首页风格统一)
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
            "products_page_title": "セラミックメタライゼーション基板製品 | DBC・DPCソリューション | Jimei Materials",
            "products_meta_description": "DBC、DPC、未金属化セラミック基板を含む、当社のセラミックメタライゼーション基板の全ラインナップをご覧ください。パワーエレクトロニクス、EV、5G、半導体アプリケーションにおける熱管理のための高性能ソリューションです。",
            "products_meta_keywords": "セラミック基板 製品, DBC基板 カタログ, DPCセラミック 製品, 未金属化セラミック基板, 窒化アルミニウム基板, アルミナセラミック 製品, 熱管理基板, パワーエレクトロニクス基板, IGBT基板, RFアンプ基板, 半導体パッケージング材料",
            "products_og_title": "セラミック基板製品カタログ | DBC・DPCソリューション | Jimei Materials",
            "products_og_description": "パワーエレクトロニクスおよび熱管理アプリケーション向けの、DBC、DPC、未金属化セラミック基板を含む高性能セラミックメタライゼーション基板の全ラインナップ。",
            "products_twitter_title": "セラミック基板製品カタログ | DBC・DPCソリューション | Jimei Materials",
            "products_twitter_description": "パワーエレクトロニクスおよび熱管理アプリケーション向けの、DBC、DPC、未金属化セラミック基板を含む高性能セラミックメタライゼーション基板の全ラインナップ。",

            // Navigation (ホームページと統一のため、変更なしの箇所も記載)
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
            "breadcrumb_products": "製品情報",

            // Page Header
            "products_main_title": "セラミック基板製品",
            "products_subtitle": "熱管理およびパワーエレクトロニクスアプリケーションのための高性能ソリューション",

            // Product Categories Section
            "categories_title": "製品カテゴリ",
            "categories_description": "当社の包括的なセラミック基板ソリューションをご覧ください",
            "category_dpc_title": "直接鍍金銅<br>（DPC）基板",
            "category_dpc_desc": "RF/マイクロ波アプリケーション、半導体パッケージング、微細ピッチ配線向けの高精度セラミック基板。優れた高周波特性を発揮します。",
            "category_dbc_title": "直接接合銅<br>（DBC）基板",
            "category_dbc_desc": "IGBTモジュール、EVパワーシステム、産業用ドライバ向けの高熱伝導性基板。優れた放熱性能が要求される用途に最適です。",
            "category_bare_title": "未金属化<br>セラミック基板",
            "category_bare_desc": "センサー、絶縁体、熱管理コンポーネントなどに使用される、高品質なアルミナ（Al2O3）および窒化アルミニウム（AlN）基板です。",
            
            // Specification Badges
            "spec_tolerance": "公差 ±10μm",
            "spec_line_width": "線幅 20μm",
            "spec_surface_finish": "ENIG/金メッキ仕上げ",
            "spec_thermal": "熱伝導率 170-200 W/mK",
            "spec_copper_thick": "銅厚 0.2-0.3mm",
            "spec_high_power": "高電力対応",
            "spec_materials": "材料 AlN/Al2O3/Si3N4",
            "spec_custom_sizes": "カスタムサイズ対応",
            "spec_polished": "研磨/ラッピング仕上げ",

            // Buttons
            "btn_view_category": "製品を見る",
            "btn_view_resources": "資料を見る",
            "btn_request_samples": "サンプルを請求",
            "btn_contact_engineering": "エンジニアに相談",

            // Technology Comparison Section
            "comparison_title": "技術比較",
            "comparison_description": "お客様のアプリケーションに最適なセラミック基板技術をお選びください",
            "comparison_feature": "特徴",
            "comparison_dpc": "DPC (直接鍍金銅)",
            "comparison_dbc": "DBC (直接接合銅)",
            "comparison_bare": "未金属化セラミック",
            "feature_process": "プロセス技術",
            "dpc_process": "電気めっき・フォトリソグラフィ",
            "dbc_process": "高温接合 (1065°C)",
            "bare_process": "セラミック成形加工",
            "feature_thermal": "熱伝導率",
            "feature_copper": "銅厚",
            "feature_line_width": "最小線幅",
            "feature_none": "該当なし",
            "feature_applications": "主なアプリケーション",
            "dpc_apps": "RF/マイクロ波、微細配線、センサー",
            "dbc_apps": "パワーモジュール、EV、大電流用途",
            "bare_apps": "絶縁体、放熱板、ベース基板",
            "feature_lead_time": "標準納期",

            // Featured Applications Section
            "applications_title": "主要アプリケーション例",
            "applications_description": "当社のセラミック基板は、様々な産業における先端技術を支えています",
            "app_laser_title": "レーザーダイオード放熱基板",
            "app_laser_desc": "LiDAR、光通信、産業用加工に使用される半導体レーザー向けの高熱伝導性基板です。",
            "app_tec_title": "熱電冷却モジュール（TEC）",
            "app_tec_desc": "光通信、医療機器、航空宇宙用途のペルチェ冷却モジュール向け高精度セラミック基板です。",
            "app_ide_title": "くし形電極（IDE）基板",
            "app_ide_desc": "容量式センサー、ガス検知器、バイオメディカルアプリケーション向けの微細ピッチ電極パターンを形成した基板です。",
            "app_igbt_title": "IGBTパワーモジュール",
            "app_igbt_desc": "産業用モータドライバ、EVインバータ、再生可能エネルギーシステム向けの高出力DBC基板。堅牢な熱管理が求められる用途に適しています。",
            "app_rf_title": "RFパワーアンプ",
            "app_rf_desc": "5G基地局、マイクロ波通信、レーダーシステム向けの低損失DPC基板。高周波特性が要求される用途に最適です。",
            "app_led_title": "高出力LEDパッケージング",
            "app_led_desc": "自動車ヘッドライト、産業用照明、UV LEDアプリケーション向けの熱管理基板。効率的な放熱が求められる用途に適しています。",

            // Material Specifications Section
            "materials_title": "セラミック材料特性",
            "materials_description": "お客様の特定の要件に最適なセラミック材料をお選びください",
            "material_alumina_title": "アルミナ (Al₂O₃)",
            "material_alumina_spec1": "熱伝導率: 24-28 W/mK",
            "material_alumina_spec2": "比誘電率: 9.8 @ 1MHz",
            "material_alumina_spec3": "絶縁破壊電圧: 15-20 kV/mm",
            "material_alumina_spec4": "熱膨張係数 (CTE): 7.2 ppm/°C (25-300°C)",
            "material_alumina_spec5": "主な用途: コスト効率に優れた汎用基板",
            "material_ain_title": "窒化アルミニウム (AlN)",
            "material_ain_spec1": "熱伝導率: 170-200 W/mK",
            "material_ain_spec2": "比誘電率: 8.9 @ 1MHz",
            "material_ain_spec3": "絶縁破壊電圧: 15-20 kV/mm",
            "material_ain_spec4": "熱膨張係数 (CTE): 4.5 ppm/°C (25-300°C)",
            "material_ain_spec5": "主な用途: 高出力・高周波・レーザーダイオード",
            "material_si3n4_title": "窒化ケイ素 (Si₃N₄)",
            "material_si3n4_spec1": "熱伝導率: 60-90 W/mK",
            "material_si3n4_spec2": "比誘電率: 8.0 @ 1MHz",
            "material_si3n4_spec3": "絶縁破壊電圧: 15-25 kV/mm",
            "material_si3n4_spec4": "熱膨張係数 (CTE): 3.2 ppm/°C (25-300°C)",
            "material_si3n4_spec5": "主な用途: 高機械強度が要求される自動車用途など",
            "material_zro2_title": "ジルコニア (ZrO₂)",
            "material_zro2_spec1": "熱伝導率: 2-3 W/mK",
            "material_zro2_spec2": "比誘電率: 25-30 @ 1MHz",
            "material_zro2_spec3": "絶縁破壊電圧: 8-12 kV/mm",
            "material_zro2_spec4": "熱膨張係数 (CTE): 10.5 ppm/°C (25-300°C)",
            "material_zro2_spec5": "主な用途: 断熱、センサー",

            // Resources Section
            "resources_title": "技術資料",
            "resources_description": "データシート、アプリケーションノート、設計ガイドラインをダウンロードできます",
            "resource_datasheets_title": "製品データシート",
            "resource_datasheets_desc": "全てのセラミック基板製品の詳細な仕様と技術データを掲載しています。",
            "resource_design_title": "設計ガイドライン",
            "resource_design_desc": "セラミック基板の設計におけるベストプラクティスと熱性能の最適化に関する資料です。",
            "resource_samples_title": "サンプル請求",
            "resource_samples_desc": "当社のセラミック基板製品の評価・テスト用に無料サンプルをご提供します。",

            // CTA Section
            "products_cta_title": "カスタムセラミック基板ソリューションをお探しですか？",
            "products_cta_description": "当社のエンジニアリングチームは、お客様の特定の要件に合わせたカスタムセラミック基板ソリューションの開発を専門としています。",
            "cta_prototyping": "迅速な試作",
            "cta_prototyping_desc": "カスタム設計を2-3週間でご提供",
            "cta_technical_support": "技術サポート",
            "cta_technical_support_desc": "エンジニアによる技術相談が可能です",
            "cta_phone": "+86-147-4537-3293",

            // Footer (ホームページと統一のため、変更なしの箇所も記載)
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
            "products_page_title": "세라믹 금속화 기판 제품 | DBC & DPC 솔루션 | Jimei Materials",
            "products_meta_description": "DBC, DPC 및 비금속화 세라믹 기판을 포함한 당사의 포괄적인 세라믹 기판 제품군을 확인하십시오. 전력전자, 전기차, 5G 및 반도체 애플리케이션을 위한 고성능 열 관리 솔루션.",
            "products_meta_keywords": "세라믹 기판 제품, DBC 기판 카탈로그, DPC 세라믹 제품, 비금속화 세라믹 기판, 질화알루미늄 기판, 알루미나 세라믹 제품, 열 관리 기판, 전력전자용 기판, IGBT 기판, RF 증폭기 기판, 반도체 패키징 재료",
            "products_og_title": "세라믹 기판 제품 카탈로그 | DBC & DPC 솔루션 | Jimei Materials",
            "products_og_description": "전력전자 및 열 관리 애플리케이션을 위한 DBC, DPC, 비금속화 세라믹 기판을 포함한 고성능 세라믹 금속화 기판의 포괄적 제품군.",
            "products_twitter_title": "세라믹 기판 제품 카탈로그 | DBC & DPC 솔루션 | Jimei Materials",
            "products_twitter_description": "전력전자 및 열 관리 애플리케이션을 위한 DBC, DPC, 비금속화 세라믹 기판을 포함한 고성능 세라믹 금속화 기판의 포괄적 제품군.",

            // Navigation (홈페이지와 일관성 유지)
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
            "breadcrumb_products": "제품",

            // Page Header
            "products_main_title": "세라믹 기판 제품",
            "products_subtitle": "열 관리 및 전력전자 애플리케이션을 위한 고성능 솔루션",

            // Product Categories Section
            "categories_title": "제품 카테고리",
            "categories_description": "당사의 포괄적인 세라믹 기판 솔루션을 살펴보십시오",
            "category_dpc_title": "직접 도금 동<br>(DPC) 기판",
            "category_dpc_desc": "탁월한 전기적 성능이 요구되는 RF/마이크로파 애플리케이션, 반도체 패키징 및 미세 피치 회로용 정밀 세라믹 기판.",
            "category_dbc_title": "직접 접합 동<br>(DBC) 기판",
            "category_dbc_desc": "우수한 방열 성능이 필요한 IGBT 모듈, EV 파워 시스템 및 산업용 구동 장치용 고열전도성 기판.",
            "category_bare_title": "비금속화<br>세라믹 기판",
            "category_bare_desc": "센서, 절연체 및 열 관리 부품용 고품질 알루미나 및 질화알루미늄 기판.",
            
            // Specification Badges
            "spec_tolerance": "공차 ±10μm",
            "spec_line_width": "최소 선폭 20μm",
            "spec_surface_finish": "ENIG/금 도금",
            "spec_thermal": "열전도도 170-200 W/mK",
            "spec_copper_thick": "동박 두께 0.2-0.3mm",
            "spec_high_power": "고출력 대응",
            "spec_materials": "Al2O3 / AlN / Si3N4",
            "spec_custom_sizes": "맞춤형 크기",
            "spec_polished": "연마/래핑 가공",

            // Buttons
            "btn_view_category": "제품 보기",
            "btn_view_resources": "기술 자료 보기",
            "btn_request_samples": "샘플 요청",
            "btn_contact_engineering": "기술 팀 문의",

            // Technology Comparison Section
            "comparison_title": "기술 비교",
            "comparison_description": "애플리케이션에 적합한 세라믹 기판 기술 선택",
            "comparison_feature": "특징",
            "comparison_dpc": "DPC (직접 도금 동)",
            "comparison_dbc": "DBC (직접 접합 동)",
            "comparison_bare": "비금속화 세라믹",
            "feature_process": "공정 기술",
            "dpc_process": "전해 도금 및 포토리소그래피",
            "dbc_process": "고온 접합 (1065°C)",
            "bare_process": "세라믹 성형/가공",
            "feature_thermal": "열전도도",
            "feature_copper": "동박 두께",
            "feature_line_width": "최소 선폭",
            "feature_none": "해당 없음",
            "feature_applications": "주요 애플리케이션",
            "dpc_apps": "RF/마이크로파, 미세 패턴, 센서",
            "dbc_apps": "파워 모듈, 전기차, 고전류",
            "bare_apps": "절연체, 열확산판, 베이스",
            "feature_lead_time": "표준 납기",

            // Featured Applications Section
            "applications_title": "주요 적용 사례",
            "applications_description": "당사의 세라믹 기판은 다양한 산업의 첨단 기술을 구동합니다",
            "app_laser_title": "레이저 다이오드 방열판",
            "app_laser_desc": "LiDAR, 광통신 및 산업용 가공에 사용되는 반도체 레이저용 고열전도성 기판.",
            "app_tec_title": "열전 냉각기 (TEC) 모듈",
            "app_tec_desc": "광통신, 의료 기기 및 항공우주 분야의 펠티어 냉각 모듈용 정밀 세라믹 기판.",
            "app_ide_title": "인터디지털 전극 (IDE)",
            "app_ide_desc": "미세 패턴 회로가 필요한 정전 용량형 센서, 가스 감지기 및 생체 의학 애플리케이션용 정밀 전극 패턴.",
            "app_igbt_title": "IGBT 파워 모듈",
            "app_igbt_desc": "견고한 열 관리가 필요한 산업용 모터 드라이브, EV 인버터 및 신재생 에너지 시스템용 고출력 DBC 기판.",
            "app_rf_title": "RF 전력 증폭기",
            "app_rf_desc": "고주파 성능이 요구되는 5G 기지국, 마이크로파 통신 및 레이더 시스템용 저손실 DPC 기판.",
            "app_led_title": "고출력 LED 패키징",
            "app_led_desc": "효율적인 열 방산이 필요한 자동차 헤드램프, 산업용 조명 및 UV LED 애플리케이션용 열 관리 기판.",

            // Material Specifications Section
            "materials_title": "세라믹 재료 특성",
            "materials_description": "특정 요구 사항에 최적의 세라믹 재료를 선택하십시오",
            "material_alumina_title": "알루미나 (Al₂O₃)",
            "material_alumina_spec1": "열전도도: 24-28 W/mK",
            "material_alumina_spec2": "유전율: 9.8 @ 1MHz",
            "material_alumina_spec3": "절연 내압: 15-20 kV/mm",
            "material_alumina_spec4": "열팽창계수: 7.2 ppm/°C (25-300°C)",
            "material_alumina_spec5": "적용 분야: 비용 효율적 솔루션, 범용 기판",
            "material_ain_title": "질화알루미늄 (AlN)",
            "material_ain_spec1": "열전도도: 170-200 W/mK",
            "material_ain_spec2": "유전율: 8.9 @ 1MHz",
            "material_ain_spec3": "절연 내압: 15-20 kV/mm",
            "material_ain_spec4": "열팽창계수: 4.5 ppm/°C (25-300°C)",
            "material_ain_spec5": "적용 분야: 고출력, 고주파, 레이저 다이오드",
            "material_si3n4_title": "질화규소 (Si₃N₄)",
            "material_si3n4_spec1": "열전도도: 60-90 W/mK",
            "material_si3n4_spec2": "유전율: 8.0 @ 1MHz",
            "material_si3n4_spec3": "절연 내압: 15-25 kV/mm",
            "material_si3n4_spec4": "열팽창계수: 3.2 ppm/°C (25-300°C)",
            "material_si3n4_spec5": "적용 분야: 고기계적 강도, 자동차",
            "material_zro2_title": "지르코니아 (ZrO₂)",
            "material_zro2_spec1": "열전도도: 2-3 W/mK",
            "material_zro2_spec2": "유전율: 25-30 @ 1MHz",
            "material_zro2_spec3": "절연 내압: 8-12 kV/mm",
            "material_zro2_spec4": "열팽창계수: 10.5 ppm/°C (25-300°C)",
            "material_zro2_spec5": "적용 분야: 열 절연, 센서",

            // Resources Section
            "resources_title": "기술 자료",
            "resources_description": "데이터시트, 애플리케이션 노트 및 설계 가이드라인 다운로드",
            "resource_datasheets_title": "제품 데이터시트",
            "resource_datasheets_desc": "당사 모든 세라믹 기판 제품에 대한 상세 사양 및 기술 데이터.",
            "resource_design_title": "설계 가이드라인",
            "resource_design_desc": "세라믹 기판 설계 및 열 성능 최적화를 위한 모범 사례.",
            "resource_samples_title": "샘플 요청",
            "resource_samples_desc": "당사 세라믹 기판 제품의 평가 및 테스트를 위한 무료 샘플을 요청하십시오.",

            // CTA Section
            "products_cta_title": "맞춤형 세라믹 기판 솔루션이 필요하십니까?",
            "products_cta_description": "당사 엔지니어링 팀은 고객의 특정 요구 사항에 맞춤화된 세라믹 기판 솔루션 개발을 전문으로 합니다.",
            "cta_prototyping": "신속한 프로토타이핑",
            "cta_prototyping_desc": "2-3주 내 맞춤형 설계 제공",
            "cta_technical_support": "기술 지원",
            "cta_technical_support_desc": "엔지니어링 상담 가능",
            "cta_phone": "+86-147-4537-3293",

            // Footer (홈페이지와 동일)
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
            "products_page_title": "Keramikmetallisierungssubstrate Produkte | DBC & DPC Lösungen | Jimei Materials",
            "products_meta_description": "Entdecken Sie unser komplettes Portfolio an Keramikmetallisierungssubstraten inklusive DBC, DPC und Reinkeramik. Hochleistungslösungen für Wärmemanagement in Leistungselektronik, E-Mobilität, 5G und Halbleiteranwendungen.",
            "products_meta_keywords": "Keramiksubstrat Produkte, DBC Substrat Katalog, DPC Keramikprodukte, Reinkeramik-Substrate, Aluminiumnitrid-Substrate, Aluminiumoxid-Keramikprodukte, Wärmemanagement-Substrate, Substrate Leistungselektronik, IGBT Substrate, HF-Verstärker Substrate, Halbleiter-Verbundmaterialien",
            "products_og_title": "Produktkatalog Keramiksubstrate | DBC & DPC Lösungen | Jimei Materials",
            "products_og_description": "Vollständiges Portfolio von Hochleistungs-Keramikmetallisierungssubstraten inklusive DBC, DPC und Reinkeramik für Leistungselektronik und Wärmemanagement.",
            "products_twitter_title": "Produktkatalog Keramiksubstrate | DBC & DPC Lösungen | Jimei Materials",
            "products_twitter_description": "Vollständiges Portfolio von Hochleistungs-Keramikmetallisierungssubstraten inklusive DBC, DPC und Reinkeramik für Leistungselektronik und Wärmemanagement.",

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
            "breadcrumb_products": "Produkte",

            // Page Header
            "products_main_title": "Keramiksubstrat Produkte",
            "products_subtitle": "Hochleistungslösungen für Wärmemanagement und Leistungselektronik",

            // Product Categories Section
            "categories_title": "Produktkategorien",
            "categories_description": "Entdecken Sie unser umfassendes Portfolio an Keramiksubstrat-Lösungen",
            "category_dpc_title": "Direct Plated<br>Copper (DPC)",
            "category_dpc_desc": "Präzisions-Keramiksubstrate für HF/Mikrowellenanwendungen, Halbleiter-Verpackung und Feinstleiterbahnen mit überlegener elektrischer Performance.",
            "category_dbc_title": "Direct Bonded<br>Copper (DBC)",
            "category_dbc_desc": "Hoch wärmeleitfähige Substrate für IGBT-Module, EV-Leistungssysteme und Industrieantriebe mit Anforderungen an überlegene Wärmeableitung.",
            "category_bare_title": "Reinkeramik-<br>Substrate",
            "category_bare_desc": "Hochwertige Aluminiumoxid- und Aluminiumnitrid-Substrate für Sensoren, Isolatoren und Wärmemanagement-Komponenten.",
            
            // Specification Badges
            "spec_tolerance": "±10 µm Toleranz",
            "spec_line_width": "20 µm Leiterbreite",
            "spec_surface_finish": "ENIG/Au Finish",
            "spec_thermal": "170-200 W/mK",
            "spec_copper_thick": "0,2-0,3 mm Cu",
            "spec_high_power": "Hochleistung",
            "spec_materials": "AlN/Al2O3/Si3N4",
            "spec_custom_sizes": "Kundenspezifische Größen",
            "spec_polished": "Poliert/Gelegt",

            // Buttons
            "btn_view_category": "Produkte ansehen",
            "btn_view_resources": "Dokumentation ansehen",
            "btn_request_samples": "Muster anfordern",
            "btn_contact_engineering": "Engineering kontaktieren",

            // Technology Comparison Section
            "comparison_title": "Technologievergleich",
            "comparison_description": "Wählen Sie die passende Keramiksubstrat-Technologie für Ihre Anwendung",
            "comparison_feature": "Merkmal",
            "comparison_dpc": "DPC (Direct Plated Copper)",
            "comparison_dbc": "DBC (Direct Bonded Copper)",
            "comparison_bare": "Reinkeramik",
            "feature_process": "Prozess-Technologie",
            "dpc_process": "Galvanik & Fotolithografie",
            "dbc_process": "Hochtemperatur-Verbondung (1065°C)",
            "bare_process": "Keramikfertigung",
            "feature_thermal": "Wärmeleitfähigkeit",
            "feature_copper": "Kupferdicke",
            "feature_line_width": "Min. Leiterbreite",
            "feature_none": "k.A.",
            "feature_applications": "Hauptanwendungen",
            "dpc_apps": "HF/Mikrowelle, Feinstleiterbahnen, Sensoren",
            "dbc_apps": "Leistungsmodule, E-Mobilität, Hoher Strom",
            "bare_apps": "Isolatoren, Wärmeausbreiter, Träger",
            "feature_lead_time": "Typische Lieferzeit",

            // Featured Applications Section
            "applications_title": "Ausgewählte Anwendungen",
            "applications_description": "Unsere Keramiksubstrate ermöglichen Spitzentechnologien in verschiedenen Industrien",
            "app_laser_title": "Laser-Dioden-Kühlkörper",
            "app_laser_desc": "Hoch wärmeleitfähige Substrate für Halbleiterlaser in LiDAR, optischer Kommunikation und industrieller Materialbearbeitung.",
            "app_tec_title": "Thermoelektrische Kühler (TEC) Module",
            "app_tec_desc": "Präzisions-Keramiksubstrate für Peltier-Kühlmodule in optischer Kommunikation, Medizintechnik und Luft- und Raumfahrt.",
            "app_ide_title": "Interdigitalelektroden (IDE)",
            "app_ide_desc": "Präzise Elektrodenstrukturen für kapazitive Sensoren, Gasdetektoren und biomedizinische Anwendungen mit Feinstleiterbahnen.",
            "app_igbt_title": "IGBT-Leistungsmodule",
            "app_igbt_desc": "Hochleistungs-DBC-Substrate für industrielle Motorantriebe, EV-Wechselrichter und Systeme erneuerbarer Energie mit robustem Wärmemanagement.",
            "app_rf_title": "HF-Leistungsverstärker",
            "app_rf_desc": "Niederfrequenz-DPC-Substrate für 5G-Basisstationen, Mikrowellenkommunikation und Radarsysteme mit Hochfrequenzanforderungen.",
            "app_led_title": "Hochleistungs-LED-Packaging",
            "app_led_desc": "Wärmemanagement-Substrate für Autoscheinwerfer, Industriebeleuchtung und UV-LED-Anwendungen mit effizienter Wärmeableitung.",

            // Material Specifications Section
            "materials_title": "Keramische Materialeigenschaften",
            "materials_description": "Wählen Sie das optimale Keramikmaterial für Ihre spezifischen Anforderungen",
            "material_alumina_title": "Aluminiumoxid (Al₂O₃)",
            "material_alumina_spec1": "Wärmeleitfähigkeit: 24-28 W/mK",
            "material_alumina_spec2": "Dielektrizitätskonstante: 9,8 @ 1 MHz",
            "material_alumina_spec3": "Durchschlagspannung: 15-20 kV/mm",
            "material_alumina_spec4": "Wärmeausdehnung (CTE): 7,2 ppm/°C (25-300°C)",
            "material_alumina_spec5": "Anwendungen: Kosteneffiziente Lösungen, Standard-Substrate",
            "material_ain_title": "Aluminiumnitrid (AlN)",
            "material_ain_spec1": "Wärmeleitfähigkeit: 170-200 W/mK",
            "material_ain_spec2": "Dielektrizitätskonstante: 8,9 @ 1 MHz",
            "material_ain_spec3": "Durchschlagspannung: 15-20 kV/mm",
            "material_ain_spec4": "Wärmeausdehnung (CTE): 4,5 ppm/°C (25-300°C)",
            "material_ain_spec5": "Anwendungen: Hochleistung, Hochfrequenz, Laserdioden",
            "material_si3n4_title": "Siliciumnitrid (Si₃N₄)",
            "material_si3n4_spec1": "Wärmeleitfähigkeit: 60-90 W/mK",
            "material_si3n4_spec2": "Dielektrizitätskonstante: 8,0 @ 1 MHz",
            "material_si3n4_spec3": "Durchschlagspannung: 15-25 kV/mm",
            "material_si3n4_spec4": "Wärmeausdehnung (CTE): 3,2 ppm/°C (25-300°C)",
            "material_si3n4_spec5": "Anwendungen: Hohe mechanische Festigkeit, Automotive",
            "material_zro2_title": "Zirkonoxid (ZrO₂)",
            "material_zro2_spec1": "Wärmeleitfähigkeit: 2-3 W/mK",
            "material_zro2_spec2": "Dielektrizitätskonstante: 25-30 @ 1 MHz",
            "material_zro2_spec3": "Durchschlagspannung: 8-12 kV/mm",
            "material_zro2_spec4": "Wärmeausdehnung (CTE): 10,5 ppm/°C (25-300°C)",
            "material_zro2_spec5": "Anwendungen: Wärmeisolierung, Sensoren",

            // Resources Section
            "resources_title": "Technische Dokumentation",
            "resources_description": "Laden Sie Datenblätter, Applikationshinweise und Designrichtlinien herunter",
            "resource_datasheets_title": "Produktdatenblätter",
            "resource_datasheets_desc": "Detaillierte Spezifikationen und technische Daten für alle unsere Keramiksubstrat-Produkte.",
            "resource_design_title": "Designrichtlinien",
            "resource_design_desc": "Best Practices für das Design mit Keramiksubstraten und Optimierung der thermischen Performance.",
            "resource_samples_title": "Muster anfordern",
            "resource_samples_desc": "Fordern Sie kostenlose Muster zur Evaluierung und Prüfung unserer Keramiksubstrat-Produkte an.",

            // CTA Section
            "products_cta_title": "Benötigen Sie kundenspezifische Keramiksubstrat-Lösungen?",
            "products_cta_description": "Unser Ingenieurteam ist spezialisiert auf die Entwicklung maßgeschneiderter Keramiksubstrat-Lösungen für Ihre spezifischen Anforderungen.",
            "cta_prototyping": "Schnelles Prototyping",
            "cta_prototyping_desc": "Kundenspezifische Designs in 2-3 Wochen",
            "cta_technical_support": "Technischer Support",
            "cta_technical_support_desc": "Ingenieurtechnische Beratung verfügbar",
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