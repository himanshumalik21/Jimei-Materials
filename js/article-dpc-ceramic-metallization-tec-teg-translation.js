// translations.js - Internationalization for Jimei Materials Website
// Author: Jimei Materials Development Team
// Version: 1.0.0
// Last Updated: 2025

(function() {
    'use strict';

    // Translations object
    const translations = {
        en: {

            //Meta & Structural Elements
            "article_page_title": "DPC Ceramic Metallization for High-Performance Thermoelectric Modules (TEC/TEG) | JIMEI Ceramic Substrates",
            "article_meta_description": "Maximize TEC/TEG performance with Jimei's Direct Plated Copper (DPC) ceramic metallization. High thermal conductivity AlN/Al2O3 substrates for thermoelectric cooling and power generation.",
            "article_meta_keywords": "DPC ceramic metallization, thermoelectric modules, TEC packaging, TEG packaging, Direct Plated Copper, AlN substrates, thermal management, Peltier cooler, thermoelectric generator",
            "article_og_title": "DPC Ceramic Metallization for High-Performance Thermoelectric Modules (TEC/TEG) | Jimei Materials",
            "article_og_description": "Maximize TEC/TEG performance with Jimei's DPC ceramic metallization on AlN/Al2O3 substrates.",
            "article_twitter_title": "DPC Ceramic Metallization for High-Performance Thermoelectric Modules (TEC/TEG) | Jimei Materials",
            "article_twitter_description": "Maximize TEC/TEG performance with Jimei's DPC ceramic metallization on AlN/Al2O3 substrates.",
            "skip_to_content": "Skip to main content",
            
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
            "breadcrumb_resources": "Technical Resources",
            "article_breadcrumb": "DPC for TEC/TEG Modules",
            
            // Article Title Section
            "article_title": "DPC Ceramic Metallization for High-Performance Thermoelectric Modules (TEC/TEG)",
            "article_description": "Maximize TEC/TEG performance with Jimei's Direct Plated Copper (DPC) ceramic metallization on AlN/Al₂O₃ substrates",
            "article_published": "Published:",
            "article_read_time": "Read time:",
            
            // Article Navigation
            "article_previous": "Previous",
            "article_all_resources": "All Resources",
            "article_next": "Next",
            
            // Article Content
            "article_intro_paragraph1": "In the specialized field of Thermoelectric Modules (TEMs)—including Peltier Coolers (TEC) and Thermoelectric Generators (TEG)—packaging is not just about protection; it's fundamental to performance and longevity. These devices, which rely on the Peltier effect to pump heat or the Seebeck effect to generate power, are highly susceptible to thermal stress and mechanical failure.",
            "article_intro_paragraph2": "We engineer and fabricate advanced Ceramic Metallization Substrates using Direct Plated Copper (DPC) technology. Our DPC substrates are the critical link that elevates the reliability and efficiency of micro thermoelectric systems, pushing the boundaries in applications like laser cooling, fiber optics, and precise temperature control.",
            
            "article_section1_title": "The Role of Metallized Ceramics in Thermoelectrics",
            "article_section1_paragraph1": "A typical thermoelectric module consists of an array of alternating n-type and p-type Bismuth Telluride (Bi₂Te₃) semiconductor elements. These elements are electrically connected in series and thermally in parallel between two opposing ceramic substrates.",
            "article_section1_paragraph2": "The ceramic substrate performs three non-negotiable functions that define the module's performance:",
            "article_function1": "Electrical Isolation: Insulating the internal circuit from external mounting surfaces and heat sinks.",
            "article_function2": "Mechanical Support: Providing a flat, rigid, and stable platform for the entire assembly.",
            "article_function3": "Thermal Conduction: Efficiently transferring heat from the cold side (TEC) or transferring heat across the module (TEG).",
            "article_section1_paragraph3": "To form the necessary electrical junctions that link the semiconductor pellets, the ceramic surface must be metallized. Our Direct Plated Copper (DPC) process provides the ideal solution for this challenge.",
            
            "article_section2_title": "Direct Plated Copper (DPC): The Superior Metallization Choice",
            "article_section2_paragraph1": "While methods like Thick Film and Active Metal Brazing (AMB) exist, DPC offers a unique combination of precision, thermal performance, and mechanical reliability—critical factors for miniaturized, high-power-density TEC/TEG packaging.",
            
            "article_subsection1_title": "1. Exceptional Thermal Conductivity",
            "article_subsection1_paragraph": "The overall thermal resistance (Rth) of a TEM is heavily influenced by its substrates. We primarily utilize Aluminum Nitride (AlN) or high-grade Alumina (Al₂O₃) ceramics, combined with the high conductivity of pure plated copper.",
            "article_subsection1_paragraph2": "Ceramic Thermal Conductivity: Alumina (Al₂O₃) offers 25 to 35 W/m·K, while Aluminum Nitride (AlN) provides a superb thermal pathway, typically achieving 170 to 230 W/m·K.",
            "article_subsection1_paragraph3": "Benefit: The DPC process creates a thin, dense copper layer (up to 50μm thick) with minimal thermal barrier, ensuring rapid heat transfer. This significantly lowers the module's Rth, leading to a greater temperature differential (ΔTmax) for TECs or higher power output for TEGs.",
            
            "article_subsection2_title": "2. Enhanced Mechanical Stability and Reliability",
            "article_subsection2_paragraph1": "The DPC process creates a layer with excellent adhesion strength between the copper and the ceramic substrate (if used), often exceeding 0.5 kgf/mm² at the interface.",
            "article_subsection2_paragraph2": "Benefit: This strong bond and the metal's rigidity provide a far more robust containment structure than polymer dams, resisting the internal forces generated by the Coefficient of Thermal Expansion (CTE) mismatch between the silicon die (approx 2.6 ppm/K), the substrate, and the encapsulation resin. This reduced mechanical stress is crucial for enhancing the Power Cycling Lifetime of the module.",
            
            "article_subsection3_title": "3. Low Coefficient of Thermal Expansion (CTE) Mismatch",
            "article_subsection3_paragraph1": "The primary cause of failure in TEMs is thermal cycling fatigue, which leads to cracked solder joints and fractured semiconductor pellets. This is caused by the CTE mismatch between the key materials.",
            "material_cte1": "Silicon/Semiconductors: ≈ 2.6 ppm/K",
            "material_cte2": "Copper Interconnects: ≈ 17 ppm/K",
            "material_cte3": "Alumina (Al₂O₃): ≈ 6.5 ppm/K",
            "material_cte4": "Aluminum Nitride (AlN): ≈ 4.5 ppm/K",
            "article_subsection3_paragraph2": "Benefit: By choosing ceramics like AlN (CTE ≈ 4.5 ppm/K), which closely matches the semiconductor material, and combining it with the high-adhesion DPC copper film, we dramatically reduce the shear stress at the solder joints during thermal cycling (e.g., from 0°C to 125°C). This translates directly into a significantly increased operating lifespan and reliability.",
            
            "article_subsection4_title": "4. High Circuit Density and Fine Resolution",
            "article_subsection4_paragraph1": "DPC utilizes advanced photolithography, a method that is far superior to traditional Thick Film for high-resolution patterning.",
            "article_subsection4_paragraph2": "Metric: Our DPC substrates can achieve line widths and spacing as fine as 30μm to 50μm.",
            "article_subsection4_paragraph3": "Benefit: This precision enables the fabrication of highly compact, high-density interconnections required for micro-thermoelectric modules (TEMs down to 2.5 × 2.5 mm²), allowing for more P-N couples per unit area and maximizing cooling/generating power in a miniaturized package.",
            
            "article_section3_title": "The DPC Process for TEMs",
            "article_section3_paragraph1": "Our DPC technique is a low-temperature, high-adhesion process designed for maximum performance:",
            "dpc_step1": "Ceramic Selection: High-purity Al₂O₃ or AlN substrates are selected for thermal requirements.",
            "dpc_step2": "Seed Layer Deposition: Vacuum sputtering applies a thin, highly adherent seed layer (e.g., Ti/Cu).",
            "dpc_step3": "Photolithography: The precise pattern for the electrical traces and contact pads is defined.",
            "dpc_step4": "Electroplating: Pure, dense copper is electroplated onto the seed layer, building up the required thickness (e.g., 20μm to 50μm) to handle high current density.",
            "dpc_step5": "Finishing: Optional final plating (Ni/Au) is applied for optimal wire-bonding and soldering compatibility with Bi₂Te₃ pellets.",
            "article_section3_paragraph2": "This process results in a ceramic circuit board with superior bond strength (often > 45 MPa) and excellent surface planarity, perfect for Direct Chip Attach (DCA) and high-precision module assembly.",
            
            "article_section4_title": "Key Technical Data: Performance Summary",
            
            "technical_note": "<strong>Technical Note:</strong> Partner with Jimei Materials for your critical thermoelectric packaging needs. Our DPC Ceramic Metallization is the foundation for achieving maximum thermal performance and long-term reliability in your TEC and TEG designs.",

            // Technical Specifications Table
            "table_header_material": "Material",
            "table_header_thermal_conductivity": "Thermal Conductivity (W/(m·K))",
            "table_header_cte": "CTE (ppm/K)",
            "table_header_note": "Application Note",
            "table_row1_note": "Cost-effective, good balance",
            "table_row2_note": "Best for high-power TEC/TEG; superior CTE match",
            "table_row3_note": "Reference (CTE is target for stress reduction)",
            "table_row4_note": "Reference (illustrates DPC advantage over pure bulk Cu CTE)",
            
            // Article Tags
            "article_tags": "Tags:",
            "tag_dpc": "DPC Technology",
            "tag_thermoelectric": "Thermoelectric Modules",
            "tag_aln": "Aluminum Nitride",
            "tag_thermal_management": "Thermal Management",
            "tag_packaging": "Advanced Packaging",


            //Related Articles Section

            "related_articles_title": "Related Articles",
            "badge_application_note": "Application Note",
            "related_article1_title": "DPC Encapsulation Dam Advantages",
            "related_article1_description": "Discover how DPC encapsulation dams enhance power module reliability and performance.",
            "badge_dpc_technology": "DPC Technology",
            "related_article2_title": "DPC Technology Explained",
            "related_article2_description": "Learn how Direct Plated Copper technology is revolutionizing advanced packaging.",
            "badge_design_guide": "Design Guide",
            "related_article3_title": "Ceramic Metallization Processes",
            "related_article3_description": "Technical overview of metallization methods for ceramics and reliability considerations.",
            "btn_read_more": "Read more →",

            //CTA Section
            "article_cta_title": "Optimize Your Thermoelectric Module Performance",
            "article_cta_description": "Our engineering team specializes in custom DPC ceramic metallization solutions for high-performance TEC and TEG applications.",
            "cta_feature1_title": "Custom Substrate Design",
            "cta_feature1_desc": "Tailored solutions for your specific thermal requirements",
            "cta_feature2_title": "Performance Validation",
            "cta_feature2_desc": "Thermal cycling and reliability testing",
            "btn_contact_experts": "Contact Our Experts",

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
                // 元数据与结构元素
        "article_page_title": "DPC陶瓷金属化技术助力高性能热电模块(TEC/TEG) | JIMEI 陶瓷基板",
        "article_meta_description": "采用集美材料的直接镀铜陶瓷金属化技术，最大化TEC/TEG性能。基于高导热氮化铝/氧化铝基板的热电制冷与发电解决方案。",
        "article_meta_keywords": "DPC陶瓷金属化, 热电模块, TEC封装, TEG封装, 直接镀铜, 氮化铝基板, 热管理, 帕尔贴制冷器, 热电发电机",
        "article_og_title": "用于高性能热电模块(TEC/TEG)的DPC陶瓷金属化技术 | 集美材料",
        "article_og_description": "采用集美基于氮化铝/氧化铝基板的DPC陶瓷金属化技术，最大化TEC/TEG性能。",
        "article_twitter_title": "用于高性能热电模块(TEC/TEG)的DPC陶瓷金属化技术 | 集美材料",
        "article_twitter_description": "采用集美基于氮化铝/氧化铝基板的DPC陶瓷金属化技术，最大化TEC/TEG性能。",
        "skip_to_content": "跳至主要内容",
        
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
        "breadcrumb_resources": "技术资源",
        "article_breadcrumb": "DPC用于TEC/TEG模块",
        
        // 文章标题区
        "article_title": "用于高性能热电模块(TEC/TEG)的DPC陶瓷金属化技术",
        "article_description": "采用集美基于氮化铝/氧化铝基板的直接镀铜陶瓷金属化技术，最大化TEC/TEG性能",
        "article_published": "发布日期:",
        "article_read_time": "阅读时长:",
        
        // 文章导航
        "article_previous": "上一篇",
        "article_all_resources": "全部资源",
        "article_next": "下一篇",
        
        // 文章正文内容
        "article_intro_paragraph1": "在热电模块这一专业领域——包括帕尔贴制冷器和热电发电机——封装不仅关乎保护，更是性能与寿命的基础。这些依赖帕尔贴效应泵热或塞贝克效应发电的器件，极易受到热应力和机械故障的影响。",
        "article_intro_paragraph2": "我们采用直接镀铜技术，精心设计与制造先进的陶瓷金属化基板。我们的DPC基板是提升微型热电系统可靠性与效率的关键环节，推动着激光冷却、光纤通信及精密温控等应用的性能边界。",
        
        "article_section1_title": "金属化陶瓷在热电应用中的关键作用",
        "article_section1_paragraph1": "一个典型的热电模块由交替排列的n型和p型碲化铋半导体元件阵列组成。这些元件在两个相对的陶瓷基板之间形成串联电路和并联热路。",
        "article_section1_paragraph2": "陶瓷基板承担着决定模块性能的三个关键功能：",
        "article_function1": "电气隔离: 将内部电路与外部安装表面及散热器绝缘。",
        "article_function2": "机械支撑: 为整个组装体提供平整、坚固且稳定的平台。",
        "article_function3": "热传导: 高效地将热量从冷端导出，或在整个模块内传递热量。",
        "article_section1_paragraph3": "为了形成连接半导体颗粒所需的电气结点，陶瓷表面必须进行金属化。我们的直接镀铜工艺为此挑战提供了理想的解决方案。",
        
        "article_section2_title": "直接镀铜：卓越的金属化选择",
        "article_section2_paragraph1": "尽管存在厚膜、活性金属钎焊等方法，但DPC技术提供了精度、热性能和机械可靠性的独特组合——这些正是微型化、高功率密度TEC/TEG封装的关键因素。",
        
        "article_subsection1_title": "1. 卓越的导热性能",
        "article_subsection1_paragraph": "热电模块的整体热阻在很大程度上受其基板影响。我们主要采用氮化铝或高等级氧化铝陶瓷，并结合高纯镀铜层的高导电性。",
        "article_subsection1_paragraph2": "陶瓷导热系数: 氧化铝的导热系数为25至35 W/(m·K)，而氮化铝则提供了优异的热通路，导热系数通常可达170至230 W/(m·K)。",
        "article_subsection1_paragraph3": "优势: DPC工艺形成的铜层薄而致密（厚度可达50μm），热阻极低，确保快速热传递。这显著降低了模块的整体热阻，从而为TEC带来更大的最大温差，或为TEG带来更高的功率输出。",
        
        "article_subsection2_title": "2. 增强的机械稳定性与可靠性",
        "article_subsection2_paragraph1": "DPC工艺在铜层与陶瓷基板之间形成了附着力极强的界面，其结合强度通常超过0.5 kgf/mm²。",
        "article_subsection2_paragraph2": "优势: 这种强结合力与金属的刚性，构成了远比聚合物坝更坚固的支撑结构，能够抵抗由硅芯片（约2.6 ppm/K）、基板与封装树脂之间热膨胀系数失配所产生的内部应力。降低的机械应力对于提升模块的功率循环寿命至关重要。",
        
        "article_subsection3_title": "3. 低热膨胀系数失配",
        "article_subsection3_paragraph1": "热电模块失效的主要原因是热循环疲劳，导致焊点开裂和半导体颗粒断裂。这源于关键材料之间的CTE失配。",
        "material_cte1": "硅/半导体材料: ≈ 2.6 ppm/K",
        "material_cte2": "铜互连: ≈ 17 ppm/K",
        "material_cte3": "氧化铝: ≈ 6.5 ppm/K",
        "material_cte4": "氮化铝: ≈ 4.5 ppm/K",
        "article_subsection3_paragraph2": "优势: 通过选择与半导体材料CTE更匹配的陶瓷（如氮化铝，CTE ≈ 4.5 ppm/K），并结合高附着力的DPC铜膜，我们极大降低了热循环过程中焊点处的剪切应力。这直接转化为显著延长的工作寿命和更高的可靠性。",
        
        "article_subsection4_title": "4. 高电路密度与精细分辨率",
        "article_subsection4_paragraph1": "DPC采用先进的光刻技术，在高分辨率图形化方面远优于传统的厚膜工艺。",
        "article_subsection4_paragraph2": "指标: 我们的DPC基板可实现细至30μm至50μm的线宽与线距。",
        "article_subsection4_paragraph3": "优势: 这种精度使得能够制造微型热电模块所需的高度紧凑、高密度的互连，允许单位面积内布置更多的P-N电偶，从而在微型化封装中最大化制冷或发电功率。",
        
        "article_section3_title": "针对热电模块的DPC工艺流程",
        "article_section3_paragraph1": "我们的DPC技术是一种为追求极致性能而设计的低温、高附着力工艺：",
        "dpc_step1": "陶瓷选材: 根据热性能要求选择高纯氧化铝或氮化铝基板。",
        "dpc_step2": "种子层沉积: 通过真空溅射沉积一层薄而附着力强的种子层。",
        "dpc_step3": "光刻: 精确定义电气走线与焊盘的图形。",
        "dpc_step4": "电镀: 在种子层上电镀纯而致密的铜层，达到所需厚度以满足高电流密度需求。",
        "dpc_step5": "后处理: 可选进行最终镀层处理，以获得最佳的引线键合及与碲化铋颗粒焊接的兼容性。",
        "article_section3_paragraph2": "此工艺最终形成的陶瓷电路板具有优异的结合强度和出色的表面平整度，非常适合直接芯片贴装和高精度模块组装。",
        
        "article_section4_title": "关键性能数据摘要",

        "technical_note": "<strong>技术提示:</strong> 为满足您关键的热电封装需求，请与集美材料合作。我们的DPC陶瓷金属化技术是您在TEC和TEG设计中实现最大热性能和长期可靠性的基石。",

        // 技术规格表
        "table_header_material": "材料",
        "table_header_thermal_conductivity": "导热系数 (W/(m·K))",
        "table_header_cte": "热膨胀系数 (ppm/K)",
        "table_header_note": "应用说明",
        "table_row1_note": "高性价比，性能均衡",
        "table_row2_note": "适用于高功率TEC/TEG；CTE匹配性极佳",
        "table_row3_note": "参考值（CTE作为降低应力的目标）",
        "table_row4_note": "参考值（展示DPC相较于纯块体铜的CTE优势）",
        
        // 文章标签
        "article_tags": "标签:",
        "tag_dpc": "DPC技术",
        "tag_thermoelectric": "热电模块",
        "tag_aln": "氮化铝",
        "tag_thermal_management": "热管理",
        "tag_packaging": "先进封装",

        // 相关文章区
        "related_articles_title": "相关技术文章",
        "badge_application_note": "应用笔记",
        "related_article1_title": "DPC围坝封装技术优势解析",
        "related_article1_description": "探索DPC封装围坝如何提升功率模块的可靠性与性能。",
        "badge_dpc_technology": "DPC技术",
        "related_article2_title": "DPC技术详解",
        "related_article2_description": "了解直接镀铜技术如何革新先进封装领域。",
        "badge_design_guide": "设计指南",
        "related_article3_title": "陶瓷金属化工艺全解析",
        "related_article3_description": "关于陶瓷金属化方法及可靠性考量的技术综述。",
        "btn_read_more": "阅读全文 →",

        // CTA区
        "article_cta_title": "优化您的热电模块性能",
        "article_cta_description": "我们的工程团队专注于为高性能TEC和TEG应用提供定制化的DPC陶瓷金属化解决方案。",
        "cta_feature1_title": "定制基板设计",
        "cta_feature1_desc": "针对您的特定热需求提供量身定制的解决方案",
        "cta_feature2_title": "性能验证",
        "cta_feature2_desc": "热循环及可靠性测试",
        "btn_contact_experts": "联系我们的专家",

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

        // Meta & Structural Elements
        "article_page_title": "高性能熱電モジュール（TEC/TEG）向けDPCセラミックメタライゼーション | JIMEI セラミック基板",
        "article_meta_description": "Jimeiの直接鍍金銅（DPC）セラミックメタライゼーションでTEC/TEG性能を最大化。熱電冷却・発電向け高熱伝導性AlN/Al2O3基板を提供します。",
        "article_meta_keywords": "DPCセラミックメタライゼーション, 熱電モジュール, TECパッケージング, TEGパッケージング, 直接鍍金銅, AlN基板, 熱管理, ペルチェ冷却器, 熱電発電器",
        "article_og_title": "高性能熱電モジュール（TEC/TEG）向けDPCセラミックメタライゼーション | Jimei Materials",
        "article_og_description": "JimeiのDPCセラミックメタライゼーションでTEC/TEG性能を最大化。AlN/Al2O3基板を使用。",
        "article_twitter_title": "高性能熱電モジュール（TEC/TEG）向けDPCセラミックメタライゼーション | Jimei Materials",
        "article_twitter_description": "JimeiのDPCセラミックメタライゼーションでTEC/TEG性能を最大化。AlN/Al2O3基板を使用。",
        "skip_to_content": "メインコンテンツへスキップ",
        
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
        "breadcrumb_resources": "技術資料",
        "article_breadcrumb": "TEC/TEGモジュール向けDPC",
        
        // Article Title Section
        "article_title": "高性能熱電モジュール（TEC/TEG）向けDPCセラミックメタライゼーション",
        "article_description": "Jimeiの直接鍍金銅（DPC）セラミックメタライゼーション技術により、AlN/Al₂O₃基板上でのTEC/TEG性能を最大化",
        "article_published": "公開日:",
        "article_read_time": "読了時間:",
        
        // Article Navigation
        "article_previous": "前へ",
        "article_all_resources": "全ての技術資料",
        "article_next": "次へ",
        
        // Article Content
        "article_intro_paragraph1": "ペルチェ冷却器（TEC）や熱電発電器（TEG）を含む熱電モジュール（TEM）の専門分野において、パッケージングは単なる保護以上のものであり、性能と寿命の根幹をなすものです。熱を移動させるペルチエ効果、または電力を発生させるゼーベック効果に依存するこれらのデバイスは、熱応力と機械的故障に対して非常に敏感です。",
        "article_intro_paragraph2": "当社は、直接鍍金銅（DPC）技術を使用して、先進的なセラミックメタライゼーション基板を設計・製造しています。当社のDPC基板は、マイクロ熱電システムの信頼性と効率性を高める重要な要素であり、レーザー冷却、光ファイバー、精密温度制御などのアプリケーションにおける限界を押し広げています。",
        
        "article_section1_title": "熱電デバイスにおける金属化セラミックの役割",
        "article_section1_paragraph1": "一般的な熱電モジュールは、交互に配置されたn型とp型のテルル化ビスマス（Bi₂Te₃）半導体素子のアレイで構成されています。これらの素子は、2枚の向かい合ったセラミック基板の間で、電気的には直列に、熱的には並列に接続されています。",
        "article_section1_paragraph2": "セラミック基板は、モジュールの性能を決定する3つの不可欠な機能を果たします:",
        "article_function1": "電気的絶縁: 内部回路を外部取り付け面やヒートシンクから絶縁します。",
        "article_function2": "機械的サポート: アセンブリ全体のための平坦で剛性があり安定したプラットフォームを提供します。",
        "article_function3": "熱伝導: 冷側（TEC）からの熱、またはモジュール全体（TEG）での熱移動を効率的に行います。",
        "article_section1_paragraph3": "半導体ペレットを接続する必要な電気的接点を形成するためには、セラミック表面を金属化する必要があります。当社の直接鍍金銅（DPC）プロセスは、この課題に対する理想的なソリューションを提供します。",
        
        "article_section2_title": "直接鍍金銅（DPC）: 優れた金属化の選択",
        "article_section2_paragraph1": "厚膜や活性金属ろう付け（AMB）などの方法が存在しますが、DPCは精度、熱性能、機械的信頼性のユニークな組み合わせを提供します。これは、小型化され高電力密度のTEC/TEGパッケージングにとって重要な要素です。",
        
        "article_subsection1_title": "1. 卓越した熱伝導性",
        "article_subsection1_paragraph": "TEM全体の熱抵抗（Rth）は、その基板に大きく影響されます。当社は主に窒化アルミニウム（AlN）または高品質アルミナ（Al₂O₃）セラミックを、純度の高いめっき銅の高熱伝導性と組み合わせて使用します。",
        "article_subsection1_paragraph2": "セラミックの熱伝導率: アルミナ（Al₂O₃）は25〜35 W/m·Kを提供し、一方で窒化アルミニウム（AlN）は優れた熱経路を提供し、通常170〜230 W/m·Kを達成します。",
        "article_subsection1_paragraph3": "利点: DPCプロセスは、最小限の熱障壁で薄く高密度の銅層（最大50μm厚）を形成し、迅速な熱伝達を保証します。これによりモジュールのRthが大幅に低下し、TECではより大きな温度差（ΔTmax）、TEGではより高い出力が得られます。",
        
        "article_subsection2_title": "2. 強化された機械的安定性と信頼性",
        "article_subsection2_paragraph1": "DPCプロセスは、銅とセラミック基板の間に優れた密着強度（界面で0.5 kgf/mm²を超えることが多い）を持つ層を形成します。",
        "article_subsection2_paragraph2": "利点: この強固な接合と金属の剛性は、ポリマーダムよりもはるかに堅牢な構造を提供し、シリコンダイ（約2.6 ppm/K）、基板、封止樹脂間の熱膨張係数（CTE）不一致によって生成される内部力に抵抗します。この低減された機械的応力は、モジュールのパワーサイクル寿命を向上させるために重要です。",
        
        "article_subsection3_title": "3. 低い熱膨張係数（CTE）不一致",
        "article_subsection3_paragraph1": "TEMの故障の主な原因は、熱サイクル疲労であり、これははんだ接合部のひび割れや半導体ペレットの破断を引き起こします。これは主要材料間のCTE不一致によって引き起こされます。",
        "material_cte1": "シリコン/半導体: ≈ 2.6 ppm/K",
        "material_cte2": "銅相互接続: ≈ 17 ppm/K",
        "material_cte3": "アルミナ (Al₂O₃): ≈ 6.5 ppm/K",
        "material_cte4": "窒化アルミニウム (AlN): ≈ 4.5 ppm/K",
        "article_subsection3_paragraph2": "利点: AlN（CTE ≈ 4.5 ppm/K）のような半導体材料に近いセラミックを選択し、それを高密着性のDPC銅膜と組み合わせることで、熱サイクル中（例：0°Cから125°C）のはんだ接合部におけるせん断応力を劇的に低減します。これは、大幅に延長された動作寿命と信頼性に直接つながります。",
        
        "article_subsection4_title": "4. 高回路密度と微細解像度",
        "article_subsection4_paragraph1": "DPCは先進的なフォトリソグラフィを利用しており、これは高解像度パターニングにおいて従来の厚膜技術よりもはるかに優れています。",
        "article_subsection4_paragraph2": "指標: 当社のDPC基板は、30μmから50μmという微細な線幅とスペースを実現できます。",
        "article_subsection4_paragraph3": "利点: この精度により、マイクロ熱電モジュール（2.5 × 2.5 mm²以下のTEM）に必要な高密度相互接続の製造が可能となり、単位面積あたりのより多くのP-N対を実現し、小型化パッケージでの冷却/発電能力を最大化します。",
        
        "article_section3_title": "TEM向けDPCプロセス",
        "article_section3_paragraph1": "当社のDPC技術は、最大の性能を実現するために設計された低温・高密着性プロセスです:",
        "dpc_step1": "セラミック選択: 熱要件に応じて高純度Al₂O₃またはAlN基板を選択します。",
        "dpc_step2": "シード層堆積: 真空スパッタリングにより、薄く密着性の高いシード層（例: Ti/Cu）を堆積します。",
        "dpc_step3": "フォトリソグラフィ: 電気配線と接点パッドの精密パターンを定義します。",
        "dpc_step4": "電気めっき: 純度が高く高密度の銅をシード層上に電気めっきし、高電流密度に対応する必要な厚さ（例: 20μmから50μm）を形成します。",
        "dpc_step5": "仕上げ: オプションで最終めっき（Ni/Au）を施し、Bi₂Te₃ペレットとのワイヤボンディングおよびはんだ付け適合性を最適化します。",
        "article_section3_paragraph2": "このプロセスにより、優れた接合強度（しばしば > 45 MPa）と優れた表面平坦性を有するセラミック回路基板が得られ、ダイレクトチップアタッチ（DCA）や高精度モジュール組み立てに最適です。",
        
        "article_section4_title": "主要技術データ: 性能概要",
        
        "technical_note": "<strong>技術ノート:</strong> 重要な熱電パッケージングの要件については、Jimei Materialsをパートナーとしてください。当社のDPCセラミックメタライゼーションは、お客様のTECおよびTEG設計において最大の熱性能と長期信頼性を実現するための基盤です。",

        // Technical Specifications Table
        "table_header_material": "材料",
        "table_header_thermal_conductivity": "熱伝導率 (W/(m·K))",
        "table_header_cte": "熱膨張係数 (ppm/K)",
        "table_header_note": "アプリケーションノート",
        "table_row1_note": "コスト効率が良く、バランスに優れる",
        "table_row2_note": "高出力TEC/TEGに最適; 優れたCTE整合",
        "table_row3_note": "参考値（CTEは応力低減の目標）",
        "table_row4_note": "参考値（純粋なバルク銅のCTEに対するDPCの利点を示す）",
        
        // Article Tags
        "article_tags": "タグ:",
        "tag_dpc": "DPC技術",
        "tag_thermoelectric": "熱電モジュール",
        "tag_aln": "窒化アルミニウム",
        "tag_thermal_management": "熱管理",
        "tag_packaging": "先進パッケージング",

        // Related Articles Section
        "related_articles_title": "関連記事",
        "badge_application_note": "アプリケーションノート",
        "related_article1_title": "DPCエンキャプシュレーションダムの利点",
        "related_article1_description": "DPCエンキャプシュレーションダムがパワーモジュールの信頼性と性能をどのように向上させるかを解説します。",
        "badge_dpc_technology": "DPC技術",
        "related_article2_title": "DPC技術の詳細解説",
        "related_article2_description": "直接鍍金銅（DPC）技術が先進パッケージングに革新をもたらす方法を学びます。",
        "badge_design_guide": "設計ガイド",
        "related_article3_title": "セラミックメタライゼーション技術の概要",
        "related_article3_description": "セラミックの金属化方法に関する技術的概観と信頼性評価の考慮点について説明します。",
        "btn_read_more": "続きを読む →",

        // CTA Section
        "article_cta_title": "熱電モジュールの性能を最適化しましょう",
        "article_cta_description": "当社のエンジニアリングチームは、高性能TECおよびTEGアプリケーション向けのカスタムDPCセラミックメタライゼーションソリューションを専門としています。",
        "cta_feature1_title": "カスタム基板設計",
        "cta_feature1_desc": "特定の熱要件に合わせたソリューション",
        "cta_feature2_title": "性能検証",
        "cta_feature2_desc": "熱サイクルおよび信頼性試験",
        "btn_contact_experts": "専門家に相談する",

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
        //Meta & Structural Elements
    "article_page_title": "고성능 열전 모듈(TEC/TEG)을 위한 DPC 세라믹 금속화 기술 | JIMEI 세라믹 기판",
    "article_meta_description": "Jimei의 직접 도금 동(DPC) 세라믹 금속화 기술로 TEC/TEG 성능을 극대화하십시오. 열전 냉각 및 발전을 위한 고열전도성 AlN/Al2O3 기판.",
    "article_meta_keywords": "DPC 세라믹 금속화, 열전 모듈, TEC 패키징, TEG 패키징, 직접 도금 동, AlN 기판, 열 관리, 펠티어 쿨러, 열전 발전기",
    "article_og_title": "고성능 열전 모듈(TEC/TEG)을 위한 DPC 세라믹 금속화 기술 | Jimei Materials",
    "article_og_description": "AlN/Al2O3 기판에 적용된 Jimei의 DPC 세라믹 금속화 기술로 TEC/TEG 성능을 극대화하십시오.",
    "article_twitter_title": "고성능 열전 모듈(TEC/TEG)을 위한 DPC 세라믹 금속화 기술 | Jimei Materials",
    "article_twitter_description": "AlN/Al2O3 기판에 적용된 Jimei의 DPC 세라믹 금속화 기술로 TEC/TEG 성능을 극대화하십시오.",
    "skip_to_content": "본문 내용으로 건너뛰기",
    
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
    "breadcrumb_resources": "기술 자료",
    "article_breadcrumb": "TEC/TEG 모듈용 DPC",
    
    // Article Title Section
    "article_title": "고성능 열전 모듈(TEC/TEG)을 위한 DPC 세라믹 금속화 기술",
    "article_description": "AlN/Al₂O₃ 기판에 적용된 Jimei의 직접 도금 동(DPC) 세라믹 금속화 기술로 TEC/TEG 성능을 극대화하십시오",
    "article_published": "게시일:",
    "article_read_time": "예상 독서 시간:",
    
    // Article Navigation
    "article_previous": "이전",
    "article_all_resources": "모든 기술 자료",
    "article_next": "다음",
    
    // Article Content
    "article_intro_paragraph1": "펠티어 쿨러(TEC) 및 열전 발전기(TEG)를 포함한 열전 모듈(TEM)의 전문 분야에서 패키징은 단순한 보호 장치가 아닙니다. 그것은 성능과 장수명의 기반입니다. 열을 이동시키기 위한 펠티어 효과나 전력을 생성하기 위한 제백 효과에 의존하는 이러한 장치는 열 응력과 기계적 고장에 매우 취약합니다.",
    "article_intro_paragraph2": "당사는 직접 도금 동(DPC) 기술을 사용하여 고급 세라믹 금속화 기판을 설계 및 제조합니다. 당사의 DPC 기판은 마이크로 열전 시스템의 신뢰성과 효율성을 높이고 레이저 냉각, 광통신 및 정밀 온도 제어와 같은 애플리케이션의 한계를 확장하는 중요한 연결 고리입니다.",
    
    "article_section1_title": "열전 장치에서 금속화 세라믹의 역할",
    "article_section1_paragraph1": "일반적인 열전 모듈은 교대로 배열된 n형 및 p형 비스무트 텔루라이드(Bi₂Te₃) 반도체 요소의 배열로 구성됩니다. 이러한 요소는 직렬로 전기적으로 연결되고 열적으로는 두 개의 반대 세라믹 기판 사이에 병렬로 연결됩니다.",
    "article_section1_paragraph2": "세라믹 기판은 모듈의 성능을 정의하는 세 가지 필수 기능을 수행합니다:",
    "article_function1": "전기적 절연: 외부 장착 표면 및 방열판으로부터 내부 회로를 절연합니다.",
    "article_function2": "기계적 지지: 전체 조립을 위한 평평하고 견고하며 안정적인 플랫폼을 제공합니다.",
    "article_function3": "열 전도: 냉각 측(TEC)에서 열을 효율적으로 전달하거나 모듈 전체에 걸쳐 열을 전달합니다(TEG).",
    "article_section1_paragraph3": "반도체 펠릿을 연결하는 필수 전기적 접합을 형성하기 위해 세라믹 표면은 금속화되어야 합니다. 당사의 직접 도금 동(DPC) 공정은 이 과제에 대한 이상적인 솔루션을 제공합니다.",
    
    "article_section2_title": "직접 도금 동(DPC): 우수한 금속화 선택",
    "article_section2_paragraph1": "두꺼운 필름(Thick Film) 및 능동 금속 브레이징(AMB)과 같은 방법이 존재하지만, DPC는 소형화된 고출력 밀도 TEC/TEG 패키징에 중요한 정밀성, 열 성능 및 기계적 신뢰성의 독특한 조합을 제공합니다.",
    
    "article_subsection1_title": "1. 탁월한 열전도성",
    "article_subsection1_paragraph": "TEM의 전체 열저항(Rth)은 그 기판에 크게 영향을 받습니다. 당사는 주로 순수 도금된 구리의 높은 전도성과 결합된 질화알루미늄(AlN) 또는 고급 알루미나(Al₂O₃) 세라믹을 사용합니다.",
    "article_subsection1_paragraph2": "세라믹 열전도도: 알루미나(Al₂O₃)는 25~35 W/m·K를 제공하는 반면, 질화알루미늄(AlN)은 일반적으로 170~230 W/m·K를 달성하는 우수한 열 경로를 제공합니다.",
    "article_subsection1_paragraph3": "장점: DPC 공정은 최소한의 열 장벽으로 얇고 치밀한 구리층(최대 50μm 두께)을 생성하여 신속한 열 전달을 보장합니다. 이는 모듈의 Rth를 크게 낮추어 TEC의 경우 더 큰 온도 차이(ΔTmax)를, TEG의 경우 더 높은 출력을 이끌어냅니다.",
    
    "article_subsection2_title": "2. 향상된 기계적 안정성 및 신뢰성",
    "article_subsection2_paragraph1": "DPC 공정은 구리와 세라믹 기판 사이에 우수한 접착 강도(계면에서 종종 0.5 kgf/mm²를 초과)의 층을 생성합니다.",
    "article_subsection2_paragraph2": "장점: 이 강력한 결합과 금속의 강성은 실리콘 다이(약 2.6 ppm/K), 기판 및 캡슐레이션 수지 사이의 열팽창계수(CTE) 불일치로 인해 발생하는 내부 힘에 저항하여 폴리머 댐보다 훨씬 더 견고한 구조를 제공합니다. 이러한 감소된 기계적 응력은 모듈의 전력 사이클 수명을 향상시키는 데 중요합니다.",
    
    "article_subsection3_title": "3. 낮은 열팽창계수(CTE) 불일치",
    "article_subsection3_paragraph1": "TEM의 주요 고장 원인은 열 사이클링 피로로, 이는 솔더 접합부 균열 및 반도체 펠릿 파손을 초래합니다. 이는 주요 재료 간의 CTE 불일치로 인해 발생합니다.",
    "material_cte1": "실리콘/반도체: ≈ 2.6 ppm/K",
    "material_cte2": "구리 상호연결: ≈ 17 ppm/K",
    "material_cte3": "알루미나(Al₂O₃): ≈ 6.5 ppm/K",
    "material_cte4": "질화알루미늄(AlN): ≈ 4.5 ppm/K",
    "article_subsection3_paragraph2": "장점: 반도체 재료와 밀접하게 일치하는 AlN(CTE ≈ 4.5 ppm/K)과 같은 세라믹을 선택하고 높은 접착력을 가진 DPC 구리 필름과 결합함으로써, 열 사이클링(예: 0°C에서 125°C) 중 솔더 접합부의 전단 응력을 극적으로 줄입니다. 이는 직접적으로 상당히 증가된 작동 수명과 신뢰성으로 이어집니다.",
    
    "article_subsection4_title": "4. 고회로 밀도 및 미세 해상도",
    "article_subsection4_paragraph1": "DPC는 고해상도 패터닝을 위해 기존의 두꺼운 필름보다 훨씬 우수한 방법인 고급 포토리소그래피를 활용합니다.",
    "article_subsection4_paragraph2": "측정치: 당사의 DPC 기판은 최대 30~50μm까지의 미세 선폭과 간격을 달성할 수 있습니다.",
    "article_subsection4_paragraph3": "장점: 이러한 정밀성은 마이크로 열전 모듈(최소 2.5 × 2.5 mm² TEM)에 필요한 고도로 컴팩트하고 고밀도의 상호 연결 제작을 가능하게 하여 단위 면적당 더 많은 P-N 쌍을 허용하고 소형화된 패키지에서 냉각/발전 전력을 극대화합니다.",
    
    "article_section3_title": "TEM을 위한 DPC 공정",
    "article_section3_paragraph1": "당사의 DPC 기술은 최대 성능을 위해 설계된 저온, 고접착 공정입니다:",
    "dpc_step1": "세라믹 선택: 열적 요구 사항에 맞춰 고순도 Al₂O₃ 또는 AlN 기판을 선택합니다.",
    "dpc_step2": "씨드층 증착: 진공 스퍼터링으로 얇고 높은 접착력을 가진 씨드층(예: Ti/Cu)을 적용합니다.",
    "dpc_step3": "포토리소그래피: 전기적 트레이스 및 접점 패드에 대한 정밀한 패턴을 정의합니다.",
    "dpc_step4": "전해 도금: 순수하고 치밀한 구리를 씨드층에 전해 도금하여 고전류 밀도를 처리하는 데 필요한 두께(예: 20~50μm)를 구축합니다.",
    "dpc_step5": "마무리: 최적의 와이어 본딩 및 Bi₂Te₃ 펠릿과의 납땜 호환성을 위해 선택적 최종 도금(Ni/Au)이 적용됩니다.",
    "article_section3_paragraph2": "이 공정은 우수한 접합 강도(종종 > 45 MPa)와 탁월한 표면 평탄도를 가진 세라믹 회로 기판을 만들어내며, 직접 칩 부착(DCA) 및 고정밀 모듈 조립에 완벽합니다.",
    
    "article_section4_title": "핵심 기술 데이터: 성능 요약",
    
    "technical_note": "<strong>기술 참고:</strong> 중요한 열전 패키징 요구 사항에 대해 Jimei Materials와 협력하십시오. 당사의 DPC 세라믹 금속화는 귀하의 TEC 및 TEG 설계에서 최대 열 성능과 장기 신뢰성을 달성하기 위한 기반입니다.",

    // Technical Specifications Table
    "table_header_material": "재료",
    "table_header_thermal_conductivity": "열전도도 (W/(m·K))",
    "table_header_cte": "열팽창계수 (ppm/K)",
    "table_header_note": "적용 참고",
    "table_row1_note": "비용 효율적, 양호한 균형",
    "table_row2_note": "고출력 TEC/TEG에 최적; 우수한 CTE 정합",
    "table_row3_note": "참조 (CTE는 응력 감소 목표)",
    "table_row4_note": "참조 (DPC의 순수 벌크 Cu CTE 대비 이점 설명)",
    
    // Article Tags
    "article_tags": "태그:",
    "tag_dpc": "DPC 기술",
    "tag_thermoelectric": "열전 모듈",
    "tag_aln": "질화알루미늄",
    "tag_thermal_management": "열 관리",
    "tag_packaging": "고급 패키징",

    //Related Articles Section
    "related_articles_title": "관련 기사",
    "badge_application_note": "애플리케이션 노트",
    "related_article1_title": "DPC 캡슐레이션 댐의 장점",
    "related_article1_description": "DPC 캡슐레이션 댐이 파워 모듈의 신뢰성과 성능을 어떻게 향상시키는지 알아보세요.",
    "badge_dpc_technology": "DPC 기술",
    "related_article2_title": "DPC 기술 상세 설명",
    "related_article2_description": "Direct Plated Copper 기술이 고급 패키징을 어떻게 혁신하고 있는지 알아보세요.",
    "badge_design_guide": "설계 가이드",
    "related_article3_title": "세라믹 금속화 공정",
    "related_article3_description": "세라믹에 대한 금속화 방법 및 신뢰성 고려 사항에 대한 기술 개요.",
    "btn_read_more": "더 읽기 →",

    //CTA Section
    "article_cta_title": "열전 모듈 성능을 최적화하십시오",
    "article_cta_description": "당사 엔지니어링 팀은 고성능 TEC 및 TEG 애플리케이션을 위한 맞춤형 DPC 세라믹 금속화 솔루션을 전문으로 합니다.",
    "cta_feature1_title": "맞춤형 기판 설계",
    "cta_feature1_desc": "특정 열 요구 사항에 맞춤화된 솔루션",
    "cta_feature2_title": "성능 검증",
    "cta_feature2_desc": "열 사이클링 및 신뢰성 테스트",
    "btn_contact_experts": "전문가에게 문의",

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
    // Meta & Structural Elements
    "article_page_title": "DPC-Keramikmetallisierung für Hochleistungs-thermoelektrische Module (TEC/TEG) | JIMEI Keramiksubstrate",
    "article_meta_description": "Maximieren Sie TEC/TEG-Performance mit Jimeis Direct Plated Copper (DPC) Keramikmetallisierung. Hoch wärmeleitfähige AlN/Al2O3 Substrate für thermoelektrische Kühlung und Stromerzeugung.",
    "article_meta_keywords": "DPC Keramikmetallisierung, thermoelektrische Module, TEC Packaging, TEG Packaging, Direct Plated Copper, AlN Substrate, Wärmemanagement, Peltier-Kühler, thermoelektrischer Generator",
    "article_og_title": "DPC-Keramikmetallisierung für Hochleistungs-thermoelektrische Module (TEC/TEG) | Jimei Materials",
    "article_og_description": "Maximieren Sie TEC/TEG-Performance mit Jimeis DPC-Keramikmetallisierung auf AlN/Al2O3 Substraten.",
    "article_twitter_title": "DPC-Keramikmetallisierung für Hochleistungs-thermoelektrische Module (TEC/TEG) | Jimei Materials",
    "article_twitter_description": "Maximieren Sie TEC/TEG-Performance mit Jimeis DPC-Keramikmetallisierung auf AlN/Al2O3 Substraten.",
    "skip_to_content": "Zum Hauptinhalt springen",
    
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
    "breadcrumb_resources": "Technische Ressourcen",
    "article_breadcrumb": "DPC für TEC/TEG-Module",
    
    // Article Title Section
    "article_title": "DPC-Keramikmetallisierung für Hochleistungs-thermoelektrische Module (TEC/TEG)",
    "article_description": "Maximieren Sie TEC/TEG-Performance mit Jimeis Direct Plated Copper (DPC) Keramikmetallisierung auf AlN/Al₂O₃ Substraten",
    "article_published": "Veröffentlicht:",
    "article_read_time": "Lesezeit:",
    
    // Article Navigation
    "article_previous": "Zurück",
    "article_all_resources": "Alle Ressourcen",
    "article_next": "Weiter",
    
    // Article Content
    "article_intro_paragraph1": "Im spezialisierten Bereich der thermoelektrischen Module (TEMs) - einschließlich Peltier-Kühler (TEC) und thermoelektrischer Generatoren (TEG) - geht es beim Packaging nicht nur um Schutz; es ist grundlegend für Performance und Langlebigkeit. Diese Geräte, die auf dem Peltier-Effekt zur Wärmepumpe oder dem Seebeck-Effekt zur Stromerzeugung basieren, sind sehr anfällig für thermische Belastung und mechanisches Versagen.",
    "article_intro_paragraph2": "Wir entwickeln und fertigen fortschrittliche Keramikmetallisierungssubstrate mittels Direct Plated Copper (DPC) Technologie. Unsere DPC-Substrate sind die kritische Verbindung, die die Zuverlässigkeit und Effizienz mikro-thermoelektrischer Systeme steigert und Grenzen in Anwendungen wie Laserkühlung, Glasfaseroptik und präziser Temperaturregelung verschiebt.",
    
    "article_section1_title": "Die Rolle metallisierter Keramiken in der Thermoelektrik",
    "article_section1_paragraph1": "Ein typisches thermoelektrisches Modul besteht aus einem Array alternierender n-Typ- und p-Typ-Wismuttellurid (Bi₂Te₃) Halbleiterelemente. Diese Elemente sind elektrisch in Reihe und thermisch parallel zwischen zwei gegenüberliegenden Keramiksubstraten verbunden.",
    "article_section1_paragraph2": "Das Keramiksubstrat erfüllt drei nicht verhandelbare Funktionen, die die Modulleistung definieren:",
    "article_function1": "Elektrische Isolation: Isolierung des internen Stromkreises von externen Montageflächen und Kühlkörpern.",
    "article_function2": "Mechanische Stütze: Bereitstellung einer flachen, starren und stabilen Plattform für die gesamte Baugruppe.",
    "article_function3": "Thermische Leitung: Effiziente Wärmeübertragung von der kalten Seite (TEC) oder Wärmeübertragung über das Modul (TEG).",
    "article_section1_paragraph3": "Um die notwendigen elektrischen Übergänge zu bilden, die die Halbleiter-Pellets verbinden, muss die Keramikoberfläche metallisiert werden. Unser Direct Plated Copper (DPC) Prozess bietet die ideale Lösung für diese Herausforderung.",
    
    "article_section2_title": "Direct Plated Copper (DPC): Die überlegene Metallisierungswahl",
    "article_section2_paragraph1": "Während Methoden wie Dickschicht und Active Metal Brazing (AMB) existieren, bietet DPC eine einzigartige Kombination aus Präzision, thermischer Performance und mechanischer Zuverlässigkeit - kritische Faktoren für miniaturisiertes, hochleistungsdichtes TEC/TEG-Packaging.",
    
    "article_subsection1_title": "1. Außergewöhnliche Wärmeleitfähigkeit",
    "article_subsection1_paragraph": "Der Gesamtwärmewiderstand (Rth) eines TEM wird stark von seinen Substraten beeinflusst. Wir verwenden primär Aluminiumnitrid (AlN) oder hochwertige Aluminiumoxid (Al₂O₃) Keramiken, kombiniert mit der hohen Leitfähigkeit von reinem galvanisiertem Kupfer.",
    "article_subsection1_paragraph2": "Keramische Wärmeleitfähigkeit: Aluminiumoxid (Al₂O₃) bietet 25 bis 35 W/m·K, während Aluminiumnitrid (AlN) einen hervorragenden Wärmeleitungspfad bereitstellt, typischerweise 170 bis 230 W/m·K erreichend.",
    "article_subsection1_paragraph3": "Vorteil: Der DPC-Prozess erzeugt eine dünne, dichte Kupferschicht (bis zu 50 µm dick) mit minimaler Wärmebarriere, die schnellen Wärmetransport gewährleistet. Dies senkt den Rth des Moduls signifikant, was zu einer größeren Temperaturdifferenz (ΔTmax) für TECs oder höherer Leistungsabgabe für TEGs führt.",
    
    "article_subsection2_title": "2. Verbesserte mechanische Stabilität und Zuverlässigkeit",
    "article_subsection2_paragraph1": "Der DPC-Prozess erzeugt eine Schicht mit ausgezeichneter Haftfestigkeit zwischen Kupfer und Keramiksubstrat, die oft 0,5 kgf/mm² an der Grenzfläche übertrifft.",
    "article_subsection2_paragraph2": "Vorteil: Diese starke Bindung und die Starrheit des Metalls bieten eine weitaus robustere Gehäusestruktur als Polymer-Ränder, widerstehen den internen Kräften, die durch den Unterschied im Wärmeausdehnungskoeffizienten (CTE) zwischen dem Silizium-Chip (ca. 2,6 ppm/K), dem Substrat und dem Vergussharz entstehen. Diese reduzierte mechanische Belastung ist entscheidend für die Verbesserung der Leistungszykluslebensdauer des Moduls.",
    
    "article_subsection3_title": "3. Geringer Unterschied im Wärmeausdehnungskoeffizienten (CTE)",
    "article_subsection3_paragraph1": "Die Hauptursache für Ausfälle in TEMs ist thermische Zyklusermüdung, die zu gerissenen Lötstellen und gebrochenen Halbleiter-Pellets führt. Dies wird durch den CTE-Unterschied zwischen den Schlüsselmaterialien verursacht.",
    "material_cte1": "Silizium/Halbleiter: ≈ 2,6 ppm/K",
    "material_cte2": "Kupferverbindungen: ≈ 17 ppm/K",
    "material_cte3": "Aluminiumoxid (Al₂O₃): ≈ 6,5 ppm/K",
    "material_cte4": "Aluminiumnitrid (AlN): ≈ 4,5 ppm/K",
    "article_subsection3_paragraph2": "Vorteil: Durch die Wahl von Keramiken wie AlN (CTE ≈ 4,5 ppm/K), die dem Halbleitermaterial nahekommt, und der Kombination mit der hochhaftenden DPC-Kupferschicht reduzieren wir die Scherspannung an den Lötstellen während thermischer Zyklen (z.B. von 0°C bis 125°C) drastisch. Dies führt direkt zu einer signifikant erhöhten Betriebslebensdauer und Zuverlässigkeit.",
    
    "article_subsection4_title": "4. Hohe Schaltungsdichte und feine Auflösung",
    "article_subsection4_paragraph1": "DPC nutzt fortschrittliche Fotolithografie, eine Methode, die für hochauflösende Strukturierung traditioneller Dickschichttechnik weit überlegen ist.",
    "article_subsection4_paragraph2": "Metrik: Unsere DPC-Substrate können Leiterbahnbreiten und Abstände bis zu 30 µm bis 50 µm erreichen.",
    "article_subsection4_paragraph3": "Vorteil: Diese Präzision ermöglicht die Herstellung hochkompakter, hochdichter Verbindungen, die für mikro-thermoelektrische Module (TEMs bis 2,5 × 2,5 mm²) erforderlich sind, erlaubt mehr P-N-Paare pro Flächeneinheit und maximiert Kühl-/Erzeugungsleistung in einem miniaturisierten Package.",
    
    "article_section3_title": "Der DPC-Prozess für TEMs",
    "article_section3_paragraph1": "Unsere DPC-Technik ist ein Niedertemperatur-, Hochhaftungsprozess für maximale Performance:",
    "dpc_step1": "Keramikauswahl: Hochreine Al₂O₃- oder AlN-Substrate werden für thermische Anforderungen ausgewählt.",
    "dpc_step2": "Saatgut-Schichtabscheidung: Vakuumsputtern appliziert eine dünne, hochhaftende Saatgutschicht (z.B. Ti/Cu).",
    "dpc_step3": "Fotolithografie: Das präzise Muster für die elektrischen Leitungen und Kontaktpads wird definiert.",
    "dpc_step4": "Galvanisierung: Reines, dichtes Kupfer wird auf die Saatgutschicht galvanisiert, um die erforderliche Dicke (z.B. 20 µm bis 50 µm) für hohe Stromdichte aufzubauen.",
    "dpc_step5": "Endbearbeitung: Optionale Endbeschichtung (Ni/Au) wird für optimale Drahtbond- und Lötkompatibilität mit Bi₂Te₃-Pellets aufgebracht.",
    "article_section3_paragraph2": "Dieser Prozess resultiert in einer Keramik-Leiterplatte mit überlegener Haftfestigkeit (oft > 45 MPa) und ausgezeichneter Oberflächenplanarität, perfekt für Direct Chip Attach (DCA) und hochpräzise Modulmontage.",
    
    "article_section4_title": "Wichtige technische Daten: Performance-Zusammenfassung",
    
    "technical_note": "<strong>Technischer Hinweis:</strong> Arbeiten Sie mit Jimei Materials für Ihre kritischen thermoelektrischen Packaging-Anforderungen zusammen. Unsere DPC-Keramikmetallisierung ist die Grundlage für das Erreichen maximaler thermischer Performance und langfristiger Zuverlässigkeit in Ihren TEC- und TEG-Designs.",

    // Technical Specifications Table
    "table_header_material": "Material",
    "table_header_thermal_conductivity": "Wärmeleitfähigkeit (W/(m·K))",
    "table_header_cte": "CTE (ppm/K)",
    "table_header_note": "Anwendungshinweis",
    "table_row1_note": "Kosteneffizient, gute Balance",
    "table_row2_note": "Beste für Hochleistungs-TEC/TEG; überlegene CTE-Anpassung",
    "table_row3_note": "Referenz (CTE ist Ziel für Spannungsreduzierung)",
    "table_row4_note": "Referenz (illustriert DPC-Vorteil gegenüber reinem Volumen-Cu-CTE)",
    
    // Article Tags
    "article_tags": "Tags:",
    "tag_dpc": "DPC-Technologie",
    "tag_thermoelectric": "Thermoelektrische Module",
    "tag_aln": "Aluminiumnitrid",
    "tag_thermal_management": "Wärmemanagement",
    "tag_packaging": "Advanced Packaging",

    // Related Articles Section
    "related_articles_title": "Ähnliche Artikel",
    "badge_application_note": "Applikationshinweis",
    "related_article1_title": "Vorteile von DPC-Umschließungsrändern (Encapsulation Dams)",
    "related_article1_description": "Entdecken Sie, wie DPC-Umschließungsränder die Zuverlässigkeit und Performance von Leistungsmodulen verbessern.",
    "badge_dpc_technology": "DPC-Technologie",
    "related_article2_title": "DPC-Technologie erklärt",
    "related_article2_description": "Erfahren Sie, wie die Direct Plated Copper-Technologie das Advanced Packaging revolutioniert.",
    "badge_design_guide": "Designleitfaden",
    "related_article3_title": "Keramikmetallisierungsprozesse",
    "related_article3_description": "Technischer Überblick über Metallisierungsmethoden für Keramik und Zuverlässigkeitsaspekte.",
    "btn_read_more": "Weiterlesen →",

    // CTA Section
    "article_cta_title": "Optimieren Sie Ihre thermoelektrische Modul-Performance",
    "article_cta_description": "Unser Ingenieurteam ist spezialisiert auf kundenspezifische DPC-Keramikmetallisierungslösungen für Hochleistungs-TEC- und TEG-Anwendungen.",
    "cta_feature1_title": "Kundenspezifisches Substratdesign",
    "cta_feature1_desc": "Maßgeschneiderte Lösungen für Ihre spezifischen thermischen Anforderungen",
    "cta_feature2_title": "Performance-Validierung",
    "cta_feature2_desc": "Thermische Zyklus- und Zuverlässigkeitstests",
    "btn_contact_experts": "Unsere Experten kontaktieren",

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