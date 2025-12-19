// translations.js - Internationalization for Jimei Materials Website
// Author: Jimei Materials Development Team
// Version: 1.0.0
// Last Updated: 2025

(function() {
    'use strict';

    // Translations object
    const translations = {
        en: {

                // Meta tags
                "dbc_page_title": "Direct Bonded Copper (DBC) Ceramic Substrates | Jimei Materials",
                "dbc_page_description": "High-power Direct Bonded Copper (DBC) ceramic substrates for IGBT modules, EV power systems, and industrial drives requiring superior heat dissipation and electrical isolation.",
                "dbc_page_keywords": "DBC ceramic substrate, Direct Bonded Copper, IGBT substrate, power electronics, thermal management, aluminum nitride, alumina, high power, automotive electronics, EV power modules",
                "og_title": "DBC Ceramic Substrates | Direct Bonded Copper Solutions | Jimei Materials",
                "og_description": "High-power Direct Bonded Copper (DBC) ceramic substrates for IGBT modules, EV power systems, and industrial drives requiring superior heat dissipation.",
                "twitter_title": "DBC Ceramic Substrates | Direct Bonded Copper Solutions | Jimei Materials",
                "twitter_description": "High-power Direct Bonded Copper (DBC) ceramic substrates for IGBT modules, EV power systems, and industrial drives requiring superior heat dissipation.",

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
                "nav_language": "Language",
                "nav_request_quote": "Request Quote",
                
                // Breadcrumbs
                "breadcrumb_home": "Home",
                "breadcrumb_products": "Products",
                "breadcrumb_dbc": "DBC Substrates",
                
                // Hero Section
                "dbc_main_title": "Direct Bonded Copper (DBC) Ceramic Substrates",
                "dbc_subtitle": "High-power ceramic substrates for superior thermal management and electrical isolation in demanding power electronics",
                "feature_high_power": "High power handling capacity",
                "feature_excellent_thermal": "Excellent thermal conductivity",
                "feature_strong_bond": "Strong copper-ceramic bond",
                "feature_cte_matched": "CTE matched to power devices",
                
                // Overview
                "overview_title": "DBC Technology Overview",
                "overview_description": "Direct Bonded Copper (DBC) is a process in which a thick copper layer is directly bonded to a ceramic substrate, typically alumina (Al₂O₃) or aluminum nitride (AlN), through a high-temperature oxidation and diffusion reaction. During DBC fabrication, copper foil is placed on the ceramic and heated to 1065–1085°C in a controlled atmosphere, forming a strong, hermetic bond between the copper and ceramic.",
                "overview_description2": "This results in a substrate with excellent thermal conductivity, high electrical insulation, and robust mechanical strength. DBC substrates are widely used in power electronics, semiconductor laser heat sinks, and thermoelectric coolers due to their ability to efficiently dissipate heat and handle high current loads while maintaining electrical isolation.",
                "tech_high_power": "High-Power Capability",
                "tech_up_to": "Up to 500μm copper thickness",
                
                // Features
                "features_title": "Key Features & Benefits",
                "features_subtitle": "Advanced DBC technology for demanding power applications",
                "feature_thermal_title": "Superior Thermal Management",
                "feature_thermal_desc": "Excellent heat dissipation with thermal conductivity up to 200 W/mK (AlN).",
                "feature_power_title": "High Power Handling",
                "feature_power_desc": "Thick copper layers (up to 500μm) for high current carrying capacity.",
                "feature_isolation_title": "Electrical Isolation",
                "feature_isolation_desc": "High dielectric strength (>10 kV/mm) for reliable electrical isolation.",
                "feature_bond_title": "Strong Mechanical Bond",
                "feature_bond_desc": "High-temperature bonding ensures excellent adhesion and reliability.",
                "feature_cte_title": "Matched CTE",
                "feature_cte_desc": "CTE closely matched to silicon and power devices for reduced stress.",
                "feature_robust_title": "Robust & Durable",
                "feature_robust_desc": "Excellent mechanical strength and resistance to thermal cycling.",
                
                // Specifications
                "specifications_title": "Technical Specifications",
                "specifications_subtitle": "Comprehensive specifications for DBC ceramic substrates",
                "spec_basic_title": "Basic Specifications",
                "spec_ceramic_materials": "Ceramic Materials",
                "spec_ceramic_thickness": "Ceramic Thickness",
                "spec_copper_thickness": "Copper Thickness",
                "spec_copper_purity": "Copper Purity",
                "spec_surface_finish": "Surface Finish",
                "spec_surface_options": "As-bonded, Electroplated, Solderable, Gold Plated, Silver Plated",
                "spec_dimensions": "Dimensions",
                "spec_max_size": "Custom sizes up to 300mm x 300mm",
                "spec_performance_title": "Performance Specifications",
                "spec_tolerance_ceramic": "Tolerance (Ceramic)",
                "spec_tolerance_copper": "Tolerance (Copper)",
                "spec_thermal_conductivity": "Thermal Conductivity",
                "spec_thermal_value": "Up to 170 W/m·K (AlN), 24-28 W/m·K (Al₂O₃)",
                "spec_dielectric_strength": "Dielectric Strength",
                "spec_temperature_range": "Operating Temperature",
                "spec_bond_strength": "Bond Strength",
                
                // Applications
                "applications_title": "Typical Applications",
                "applications_subtitle": "DBC substrates power high-performance applications across industries",
                "app_igbt_title": "IGBT Power Modules",
                "app_igbt_desc": "High-power IGBT modules for industrial motor drives, EV inverters, and renewable energy systems.",
                "app_ev_title": "EV Power Systems",
                "app_ev_desc": "Power converters, inverters, and battery management systems for electric vehicles.",
                "app_renewable_title": "Renewable Energy",
                "app_renewable_desc": "Solar inverters, wind power converters, and energy storage systems.",
                "app_industrial_title": "Industrial Drives",
                "app_industrial_desc": "Motor controllers, power supplies, and industrial automation systems.",
                "app_led_title": "High-Power LED",
                "app_led_desc": "Thermal management substrates for automotive headlights and industrial lighting.",
                "app_telecom_title": "Telecommunications",
                "app_telecom_desc": "Power amplifiers and RF modules for communication infrastructure.",
                
                // Materials
                "materials_title": "Ceramic Material Comparison",
                "materials_subtitle": "Choose the optimal ceramic material for your power application",
                "material_alumina_title": "Alumina (Al₂O₃)",
                "material_alumina_thermal": "Thermal Conductivity: 24-28 W/mK",
                "material_alumina_dielectric": "Dielectric Strength: 15-20 kV/mm",
                "material_alumina_cte": "CTE: 7.2 ppm/°C",
                "material_alumina_apps": "Applications: Standard power modules, general-purpose",
                "material_ain_title": "Aluminum Nitride (AlN)",
                "material_ain_thermal": "Thermal Conductivity: 170-200 W/mK",
                "material_ain_dielectric": "Dielectric Strength: 15-20 kV/mm",
                "material_ain_cte": "CTE: 4.5 ppm/°C",
                "material_ain_apps": "Applications: High-power, high-frequency, critical cooling",
                "material_si3n4_title": "Silicon Nitride (Si₃N₄)",
                "material_si3n4_thermal": "Thermal Conductivity: 60-90 W/mK",
                "material_si3n4_dielectric": "Dielectric Strength: 15-25 kV/mm",
                "material_si3n4_cte": "CTE: 3.2 ppm/°C",
                "material_si3n4_apps": "Applications: Automotive, high mechanical stress",
                
                // Ordering
                "ordering_title": "Ordering Information",
                "ordering_subtitle": "Complete details for procurement and manufacturing",
                "ordering_logistics_title": "Logistics & Manufacturing",
                "ordering_hs_code": "HS Code",
                "ordering_moq": "Minimum Order Quantity",
                "ordering_supply_capacity": "Supply Capacity",
                "ordering_origin": "Place of Origin",
                "ordering_shipping_title": "Shipping & Payment",
                "ordering_incoterm": "Incoterm",
                "ordering_transportation": "Transportation",
                "ordering_payment": "Payment Terms",
                "ordering_packaging": "Packaging",
                "ordering_custom_note": "With a comprehensive range of specifications and customization options, our DBC ceramic substrates can be tailored to meet the precise needs of your application, ensuring optimal performance and reliability in even the most demanding environments.",
                "btn_request_quote": "Request A Custom Quote",
                
                // Gallery
                "gallery_title": "DBC Product Gallery",
                "gallery_subtitle": "High-quality Direct Bonded Copper ceramic substrates",
                
                // CTA
                "cta_title": "Need High-Power DBC Solutions?",
                "cta_description": "Our engineering team specializes in custom DBC solutions for demanding power electronics applications. Get expert consultation and samples for evaluation.",
                "cta_tech_support": "Technical Consultation",
                "cta_tech_support_desc": "Expert power electronics support",
                "cta_prototyping": "Rapid Prototyping",
                "cta_prototyping_desc": "Custom designs in 2-3 weeks",
                "btn_contact_us": "Contact Us Today",
                "cta_phone": "+86-147-4537-3293",
            
                // Footer
                "footer_description": "Leading manufacturer of ceramic metallization substrates for power electronics and thermal management applications since 2016.",
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

                // 元标签 - 针对DBC产品页面优化，突出高功率与核心应用
                "dbc_page_title": "直接覆铜陶瓷基板 (DBC) | 高功率热管理解决方案 | 吉美材料",
                "dbc_page_description": "吉美材料提供高性能直接覆铜陶瓷基板，专为需要卓越散热与电气隔离的IGBT功率模块、电动汽车电驱系统及工业驱动器设计。",
                "dbc_page_keywords": "DBC陶瓷基板, 直接覆铜, IGBT模块基板, 功率电子, 热管理, 氮化铝基板, 氧化铝基板, 高功率应用, 汽车电子, 电动汽车功率模块",
                "og_title": "DBC陶瓷基板 | 直接覆铜解决方案专家 | 吉美材料",
                "og_description": "用于IGBT模块、电动汽车电源系统及工业驱动器的高功率直接覆铜陶瓷基板，提供卓越的散热性能与电气可靠性。",
                "twitter_title": "DBC陶瓷基板 | 直接覆铜解决方案专家 | 吉美材料",
                "twitter_description": "用于IGBT模块、电动汽车电源系统及工业驱动器的高功率直接覆铜陶瓷基板，提供卓越的散热性能与电气可靠性。",

                // 导航 (与全站一致)
                "nav_home": "首页",
                "nav_products": "产品中心",
                "nav_dpc": "直接镀铜陶瓷基板 (DPC)",
                "nav_dbc": "直接覆铜陶瓷基板 (DBC)",
                "nav_bare": "裸陶瓷基板",
                "nav_all_products": "全部产品",
                "nav_resources": "技术资源",
                "nav_about": "关于吉美",
                "nav_contact": "联系我们",
                "nav_language": "语言",
                "nav_request_quote": "在线询价",
                
                // 面包屑导航
                "breadcrumb_home": "首页",
                "breadcrumb_products": "产品中心",
                "breadcrumb_dbc": "DBC基板",
                
                // 页面标题区 - 强调高功率特性
                "dbc_main_title": "直接覆铜陶瓷基板 (DBC)",
                "dbc_subtitle": "专为严苛功率电子应用设计的高功率基板，提供卓越的热管理与电气隔离性能",
                "feature_high_power": "高功率承载能力",
                "feature_excellent_thermal": "优异的导热性能",
                "feature_strong_bond": "铜-陶瓷强结合力",
                "feature_cte_matched": "与功率器件匹配的热膨胀系数",
                
                // 技术概述 - 详细工艺描述
                "overview_title": "DBC技术概述",
                "overview_description": "直接覆铜陶瓷基板（DBC）是一种通过高温氧化与扩散反应，将厚铜层直接键合到氧化铝（Al₂O₃）或氮化铝（AlN）等陶瓷基板上的工艺。在DBC制造过程中，铜箔置于陶瓷表面，在受控气氛中加热至1065–1085°C，从而在铜与陶瓷之间形成牢固、致密的冶金结合。",
                "overview_description2": "由此产生的基板具有优异的热导率、高电绝缘性和稳健的机械强度。DBC基板因其高效的散热能力、大电流承载能力以及出色的电隔离性能，被广泛应用于功率电子、半导体激光器热沉及热电制冷器等领域。",
                "tech_high_power": "高功率承载",
                "tech_up_to": "铜厚可达500μm",
                
                // 特性与优势 - 针对功率应用优化
                "features_title": "核心特性与优势",
                "features_subtitle": "先进的DBC技术，为严苛功率应用而生",
                "feature_thermal_title": "卓越的热管理",
                "feature_thermal_desc": "优异的散热性能，采用氮化铝时导热系数最高可达200 W/m·K。",
                "feature_power_title": "高功率承载",
                "feature_power_desc": "厚铜层（可达500μm）提供强大的电流承载能力，减少导体损耗。",
                "feature_isolation_title": "高电绝缘性",
                "feature_isolation_desc": "高介电强度（>10 kV/mm），确保器件间可靠的电气隔离。",
                "feature_bond_title": "强机械结合力",
                "feature_bond_desc": "高温冶金键合形成极高的附着力，确保长期可靠性。",
                "feature_cte_title": "匹配的热膨胀系数",
                "feature_cte_desc": "热膨胀系数与硅及功率半导体器件（如IGBT、SiC）相近，有效降低热应力，提升焊接可靠性。",
                "feature_robust_title": "坚固耐用",
                "feature_robust_desc": "优异的机械强度与抗热疲劳性能，适用于恶劣工况。",
                
                // 技术规格 - 参数标准化表述
                "specifications_title": "技术规格参数",
                "specifications_subtitle": "DBC陶瓷基板的完整规格说明",
                "spec_basic_title": "基本规格",
                "spec_ceramic_materials": "陶瓷材料",
                "spec_ceramic_thickness": "陶瓷厚度",
                "spec_copper_thickness": "铜层厚度",
                "spec_copper_purity": "铜纯度",
                "spec_surface_finish": "表面处理",
                "spec_surface_options": "键合态、电镀增厚、可焊性处理、镀金、镀银",
                "spec_dimensions": "外形尺寸",
                "spec_max_size": "定制尺寸最大可达300mm x 300mm",
                "spec_performance_title": "性能规格",
                "spec_tolerance_ceramic": "陶瓷厚度公差",
                "spec_tolerance_copper": "铜厚公差",
                "spec_thermal_conductivity": "导热系数",
                "spec_thermal_value": "氮化铝: 最高170 W/m·K；氧化铝: 24-28 W/m·K",
                "spec_dielectric_strength": "介电强度",
                "spec_temperature_range": "工作温度范围",
                "spec_bond_strength": "结合强度",
                
                // 典型应用 - 突出高功率场景
                "applications_title": "典型应用领域",
                "applications_subtitle": "DBC基板为各行业高功率应用提供核心支持",
                "app_igbt_title": "IGBT功率模块",
                "app_igbt_desc": "用于工业电机驱动、电动汽车逆变器及可再生能源系统的高功率IGBT模块，作为芯片承载体与主散热通道。",
                "app_ev_title": "电动汽车电驱系统",
                "app_ev_desc": "用于电动汽车的主逆变器、车载充电器及电池管理系统，要求高电压隔离、大电流及优异散热。",
                "app_renewable_title": "可再生能源系统",
                "app_renewable_desc": "用于光伏逆变器、风力发电变流器及储能系统的功率转换模块，耐受户外环境与温度冲击。",
                "app_industrial_title": "工业变频与驱动",
                "app_industrial_desc": "用于伺服驱动器、变频器、大功率工业电源及自动化控制系统。",
                "app_led_title": "大功率LED照明",
                "app_led_desc": "用于汽车前照灯、工业及特种照明的大功率LED模组，提供高效散热以维持光效与寿命。",
                "app_telecom_title": "通信基础设施",
                "app_telecom_desc": "用于通信基站、射频功放模块的电源管理与散热基板。",
                
                // 陶瓷材料对比 - 突出选型指导
                "materials_title": "陶瓷材料性能对比",
                "materials_subtitle": "为您的功率应用选择最优陶瓷材料",
                "material_alumina_title": "氧化铝 (Al₂O₃， 96%-99.6%)",
                "material_alumina_thermal": "导热系数: 24-28 W/m·K",
                "material_alumina_dielectric": "介电强度: 15-20 kV/mm",
                "material_alumina_cte": "热膨胀系数: 7.2 ppm/°C",
                "material_alumina_apps": "典型应用: 标准功率模块，通用型高性价比方案",
                "material_ain_title": "氮化铝 (AlN)",
                "material_ain_thermal": "导热系数: 170-200 W/m·K",
                "material_ain_dielectric": "介电强度: 15-20 kV/mm",
                "material_ain_cte": "热膨胀系数: 4.5 ppm/°C (近Si)",
                "material_ain_apps": "典型应用: 高功率密度、高频、散热要求苛刻的场合",
                "material_si3n4_title": "氮化硅 (Si₃N₄)",
                "material_si3n4_thermal": "导热系数: 60-90 W/m·K",
                "material_si3n4_dielectric": "介电强度: 15-25 kV/mm",
                "material_si3n4_cte": "热膨胀系数: 3.2 ppm/°C",
                "material_si3n4_apps": "典型应用: 汽车电子（如主逆变器）、机械应力高、抗热震性要求极严的场合",
                
                // 订购信息 - 商务条款清晰
                "ordering_title": "订购与生产信息",
                "ordering_subtitle": "关于采购与制造的完整细节",
                "ordering_logistics_title": "物流与生产",
                "ordering_hs_code": "海关编码",
                "ordering_moq": "最小起订量",
                "ordering_supply_capacity": "供应能力",
                "ordering_origin": "原产地",
                "ordering_shipping_title": "运输与支付",
                "ordering_incoterm": "国际贸易术语",
                "ordering_transportation": "运输方式",
                "ordering_payment": "支付条款",
                "ordering_packaging": "包装方式",
                "ordering_custom_note": "我们提供全面的规格选项与定制化服务，DBC陶瓷基板可根据您的具体功率应用需求进行量身定制，确保在最严苛的工况下也能实现最优的性能与长期可靠性。",
                "btn_request_quote": "申请定制报价",
                
                // 产品图库
                "gallery_title": "DBC产品实拍图库",
                "gallery_subtitle": "高品质直接覆铜陶瓷基板展示",
                
                // CTA - 强调高功率方案专家
                "cta_title": "寻求高功率DBC解决方案？",
                "cta_description": "我们的工程团队专注于为严苛的功率电子应用提供定制化DBC解决方案。获取专家咨询与评估样品。",
                "cta_tech_support": "技术咨询",
                "cta_tech_support_desc": "功率电子专家支持",
                "cta_prototyping": "快速打样",
                "cta_prototyping_desc": "定制设计周期2-3周",
                "btn_contact_us": "立即联系我们",
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

                // Meta tags
                "dbc_page_title": "直接接合銅（DBC）セラミック基板 | Jimei Materials",
                "dbc_page_description": "IGBTモジュール、EVパワーシステム、産業用ドライブ向けの高出力直接接合銅（DBC）セラミック基板。優れた放熱性と電気絶縁性が要求される用途に最適です。",
                "dbc_page_keywords": "DBCセラミック基板, 直接接合銅, IGBT基板, パワーエレクトロニクス, 熱管理, 窒化アルミニウム, アルミナ, 高出力, 自動車電子機器, EVパワーモジュール",
                "og_title": "DBCセラミック基板 | 直接接合銅ソリューション | Jimei Materials",
                "og_description": "IGBTモジュール、EVパワーシステム、産業用ドライブ向けの高出力直接接合銅（DBC）セラミック基板。優れた放熱性が要求される用途に最適です。",
                "twitter_title": "DBCセラミック基板 | 直接接合銅ソリューション | Jimei Materials",
                "twitter_description": "IGBTモジュール、EVパワーシステム、産業用ドライブ向けの高出力直接接合銅（DBC）セラミック基板。優れた放熱性が要求される用途に最適です。",

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
                "nav_language": "言語",
                "nav_request_quote": "見積もり依頼",
                
                // Breadcrumbs
                "breadcrumb_home": "ホーム",
                "breadcrumb_products": "製品情報",
                "breadcrumb_dbc": "DBC基板",
                
                // Hero Section
                "dbc_main_title": "直接接合銅（DBC）セラミック基板",
                "dbc_subtitle": "高出力パワーエレクトロニクス向けに優れた熱管理と電気絶縁を実現する高電力セラミック基板",
                "feature_high_power": "高電力対応",
                "feature_excellent_thermal": "優れた熱伝導性",
                "feature_strong_bond": "強固な銅-セラミック接合",
                "feature_cte_matched": "パワーデバイスに適合した熱膨張係数",
                
                // Overview
                "overview_title": "DBC技術概要",
                "overview_description": "直接接合銅（DBC）は、厚い銅層をアルミナ（Al₂O₃）や窒化アルミニウム（AlN）などのセラミック基板に、高温での酸化および拡散反応を介して直接接合するプロセスです。DBC製造工程では、銅箔をセラミック上に配置し、制御された雰囲気中で1065–1085°Cまで加熱することで、銅とセラミックの間に強固で気密性の高い接合を形成します。",
                "overview_description2": "この結果、優れた熱伝導性、高い電気絶縁性、そして堅牢な機械的強度を備えた基板が得られます。DBC基板は、効率的な放熱と高電流負荷の処理能力を維持しながら電気的絶縁を確保できるため、パワーエレクトロニクス、半導体レーザー放熱基板、熱電冷却モジュールに広く使用されています。",
                "tech_high_power": "高出力対応",
                "tech_up_to": "最大銅厚 500μm",
                
                // Features
                "features_title": "主な特長と利点",
                "features_subtitle": "過酷な電力アプリケーションのための先進的DBC技術",
                "feature_thermal_title": "優れた熱管理性能",
                "feature_thermal_desc": "AlNでは200 W/mKに達する熱伝導率による優れた放熱性。",
                "feature_power_title": "高電力処理能力",
                "feature_power_desc": "最大500μmの厚い銅層による高い電流容量。",
                "feature_isolation_title": "電気的絶縁性",
                "feature_isolation_desc": "信頼性の高い電気的絶縁のための高絶縁破壊電圧（>10 kV/mm）。",
                "feature_bond_title": "強固な機械的接合",
                "feature_bond_desc": "高温接合により優れた密着性と信頼性を確保。",
                "feature_cte_title": "適合した熱膨張係数",
                "feature_cte_desc": "シリコンおよびパワーデバイスに近い熱膨張係数（CTE）により、応力低減を実現。",
                "feature_robust_title": "堅牢性と耐久性",
                "feature_robust_desc": "優れた機械的強度と熱サイクルに対する耐性。",
                
                // Specifications
                "specifications_title": "技術仕様",
                "specifications_subtitle": "DBCセラミック基板の包括的な仕様",
                "spec_basic_title": "基本仕様",
                "spec_ceramic_materials": "セラミック材料",
                "spec_ceramic_thickness": "セラミック厚さ",
                "spec_copper_thickness": "銅厚",
                "spec_copper_purity": "銅純度",
                "spec_surface_finish": "表面仕上げ",
                "spec_surface_options": "接合面そのまま、電気めっき、はんだ付け対応、金めっき、銀めっき",
                "spec_dimensions": "外形寸法",
                "spec_max_size": "最大300mm x 300mmまでカスタムサイズ対応",
                "spec_performance_title": "性能仕様",
                "spec_tolerance_ceramic": "寸法公差（セラミック）",
                "spec_tolerance_copper": "寸法公差（銅）",
                "spec_thermal_conductivity": "熱伝導率",
                "spec_thermal_value": "AlN: 最大170 W/m·K, Al₂O₃: 24-28 W/m·K",
                "spec_dielectric_strength": "絶縁破壊電圧",
                "spec_temperature_range": "使用温度範囲",
                "spec_bond_strength": "接合強度",
                
                // Applications
                "applications_title": "代表的なアプリケーション",
                "applications_subtitle": "DBC基板は、各産業における高性能アプリケーションを支えています",
                "app_igbt_title": "IGBTパワーモジュール",
                "app_igbt_desc": "産業用モータードライブ、EVインバータ、再生可能エネルギーシステム向け高出力IGBTモジュール。",
                "app_ev_title": "EVパワーシステム",
                "app_ev_desc": "電気自動車向けパワーコンバータ、インバータ、バッテリー管理システム。",
                "app_renewable_title": "再生可能エネルギー",
                "app_renewable_desc": "太陽光発電インバータ、風力発電コンバータ、エネルギー貯蔵システム。",
                "app_industrial_title": "産業用ドライブ",
                "app_industrial_desc": "モーターコントローラ、電源装置、産業オートメーションシステム。",
                "app_led_title": "高出力LED",
                "app_led_desc": "自動車ヘッドライトおよび産業用照明向け熱管理基板。",
                "app_telecom_title": "通信機器",
                "app_telecom_desc": "通信インフラ向けパワーアンプおよびRFモジュール。",
                
                // Materials
                "materials_title": "セラミック材料比較",
                "materials_subtitle": "電力アプリケーションに最適なセラミック材料をお選びください",
                "material_alumina_title": "アルミナ (Al₂O₃)",
                "material_alumina_thermal": "熱伝導率: 24-28 W/mK",
                "material_alumina_dielectric": "絶縁破壊電圧: 15-20 kV/mm",
                "material_alumina_cte": "熱膨張係数 (CTE): 7.2 ppm/°C",
                "material_alumina_apps": "主な用途: 標準パワーモジュール、汎用",
                "material_ain_title": "窒化アルミニウム (AlN)",
                "material_ain_thermal": "熱伝導率: 170-200 W/mK",
                "material_ain_dielectric": "絶縁破壊電圧: 15-20 kV/mm",
                "material_ain_cte": "熱膨張係数 (CTE): 4.5 ppm/°C",
                "material_ain_apps": "主な用途: 高出力、高周波、重要な冷却が必要な用途",
                "material_si3n4_title": "窒化ケイ素 (Si₃N₄)",
                "material_si3n4_thermal": "熱伝導率: 60-90 W/mK",
                "material_si3n4_dielectric": "絶縁破壊電圧: 15-25 kV/mm",
                "material_si3n4_cte": "熱膨張係数 (CTE): 3.2 ppm/°C",
                "material_si3n4_apps": "主な用途: 自動車、高い機械的応力がかかる用途",
                
                // Ordering
                "ordering_title": "発注情報",
                "ordering_subtitle": "調達および製造に関する詳細情報",
                "ordering_logistics_title": "物流・製造情報",
                "ordering_hs_code": "HSコード",
                "ordering_moq": "最小発注数量",
                "ordering_supply_capacity": "供給能力",
                "ordering_origin": "原産地",
                "ordering_shipping_title": "輸送・支払い条件",
                "ordering_incoterm": "インコタームズ",
                "ordering_transportation": "輸送方法",
                "ordering_payment": "支払条件",
                "ordering_packaging": "包装仕様",
                "ordering_custom_note": "当社のDBCセラミック基板は、幅広い仕様とカスタマイズオプションを備えており、お客様のアプリケーションの正確なニーズに合わせて調整可能です。これにより、最も過酷な環境下においても、最適な性能と信頼性を確保します。",
                "btn_request_quote": "カスタム見積もりを依頼",
                
                // Gallery
                "gallery_title": "DBC製品ギャラリー",
                "gallery_subtitle": "高品質な直接接合銅セラミック基板",
                
                // CTA
                "cta_title": "高出力DBCソリューションをお探しですか？",
                "cta_description": "当社のエンジニアリングチームは、過酷なパワーエレクトロニクスアプリケーション向けのカスタムDBCソリューションを専門としています。専門家による相談および評価用サンプルをご提供します。",
                "cta_tech_support": "技術相談",
                "cta_tech_support_desc": "パワーエレクトロニクスの専門家によるサポート",
                "cta_prototyping": "迅速な試作",
                "cta_prototyping_desc": "カスタム設計を2-3週間でご提供",
                "btn_contact_us": "今すぐお問い合わせ",
                "cta_phone": "+86-147-4537-3293",
                
                // Footer (統一維持)
                "footer_description": "2016年創業以来、パワーエレクトロニクスおよび熱管理アプリケーション向けの高信頼性セラミックメタライゼーション基板を提供するリーディングメーカーです。",
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

                "dbc_page_title": "직접 접합 동 (DBC) 세라믹 기판 | Jimei Materials",
                "dbc_page_description": "IGBT 모듈, EV 파워 시스템 및 산업용 드라이브를 위한 고출력 직접 접합 동(DBC) 세라믹 기판. 우수한 방열 성능 및 전기적 절연이 요구되는 응용 분야에 적합합니다.",
                "dbc_page_keywords": "DBC 세라믹 기판, 직접 접합 동, IGBT 기판, 전력전자, 열 관리, 질화알루미늄, 알루미나, 고출력, 자동차 전자, EV 파워 모듈",
                "og_title": "DBC 세라믹 기판 | 직접 접합 동 솔루션 | Jimei Materials",
                "og_description": "IGBT 모듈, EV 파워 시스템 및 산업용 드라이브를 위한 고출력 직접 접합 동(DBC) 세라믹 기판. 우수한 방열 성능을 제공합니다.",
                "twitter_title": "DBC 세라믹 기판 | 직접 접합 동 솔루션 | Jimei Materials",
                "twitter_description": "IGBT 모듈, EV 파워 시스템 및 산업용 드라이브를 위한 고출력 직접 접합 동(DBC) 세라믹 기판. 우수한 방열 성능을 제공합니다.",

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
                "nav_language": "언어",
                "nav_request_quote": "견적 문의",
                
                // Breadcrumbs
                "breadcrumb_home": "홈",
                "breadcrumb_products": "제품",
                "breadcrumb_dbc": "DBC 기판",
                
                // Hero Section
                "dbc_main_title": "직접 접합 동 (DBC) 세라믹 기판",
                "dbc_subtitle": "까다로운 전력전자 애플리케이션을 위한 우수한 열 관리 및 전기적 절연을 제공하는 고출력 세라믹 기판",
                "feature_high_power": "고출력 처리 능력",
                "feature_excellent_thermal": "우수한 열전도성",
                "feature_strong_bond": "강력한 구리-세라믹 접합",
                "feature_cte_matched": "파워 소자와의 열팽창계수(CTE) 정합",
                
                // Overview
                "overview_title": "DBC 기술 개요",
                "overview_description": "직접 접합 동(DBC)은 두꺼운 구리층을 일반적으로 알루미나(Al₂O₃) 또는 질화알루미늄(AlN) 세라믹 기판에 고온 산화 및 확산 반응을 통해 직접 접합하는 공정입니다. DBC 제조 과정에서 구리박을 세라믹 위에 놓고 제어된 분위기에서 1065~1085°C까지 가열함으로써, 구리와 세라믹 사이에 강력하고 기밀성 있는 접합을 형성합니다.",
                "overview_description2": "이로 인해 우수한 열전도성, 높은 전기적 절연성 및 견고한 기계적 강도를 가진 기판이 얻어집니다. DBC 기판은 열을 효율적으로 방산하고 높은 전류 부하를 처리하면서 전기적 절연을 유지할 수 있는 능력으로 인해 전력전자, 반도체 레이저 방열판 및 열전 냉각기에 널리 사용됩니다.",
                "tech_high_power": "고출력 대응 능력",
                "tech_up_to": "최대 500μm 구리 두께",
                
                // Features
                "features_title": "주요 특징 및 장점",
                "features_subtitle": "까다로운 전력 애플리케이션을 위한 고급 DBC 기술",
                "feature_thermal_title": "우수한 열 관리",
                "feature_thermal_desc": "최대 200 W/mK(AlN)의 열전도도로 뛰어난 방열 성능.",
                "feature_power_title": "고출력 처리 능력",
                "feature_power_desc": "고전류 전달 용량을 위한 두꺼운 구리층(최대 500μm).",
                "feature_isolation_title": "전기적 절연",
                "feature_isolation_desc": "신뢰할 수 있는 전기적 절연을 위한 높은 절연 내압(>10 kV/mm).",
                "feature_bond_title": "강력한 기계적 접합",
                "feature_bond_desc": "고온 접합 공정으로 우수한 접착력 및 신뢰성 보장.",
                "feature_cte_title": "정합된 열팽창계수(CTE)",
                "feature_cte_desc": "실리콘 및 파워 소자와 밀접하게 정합된 CTE로 응력 감소.",
                "feature_robust_title": "견고함 및 내구성",
                "feature_robust_desc": "우수한 기계적 강도 및 열 충격에 대한 내성.",
                
                // Specifications
                "specifications_title": "기술 사양",
                "specifications_subtitle": "DBC 세라믹 기판에 대한 포괄적인 사양",
                "spec_basic_title": "기본 사양",
                "spec_ceramic_materials": "세라믹 재료",
                "spec_ceramic_thickness": "세라믹 두께",
                "spec_copper_thickness": "구리 두께",
                "spec_copper_purity": "구리 순도",
                "spec_surface_finish": "표면 처리",
                "spec_surface_options": "접합 상태, 전기도금, 납땜성, 금 도금, 은 도금",
                "spec_dimensions": "치수",
                "spec_max_size": "맞춤형 크기 최대 300mm x 300mm",
                "spec_performance_title": "성능 사양",
                "spec_tolerance_ceramic": "공차 (세라믹)",
                "spec_tolerance_copper": "공차 (구리)",
                "spec_thermal_conductivity": "열전도도",
                "spec_thermal_value": "최대 170 W/m·K (AlN), 24-28 W/m·K (Al₂O₃)",
                "spec_dielectric_strength": "절연 내압",
                "spec_temperature_range": "작동 온도 범위",
                "spec_bond_strength": "접합 강도",
                
                // Applications
                "applications_title": "주요 응용 분야",
                "applications_subtitle": "DBC 기판은 다양한 산업의 고성능 애플리케이션을 구동합니다",
                "app_igbt_title": "IGBT 파워 모듈",
                "app_igbt_desc": "산업용 모터 드라이브, EV 인버터 및 신재생 에너지 시스템을 위한 고출력 IGBT 모듈.",
                "app_ev_title": "EV 파워 시스템",
                "app_ev_desc": "전기 자동차용 전력 변환기, 인버터 및 배터리 관리 시스템.",
                "app_renewable_title": "신재생 에너지",
                "app_renewable_desc": "태양광 인버터, 풍력 발전 컨버터 및 에너지 저장 시스템.",
                "app_industrial_title": "산업용 드라이브",
                "app_industrial_desc": "모터 컨트롤러, 전원 공급 장치 및 산업 자동화 시스템.",
                "app_led_title": "고출력 LED",
                "app_led_desc": "자동차 헤드라이트 및 산업용 조명을 위한 열 관리 기판.",
                "app_telecom_title": "통신 장비",
                "app_telecom_desc": "통신 인프라를 위한 전력 증폭기 및 RF 모듈.",
                
                // Materials
                "materials_title": "세라믹 재료 비교",
                "materials_subtitle": "전력 애플리케이션에 최적의 세라믹 재료 선택",
                "material_alumina_title": "알루미나 (Al₂O₃)",
                "material_alumina_thermal": "열전도도: 24-28 W/mK",
                "material_alumina_dielectric": "절연 내압: 15-20 kV/mm",
                "material_alumina_cte": "열팽창계수(CTE): 7.2 ppm/°C",
                "material_alumina_apps": "적용 분야: 표준 파워 모듈, 범용",
                "material_ain_title": "질화알루미늄 (AlN)",
                "material_ain_thermal": "열전도도: 170-200 W/mK",
                "material_ain_dielectric": "절연 내압: 15-20 kV/mm",
                "material_ain_cte": "열팽창계수(CTE): 4.5 ppm/°C",
                "material_ain_apps": "적용 분야: 고출력, 고주파, 중요한 냉각 요구사항",
                "material_si3n4_title": "질화규소 (Si₃N₄)",
                "material_si3n4_thermal": "열전도도: 60-90 W/mK",
                "material_si3n4_dielectric": "절연 내압: 15-25 kV/mm",
                "material_si3n4_cte": "열팽창계수(CTE): 3.2 ppm/°C",
                "material_si3n4_apps": "적용 분야: 자동차, 고기계적 응력 환경",
                
                // Ordering
                "ordering_title": "주문 정보",
                "ordering_subtitle": "조달 및 제조를 위한 완전한 세부 정보",
                "ordering_logistics_title": "물류 및 제조 정보",
                "ordering_hs_code": "HS 코드",
                "ordering_moq": "최소 주문 수량",
                "ordering_supply_capacity": "공급 능력",
                "ordering_origin": "원산지",
                "ordering_shipping_title": "배송 및 결제",
                "ordering_incoterm": "인코텀",
                "ordering_transportation": "운송 수단",
                "ordering_payment": "결제 조건",
                "ordering_packaging": "포장",
                "ordering_custom_note": "포괄적인 사양 및 맞춤화 옵션을 통해 당사의 DBC 세라믹 기판은 귀하의 애플리케이션의 정확한 요구 사항에 맞게 조정될 수 있어, 가장 까다로운 환경에서도 최적의 성능과 신뢰성을 보장합니다.",
                "btn_request_quote": "맞춤형 견적 요청",
                
                // Gallery
                "gallery_title": "DBC 제품 갤러리",
                "gallery_subtitle": "고품질 직접 접합 동 세라믹 기판",
                
                // CTA
                "cta_title": "고출력 DBC 솔루션이 필요하십니까?",
                "cta_description": "당사 엔지니어링 팀은 까다로운 전력전자 애플리케이션을 위한 맞춤형 DBC 솔루션을 전문으로 합니다. 전문 상담 및 평가용 샘플을 받아보세요.",
                "cta_tech_support": "기술 상담",
                "cta_tech_support_desc": "전력전자 전문 엔지니어링 지원",
                "cta_prototyping": "신속한 프로토타이핑",
                "cta_prototyping_desc": "2-3주 내 맞춤형 설계 제공",
                "btn_contact_us": "지금 문의하기",
                "cta_phone": "+86-147-4537-3293",
                
                // Footer (일관성 유지)
                "footer_description": "Jimei Materials는 2016년 설립 이래 전력전자 및 열 관리 응용 분야를 위한 세라믹 기판을 제조해 왔습니다.",
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
                "dbc_page_title": "Direct Bonded Copper (DBC) Keramiksubstrate | Jimei Materials",
                "dbc_page_description": "Hochleistungs-Direct Bonded Copper (DBC) Keramiksubstrate für IGBT-Module, EV-Leistungssysteme und industrielle Antriebe mit Anforderungen an überlegene Wärmeableitung und elektrische Isolierung.",
                "dbc_page_keywords": "DBC Keramiksubstrat, Direct Bonded Copper, IGBT Substrat, Leistungselektronik, Wärmemanagement, Aluminiumnitrid, Aluminiumoxid, Hochleistung, Automotive-Elektronik, EV-Leistungsmodule",
                "og_title": "DBC Keramiksubstrate | Direct Bonded Copper Lösungen | Jimei Materials",
                "og_description": "Hochleistungs-Direct Bonded Copper (DBC) Keramiksubstrate für IGBT-Module, EV-Leistungssysteme und industrielle Antriebe mit überlegener Wärmeableitung.",
                "twitter_title": "DBC Keramiksubstrate | Direct Bonded Copper Lösungen | Jimei Materials",
                "twitter_description": "Hochleistungs-Direct Bonded Copper (DBC) Keramiksubstrate für IGBT-Module, EV-Leistungssysteme und industrielle Antriebe mit überlegener Wärmeableitung.",

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
                "nav_language": "Sprache",
                "nav_request_quote": "Angebot anfordern",
                
                // Breadcrumbs
                "breadcrumb_home": "Startseite",
                "breadcrumb_products": "Produkte",
                "breadcrumb_dbc": "DBC-Substrate",
                
                // Hero Section
                "dbc_main_title": "Direct Bonded Copper (DBC) Keramiksubstrate",
                "dbc_subtitle": "Hochleistungs-Keramiksubstrate für überlegenes Wärmemanagement und elektrische Isolierung in anspruchsvoller Leistungselektronik",
                "feature_high_power": "Hohe Leistungsfähigkeit",
                "feature_excellent_thermal": "Ausgezeichnete Wärmeleitfähigkeit",
                "feature_strong_bond": "Starke Kupfer-Keramik-Verbindung",
                "feature_cte_matched": "CTE-angepasst an Leistungsbauteile",
                
                // Overview
                "overview_title": "DBC-Technologie-Übersicht",
                "overview_description": "Direct Bonded Copper (DBC) ist ein Verfahren, bei dem eine dicke Kupferschicht durch eine Hochtemperatur-Oxidations- und Diffusionsreaktion direkt mit einem Keramiksubstrat, typischerweise Aluminiumoxid (Al₂O₃) oder Aluminiumnitrid (AlN), verbunden wird. Während der DBC-Fertigung wird Kupferfolie auf die Keramik gelegt und in einer kontrollierten Atmosphäre auf 1065–1085°C erhitzt, wodurch eine starke, hermetische Verbindung zwischen Kupfer und Keramik entsteht.",
                "overview_description2": "Dies führt zu einem Substrat mit ausgezeichneter Wärmeleitfähigkeit, hoher elektrischer Isolierung und robuster mechanischer Festigkeit. DBC-Substrate werden aufgrund ihrer Fähigkeit, Wärme effizient abzuleiten und hohe Ströme zu führen, während sie elektrisch isoliert bleiben, häufig in der Leistungselektronik, bei Halbleiter-Laserkühlkörpern und thermoelektrischen Kühlern eingesetzt.",
                "tech_high_power": "Hochleistungsfähigkeit",
                "tech_up_to": "Bis zu 500µm Kupferdicke",
                
                // Features
                "features_title": "Schlüsselmerkmale & Vorteile",
                "features_subtitle": "Fortschrittliche DBC-Technologie für anspruchsvolle Leistungsanwendungen",
                "feature_thermal_title": "Überlegenes Wärmemanagement",
                "feature_thermal_desc": "Ausgezeichnete Wärmeableitung mit Wärmeleitfähigkeit bis zu 200 W/mK (AlN).",
                "feature_power_title": "Hohe Leistungsfähigkeit",
                "feature_power_desc": "Dicke Kupferschichten (bis zu 500µm) für hohe Stromtragfähigkeit.",
                "feature_isolation_title": "Elektrische Isolierung",
                "feature_isolation_desc": "Hohe Durchschlagsfestigkeit (>10 kV/mm) für zuverlässige elektrische Isolierung.",
                "feature_bond_title": "Starke mechanische Verbindung",
                "feature_bond_desc": "Hochtemperatur-Verbindung gewährleistet ausgezeichnete Haftung und Zuverlässigkeit.",
                "feature_cte_title": "Angepasster CTE",
                "feature_cte_desc": "Wärmeausdehnungskoeffizient (CTE) eng angepasst an Silizium und Leistungsbauteile für reduzierte Spannungen.",
                "feature_robust_title": "Robust & Langlebig",
                "feature_robust_desc": "Ausgezeichnete mechanische Festigkeit und Beständigkeit gegenüber Temperaturwechseln.",
                
                // Specifications
                "specifications_title": "Technische Spezifikationen",
                "specifications_subtitle": "Umfassende Spezifikationen für DBC-Keramiksubstrate",
                "spec_basic_title": "Basis-Spezifikationen",
                "spec_ceramic_materials": "Keramische Materialien",
                "spec_ceramic_thickness": "Keramikdicke",
                "spec_copper_thickness": "Kupferdicke",
                "spec_copper_purity": "Kupferreinheit",
                "spec_surface_finish": "Oberflächenfinish",
                "spec_surface_options": "Gebondet, Galvanisiert, Lötbar, Vergoldet, Versilbert",
                "spec_dimensions": "Abmessungen",
                "spec_max_size": "Kundenspezifische Größen bis 300mm x 300mm",
                "spec_performance_title": "Performance-Spezifikationen",
                "spec_tolerance_ceramic": "Toleranz (Keramik)",
                "spec_tolerance_copper": "Toleranz (Kupfer)",
                "spec_thermal_conductivity": "Wärmeleitfähigkeit",
                "spec_thermal_value": "Bis zu 170 W/m·K (AlN), 24-28 W/m·K (Al₂O₃)",
                "spec_dielectric_strength": "Durchschlagsfestigkeit",
                "spec_temperature_range": "Betriebstemperatur",
                "spec_bond_strength": "Verbundfestigkeit",
                
                // Applications
                "applications_title": "Typische Anwendungen",
                "applications_subtitle": "DBC-Substrate ermöglichen Hochleistungsanwendungen in verschiedenen Industrien",
                "app_igbt_title": "IGBT-Leistungsmodule",
                "app_igbt_desc": "Hochleistungs-IGBT-Module für industrielle Motorantriebe, EV-Wechselrichter und Systeme erneuerbarer Energie.",
                "app_ev_title": "EV-Leistungssysteme",
                "app_ev_desc": "Stromwandler, Wechselrichter und Batteriemanagementsysteme für Elektrofahrzeuge.",
                "app_renewable_title": "Erneuerbare Energie",
                "app_renewable_desc": "Solarwechselrichter, Windkraft-Umrichter und Energiespeichersysteme.",
                "app_industrial_title": "Industrielle Antriebe",
                "app_industrial_desc": "Motorcontroller, Netzteile und industrielle Automatisierungssysteme.",
                "app_led_title": "Hochleistungs-LED",
                "app_led_desc": "Wärmemanagement-Substrate für Autoscheinwerfer und Industriebeleuchtung.",
                "app_telecom_title": "Telekommunikation",
                "app_telecom_desc": "Leistungsverstärker und HF-Module für Kommunikationsinfrastruktur.",
                
                // Materials
                "materials_title": "Keramikmaterial-Vergleich",
                "materials_subtitle": "Wählen Sie das optimale Keramikmaterial für Ihre Leistungsanwendung",
                "material_alumina_title": "Aluminiumoxid (Al₂O₃)",
                "material_alumina_thermal": "Wärmeleitfähigkeit: 24-28 W/mK",
                "material_alumina_dielectric": "Durchschlagsfestigkeit: 15-20 kV/mm",
                "material_alumina_cte": "CTE: 7,2 ppm/°C",
                "material_alumina_apps": "Anwendungen: Standard-Leistungsmodule, universell",
                "material_ain_title": "Aluminiumnitrid (AlN)",
                "material_ain_thermal": "Wärmeleitfähigkeit: 170-200 W/mK",
                "material_ain_dielectric": "Durchschlagsfestigkeit: 15-20 kV/mm",
                "material_ain_cte": "CTE: 4,5 ppm/°C",
                "material_ain_apps": "Anwendungen: Hochleistung, Hochfrequenz, kritische Kühlung",
                "material_si3n4_title": "Siliciumnitrid (Si₃N₄)",
                "material_si3n4_thermal": "Wärmeleitfähigkeit: 60-90 W/mK",
                "material_si3n4_dielectric": "Durchschlagsfestigkeit: 15-25 kV/mm",
                "material_si3n4_cte": "CTE: 3,2 ppm/°C",
                "material_si3n4_apps": "Anwendungen: Automotive, hohe mechanische Belastung",
                
                // Ordering
                "ordering_title": "Bestellinformationen",
                "ordering_subtitle": "Vollständige Details zur Beschaffung und Fertigung",
                "ordering_logistics_title": "Logistik & Fertigung",
                "ordering_hs_code": "HS-Code",
                "ordering_moq": "Mindestbestellmenge",
                "ordering_supply_capacity": "Lieferkapazität",
                "ordering_origin": "Ursprungsland",
                "ordering_shipping_title": "Versand & Zahlung",
                "ordering_incoterm": "Incoterm",
                "ordering_transportation": "Transport",
                "ordering_payment": "Zahlungsbedingungen",
                "ordering_packaging": "Verpackung",
                "ordering_custom_note": "Mit einem umfassenden Spezifikationsspektrum und Anpassungsoptionen können unsere DBC-Keramiksubstrate auf die genauen Anforderungen Ihrer Anwendung zugeschnitten werden und so optimale Performance und Zuverlässigkeit selbst in den anspruchsvollsten Umgebungen gewährleisten.",
                "btn_request_quote": "Kundenspezifisches Angebot anfordern",
                
                // Gallery
                "gallery_title": "DBC-Produktgalerie",
                "gallery_subtitle": "Hochwertige Direct Bonded Copper Keramiksubstrate",
                
                // CTA
                "cta_title": "Benötigen Sie Hochleistungs-DBC-Lösungen?",
                "cta_description": "Unser Ingenieurteam ist spezialisiert auf kundenspezifische DBC-Lösungen für anspruchsvolle Leistungselektronik-Anwendungen. Erhalten Sie Expertenberatung und Muster zur Evaluierung.",
                "cta_tech_support": "Technische Beratung",
                "cta_tech_support_desc": "Experten-Support für Leistungselektronik",
                "cta_prototyping": "Schnelles Prototyping",
                "cta_prototyping_desc": "Kundenspezifische Designs in 2-3 Wochen",
                "btn_contact_us": "Kontaktieren Sie uns",
                "cta_phone": "+86-147-4537-3293",
                
                // Footer
                "footer_description": "Seit 2016 führender Hersteller von Keramikmetallisierungssubstraten für Leistungselektronik und Wärmemanagement-Anwendungen.",
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