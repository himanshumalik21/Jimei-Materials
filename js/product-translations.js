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
            "products_page_title": "Ceramic Substrate Manufacturer | DBC, DPC & HTCC Solutions | Jimei Materials",
            "products_meta_description": "Complete range of advanced ceramic metallization substrates: DBC (Direct Bond Copper), DPC (Direct Plated Copper), and HTCC (High-Temperature Co-fired Ceramic) for power electronics, aerospace, RF, and semiconductor packaging.",
            "products_meta_description2": "Advanced ceramic metallization substrates: DBC (Direct Bond Copper 100-300μm Cu), DPC (Direct Plated Copper 20μm lines), HTCC (High-Temperature Co-fired Ceramic with W/Mo metallization). Technical specifications, design guidelines, and applications for power electronics, RF, aerospace packaging. ISO 9001 certified manufacturer.",
            "products_meta_keywords": "ceramic substrate manufacturer, DBC substrate, DPC ceramic, HTCC multilayer ceramic, direct bonded copper, direct plated copper, high-temperature co-fired ceramic, power electronics substrates, RF ceramic packages, hermetic packaging, thermal management solutions, semiconductor packaging materials, AlN substrates, alumina ceramics, IGBT substrates",
            "products_og_title": "Ceramic Substrate Products Catalog | DBC, DPC & HTCC Solutions | Jimei Materials",
            "products_og_description": "Complete range of high-performance ceramic metallization substrates including DBC, DPC, and HTCC substrates for power electronics, aerospace, RF, and semiconductor packaging.",
            "products_twitter_title": "Ceramic Substrate Products Catalog | DBC, DPC & HTCC Solutions | Jimei Materials",
            "products_twitter_description": "Complete range of high-performance ceramic metallization substrates including DBC, DPC, and HTCC substrates for power electronics, aerospace, RF, and semiconductor packaging.",

            // Navigation & Language
            "nav_home": "Home",
            "nav_products": "Products",
            "nav_dpc": "Direct Plated Copper (DPC)",
            "nav_dbc": "Direct Bonded Copper (DBC)",
            "nav_bare": "Bare Ceramic Substrates",
            "nav_htcc": "HTCC Ceramic Packaging",
            "nav_all_products": "All Products",
            "nav_resources": "Resources",
            "nav_about": "About",
            "nav_contact": "Contact",
            "nav_request_quote": "Request Quote",
            "nav_blog": "Blog",
            "skip_to_content": "Skip to main content",
            "current_language": "English",
            "language_en": "English",
            "language_zh": "中文",
            "language_ja": "日本語",
            "language_ko": "한국어",
            "language_de": "Deutsch",

            // Breadcrumbs
            "breadcrumb_home": "Home",
            "breadcrumb_products": "Products",

            // Page Header
            "products_main_title": "Ceramic Metallization Substrate Products",
            "products_subtitle": "High-performance solutions for power electronics, aerospace, RF, and semiconductor packaging.",

            // Product Categories Section
            "categories_title": "Product Categories",
            "categories_description": "Browse our comprehensive range of ceramic substrate solutions",
            "category_dpc_title": "Direct Plated<br>Copper (DPC)",
            "category_dpc_desc": "Precision ceramic substrates for RF/microwave applications, semiconductor packaging, and fine-pitch circuitry with superior electrical performance.",
            "category_dbc_title": "Direct Bonded<br>Copper (DBC)",
            "category_dbc_desc": "High thermal conductivity substrates for IGBT modules, EV power systems, and industrial drives requiring superior heat dissipation.",
            "category_bare_title": "Bare Ceramic<br>Substrates",
            "category_bare_desc": "High-quality alumina and aluminum nitride substrates for sensors, insulators, and thermal management components.",
            "category_htcc_title": "High-Temperature Co-fired Ceramic (HTCC)",
            "category_htcc_desc": "Multilayer ceramic substrates with integrated vias and cavities for hermetic packaging, RF modules, and aerospace applications requiring extreme reliability.",
            
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
            "spec_multilayer": "Multi-Layer",
            "spec_hermetic": "Hermetic Sealing",
            "spec_high_temp": "1600°C Firing",

            // Buttons
            "btn_view_category": "View Products",
            "btn_view_resources": "View Resources",
            "btn_request_samples": "Request Samples",
            "btn_contact_engineering": "Contact Engineering",

            // Technology Comparison Section
            "comparison_title": "Technology Comparison",
            "comparison_description": "Choose the right ceramic substrate technology for your application",
            "comparison_table_caption": "Comparison of DPC, DBC and HTCC Ceramic substrate technologies with detailed specifications",
            "comparison_feature": "Feature / Parameter",
            "comparison_dpc": "DPC (Direct Plated Copper)",
            "comparison_dbc": "DBC (Direct Bonded Copper)",
            "comparison_bare": "Bare Ceramic",
            "comparison_htcc": "HTCC (High-Temperature Co-fired)",
            
            "feature_process": "Process Technology",
            "dpc_process": "Electroplating & Photolithography",
            "dpc_process_note": "Room temp to 200°C processes",
            "dbc_process": "High-Temperature Bonding",
            "dbc_process_note": "1065-1083°C in N<sub>2</sub>/H<sub>2</sub> atmosphere",
            "htcc_process": "Tape Casting & Co-firing",
            "htcc_process_note": "1600°C in reducing atmosphere (H<sub>2</sub>/N<sub>2</sub>)",
            
            "feature_thermal": "Thermal Conductivity",
            "dpc_thermal_conductivity": "<strong>Al₂O₃:</strong> 24-28 W/mK<br><strong>AlN:</strong> 170-200 W/mK<br><small class=\"text-muted\">Through-thickness</small>",
            "dpc_thermal_note": "Through-thickness",
            "dbc_thermal_conductivity": "<strong>Al₂O₃:</strong> 24-28 W/mK<br><strong>AlN:</strong> 170-200 W/mK<br><small class=\"text-muted\">Through-thickness</small>",
            "dbc_thermal_note": "Through-thickness",
            "htcc_thermal_conductivity": "<strong>Al₂O₃-based:</strong> 15-30 W/mK<br><strong>Note:</strong> Conductor is W/Mo (not Cu)<br><small class=\"text-muted\">Lower than DPC/DBC due to W/Mo metallization</small>",
            "htcc_thermal_note1": "Note:",
            "htcc_thermal_note2": "Conductor is W/Mo (not Cu)",
            "htcc_thermal_note3": "Lower than DPC/DBC due to W/Mo metallization",
            
            "feature_conductor": "Conductor Material",
            "dpc_conductor": "Electroplated Copper (Cu)<br><small class=\"text-muted\">Typical resistivity: 1.7 μΩ·cm</small>",
            "dpc_conductor_note": "Typical resistivity: 1.7 μΩ·cm",
            "dbc_conductor": "Bonded Copper Foil (Cu)<br><small class=\"text-muted\">Oxygen-free copper, typical 99.99% purity</small>",
            "dbc_conductor_note": "Oxygen-free copper, typical 99.99% purity",
            "htcc_conductor": "Tungsten (W) or Molybdenum (Mo)<br><small class=\"text-muted\">Co-fired with ceramic, requires post-plating</small>",
            "htcc_conductor_note": "Co-fired with ceramic, requires post-plating",
            
            "feature_conductor_thickness": "Conductor Thickness",
            "dpc_conductor_thickness": "5-100 μm (plated)<br><small class=\"text-muted\">Controlled by electroplating time</small>",
            "dpc_conductor_thickness_note": "Controlled by electroplating time",
            "dbc_conductor_thickness": "100-300 μm (foil)<br><small class=\"text-muted\">Standard: 0.2mm, 0.3mm, 0.4mm</small>",
            "dbc_conductor_thickness_note": "Standard: 0.2mm, 0.3mm, 0.4mm",
            "htcc_conductor_thickness": "10-20 μm (printed)<br><small class=\"text-muted\">After co-firing (before plating)</small>",
            "htcc_conductor_thickness_note": "After co-firing (before plating)",
            
            "feature_line_width": "Min. Line/Space Width",
            "dpc_line_width": "20/20 μm<br><small class=\"text-muted\">Using photolithography</small>",
            "dpc_line_width_note": "Using photolithography",
            "dbc_line_width": "150/150 μm<br><small class=\"text-muted\">Laser cut or chemically etched</small>",
            "dbc_line_width_note": "Laser cut or chemically etched",
            "htcc_line_width": "100/100 μm<br><small class=\"text-muted\">Screen printed, co-fired</small>",
            "htcc_line_width_note": "Screen printed, co-fired",
            
            "feature_via": "Via Diameter (Min)",
            "dpc_via": "50 μm (laser drilled)<br><small class=\"text-muted\">Plated through hole</small>",
            "dpc_via_note": "Plated through hole",
            "dbc_via": "Not typical<br><small class=\"text-muted\">Possible with additional processing</small>",
            "dbc_via_note": "Possible with additional processing",
            "htcc_via": "100 μm (punched)<br><small class=\"text-muted\">Filled with W/Mo paste</small>",
            "htcc_via_note": "Filled with W/Mo paste",
            
            "feature_bond_strength": "Bond Strength (Ceramic to Metal)",
            "dpc_bond_strength": "30-40 MPa<br><small class=\"text-muted\">Ti/Cu seed layer adhesion</small>",
            "dpc_bond_strength_note": "Ti/Cu seed layer adhesion",
            "dbc_bond_strength": ">20 MPa<br><small class=\"text-muted\">Cu-O eutectic bond</small>",
            "dbc_bond_strength_note": "Cu-O eutectic bond",
            "htcc_bond_strength": "Integral (co-fired)<br><small class=\"text-muted\">No separate bond interface</small>",
            "htcc_bond_strength_note": "No separate bond interface",
            
            "feature_surface_finish": "Surface Finish Options",
            "dpc_surface_finish": "ENIG, ENEPIG, Immersion Sn<br>Electroplated Ni/Au, OSP<br><small class=\"text-muted\">Directly on plated copper</small>",
            "dpc_surface_finish_note": "Directly on plated copper",
            "dbc_surface_finish": "Bare copper, Immersion Sn<br>ENIG, Direct solder coating<br><small class=\"text-muted\">May require Ni barrier layer</small>",
            "dbc_surface_finish_note": "May require Ni barrier layer",
            "htcc_surface_finish": "ENIG, ENEPIG required<br>Electroplated Ni/Au/Sn<br><small class=\"text-muted\">W/Mo not solderable as-fired</small>",
            "htcc_surface_finish_note": "W/Mo not solderable as-fired",
            
            "feature_thermal_cycling": "Thermal Cycling Performance",
            "dpc_thermal_cycling": "-55°C to 150°C, 500 cycles<br><small class=\"text-muted\">Limited by plated copper CTE mismatch</small>",
            "dpc_thermal_cycling_note": "Limited by plated copper CTE mismatch",
            "dbc_thermal_cycling": "-55°C to 150°C, 1000+ cycles<br><small class=\"text-muted\">Excellent for power cycling</small>",
            "dbc_thermal_cycling_note": "Excellent for power cycling",
            "htcc_thermal_cycling": "-55°C to 150°C, 1000+ cycles<br><small class=\"text-muted\">Excellent hermetic stability</small>",
            "htcc_thermal_cycling_note": "Excellent hermetic stability",
            
            "feature_multilayer": "Multilayer Capability",
            "dpc_multilayer": "1-2 conductive layers<br><small class=\"text-muted\">Double-sided with PTH vias</small>",
            "dpc_multilayer_note": "Double-sided with PTH vias",
            "dbc_multilayer": "1-2 layers (bonded)<br><small class=\"text-muted\">Two DBCs can be bonded</small>",
            "dbc_multilayer_note": "Two DBCs can be bonded",
            "htcc_multilayer": "2-50+ layers<br><small class=\"text-muted\">True 3D structures with cavities</small>",
            "htcc_multilayer_note": "True 3D structures with cavities",
            
            "feature_applications": "Primary Applications",
            "dpc_apps": "• RF/Microwave Circuits<br>• Fine-Pitch LED Arrays<br>• Sensor Packages<br>• TEC Modules<br><small class=\"text-muted\">Where precision features needed</small>",
            "dpc_apps_note": "Where precision features needed",
            "dbc_apps": "• IGBT Power Modules<br>• EV Traction Inverters<br>• High-Current Bus Bars<br>• Solar Inverters<br><small class=\"text-muted\">High power, high current</small>",
            "dbc_apps_note": "High power, high current",
            "htcc_apps": "• Hermetic RF Packages<br>• Aerospace Electronics<br>• Multi-Chip Modules (MCM)<br>• High-Reliability Sensors<br><small class=\"text-muted\">Extreme environments</small>",
            "htcc_apps_note": "Extreme environments",
            
            "feature_cost": "Relative Cost Factor",
            "dpc_cost": "Medium to High<br><small class=\"text-muted\">Photolithography adds cost</small>",
            "dpc_cost_note": "Photolithography adds cost",
            "dbc_cost": "Low to Medium<br><small class=\"text-muted\">Bulk process, good for large areas</small>",
            "dbc_cost_note": "Bulk process, good for large areas",
            "htcc_cost": "High (setup)<br>Medium (volume)<br><small class=\"text-muted\">High NRE, economies of scale</small>",
            "htcc_cost_note": "High NRE, economies of scale",
            
            "feature_lead_time": "Typical Lead Time (Production)",
            "dpc_lead_time": "2-3 weeks<br><small class=\"text-muted\">Photomask required</small>",
            "dpc_lead_time_note": "Photomask required",
            "dbc_lead_time": "2-3 weeks<br><small class=\"text-muted\">Laser/etch tooling</small>",
            "dbc_lead_time_note": "Laser/etch tooling",
            "htcc_lead_time": "4-6 weeks<br><small class=\"text-muted\">Screen tooling + co-firing cycle</small>",
            "htcc_lead_time_note": "Screen tooling + co-firing cycle",
            
            "feature_recommendation": "When to Choose This Technology",
            "dpc_recommendation_title": "Choose DPC when:",
            "dpc_recommendation": "<strong>Choose DPC when:</strong><br>• Fine features <100μm required<br>• ENIG/ENEPIG finish needed<br>• RF performance critical<br>• Low volume, quick prototype",
            "dbc_recommendation_title": "Choose DBC when:",
            "dbc_recommendation": "<strong>Choose DBC when:</strong><br>• High current (>50A) required<br>• Superior thermal cycling needed<br>• Thick copper (0.3mm+) required<br>• Cost-sensitive high volume",
            "htcc_recommendation_title": "Choose HTCC when:",
            "htcc_recommendation": "<strong>Choose HTCC when:</strong><br>• Hermetic sealing required<br>• Multilayer (>4 layers) needed<br>• 3D structures/cavities needed<br>• Extreme environment operation",
            
            // Comparison Table Notes
            "note_dpc_title": "DPC Notes:",
            "note_dpc1": "Ti/Cu seed layer for adhesion",
            "note_dpc2": "Best for fine features & RF",
            "note_dpc3": "Limited thermal cycling vs DBC",
            "note_dbc_title": "DBC Notes:",
            "note_dbc1": "Cu-O eutectic bond at 1065°C",
            "note_dbc2": "Excellent thermal cycling",
            "note_dbc3": "Not for fine features <150μm",
            "note_htcc_title": "HTCC Notes:",
            "note_htcc1": "W/Mo co-fired with alumina",
            "note_htcc2": "Requires post-plating for solderability",
            "note_htcc3": "12-18% shrinkage during firing",

            // Featured Applications Section
            "applications_title": "Featured Applications",
            "applications_description": "Our ceramic substrates power cutting-edge technologies across industries",
            "app_htcc_aerospace_title": "Aerospace & Defense Packages",
            "app_htcc_aerospace_desc": "Hermetically sealed HTCC packages for radar systems, satellite components, and military electronics requiring extreme environmental stability.",
            "app_htcc_aerospace_badge1": "Al2O3",
            "app_htcc_aerospace_badge2": "Hermetic",
            "app_htcc_aerospace_badge3": "RF Shielding",
            "app_htcc_mcm_title": "Multi-Chip Modules (MCM)",
            "app_htcc_mcm_desc": "Complex multilayer substrates with integrated cavities and vias for high-density packaging of semiconductor devices and MEMS sensors.",
            "app_htcc_mcm_badge1": "3D Structures",
            "app_htcc_mcm_badge2": "Integrated Cavities",
            "app_htcc_mcm_badge3": "High Density",
            "app_laser_title": "Laser Diode Heat Sinks",
            "app_laser_desc": "High thermal conductivity substrates for semiconductor lasers used in LiDAR, optical communications, and industrial processing.",
            "app_laser_badge1": "AlN",
            "app_laser_badge2": "SiC",
            "app_laser_badge3": "0.3-0.35mm",
            "app_tec_title": "Thermoelectric Cooler (TEC) Modules",
            "app_tec_desc": "Precision ceramic substrates for Peltier cooling modules used in optical communications, medical devices, and aerospace.",
            "app_tec_badge1": "AlN/Al2O3",
            "app_tec_badge2": "Cu/Ni/Au",
            "app_tec_badge3": "0.15-0.635mm",
            "app_ide_title": "Interdigital Electrodes (IDEs)",
            "app_ide_desc": "Precision electrode patterns for capacitive sensors, gas detectors, and biomedical applications requiring fine-pitch circuitry.",
            "app_ide_badge1": "Al2O3/PI/PET",
            "app_ide_badge2": "50μm-100mm",
            "app_ide_badge3": "Cu/Ni/Au",
            "app_igbt_title": "IGBT Power Modules",
            "app_igbt_desc": "High-power DBC substrates for industrial motor drives, EV inverters, and renewable energy systems requiring robust thermal management.",
            "app_igbt_badge1": "AlN/Al2O3",
            "app_igbt_badge2": "0.3mm Cu",
            "app_igbt_badge3": "High Voltage",
            "app_rf_title": "RF Power Amplifiers",
            "app_rf_desc": "Low-loss DPC substrates for 5G base stations, microwave communications, and radar systems requiring high-frequency performance.",
            "app_rf_badge1": "AlN",
            "app_rf_badge2": "Fine Pitch",
            "app_rf_badge3": "High Frequency",
            "app_led_title": "High-Power LED Packaging",
            "app_led_desc": "Thermal management substrates for automotive headlights, industrial lighting, and UV LED applications requiring efficient heat dissipation.",
            "app_led_badge1": "Al2O3",
            "app_led_badge2": "High Reflectivity",
            "app_led_badge3": "Good CTE Match",
            "app_ev_title": "EV Charging & Power Conversion",
            "app_ev_desc": "High-reliability ceramic substrates for EV charging stations and power converters requiring high current handling and thermal stability.",
            "app_ev_badge1": "High Current",
            "app_ev_badge2": "Thermal Reliability",
            "app_ev_badge3": "AlN/Al2O3",

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
            "footer_description": "Leading manufacturer of ceramic metallization substrates for thermal management applications since 2016. ISO 14001:2015 certified with global manufacturing capabilities.",
            "footer_products": "Products",
            "footer_company": "Company",
            "footer_contact": "Contact Info",
            "footer_email": "sales@jimei-materials.com",
            "footer_phone": "+86-147-4537-3293",
            "footer_address": "First Industrial Zone, Haosan Linpokeng, Xinqiao Street, Bao'an District, Shenzhen, China",
            "footer_hours": "Mon-Fri: 8:00 AM - 6:00 PM (GMT+8)",
            "footer_languages": "Support: English, Chinese, Japanese, Korean, German",
            "footer_copyright": "Copyright &copy;",
            "footer_company_name": "Jimei Materials Co., Ltd.",
            "footer_rights": "All rights reserved.",
            "footer_privacy": "Privacy Policy",
            "footer_terms": "Terms of Service",
            "footer_sitemap": "Sitemap"
        },
        
        zh: {
            // 元数据与SEO
"products_page_title": "陶瓷基板制造商 | DBC、DPC 及 HTCC 解决方案 | 集美材料",
"products_meta_description": "完整的先进陶瓷金属化基板系列：适用于电力电子、航空航天、射频及半导体封装的 DBC（直接覆铜）、DPC（直接镀铜）和 HTCC（高温共烧陶瓷）基板。",
"products_meta_description2": "先进的陶瓷金属化基板：DBC（直接覆铜，铜厚 100-300μm）、DPC（直接镀铜，线宽 20μm）、HTCC（高温共烧陶瓷，钨/钼导体）。提供用于电力电子、射频及航空航天封装的技术规格、设计指南及应用方案。通过 ISO 9001 认证的制造商。",
"products_meta_keywords": "陶瓷基板制造商, DBC基板, DPC陶瓷基板, HTCC多层陶瓷, 直接覆铜, 直接镀铜, 高温共烧陶瓷, 电力电子基板, 射频陶瓷封装, 气密封装, 热管理解决方案, 半导体封装材料, 氮化铝基板, 氧化铝陶瓷, IGBT基板",
"products_og_title": "陶瓷基板产品目录 | DBC、DPC 及 HTCC 解决方案 | 集美材料",
"products_og_description": "完整的高性能陶瓷金属化基板系列，包括适用于电力电子、航空航天、射频及半导体封装的 DBC、DPC 和 HTCC 基板。",
"products_twitter_title": "陶瓷基板产品目录 | DBC、DPC 及 HTCC 解决方案 | 集美材料",
"products_twitter_description": "完整的高性能陶瓷金属化基板系列，包括适用于电力电子、航空航天、射频及半导体封装的 DBC、DPC 和 HTCC 基板。",

// 导航与语言
"nav_home": "首页",
"nav_products": "产品",
"nav_dpc": "直接镀铜基板 (DPC)",
"nav_dbc": "直接覆铜基板 (DBC)",
"nav_bare": "裸陶瓷基板",
"nav_htcc": "HTCC 陶瓷封装",
"nav_all_products": "所有产品",
"nav_resources": "资源",
"nav_about": "关于我们",
"nav_contact": "联系我们",
"nav_request_quote": "获取报价",
"nav_blog": "博客",
"skip_to_content": "跳转到主要内容",
"current_language": "English",
"language_en": "English",
"language_zh": "中文",
"language_ja": "日本語",
"language_ko": "한국어",
"language_de": "Deutsch",

// 面包屑导航
"breadcrumb_home": "首页",
"breadcrumb_products": "产品",

// 页面标题
"products_main_title": "陶瓷金属化基板产品",
"products_subtitle": "为电力电子、航空航天、射频及半导体封装提供高性能解决方案。",

// 产品类别板块
"categories_title": "产品类别",
"categories_description": "浏览我们全面的陶瓷基板解决方案",
"category_dpc_title": "直接镀铜基板<br>(DPC)",
"category_dpc_desc": "适用于射频/微波应用、半导体封装及精细线路的高精度陶瓷基板，提供卓越的电性能。",
"category_dbc_title": "直接覆铜基板<br>(DBC)",
"category_dbc_desc": "高导热基板，适用于 IGBT 模块、电动汽车动力系统及工业驱动器，需要优异的散热能力。",
"category_bare_title": "裸陶瓷基板",
"category_bare_desc": "高质量的氧化铝和氮化铝基板，适用于传感器、绝缘体及热管理元件。",
"category_htcc_title": "高温共烧陶瓷 (HTCC)",
"category_htcc_desc": "集成通孔与腔体的多层陶瓷基板，适用于要求极高可靠性的气密封装、射频模块及航空航天应用。",

// 规格标签
"spec_tolerance": "公差 ±10μm",
"spec_line_width": "线宽 20μm",
"spec_surface_finish": "表面处理：ENIG/镀金",
"spec_thermal": "导热系数 170-200 W/mK",
"spec_copper_thick": "铜厚 0.2-0.3mm",
"spec_high_power": "高功率",
"spec_materials": "材料：AlN/Al2O3/Si3N4",
"spec_custom_sizes": "定制尺寸",
"spec_polished": "抛光/研磨",
"spec_multilayer": "多层结构",
"spec_hermetic": "气密封装",
"spec_high_temp": "烧结温度 1600°C",

// 按钮
"btn_view_category": "查看产品",
"btn_view_resources": "查看资源",
"btn_request_samples": "申请样品",
"btn_contact_engineering": "联系工程团队",

// 技术对比板块
"comparison_title": "技术对比",
"comparison_description": "为您的应用选择合适的陶瓷基板技术",
"comparison_table_caption": "DPC、DBC 和 HTCC 陶瓷基板技术的详细规格对比",
"comparison_feature": "特性 / 参数",
"comparison_dpc": "DPC (直接镀铜)",
"comparison_dbc": "DBC (直接覆铜)",
"comparison_bare": "裸陶瓷",
"comparison_htcc": "HTCC (高温共烧陶瓷)",

"feature_process": "工艺技术",
"dpc_process": "电镀与光刻",
"dpc_process_note": "工艺温度：室温至200°C",
"dbc_process": "高温键合",
"dbc_process_note": "1065-1083°C，氮气/氢气气氛",
"htcc_process": "流延成型与共烧",
"htcc_process_note": "1600°C，还原性气氛 (氢气/氮气)",

"feature_thermal": "导热系数",
"dpc_thermal_conductivity": "<strong>Al₂O₃:</strong> 24-28 W/mK<br><strong>AlN:</strong> 170-200 W/mK<br><small class=\"text-muted\">法向导热</small>",
"dpc_thermal_note": "法向导热",
"dbc_thermal_conductivity": "<strong>Al₂O₃:</strong> 24-28 W/mK<br><strong>AlN:</strong> 170-200 W/mK<br><small class=\"text-muted\">法向导热</small>",
"dbc_thermal_note": "法向导热",
"htcc_thermal_conductivity": "<strong>氧化铝基:</strong> 15-30 W/mK<br><strong>注：</strong> 导体为 W/Mo（非铜）<br><small class=\"text-muted\">因使用钨/钼导体，导热性低于 DPC/DBC</small>",
"htcc_thermal_note1": "注：",
"htcc_thermal_note2": "导体为 W/Mo（非铜）",
"htcc_thermal_note3": "因使用钨/钼导体，导热性低于 DPC/DBC",

"feature_conductor": "导体材料",
"dpc_conductor": "电镀铜 (Cu)<br><small class=\"text-muted\">典型电阻率：1.7 μΩ·cm</small>",
"dpc_conductor_note": "典型电阻率：1.7 μΩ·cm",
"dbc_conductor": "键合铜箔 (Cu)<br><small class=\"text-muted\">无氧铜，典型纯度 99.99%</small>",
"dbc_conductor_note": "无氧铜，典型纯度 99.99%",
"htcc_conductor": "钨 (W) 或钼 (Mo)<br><small class=\"text-muted\">与陶瓷共烧，需后电镀处理</small>",
"htcc_conductor_note": "与陶瓷共烧，需后电镀处理",

"feature_conductor_thickness": "导体厚度",
"dpc_conductor_thickness": "5-100 μm (电镀)<br><small class=\"text-muted\">由电镀时间控制</small>",
"dpc_conductor_thickness_note": "由电镀时间控制",
"dbc_conductor_thickness": "100-300 μm (箔材)<br><small class=\"text-muted\">标准厚度：0.2mm， 0.3mm， 0.4mm</small>",
"dbc_conductor_thickness_note": "标准厚度：0.2mm， 0.3mm， 0.4mm",
"htcc_conductor_thickness": "10-20 μm (印刷后)<br><small class=\"text-muted\">共烧后（电镀前）</small>",
"htcc_conductor_thickness_note": "共烧后（电镀前）",

"feature_line_width": "最小线宽/线距",
"dpc_line_width": "20/20 μm<br><small class=\"text-muted\">采用光刻工艺</small>",
"dpc_line_width_note": "采用光刻工艺",
"dbc_line_width": "150/150 μm<br><small class=\"text-muted\">激光切割或化学蚀刻</small>",
"dbc_line_width_note": "激光切割或化学蚀刻",
"htcc_line_width": "100/100 μm<br><small class=\"text-muted\">丝网印刷，共烧</small>",
"htcc_line_width_note": "丝网印刷，共烧",

"feature_via": "通孔直径 (最小)",
"dpc_via": "50 μm (激光钻孔)<br><small class=\"text-muted\">镀通孔</small>",
"dpc_via_note": "镀通孔",
"dbc_via": "不典型<br><small class=\"text-muted\">可通过附加工艺实现</small>",
"dbc_via_note": "可通过附加工艺实现",
"htcc_via": "100 μm (冲孔)<br><small class=\"text-muted\">填充钨/钼浆料</small>",
"htcc_via_note": "填充钨/钼浆料",

"feature_bond_strength": "结合强度 (陶瓷-金属)",
"dpc_bond_strength": "30-40 MPa<br><small class=\"text-muted\">Ti/Cu 种子层附着力</small>",
"dpc_bond_strength_note": "Ti/Cu 种子层附着力",
"dbc_bond_strength": ">20 MPa<br><small class=\"text-muted\">铜-氧共晶键合</small>",
"dbc_bond_strength_note": "铜-氧共晶键合",
"htcc_bond_strength": "一体成型 (共烧)<br><small class=\"text-muted\">无独立的结合界面</small>",
"htcc_bond_strength_note": "无独立的结合界面",

"feature_surface_finish": "表面处理选项",
"dpc_surface_finish": "ENIG， ENEPIG， 化学浸锡<br>电镀镍/金， OSP<br><small class=\"text-muted\">直接在电镀铜上处理</small>",
"dpc_surface_finish_note": "直接在电镀铜上处理",
"dbc_surface_finish": "裸铜， 化学浸锡<br>ENIG， 直接焊料涂覆<br><small class=\"text-muted\">可能需要镍阻挡层</small>",
"dbc_surface_finish_note": "可能需要镍阻挡层",
"htcc_surface_finish": "需 ENIG/ENEPIG 处理<br>电镀镍/金/锡<br><small class=\"text-muted\">烧结后的钨/钼不可焊</small>",
"htcc_surface_finish_note": "烧结后的钨/钼不可焊",

"feature_thermal_cycling": "热循环性能",
"dpc_thermal_cycling": "-55°C 至 150°C， 500 次循环<br><small class=\"text-muted\">受电镀铜热膨胀系数不匹配限制</small>",
"dpc_thermal_cycling_note": "受电镀铜热膨胀系数不匹配限制",
"dbc_thermal_cycling": "-55°C 至 150°C， 1000+ 次循环<br><small class=\"text-muted\">优异的功率循环耐受性</small>",
"dbc_thermal_cycling_note": "优异的功率循环耐受性",
"htcc_thermal_cycling": "-55°C 至 150°C， 1000+ 次循环<br><small class=\"text-muted\">优异的气密稳定性</small>",
"htcc_thermal_cycling_note": "优异的气密稳定性",

"feature_multilayer": "多层能力",
"dpc_multilayer": "1-2 导电层<br><small class=\"text-muted\">双面带镀通孔</small>",
"dpc_multilayer_note": "双面带镀通孔",
"dbc_multilayer": "1-2 层 (键合)<br><small class=\"text-muted\">可键合两层 DBC</small>",
"dbc_multilayer_note": "可键合两层 DBC",
"htcc_multilayer": "2-50+ 层<br><small class=\"text-muted\">可制作带腔体的真 3D 结构</small>",
"htcc_multilayer_note": "可制作带腔体的真 3D 结构",

"feature_applications": "主要应用",
"dpc_apps": "• 射频/微波电路<br>• 精细间距 LED 阵列<br>• 传感器封装<br>• TEC 模块<br><small class=\"text-muted\">适用于需要精密特征的场景</small>",
"dpc_apps_note": "适用于需要精密特征的场景",
"dbc_apps": "• IGBT 功率模块<br>• 电动汽车牵引逆变器<br>• 高电流汇流排<br>• 光伏逆变器<br><small class=\"text-muted\">高功率， 大电流</small>",
"dbc_apps_note": "高功率， 大电流",
"htcc_apps": "• 气密射频封装<br>• 航空航天电子<br>• 多芯片模块<br>• 高可靠性传感器<br><small class=\"text-muted\">极端环境</small>",
"htcc_apps_note": "极端环境",

"feature_cost": "相对成本因素",
"dpc_cost": "中到高<br><small class=\"text-muted\">光刻工艺增加成本</small>",
"dpc_cost_note": "光刻工艺增加成本",
"dbc_cost": "低到中<br><small class=\"text-muted\">批量工艺， 适合大面积</small>",
"dbc_cost_note": "批量工艺， 适合大面积",
"htcc_cost": "高 (开模费)<br>中 (批量)<br><small class=\"text-muted\">高一次性工程费用， 具规模效应</small>",
"htcc_cost_note": "高一次性工程费用， 具规模效应",

"feature_lead_time": "典型交货期 (生产)",
"dpc_lead_time": "2-3 周<br><small class=\"text-muted\">需要光罩</small>",
"dpc_lead_time_note": "需要光罩",
"dbc_lead_time": "2-3 周<br><small class=\"text-muted\">激光/蚀刻模具</small>",
"dbc_lead_time_note": "激光/蚀刻模具",
"htcc_lead_time": "4-6 周<br><small class=\"text-muted\">丝网模具 + 共烧周期</small>",
"htcc_lead_time_note": "丝网模具 + 共烧周期",

"feature_recommendation": "何时选择该技术",
"dpc_recommendation_title": "选择 DPC 当您需要：",
"dpc_recommendation": "<strong>选择 DPC 当您需要：</strong><br>• 特征尺寸 <100μm<br>• ENIG/ENEPIG 表面处理<br>• 射频性能至关重要<br>• 小批量快速打样",
"dbc_recommendation_title": "选择 DBC 当您需要：",
"dbc_recommendation": "<strong>选择 DBC 当您需要：</strong><br>• 承载大电流 (>50A)<br>• 优异的热循环性能<br>• 厚铜 (0.3mm+)<br>• 成本敏感的大批量生产",
"htcc_recommendation_title": "选择 HTCC 当您需要：",
"htcc_recommendation": "<strong>选择 HTCC 当您需要：</strong><br>• 气密性封装<br>• 多层 (>4层) 结构<br>• 3D 结构/腔体<br>• 极端环境运行",

// 对比表注释
"note_dpc_title": "DPC 技术要点：",
"note_dpc1": "Ti/Cu 种子层保证附着力",
"note_dpc2": "最适合精细特征与射频应用",
"note_dpc3": "热循环性能相比 DBC 有限",
"note_dbc_title": "DBC 技术要点：",
"note_dbc1": "1065°C 铜-氧共晶键合",
"note_dbc2": "优异的热循环性能",
"note_dbc3": "不适用于 <150μm 的精细特征",
"note_htcc_title": "HTCC 技术要点：",
"note_htcc1": "钨/钼与氧化铝共烧",
"note_htcc2": "需后电镀以实现可焊性",
"note_htcc3": "烧结过程收缩率约 12-18%",

// 特色应用板块
"applications_title": "典型应用",
"applications_description": "我们的陶瓷基板为各行业的前沿技术提供动力",
"app_htcc_aerospace_title": "航空航天与军用封装",
"app_htcc_aerospace_desc": "采用 HTCC 技术的气密封装，适用于需要极端环境稳定性的雷达系统、卫星组件及军用电子设备。",
"app_htcc_aerospace_badge1": "Al2O3",
"app_htcc_aerospace_badge2": "气密",
"app_htcc_aerospace_badge3": "射频屏蔽",
"app_htcc_mcm_title": "多芯片模块 (MCM)",
"app_htcc_mcm_desc": "具有集成腔体和通孔的复杂多层基板，用于半导体器件和 MEMS 传感器的高密度封装。",
"app_htcc_mcm_badge1": "3D结构",
"app_htcc_mcm_badge2": "集成腔体",
"app_htcc_mcm_badge3": "高密度",
"app_laser_title": "激光二极管散热基板",
"app_laser_desc": "高导热基板，用于激光雷达、光通信及工业加工领域的半导体激光器。",
"app_laser_badge1": "AlN",
"app_laser_badge2": "SiC",
"app_laser_badge3": "0.3-0.35mm",
"app_tec_title": "热电制冷器 (TEC) 模块",
"app_tec_desc": "用于帕尔帖制冷模块的高精度陶瓷基板，适用于光通信、医疗设备及航空航天领域。",
"app_tec_badge1": "AlN/Al2O3",
"app_tec_badge2": "Cu/Ni/Au",
"app_tec_badge3": "0.15-0.635mm",
"app_ide_title": "叉指电极 (IDEs)",
"app_ide_desc": "高精度电极图形，适用于需要精细线路的电容式传感器、气体检测器及生物医学应用。",
"app_ide_badge1": "Al2O3/PI/PET",
"app_ide_badge2": "50μm-100mm",
"app_ide_badge3": "Cu/Ni/Au",
"app_igbt_title": "IGBT 功率模块",
"app_igbt_desc": "高功率 DBC 基板，用于需要强大热管理能力的工业电机驱动器、电动汽车逆变器及可再生能源系统。",
"app_igbt_badge1": "AlN/Al2O3",
"app_igbt_badge2": "铜厚 0.3mm",
"app_igbt_badge3": "高电压",
"app_rf_title": "射频功率放大器",
"app_rf_desc": "低损耗 DPC 基板，适用于需要高频性能的 5G 基站、微波通信及雷达系统。",
"app_rf_badge1": "AlN",
"app_rf_badge2": "精细间距",
"app_rf_badge3": "高频",
"app_led_title": "高功率 LED 封装",
"app_led_desc": "热管理基板，用于需要高效散热的汽车前照灯、工业照明及紫外 LED 应用。",
"app_led_badge1": "Al2O3",
"app_led_badge2": "高反射率",
"app_led_badge3": "良好CTE匹配",
"app_ev_title": "电动汽车充电与功率转换",
"app_ev_desc": "高可靠性陶瓷基板，用于需要高电流承载能力和热稳定性的电动汽车充电站和功率转换器。",
"app_ev_badge1": "大电流",
"app_ev_badge2": "热可靠性",
"app_ev_badge3": "AlN/Al2O3",

// 资源板块
"resources_title": "技术资源",
"resources_description": "下载数据手册、应用说明和设计指南",
"resource_datasheets_title": "产品数据手册",
"resource_datasheets_desc": "我们所有陶瓷基板产品的详细规格和技术数据。",
"resource_design_title": "设计指南",
"resource_design_desc": "使用陶瓷基板进行设计和优化热性能的最佳实践。",
"resource_samples_title": "申请样品",
"resource_samples_desc": "获取免费样品，用于评估和测试我们的陶瓷基板产品。",

// 行动号召板块
"products_cta_title": "需要定制陶瓷基板解决方案？",
"products_cta_description": "我们的工程团队擅长根据您的具体需求，开发定制的陶瓷基板解决方案。",
"cta_prototyping": "快速打样",
"cta_prototyping_desc": "2-3 周完成定制设计",
"cta_technical_support": "技术支持",
"cta_technical_support_desc": "提供工程咨询服务",
"cta_phone": "+86-147-4537-3293",

// 页脚
"footer_description": "自 2016 年起，成为热管理应用陶瓷金属化基板的领先制造商。通过 ISO 14001:2015 认证，具备全球化制造能力。",
"footer_products": "产品",
"footer_company": "公司",
"footer_contact": "联系信息",
"footer_email": "sales@jimei-materials.com",
"footer_phone": "+86-147-4537-3293",
"footer_address": "中国广东省深圳市宝安区新桥街道浩森林坡坑第一工业区",
"footer_hours": "周一至周五：上午 8:00 - 下午 6:00 (北京时间 GMT+8)",
"footer_languages": "支持语言：英语、中文、日语、韩语、德语",
"footer_copyright": "版权所有 &copy;",
"footer_company_name": "集美材料有限公司",
"footer_rights": "保留所有权利。",
"footer_privacy": "隐私政策",
"footer_terms": "服务条款",
"footer_sitemap": "网站地图"
        },
        
        ja:{
    // Meta & SEO
    "products_page_title": "セラミック基板メーカー | DBC、DPC、HTCCソリューション | Jimei Materials",
    "products_meta_description": "パワーエレクトロニクス、航空宇宙、RF、半導体パッケージング向けのDBC（直接接合銅100-300μm）、DPC（直接めっき銅20μm線幅）、HTCC（W/Moメタライゼーション高温共焼セラミック）を含む先進的なセラミックメタライゼーション基板の完全なラインナップ。技術仕様、設計ガイドライン、アプリケーション情報。ISO 9001認証メーカー。",
    "products_meta_description2": "先進的なセラミックメタライゼーション基板：DBC（直接接合銅 銅厚100-300μm）、DPC（直接めっき銅 線幅20μm）、HTCC（W/Moメタライゼーション高温共焼セラミック）。パワーエレクトロニクス、RF、航空宇宙パッケージング向け技術仕様、設計ガイドライン、アプリケーション。ISO 9001認証メーカー。",
    "products_meta_keywords": "セラミック基板メーカー, DBC基板, DPCセラミック, HTCC多層セラミック, 直接接合銅, 直接めっき銅, 高温共焼セラミック, パワーエレクトロニクス基板, RFセラミックパッケージ, 気密封装, 熱管理ソリューション, 半導体パッケージング材料, AlN基板, アルミナセラミックス, IGBT基板",
    "products_og_title": "セラミック基板製品カタログ | DBC、DPC、HTCCソリューション | Jimei Materials",
    "products_og_description": "パワーエレクトロニクス、航空宇宙、RF、半導体パッケージング向けのDBC、DPC、HTCC基板を含む、高性能セラミックメタライゼーション基板の完全なラインナップ。",
    "products_twitter_title": "セラミック基板製品カタログ | DBC、DPC、HTCCソリューション | Jimei Materials",
    "products_twitter_description": "パワーエレクトロニクス、航空宇宙、RF、半導体パッケージング向けのDBC、DPC、HTCC基板を含む、高性能セラミックメタライゼーション基板の完全なラインナップ。",

    // Navigation & Language
    "nav_home": "ホーム",
    "nav_products": "製品一覧",
    "nav_dpc": "DPC (直接めっき銅)",
    "nav_dbc": "DBC (直接接合銅)",
    "nav_bare": "ベアセラミック基板",
    "nav_htcc": "HTCCセラミックパッケージ",
    "nav_all_products": "全製品一覧",
    "nav_resources": "技術資料",
    "nav_about": "会社情報",
    "nav_contact": "お問い合わせ",
    "nav_request_quote": "見積依頼",
    "nav_blog": "ブログ",
    "skip_to_content": "メインコンテンツへスキップ",
    "current_language": "英語",
    "language_en": "English",
    "language_zh": "中文",
    "language_ja": "日本語",
    "language_ko": "한국어",
    "language_de": "Deutsch",

    // Breadcrumbs
    "breadcrumb_home": "ホーム",
    "breadcrumb_products": "製品一覧",

    // Page Header
    "products_main_title": "セラミックメタライゼーション基板製品",
    "products_subtitle": "パワーエレクトロニクス、航空宇宙、RF、半導体パッケージング向けの高性能ソリューション。",

    // Product Categories Section
    "categories_title": "製品カテゴリー",
    "categories_description": "当社の包括的なセラミック基板ソリューションをご覧ください",
    "category_dpc_title": "DPC<br>(直接めっき銅)",
    "category_dpc_desc": "優れた電気的特性を備え、RF/マイクロ波アプリケーション、半導体パッケージング、微細配線用途向けの高精度セラミック基板。",
    "category_dbc_title": "DBC<br>(直接接合銅)",
    "category_dbc_desc": "優れた放熱性が求められるIGBTモジュール、EVパワーシステム、産業用ドライブ向けの高熱伝導性基板。",
    "category_bare_title": "ベアセラミック<br>基板",
    "category_bare_desc": "センサー、絶縁体、熱管理コンポーネント向けの高品質アルミナおよび窒化アルミニウム基板。",
    "category_htcc_title": "HTCC<br>(高温共焼セラミック)",
    "category_htcc_desc": "極めて高い信頼性が求められる気密封装、RFモジュール、航空宇宙アプリケーション向けに、ビアやキャビティを集積した多層セラミック基板。",

    // Specification Badges
    "spec_tolerance": "公差±10μm",
    "spec_line_width": "線幅20μm",
    "spec_surface_finish": "ENIG/金メッキ仕上げ",
    "spec_thermal": "熱伝導率170-200 W/mK",
    "spec_copper_thick": "銅厚0.2-0.3mm",
    "spec_high_power": "高出力対応",
    "spec_materials": "AlN/Al2O3/Si3N4対応",
    "spec_custom_sizes": "サイズカスタマイズ可",
    "spec_polished": "研磨/ラップ仕上げ",
    "spec_multilayer": "多層構造",
    "spec_hermetic": "気密封装対応",
    "spec_high_temp": "1600°C焼成",

    // Buttons
    "btn_view_category": "製品を見る",
    "btn_view_resources": "技術資料を見る",
    "btn_request_samples": "サンプルを請求",
    "btn_contact_engineering": "技術サポートに相談",

    // Technology Comparison Section
    "comparison_title": "技術比較",
    "comparison_description": "用途に適したセラミック基板技術をお選びください",
    "comparison_table_caption": "詳細仕様によるDPC、DBC、HTCCセラミック基板技術の比較",
    "comparison_feature": "特性 / パラメータ",
    "comparison_dpc": "DPC (直接めっき銅)",
    "comparison_dbc": "DBC (直接接合銅)",
    "comparison_bare": "ベアセラミック",
    "comparison_htcc": "HTCC (高温共焼セラミック)",
    
    "feature_process": "プロセス技術",
    "dpc_process": "電気めっき・フォトリソグラフィ",
    "dpc_process_note": "室温〜200°Cプロセス",
    "dbc_process": "高温接合",
    "dbc_process_note": "N<sub>2</sub>/H<sub>2</sub>雰囲気中1065-1083°C",
    "htcc_process": "テープキャスティング・共焼",
    "htcc_process_note": "還元雰囲気（H<sub>2</sub>/N<sub>2</sub>）中1600°C",
    
    "feature_thermal": "熱伝導率",
    "dpc_thermal_conductivity": "<strong>Al₂O₃:</strong> 24-28 W/mK<br><strong>AlN:</strong> 170-200 W/mK<br><small class=\"text-muted\">厚み方向</small>",
    "dpc_thermal_note": "厚み方向",
    "dbc_thermal_conductivity": "<strong>Al₂O₃:</strong> 24-28 W/mK<br><strong>AlN:</strong> 170-200 W/mK<br><small class=\"text-muted\">厚み方向</small>",
    "dbc_thermal_note": "厚み方向",
    "htcc_thermal_conductivity": "<strong>Al₂O₃ベース:</strong> 15-30 W/mK<br><strong>注:</strong> 導体はW/Mo（銅ではない）<br><small class=\"text-muted\">W/MoメタライゼーションによりDPC/DBCよりも低い</small>",
    "htcc_thermal_note1": "注:",
    "htcc_thermal_note2": "導体はW/Mo（銅ではない）",
    "htcc_thermal_note3": "W/MoメタライゼーションによりDPC/DBCよりも低い",
    
    "feature_conductor": "導体材料",
    "dpc_conductor": "電気めっき銅 (Cu)<br><small class=\"text-muted\">代表的な抵抗率: 1.7 μΩ·cm</small>",
    "dpc_conductor_note": "代表的な抵抗率: 1.7 μΩ·cm",
    "dbc_conductor": "接合銅箔 (Cu)<br><small class=\"text-muted\">無酸素銅、代表的な純度99.99%</small>",
    "dbc_conductor_note": "無酸素銅、代表的な純度99.99%",
    "htcc_conductor": "タングステン (W) またはモリブデン (Mo)<br><small class=\"text-muted\">セラミックと共焼、後めっきが必要</small>",
    "htcc_conductor_note": "セラミックと共焼、後めっきが必要",
    
    "feature_conductor_thickness": "導体厚",
    "dpc_conductor_thickness": "5-100 μm (めっき)<br><small class=\"text-muted\">電気めっき時間により制御</small>",
    "dpc_conductor_thickness_note": "電気めっき時間により制御",
    "dbc_conductor_thickness": "100-300 μm (箔)<br><small class=\"text-muted\">標準: 0.2mm, 0.3mm, 0.4mm</small>",
    "dbc_conductor_thickness_note": "標準: 0.2mm, 0.3mm, 0.4mm",
    "htcc_conductor_thickness": "10-20 μm (印刷後)<br><small class=\"text-muted\">共焼後（めっき前）</small>",
    "htcc_conductor_thickness_note": "共焼後（めっき前）",
    
    "feature_line_width": "最小線幅/間隔",
    "dpc_line_width": "20/20 μm<br><small class=\"text-muted\">フォトリソグラフィ使用</small>",
    "dpc_line_width_note": "フォトリソグラフィ使用",
    "dbc_line_width": "150/150 μm<br><small class=\"text-muted\">レーザー切断または化学エッチング</small>",
    "dbc_line_width_note": "レーザー切断または化学エッチング",
    "htcc_line_width": "100/100 μm<br><small class=\"text-muted\">スクリーン印刷、共焼</small>",
    "htcc_line_width_note": "スクリーン印刷、共焼",
    
    "feature_via": "ビア径（最小）",
    "dpc_via": "50 μm (レーザー穴あけ)<br><small class=\"text-muted\">スルーホールめっき</small>",
    "dpc_via_note": "スルーホールめっき",
    "dbc_via": "一般的ではない<br><small class=\"text-muted\">追加処理で可能</small>",
    "dbc_via_note": "追加処理で可能",
    "htcc_via": "100 μm (パンチング)<br><small class=\"text-muted\">W/Moペースト充填</small>",
    "htcc_via_note": "W/Moペースト充填",
    
    "feature_bond_strength": "接合強度（セラミック-金属間）",
    "dpc_bond_strength": "30-40 MPa<br><small class=\"text-muted\">Ti/Cuシード層密着性</small>",
    "dpc_bond_strength_note": "Ti/Cuシード層密着性",
    "dbc_bond_strength": ">20 MPa<br><small class=\"text-muted\">Cu-O共晶接合</small>",
    "dbc_bond_strength_note": "Cu-O共晶接合",
    "htcc_bond_strength": "一体構造（共焼）<br><small class=\"text-muted\">独立した接合界面なし</small>",
    "htcc_bond_strength_note": "独立した接合界面なし",
    
    "feature_surface_finish": "表面仕上げオプション",
    "dpc_surface_finish": "ENIG, ENEPIG, 置換Sn<br>電気めっきNi/Au, OSP<br><small class=\"text-muted\">めっき銅上直接</small>",
    "dpc_surface_finish_note": "めっき銅上直接",
    "dbc_surface_finish": "ベア銅, 置換Sn<br>ENIG, 直接はんだコーティング<br><small class=\"text-muted\">Niバリア層が必要な場合あり</small>",
    "dbc_surface_finish_note": "Niバリア層が必要な場合あり",
    "htcc_surface_finish": "ENIG, ENEPIG 必須<br>電気めっきNi/Au/Sn<br><small class=\"text-muted\">焼成直後のW/Moははんだ付け不可</small>",
    "htcc_surface_finish_note": "焼成直後のW/Moははんだ付け不可",
    
    "feature_thermal_cycling": "熱サイクリング性能",
    "dpc_thermal_cycling": "-55°C〜150°C, 500サイクル<br><small class=\"text-muted\">めっき銅のCTE不一致により制限</small>",
    "dpc_thermal_cycling_note": "めっき銅のCTE不一致により制限",
    "dbc_thermal_cycling": "-55°C〜150°C, 1000+サイクル<br><small class=\"text-muted\">パワーサイクリングに優れる</small>",
    "dbc_thermal_cycling_note": "パワーサイクリングに優れる",
    "htcc_thermal_cycling": "-55°C〜150°C, 1000+サイクル<br><small class=\"text-muted\">優れた気密安定性</small>",
    "htcc_thermal_cycling_note": "優れた気密安定性",
    
    "feature_multilayer": "多層化能力",
    "dpc_multilayer": "1-2導体層<br><small class=\"text-muted\">スルーホールビアによる両面実装</small>",
    "dpc_multilayer_note": "スルーホールビアによる両面実装",
    "dbc_multilayer": "1-2層（接合）<br><small class=\"text-muted\">2つのDBCを接合可能</small>",
    "dbc_multilayer_note": "2つのDBCを接合可能",
    "htcc_multilayer": "2-50+層<br><small class=\"text-muted\">キャビティ付き真の3D構造</small>",
    "htcc_multilayer_note": "キャビティ付き真の3D構造",
    
    "feature_applications": "主な用途",
    "dpc_apps": "• RF/マイクロ波回路<br>• 微細ピッチLEDアレイ<br>• センサーパッケージ<br>• TECモジュール<br><small class=\"text-muted\">高精度特性が求められる用途</small>",
    "dpc_apps_note": "高精度特性が求められる用途",
    "dbc_apps": "• IGBTパワーモジュール<br>• EVトラクションインバーター<br>• 大電流バスバー<br>• 太陽光インバーター<br><small class=\"text-muted\">高出力、大電流</small>",
    "dbc_apps_note": "高出力、大電流",
    "htcc_apps": "• 気密RFパッケージ<br>• 航空宇宙電子機器<br>• マルチチップモジュール (MCM)<br>• 高信頼性センサー<br><small class=\"text-muted\">極限環境</small>",
    "htcc_apps_note": "極限環境",
    
    "feature_cost": "相対コスト要因",
    "dpc_cost": "中〜高<br><small class=\"text-muted\">フォトリソグラフィがコスト増</small>",
    "dpc_cost_note": "フォトリソグラフィがコスト増",
    "dbc_cost": "低〜中<br><small class=\"text-muted\">バルクプロセス、広面積に適す</small>",
    "dbc_cost_note": "バルクプロセス、広面積に適す",
    "htcc_cost": "高（セットアップ）<br>中（量産）<br><small class=\"text-muted\">NRE高、規模の経済あり</small>",
    "htcc_cost_note": "NRE高、規模の経済あり",
    
    "feature_lead_time": "標準リードタイム（生産）",
    "dpc_lead_time": "2-3週間<br><small class=\"text-muted\">フォトマスクが必要</small>",
    "dpc_lead_time_note": "フォトマスクが必要",
    "dbc_lead_time": "2-3週間<br><small class=\"text-muted\">レーザー/エッチング治具</small>",
    "dbc_lead_time_note": "レーザー/エッチング治具",
    "htcc_lead_time": "4-6週間<br><small class=\"text-muted\">スクリーン治具＋共焼サイクル</small>",
    "htcc_lead_time_note": "スクリーン治具＋共焼サイクル",
    
    "feature_recommendation": "この技術を選択する場合",
    "dpc_recommendation_title": "DPCを選択する場合:",
    "dpc_recommendation": "<strong>DPCを選択する場合:</strong><br>• 100μm未満の微細特性が必要<br>• ENIG/ENEPIG仕上げが必要<br>• RF性能が重要<br>• 少量、迅速な試作",
    "dbc_recommendation_title": "DBCを選択する場合:",
    "dbc_recommendation": "<strong>DBCを選択する場合:</strong><br>• 大電流 (>50A) が必要<br>• 優れた熱サイクリングが必要<br>• 厚銅 (0.3mm以上) が必要<br>• コスト重視の量産",
    "htcc_recommendation_title": "HTCCを選択する場合:",
    "htcc_recommendation": "<strong>HTCCを選択する場合:</strong><br>• 気密封装が必要<br>• 多層（4層以上）が必要<br>• 3D構造/キャビティが必要<br>• 極限環境動作",

    // Comparison Table Notes
    "note_dpc_title": "DPC注記:",
    "note_dpc1": "密着性のためのTi/Cuシード層",
    "note_dpc2": "微細特性とRFに最適",
    "note_dpc3": "DBCと比較して熱サイクリングに制限あり",
    "note_dbc_title": "DBC注記:",
    "note_dbc1": "1065°CでのCu-O共晶接合",
    "note_dbc2": "優れた熱サイクリング性能",
    "note_dbc3": "150μm未満の微細特性には不向き",
    "note_htcc_title": "HTCC注記:",
    "note_htcc1": "アルミナと共焼したW/Mo",
    "note_htcc2": "はんだ付け性のために後めっきが必要",
    "note_htcc3": "焼成時に12-18%収縮",

    // Featured Applications Section
    "applications_title": "主なアプリケーション",
    "applications_description": "当社のセラミック基板は、様々な産業における最先端技術を支えています",
    "app_htcc_aerospace_title": "航空宇宙・防衛用パッケージ",
    "app_htcc_aerospace_desc": "極限環境での安定性が求められるレーダーシステム、衛星部品、軍事電子機器向けのHTCC気密封装パッケージ。",
    "app_htcc_aerospace_badge1": "Al2O3",
    "app_htcc_aerospace_badge2": "気密",
    "app_htcc_aerospace_badge3": "RFシールド",
    "app_htcc_mcm_title": "マルチチップモジュール (MCM)",
    "app_htcc_mcm_desc": "半導体デバイスやMEMSセンサーの高密度実装のための、キャビティやビアを集積した複雑な多層基板。",
    "app_htcc_mcm_badge1": "3D構造",
    "app_htcc_mcm_badge2": "統合キャビティ",
    "app_htcc_mcm_badge3": "高密度",
    "app_laser_title": "レーザーダイオード放熱基板",
    "app_laser_desc": "LiDAR、光通信、産業用加工に用いられる半導体レーザー向けの高熱伝導性基板。",
    "app_laser_badge1": "AlN",
    "app_laser_badge2": "SiC",
    "app_laser_badge3": "0.3-0.35mm",
    "app_tec_title": "熱電冷却 (TEC) モジュール",
    "app_tec_desc": "光通信、医療機器、航空宇宙に用いられるペルチェ冷却モジュール向けの高精度セラミック基板。",
    "app_tec_badge1": "AlN/Al2O3",
    "app_tec_badge2": "Cu/Ni/Au",
    "app_tec_badge3": "0.15-0.635mm",
    "app_ide_title": "インタージタル電極 (IDE)",
    "app_ide_desc": "微細配線が求められる容量性センサー、ガス検知器、バイオメディカル用途向けの高精度電極パターン。",
    "app_ide_badge1": "Al2O3/PI/PET",
    "app_ide_badge2": "50μm-100mm",
    "app_ide_badge3": "Cu/Ni/Au",
    "app_igbt_title": "IGBTパワーモジュール",
    "app_igbt_desc": "堅牢な熱管理が求められる産業用モータードライブ、EVインバーター、再生可能エネルギーシステム向けの高出力DBC基板。",
    "app_igbt_badge1": "AlN/Al2O3",
    "app_igbt_badge2": "0.3mm銅厚",
    "app_igbt_badge3": "高電圧",
    "app_rf_title": "RFパワーアンプ",
    "app_rf_desc": "高周波特性が求められる5G基地局、マイクロ波通信、レーダーシステム向けの低損失DPC基板。",
    "app_rf_badge1": "AlN",
    "app_rf_badge2": "微細ピッチ",
    "app_rf_badge3": "高周波",
    "app_led_title": "高出力LEDパッケージング",
    "app_led_desc": "効率的な放熱が求められる自動車用ヘッドライト、産業用照明、UV LEDアプリケーション向けの熱管理基板。",
    "app_led_badge1": "Al2O3",
    "app_led_badge2": "高反射率",
    "app_led_badge3": "良好なCTE整合",
    "app_ev_title": "EV充電・電力変換",
    "app_ev_desc": "大電流容量と熱安定性が求められるEV充電ステーションおよび電源コンバーター向けの高信頼性セラミック基板。",
    "app_ev_badge1": "大電流",
    "app_ev_badge2": "熱信頼性",
    "app_ev_badge3": "AlN/Al2O3",

    // Resources Section
    "resources_title": "技術資料",
    "resources_description": "データシート、アプリケーションノート、設計ガイドラインをダウンロードできます",
    "resource_datasheets_title": "製品データシート",
    "resource_datasheets_desc": "当社の全てのセラミック基板製品に関する詳細な仕様と技術データ。",
    "resource_design_title": "設計ガイドライン",
    "resource_design_desc": "セラミック基板の設計と熱性能の最適化に関するベストプラクティス。",
    "resource_samples_title": "サンプル請求",
    "resource_samples_desc": "当社のセラミック基板製品を評価・テストするための無料サンプルをご利用ください。",

    // CTA Section
    "products_cta_title": "カスタムセラミック基板ソリューションをお探しですか？",
    "products_cta_description": "当社のエンジニアリングチームは、お客様の特定の要件に合わせたカスタムセラミック基板ソリューションの開発を専門としています。",
    "cta_prototyping": "迅速な試作",
    "cta_prototyping_desc": "カスタム設計を2-3週間でご提供",
    "cta_technical_support": "技術サポート",
    "cta_technical_support_desc": "エンジニアリング相談対応",
    "cta_phone": "+86-147-4537-3293",

    // Footer
    "footer_description": "2016年設立以来、熱管理アプリケーション向けセラミックメタライゼーション基板の主要メーカー。ISO 14001:2015認証を取得し、グローバルな製造能力を有しています。",
    "footer_products": "製品",
    "footer_company": "会社情報",
    "footer_contact": "連絡先",
    "footer_email": "sales@jimei-materials.com",
    "footer_phone": "+86-147-4537-3293",
    "footer_address": "中国 広東省 深圳市 宝安区 新橋街道 浩森林坡坑第一工業区",
    "footer_hours": "月～金: 8:00 AM - 6:00 PM (GMT+8)",
    "footer_languages": "対応言語: 英語、中国語、日本語、韓国語、ドイツ語",
    "footer_copyright": "Copyright &copy;",
    "footer_company_name": "Jimei Materials Co., Ltd.",
    "footer_rights": "All rights reserved.",
    "footer_privacy": "プライバシーポリシー",
    "footer_terms": "利用規約",
    "footer_sitemap": "サイトマップ"
},
        
        ko: {
    // 메타 데이터 및 SEO
    "products_page_title": "세라믹 기판 제조사 | DBC, DPC 및 HTCC 솔루션 | Jimei Materials",
    "products_meta_description": "파워일렉트로닉스, 항공우주, RF 및 반도체 패키징을 위한 DBC(직접 접합 구리), DPC(직접 도금 구리), HTCC(고온 동시 소성 세라믹) 등 고급 세라믹 금속화 기판 포트폴리오를 제공합니다.",
    "products_meta_description2": "고급 세라믹 금속화 기판: DBC(직접 접합 구리 100-300μm Cu), DPC(직접 도금 구리 20μm 선폭), HTCC(텅스텐/몰리브덴 금속화 고온 동시 소성 세라믹). 파워일렉트로닉스, RF, 항공우주 패키징을 위한 기술 사양, 설계 지침 및 응용 분야. ISO 9001 인증 제조사.",
    "products_meta_keywords": "세라믹 기판 제조사, DBC 기판, DPC 세라믹, HTCC 다층 세라믹, 직접 접합 구리, 직접 도금 구리, 고온 동시 소성 세라믹, 파워일렉트로닉스 기판, RF 세라믹 패키지, 기밀 패키징, 열관리 솔루션, 반도체 패키징 재료, AlN 기판, 알루미나 세라믹, IGBT 기판",
    "products_og_title": "세라믹 기판 제품 카탈로그 | DBC, DPC 및 HTCC 솔루션 | Jimei Materials",
    "products_og_description": "파워일렉트로닉스, 항공우주, RF 및 반도체 패키징을 위한 DBC, DPC, HTCC 기판을 포함한 고성능 세라믹 금속화 기판 포트폴리오",
    "products_twitter_title": "세라믹 기판 제품 카탈로그 | DBC, DPC 및 HTCC 솔루션 | Jimei Materials",
    "products_twitter_description": "파워일렉트로닉스, 항공우주, RF 및 반도체 패키징을 위한 DBC, DPC, HTCC 기판을 포함한 고성능 세라믹 금속화 기판 포트폴리오",

    // 네비게이션 및 언어
    "nav_home": "홈",
    "nav_products": "제품",
    "nav_dpc": "직접 도금 구리 (DPC)",
    "nav_dbc": "직접 접합 구리 (DBC)",
    "nav_bare": "무도금 세라믹 기판",
    "nav_htcc": "HTCC 세라믹 패키징",
    "nav_all_products": "전체 제품",
    "nav_resources": "기술 자료",
    "nav_about": "회사소개",
    "nav_contact": "문의하기",
    "nav_request_quote": "견적 요청",
    "nav_blog": "블로그",
    "skip_to_content": "본문으로 건너뛰기",
    "current_language": "영어",
    "language_en": "English",
    "language_zh": "中文",
    "language_ja": "日本語",
    "language_ko": "한국어",
    "language_de": "Deutsch",

    // 브레드크럼
    "breadcrumb_home": "홈",
    "breadcrumb_products": "제품",

    // 페이지 헤더
    "products_main_title": "세라믹 금속화 기판 제품",
    "products_subtitle": "파워일렉트로닉스, 항공우주, RF 및 반도체 패키징을 위한 고성능 솔루션",

    // 제품 카테고리 섹션
    "categories_title": "제품 카테고리",
    "categories_description": "포괄적인 세라믹 기판 솔루션 라인업을 확인하세요",
    "category_dpc_title": "직접 도금<br>구리 (DPC)",
    "category_dpc_desc": "탁월한 전기적 성능과 정밀한 회로 패턴 구현이 가능한 RF/마이크로파 응용, 반도체 패키징 및 미세 피치 회로용 세라믹 기판.",
    "category_dbc_title": "직접 접합<br>구리 (DBC)",
    "category_dbc_desc": "IGBT 모듈, EV 파워 시스템 및 우수한 방열 성능이 요구되는 산업용 구동 장치를 위한 고열전도성 기판.",
    "category_bare_title": "무도금 세라믹<br>기판",
    "category_bare_desc": "센서, 절연체 및 열관리 부품용 고품질 알루미나 및 질화알루미늄 세라믹 기판.",
    "category_htcc_title": "고온 동시 소성 세라믹 (HTCC)",
    "category_htcc_desc": "기밀 패키징, RF 모듈 및 극한의 신뢰성이 필요한 항공우주 응용 분야를 위한 비아 및 캐비티가 집적된 다층 세라믹 기판.",

    // 사양 뱃지
    "spec_tolerance": "±10μm 공차",
    "spec_line_width": "20μm 선폭",
    "spec_surface_finish": "ENIG/Au 도금",
    "spec_thermal": "170-200 W/mK",
    "spec_copper_thick": "0.2-0.3mm Cu",
    "spec_high_power": "고출력",
    "spec_materials": "AlN/Al2O3/Si3N4",
    "spec_custom_sizes": "맞춤형 사이즈",
    "spec_polished": "연마/랩핑",
    "spec_multilayer": "다층 구조",
    "spec_hermetic": "기밀 밀봉",
    "spec_high_temp": "1600°C 소성",

    // 버튼
    "btn_view_category": "제품 보기",
    "btn_view_resources": "기술 자료 보기",
    "btn_request_samples": "샘플 요청",
    "btn_contact_engineering": "기술 상담",

    // 기술 비교 섹션
    "comparison_title": "기술 비교",
    "comparison_description": "응용 분야에 적합한 세라믹 기판 기술을 선택하세요",
    "comparison_table_caption": "상세 사양을 포함한 DPC, DBC 및 HTCC 세라믹 기판 기술 비교",
    "comparison_feature": "특징 / 매개변수",
    "comparison_dpc": "DPC (직접 도금 구리)",
    "comparison_dbc": "DBC (직접 접합 구리)",
    "comparison_bare": "무도금 세라믹",
    "comparison_htcc": "HTCC (고온 동시 소성)",
    
    "feature_process": "공정 기술",
    "dpc_process": "전해 도금 및 포토리소그래피",
    "dpc_process_note": "상온 ~ 200°C 공정",
    "dbc_process": "고온 접합",
    "dbc_process_note": "N<sub>2</sub>/H<sub>2</sub> 분위기 1065-1083°C",
    "htcc_process": "테이프 캐스팅 및 동시 소성",
    "htcc_process_note": "환원 분위기(H<sub>2</sub>/N<sub>2</sub>) 1600°C",
    
    "feature_thermal": "열전도도",
    "dpc_thermal_conductivity": "<strong>Al₂O₃:</strong> 24-28 W/mK<br><strong>AlN:</strong> 170-200 W/mK<br><small class=\"text-muted\">두께 방향</small>",
    "dpc_thermal_note": "두께 방향",
    "dbc_thermal_conductivity": "<strong>Al₂O₃:</strong> 24-28 W/mK<br><strong>AlN:</strong> 170-200 W/mK<br><small class=\"text-muted\">두께 방향</small>",
    "dbc_thermal_note": "두께 방향",
    "htcc_thermal_conductivity": "<strong>알루미나 기반:</strong> 15-30 W/mK<br><strong>참고:</strong> 도체는 W/Mo(구리 아님)<br><small class=\"text-muted\">W/Mo 금속화로 인해 DPC/DBC보다 낮음</small>",
    "htcc_thermal_note1": "참고:",
    "htcc_thermal_note2": "도체는 W/Mo(구리 아님)",
    "htcc_thermal_note3": "W/Mo 금속화로 인해 DPC/DBC보다 낮음",
    
    "feature_conductor": "도체 재료",
    "dpc_conductor": "전해 도금 구리 (Cu)<br><small class=\"text-muted\">일반적 저항률: 1.7 μΩ·cm</small>",
    "dpc_conductor_note": "일반적 저항률: 1.7 μΩ·cm",
    "dbc_conductor": "접합 구리 포일 (Cu)<br><small class=\"text-muted\">무산소 구리, 일반적 순도 99.99%</small>",
    "dbc_conductor_note": "무산소 구리, 일반적 순도 99.99%",
    "htcc_conductor": "텅스텐 (W) 또는 몰리브덴 (Mo)<br><small class=\"text-muted\">세라믹과 동시 소성, 후속 도금 필요</small>",
    "htcc_conductor_note": "세라믹과 동시 소성, 후속 도금 필요",
    
    "feature_conductor_thickness": "도체 두께",
    "dpc_conductor_thickness": "5-100 μm (도금)<br><small class=\"text-muted\">전해 도금 시간으로 제어</small>",
    "dpc_conductor_thickness_note": "전해 도금 시간으로 제어",
    "dbc_conductor_thickness": "100-300 μm (포일)<br><small class=\"text-muted\">표준: 0.2mm, 0.3mm, 0.4mm</small>",
    "dbc_conductor_thickness_note": "표준: 0.2mm, 0.3mm, 0.4mm",
    "htcc_conductor_thickness": "10-20 μm (인쇄)<br><small class=\"text-muted\">동시 소성 후 (도금 전)</small>",
    "htcc_conductor_thickness_note": "동시 소성 후 (도금 전)",
    
    "feature_line_width": "최소 선폭/간격",
    "dpc_line_width": "20/20 μm<br><small class=\"text-muted\">포토리소그래피 사용</small>",
    "dpc_line_width_note": "포토리소그래피 사용",
    "dbc_line_width": "150/150 μm<br><small class=\"text-muted\">레이저 절단 또는 화학적 에칭</small>",
    "dbc_line_width_note": "레이저 절단 또는 화학적 에칭",
    "htcc_line_width": "100/100 μm<br><small class=\"text-muted\">스크린 인쇄, 동시 소성</small>",
    "htcc_line_width_note": "스크린 인쇄, 동시 소성",
    
    "feature_via": "비아 직경 (최소)",
    "dpc_via": "50 μm (레이저 드릴)<br><small class=\"text-muted\">도금 관통 홀</small>",
    "dpc_via_note": "도금 관통 홀",
    "dbc_via": "일반적 아님<br><small class=\"text-muted\">추가 공정으로 가능</small>",
    "dbc_via_note": "추가 공정으로 가능",
    "htcc_via": "100 μm (펀칭)<br><small class=\"text-muted\">W/Mo 페이스트 충전</small>",
    "htcc_via_note": "W/Mo 페이스트 충전",
    
    "feature_bond_strength": "접합 강도 (세라믹-금속)",
    "dpc_bond_strength": "30-40 MPa<br><small class=\"text-muted\">Ti/Cu 시드층 접착력</small>",
    "dpc_bond_strength_note": "Ti/Cu 시드층 접착력",
    "dbc_bond_strength": ">20 MPa<br><small class=\"text-muted\">Cu-O 공융 접합</small>",
    "dbc_bond_strength_note": "Cu-O 공융 접합",
    "htcc_bond_strength": "일체형 (동시 소성)<br><small class=\"text-muted\">별도 접합 계면 없음</small>",
    "htcc_bond_strength_note": "별도 접합 계면 없음",
    
    "feature_surface_finish": "표면 처리 옵션",
    "dpc_surface_finish": "ENIG, ENEPIG, 침지 Sn<br>전해 도금 Ni/Au, OSP<br><small class=\"text-muted\">도금 구리 위 직접</small>",
    "dpc_surface_finish_note": "도금 구리 위 직접",
    "dbc_surface_finish": "베어 구리, 침지 Sn<br>ENIG, 직접 솔더 코팅<br><small class=\"text-muted\">Ni 차단층 필요할 수 있음</small>",
    "dbc_surface_finish_note": "Ni 차단층 필요할 수 있음",
    "htcc_surface_finish": "ENIG, ENEPIG 필요<br>전해 도금 Ni/Au/Sn<br><small class=\"text-muted\">W/Mo는 소성 상태로 납땜 불가</small>",
    "htcc_surface_finish_note": "W/Mo는 소성 상태로 납땜 불가",
    
    "feature_thermal_cycling": "열 사이클링 성능",
    "dpc_thermal_cycling": "-55°C ~ 150°C, 500회<br><small class=\"text-muted\">도금 구리 열팽창 계수 불일치로 제한</small>",
    "dpc_thermal_cycling_note": "도금 구리 열팽창 계수 불일치로 제한",
    "dbc_thermal_cycling": "-55°C ~ 150°C, 1000+회<br><small class=\"text-muted\">파워 사이클링에 우수</small>",
    "dbc_thermal_cycling_note": "파워 사이클링에 우수",
    "htcc_thermal_cycling": "-55°C ~ 150°C, 1000+회<br><small class=\"text-muted\">우수한 기밀 안정성</small>",
    "htcc_thermal_cycling_note": "우수한 기밀 안정성",
    
    "feature_multilayer": "다층 구현 능력",
    "dpc_multilayer": "1-2 도전층<br><small class=\"text-muted\">PTH 비아 양면</small>",
    "dpc_multilayer_note": "PTH 비아 양면",
    "dbc_multilayer": "1-2층 (접합)<br><small class=\"text-muted\">두 DBC 접합 가능</small>",
    "dbc_multilayer_note": "두 DBC 접합 가능",
    "htcc_multilayer": "2-50+층<br><small class=\"text-muted\">캐비티 포함 진정한 3D 구조</small>",
    "htcc_multilayer_note": "캐비티 포함 진정한 3D 구조",
    
    "feature_applications": "주요 응용 분야",
    "dpc_apps": "• RF/마이크로파 회로<br>• 미세 피치 LED 배열<br>• 센서 패키지<br>• TEC 모듈<br><small class=\"text-muted\">정밀 특성이 필요한 경우</small>",
    "dpc_apps_note": "정밀 특성이 필요한 경우",
    "dbc_apps": "• IGBT 파워 모듈<br>• EV 트랙션 인버터<br>• 고전류 버스바<br>• 태양광 인버터<br><small class=\"text-muted\">고출력, 고전류</small>",
    "dbc_apps_note": "고출력, 고전류",
    "htcc_apps": "• 기밀 RF 패키지<br>• 항공우주 전자 장치<br>• 다중 칩 모듈 (MCM)<br>• 고신뢰성 센서<br><small class=\"text-muted\">극한 환경</small>",
    "htcc_apps_note": "극한 환경",
    
    "feature_cost": "상대적 비용 요소",
    "dpc_cost": "중간 ~ 높음<br><small class=\"text-muted\">포토리소그래피로 인한 추가 비용</small>",
    "dpc_cost_note": "포토리소그래피로 인한 추가 비용",
    "dbc_cost": "낮음 ~ 중간<br><small class=\"text-muted\">대량 공정, 넓은 면적에 적합</small>",
    "dbc_cost_note": "대량 공정, 넓은 면적에 적합",
    "htcc_cost": "높음 (설정)<br>중간 (대량)<br><small class=\"text-muted\">높은 NRE, 규모의 경제</small>",
    "htcc_cost_note": "높은 NRE, 규모의 경제",
    
    "feature_lead_time": "표준 납기 (생산)",
    "dpc_lead_time": "2-3주<br><small class=\"text-muted\">포토마스크 필요</small>",
    "dpc_lead_time_note": "포토마스크 필요",
    "dbc_lead_time": "2-3주<br><small class=\"text-muted\">레이저/에칭 공구</small>",
    "dbc_lead_time_note": "레이저/에칭 공구",
    "htcc_lead_time": "4-6주<br><small class=\"text-muted\">스크린 공구 + 동시 소성 주기</small>",
    "htcc_lead_time_note": "스크린 공구 + 동시 소성 주기",
    
    "feature_recommendation": "해당 기술 선택 시기",
    "dpc_recommendation_title": "DPC 선택 시기:",
    "dpc_recommendation": "<strong>DPC 선택 시기:</strong><br>• 미세 특성 <100μm 필요<br>• ENIG/ENEPIG 처리 필요<br>• RF 성능이 중요<br>• 소량, 빠른 프로토타입",
    "dbc_recommendation_title": "DBC 선택 시기:",
    "dbc_recommendation": "<strong>DBC 선택 시기:</strong><br>• 고전류 (>50A) 필요<br>• 우수한 열 사이클링 필요<br>• 두꺼운 구리 (0.3mm+) 필요<br>• 비용 민감 대량 생산",
    "htcc_recommendation_title": "HTCC 선택 시기:",
    "htcc_recommendation": "<strong>HTCC 선택 시기:</strong><br>• 기밀 밀봉 필요<br>• 다층 (>4층) 필요<br>• 3D 구조/캐비티 필요<br>• 극한 환경 작동",

    // 비교표 참고사항
    "note_dpc_title": "DPC 참고사항:",
    "note_dpc1": "접착력 위한 Ti/Cu 시드층",
    "note_dpc2": "미세 특성 & RF에 최적",
    "note_dpc3": "DBC 대비 제한된 열 사이클링",
    "note_dbc_title": "DBC 참고사항:",
    "note_dbc1": "1065°C Cu-O 공융 접합",
    "note_dbc2": "우수한 열 사이클링",
    "note_dbc3": "미세 특성 <150μm에 부적합",
    "note_htcc_title": "HTCC 참고사항:",
    "note_htcc1": "알루미나와 W/Mo 동시 소성",
    "note_htcc2": "납땜성을 위한 후속 도금 필요",
    "note_htcc3": "소성 중 12-18% 수축",

    // 주요 응용 분야 섹션
    "applications_title": "주요 응용 분야",
    "applications_description": "당사의 세라믹 기판은 다양한 산업의 첨단 기술을 지원합니다",
    "app_htcc_aerospace_title": "항공우주 및 방산 패키지",
    "app_htcc_aerospace_desc": "레이더 시스템, 위성 부품 및 극한 환경 안정성이 요구되는 군사용 전자 장치를 위한 기밀 밀봉 HTCC 패키지.",
    "app_htcc_aerospace_badge1": "Al2O3",
    "app_htcc_aerospace_badge2": "기밀",
    "app_htcc_aerospace_badge3": "RF 차폐",
    "app_htcc_mcm_title": "다중 칩 모듈 (MCM)",
    "app_htcc_mcm_desc": "반도체 소자 및 MEMS 센서의 고밀도 패키징을 위한 집적 캐비티와 비아가 구현된 복잡한 다층 기판.",
    "app_htcc_mcm_badge1": "3D 구조",
    "app_htcc_mcm_badge2": "집적 캐비티",
    "app_htcc_mcm_badge3": "고밀도",
    "app_laser_title": "레이저 다이오드 방열판",
    "app_laser_desc": "라이다, 광통신 및 산업용 프로세싱에 사용되는 반도체 레이저용 고열전도성 기판.",
    "app_laser_badge1": "AlN",
    "app_laser_badge2": "SiC",
    "app_laser_badge3": "0.3-0.35mm",
    "app_tec_title": "열전 냉각기 (TEC) 모듈",
    "app_tec_desc": "광통신, 의료 기기 및 항공우주 분야에 사용되는 펠티어 냉각 모듈용 정밀 세라믹 기판.",
    "app_tec_badge1": "AlN/Al2O3",
    "app_tec_badge2": "Cu/Ni/Au",
    "app_tec_badge3": "0.15-0.635mm",
    "app_ide_title": "인터디지털 전극 (IDE)",
    "app_ide_desc": "정밀 전극 패턴으로, 미세 피치 회로가 필요한 정전 용량식 센서, 가스 감지기 및 생체 의학 응용 분야에 적합합니다.",
    "app_ide_badge1": "Al2O3/PI/PET",
    "app_ide_badge2": "50μm-100mm",
    "app_ide_badge3": "Cu/Ni/Au",
    "app_igbt_title": "IGBT 파워 모듈",
    "app_igbt_desc": "강력한 열관리가 필요한 산업용 모터 구동기, EV 인버터 및 재생 에너지 시스템용 고출력 DBC 기판.",
    "app_igbt_badge1": "AlN/Al2O3",
    "app_igbt_badge2": "0.3mm Cu",
    "app_igbt_badge3": "고전압",
    "app_rf_title": "RF 파워 증폭기",
    "app_rf_desc": "5G 기지국, 마이크로파 통신 및 고주파 성능이 요구되는 레이더 시스템용 저손실 DPC 기판.",
    "app_rf_badge1": "AlN",
    "app_rf_badge2": "미세 피치",
    "app_rf_badge3": "고주파",
    "app_led_title": "고출력 LED 패키징",
    "app_led_desc": "효율적인 방열 성능이 필요한 자동차 헤드라이트, 산업용 조명 및 UV LED 응용 분야를 위한 열관리 기판.",
    "app_led_badge1": "Al2O3",
    "app_led_badge2": "고반사율",
    "app_led_badge3": "우수한 CTE 일치",
    "app_ev_title": "전기차 충전 및 전력 변환",
    "app_ev_desc": "고전류 처리 능력과 열적 안정성이 요구되는 EV 충전 스테이션 및 전력 변환 장치용 고신뢰성 세라믹 기판.",
    "app_ev_badge1": "고전류",
    "app_ev_badge2": "열적 신뢰성",
    "app_ev_badge3": "AlN/Al2O3",

    // 기술 자료 섹션
    "resources_title": "기술 자료",
    "resources_description": "데이터시트, 응용 노트 및 설계 지침을 다운로드하세요",
    "resource_datasheets_title": "제품 데이터시트",
    "resource_datasheets_desc": "모든 세라믹 기판 제품에 대한 상세 사양 및 기술 데이터",
    "resource_design_title": "설계 지침",
    "resource_design_desc": "세라믹 기판 설계 및 열성능 최적화를 위한 모범 사례",
    "resource_samples_title": "샘플 요청",
    "resource_samples_desc": "당사 세라믹 기판 제품 평가 및 테스트를 위한 무료 샘플을 받아보세요",

    // CTA 섹션
    "products_cta_title": "맞춤형 세라믹 기판 솔루션이 필요하신가요?",
    "products_cta_description": "당사의 엔지니어링 팀은 고객의 특정 요구사항에 맞춘 맞춤형 세라믹 기판 솔루션 개발을 전문으로 합니다.",
    "cta_prototyping": "신속한 프로토타이핑",
    "cta_prototyping_desc": "2-3주 내 맞춤형 설계 제공",
    "cta_technical_support": "기술 지원",
    "cta_technical_support_desc": "엔지니어링 컨설팅 가능",
    "cta_phone": "+86-147-4537-3293",

    // 푸터
    "footer_description": "2016년 설립 이래 열관리 응용 분야를 위한 세라믹 금속화 기판의 선도적 제조사입니다. ISO 14001:2015 인증 및 글로벌 제조 역량 보유.",
    "footer_products": "제품",
    "footer_company": "회사",
    "footer_contact": "연락처 정보",
    "footer_email": "sales@jimei-materials.com",
    "footer_phone": "+86-147-4537-3293",
    "footer_address": "중국 광동성 심천시 바오안구 신차오가 하오산 린포컹 제1산업구",
    "footer_hours": "월-금: 오전 8시 - 오후 6시 (GMT+8)",
    "footer_languages": "지원 언어: 영어, 중국어, 일본어, 한국어, 독일어",
    "footer_copyright": "저작권 &copy;",
    "footer_company_name": "Jimei Materials Co., Ltd.",
    "footer_rights": "판권 소유.",
    "footer_privacy": "개인정보처리방침",
    "footer_terms": "이용약관",
    "footer_sitemap": "사이트맵"
},

        de: {
    // Meta & SEO
    "products_page_title": "Hersteller von Keramiksubstraten | DBC, DPC & HTCC Lösungen | Jimei Materials",
    "products_meta_description": "Vollständiges Portfolio fortschrittlicher metallisierter Keramiksubstrate: DBC (Direct Bond Copper), DPC (Direct Plated Copper) und HTCC (Hochtemperatur-ko-gesinterte Keramik) für Leistungselektronik, Luft- und Raumfahrt, Hochfrequenztechnik und Halbleitergehäuse.",
    "products_meta_description2": "Fortschrittliche metallisierte Keramiksubstrate: DBC (Direct Bond Copper 100-300µm Cu), DPC (Direct Plated Copper 20µm Leiterbahnen), HTCC (Hochtemperatur-ko-gesinterte Keramik mit W/Mo-Metallisierung). Technische Spezifikationen, Designrichtlinien und Anwendungen für Leistungselektronik, HF-Technik, Luft- und Raumfahrtgehäuse. ISO 9001 zertifizierter Hersteller.",
    "products_meta_keywords": "Keramiksubstrat Hersteller, DBC Substrat, DPC Keramik, HTCC Mehrlagenkeramik, Direct Bonded Copper, Direct Plated Copper, Hochtemperatur-ko-gesinterte Keramik, Substrate für Leistungselektronik, HF-Keramikgehäuse, hermetische Gehäuse, Wärmemanagement Lösungen, Materialien für Halbleitergehäuse, AlN Substrate, Aluminiumoxid-Keramik, IGBT Substrate",
    "products_og_title": "Produktkatalog Keramiksubstrate | DBC, DPC & HTCC Lösungen | Jimei Materials",
    "products_og_description": "Vollständiges Portfolio hochleistungsfähiger metallisierter Keramiksubstrate einschließlich DBC-, DPC- und HTCC-Substraten für Leistungselektronik, Luft- und Raumfahrt, HF-Technik und Halbleitergehäuse.",
    "products_twitter_title": "Produktkatalog Keramiksubstrate | DBC, DPC & HTCC Lösungen | Jimei Materials",
    "products_twitter_description": "Vollständiges Portfolio hochleistungsfähiger metallisierter Keramiksubstrate einschließlich DBC-, DPC- und HTCC-Substraten für Leistungselektronik, Luft- und Raumfahrt, HF-Technik und Halbleitergehäuse.",

    // Navigation & Language
    "nav_home": "Startseite",
    "nav_products": "Produkte",
    "nav_dpc": "Direct Plated Copper (DPC)",
    "nav_dbc": "Direct Bonded Copper (DBC)",
    "nav_bare": "Unbeschichtete Keramiksubstrate",
    "nav_htcc": "HTCC Keramikgehäuse",
    "nav_all_products": "Alle Produkte",
    "nav_resources": "Ressourcen",
    "nav_about": "Über uns",
    "nav_contact": "Kontakt",
    "nav_request_quote": "Angebot anfordern",
    "nav_blog": "Blog",
    "skip_to_content": "Zum Hauptinhalt springen",
    "current_language": "Deutsch",
    "language_en": "Englisch",
    "language_zh": "Chinesisch",
    "language_ja": "Japanisch",
    "language_ko": "Koreanisch",
    "language_de": "Deutsch",

    // Breadcrumbs
    "breadcrumb_home": "Startseite",
    "breadcrumb_products": "Produkte",

    // Page Header
    "products_main_title": "Metallisierte Keramiksubstrate",
    "products_subtitle": "Hochleistungsfähige Lösungen für Leistungselektronik, Luft- und Raumfahrt, Hochfrequenztechnik und Halbleitergehäuse.",

    // Product Categories Section
    "categories_title": "Produktkategorien",
    "categories_description": "Durchsuchen Sie unser umfassendes Portfolio an Keramiksubstrat-Lösungen",
    "category_dpc_title": "Direct Plated<br>Copper (DPC)",
    "category_dpc_desc": "Präzisions-Keramiksubstrate für HF-/Mikrowellenanwendungen, Halbleitergehäuse und Feinstleiterstrukturen mit hervorragenden elektrischen Eigenschaften.",
    "category_dbc_title": "Direct Bonded<br>Copper (DBC)",
    "category_dbc_desc": "Substrate mit hoher Wärmeleitfähigkeit für IGBT-Module, EV-Antriebssysteme und Industrieantriebe, die eine überlegene Wärmeableitung erfordern.",
    "category_bare_title": "Unbeschichtete<br>Keramiksubstrate",
    "category_bare_desc": "Hochwertige Aluminiumoxid- und Aluminiumnitrid-Substrate für Sensoren, Isolatoren und Wärmemanagement-Komponenten.",
    "category_htcc_title": "Hochtemperatur-ko-gesinterte Keramik (HTCC)",
    "category_htcc_desc": "Mehrlagen-Keramiksubstrate mit integrierten Durchkontaktierungen und Kavitäten für hermetische Gehäuse, HF-Module und Luft- und Raumfahrtanwendungen mit extremen Zuverlässigkeitsanforderungen.",

    // Specification Badges
    "spec_tolerance": "Toleranz ±10 µm",
    "spec_line_width": "Leiterbahnbreite 20 µm",
    "spec_surface_finish": "ENIG/Au-Oberfläche",
    "spec_thermal": "170-200 W/mK",
    "spec_copper_thick": "0,2-0,3 mm Cu",
    "spec_high_power": "Hochleistung",
    "spec_materials": "AlN/Al₂O₃/Si₃N₄",
    "spec_custom_sizes": "Kundenspezifische Größen",
    "spec_polished": "Poliert/Geläppt",
    "spec_multilayer": "Mehrlagen",
    "spec_hermetic": "Hermetisch dicht",
    "spec_high_temp": "Sintern bei 1600°C",

    // Buttons
    "btn_view_category": "Produkte ansehen",
    "btn_view_resources": "Ressourcen ansehen",
    "btn_request_samples": "Muster anfordern",
    "btn_contact_engineering": "Technische Beratung",

    // Technology Comparison Section
    "comparison_title": "Technologievergleich",
    "comparison_description": "Wählen Sie die richtige Keramiksubstrat-Technologie für Ihre Anwendung",
    "comparison_table_caption": "Vergleich von DPC-, DBC- und HTCC-Keramiksubstrat-Technologien mit detaillierten Spezifikationen",
    "comparison_feature": "Merkmal / Parameter",
    "comparison_dpc": "DPC (Direct Plated Copper)",
    "comparison_dbc": "DBC (Direct Bonded Copper)",
    "comparison_bare": "Unbeschichtete Keramik",
    "comparison_htcc": "HTCC (Hochtemperatur-ko-gesintert)",
    
    "feature_process": "Prozesstechnologie",
    "dpc_process": "Galvanik & Fotolithografie",
    "dpc_process_note": "Prozesse bei Raumtemperatur bis 200°C",
    "dbc_process": "Hochtemperatur-Verbund",
    "dbc_process_note": "1065-1083°C in N<sub>2</sub>/H<sub>2</sub>-Atmosphäre",
    "htcc_process": "Tape Casting & Ko-Sintern",
    "htcc_process_note": "1600°C in reduzierender Atmosphäre (H<sub>2</sub>/N<sub>2</sub>)",
    
    "feature_thermal": "Wärmeleitfähigkeit",
    "dpc_thermal_conductivity": "<strong>Al₂O₃:</strong> 24-28 W/mK<br><strong>AlN:</strong> 170-200 W/mK<br><small class=\"text-muted\">In Dickenrichtung</small>",
    "dpc_thermal_note": "In Dickenrichtung",
    "dbc_thermal_conductivity": "<strong>Al₂O₃:</strong> 24-28 W/mK<br><strong>AlN:</strong> 170-200 W/mK<br><small class=\"text-muted\">In Dickenrichtung</small>",
    "dbc_thermal_note": "In Dickenrichtung",
    "htcc_thermal_conductivity": "<strong>Al₂O₃-basiert:</strong> 15-30 W/mK<br><strong>Hinweis:</strong> Leiter ist W/Mo (nicht Cu)<br><small class=\"text-muted\">Geringer als DPC/DBC aufgrund der W/Mo-Metallisierung</small>",
    "htcc_thermal_note1": "Hinweis:",
    "htcc_thermal_note2": "Leiter ist W/Mo (nicht Cu)",
    "htcc_thermal_note3": "Geringer als DPC/DBC aufgrund der W/Mo-Metallisierung",
    
    "feature_conductor": "Leitermaterial",
    "dpc_conductor": "Galvanisch abgeschiedenes Kupfer (Cu)<br><small class=\"text-muted\">Typischer spez. Widerstand: 1,7 µΩ·cm</small>",
    "dpc_conductor_note": "Typischer spez. Widerstand: 1,7 µΩ·cm",
    "dbc_conductor": "Verbundene Kupferfolie (Cu)<br><small class=\"text-muted\">Sauerstofffreies Kupfer, typisch 99,99 % Reinheit</small>",
    "dbc_conductor_note": "Sauerstofffreies Kupfer, typisch 99,99 % Reinheit",
    "htcc_conductor": "Wolfram (W) oder Molybdän (Mo)<br><small class=\"text-muted\">Mit Keramik ko-gesintert, erfordert Nachbeschichtung</small>",
    "htcc_conductor_note": "Mit Keramik ko-gesintert, erfordert Nachbeschichtung",
    
    "feature_conductor_thickness": "Leiterdicke",
    "dpc_conductor_thickness": "5-100 µm (galvanisch)<br><small class=\"text-muted\">Kontrolliert durch Galvanisierungszeit</small>",
    "dpc_conductor_thickness_note": "Kontrolliert durch Galvanisierungszeit",
    "dbc_conductor_thickness": "100-300 µm (Folie)<br><small class=\"text-muted\">Standard: 0,2 mm, 0,3 mm, 0,4 mm</small>",
    "dbc_conductor_thickness_note": "Standard: 0,2 mm, 0,3 mm, 0,4 mm",
    "htcc_conductor_thickness": "10-20 µm (gedruckt)<br><small class=\"text-muted\">Nach dem Ko-Sintern (vor der Beschichtung)</small>",
    "htcc_conductor_thickness_note": "Nach dem Ko-Sintern (vor der Beschichtung)",
    
    "feature_line_width": "Min. Leiterbahn-/Abstand-Breite",
    "dpc_line_width": "20/20 µm<br><small class=\"text-muted\">Mit Fotolithografie</small>",
    "dpc_line_width_note": "Mit Fotolithografie",
    "dbc_line_width": "150/150 µm<br><small class=\"text-muted\">Laser- oder chemisch geätzt</small>",
    "dbc_line_width_note": "Laser- oder chemisch geätzt",
    "htcc_line_width": "100/100 µm<br><small class=\"text-muted\">Siebdruck, ko-gesintert</small>",
    "htcc_line_width_note": "Siebdruck, ko-gesintert",
    
    "feature_via": "Durchkontaktierungs-Durchmesser (Min.)",
    "dpc_via": "50 µm (lasergebohrt)<br><small class=\"text-muted\">Durchkontaktierung galvanisch ausgefüllt</small>",
    "dpc_via_note": "Durchkontaktierung galvanisch ausgefüllt",
    "dbc_via": "Nicht typisch<br><small class=\"text-muted\">Mit zusätzlicher Verarbeitung möglich</small>",
    "dbc_via_note": "Mit zusätzlicher Verarbeitung möglich",
    "htcc_via": "100 µm (gestanzt)<br><small class=\"text-muted\">Mit W/Mo-Paste gefüllt</small>",
    "htcc_via_note": "Mit W/Mo-Paste gefüllt",
    
    "feature_bond_strength": "Verbundfestigkeit (Keramik zu Metall)",
    "dpc_bond_strength": "30-40 MPa<br><small class=\"text-muted\">Ti/Cu-Saatlagen-Haftung</small>",
    "dpc_bond_strength_note": "Ti/Cu-Saatlagen-Haftung",
    "dbc_bond_strength": ">20 MPa<br><small class=\"text-muted\">Cu-O-eutektischer Verbund</small>",
    "dbc_bond_strength_note": "Cu-O-eutektischer Verbund",
    "htcc_bond_strength": "Integral (ko-gesintert)<br><small class=\"text-muted\">Keine separate Grenzfläche</small>",
    "htcc_bond_strength_note": "Keine separate Grenzfläche",
    
    "feature_surface_finish": "Oberflächenveredelungs-Optionen",
    "dpc_surface_finish": "ENIG, ENEPIG, Immissionszinn<br>Galvanisches Ni/Au, OSP<br><small class=\"text-muted\">Direkt auf galvanisiertem Kupfer</small>",
    "dpc_surface_finish_note": "Direkt auf galvanisiertem Kupfer",
    "dbc_surface_finish": "Blankkupfer, Immissionszinn<br>ENIG, Direkte Lötbeschichtung<br><small class=\"text-muted\">Kann Ni-Sperrschicht erfordern</small>",
    "dbc_surface_finish_note": "Kann Ni-Sperrschicht erfordern",
    "htcc_surface_finish": "ENIG, ENEPIG erforderlich<br>Galvanisches Ni/Au/Sn<br><small class=\"text-muted\">W/Mo nicht lötbar im gesinterten Zustand</small>",
    "htcc_surface_finish_note": "W/Mo nicht lötbar im gesinterten Zustand",
    
    "feature_thermal_cycling": "Thermische Zyklusleistung",
    "dpc_thermal_cycling": "-55°C bis 150°C, 500 Zyklen<br><small class=\"text-muted\">Begrenzt durch CTE-Fehlanpassung des galvanischen Kupfers</small>",
    "dpc_thermal_cycling_note": "Begrenzt durch CTE-Fehlanpassung des galvanischen Kupfers",
    "dbc_thermal_cycling": "-55°C bis 150°C, 1000+ Zyklen<br><small class=\"text-muted\">Hervorragend für Leistungszyklen</small>",
    "dbc_thermal_cycling_note": "Hervorragend für Leistungszyklen",
    "htcc_thermal_cycling": "-55°C bis 150°C, 1000+ Zyklen<br><small class=\"text-muted\">Hervorragende hermetische Stabilität</small>",
    "htcc_thermal_cycling_note": "Hervorragende hermetische Stabilität",
    
    "feature_multilayer": "Mehrlagen-Fähigkeit",
    "dpc_multilayer": "1-2 leitfähige Lagen<br><small class=\"text-muted\">Zweiseitig mit durchkontaktierten Bohrungen</small>",
    "dpc_multilayer_note": "Zweiseitig mit durchkontaktierten Bohrungen",
    "dbc_multilayer": "1-2 Lagen (verbunden)<br><small class=\"text-muted\">Zwei DBCs können verbunden werden</small>",
    "dbc_multilayer_note": "Zwei DBCs können verbunden werden",
    "htcc_multilayer": "2-50+ Lagen<br><small class=\"text-muted\">Echte 3D-Strukturen mit Kavitäten</small>",
    "htcc_multilayer_note": "Echte 3D-Strukturen mit Kavitäten",
    
    "feature_applications": "Hauptanwendungen",
    "dpc_apps": "• HF-/Mikrowellenschaltungen<br>• Feinstleiter-LED-Arrays<br>• Sensor-Gehäuse<br>• TEC-Module<br><small class=\"text-muted\">Wo Präzisionsmerkmale benötigt werden</small>",
    "dpc_apps_note": "Wo Präzisionsmerkmale benötigt werden",
    "dbc_apps": "• IGBT-Leistungsmodule<br>• EV-Antriebsumrichter<br>• Hochstrom-Sammelschienen<br>• Solarwechselrichter<br><small class=\"text-muted\">Hohe Leistung, hoher Strom</small>",
    "dbc_apps_note": "Hohe Leistung, hoher Strom",
    "htcc_apps": "• Hermetische HF-Gehäuse<br>• Luft- und Raumfahrt-Elektronik<br>• Multi-Chip-Module (MCM)<br>• Hochzuverlässige Sensoren<br><small class=\"text-muted\">Extreme Umgebungen</small>",
    "htcc_apps_note": "Extreme Umgebungen",
    
    "feature_cost": "Relativer Kostenfaktor",
    "dpc_cost": "Mittel bis Hoch<br><small class=\"text-muted\">Fotolithografie erhöht Kosten</small>",
    "dpc_cost_note": "Fotolithografie erhöht Kosten",
    "dbc_cost": "Niedrig bis Mittel<br><small class=\"text-muted\">Massenprozess, gut für große Flächen</small>",
    "dbc_cost_note": "Massenprozess, gut für große Flächen",
    "htcc_cost": "Hoch (Einrichtung)<br>Mittel (Volumen)<br><small class=\"text-muted\">Hohe NRE, Skaleneffekte</small>",
    "htcc_cost_note": "Hohe NRE, Skaleneffekte",
    
    "feature_lead_time": "Typische Lieferzeit (Produktion)",
    "dpc_lead_time": "2-3 Wochen<br><small class=\"text-muted\">Fotomaske erforderlich</small>",
    "dpc_lead_time_note": "Fotomaske erforderlich",
    "dbc_lead_time": "2-3 Wochen<br><small class=\"text-muted\">Laser-/Ätzwerkzeug</small>",
    "dbc_lead_time_note": "Laser-/Ätzwerkzeug",
    "htcc_lead_time": "4-6 Wochen<br><small class=\"text-muted\">Siebdruckwerkzeug + Ko-Sinter-Zyklus</small>",
    "htcc_lead_time_note": "Siebdruckwerkzeug + Ko-Sinter-Zyklus",
    
    "feature_recommendation": "Wann diese Technologie wählen",
    "dpc_recommendation_title": "DPC wählen, wenn:",
    "dpc_recommendation": "<strong>DPC wählen, wenn:</strong><br>• Feinstrukturen <100µm erforderlich<br>• ENIG/ENEPIG-Oberfläche benötigt<br>• HF-Leistung kritisch<br>• Kleine Serie, schneller Prototyp",
    "dbc_recommendation_title": "DBC wählen, wenn:",
    "dbc_recommendation": "<strong>DBC wählen, wenn:</strong><br>• Hoher Strom (>50A) erforderlich<br>• Überlegene thermische Zyklusleistung benötigt<br>• Dickes Kupfer (0,3mm+) erforderlich<br>• Kostenempfindliche Großserie",
    "htcc_recommendation_title": "HTCC wählen, wenn:",
    "htcc_recommendation": "<strong>HTCC wählen, wenn:</strong><br>• Hermetische Dichtung erforderlich<br>• Mehrlagen (>4 Lagen) benötigt<br>• 3D-Strukturen/Kavitäten benötigt<br>• Betrieb in extremen Umgebungen",
    
    // Comparison Table Notes
    "note_dpc_title": "DPC-Hinweise:",
    "note_dpc1": "Ti/Cu-Saatlage für Haftung",
    "note_dpc2": "Beste für Feinstrukturen & HF",
    "note_dpc3": "Begrenzte thermische Zyklusleistung vs. DBC",
    "note_dbc_title": "DBC-Hinweise:",
    "note_dbc1": "Cu-O-eutektischer Verbund bei 1065°C",
    "note_dbc2": "Hervorragende thermische Zyklusleistung",
    "note_dbc3": "Nicht für Feinstrukturen <150µm",
    "note_htcc_title": "HTCC-Hinweise:",
    "note_htcc1": "W/Mo mit Aluminiumoxid ko-gesintert",
    "note_htcc2": "Erfordert Nachbeschichtung für Lötbarkeit",
    "note_htcc3": "12-18 % Schrumpfung während des Sinterns",

    // Featured Applications Section
    "applications_title": "Anwendungsbeispiele",
    "applications_description": "Unsere Keramiksubstrate ermöglichen Spitzentechnologien in verschiedenen Branchen",
    "app_htcc_aerospace_title": "Gehäuse für Luft- und Raumfahrt & Verteidigung",
    "app_htcc_aerospace_desc": "Hermetisch dichte HTCC-Gehäuse für Radarsysteme, Satellitenkomponenten und Militärelektronik mit Anforderungen an extreme Umgebungsstabilität.",
    "app_htcc_aerospace_badge1": "Al2O3",
    "app_htcc_aerospace_badge2": "Hermetisch",
    "app_htcc_aerospace_badge3": "HF-Abschirmung",
    "app_htcc_mcm_title": "Multi-Chip-Module (MCM)",
    "app_htcc_mcm_desc": "Komplexe Mehrlagensubstrate mit integrierten Kavitäten und Durchkontaktierungen für hochdichte Gehäuse von Halbleiterbauelementen und MEMS-Sensoren.",
    "app_htcc_mcm_badge1": "3D-Strukturen",
    "app_htcc_mcm_badge2": "Integrierte Kavitäten",
    "app_htcc_mcm_badge3": "Hohe Dichte",
    "app_laser_title": "Laserdioden-Kühlkörper",
    "app_laser_desc": "Substrate mit hoher Wärmeleitfähigkeit für Halbleiterlaser in LiDAR, optischer Kommunikation und industrieller Bearbeitung.",
    "app_laser_badge1": "AlN",
    "app_laser_badge2": "SiC",
    "app_laser_badge3": "0,3-0,35mm",
    "app_tec_title": "Thermoelektrische Kühler (TEC)-Module",
    "app_tec_desc": "Präzisions-Keramiksubstrate für Peltier-Kühlmodule in optischer Kommunikation, Medizintechnik und Luft- und Raumfahrt.",
    "app_tec_badge1": "AlN/Al2O3",
    "app_tec_badge2": "Cu/Ni/Au",
    "app_tec_badge3": "0,15-0,635mm",
    "app_ide_title": "Interdigitalelektroden (IDEs)",
    "app_ide_desc": "Präzise Elektrodenstrukturen für kapazitive Sensoren, Gasdetektoren und biomedizinische Anwendungen, die Feinstleiterbahnen erfordern.",
    "app_ide_badge1": "Al2O3/PI/PET",
    "app_ide_badge2": "50µm-100mm",
    "app_ide_badge3": "Cu/Ni/Au",
    "app_igbt_title": "IGBT-Leistungsmodule",
    "app_igbt_desc": "Hochleistungs-DBC-Substrate für Industrieantriebe, EV-Wechselrichter und erneuerbare Energiesysteme mit robustem Wärmemanagement.",
    "app_igbt_badge1": "AlN/Al2O3",
    "app_igbt_badge2": "0,3mm Cu",
    "app_igbt_badge3": "Hochspannung",
    "app_rf_title": "HF-Leistungsverstärker",
    "app_rf_desc": "Verlustarme DPC-Substrate für 5G-Basisstationen, Mikrowellenkommunikation und Radarsysteme mit Hochfrequenzanforderungen.",
    "app_rf_badge1": "AlN",
    "app_rf_badge2": "Feinleiter",
    "app_rf_badge3": "Hochfrequenz",
    "app_led_title": "Gehäuse für Hochleistungs-LEDs",
    "app_led_desc": "Wärmemanagement-Substrate für Automotive-Scheinwerfer, Industriebeleuchtung und UV-LED-Anwendungen mit effizienter Wärmeableitung.",
    "app_led_badge1": "Al2O3",
    "app_led_badge2": "Hohe Reflektivität",
    "app_led_badge3": "Gute CTE-Übereinstimmung",
    "app_ev_title": "E-Mobilität: Lade- & Leistungswandler",
    "app_ev_desc": "Hochzuverlässige Keramiksubstrate für Ladestationen und Leistungswandler in der E-Mobilität mit hohen Stromtragfähigkeiten und thermischer Stabilität.",
    "app_ev_badge1": "Hoher Strom",
    "app_ev_badge2": "Thermische Zuverlässigkeit",
    "app_ev_badge3": "AlN/Al2O3",

    // Resources Section
    "resources_title": "Technische Ressourcen",
    "resources_description": "Datenblätter, Applikationsnotizen und Designrichtlinien herunterladen",
    "resource_datasheets_title": "Produktdatenblätter",
    "resource_datasheets_desc": "Detaillierte Spezifikationen und technische Daten für alle unsere Keramiksubstrat-Produkte.",
    "resource_design_title": "Designrichtlinien",
    "resource_design_desc": "Best Practices für das Design mit Keramiksubstraten und Optimierung der thermischen Leistung.",
    "resource_samples_title": "Muster anfordern",
    "resource_samples_desc": "Kostenlose Muster zur Bewertung und Prüfung unserer Keramiksubstrat-Produkte erhalten.",

    // CTA Section
    "products_cta_title": "Benötigen Sie kundenspezifische Keramiksubstrat-Lösungen?",
    "products_cta_description": "Unser Engineering-Team ist auf die Entwicklung maßgeschneiderter Keramiksubstrat-Lösungen spezialisiert, die auf Ihre spezifischen Anforderungen abgestimmt sind.",
    "cta_prototyping": "Rapid Prototyping",
    "cta_prototyping_desc": "Kundenspezifische Designs in 2-3 Wochen",
    "cta_technical_support": "Technischer Support",
    "cta_technical_support_desc": "Technische Beratung verfügbar",
    "cta_phone": "+86-147-4537-3293",

    // Footer
    "footer_description": "Führender Hersteller metallisierter Keramiksubstrate für Wärmemanagement-Anwendungen seit 2016. ISO 14001:2015 zertifiziert mit globalen Fertigungskapazitäten.",
    "footer_products": "Produkte",
    "footer_company": "Unternehmen",
    "footer_contact": "Kontaktinformationen",
    "footer_email": "sales@jimei-materials.com",
    "footer_phone": "+86-147-4537-3293",
    "footer_address": "First Industrial Zone, Haosan Linpokeng, Xinqiao Street, Bao'an District, Shenzhen, China",
    "footer_hours": "Mo-Fr: 8:00 - 18:00 Uhr (GMT+8)",
    "footer_languages": "Support: Englisch, Chinesisch, Japanisch, Koreanisch, Deutsch",
    "footer_copyright": "Copyright &copy;",
    "footer_company_name": "Jimei Materials Co., Ltd.",
    "footer_rights": "Alle Rechte vorbehalten.",
    "footer_privacy": "Datenschutzrichtlinie",
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