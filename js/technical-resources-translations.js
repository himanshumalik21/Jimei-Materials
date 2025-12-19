// technical-resources-translations.js - Internationalization for Technical Resources Page
// Author: Jimei Materials Development Team
// Version: 1.0.0
// Last Updated: 2024

(function() {
    'use strict';

    // Translations object
    const translations = {
        en: {
            // Meta & SEO
            "tr_page_title": "Technical Resources & Industry Insights | JIMEI Ceramic Substrates",
            "tr_meta_description": "Technical resources, white papers, application notes, and industry insights for DBC & DPC ceramic substrates. Expert guidance on thermal management, power electronics, and ceramic metallization.",
            "tr_meta_keywords": "ceramic substrate technical papers, DBC application notes, DPC design guides, thermal management resources, power electronics whitepapers, ceramic metallization technical resources, semiconductor packaging guides",
            "tr_og_title": "Ceramic Substrate Products Catalog | DBC & DPC Solutions | Jimei Materials",
            "tr_og_description": "Complete range of high-performance ceramic metallization substrates including DBC, DPC, and bare ceramic substrates for power electronics and thermal management applications.",
            "tr_twitter_title": "Ceramic Substrate Products Catalog | DBC & DPC Solutions | Jimei Materials",
            "tr_twitter_description": "Complete range of high-performance ceramic metallization substrates including DBC, DPC, and bare ceramic substrates for power electronics and thermal management applications.",

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
            "breadcrumb_resources": "Technical Resources",

            // Page Header
            "resources_main_title": "Technical Resources & Industry Insights",
            "resources_subtitle": "Access technical papers, application notes, and design guides for ceramic substrate technology",

            // Featured Articles Section
            "featured_articles_title": "Featured Articles",
            "featured_articles_description": "In-depth technical insights and application guides",
            
            // Article 1
            "article1_title": "Understanding DBC Substrates",
            "article1_description": "Explore the advantages and applications of Direct Bonded Copper substrates in power electronics and thermal management.",
            "article1_read_time": "8 min read",
            
            // Article 2
            "article2_title": "DPC Technology Explained",
            "article2_description": "Learn how Direct Plated Copper technology is revolutionizing advanced packaging for semiconductors and optoelectronics.",
            "article2_read_time": "10 min read",
            
            // Article 3
            "article3_title": "Bare Ceramic Substrates: Applications",
            "article3_description": "Discover the versatility of bare ceramic substrates in laser diodes, IGBT modules, and thermoelectric coolers.",
            "article3_read_time": "6 min read",
            
            // Article 4
            "article4_title": "Ceramic Metallization Processes",
            "article4_description": "A technical overview of metallization methods for ceramics, including process steps and reliability considerations.",
            "article4_read_time": "12 min read",
            
            // Article 5
            "article5_title": "DPC Encapsulation Dam Advantages",
            "article5_description": "Discover how Direct Plated Copper (DPC) encapsulation dams enhance power module reliability and performance.",
            "article5_read_time": "7 min read",
            
            // Article 6
            "article6_title": "High-Performance Thermoelectric Modules",
            "article6_description": "Explore the design and applications of high-performance thermoelectric modules using advanced DPC substrates.",
            "article6_read_time": "9 min read",

            // Badges
            "badge_dbc_technology": "DBC Technology",
            "badge_dpc_technology": "DPC Technology",
            "badge_design_guide": "Design Guide",
            "badge_application_note": "Application Note",

            // Buttons
            "btn_read_article": "Read Article",
            "btn_contact_engineering": "Contact Engineering",

            // Partner Resources Section
            "partner_resources_title": "Industry Partners & Resources",
            "partner_resources_description": "Connect with industry organizations and technical associations",
            "partner_ieee_name": "IEEE",
            "partner_ieee_description": "Institute of Electrical and Electronics Engineers",
            "partner_inemi_name": "iNEMI",
            "partner_inemi_description": "International Electronics Manufacturing Initiative",
            "partner_semi_name": "SEMI",
            "partner_semi_description": "Global Industry Association for Electronics Manufacturing",
            "partner_psma_name": "PSMA",
            "partner_psma_description": "Power Sources Manufacturers Association",
            "partner_visit_website": "Visit Website",

            // CTA Section
            "cta_title": "Need Technical Support?",
            "cta_description": "Our engineering team is ready to assist with your specific technical requirements and application challenges.",
            "cta_feature1_title": "Application Engineering",
            "cta_feature1_desc": "Technical consultation and design review",
            "cta_feature2_title": "Failure Analysis",
            "cta_feature2_desc": "Root cause analysis and reliability testing",

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
            // 元标签 - 修正了键名（应为resources_*），内容突出“技术资源”与“行业洞察”
            "tr_page_title": "技术资源与行业洞察 | JIMEI 陶瓷基板",
            "tr_meta_description": "获取DBC与DPC陶瓷基板的技术资料、白皮书、应用笔记及行业洞察。关于热管理、功率电子及陶瓷金属化的专家指南与深度解析。",
            "tr_meta_keywords": "陶瓷基板技术资料, DBC应用指南, DPC设计白皮书, 热管理资源, 功率电子技术论文, 陶瓷金属化工艺, 半导体封装指南",
            "tr_og_title": "技术资源中心 | 陶瓷基板白皮书与应用指南 | 集美材料",
            "tr_og_description": "集美材料技术资源中心，提供DBC、DPC及裸陶瓷基板的深度技术论文、设计指南、应用笔记与行业趋势分析。",
            "tr_twitter_title": "技术资源中心 | 陶瓷基板白皮书与应用指南 | 集美材料",
            "tr_twitter_description": "集美材料技术资源中心，提供DBC、DPC及裸陶瓷基板的深度技术论文、设计指南、应用笔记与行业趋势分析。",

            // 导航 (与产品页保持一致，确保全站统一)
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
            "nav_blog": "技术博客",

            // 面包屑导航
            "breadcrumb_home": "首页",
            "breadcrumb_resources": "技术资源",

            // 页面标题区 - 强调“知识库”属性
            "resources_main_title": "技术资源与行业洞察",
            "resources_subtitle": "探索陶瓷基板技术的深度论文、应用案例与设计指南",

            // 精选文章区 - 标题更显技术深度与价值
            "featured_articles_title": "精选技术文章",
            "featured_articles_description": "深入的技术解析与应用实践指南",
            
            // 文章 1
            "article1_title": "深度解析：DBC基板技术及其在高功率应用中的优势",
            "article1_description": "深入探讨直接覆铜陶瓷基板的工艺原理、核心性能指标，及其在电动汽车电驱、工业变频器等大功率场景下的热管理与可靠性设计要点。",
            "article1_read_time": "阅读约8分钟",
            
            // 文章 2
            "article2_title": "DPC技术白皮书：面向先进封装的精密陶瓷线路板",
            "article2_description": "详细解读直接镀铜技术的工艺流程、关键控制参数，及其如何为半导体、光电子器件的先进封装（如Flip Chip, CSP）提供高密度互连与优异高频性能。",
            "article2_read_time": "阅读约10分钟",
            
            // 文章 3
            "article3_title": "裸陶瓷基片的选型与应用全景图",
            "article3_description": "系统阐述氧化铝、氮化铝、氮化硅等裸陶瓷基片的特性对比，及其在激光器热沉、IGBT衬底、热电制冷模块等不同应用场景中的选型逻辑与设计考量。",
            "article3_read_time": "阅读约6分钟",
            
            // 文章 4
            "article4_title": "陶瓷金属化工艺全解析：从薄膜沉积到厚膜印刷",
            "article4_description": "全面对比溅射、蒸发、电镀、丝网印刷等不同金属化工艺的技术特点、适用场景、结合力机理及长期可靠性评估方法，为工艺选型提供依据。",
            "article4_read_time": "阅读约12分钟",
            
            // 文章 5
            "article5_title": "DPC围坝封装技术：提升功率模块可靠性的关键",
            "article5_description": "分析DPC工艺中集成封装围坝（Encapsulation Dam）的设计优势，如何有效控制塑封料流、减小应力、提升功率模块在高温高湿环境下的使用寿命。",
            "article5_read_time": "阅读约7分钟",
            
            // 文章 6
            "article6_title": "高性能热电制冷模块设计与DPC基板应用",
            "article6_description": "探讨基于高热导率DPC基板的热电模块设计方法，如何优化热流路径、降低接触电阻，从而在光通信、生物医疗等领域实现更高的制冷效率与温度稳定性。",
            "article6_read_time": "阅读约9分钟",

            // 文章标签 - 明确分类
            "badge_dbc_technology": "DBC技术",
            "badge_dpc_technology": "DPC技术",
            "badge_design_guide": "设计指南",
            "badge_application_note": "应用笔记",

            // 按钮
            "btn_read_article": "阅读全文",
            "btn_contact_engineering": "咨询工程师",

            // 行业合作伙伴区 - 使用官方或通用中文译名
            "partner_resources_title": "行业组织与标准机构",
            "partner_resources_description": "链接全球电子制造与功率电子领域的重要行业组织",
            "partner_ieee_name": "电气电子工程师学会",
            "partner_ieee_description": "全球最大的专业技术组织之一",
            "partner_inemi_name": "国际电子制造倡议组织",
            "partner_inemi_description": "致力于推动电子制造业供应链路线图",
            "partner_semi_name": "国际半导体产业协会",
            "partner_semi_description": "全球半导体与电子制造供应链的行业协会",
            "partner_psma_name": "电源制造商协会",
            "partner_psma_description": "专注于电源技术与供应链的全球组织",
            "partner_visit_website": "访问官网",

            // CTA区 - 强调专家支持
            "cta_title": "需要深度技术支持？",
            "cta_description": "我们的应用工程师团队可为您提供针对性的技术咨询、设计方案评审与失效分析服务，助力解决产品开发中的关键挑战。",
            "cta_feature1_title": "应用工程支持",
            "cta_feature1_desc": "提供系统级设计评审与工艺选型咨询",
            "cta_feature2_title": "失效分析与可靠性",
            "cta_feature2_desc": "提供根本原因分析、可靠性测试与工艺改进建议",

            // 页脚 (风格统一)
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
            // Meta & SEO
            "tr_page_title": "技術資料・業界インサイト | JIMEI セラミック基板",
            "tr_meta_description": "DBC・DPCセラミック基板に関する技術資料、技術白書、アプリケーションノート、業界インサイトを提供。熱管理、パワーエレクトロニクス、セラミックメタライゼーションに関する専門家によるガイダンス。",
            "tr_meta_keywords": "セラミック基板 技術論文, DBC アプリケーションノート, DPC 設計ガイド, 熱管理 技術資料, パワーエレクトロニクス 白書, セラミックメタライゼーション 技術リソース, 半導体パッケージング ガイド",
            // 注意: og_title/description, twitter_title/description の内容が製品ページと重複しているため、リソースページ用に修正が必要です。
            "tr_og_title": "技術資料・業界インサイト | JIMEI セラミック基板",
            "tr_og_description": "DBC・DPCセラミック基板の技術資料、設計ガイド、アプリケーション情報を提供。パワーエレクトロニクス設計をサポート。",
            "tr_twitter_title": "技術資料・業界インサイト | JIMEI セラミック基板",
            "tr_twitter_description": "DBC・DPCセラミック基板の技術資料、設計ガイド、アプリケーション情報を提供。パワーエレクトロニクス設計をサポート。",

            // Navigation (前ページと統一)
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
            "breadcrumb_resources": "技術資料",

            // Page Header
            "resources_main_title": "技術資料・業界インサイト",
            "resources_subtitle": "セラミック基板技術に関する技術論文、アプリケーションノート、設計ガイドにアクセスできます",

            // Featured Articles Section
            "featured_articles_title": "注目の技術記事",
            "featured_articles_description": "詳細な技術的洞察とアプリケーションガイド",
            
            // Article 1
            "article1_title": "DBC基板の基礎と応用",
            "article1_description": "パワーエレクトロニクスおよび熱管理アプリケーションにおける直接接合銅（DBC）基板の優位性と具体的な適用例を解説します。",
            "article1_read_time": "読了時間 約8分",
            
            // Article 2
            "article2_title": "DPC技術の詳細解説",
            "article2_description": "半導体および光エレクトロニクスの先進パッケージングに革新をもたらす直接鍍金銅（DPC）技術の原理とプロセスについて解説します。",
            "article2_read_time": "読了時間 約10分",
            
            // Article 3
            "article3_title": "未金属化セラミック基板の多様な用途",
            "article3_description": "レーザーダイオード、IGBTモジュール、熱電冷却モジュールなどにおける、未金属化セラミック基板の多様な応用例を紹介します。",
            "article3_read_time": "読了時間 約6分",
            
            // Article 4
            "article4_title": "セラミックメタライゼーション技術の概要",
            "article4_description": "セラミックへの金属化方法に関する技術的概観。プロセス工程、信頼性評価の考慮点などを説明します。",
            "article4_read_time": "読了時間 約12分",
            
            // Article 5
            "article5_title": "DPCエンキャプシュレーションダムの利点",
            "article5_description": "直接鍍金銅（DPC）エンキャプシュレーションダムが、パワーモジュールの信頼性と性能をどのように向上させるかを解説します。",
            "article5_read_time": "読了時間 約7分",
            
            // Article 6
            "article6_title": "高性能熱電モジュールの設計",
            "article6_description": "先進的なDPC基板を用いた高性能熱電モジュールの設計手法と、その様々なアプリケーションについて探求します。",
            "article6_read_time": "読了時間 約9分",

            // Badges
            "badge_dbc_technology": "DBC技術",
            "badge_dpc_technology": "DPC技術",
            "badge_design_guide": "設計ガイド",
            "badge_application_note": "アプリケーションノート",

            // Buttons
            "btn_read_article": "記事を読む",
            "btn_contact_engineering": "エンジニアに相談",

            // Partner Resources Section
            "partner_resources_title": "業界団体・技術協会",
            "partner_resources_description": "関連する業界団体および技術協会へのリンク",
            "partner_ieee_name": "IEEE",
            "partner_ieee_description": "電気電子技術者学会",
            "partner_inemi_name": "iNEMI",
            "partner_inemi_description": "国際電子機器製造イニシアチブ",
            "partner_semi_name": "SEMI",
            "partner_semi_description": "電子機器製造の国際業界団体",
            "partner_psma_name": "PSMA",
            "partner_psma_description": "電源メーカー協会",
            "partner_visit_website": "ウェブサイトへ",

            // CTA Section
            "cta_title": "技術サポートが必要ですか？",
            "cta_description": "当社のエンジニアリングチームが、お客様の特定の技術要件やアプリケーション課題の解決をサポートいたします。",
            "cta_feature1_title": "アプリケーションエンジニアリング",
            "cta_feature1_desc": "技術相談および設計レビュー",
            "cta_feature2_title": "故障解析",
            "cta_feature2_desc": "根本原因解析および信頼性試験",

            // Footer (前ページと統一)
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
            "tr_page_title": "기술 자료 및 산업 인사이트 | JIMEI 세라믹 기판",
            "tr_meta_description": "DBC 및 DPC 세라믹 기판에 관한 기술 자료, 백서, 애플리케이션 노트 및 산업 동향 분석. 열 관리, 전력전자, 세라믹 금속화 분야의 전문 가이드.",
            "tr_meta_keywords": "세라믹 기판 기술 논문, DBC 애플리케이션 노트, DPC 설계 가이드, 열 관리 기술 자료, 전력전자 백서, 세라믹 금속화 기술 리소스, 반도체 패키징 가이드",
            "tr_og_title": "세라믹 기판 기술 자료 | DBC & DPC 솔루션 | Jimei Materials",
            "tr_og_description": "전력전자 및 열 관리 애플리케이션을 위한 DBC, DPC, 비금속화 세라믹 기판 관련 포괄적인 기술 자료 및 산업 인사이트.",
            "tr_twitter_title": "세라믹 기판 기술 자료 | DBC & DPC 솔루션 | Jimei Materials",
            "tr_twitter_description": "전력전자 및 열 관리 애플리케이션을 위한 DBC, DPC, 비금속화 세라믹 기판 관련 포괄적인 기술 자료 및 산업 인사이트.",

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
            "breadcrumb_resources": "기술 자료",

            // Page Header
            "resources_main_title": "기술 자료 및 산업 인사이트",
            "resources_subtitle": "세라믹 기판 기술에 관한 기술 논문, 애플리케이션 노트 및 설계 가이드에 접속하십시오.",

            // Featured Articles Section
            "featured_articles_title": "주요 기술 자료",
            "featured_articles_description": "심층적인 기술 분석 및 응용 가이드",
            
            // Article 1
            "article1_title": "DBC 기판의 이해",
            "article1_description": "전력전자 및 열 관리 분야에서 Direct Bonded Copper 기판의 장점과 적용 사례를 탐구합니다.",
            "article1_read_time": "읽는 데 8분",
            
            // Article 2
            "article2_title": "DPC 기술 상세 설명",
            "article2_description": "Direct Plated Copper 기술이 반도체 및 광전자 분야의 고급 패키징을 어떻게 혁신하고 있는지 알아봅니다.",
            "article2_read_time": "읽는 데 10분",
            
            // Article 3
            "article3_title": "비금속화 세라믹 기판: 적용 분야",
            "article3_description": "레이저 다이오드, IGBT 모듈 및 열전 냉각기에서 비금속화 세라믹 기판의 다양성을 발견하십시오.",
            "article3_read_time": "읽는 데 6분",
            
            // Article 4
            "article4_title": "세라믹 금속화 공정",
            "article4_description": "세라믹에 대한 금속화 방법에 대한 기술 개요로, 공정 단계 및 신뢰성 고려 사항을 포함합니다.",
            "article4_read_time": "읽는 데 12분",
            
            // Article 5
            "article5_title": "DPC 캡슐레이션 댐의 장점",
            "article5_description": "Direct Plated Copper (DPC) 캡슐레이션 댐이 파워 모듈의 신뢰성과 성능을 어떻게 향상시키는지 알아봅니다.",
            "article5_read_time": "읽는 데 7분",
            
            // Article 6
            "article6_title": "고성능 열전 모듈",
            "article6_description": "고급 DPC 기판을 사용한 고성능 열전 모듈의 설계 및 응용 분야를 탐구합니다.",
            "article6_read_time": "읽는 데 9분",

            // Badges
            "badge_dbc_technology": "DBC 기술",
            "badge_dpc_technology": "DPC 기술",
            "badge_design_guide": "설계 가이드",
            "badge_application_note": "애플리케이션 노트",

            // Buttons
            "btn_read_article": "기사 읽기",
            "btn_contact_engineering": "기술 팀 문의",

            // Partner Resources Section
            "partner_resources_title": "산업 협력사 및 기술 협회",
            "partner_resources_description": "산업 기관 및 기술 협회와 연결하십시오",
            "partner_ieee_name": "IEEE",
            "partner_ieee_description": "전기 전자 기술자 협회",
            "partner_inemi_name": "iNEMI",
            "partner_inemi_description": "국제 전자 제조 이니셔티브",
            "partner_semi_name": "SEMI",
            "partner_semi_description": "글로벌 전자 제조 산업 협회",
            "partner_psma_name": "PSMA",
            "partner_psma_description": "파워 소스 제조업체 협회",
            "partner_visit_website": "웹사이트 방문",

            // CTA Section
            "cta_title": "기술 지원이 필요하십니까?",
            "cta_description": "당사 엔지니어링 팀은 귀하의 특정 기술 요구 사항과 애플리케이션 과제를 지원할 준비가 되어 있습니다.",
            "cta_feature1_title": "애플리케이션 엔지니어링",
            "cta_feature1_desc": "기술 상담 및 설계 검토",
            "cta_feature2_title": "고장 분석",
            "cta_feature2_desc": "근본 원인 분석 및 신뢰성 테스트",

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
            "tr_page_title": "Technische Ressourcen & Branchenwissen | JIMEI Keramiksubstrate",
            "tr_meta_description": "Technische Ressourcen, Whitepapers, Applikationshinweise und Branchenwissen zu DBC- & DPC-Keramiksubstraten. Expertenwissen zu Wärmemanagement, Leistungselektronik und Keramikmetallisierung.",
            "tr_meta_keywords": "Technische Papiere Keramiksubstrate, DBC Applikationshinweise, DPC Designleitfäden, Ressourcen Wärmemanagement, Whitepapers Leistungselektronik, Technische Ressourcen Keramikmetallisierung, Leitfäden Halbleiter-Verpackung",
            "tr_og_title": "Technische Ressourcen: Keramiksubstrate | Jimei Materials",
            "tr_og_description": "Umfassende technische Ressourcen zu Keramikmetallisierungssubstraten: Whitepapers, Applikationshinweise und Designleitfäden für Leistungselektronik.",
            "tr_twitter_title": "Technische Ressourcen: Keramiksubstrate | Jimei Materials",
            "tr_twitter_description": "Umfassende technische Ressourcen zu Keramikmetallisierungssubstraten: Whitepapers, Applikationshinweise und Designleitfäden für Leistungselektronik.",

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
            "breadcrumb_resources": "Technische Ressourcen",

            // Page Header
            "resources_main_title": "Technische Ressourcen & Branchenwissen",
            "resources_subtitle": "Zugang zu technischen Papieren, Applikationshinweisen und Designleitfäden für Keramiksubstrat-Technologie",

            // Featured Articles Section
            "featured_articles_title": "Ausgewählte Fachartikel",
            "featured_articles_description": "Tiefgehende technische Einblicke und Anwendungsleitfäden",
            
            // Article 1
            "article1_title": "DBC-Substrate verstehen",
            "article1_description": "Erkunden Sie die Vorteile und Anwendungen von Direct Bonded Copper-Substraten in der Leistungselektronik und im Wärmemanagement.",
            "article1_read_time": "8 Min. Lesezeit",
            
            // Article 2
            "article2_title": "DPC-Technologie erklärt",
            "article2_description": "Erfahren Sie, wie die Direct Plated Copper-Technologie das Advanced Packaging für Halbleiter und Optoelektronik revolutioniert.",
            "article2_read_time": "10 Min. Lesezeit",
            
            // Article 3
            "article3_title": "Reinkeramik-Substrate: Anwendungen",
            "article3_description": "Entdecken Sie die Vielseitigkeit von Reinkeramik-Substraten in Laserdioden, IGBT-Modulen und thermoelektrischen Kühlern.",
            "article3_read_time": "6 Min. Lesezeit",
            
            // Article 4
            "article4_title": "Keramikmetallisierungsprozesse",
            "article4_description": "Ein technischer Überblick über Metallisierungsmethoden für Keramik, inklusive Prozessschritte und Zuverlässigkeitsaspekte.",
            "article4_read_time": "12 Min. Lesezeit",
            
            // Article 5
            "article5_title": "Vorteile von DPC-Umschließungsrändern (Encapsulation Dams)",
            "article5_description": "Entdecken Sie, wie DPC-Umschließungsränder die Zuverlässigkeit und Performance von Leistungsmodulen verbessern.",
            "article5_read_time": "7 Min. Lesezeit",
            
            // Article 6
            "article6_title": "Hochleistungs-thermoelektrische Module",
            "article6_description": "Erkunden Sie Design und Anwendungen von Hochleistungs-thermoelektrischen Modulen mit fortschrittlichen DPC-Substraten.",
            "article6_read_time": "9 Min. Lesezeit",

            // Badges
            "badge_dbc_technology": "DBC-Technologie",
            "badge_dpc_technology": "DPC-Technologie",
            "badge_design_guide": "Designleitfaden",
            "badge_application_note": "Applikationshinweis",

            // Buttons
            "btn_read_article": "Artikel lesen",
            "btn_contact_engineering": "Engineering kontaktieren",

            // Partner Resources Section
            "partner_resources_title": "Branchenpartner & Ressourcen",
            "partner_resources_description": "Vernetzung mit Branchenorganisationen und technischen Verbänden",
            "partner_ieee_name": "IEEE",
            "partner_ieee_description": "Institute of Electrical and Electronics Engineers",
            "partner_inemi_name": "iNEMI",
            "partner_inemi_description": "International Electronics Manufacturing Initiative",
            "partner_semi_name": "SEMI",
            "partner_semi_description": "Globaler Industrieverband für Elektronikfertigung",
            "partner_psma_name": "PSMA",
            "partner_psma_description": "Power Sources Manufacturers Association",
            "partner_visit_website": "Zur Website",

            // CTA Section
            "cta_title": "Benötigen Sie technischen Support?",
            "cta_description": "Unser Ingenieurteam unterstützt Sie bei Ihren spezifischen technischen Anforderungen und Applikationsherausforderungen.",
            "cta_feature1_title": "Applikationsengineering",
            "cta_feature1_desc": "Technische Beratung und Design-Review",
            "cta_feature2_title": "Fehleranalyse",
            "cta_feature2_desc": "Root-Cause-Analyse und Zuverlässigkeitstests",

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