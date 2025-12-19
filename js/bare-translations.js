// translations.js - Internationalization for Jimei Materials Website
// Author: Jimei Materials Development Team
// Version: 1.0.0
// Last Updated: 2025

(function() {
    'use strict';

    // Translations object
    const translations = {
        en: {

                    // Page metadata
            "bare_page_title": "Bare Ceramic Substrates | Alumina, AlN, Si₃N₄, SiC, Zirconia | Jimei Materials",
            "bare_page_description": "High-performance bare ceramic substrates including Alumina (Al₂O₃), Aluminum Nitride (AlN), Silicon Nitride (Si₃N₄), Silicon Carbide (SiC), and Zirconia (ZrO₂) for demanding applications.",
            "bare_page_keywords": "bare ceramic substrate, alumina substrate, AlN substrate, silicon nitride, SiC substrate, zirconia ceramic, thermal management, semiconductor, power electronics",
            "og_title": "Bare Ceramic Substrates | Advanced Ceramic Solutions | Jimei Materials",
            "og_description": "Premium bare ceramic substrates including Alumina, AlN, Si₃N₄, SiC, and Zirconia for high-temperature and demanding applications.",
            "twitter_title": "Bare Ceramic Substrates | Advanced Ceramic Solutions | Jimei Materials",
            "twitter_description": "Premium bare ceramic substrates including Alumina, AlN, Si₃N₄, SiC, and Zirconia for high-temperature and demanding applications.",
            
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
            
            // Breadcrumbs
            "breadcrumb_home": "Home",
            "breadcrumb_products": "Products",
            "breadcrumb_bare": "Bare Ceramic Substrates",
            
            // Hero Section
            "bare_main_title": "Bare Ceramic Substrates",
            "bare_subtitle": "Premium ceramic substrates for demanding high-temperature applications requiring exceptional thermal, electrical, and mechanical performance",
            "feature_high_temp": "High-temperature resistance",
            "feature_excellent_thermal": "Excellent thermal management",
            "feature_superior_electrical": "Superior electrical insulation",
            "feature_mechanical_strength": "Exceptional mechanical strength",
            
            // Technology Overview
            "overview_title": "Bare Ceramic Technology",
            "overview_description": "Bare ceramic substrates are uncoated, pure ceramic materials that provide exceptional thermal, electrical, and mechanical properties for demanding applications. These substrates are manufactured through advanced processes including dry pressing, isostatic pressing, hot pressing, and sintering to achieve precise dimensional tolerances and superior material properties.",
            "overview_description2": "Available in multiple material grades including Alumina (Al₂O₃), Aluminum Nitride (AlN), Silicon Nitride (Si₃N₄), Silicon Carbide (SiC), and Zirconia (ZrO₂), our bare ceramic substrates offer tailored solutions for semiconductor equipment, power electronics, automotive systems, and industrial applications where standard materials cannot meet performance requirements.",
            
            // Materials Section
            "materials_title": "Our Ceramic Materials",
            "materials_subtitle": "Comprehensive range of advanced ceramic materials for various applications",
            
            // Alumina
            "material_alumina_title": "Alumina (Al₂O₃)",
            "material_alumina_subtitle": "Cost-effective ceramic with excellent mechanical strength",
            "key_features_title": "Key Features",
            "feature_high_strength": "High mechanical strength",
            "feature_excellent_hardness": "Excellent hardness",
            "feature_good_insulation": "Good electrical insulation",
            "feature_corrosion_resistant": "Corrosion resistant",
            "feature_cost_effective": "Cost-effective",
            "applications_title": "Typical Applications",
            "app_semiconductor": "Semiconductor equipment",
            "app_hybrid_circuits": "Hybrid circuits",
            "app_power_modules": "High-power modules",
            "app_automotive": "Automotive electronics",
            "app_led": "LED substrates",
            "specifications_title": "Specifications",
            "spec_material": "Material",
            "spec_purity": "Purity",
            "spec_thickness": "Thickness",
            "spec_thermal": "Thermal Conductivity",
            "spec_dielectric": "Dielectric Strength",
            "spec_density": "Density",
            "gallery_title": "Alumina Ceramic Samples",
            
            // Aluminum Nitride
            "material_ain_title": "Aluminum Nitride (AlN)",
            "material_ain_subtitle": "High thermal conductivity for demanding heat dissipation",
            "feature_high_thermal": "High thermal conductivity",
            "feature_low_cte": "Low CTE",
            "feature_excellent_insulation": "Excellent electrical insulation",
            "feature_chemical_stable": "Chemically stable",
            "feature_si_matched": "Si-matched CTE",
            "app_semiconductor_equip": "Semiconductor equipment",
            "app_heater_susceptors": "Heater susceptors",
            "app_wafer_chucks": "Wafer chucks",
            "app_high_power": "High-power electronics",
            "app_rf_devices": "RF/Microwave devices",
            
            // Silicon Nitride
            "material_si3n4_title": "Silicon Nitride (Si₃N₄)",
            "material_si3n4_subtitle": "Exceptional fracture toughness and thermal shock resistance",
            "feature_fracture_tough": "High fracture toughness",
            "feature_thermal_shock": "Thermal shock resistant",
            "feature_wear_resistant": "Wear resistant",
            "app_bearings": "High-speed bearings",
            "app_cutting_tools": "Cutting tools",
            "app_turbochargers": "Turbocharger rotors",
            "app_aerospace": "Aerospace components",
            "app_wear_parts": "Wear-resistant parts",
            
            // Silicon Carbide
            "material_sic_title": "Silicon Carbide (SiC)",
            "material_sic_subtitle": "Ultra-high performance for extreme conditions",
            "feature_extreme_hard": "Extreme hardness",
            "feature_high_thermal_sic": "High thermal conductivity",
            "feature_chemical_resist": "Chemical resistance",
            "feature_wear_resist_sic": "Wear resistance",
            "feature_high_temp": "High temperature stable",
            "app_kiln_furniture": "Kiln furniture",
            "app_mechanical_seals": "Mechanical seals",
            "app_semiconductor_equip_sic": "Semiconductor equipment",
            "app_aerospace_sic": "Aerospace components",
            "app_wear_parts_sic": "Wear-resistant parts",
            
            // Zirconia
            "material_zirconia_title": "Zirconia (ZrO₂)",
            "material_zirconia_subtitle": "Unparalleled fracture toughness and biocompatibility",
            "feature_fracture_tough_z": "High fracture toughness",
            "feature_wear_resist_z": "Wear resistance",
            "feature_biocompatible": "Biocompatible",
            "feature_chemical_stable_z": "Chemically stable",
            "feature_low_thermal": "Low thermal conductivity",
            "app_cutting_tools_z": "Cutting tools",
            "app_wear_parts_z": "Wear parts",
            "app_medical_implants": "Medical implants",
            "app_aerospace_z": "Aerospace components",
            "app_thermal_barrier": "Thermal barriers",
            
            // Comparison Table
            "comparison_title": "Material Property Comparison",
            "comparison_subtitle": "Compare key properties to select the optimal ceramic material",
            "comparison_property": "Property",
            "material_alumina": "Alumina",
            "material_aln": "AlN",
            "material_si3n4": "Si₃N₄",
            "material_sic": "SiC",
            "material_zirconia": "Zirconia",
            "property_thermal": "Thermal Conductivity (W/m·K)",
            "property_dielectric": "Dielectric Strength (kV/mm)",
            "property_cte": "CTE (ppm/°C)",
            "property_density": "Density (g/cm³)",
            "property_hardness": "Hardness (GPa)",
            "property_cost": "Relative Cost",
            "cost_low": "Low",
            "cost_high": "High",
            "cost_medium": "Medium",
            
            // Ordering Information
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
            "ordering_custom_note": "With comprehensive specifications and customization options, our bare ceramic substrates can be tailored to meet the precise needs of your application, ensuring optimal performance and reliability in even the most demanding environments.",
            "btn_request_quote": "Request A Custom Quote",
            
            // CTA Section
            "cta_title": "Need Expert Ceramic Solutions?",
            "cta_description": "Our engineering team specializes in custom ceramic solutions for demanding applications. Get expert consultation and samples for evaluation.",
            "cta_tech_support": "Technical Consultation",
            "cta_tech_support_desc": "Expert material selection support",
            "cta_prototyping": "Rapid Prototyping",
            "cta_prototyping_desc": "Custom designs in 2-3 weeks",
            "btn_contact_us": "Contact Us Today",
            "cta_phone": "+86-147-4537-3293",
            
            // Footer
            "footer_description": "Leading manufacturer of ceramic substrates for power electronics and thermal management applications since 2016. ISO 14001:2015 certified with global manufacturing capabilities.",
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

                // 页面元数据
            "bare_page_title": "裸陶瓷基板 | 氧化铝(Al₂O₃)、氮化铝(AIN)、氮化硅(Si₃N₄)、碳化硅(SiC)、氧化锆(ZrO₂) | 集美材料",
            "bare_page_description": "集美材料提供高性能裸陶瓷基板，包括氧化铝、氮化铝、氮化硅、碳化硅及氧化锆，适用于半导体设备、功率电子及汽车系统等严苛应用。",
            "bare_page_keywords": "裸陶瓷基板, 氧化铝基板, 氮化铝基板, 氮化硅基板, 碳化硅基板, 氧化锆陶瓷, 热管理, 半导体, 功率电子",
            "og_title": "裸陶瓷基板 | 高性能陶瓷材料解决方案 | 集美材料",
            "og_description": "提供氧化铝、氮化铝、氮化硅、碳化硅及氧化锆等高性能裸陶瓷基板，适用于高温及严苛工况下的各类应用。",
            "twitter_title": "裸陶瓷基板 | 高性能陶瓷材料解决方案 | 集美材料",
            "twitter_description": "提供氧化铝、氮化铝、氮化硅、碳化硅及氧化锆等高性能裸陶瓷基板，适用于高温及严苛工况下的各类应用。",
            
            // 导航（与全站一致）
            "nav_home": "首页",
            "nav_products": "产品中心",
            "nav_dpc": "直接镀铜陶瓷基板 (DPC)",
            "nav_dbc": "直接覆铜陶瓷基板 (DBC)",
            "nav_bare": "裸陶瓷基板",
            "nav_all_products": "全部产品",
            "nav_resources": "技术资源",
            "nav_about": "关于集美",
            "nav_contact": "联系我们",
            "nav_request_quote": "在线询价",
            
            // 面包屑导航
            "breadcrumb_home": "首页",
            "breadcrumb_products": "产品中心",
            "breadcrumb_bare": "裸陶瓷基板",
            
            // 页面标题区 - 强调高性能与极端环境
            "bare_main_title": "裸陶瓷基板",
            "bare_subtitle": "为需要卓越热学、电学及机械性能的严苛高温应用而生的优质陶瓷基板",
            "feature_high_temp": "耐高温",
            "feature_excellent_thermal": "优异的热管理性能",
            "feature_superior_electrical": "优异的电绝缘性",
            "feature_mechanical_strength": "卓越的机械强度",
            
            // 技术概述 - 阐明工艺与价值
            "overview_title": "裸陶瓷基板技术",
            "overview_description": "裸陶瓷基板是未经涂覆的纯陶瓷材料，为严苛应用提供卓越的热学、电学和机械性能。这些基板通过干压、等静压、热压及烧结等先进工艺制造，以实现精密的尺寸公差和优越的材料特性。",
            "overview_description2": "我们提供包括氧化铝、氮化铝、氮化硅、碳化硅及氧化锆在内的多种材料等级。当标准材料无法满足性能要求时，我们的裸陶瓷基板可为半导体设备、功率电子、汽车系统及工业应用提供量身定制的解决方案。",
            
            // 材料总览
            "materials_title": "我们的陶瓷材料系列",
            "materials_subtitle": "适用于各类应用的全面先进陶瓷材料",
            
            // 氧化铝 (Al₂O₃)
            "material_alumina_title": "氧化铝 (Al₂O₃)",
            "material_alumina_subtitle": "具有优异机械强度的经济型陶瓷",
            "key_features_title": "核心特性",
            "feature_high_strength": "高机械强度",
            "feature_excellent_hardness": "高硬度",
            "feature_good_insulation": "良好的电绝缘性",
            "feature_corrosion_resistant": "耐腐蚀",
            "feature_cost_effective": "高性价比",
            "applications_title": "典型应用",
            "app_semiconductor": "半导体制造设备",
            "app_hybrid_circuits": "混合集成电路基板",
            "app_power_modules": "大功率模块衬底",
            "app_automotive": "汽车电子",
            "app_led": "LED衬底",
            "specifications_title": "规格参数",
            "spec_material": "材料",
            "spec_purity": "纯度",
            "spec_thickness": "厚度",
            "spec_thermal": "导热系数",
            "spec_dielectric": "介电强度",
            "spec_density": "密度",
            "gallery_title": "氧化铝陶瓷样品",
            
            // 氮化铝 (AlN)
            "material_ain_title": "氮化铝 (AlN)",
            "material_ain_subtitle": "高导热性，满足严苛散热需求",
            "feature_high_thermal": "高导热系数",
            "feature_low_cte": "低热膨胀系数",
            "feature_excellent_insulation": "优异的电绝缘性",
            "feature_chemical_stable": "化学性质稳定",
            "feature_si_matched": "与硅匹配的热膨胀系数",
            "app_semiconductor_equip": "半导体设备（静电吸盘、加热器）",
            "app_heater_susceptors": "加热器基座",
            "app_wafer_chucks": "晶圆吸盘",
            "app_high_power": "高功率电子器件",
            "app_rf_devices": "射频/微波器件",
            
            // 氮化硅 (Si₃N₄)
            "material_si3n4_title": "氮化硅 (Si₃N₄)",
            "material_si3n4_subtitle": "卓越的断裂韧性与抗热震性",
            "feature_fracture_tough": "高断裂韧性",
            "feature_thermal_shock": "抗热震性强",
            "feature_wear_resistant": "耐磨",
            "app_bearings": "高速轴承",
            "app_cutting_tools": "切削刀具",
            "app_turbochargers": "涡轮增压器转子",
            "app_aerospace": "航空航天部件",
            "app_wear_parts": "耐磨部件",
            
            // 碳化硅 (SiC)
            "material_sic_title": "碳化硅 (SiC)",
            "material_sic_subtitle": "适用于极端条件的超高性能陶瓷",
            "feature_extreme_hard": "极高硬度",
            "feature_high_thermal_sic": "高热导率",
            "feature_chemical_resist": "耐化学腐蚀",
            "feature_wear_resist_sic": "耐磨",
            "feature_high_temp": "高温稳定性好",
            "app_kiln_furniture": "窑具",
            "app_mechanical_seals": "机械密封环",
            "app_semiconductor_equip_sic": "半导体工艺设备部件",
            "app_aerospace_sic": "航空航天部件",
            "app_wear_parts_sic": "耐磨部件",
            
            // 氧化锆 (ZrO₂)
            "material_zirconia_title": "氧化锆 (ZrO₂)",
            "material_zirconia_subtitle": "无与伦比的断裂韧性与生物相容性",
            "feature_fracture_tough_z": "高断裂韧性",
            "feature_wear_resist_z": "耐磨",
            "feature_biocompatible": "生物相容性",
            "feature_chemical_stable_z": "化学性质稳定",
            "feature_low_thermal": "低导热性（热绝缘）",
            "app_cutting_tools_z": "切削刀具",
            "app_wear_parts_z": "耐磨部件",
            "app_medical_implants": "医疗植入体",
            "app_aerospace_z": "航空航天部件",
            "app_thermal_barrier": "热障涂层基材",
            
            // 材料对比表
            "comparison_title": "材料性能对比",
            "comparison_subtitle": "对比关键性能参数，选择最优陶瓷材料",
            "comparison_property": "性能参数",
            "material_alumina": "氧化铝",
            "material_aln": "氮化铝",
            "material_si3n4": "氮化硅",
            "material_sic": "碳化硅",
            "material_zirconia": "氧化锆",
            "property_thermal": "导热系数 (W/m·K)",
            "property_dielectric": "介电强度 (kV/mm)",
            "property_cte": "热膨胀系数 (ppm/°C)",
            "property_density": "密度 (g/cm³)",
            "property_hardness": "硬度 (GPa)",
            "property_cost": "相对成本",
            "cost_low": "低",
            "cost_high": "高",
            "cost_medium": "中",
            
            // 订购信息
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
            "ordering_custom_note": "凭借全面的规格选项与定制化能力，我们的裸陶瓷基板可根据您的具体应用需求进行量身定制，确保在最严苛的环境中也能实现最优的性能与长期可靠性。",
            "btn_request_quote": "申请定制报价",
            
            // CTA区 - 强调材料专家支持
            "cta_title": "需要陶瓷材料专家支持？",
            "cta_description": "我们的工程团队专注于为严苛应用提供定制化陶瓷解决方案。获取专家咨询与评估样品。",
            "cta_tech_support": "技术咨询",
            "cta_tech_support_desc": "专家级材料选型支持",
            "cta_prototyping": "快速打样",
            "cta_prototyping_desc": "定制设计周期2-3周",
            "btn_contact_us": "立即联系我们",
            "cta_phone": "+86-147-4537-3293",
            
            // 页脚（风格统一）
            "footer_description": "集美材料——专注于高性能陶瓷基板研发与制造，为全球功率电子及热管理应用提供可靠解决方案。自2016年成立以来，凭借ISO 14001:2015体系认证与先进制程，服务各行业领先客户。",
            "footer_products": "产品中心",
            "footer_company": "关于集美",
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

            // Page metadata
            "bare_page_title": "未金属化セラミック基板 | アルミナ、AlN、Si₃N₄、SiC、ジルコニア | Jimei Materials",
            "bare_page_description": "アルミナ（Al₂O₃）、窒化アルミニウム（AlN）、窒化ケイ素（Si₃N₄）、炭化ケイ素（SiC）、ジルコニア（ZrO₂）を含む高性能未金属化セラミック基板。過酷なアプリケーション要件に対応します。",
            "bare_page_keywords": "未金属化セラミック基板, アルミナ基板, AlN基板, 窒化ケイ素, SiC基板, ジルコニアセラミック, 熱管理, 半導体, パワーエレクトロニクス",
            "og_title": "未金属化セラミック基板 | 先進セラミックソリューション | Jimei Materials",
            "og_description": "アルミナ、AlN、Si₃N₄、SiC、ジルコニアを含む高級未金属化セラミック基板。高温および過酷なアプリケーションに最適です。",
            "twitter_title": "未金属化セラミック基板 | 先進セラミックソリューション | Jimei Materials",
            "twitter_description": "アルミナ、AlN、Si₃N₄、SiC、ジルコニアを含む高級未金属化セラミック基板。高温および過酷なアプリケーションに最適です。",
            
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
            
            // Breadcrumbs
            "breadcrumb_home": "ホーム",
            "breadcrumb_products": "製品情報",
            "breadcrumb_bare": "未金属化セラミック基板",
            
            // Hero Section
            "bare_main_title": "未金属化セラミック基板",
            "bare_subtitle": "優れた熱的、電気的、機械的特性が求められる高温アプリケーション向けプレミアムセラミック基板",
            "feature_high_temp": "耐高温性",
            "feature_excellent_thermal": "優れた熱管理性能",
            "feature_superior_electrical": "優れた電気絶縁性",
            "feature_mechanical_strength": "卓越した機械的強度",
            
            // Technology Overview
            "overview_title": "未金属化セラミック技術",
            "overview_description": "未金属化セラミック基板は、コーティングされていない純粋なセラミック材料であり、過酷なアプリケーションに対して優れた熱的、電気的、機械的特性を提供します。これらの基板は、精密な寸法公差と優れた材料特性を実現するために、乾式加圧成形、静水圧加圧成形、ホットプレス、焼結などの先進的なプロセスを経て製造されます。",
            "overview_description2": "アルミナ（Al₂O₃）、窒化アルミニウム（AlN）、窒化ケイ素（Si₃N₄）、炭化ケイ素（SiC）、ジルコニア（ZrO₂）を含む複数の材料グレードで利用可能な当社の未金属化セラミック基板は、半導体装置、パワーエレクトロニクス、自動車システム、産業アプリケーションにおいて、標準材料では性能要件を満たせない場合に、最適なソリューションを提供します。",
            
            // Materials Section
            "materials_title": "当社のセラミック材料",
            "materials_subtitle": "様々なアプリケーションに対応する幅広い先進セラミック材料",
            
            // Alumina
            "material_alumina_title": "アルミナ (Al₂O₃)",
            "material_alumina_subtitle": "優れた機械的強度を備えたコスト効率の高いセラミック",
            "key_features_title": "主な特長",
            "feature_high_strength": "高い機械的強度",
            "feature_excellent_hardness": "優れた硬度",
            "feature_good_insulation": "良好な電気絶縁性",
            "feature_corrosion_resistant": "耐食性",
            "feature_cost_effective": "コスト効率に優れる",
            "applications_title": "代表的なアプリケーション",
            "app_semiconductor": "半導体装置",
            "app_hybrid_circuits": "ハイブリッド回路",
            "app_power_modules": "高出力モジュール",
            "app_automotive": "自動車電子機器",
            "app_led": "LED基板",
            "specifications_title": "仕様",
            "spec_material": "材料",
            "spec_purity": "純度",
            "spec_thickness": "厚さ",
            "spec_thermal": "熱伝導率",
            "spec_dielectric": "絶縁破壊電圧",
            "spec_density": "密度",
            "gallery_title": "アルミナセラミックサンプル",
            
            // Aluminum Nitride
            "material_ain_title": "窒化アルミニウム (AlN)",
            "material_ain_subtitle": "過酷な放熱要件に対応する高熱伝導性",
            "feature_high_thermal": "高熱伝導性",
            "feature_low_cte": "低熱膨張係数",
            "feature_excellent_insulation": "優れた電気絶縁性",
            "feature_chemical_stable": "化学的に安定",
            "feature_si_matched": "シリコンに適合した熱膨張係数",
            "app_semiconductor_equip": "半導体装置",
            "app_heater_susceptors": "ヒーターサセプタ",
            "app_wafer_chucks": "ウェハーチャック",
            "app_high_power": "高出力エレクトロニクス",
            "app_rf_devices": "RF/マイクロ波デバイス",
            
            // Silicon Nitride
            "material_si3n4_title": "窒化ケイ素 (Si₃N₄)",
            "material_si3n4_subtitle": "卓越した破壊靭性と耐熱衝撃性",
            "feature_fracture_tough": "高い破壊靭性",
            "feature_thermal_shock": "耐熱衝撃性",
            "feature_wear_resistant": "耐摩耗性",
            "app_bearings": "高速ベアリング",
            "app_cutting_tools": "切削工具",
            "app_turbochargers": "ターボチャージャーロータ",
            "app_aerospace": "航空宇宙部品",
            "app_wear_parts": "耐摩耗部品",
            
            // Silicon Carbide
            "material_sic_title": "炭化ケイ素 (SiC)",
            "material_sic_subtitle": "極限環境下での超高性能",
            "feature_extreme_hard": "極めて高い硬度",
            "feature_high_thermal_sic": "高熱伝導性",
            "feature_chemical_resist": "耐薬品性",
            "feature_wear_resist_sic": "耐摩耗性",
            "feature_high_temp": "高温安定性",
            "app_kiln_furniture": "キルンファニチャー",
            "app_mechanical_seals": "機械シール",
            "app_semiconductor_equip_sic": "半導体装置",
            "app_aerospace_sic": "航空宇宙部品",
            "app_wear_parts_sic": "耐摩耗部品",
            
            // Zirconia
            "material_zirconia_title": "ジルコニア (ZrO₂)",
            "material_zirconia_subtitle": "比類のない破壊靭性と生体適合性",
            "feature_fracture_tough_z": "高い破壊靭性",
            "feature_wear_resist_z": "耐摩耗性",
            "feature_biocompatible": "生体適合性",
            "feature_chemical_stable_z": "化学的に安定",
            "feature_low_thermal": "低熱伝導性",
            "app_cutting_tools_z": "切削工具",
            "app_wear_parts_z": "摩耗部品",
            "app_medical_implants": "医療用インプラント",
            "app_aerospace_z": "航空宇宙部品",
            "app_thermal_barrier": "熱遮断コーティング",
            
            // Comparison Table
            "comparison_title": "材料特性比較",
            "comparison_subtitle": "主要特性を比較して最適なセラミック材料を選択",
            "comparison_property": "特性",
            "material_alumina": "アルミナ",
            "material_aln": "AlN",
            "material_si3n4": "Si₃N₄",
            "material_sic": "SiC",
            "material_zirconia": "ジルコニア",
            "property_thermal": "熱伝導率 (W/m·K)",
            "property_dielectric": "絶縁破壊電圧 (kV/mm)",
            "property_cte": "熱膨張係数 (ppm/°C)",
            "property_density": "密度 (g/cm³)",
            "property_hardness": "硬度 (GPa)",
            "property_cost": "相対コスト",
            "cost_low": "低",
            "cost_high": "高",
            "cost_medium": "中",
            
            // Ordering Information
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
            "ordering_custom_note": "当社の未金属化セラミック基板は、包括的な仕様とカスタマイズオプションを備えており、お客様のアプリケーションの正確なニーズに合わせて調整可能です。これにより、最も過酷な環境下においても、最適な性能と信頼性を確保します。",
            "btn_request_quote": "カスタム見積もりを依頼",
            
            // CTA Section
            "cta_title": "専門的なセラミックソリューションが必要ですか？",
            "cta_description": "当社のエンジニアリングチームは、過酷なアプリケーション向けのカスタムセラミックソリューションを専門としています。専門家による相談および評価用サンプルをご提供します。",
            "cta_tech_support": "技術相談",
            "cta_tech_support_desc": "材料選択の専門的サポート",
            "cta_prototyping": "迅速な試作",
            "cta_prototyping_desc": "カスタム設計を2-3週間でご提供",
            "btn_contact_us": "今すぐお問い合わせ",
            "cta_phone": "+86-147-4537-3293",
            
            // Footer (統一維持)
            "footer_description": "2016年創業以来、パワーエレクトロニクスおよび熱管理アプリケーション向けの高信頼性セラミック基板を提供するリーディングメーカーです。ISO 14001:2015認証を取得し、グローバルな製造・供給体制を有しています。",
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
            // Page metadata
            "bare_page_title": "비금속화 세라믹 기판 | Alumina, AlN, Si₃N₄, SiC, 지르코니아 | Jimei Materials",
            "bare_page_description": "Alumina(Al₂O₃), Aluminum Nitride(AlN), Silicon Nitride(Si₃N₄), Silicon Carbide(SiC) 및 Zirconia(ZrO₂)를 포함한 고성능 비금속화 세라믹 기판. 까다로운 애플리케이션을 위한 솔루션을 제공합니다.",
            "bare_page_keywords": "비금속화 세라믹 기판, 알루미나 기판, AlN 기판, 질화규소, SiC 기판, 지르코니아 세라믹, 열 관리, 반도체, 전력전자",
            "og_title": "비금속화 세라믹 기판 | 고급 세라믹 솔루션 | Jimei Materials",
            "og_description": "고온 및 까다로운 애플리케이션을 위한 Alumina, AlN, Si₃N₄, SiC, 지르코니아를 포함한 고품질 비금속화 세라믹 기판.",
            "twitter_title": "비금속화 세라믹 기판 | 고급 세라믹 솔루션 | Jimei Materials",
            "twitter_description": "고온 및 까다로운 애플리케이션을 위한 Alumina, AlN, Si₃N₄, SiC, 지르코니아를 포함한 고품질 비금속화 세라믹 기판.",
            
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
            
            // Breadcrumbs
            "breadcrumb_home": "홈",
            "breadcrumb_products": "제품",
            "breadcrumb_bare": "비금속화 세라믹 기판",
            
            // Hero Section
            "bare_main_title": "비금속화 세라믹 기판",
            "bare_subtitle": "탁월한 열적, 전기적, 기계적 성능이 요구되는 까다로운 고온 애플리케이션을 위한 고품질 세라믹 기판",
            "feature_high_temp": "고온 내성",
            "feature_excellent_thermal": "우수한 열 관리",
            "feature_superior_electrical": "뛰어난 전기적 절연",
            "feature_mechanical_strength": "탁월한 기계적 강도",
            
            // Technology Overview
            "overview_title": "비금속화 세라믹 기술",
            "overview_description": "비금속화 세라믹 기판은 까다로운 애플리케이션을 위한 탁월한 열적, 전기적, 기계적 특성을 제공하는 무코팅 순수 세라믹 재료입니다. 이러한 기판은 정밀한 치수 공차와 우수한 재료 특성을 달성하기 위해 건식 프레싱, 아이소스태틱 프레싱, 핫 프레싱 및 소결을 포함한 고급 공정을 통해 제조됩니다.",
            "overview_description2": "Alumina(Al₂O₃), Aluminum Nitride(AlN), Silicon Nitride(Si₃N₄), Silicon Carbide(SiC) 및 Zirconia(ZrO₂)를 포함한 다양한 재료 등급으로 제공되며, 당사의 비금속화 세라믹 기판은 표준 재료로는 성능 요구 사항을 충족시킬 수 없는 반도체 장비, 전력전자, 자동차 시스템 및 산업 응용 분야를 위한 맞춤형 솔루션을 제공합니다.",
            
            // Materials Section
            "materials_title": "당사의 세라믹 재료",
            "materials_subtitle": "다양한 애플리케이션을 위한 포괄적인 고급 세라믹 재료",
            
            // Alumina
            "material_alumina_title": "알루미나 (Al₂O₃)",
            "material_alumina_subtitle": "탁월한 기계적 강도를 가진 비용 효율적인 세라믹",
            "key_features_title": "주요 특징",
            "feature_high_strength": "높은 기계적 강도",
            "feature_excellent_hardness": "우수한 경도",
            "feature_good_insulation": "양호한 전기적 절연",
            "feature_corrosion_resistant": "내식성",
            "feature_cost_effective": "비용 효율적",
            "applications_title": "주요 응용 분야",
            "app_semiconductor": "반도체 장비",
            "app_hybrid_circuits": "하이브리드 회로",
            "app_power_modules": "고출력 모듈",
            "app_automotive": "자동차 전자",
            "app_led": "LED 기판",
            "specifications_title": "사양",
            "spec_material": "재료",
            "spec_purity": "순도",
            "spec_thickness": "두께",
            "spec_thermal": "열전도도",
            "spec_dielectric": "절연 내압",
            "spec_density": "밀도",
            "gallery_title": "알루미나 세라믹 샘플",
            
            // Aluminum Nitride
            "material_ain_title": "질화알루미늄 (AlN)",
            "material_ain_subtitle": "까다로운 방열 요구 사항을 위한 고열전도성 재료",
            "feature_high_thermal": "고열전도도",
            "feature_low_cte": "낮은 열팽창계수",
            "feature_excellent_insulation": "우수한 전기적 절연",
            "feature_chemical_stable": "화학적 안정성",
            "feature_si_matched": "실리콘 정합 열팽창계수",
            "app_semiconductor_equip": "반도체 장비",
            "app_heater_susceptors": "히터 서셉터",
            "app_wafer_chucks": "웨이퍼 척",
            "app_high_power": "고출력 전자",
            "app_rf_devices": "RF/마이크로파 장치",
            
            // Silicon Nitride
            "material_si3n4_title": "질화규소 (Si₃N₄)",
            "material_si3n4_subtitle": "탁월한 파괴 인성 및 열충격 저항성",
            "feature_fracture_tough": "높은 파괴 인성",
            "feature_thermal_shock": "열충격 저항성",
            "feature_wear_resistant": "내마모성",
            "app_bearings": "고속 베어링",
            "app_cutting_tools": "절삭 공구",
            "app_turbochargers": "터보차저 로터",
            "app_aerospace": "항공우주 부품",
            "app_wear_parts": "내마모성 부품",
            
            // Silicon Carbide
            "material_sic_title": "탄화규소 (SiC)",
            "material_sic_subtitle": "극한 조건을 위한 초고성능 재료",
            "feature_extreme_hard": "극도의 경도",
            "feature_high_thermal_sic": "고열전도도",
            "feature_chemical_resist": "내화학성",
            "feature_wear_resist_sic": "내마모성",
            "feature_high_temp": "고온 안정성",
            "app_kiln_furniture": "가마 내장재",
            "app_mechanical_seals": "기계식 씰",
            "app_semiconductor_equip_sic": "반도체 장비",
            "app_aerospace_sic": "항공우주 부품",
            "app_wear_parts_sic": "내마모성 부품",
            
            // Zirconia
            "material_zirconia_title": "지르코니아 (ZrO₂)",
            "material_zirconia_subtitle": "비교할 수 없는 파괴 인성 및 생체 적합성",
            "feature_fracture_tough_z": "높은 파괴 인성",
            "feature_wear_resist_z": "내마모성",
            "feature_biocompatible": "생체 적합성",
            "feature_chemical_stable_z": "화학적 안정성",
            "feature_low_thermal": "저열전도도",
            "app_cutting_tools_z": "절삭 공구",
            "app_wear_parts_z": "마모 부품",
            "app_medical_implants": "의료용 임플란트",
            "app_aerospace_z": "항공우주 부품",
            "app_thermal_barrier": "열차단재",
            
            // Comparison Table
            "comparison_title": "재료 특성 비교",
            "comparison_subtitle": "핵심 특성을 비교하여 최적의 세라믹 재료 선택",
            "comparison_property": "특성",
            "material_alumina": "알루미나",
            "material_aln": "AlN",
            "material_si3n4": "Si₃N₄",
            "material_sic": "SiC",
            "material_zirconia": "지르코니아",
            "property_thermal": "열전도도 (W/m·K)",
            "property_dielectric": "절연 내압 (kV/mm)",
            "property_cte": "열팽창계수 (ppm/°C)",
            "property_density": "밀도 (g/cm³)",
            "property_hardness": "경도 (GPa)",
            "property_cost": "상대적 비용",
            "cost_low": "낮음",
            "cost_high": "높음",
            "cost_medium": "중간",
            
            // Ordering Information
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
            "ordering_custom_note": "포괄적인 사양 및 맞춤화 옵션을 통해 당사의 비금속화 세라믹 기판은 귀하의 애플리케이션의 정확한 요구 사항에 맞게 조정될 수 있어, 가장 까다로운 환경에서도 최적의 성능과 신뢰성을 보장합니다.",
            "btn_request_quote": "맞춤형 견적 요청",
            
            // CTA Section
            "cta_title": "전문 세라믹 솔루션이 필요하십니까?",
            "cta_description": "당사 엔지니어링 팀은 까다로운 애플리케이션을 위한 맞춤형 세라믹 솔루션을 전문으로 합니다. 전문 상담 및 평가용 샘플을 받아보세요.",
            "cta_tech_support": "기술 상담",
            "cta_tech_support_desc": "전문 재료 선정 지원",
            "cta_prototyping": "신속한 프로토타이핑",
            "cta_prototyping_desc": "2-3주 내 맞춤형 설계 제공",
            "btn_contact_us": "지금 문의하기",
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
    // Page metadata
    "bare_page_title": "Reinkeramik-Substrate | Aluminiumoxid, AlN, Si₃N₄, SiC, Zirkonoxid | Jimei Materials",
    "bare_page_description": "Hochleistungs-Reinkeramik-Substrate inklusive Aluminiumoxid (Al₂O₃), Aluminiumnitrid (AlN), Siliciumnitrid (Si₃N₄), Siliciumcarbid (SiC) und Zirkonoxid (ZrO₂) für anspruchsvolle Anwendungen.",
    "bare_page_keywords": "Reinkeramik Substrat, Aluminiumoxid Substrat, AlN Substrat, Siliciumnitrid, SiC Substrat, Zirkonoxid Keramik, Wärmemanagement, Halbleiter, Leistungselektronik",
    "og_title": "Reinkeramik-Substrate | Fortschrittliche Keramiklösungen | Jimei Materials",
    "og_description": "Premium Reinkeramik-Substrate inklusive Aluminiumoxid, AlN, Si₃N₄, SiC und Zirkonoxid für Hochtemperatur- und anspruchsvolle Anwendungen.",
    "twitter_title": "Reinkeramik-Substrate | Fortschrittliche Keramiklösungen | Jimei Materials",
    "twitter_description": "Premium Reinkeramik-Substrate inklusive Aluminiumoxid, AlN, Si₃N₄, SiC und Zirkonoxid für Hochtemperatur- und anspruchsvolle Anwendungen.",
    
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
    
    // Breadcrumbs
    "breadcrumb_home": "Startseite",
    "breadcrumb_products": "Produkte",
    "breadcrumb_bare": "Reinkeramik-Substrate",
    
    // Hero Section
    "bare_main_title": "Reinkeramik-Substrate",
    "bare_subtitle": "Premium-Keramiksubstrate für anspruchsvolle Hochtemperaturanwendungen mit außergewöhnlicher thermischer, elektrischer und mechanischer Performance",
    "feature_high_temp": "Hochtemperaturbeständigkeit",
    "feature_excellent_thermal": "Ausgezeichnetes Wärmemanagement",
    "feature_superior_electrical": "Überlegene elektrische Isolierung",
    "feature_mechanical_strength": "Außergewöhnliche mechanische Festigkeit",
    
    // Technology Overview
    "overview_title": "Reinkeramik-Technologie",
    "overview_description": "Reinkeramik-Substrate sind unversiegelte, reine Keramikmaterialien, die außergewöhnliche thermische, elektrische und mechanische Eigenschaften für anspruchsvolle Anwendungen bieten. Diese Substrate werden durch fortschrittliche Prozesse wie Trockenpressen, isostatisches Pressen, Heißpressen und Sintern hergestellt, um präzise Maßtoleranzen und überlegene Materialeigenschaften zu erreichen.",
    "overview_description2": "Verfügbar in mehreren Materialgüten einschließlich Aluminiumoxid (Al₂O₃), Aluminiumnitrid (AlN), Siliciumnitrid (Si₃N₄), Siliciumcarbid (SiC) und Zirkonoxid (ZrO₂) bieten unsere Reinkeramik-Substrate maßgeschneiderte Lösungen für Halbleiterausrüstung, Leistungselektronik, Automotive-Systeme und Industrieanwendungen, wo Standardmaterialien die Leistungsanforderungen nicht erfüllen können.",
    
    // Materials Section
    "materials_title": "Unsere Keramikmaterialien",
    "materials_subtitle": "Umfangreiche Auswahl an fortschrittlichen Keramikmaterialien für verschiedene Anwendungen",
    
    // Alumina
    "material_alumina_title": "Aluminiumoxid (Al₂O₃)",
    "material_alumina_subtitle": "Kosteneffiziente Keramik mit ausgezeichneter mechanischer Festigkeit",
    "key_features_title": "Schlüsseleigenschaften",
    "feature_high_strength": "Hohe mechanische Festigkeit",
    "feature_excellent_hardness": "Ausgezeichnete Härte",
    "feature_good_insulation": "Gute elektrische Isolierung",
    "feature_corrosion_resistant": "Korrosionsbeständig",
    "feature_cost_effective": "Kosteneffizient",
    "applications_title": "Typische Anwendungen",
    "app_semiconductor": "Halbleiterausrüstung",
    "app_hybrid_circuits": "Hybridschaltungen",
    "app_power_modules": "Hochleistungsmodule",
    "app_automotive": "Automotive-Elektronik",
    "app_led": "LED-Substrate",
    "specifications_title": "Spezifikationen",
    "spec_material": "Material",
    "spec_purity": "Reinheit",
    "spec_thickness": "Dicke",
    "spec_thermal": "Wärmeleitfähigkeit",
    "spec_dielectric": "Durchschlagsfestigkeit",
    "spec_density": "Dichte",
    "gallery_title": "Aluminiumoxid-Keramikmuster",
    
    // Aluminum Nitride
    "material_ain_title": "Aluminiumnitrid (AlN)",
    "material_ain_subtitle": "Hohe Wärmeleitfähigkeit für anspruchsvolle Wärmeableitung",
    "feature_high_thermal": "Hohe Wärmeleitfähigkeit",
    "feature_low_cte": "Niedriger CTE",
    "feature_excellent_insulation": "Ausgezeichnete elektrische Isolierung",
    "feature_chemical_stable": "Chemisch stabil",
    "feature_si_matched": "Silizium-angepasster CTE",
    "app_semiconductor_equip": "Halbleiterausrüstung",
    "app_heater_susceptors": "Heizersuszeptoren",
    "app_wafer_chucks": "Waferchucks",
    "app_high_power": "Hochleistungselektronik",
    "app_rf_devices": "HF/Mikrowellen-Bauteile",
    
    // Silicon Nitride
    "material_si3n4_title": "Siliciumnitrid (Si₃N₄)",
    "material_si3n4_subtitle": "Außergewöhnliche Bruchzähigkeit und Temperaturwechselbeständigkeit",
    "feature_fracture_tough": "Hohe Bruchzähigkeit",
    "feature_thermal_shock": "Temperaturwechselbeständig",
    "feature_wear_resistant": "Verschleißfest",
    "app_bearings": "Hochgeschwindigkeitslager",
    "app_cutting_tools": "Schneidwerkzeuge",
    "app_turbochargers": "Turboladerrotoren",
    "app_aerospace": "Luft- und Raumfahrtkomponenten",
    "app_wear_parts": "Verschleißfeste Teile",
    
    // Silicon Carbide
    "material_sic_title": "Siliciumcarbid (SiC)",
    "material_sic_subtitle": "Höchstleistung für extreme Bedingungen",
    "feature_extreme_hard": "Extreme Härte",
    "feature_high_thermal_sic": "Hohe Wärmeleitfähigkeit",
    "feature_chemical_resist": "Chemische Beständigkeit",
    "feature_wear_resist_sic": "Verschleißfestigkeit",
    "feature_high_temp": "Hochtemperaturstabil",
    "app_kiln_furniture": "Ofenausstattung",
    "app_mechanical_seals": "Mechanische Dichtungen",
    "app_semiconductor_equip_sic": "Halbleiterausrüstung",
    "app_aerospace_sic": "Luft- und Raumfahrtkomponenten",
    "app_wear_parts_sic": "Verschleißfeste Teile",
    
    // Zirconia
    "material_zirconia_title": "Zirkonoxid (ZrO₂)",
    "material_zirconia_subtitle": "Unübertroffene Bruchzähigkeit und Biokompatibilität",
    "feature_fracture_tough_z": "Hohe Bruchzähigkeit",
    "feature_wear_resist_z": "Verschleißfestigkeit",
    "feature_biocompatible": "Biokompatibel",
    "feature_chemical_stable_z": "Chemisch stabil",
    "feature_low_thermal": "Niedrige Wärmeleitfähigkeit",
    "app_cutting_tools_z": "Schneidwerkzeuge",
    "app_wear_parts_z": "Verschleißteile",
    "app_medical_implants": "Medizinische Implantate",
    "app_aerospace_z": "Luft- und Raumfahrtkomponenten",
    "app_thermal_barrier": "Wärmebarrieren",
    
    // Comparison Table
    "comparison_title": "Materialeigenschaften-Vergleich",
    "comparison_subtitle": "Vergleichen Sie Schlüsseleigenschaften, um das optimale Keramikmaterial auszuwählen",
    "comparison_property": "Eigenschaft",
    "material_alumina": "Aluminiumoxid",
    "material_aln": "AlN",
    "material_si3n4": "Si₃N₄",
    "material_sic": "SiC",
    "material_zirconia": "Zirkonoxid",
    "property_thermal": "Wärmeleitfähigkeit (W/m·K)",
    "property_dielectric": "Durchschlagsfestigkeit (kV/mm)",
    "property_cte": "CTE (ppm/°C)",
    "property_density": "Dichte (g/cm³)",
    "property_hardness": "Härte (GPa)",
    "property_cost": "Relativer Preis",
    "cost_low": "Niedrig",
    "cost_high": "Hoch",
    "cost_medium": "Mittel",
    
    // Ordering Information
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
    "ordering_custom_note": "Mit umfassenden Spezifikationen und Anpassungsoptionen können unsere Reinkeramik-Substrate auf die genauen Anforderungen Ihrer Anwendung zugeschnitten werden und so optimale Performance und Zuverlässigkeit selbst in den anspruchsvollsten Umgebungen gewährleisten.",
    "btn_request_quote": "Kundenspezifisches Angebot anfordern",
    
    // CTA Section
    "cta_title": "Benötigen Sie Experten-Keramiklösungen?",
    "cta_description": "Unser Ingenieurteam ist spezialisiert auf kundenspezifische Keramiklösungen für anspruchsvolle Anwendungen. Erhalten Sie Expertenberatung und Muster zur Evaluierung.",
    "cta_tech_support": "Technische Beratung",
    "cta_tech_support_desc": "Experten-Support zur Materialauswahl",
    "cta_prototyping": "Schnelles Prototyping",
    "cta_prototyping_desc": "Kundenspezifische Designs in 2-3 Wochen",
    "btn_contact_us": "Kontaktieren Sie uns",
    "cta_phone": "+86-147-4537-3293",
    
    // Footer
    "footer_description": "Seit 2016 führender Hersteller von Keramiksubstraten für Leistungselektronik und Wärmemanagement-Anwendungen. ISO 14001:2015 zertifiziert mit globalen Fertigungskapazitäten.",
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