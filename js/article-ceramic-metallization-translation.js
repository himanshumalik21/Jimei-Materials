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
            "article_page_title": "Ceramic Metallization: Processes & Reliability | JIMEI Ceramic Substrates",
            "article_meta_description": "Comprehensive overview of ceramic metallization processes, techniques, and reliability considerations for DBC and DPC substrates. Technical insights from Jimei Materials experts.",
            "article_meta_keywords": "ceramic metallization, DBC process, DPC technology, metallized ceramic substrates, thermal management, electronic packaging, power electronics, reliability testing",
            "article_og_title": "Ceramic Metallization: Processes & Reliability | Jimei Materials",
            "article_og_description": "Technical overview of metallization methods for ceramics, including process steps and reliability considerations for DBC and DPC substrates.",
            "article_twitter_title": "Ceramic Metallization: Processes & Reliability | Jimei Materials",
            "article_twitter_description": "Technical overview of metallization methods for ceramics, including process steps and reliability considerations.",
            "skip_to_content": "Skip to main content",
            
            // Navigation
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
            
            // Breadcrumbs
            "breadcrumb_home": "Home",
            "breadcrumb_resources": "Technical Resources",
            "article_breadcrumb": "Ceramic Metallization",
            
            // Article Title Section
            "article_title": "Ceramic Metallization Processes: Technical Overview & Reliability",
            "article_description": "A technical overview of metallization methods for ceramics, including process steps and reliability considerations for power electronics applications.",
            "article_published": "Published:",
            "article_read_time": "Read time:",
            
            // Article Navigation
             "article_previous": "Previous",
            "article_all_resources": "All Resources",
            "article_next": "Next",
            
            // Article Content
            "article_intro_paragraph1": "Ceramic metallization is a critical process in advanced electronics manufacturing, enabling the integration of conductive pathways onto ceramic substrates for applications such as power modules, sensors, optoelectronics, and medical devices. Metallized ceramics combine the inherent thermal, electrical, and mechanical advantages of technical ceramics—such as alumina (Al₂O₃) and aluminum nitride (AlN)—with the functionality of metal layers, supporting reliable interconnection, packaging, and thermal management in demanding environments.",
  
            "article_image_caption": "Direct Plated Copper (DPC) metallization on ceramic substrate for advanced packaging applications",
  
            "article_section1_title": "What Is Ceramic Metallization?",
            "article_section1_paragraph1": "Ceramic metallization refers to the application of thin metal films or patterns onto ceramic substrates to create electrical contacts, circuit traces, or bonding pads. This process is essential for producing substrates used in Direct Bonded Copper (DBC), Direct Plated Copper (DPC), and other advanced packaging solutions. Metallized ceramics are widely used in high-power electronics, RF/microwave circuits, LED modules, and hermetic packages, where robust electrical performance and environmental resistance are required.",
            
            "article_section2_title": "Key Metallization Methods for Ceramics",
            "article_section2_paragraph1": "Different applications require specific metallization techniques, each with unique advantages and considerations:",
            
            "article_subsection1_title": "1. Thick Film Metallization",
            "article_subsection1_paragraph1": "Utilizes screen printing of metal pastes (typically silver, gold, or platinum-based) onto the ceramic surface, followed by firing at high temperatures to sinter the metal and achieve adhesion. This method is cost-effective and suitable for mass production of circuit patterns and electrodes.",
            
            "article_subsection2_title": "2. Thin Film Metallization",
            "article_subsection2_paragraph1": "Involves vacuum deposition techniques such as sputtering or evaporation to deposit thin layers of metals (e.g., titanium, tungsten, nickel, gold) onto ceramics. Thin film processes offer precise control over layer thickness and pattern resolution, ideal for microelectronics and high-frequency applications.",
            
            "article_subsection3_title": "3. Direct Bonded Copper (DBC)",
            "article_subsection3_paragraph1": "A process where copper foil is bonded directly to ceramic substrates (usually Al₂O₃ or AlN) through high-temperature oxidation and diffusion. DBC substrates provide excellent thermal conductivity and high current-carrying capability, making them preferred for power modules and IGBT packaging.",
            
            "article_subsection4_title": "4. Direct Plated Copper (DPC)",
            "article_subsection4_paragraph1": "Uses photolithography and electroplating to deposit copper patterns onto ceramic surfaces. DPC enables fine line resolution and multilayer structures, supporting advanced packaging for semiconductor devices and laser diodes.",
            
            "article_subsection5_title": "5. Active Metal Brazing (AMB)",
            "article_subsection5_paragraph1": "Employs active brazing alloys (e.g., Ag-Cu-Ti) to bond metal layers to ceramics at elevated temperatures. AMB is used for hermetic sealing and high-reliability applications where strong metal-ceramic adhesion is required.",
            
            "article_section3_title": "Ceramic Metallization Process Steps",
            "process_step1_title": "Surface Preparation",
            "process_step1_description": "The ceramic substrate is cleaned and, if necessary, roughened to enhance metal adhesion. Techniques include ultrasonic cleaning, plasma treatment, and chemical etching.",
            "process_step2_title": "Metal Deposition",
            "process_step2_description": "Metal layers are applied using screen printing, sputtering, evaporation, or electroplating, depending on the chosen metallization method and application requirements.",
            "process_step3_title": "Patterning",
            "process_step3_description": "Photolithography, laser ablation, or mask printing are used to define circuit traces, bonding pads, or electrode geometries on the substrate.",
            "process_step4_title": "Firing/Annealing",
            "process_step4_description": "For thick film processes, the metallized substrate is fired at high temperatures to sinter the metal and achieve strong adhesion. Thin film and plated layers may undergo annealing to improve crystallinity and interface quality.",
            "process_step5_title": "Post-Processing",
            "process_step5_description": "Additional steps such as soldering, wire bonding, or encapsulation are performed to integrate the metallized ceramic into electronic assemblies.",
            "process_step6_title": "Inspection & Testing",
            "process_step6_description": "Metallized substrates are inspected for adhesion, pattern accuracy, and electrical continuity. Reliability testing may include thermal cycling, humidity exposure, and high-voltage breakdown assessment.",
            
            "article_section4_title": "Reliability Considerations in Ceramic Metallization",
            "table_header_factor": "Reliability Factor",
            "table_header_consideration": "Key Consideration",
            "table_header_impact": "Impact on Performance",
            "table_row1_factor": "Adhesion Strength",
            "table_row1_consideration": "The bond between metal and ceramic must withstand thermal cycling, mechanical stress, and environmental exposure.",
            "table_row1_impact": "Poor adhesion can lead to delamination, electrical failure, or reduced device lifespan.",
            "table_row2_factor": "Thermal Expansion Matching",
            "table_row2_consideration": "Differences in thermal expansion coefficients between metal and ceramic can induce stress during temperature changes.",
            "table_row2_impact": "Optimized material selection and processes minimize cracking or warping during thermal cycling.",
            "table_row3_factor": "Corrosion Resistance",
            "table_row3_consideration": "Metallized layers are often exposed to moisture, chemicals, or high voltages.",
            "table_row3_impact": "Protective coatings or alloy selection help prevent oxidation and maintain long-term reliability.",
            "table_row4_factor": "Electrical Performance",
            "table_row4_consideration": "Low contact resistance, high current-carrying capability, and stable dielectric properties are essential.",
            "table_row4_impact": "Process control ensures consistent electrical characteristics across production batches.",
            "table_row5_factor": "Hermeticity",
            "table_row5_consideration": "For medical, aerospace, and sensor applications, metallized ceramics may require hermetic sealing.",
            "table_row5_impact": "Brazing and encapsulation techniques achieve robust seals against moisture and contaminants.",
            
            "article_section5_title": "Applications of Metallized Ceramic Substrates",
            "application1_title": "Power Modules & IGBT Substrates",
            "application1_description": "Metallized ceramics provide electrical isolation and efficient heat dissipation for high-voltage, high-current devices in industrial and automotive systems.",
            "application2_title": "Laser Diode & Optoelectronic Packaging",
            "application2_description": "Thin film metallization enables precise electrode patterns and reliable bonding for photonic devices requiring thermal management and electrical connectivity.",
            "application3_title": "RF & Microwave Circuits",
            "application3_description": "Metallized ceramics offer low-loss, high-frequency performance for communication modules, radar systems, and wireless infrastructure.",
            "application4_title": "Medical Devices & Sensors",
            "application4_description": "Hermetically sealed metallized ceramics are used in implantable electronics, sensors, and diagnostic equipment, ensuring biocompatibility and reliability.",
            
            "technical_note": "<strong>Expert Insight:</strong> At Jimei Materials, we specialize in optimizing metallization processes for specific application requirements, balancing thermal performance, electrical characteristics, and long-term reliability through rigorous testing and quality control.",
            
            "article_section6_title": "Conclusion",
            "article_conclusion": "Ceramic metallization processes are foundational to the development of high-performance electronic devices, combining the advantages of technical ceramics with the functionality of metal interconnects. By selecting appropriate metallization methods and optimizing process steps, manufacturers achieve reliable, efficient, and scalable solutions for power electronics, optoelectronics, RF circuits, and medical applications. As technology advances, the demand for robust metallized ceramic substrates will continue to grow, driving innovation in thermal management, electrical isolation, and device miniaturization.",
            
            // Article Tags
            "article_tags": "Tags:",
            "tag_metallization": "Ceramic Metallization",
            "tag_dbc": "DBC Technology",
            "tag_dpc": "DPC Technology",
            "tag_reliability": "Reliability",
            "tag_thermal": "Thermal Management",


            //Related Articles Section

            "related_articles_title": "Related Technical Articles",
            "badge_dbc_technology": "DBC Technology",
            "related_article1_title": "Understanding DBC Substrates",
            "related_article1_description": "Explore the advantages and applications of Direct Bonded Copper substrates in power electronics and thermal management.",
            "badge_dpc_technology": "DPC Technology",
            "related_article2_title": "DPC Technology Explained",
            "related_article2_description": "Learn how Direct Plated Copper technology is revolutionizing advanced packaging for semiconductors and optoelectronics.",
            "badge_application_note": "Application Note",
            "related_article3_title": "DPC Encapsulation Dam Advantages",
            "related_article3_description": "Discover how Direct Plated Copper (DPC) encapsulation dams enhance power module reliability and performance.",
            "btn_read_more": "Read more →",

            //CTA Section
            "article_cta_title": "Need Metallization Expertise?",
            "article_cta_description": "Our technical team specializes in ceramic metallization processes for demanding applications. Contact us for process optimization and reliability testing.",
            "cta_feature1_title": "Process Consultation",
            "cta_feature1_desc": "Expert guidance on metallization methods and process optimization",
            "cta_feature2_title": "Reliability Testing",
            "cta_feature2_desc": "Comprehensive testing including thermal cycling, adhesion, and hermeticity",
            "btn_contact_experts": "Contact Technical Team",

            // Footer
            "footer_description": "Leading manufacturer of ceramic metallization substrates for thermal management applications since 2016. ISO 14001:2015 certified with global manufacturing capabilities.",
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
        "article_page_title": "陶瓷金属化工艺：技术综述与可靠性考量 | JIMEI 陶瓷基板",
        "article_meta_description": "全面解析陶瓷金属化工艺，涵盖DBC与DPC基板的工艺技术、方法及可靠性考量。集美材料专家的深度技术洞见。",
        "article_meta_keywords": "陶瓷金属化, DBC工艺, DPC技术, 金属化陶瓷基板, 热管理, 电子封装, 功率电子, 可靠性测试",
        "article_og_title": "陶瓷金属化工艺：技术综述与可靠性 | 集美材料",
        "article_og_description": "关于陶瓷金属化方法的技术概览，包括DBC与DPC基板的工艺步骤与可靠性考量。",
        "article_twitter_title": "陶瓷金属化工艺：技术综述与可靠性 | 集美材料",
        "article_twitter_description": "关于陶瓷金属化方法的技术概览，包括工艺步骤与可靠性考量。",
        "skip_to_content": "跳至主要内容",
        
        // 导航（与全站一致）
        "nav_home": "首页",
        "nav_products": "产品中心",
        "nav_dpc": "直接镀铜陶瓷基板 (DPC)",
        "nav_dbc": "直接覆铜陶瓷基板 (DBC)",
        "nav_bare": "裸陶瓷基板",
        "nav_htcc": "HTCC陶瓷封装",
        "nav_all_products": "全部产品",
        "nav_resources": "技术资源",
        "nav_about": "关于集美",
        "nav_contact": "联系我们",
        "nav_request_quote": "在线询价",
        
        // 面包屑导航
        "breadcrumb_home": "首页",
        "breadcrumb_resources": "技术资源",
        "article_breadcrumb": "陶瓷金属化工艺",
        
        // 文章标题区
        "article_title": "陶瓷金属化工艺：技术综述与可靠性考量",
        "article_description": "关于陶瓷金属化方法的技术概览，包括功率电子应用的工艺步骤与可靠性考量。",
        "article_published": "发布日期:",
        "article_read_time": "阅读时长:",
        
        // 文章导航
        "article_previous": "上一篇",
        "article_all_resources": "全部资源",
        "article_next": "下一篇",
        
        // 文章正文内容
        "article_intro_paragraph1": "陶瓷金属化是先进电子制造中的关键工艺，它能够在陶瓷基板上集成导电通路，应用于功率模块、传感器、光电子和医疗设备等领域。金属化陶瓷将技术陶瓷（如氧化铝和氮化铝）固有的热、电、机械优势与金属层的功能性相结合，支撑了严苛环境下的可靠互连、封装与热管理。",
  
        "article_image_caption": "用于先进封装应用的陶瓷基板直接镀铜金属化工艺",
  
        "article_section1_title": "什么是陶瓷金属化？",
        "article_section1_paragraph1": "陶瓷金属化是指在陶瓷基板上施加金属薄膜或图案，以形成电接触、电路走线或焊盘的过程。该工艺对于生产用于直接覆铜、直接镀铜及其他先进封装解决方案的基板至关重要。金属化陶瓷广泛应用于高功率电子、射频/微波电路、LED模块和气密封装中，这些领域要求强大的电气性能和环境耐受性。",
            
        "article_section2_title": "主要的陶瓷金属化方法",
        "article_section2_paragraph1": "不同的应用需要特定的金属化技术，每种技术都有其独特的优势和考量：",
            
        "article_subsection1_title": "1. 厚膜金属化",
        "article_subsection1_paragraph1": "采用丝网印刷将金属浆料（通常为银基、金基或铂基）涂覆在陶瓷表面，然后高温烧结以实现金属化并获得附着力。此方法成本效益高，适用于电路图案和电极的大规模生产。",
            
        "article_subsection2_title": "2. 薄膜金属化",
        "article_subsection2_paragraph1": "涉及溅射或蒸发等真空沉积技术，在陶瓷上沉积薄层金属。薄膜工艺可精确控制层厚和图案分辨率，非常适合微电子和高频应用。",
            
        "article_subsection3_title": "3. 直接覆铜",
        "article_subsection3_paragraph1": "通过高温氧化和扩散，将铜箔直接键合到陶瓷基板（通常为氧化铝或氮化铝）上的工艺。DBC基板具有优异的导热性和高载流能力，是功率模块和IGBT封装的首选。",
            
        "article_subsection4_title": "4. 直接镀铜",
        "article_subsection4_paragraph1": "利用光刻和电镀技术在陶瓷表面沉积铜图案。DPC技术可实现细线分辨率和多层结构，支持半导体器件和激光二极管的先进封装。",
            
        "article_subsection5_title": "5. 活性金属钎焊",
        "article_subsection5_paragraph1": "使用活性钎焊合金在高温下将金属层连接到陶瓷上。AMB用于气密密封和高可靠性应用，需要强大的金属-陶瓷结合力。",
            
        "article_section3_title": "陶瓷金属化工艺流程步骤",
        "process_step1_title": "表面处理",
        "process_step1_description": "清洁陶瓷基板，必要时进行粗化处理以增强金属附着力。技术包括超声波清洗、等离子处理和化学蚀刻。",
        "process_step2_title": "金属沉积",
        "process_step2_description": "根据所选金属化方法和应用需求，采用丝网印刷、溅射、蒸发或电镀方式施加金属层。",
        "process_step3_title": "图形化",
        "process_step3_description": "使用光刻、激光烧蚀或掩模印刷技术在基板上定义电路走线、焊盘或电极几何形状。",
        "process_step4_title": "烧结/退火",
        "process_step4_description": "对于厚膜工艺，金属化基板需在高温下烧结以使金属致密化并获得强附着力。薄膜和电镀层可能需要进行退火以改善结晶性和界面质量。",
        "process_step5_title": "后处理",
        "process_step5_description": "执行焊接、引线键合或封装等额外步骤，将金属化陶瓷集成到电子组件中。",
        "process_step6_title": "检测与测试",
        "process_step6_description": "检查金属化基板的附着力、图案精度和电气连续性。可靠性测试可能包括热循环、湿度暴露和高电压击穿评估。",
            
        "article_section4_title": "陶瓷金属化的可靠性考量",
        "table_header_factor": "可靠性因素",
        "table_header_consideration": "关键考量点",
        "table_header_impact": "对性能的影响",
        "table_row1_factor": "结合强度",
        "table_row1_consideration": "金属与陶瓷之间的结合必须能承受热循环、机械应力和环境暴露。",
        "table_row1_impact": "附着力差可能导致分层、电气故障或缩短器件寿命。",
        "table_row2_factor": "热膨胀匹配性",
        "table_row2_consideration": "金属与陶瓷之间的热膨胀系数差异会在温度变化时产生应力。",
        "table_row2_impact": "优化材料选择和工艺可最大程度减少热循环过程中的开裂或翘曲。",
        "table_row3_factor": "耐腐蚀性",
        "table_row3_consideration": "金属化层常暴露于湿气、化学品或高电压环境中。",
        "table_row3_impact": "保护性涂层或合金选择有助于防止氧化并维持长期可靠性。",
        "table_row4_factor": "电气性能",
        "table_row4_consideration": "低接触电阻、高载流能力和稳定的介电性能至关重要。",
        "table_row4_impact": "工艺控制确保生产批次间电气特性的一致性。",
        "table_row5_factor": "气密性",
        "table_row5_consideration": "对于医疗、航空航天和传感器应用，金属化陶瓷可能需要气密密封。",
        "table_row5_impact": "钎焊和封装技术可实现抵御湿气和污染物的坚固密封。",
            
        "article_section5_title": "金属化陶瓷基板的应用",
        "application1_title": "功率模块与IGBT基板",
        "application1_description": "金属化陶瓷为工业和汽车系统中的高压、大电流器件提供电气隔离和高效散热。",
        "application2_title": "激光二极管与光电子封装",
        "application2_description": "薄膜金属化技术可实现精密的电极图案和可靠的键合，满足光子器件对热管理和电气连接的需求。",
        "application3_title": "射频与微波电路",
        "application3_description": "金属化陶瓷为通信模块、雷达系统和无线基础设施提供低损耗、高性能的高频表现。",
        "application4_title": "医疗设备与传感器",
        "application4_description": "气密密封的金属化陶瓷用于可植入电子设备、传感器和诊断设备，确保生物相容性和可靠性。",
            
        "technical_note": "<strong>专家洞见:</strong> 在集美材料，我们专注于根据特定应用需求优化金属化工艺，通过严格的测试和质量控制，在热性能、电气特性和长期可靠性之间取得最佳平衡。",
            
        "article_section6_title": "结论",
        "article_conclusion": "陶瓷金属化工艺是开发高性能电子设备的基础，它将技术陶瓷的优势与金属互连的功能性相结合。通过选择合适的金属化方法并优化工艺步骤，制造商能够为功率电子、光电子、射频电路和医疗应用实现可靠、高效且可扩展的解决方案。随着技术进步，对坚固耐用的金属化陶瓷基板的需求将持续增长，推动热管理、电气隔离和器件小型化领域的创新。",
            
        // 文章标签
        "article_tags": "标签:",
        "tag_metallization": "陶瓷金属化",
        "tag_dbc": "DBC技术",
        "tag_dpc": "DPC技术",
        "tag_reliability": "可靠性",
        "tag_thermal": "热管理",

        // 相关文章区
        "related_articles_title": "相关技术文章",
        "badge_dbc_technology": "DBC技术",
        "related_article1_title": "深度解析DBC基板技术",
        "related_article1_description": "探索直接覆铜陶瓷基板在功率电子和热管理中的优势与应用。",
        "badge_dpc_technology": "DPC技术",
        "related_article2_title": "DPC技术详解",
        "related_article2_description": "了解直接镀铜技术如何革新半导体和光电子的先进封装。",
        "badge_application_note": "应用笔记",
        "related_article3_title": "DPC围坝封装技术优势解析",
        "related_article3_description": "探索DPC封装围坝如何提升功率模块的可靠性与性能。",
        "btn_read_more": "阅读全文 →",

        // CTA区
        "article_cta_title": "需要金属化工艺专业支持？",
        "article_cta_description": "我们的技术团队专注于针对严苛应用的陶瓷金属化工艺。联系我们，获取工艺优化与可靠性测试服务。",
        "cta_feature1_title": "工艺咨询",
        "cta_feature1_desc": "关于金属化方法和工艺优化的专家指导",
        "cta_feature2_title": "可靠性测试",
        "cta_feature2_desc": "包括热循环、附着力及气密性在内的全面测试",
        "btn_contact_experts": "联系技术团队",

        // 页脚（风格统一）
        "footer_description": "集美材料——自2016年起，始终是热管理应用领域陶瓷金属化基板的可靠制造商。拥有ISO 14001:2015体系认证，具备全球化制造与服务能力。",
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
        "article_page_title": "セラミックメタライゼーション：プロセスと信頼性 | JIMEI セラミック基板",
        "article_meta_description": "DBCおよびDPC基板のためのセラミックメタライゼーションプロセス、技術、信頼性に関する考慮事項の包括的概要。Jimei Materialsの専門家による技術的洞察。",
        "article_meta_keywords": "セラミックメタライゼーション, DBCプロセス, DPC技術, 金属化セラミック基板, 熱管理, 電子パッケージング, パワーエレクトロニクス, 信頼性試験",
        "article_og_title": "セラミックメタライゼーション：プロセスと信頼性 | Jimei Materials",
        "article_og_description": "DBCおよびDPC基板のための工程ステップと信頼性に関する考慮事項を含む、セラミックの金属化方法に関する技術的概要。",
        "article_twitter_title": "セラミックメタライゼーション：プロセスと信頼性 | Jimei Materials",
        "article_twitter_description": "工程ステップと信頼性に関する考慮事項を含む、セラミックの金属化方法に関する技術的概要。",
        "skip_to_content": "メインコンテンツへスキップ",
        
        // Navigation (統一維持)
        "nav_home": "ホーム",
        "nav_products": "製品情報",
        "nav_dpc": "直接鍍金銅（DPC）基板",
        "nav_dbc": "直接接合銅（DBC）基板",
        "nav_bare": "未金属化セラミック基板",
        "nav_htcc": "HTCCセラミックパッケージング",
        "nav_all_products": "製品一覧",
        "nav_resources": "技術資料",
        "nav_about": "会社概要",
        "nav_contact": "お問い合わせ",
        "nav_request_quote": "見積もり依頼",
        
        // Breadcrumbs
        "breadcrumb_home": "ホーム",
        "breadcrumb_resources": "技術資料",
        "article_breadcrumb": "セラミックメタライゼーション",
        
        // Article Title Section
        "article_title": "セラミックメタライゼーションプロセス：技術的概要と信頼性",
        "article_description": "パワーエレクトロニクスアプリケーション向けの工程ステップと信頼性に関する考慮事項を含む、セラミックの金属化方法に関する技術的概要。",
        "article_published": "公開日:",
        "article_read_time": "読了時間:",
        
        // Article Navigation
        "article_previous": "前へ",
        "article_all_resources": "全ての技術資料",
        "article_next": "次へ",
        
        // Article Content
        "article_intro_paragraph1": "セラミックメタライゼーションは、パワーモジュール、センサー、オプトエレクトロニクス、医療機器などのアプリケーション向けに、セラミック基板上に導電性経路を統合することを可能にする、先進電子機器製造における重要なプロセスです。金属化セラミックは、アルミナ（Al₂O₃）や窒化アルミニウム（AlN）などの技術セラミックの固有の熱的、電気的、機械的利点と金属層の機能性を組み合わせ、過酷な環境における信頼性の高い相互接続、パッケージング、熱管理をサポートします。",
        
        "article_image_caption": "先進パッケージングアプリケーション向けセラミック基板上の直接鍍金銅（DPC）メタライゼーション",
        
        "article_section1_title": "セラミックメタライゼーションとは？",
        "article_section1_paragraph1": "セラミックメタライゼーションとは、電気的接点、回路トレース、またはボンディングパッドを作成するために、セラミック基板上に薄い金属膜またはパターンを適用することを指します。このプロセスは、直接接合銅（DBC）、直接鍍金銅（DPC）、およびその他の先進的なパッケージングソリューションに使用される基板を製造するために不可欠です。金属化セラミックは、堅牢な電気的性能と環境耐性が要求される高出力エレクトロニクス、RF/マイクロ波回路、LEDモジュール、気密封止パッケージに広く使用されています。",
        
        "article_section2_title": "セラミックの主要な金属化方法",
        "article_section2_paragraph1": "異なるアプリケーションは、固有の利点と考慮事項を持つ特定の金属化技術を必要とします:",
        
        "article_subsection1_title": "1. 厚膜メタライゼーション",
        "article_subsection1_paragraph1": "セラミック表面に金属ペースト（通常は銀、金、または白金系）をスクリーン印刷し、高温で焼成して金属を焼結し、密着性を達成します。この方法はコスト効率が高く、回路パターンや電極の大量生産に適しています。",
        
        "article_subsection2_title": "2. 薄膜メタライゼーション",
        "article_subsection2_paragraph1": "スパッタリングや蒸着などの真空堆積技術を用いて、セラミック上に金属（例：チタン、タングステン、ニッケル、金）の薄膜を堆積させます。薄膜プロセスは層厚とパターン解像度の精密な制御を提供し、マイクロエレクトロニクスや高周波アプリケーションに理想的です。",
        
        "article_subsection3_title": "3. 直接接合銅（DBC）",
        "article_subsection3_paragraph1": "銅箔が高温酸化と拡散を介してセラミック基板（通常Al₂O₃またはAlN）に直接接合されるプロセスです。DBC基板は優れた熱伝導性と高い電流容量を提供し、パワーモジュールやIGBTパッケージングに好まれます。",
        
        "article_subsection4_title": "4. 直接鍍金銅（DPC）",
        "article_subsection4_paragraph1": "フォトリソグラフィと電気めっきを使用して、セラミック表面に銅パターンを堆積させます。DPCは微細線解像度と多層構造を可能にし、半導体デバイスやレーザーダイオードの先進的なパッケージングをサポートします。",
        
        "article_subsection5_title": "5. 活性金属ろう付け（AMB）",
        "article_subsection5_paragraph1": "活性ろう付け合金（例：Ag-Cu-Ti）を使用して、高温で金属層をセラミックに接合します。AMBは、強固な金属-セラミック密着性が要求される気密封止および高信頼性アプリケーションに使用されます。",
        
        "article_section3_title": "セラミックメタライゼーションの工程ステップ",
        "process_step1_title": "表面準備",
        "process_step1_description": "セラミック基板を洗浄し、必要に応じて金属密着性を高めるために粗面化します。技術には超音波洗浄、プラズマ処理、化学エッチングなどが含まれます。",
        "process_step2_title": "金属堆積",
        "process_step2_description": "選択された金属化方法とアプリケーション要件に応じて、スクリーン印刷、スパッタリング、蒸着、または電気めっきを使用して金属層を堆積させます。",
        "process_step3_title": "パターニング",
        "process_step3_description": "フォトリソグラフィ、レーザーアブレーション、またはマスク印刷を使用して、基板上の回路トレース、ボンディングパッド、または電極形状を定義します。",
        "process_step4_title": "焼成/アニール",
        "process_step4_description": "厚膜プロセスの場合、金属化基板を高温で焼成して金属を焼結し、強固な密着性を達成します。薄膜およびめっき層は、結晶性と界面品質を改善するためにアニール処理を受けることがあります。",
        "process_step5_title": "後処理",
        "process_step5_description": "金属化セラミックを電子アセンブリに統合するために、はんだ付け、ワイヤボンディング、封止などの追加工程を実行します。",
        "process_step6_title": "検査・試験",
        "process_step6_description": "金属化基板は、密着性、パターン精度、電気的連続性について検査されます。信頼性試験には熱サイクル、湿度暴露、高電圧絶縁破壊評価などが含まれる場合があります。",
        
        "article_section4_title": "セラミックメタライゼーションにおける信頼性に関する考慮事項",
        "table_header_factor": "信頼性因子",
        "table_header_consideration": "重要な考慮事項",
        "table_header_impact": "性能への影響",
        "table_row1_factor": "密着強度",
        "table_row1_consideration": "金属とセラミックの間の結合は、熱サイクル、機械的応力、環境暴露に耐えなければなりません。",
        "table_row1_impact": "密着性が不十分だと、剥離、電気的故障、またはデバイス寿命の短縮を引き起こす可能性があります。",
        "table_row2_factor": "熱膨張の整合",
        "table_row2_consideration": "金属とセラミックの熱膨張係数の違いは、温度変化時に応力を誘発する可能性があります。",
        "table_row2_impact": "最適化された材料選択とプロセスにより、熱サイクル中のクラックや反りを最小限に抑えます。",
        "table_row3_factor": "耐食性",
        "table_row3_consideration": "金属化層はしばしば湿気、化学物質、または高電圧にさらされます。",
        "table_row3_impact": "保護コーティングまたは合金選択は、酸化を防止し、長期信頼性を維持するのに役立ちます。",
        "table_row4_factor": "電気的特性",
        "table_row4_consideration": "低接触抵抗、高電流容量、安定した誘電特性が不可欠です。",
        "table_row4_impact": "プロセス制御により、生産ロット全体で一貫した電気的特性が確保されます。",
        "table_row5_factor": "気密性",
        "table_row5_consideration": "医療、航空宇宙、センサーアプリケーションでは、金属化セラミックに気密封止が要求される場合があります。",
        "table_row5_impact": "ろう付けと封止技術により、湿気や汚染物質に対する堅牢なシールが達成されます。",
        
        "article_section5_title": "金属化セラミック基板のアプリケーション",
        "application1_title": "パワーモジュールおよびIGBT基板",
        "application1_description": "金属化セラミックは、産業用および自動車システムにおける高電圧・高電流デバイスの電気的絶縁と効率的な放熱を提供します。",
        "application2_title": "レーザーダイオードおよびオプトエレクトロニクスパッケージング",
        "application2_description": "薄膜メタライゼーションは、熱管理と電気的接続性を必要とするフォトニックデバイス向けの精密電極パターンと信頼性の高いボンディングを可能にします。",
        "application3_title": "RFおよびマイクロ波回路",
        "application3_description": "金属化セラミックは、通信モジュール、レーダーシステム、無線インフラ向けの低損失、高周波性能を提供します。",
        "application4_title": "医療機器およびセンサー",
        "application4_description": "気密封止された金属化セラミックは、インプラント可能な電子機器、センサー、診断装置に使用され、生体適合性と信頼性を確保します。",
        
        "technical_note": "<strong>専門家の洞察:</strong> Jimei Materialsでは、特定のアプリケーション要件に対して金属化プロセスを最適化することを専門としており、厳格な試験と品質管理を通じて熱性能、電気的特性、長期信頼性のバランスを取っています。",
        
        "article_section6_title": "結論",
        "article_conclusion": "セラミックメタライゼーションプロセスは、高性能電子デバイスの開発の基礎であり、技術セラミックの利点と金属相互接続の機能性を組み合わせています。適切な金属化方法を選択し、工程ステップを最適化することにより、製造業者はパワーエレクトロニクス、オプトエレクトロニクス、RF回路、医療アプリケーション向けの信頼性が高く効率的で拡張可能なソリューションを実現します。技術が進歩するにつれて、堅牢な金属化セラミック基板への需要は継続的に成長し、熱管理、電気的絶縁、デバイス小型化におけるイノベーションを推進します。",
        
        // Article Tags
        "article_tags": "タグ:",
        "tag_metallization": "セラミックメタライゼーション",
        "tag_dbc": "DBC技術",
        "tag_dpc": "DPC技術",
        "tag_reliability": "信頼性",
        "tag_thermal": "熱管理",

        // Related Articles Section
        "related_articles_title": "関連技術記事",
        "badge_dbc_technology": "DBC技術",
        "related_article1_title": "DBC基板の基礎と応用",
        "related_article1_description": "パワーエレクトロニクスおよび熱管理における直接接合銅（DBC）基板の利点と応用例を探ります。",
        "badge_dpc_technology": "DPC技術",
        "related_article2_title": "DPC技術の詳細解説",
        "related_article2_description": "直接鍍金銅（DPC）技術が半導体およびオプトエレクトロニクスの先進パッケージングに革新をもたらす方法を学びます。",
        "badge_application_note": "アプリケーションノート",
        "related_article3_title": "DPCエンキャプシュレーションダムの利点",
        "related_article3_description": "直接鍍金銅（DPC）エンキャプシュレーションダムがパワーモジュールの信頼性と性能をどのように向上させるかを発見します。",
        "btn_read_more": "続きを読む →",

        // CTA Section
        "article_cta_title": "金属化の専門知識が必要ですか？",
        "article_cta_description": "当社の技術チームは、過酷なアプリケーション向けのセラミックメタライゼーションプロセスを専門としています。プロセス最適化と信頼性試験についてはお問い合わせください。",
        "cta_feature1_title": "プロセス相談",
        "cta_feature1_desc": "金属化方法とプロセス最適化に関する専門家のガイダンス",
        "cta_feature2_title": "信頼性試験",
        "cta_feature2_desc": "熱サイクル、密着性、気密性を含む包括的な試験",
        "btn_contact_experts": "技術チームに連絡",

        // Footer (統一維持)
        "footer_description": "2016年創業以来、熱管理アプリケーション向けの高信頼性セラミックメタライゼーション基板を提供するリーディングメーカーです。ISO 14001:2015認証を取得し、グローバルな製造・供給体制を有しています。",
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
    "article_page_title": "세라믹 금속화 공정 및 신뢰성 | JIMEI 세라믹 기판",
    "article_meta_description": "DBC 및 DPC 기판을 위한 세라믹 금속화 공정, 기술 및 신뢰성 고려 사항에 대한 포괄적인 개요. Jimei Materials 전문가의 기술적 통찰력.",
    "article_meta_keywords": "세라믹 금속화, DBC 공정, DPC 기술, 금속화 세라믹 기판, 열 관리, 전자 패키징, 전력전자, 신뢰성 시험",
    "article_og_title": "세라믹 금속화: 공정 및 신뢰성 | Jimei Materials",
    "article_og_description": "세라믹에 대한 금속화 방법의 기술 개요. DBC 및 DPC 기판을 위한 공정 단계 및 신뢰성 고려 사항 포함.",
    "article_twitter_title": "세라믹 금속화: 공정 및 신뢰성 | Jimei Materials",
    "article_twitter_description": "세라믹에 대한 금속화 방법의 기술 개요. 공정 단계 및 신뢰성 고려 사항 포함.",
    "skip_to_content": "본문 내용으로 건너뛰기",
    
    // Navigation (일관성 유지)
    "nav_home": "홈",
    "nav_products": "제품",
    "nav_dpc": "DPC (Direct Plated Copper) 기판",
    "nav_dbc": "DBC (Direct Bonded Copper) 기판",
    "nav_bare": "비금속화 세라믹 기판",
    "nav_htcc": "HTCC 세라믹 패키징",
    "nav_all_products": "제품 전체보기",
    "nav_resources": "기술 자료",
    "nav_about": "회사소개",
    "nav_contact": "문의",
    "nav_request_quote": "견적 문의",
    
    // Breadcrumbs
    "breadcrumb_home": "홈",
    "breadcrumb_resources": "기술 자료",
    "article_breadcrumb": "세라믹 금속화",
    
    // Article Title Section
    "article_title": "세라믹 금속화 공정: 기술 개요 및 신뢰성",
    "article_description": "전력전자 애플리케이션을 위한 공정 단계 및 신뢰성 고려 사항을 포함한 세라믹 금속화 방법에 대한 기술 개요.",
    "article_published": "게시일:",
    "article_read_time": "예상 독서 시간:",
    
    // Article Navigation
    "article_previous": "이전",
    "article_all_resources": "모든 기술 자료",
    "article_next": "다음",
    
    // Article Content
    "article_intro_paragraph1": "세라믹 금속화는 고급 전자 제조의 핵심 공정으로, 파워 모듈, 센서, 광전자 및 의료 장치와 같은 애플리케이션을 위해 세라믹 기판에 도전성 경로를 통합할 수 있게 합니다. 금속화 세라믹은 알루미나(Al₂O₃) 및 질화알루미늄(AlN)과 같은 기술 세라믹의 본질적인 열적, 전기적, 기계적 장점을 금속층의 기능성과 결합하여 까다로운 환경에서 신뢰할 수 있는 상호 연결, 패키징 및 열 관리를 지원합니다.",
  
    "article_image_caption": "고급 패키징 애플리케이션을 위한 세라믹 기판의 직접 도금 동(DPC) 금속화",
  
    "article_section1_title": "세라믹 금속화란 무엇인가?",
    "article_section1_paragraph1": "세라믹 금속화는 전기적 접점, 회로 트레이스 또는 본딩 패드를 생성하기 위해 세라믹 기판에 얇은 금속 필름 또는 패턴을 적용하는 것을 의미합니다. 이 공정은 직접 접합 동(DBC), 직접 도금 동(DPC) 및 기타 고급 패키징 솔루션에 사용되는 기판 생산에 필수적입니다. 금속화 세라믹은 견고한 전기적 성능과 환경 내성이 요구되는 고출력 전자, RF/마이크로파 회로, LED 모듈 및 기밀 패키지에 널리 사용됩니다.",
    
    "article_section2_title": "세라믹용 주요 금속화 방법",
    "article_section2_paragraph1": "다양한 애플리케이션은 각각 고유한 장점과 고려 사항을 가진 특정 금속화 기술을 요구합니다:",
    
    "article_subsection1_title": "1. 두꺼운 필름(Thick Film) 금속화",
    "article_subsection1_paragraph1": "세라믹 표면에 금속 페이스트(일반적으로 은, 금 또는 백금 기반)의 스크린 인쇄를 사용하고, 고온에서 소성하여 금속을 소결하고 접착력을 달성합니다. 이 방법은 비용 효율적이며 회로 패턴 및 전극의 대량 생산에 적합합니다.",
    
    "article_subsection2_title": "2. 얇은 필름(Thin Film) 금속화",
    "article_subsection2_paragraph1": "스퍼터링 또는 증발과 같은 진공 증착 기술을 사용하여 세라믹에 얇은 금속층(예: 티타늄, 텅스텐, 니켈, 금)을 증착합니다. 얇은 필름 공정은 층 두께 및 패턴 해상도를 정밀하게 제어할 수 있어 마이크로전자 및 고주파 애플리케이션에 이상적입니다.",
    
    "article_subsection3_title": "3. 직접 접합 동(DBC)",
    "article_subsection3_paragraph1": "구리박을 고온 산화 및 확산을 통해 세라믹 기판(일반적으로 Al₂O₃ 또는 AlN)에 직접 접합하는 공정입니다. DBC 기판은 우수한 열전도성과 높은 전류 전달 능력을 제공하여 파워 모듈 및 IGBT 패키징에 선호됩니다.",
    
    "article_subsection4_title": "4. 직접 도금 동(DPC)",
    "article_subsection4_paragraph1": "포토리소그래피 및 전해 도금을 사용하여 세라믹 표면에 구리 패턴을 증착합니다. DPC는 미세 선 해상도 및 다층 구조를 가능하게 하여 반도체 장치 및 레이저 다이오드를 위한 고급 패키징을 지원합니다.",
    
    "article_subsection5_title": "5. 능동 금속 브레이징(AMB)",
    "article_subsection5_paragraph1": "능동 브레이징 합금(예: Ag-Cu-Ti)을 사용하여 고온에서 금속층을 세라믹에 접합합니다. AMB는 강력한 금속-세라믹 접착이 요구되는 기밀 밀봉 및 고신뢰성 애플리케이션에 사용됩니다.",
    
    "article_section3_title": "세라믹 금속화 공정 단계",
    "process_step1_title": "표면 준비",
    "process_step1_description": "세라믹 기판은 청소되고 필요한 경우 금속 접착력을 향상시키기 위해 거칠게 처리됩니다. 초음파 세척, 플라즈마 처리 및 화학적 에칭 등의 기술이 포함됩니다.",
    "process_step2_title": "금속 증착",
    "process_step2_description": "선택한 금속화 방법 및 애플리케이션 요구 사항에 따라 스크린 인쇄, 스퍼터링, 증발 또는 전해 도금을 사용하여 금속층이 적용됩니다.",
    "process_step3_title": "패터닝",
    "process_step3_description": "포토리소그래피, 레이저 어블레이션 또는 마스크 인쇄를 사용하여 기판에 회로 트레이스, 본딩 패드 또는 전극 형상을 정의합니다.",
    "process_step4_title": "소성/어닐링",
    "process_step4_description": "두꺼운 필름 공정의 경우, 금속화 기판을 고온에서 소성하여 금속을 소결하고 강력한 접착력을 달성합니다. 얇은 필름 및 도금층은 결정성 및 계면 품질을 개선하기 위해 어닐링을 거칠 수 있습니다.",
    "process_step5_title": "후가공",
    "process_step5_description": "납땜, 와이어 본딩 또는 캡슐레이션과 같은 추가 단계가 수행되어 금속화 세라믹을 전자 조립체에 통합합니다.",
    "process_step6_title": "검사 및 시험",
    "process_step6_description": "금속화 기판은 접착력, 패턴 정확도 및 전기적 연속성을 검사합니다. 신뢰성 시험에는 열 사이클링, 습도 노출 및 고전압 절연 내압 평가가 포함될 수 있습니다.",
    
    "article_section4_title": "세라믹 금속화의 신뢰성 고려 사항",
    "table_header_factor": "신뢰성 요소",
    "table_header_consideration": "핵심 고려 사항",
    "table_header_impact": "성능에 미치는 영향",
    "table_row1_factor": "접착 강도",
    "table_row1_consideration": "금속과 세라믹 사이의 접합은 열 사이클링, 기계적 응력 및 환경 노출을 견뎌야 합니다.",
    "table_row1_impact": "불량한 접착력은 박리, 전기적 고장 또는 장치 수명 단축으로 이어질 수 있습니다.",
    "table_row2_factor": "열팽창 정합",
    "table_row2_consideration": "금속과 세라믹 사이의 열팽창계수 차이는 온도 변화 중 응력을 유발할 수 있습니다.",
    "table_row2_impact": "최적화된 재료 선택 및 공정은 열 사이클링 중 균열 또는 뒤틀림을 최소화합니다.",
    "table_row3_factor": "내식성",
    "table_row3_consideration": "금속화층은 종종 습기, 화학 물질 또는 고전압에 노출됩니다.",
    "table_row3_impact": "보호 코팅 또는 합금 선택은 산화를 방지하고 장기 신뢰성을 유지하는 데 도움이 됩니다.",
    "table_row4_factor": "전기적 성능",
    "table_row4_consideration": "낮은 접촉 저항, 높은 전류 전달 능력 및 안정적인 절연 특성이 필수적입니다.",
    "table_row4_impact": "공정 제어는 생산 배치 전반에 걸쳐 일관된 전기적 특성을 보장합니다.",
    "table_row5_factor": "기밀성",
    "table_row5_consideration": "의료, 항공우주 및 센서 애플리케이션의 경우, 금속화 세라믹은 기밀 밀봉이 필요할 수 있습니다.",
    "table_row5_impact": "브레이징 및 캡슐레이션 기술은 습기 및 오염물질에 대한 견고한 밀봉을 달성합니다.",
    
    "article_section5_title": "금속화 세라믹 기판의 응용 분야",
    "application1_title": "파워 모듈 및 IGBT 기판",
    "application1_description": "금속화 세라믹은 산업 및 자동차 시스템의 고전압, 고전류 장치를 위한 전기적 절연 및 효율적인 열 방산을 제공합니다.",
    "application2_title": "레이저 다이오드 및 광전자 패키징",
    "application2_description": "얇은 필름 금속화는 열 관리 및 전기적 연결성이 필요한 광자 장치를 위한 정밀한 전극 패턴과 신뢰할 수 있는 본딩을 가능하게 합니다.",
    "application3_title": "RF 및 마이크로파 회로",
    "application3_description": "금속화 세라믹은 통신 모듈, 레이더 시스템 및 무선 인프라를 위한 저손실, 고주파 성능을 제공합니다.",
    "application4_title": "의료 장치 및 센서",
    "application4_description": "기밀 밀봉된 금속화 세라믹은 이식형 전자 장치, 센서 및 진단 장비에 사용되어 생체 적합성과 신뢰성을 보장합니다.",
    
    "technical_note": "<strong>전문가 통찰력:</strong> Jimei Materials에서는 엄격한 시험과 품질 관리를 통해 열 성능, 전기적 특성 및 장기 신뢰성의 균형을 맞추어 특정 애플리케이션 요구 사항에 맞는 금속화 공정 최적화를 전문으로 합니다.",
    
    "article_section6_title": "결론",
    "article_conclusion": "세라믹 금속화 공정은 고성능 전자 장치 개발의 기초가 되며, 기술 세라믹의 장점을 금속 상호 연결의 기능성과 결합합니다. 적절한 금속화 방법을 선택하고 공정 단계를 최적화함으로써 제조업체는 전력전자, 광전자, RF 회로 및 의료 애플리케이션을 위한 신뢰할 수 있고 효율적이며 확장 가능한 솔루션을 달성합니다. 기술이 발전함에 따라 견고한 금속화 세라믹 기판에 대한 수요는 계속 증가하여 열 관리, 전기적 절연 및 장치 소형화 분야의 혁신을 주도할 것입니다.",
    
    // Article Tags
    "article_tags": "태그:",
    "tag_metallization": "세라믹 금속화",
    "tag_dbc": "DBC 기술",
    "tag_dpc": "DPC 기술",
    "tag_reliability": "신뢰성",
    "tag_thermal": "열 관리",

    //Related Articles Section
    "related_articles_title": "관련 기술 기사",
    "badge_dbc_technology": "DBC 기술",
    "related_article1_title": "DBC 기판의 이해",
    "related_article1_description": "전력전자 및 열 관리 분야에서 직접 접합 동(DBC) 기판의 장점과 응용 분야를 탐구합니다.",
    "badge_dpc_technology": "DPC 기술",
    "related_article2_title": "DPC 기술 상세 설명",
    "related_article2_description": "직접 도금 동(DPC) 기술이 반도체 및 광전자 분야의 고급 패키징을 어떻게 혁신하고 있는지 알아보세요.",
    "badge_application_note": "애플리케이션 노트",
    "related_article3_title": "DPC 캡슐레이션 댐의 장점",
    "related_article3_description": "직접 도금 동(DPC) 캡슐레이션 댐이 파워 모듈의 신뢰성과 성능을 어떻게 향상시키는지 알아보세요.",
    "btn_read_more": "더 읽기 →",

    //CTA Section
    "article_cta_title": "금속화 전문성이 필요하십니까?",
    "article_cta_description": "당사 기술 팀은 까다로운 애플리케이션을 위한 세라믹 금속화 공정을 전문으로 합니다. 공정 최적화 및 신뢰성 시험을 위해 문의하십시오.",
    "cta_feature1_title": "공정 상담",
    "cta_feature1_desc": "금속화 방법 및 공정 최적화에 대한 전문가 지도",
    "cta_feature2_title": "신뢰성 시험",
    "cta_feature2_desc": "열 사이클링, 접착력 및 기밀성을 포함한 포괄적인 시험",
    "btn_contact_experts": "기술 팀에 문의",

    // Footer (일관성 유지)
    "footer_description": "2016년 설립 이래 열 관리 애플리케이션을 위한 세라믹 금속화 기판의 선도적 제조사. ISO 14001:2015 인증을 보유한 글로벌 제조 능력.",
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
    "article_page_title": "Keramikmetallisierung: Prozesse & Zuverlässigkeit | JIMEI Keramiksubstrate",
    "article_meta_description": "Umfassender Überblick über Keramikmetallisierungsprozesse, Techniken und Zuverlässigkeitsaspekte für DBC- und DPC-Substrate. Technische Einblicke von Jimei Materials Experten.",
    "article_meta_keywords": "Keramikmetallisierung, DBC Prozess, DPC Technologie, metallisierte Keramiksubstrate, Wärmemanagement, Elektronik-Packaging, Leistungselektronik, Zuverlässigkeitstests",
    "article_og_title": "Keramikmetallisierung: Prozesse & Zuverlässigkeit | Jimei Materials",
    "article_og_description": "Technischer Überblick über Metallisierungsmethoden für Keramik, inklusive Prozessschritte und Zuverlässigkeitsaspekte für DBC- und DPC-Substrate.",
    "article_twitter_title": "Keramikmetallisierung: Prozesse & Zuverlässigkeit | Jimei Materials",
    "article_twitter_description": "Technischer Überblick über Metallisierungsmethoden für Keramik, inklusive Prozessschritte und Zuverlässigkeitsaspekte.",
    "skip_to_content": "Zum Hauptinhalt springen",
    
    // Navigation
    "nav_home": "Startseite",
    "nav_products": "Produkte",
    "nav_dpc": "Direct Plated Copper (DPC)",
    "nav_dbc": "Direct Bonded Copper (DBC)",
    "nav_bare": "Reinkeramik-Substrate",
    "nav_htcc": "HTCC-Keramikgehäuse",
    "nav_all_products": "Alle Produkte",
    "nav_resources": "Wissenswertes",
    "nav_about": "Über uns",
    "nav_contact": "Kontakt",
    "nav_request_quote": "Angebot anfordern",
    
    // Breadcrumbs
    "breadcrumb_home": "Startseite",
    "breadcrumb_resources": "Technische Ressourcen",
    "article_breadcrumb": "Keramikmetallisierung",
    
    // Article Title Section
    "article_title": "Keramikmetallisierungsprozesse: Technischer Überblick & Zuverlässigkeit",
    "article_description": "Ein technischer Überblick über Metallisierungsmethoden für Keramik, einschließlich Prozessschritte und Zuverlässigkeitsaspekte für Leistungselektronik-Anwendungen.",
    "article_published": "Veröffentlicht:",
    "article_read_time": "Lesezeit:",
    
    // Article Navigation
    "article_previous": "Zurück",
    "article_all_resources": "Alle Ressourcen",
    "article_next": "Weiter",
    
    // Article Content
    "article_intro_paragraph1": "Keramikmetallisierung ist ein kritischer Prozess in der fortschrittlichen Elektronikfertigung, der die Integration leitfähiger Pfade auf Keramiksubstraten für Anwendungen wie Leistungsmodule, Sensoren, Optoelektronik und Medizingeräte ermöglicht. Metallisierte Keramiken kombinieren die inhärenten thermischen, elektrischen und mechanischen Vorteile technischer Keramiken – wie Aluminiumoxid (Al₂O₃) und Aluminiumnitrid (AlN) – mit der Funktionalität von Metallschichten und unterstützen zuverlässige Verbindung, Packaging und Wärmemanagement in anspruchsvollen Umgebungen.",
  
    "article_image_caption": "Direct Plated Copper (DPC) Metallisierung auf Keramiksubstrat für fortschrittliche Packaging-Anwendungen",
  
    "article_section1_title": "Was ist Keramikmetallisierung?",
    "article_section1_paragraph1": "Keramikmetallisierung bezieht sich auf die Applikation dünner Metallschichten oder Muster auf Keramiksubstrate, um elektrische Kontakte, Leiterbahnen oder Bondpads zu erzeugen. Dieser Prozess ist wesentlich für die Herstellung von Substraten, die in Direct Bonded Copper (DBC), Direct Plated Copper (DPC) und anderen fortschrittlichen Packaging-Lösungen verwendet werden. Metallisierte Keramiken werden weit verbreitet in Hochleistungselektronik, HF/Mikrowellenschaltungen, LED-Modulen und hermetischen Packages eingesetzt, wo robuste elektrische Performance und Umgebungsbeständigkeit erforderlich sind.",
    
    "article_section2_title": "Hauptmetallisierungsmethoden für Keramik",
    "article_section2_paragraph1": "Verschiedene Anwendungen erfordern spezifische Metallisierungstechniken, jede mit einzigartigen Vorteilen und Überlegungen:",
    
    "article_subsection1_title": "1. Dickschicht-Metallisierung",
    "article_subsection1_paragraph1": "Verwendet Siebdruck von Metallpasten (typischerweise Silber-, Gold- oder Platin-basiert) auf die Keramikoberfläche, gefolgt von Hochtemperatur-Feuern, um das Metall zu sintern und Haftung zu erreichen. Diese Methode ist kosteneffizient und geeignet für Massenproduktion von Schaltungsmustern und Elektroden.",
    
    "article_subsection2_title": "2. Dünnschicht-Metallisierung",
    "article_subsection2_paragraph1": "Beinhaltet Vakuumabscheidungstechniken wie Sputtern oder Verdampfung, um dünne Schichten von Metallen (z.B. Titan, Wolfram, Nickel, Gold) auf Keramiken abzuscheiden. Dünnschichtprozesse bieten präzise Kontrolle über Schichtdicke und Musterauflösung, ideal für Mikroelektronik und Hochfrequenzanwendungen.",
    
    "article_subsection3_title": "3. Direct Bonded Copper (DBC)",
    "article_subsection3_paragraph1": "Ein Prozess, bei dem Kupferfolie direkt auf Keramiksubstrate (üblicherweise Al₂O₃ oder AlN) durch Hochtemperatur-Oxidation und Diffusion gebondet wird. DBC-Substrate bieten ausgezeichnete Wärmeleitfähigkeit und hohe Stromtragfähigkeit, was sie für Leistungsmodule und IGBT-Packaging bevorzugt.",
    
    "article_subsection4_title": "4. Direct Plated Copper (DPC)",
    "article_subsection4_paragraph1": "Verwendet Fotolithografie und Galvanik, um Kupfermuster auf Keramikoberflächen abzuscheiden. DPC ermöglicht Feinleiterauflösung und Mehrschichtstrukturen und unterstützt fortschrittliches Packaging für Halbleiterbauteile und Laserdioden.",
    
    "article_subsection5_title": "5. Active Metal Brazing (AMB)",
    "article_subsection5_paragraph1": "Verwendet aktive Lötlegierungen (z.B. Ag-Cu-Ti), um Metallschichten bei erhöhten Temperaturen mit Keramiken zu verbinden. AMB wird für hermetische Versiegelung und Hochzuverlässigkeitsanwendungen eingesetzt, wo starke Metall-Keramik-Haftung erforderlich ist.",
    
    "article_section3_title": "Keramikmetallisierungs-Prozessschritte",
    "process_step1_title": "Oberflächenvorbereitung",
    "process_step1_description": "Das Keramiksubstrat wird gereinigt und falls notwendig aufgeraut, um die Metallhaftung zu verbessern. Techniken beinhalten Ultraschallreinigung, Plasma-Behandlung und chemisches Ätzen.",
    "process_step2_title": "Metallabscheidung",
    "process_step2_description": "Metallschichten werden mittels Siebdruck, Sputtern, Verdampfung oder Galvanik aufgebracht, abhängig von der gewählten Metallisierungsmethode und den Anwendungsanforderungen.",
    "process_step3_title": "Strukturierung",
    "process_step3_description": "Fotolithografie, Laserablation oder Maskendruck werden verwendet, um Leiterbahnen, Bondpads oder Elektrodengeometrien auf dem Substrat zu definieren.",
    "process_step4_title": "Feuern/Glühen",
    "process_step4_description": "Bei Dickschichtprozessen wird das metallisierte Substrat bei hohen Temperaturen gefeuert, um das Metall zu sintern und starke Haftung zu erreichen. Dünnschicht- und galvanisierte Schichten können Glühprozesse durchlaufen, um Kristallinität und Grenzflächenqualität zu verbessern.",
    "process_step5_title": "Nachbearbeitung",
    "process_step5_description": "Zusätzliche Schritte wie Löten, Drahtbonden oder Einkapselung werden durchgeführt, um die metallisierte Keramik in elektronische Baugruppen zu integrieren.",
    "process_step6_title": "Inspektion & Prüfung",
    "process_step6_description": "Metallisierte Substrate werden auf Haftung, Musterpräzision und elektrische Kontinuität inspiziert. Zuverlässigkeitstests können Temperaturwechsel, Feuchtigkeitsbelastung und Hochspannungsdurchschlagstests umfassen.",
    
    "article_section4_title": "Zuverlässigkeitsaspekte in der Keramikmetallisierung",
    "table_header_factor": "Zuverlässigkeitsfaktor",
    "table_header_consideration": "Wichtige Überlegung",
    "table_header_impact": "Auswirkung auf Performance",
    "table_row1_factor": "Haftfestigkeit",
    "table_row1_consideration": "Die Verbindung zwischen Metall und Keramik muss Temperaturwechsel, mechanischer Belastung und Umgebungseinflüssen standhalten.",
    "table_row1_impact": "Schlechte Haftung kann zu Delamination, elektrischem Ausfall oder reduzierter Gerätelebensdauer führen.",
    "table_row2_factor": "Thermische Ausdehnungsanpassung",
    "table_row2_consideration": "Unterschiede in den thermischen Ausdehnungskoeffizienten zwischen Metall und Keramik können bei Temperaturänderungen Spannungen induzieren.",
    "table_row2_impact": "Optimierte Materialauswahl und Prozesse minimieren Rissbildung oder Verzug während Temperaturwechseln.",
    "table_row3_factor": "Korrosionsbeständigkeit",
    "table_row3_consideration": "Metallisierte Schichten sind oft Feuchtigkeit, Chemikalien oder Hochspannung ausgesetzt.",
    "table_row3_impact": "Schutzbeschichtungen oder Legierungsauswahl helfen, Oxidation zu verhindern und langfristige Zuverlässigkeit aufrechtzuerhalten.",
    "table_row4_factor": "Elektrische Performance",
    "table_row4_consideration": "Niederiger Kontaktwiderstand, hohe Stromtragfähigkeit und stabile dielektrische Eigenschaften sind essentiell.",
    "table_row4_impact": "Prozesskontrolle gewährleistet konsistente elektrische Eigenschaften über Produktionschargen.",
    "table_row5_factor": "Hermetizität",
    "table_row5_consideration": "Für medizinische, Luft- und Raumfahrt- und Sensoranwendungen können metallisierte Keramiken hermetische Versiegelung erfordern.",
    "table_row5_impact": "Löt- und Einkapselungstechniken erreichen robuste Versiegelungen gegen Feuchtigkeit und Kontaminationen.",
    
    "article_section5_title": "Anwendungen metallisierter Keramiksubstrate",
    "application1_title": "Leistungsmodule & IGBT-Substrate",
    "application1_description": "Metallisierte Keramiken bieten elektrische Isolation und effiziente Wärmeableitung für Hochspannungs-, Hochstrom-Bauteile in industriellen und Automotive-Systemen.",
    "application2_title": "Laser-Dioden- & Optoelektronik-Packaging",
    "application2_description": "Dünnschicht-Metallisierung ermöglicht präzise Elektrodenmuster und zuverlässige Verbindung für photonische Bauteile, die Wärmemanagement und elektrische Konnektivität erfordern.",
    "application3_title": "HF- & Mikrowellenschaltungen",
    "application3_description": "Metallisierte Keramiken bieten niederfrequente, hochfrequente Performance für Kommunikationsmodule, Radarsysteme und drahtlose Infrastruktur.",
    "application4_title": "Medizingeräte & Sensoren",
    "application4_description": "Hermetisch versiegelte metallisierte Keramiken werden in implantierbarer Elektronik, Sensoren und Diagnosegeräten eingesetzt, um Biokompatibilität und Zuverlässigkeit sicherzustellen.",
    
    "technical_note": "<strong>Experten-Einblick:</strong> Bei Jimei Materials sind wir spezialisiert auf die Optimierung von Metallisierungsprozessen für spezifische Anwendungsanforderungen, balancieren thermische Performance, elektrische Eigenschaften und langfristige Zuverlässigkeit durch rigorose Tests und Qualitätskontrolle.",
    
    "article_section6_title": "Fazit",
    "article_conclusion": "Keramikmetallisierungsprozesse sind grundlegend für die Entwicklung hochleistungsfähiger elektronischer Geräte, kombinieren die Vorteile technischer Keramiken mit der Funktionalität von Metallverbindungen. Durch Auswahl geeigneter Metallisierungsmethoden und Optimierung von Prozessschritten erreichen Hersteller zuverlässige, effiziente und skalierbare Lösungen für Leistungselektronik, Optoelektronik, HF-Schaltungen und medizinische Anwendungen. Mit fortschreitender Technologie wird die Nachfrage nach robusten metallisierten Keramiksubstraten weiter wachsen und Innovation in Wärmemanagement, elektrischer Isolation und Geräteminiaturisierung vorantreiben.",
    
    // Article Tags
    "article_tags": "Tags:",
    "tag_metallization": "Keramikmetallisierung",
    "tag_dbc": "DBC-Technologie",
    "tag_dpc": "DPC-Technologie",
    "tag_reliability": "Zuverlässigkeit",
    "tag_thermal": "Wärmemanagement",

    // Related Articles Section
    "related_articles_title": "Ähnliche technische Artikel",
    "badge_dbc_technology": "DBC-Technologie",
    "related_article1_title": "DBC-Substrate verstehen",
    "related_article1_description": "Erkunden Sie die Vorteile und Anwendungen von Direct Bonded Copper-Substraten in der Leistungselektronik und im Wärmemanagement.",
    "badge_dpc_technology": "DPC-Technologie",
    "related_article2_title": "DPC-Technologie erklärt",
    "related_article2_description": "Erfahren Sie, wie die Direct Plated Copper-Technologie das Advanced Packaging für Halbleiter und Optoelektronik revolutioniert.",
    "badge_application_note": "Applikationshinweis",
    "related_article3_title": "Vorteile von DPC-Umschließungsrändern (Encapsulation Dams)",
    "related_article3_description": "Entdecken Sie, wie DPC-Umschließungsränder die Zuverlässigkeit und Performance von Leistungsmodulen verbessern.",
    "btn_read_more": "Weiterlesen →",

    // CTA Section
    "article_cta_title": "Benötigen Sie Metallisierungsexpertise?",
    "article_cta_description": "Unser technisches Team ist spezialisiert auf Keramikmetallisierungsprozesse für anspruchsvolle Anwendungen. Kontaktieren Sie uns für Prozessoptimierung und Zuverlässigkeitstests.",
    "cta_feature1_title": "Prozessberatung",
    "cta_feature1_desc": "Expertenberatung zu Metallisierungsmethoden und Prozessoptimierung",
    "cta_feature2_title": "Zuverlässigkeitstests",
    "cta_feature2_desc": "Umfassende Tests inklusive Temperaturwechsel, Haftung und Hermetizität",
    "btn_contact_experts": "Technisches Team kontaktieren",

    // Footer
    "footer_description": "Seit 2016 führender Hersteller von Keramikmetallisierungssubstraten für Wärmemanagement-Anwendungen. ISO 14001:2015 zertifiziert mit globalen Fertigungskapazitäten.",
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