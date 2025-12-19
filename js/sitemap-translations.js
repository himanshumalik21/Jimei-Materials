(function() {
    'use strict';

    // Translations object
    const translations = {
        en: {
            // Page meta
            'sitemap_page_title': 'Sitemap | Jimei Materials - Ceramic Substrate Manufacturer',
            'sitemap_meta_description': 'Complete sitemap of Jimei Materials website. Find all our ceramic substrate products, technical resources, and company information in one organized page.',

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
            
            // Content
            'sitemap_main_title': 'Website Sitemap',
            'sitemap_subtitle': 'Complete navigation of all pages on our website',
            'breadcrumb_sitemap': 'Sitemap',
            
            // Update info
            'sitemap_update_info': 'This page provides a complete list of all pages on our website. For search engines, you can access our <a href="./sitemap.xml" class="fw-bold">XML sitemap</a>.',
            'sitemap_last_updated': 'Sitemap last updated: December 19, 2025',
            
            // Categories
            'sitemap_category_main': 'Main Pages',
            'sitemap_category_products': 'Product Pages',
            'sitemap_category_resources': 'Technical Resources',
            'sitemap_category_company': 'Company Information',
            'sitemap_category_legal': 'Legal Pages',
            
            // Home page
            'sitemap_home': 'Home',
            'sitemap_home_desc': 'Welcome page with company overview and featured products',
            'sitemap_last_updated_label': 'Last updated: December 19, 2025',
            
            // Product pages
            'sitemap_all_products': 'All Products',
            'sitemap_all_products_desc': 'Complete catalog of ceramic substrate products',
            'sitemap_dpc': 'DPC Ceramic Substrate',
            'sitemap_dpc_desc': 'Direct Plated Copper ceramic substrate products',
            'sitemap_dbc': 'DBC Ceramic Substrate',
            'sitemap_dbc_desc': 'Direct Bonded Copper ceramic substrate products',
            'sitemap_bare': 'Bare Ceramic Substrates',
            'sitemap_bare_desc': 'Alumina and aluminum nitride ceramic substrates',
            
            // Technical resources
            'sitemap_technical_resources': 'Technical Resources',
            'sitemap_technical_resources_desc': 'Datasheets, application notes, and technical guides',
            'sitemap_understanding_dbc': 'Understanding DBC Substrates',
            'sitemap_understanding_dbc_desc': 'Technical guide to Direct Bonded Copper substrates',
            'sitemap_dpc_technology': 'DPC Technology Explained',
            'sitemap_dpc_technology_desc': 'Technical guide to Direct Plated Copper technology',
            'sitemap_metallization': 'Ceramic Metallization Processes',
            'sitemap_metallization_desc': 'Guide to ceramic metallization and bonding techniques',
            'sitemap_bare_explained': 'Bare Ceramic Substrates Explained',
            'sitemap_bare_explained_desc': 'Technical guide to bare ceramic substrates',
            'sitemap_dpc_dam': 'DPC Encapsulation Dam',
            'sitemap_dpc_dam_desc': 'Information about DPC encapsulation dam technology',
            'sitemap_dpc_tec': 'DPC Ceramic Metallization TEC/TEG',
            'sitemap_dpc_tec_desc': 'DPC substrates for thermoelectric cooler/generator applications',
            
            // Company pages
            'sitemap_about': 'About Us',
            'sitemap_about_desc': 'Company overview, history, and manufacturing capabilities',
            'sitemap_contact': 'Contact Us',
            'sitemap_contact_desc': 'Contact information, form, and location details',
            
            // Legal pages
            'sitemap_privacy': 'Privacy Policy',
            'sitemap_privacy_desc': 'How we collect, use, and protect your personal information',
            'sitemap_terms': 'Terms of Service',
            'sitemap_terms_desc': 'Legal terms governing use of our website and services',
            'sitemap_sitemap': 'Sitemap',
            'sitemap_sitemap_desc': 'Complete list of all pages on our website',
            
            // XML sitemap section
            'sitemap_xml_title': 'XML Sitemap for Search Engines',
            'sitemap_xml_description': 'Search engines can access our complete XML sitemap at the following URL:',
            'btn_view_xml_sitemap': 'View XML Sitemap',
            
            // Search section
            'sitemap_search_title': 'Can\'t Find What You\'re Looking For?',
            'sitemap_search_description': 'Use our contact form to get in touch with our team for specific inquiries or technical questions.',
            'btn_contact_for_help': 'Contact for Help',

            //Footer
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
            // 页面元数据
        "sitemap_page_title": "网站地图 | 吉美材料 - 陶瓷基板制造商",
        "sitemap_meta_description": "吉美材料网站完整导航地图。一览我们所有的陶瓷基板产品、技术资源和公司信息。",

        // Navigation - 微调以更符合中文网站导航习惯
                    "nav_home": "首页",
                    "nav_products": "产品中心",
                    "nav_dpc": "直接镀铜陶瓷基板",
                    "nav_dbc": "直接覆铜陶瓷基板",
                    "nav_bare": "裸陶瓷基片",
                    "nav_all_products": "全部产品",
                    "nav_resources": "技术资源",
                    "nav_about": "关于吉美",
                    "nav_contact": "联系我们",
                    "nav_request_quote": "在线询价",
                    "nav_blog": "技术博客",
        
        // 内容标题
        "sitemap_main_title": "网站导航地图",
        "sitemap_subtitle": "网站所有页面的完整导航",
        "breadcrumb_sitemap": "网站地图",
        
        // 更新信息
        "sitemap_update_info": "本页面提供网站上所有页面的完整列表。搜索引擎可访问我们的<a href=\"./sitemap.xml\" class=\"fw-bold\">XML网站地图</a>。",
        "sitemap_last_updated": "网站地图最后更新: 2025年12月19日",
        
        // 分类标题
        "sitemap_category_main": "主要页面",
        "sitemap_category_products": "产品页面",
        "sitemap_category_resources": "技术资源",
        "sitemap_category_company": "公司信息",
        "sitemap_category_legal": "法律页面",
        
        // 首页
        "sitemap_home": "首页",
        "sitemap_home_desc": "欢迎页面，包含公司概况与特色产品",
        "sitemap_last_updated_label": "最后更新: 2025年12月19日",
        
        // 产品页面
        "sitemap_all_products": "全部产品",
        "sitemap_all_products_desc": "陶瓷基板产品完整目录",
        "sitemap_dpc": "DPC陶瓷基板",
        "sitemap_dpc_desc": "直接镀铜陶瓷基板产品",
        "sitemap_dbc": "DBC陶瓷基板",
        "sitemap_dbc_desc": "直接覆铜陶瓷基板产品",
        "sitemap_bare": "裸陶瓷基板",
        "sitemap_bare_desc": "氧化铝与氮化铝陶瓷基板",
        
        // 技术资源
        "sitemap_technical_resources": "技术资源中心",
        "sitemap_technical_resources_desc": "数据手册、应用笔记与技术指南",
        "sitemap_understanding_dbc": "深度解析DBC基板",
        "sitemap_understanding_dbc_desc": "直接覆铜陶瓷基板技术指南",
        "sitemap_dpc_technology": "DPC技术详解",
        "sitemap_dpc_technology_desc": "直接镀铜技术详解",
        "sitemap_metallization": "陶瓷金属化工艺全解析",
        "sitemap_metallization_desc": "陶瓷金属化与键合技术指南",
        "sitemap_bare_explained": "裸陶瓷基板详解",
        "sitemap_bare_explained_desc": "裸陶瓷基板技术指南",
        "sitemap_dpc_dam": "DPC围坝封装技术",
        "sitemap_dpc_dam_desc": "DPC封装围坝技术介绍",
        "sitemap_dpc_tec": "DPC陶瓷金属化TEC/TEG应用",
        "sitemap_dpc_tec_desc": "用于热电制冷器/发电机应用的DPC基板",
        
        // 公司页面
        "sitemap_about": "关于我们",
        "sitemap_about_desc": "公司概况、发展历程与制造能力",
        "sitemap_contact": "联系我们",
        "sitemap_contact_desc": "联系信息、在线表单与地址详情",
        
        // 法律页面
        "sitemap_privacy": "隐私政策",
        "sitemap_privacy_desc": "我们如何收集、使用和保护您的个人信息",
        "sitemap_terms": "使用条款",
        "sitemap_terms_desc": "规范网站与服务使用的法律条款",
        "sitemap_sitemap": "网站地图",
        "sitemap_sitemap_desc": "网站上所有页面的完整列表",
        
        // XML网站地图部分
        "sitemap_xml_title": "供搜索引擎使用的XML网站地图",
        "sitemap_xml_description": "搜索引擎可通过以下URL访问我们的完整XML网站地图:",
        "btn_view_xml_sitemap": "查看XML网站地图",
        
        // 搜索帮助部分
        "sitemap_search_title": "找不到您需要的内容？",
        "sitemap_search_description": "如有特定咨询或技术问题，请使用联系表单与我们团队联系。",
        "btn_contact_for_help": "联系获取帮助",

        // 页脚
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
            // Page meta
        'sitemap_page_title': 'サイトマップ | Jimei Materials - セラミック基板メーカー',
        'sitemap_meta_description': 'Jimei Materialsウェブサイトの完全なサイトマップ。セラミック基板製品、技術資料、会社情報を整理されたページでご覧いただけます。',
        
        // Navigation
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


        // Content
        'sitemap_main_title': 'ウェブサイトサイトマップ',
        'sitemap_subtitle': '当ウェブサイトの全ページの完全なナビゲーション',
        'breadcrumb_sitemap': 'サイトマップ',
        
        // Update info
        'sitemap_update_info': 'このページは、当ウェブサイトの全ページの完全な一覧を提供します。検索エンジン向けには、<a href="./sitemap.xml" class="fw-bold">XMLサイトマップ</a>をご利用いただけます。',
        'sitemap_last_updated': 'サイトマップ最終更新日: 2025年12月19日',
        
        // Categories
        'sitemap_category_main': '主要ページ',
        'sitemap_category_products': '製品ページ',
        'sitemap_category_resources': '技術資料',
        'sitemap_category_company': '会社情報',
        'sitemap_category_legal': '法的文書',
        
        // Home page
        'sitemap_home': 'ホーム',
        'sitemap_home_desc': '会社概要と注目製品を掲載したウェルカムページ',
        'sitemap_last_updated_label': '最終更新日: 2025年12月19日',
        
        // Product pages
        'sitemap_all_products': '製品一覧',
        'sitemap_all_products_desc': 'セラミック基板製品の完全なカタログ',
        'sitemap_dpc': 'DPCセラミック基板',
        'sitemap_dpc_desc': '直接鍍金銅（DPC）セラミック基板製品',
        'sitemap_dbc': 'DBCセラミック基板',
        'sitemap_dbc_desc': '直接接合銅（DBC）セラミック基板製品',
        'sitemap_bare': '未金属化セラミック基板',
        'sitemap_bare_desc': 'アルミナおよび窒化アルミニウムセラミック基板',
        
        // Technical resources
        'sitemap_technical_resources': '技術資料',
        'sitemap_technical_resources_desc': 'データシート、アプリケーションノート、技術ガイド',
        'sitemap_understanding_dbc': 'DBC基板の理解',
        'sitemap_understanding_dbc_desc': '直接接合銅（DBC）基板の技術ガイド',
        'sitemap_dpc_technology': 'DPC技術の詳細解説',
        'sitemap_dpc_technology_desc': '直接鍍金銅（DPC）技術の技術ガイド',
        'sitemap_metallization': 'セラミックメタライゼーション技術の概要',
        'sitemap_metallization_desc': 'セラミック金属化および接合技術のガイド',
        'sitemap_bare_explained': '未金属化セラミック基板の解説',
        'sitemap_bare_explained_desc': '未金属化セラミック基板の技術ガイド',
        'sitemap_dpc_dam': 'DPCエンキャプシュレーションダム',
        'sitemap_dpc_dam_desc': 'DPCエンキャプシュレーションダム技術に関する情報',
        'sitemap_dpc_tec': '熱電モジュール向けDPCセラミックメタライゼーション',
        'sitemap_dpc_tec_desc': '熱電冷却・発電モジュール（TEC/TEG）アプリケーション向けDPC基板',
        
        // Company pages
        'sitemap_about': '会社概要',
        'sitemap_about_desc': '会社概要、沿革、製造能力',
        'sitemap_contact': 'お問い合わせ',
        'sitemap_contact_desc': '連絡先情報、フォーム、所在地詳細',
        
        // Legal pages
        'sitemap_privacy': 'プライバシーポリシー',
        'sitemap_privacy_desc': '個人情報の収集、使用、保護に関する方針',
        'sitemap_terms': '利用規約',
        'sitemap_terms_desc': '当ウェブサイトおよびサービスの利用に関する法的条件',
        'sitemap_sitemap': 'サイトマップ',
        'sitemap_sitemap_desc': '当ウェブサイトの全ページの完全な一覧',
        
        // XML sitemap section
        'sitemap_xml_title': '検索エンジン向けXMLサイトマップ',
        'sitemap_xml_description': '検索エンジンは以下のURLから完全なXMLサイトマップにアクセスできます:',
        'btn_view_xml_sitemap': 'XMLサイトマップを表示',
        
        // Search section
        'sitemap_search_title': 'お探しの情報が見つかりませんか？',
        'sitemap_search_description': '特定のお問い合わせや技術的な質問については、お問い合わせフォームから当チームにご連絡ください。',
        'btn_contact_for_help': 'ヘルプのために連絡',

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
            // Page meta
    'sitemap_page_title': '사이트맵 | Jimei Materials - 세라믹 기판 제조사',
    'sitemap_meta_description': 'Jimei Materials 웹사이트의 완전한 사이트맵입니다. 모든 세라믹 기판 제품, 기술 자료 및 회사 정보를 체계적으로 확인하십시오.',

    // Navigation
                "nav_home": "홈",
                "nav_products": "제품",
                "nav_dpc": "DPC (Direct Plated Copper) 기판",
                "nav_dbc": "DBC (Direct Bonded Copper) 기판",
                "nav_bare": "비금속화 세라믹 기판", // 'Bare'는 '무처리'보다 '비금속화'가 기술적
                "nav_all_products": "제품 전체보기",
                "nav_resources": "기술 자료",
                "nav_about": "회사소개",
                "nav_contact": "문의",
                "nav_request_quote": "견적 문의",
                "nav_blog": "기술 블로그",
    
    // Content
    'sitemap_main_title': '웹사이트 사이트맵',
    'sitemap_subtitle': '당사 웹사이트의 모든 페이지를 완전히 탐색하십시오',
    'breadcrumb_sitemap': '사이트맵',
    
    // Update info
    'sitemap_update_info': '이 페이지는 당사 웹사이트의 모든 페이지 목록을 제공합니다. 검색 엔진을 위한 <a href="./sitemap.xml" class="fw-bold">XML 사이트맵</a>에 접속할 수 있습니다.',
    'sitemap_last_updated': '사이트맵 최종 업데이트: 2025년 12월 19일',
    
    // Categories
    'sitemap_category_main': '주요 페이지',
    'sitemap_category_products': '제품 페이지',
    'sitemap_category_resources': '기술 자료',
    'sitemap_category_company': '회사 정보',
    'sitemap_category_legal': '법적 페이지',
    
    // Home page
    'sitemap_home': '홈',
    'sitemap_home_desc': '회사 개요 및 주요 제품이 소개된 환영 페이지',
    'sitemap_last_updated_label': '최종 업데이트: 2025년 12월 19일',
    
    // Product pages
    'sitemap_all_products': '모든 제품',
    'sitemap_all_products_desc': '세라믹 기판 제품의 완전한 카탈로그',
    'sitemap_dpc': 'DPC 세라믹 기판',
    'sitemap_dpc_desc': '직접 도금 동 세라믹 기판 제품',
    'sitemap_dbc': 'DBC 세라믹 기판',
    'sitemap_dbc_desc': '직접 접합 동 세라믹 기판 제품',
    'sitemap_bare': '비금속화 세라믹 기판',
    'sitemap_bare_desc': '알루미나 및 질화알루미늄 세라믹 기판',
    
    // Technical resources
    'sitemap_technical_resources': '기술 자료',
    'sitemap_technical_resources_desc': '데이터시트, 애플리케이션 노트 및 기술 가이드',
    'sitemap_understanding_dbc': 'DBC 기판 이해하기',
    'sitemap_understanding_dbc_desc': '직접 접합 동(DBC) 기판에 대한 기술 가이드',
    'sitemap_dpc_technology': 'DPC 기술 상세 설명',
    'sitemap_dpc_technology_desc': '직접 도금 동(DPC) 기술에 대한 기술 가이드',
    'sitemap_metallization': '세라믹 금속화 공정',
    'sitemap_metallization_desc': '세라믹 금속화 및 접합 기술 가이드',
    'sitemap_bare_explained': '비금속화 세라믹 기판 설명',
    'sitemap_bare_explained_desc': '비금속화 세라믹 기판에 대한 기술 가이드',
    'sitemap_dpc_dam': 'DPC 캡슐레이션 댐',
    'sitemap_dpc_dam_desc': 'DPC 캡슐레이션 댐 기술 정보',
    'sitemap_dpc_tec': 'DPC 세라믹 금속화 TEC/TEG',
    'sitemap_dpc_tec_desc': '열전 냉각기/발전기 애플리케이션을 위한 DPC 기판',
    
    // Company pages
    'sitemap_about': '회사소개',
    'sitemap_about_desc': '회사 개요, 역사 및 제조 역량',
    'sitemap_contact': '문의하기',
    'sitemap_contact_desc': '연락처 정보, 양식 및 위치 세부정보',
    
    // Legal pages
    'sitemap_privacy': '개인정보처리방침',
    'sitemap_privacy_desc': '당사가 귀하의 개인정보를 어떻게 수집, 사용 및 보호하는지에 대한 정보',
    'sitemap_terms': '이용약관',
    'sitemap_terms_desc': '당사 웹사이트 및 서비스 사용을 규율하는 법적 약관',
    'sitemap_sitemap': '사이트맵',
    'sitemap_sitemap_desc': '당사 웹사이트의 모든 페이지 목록',
    
    // XML sitemap section
    'sitemap_xml_title': '검색 엔진용 XML 사이트맵',
    'sitemap_xml_description': '검색 엔진은 다음 URL에서 당사의 완전한 XML 사이트맵에 접속할 수 있습니다:',
    'btn_view_xml_sitemap': 'XML 사이트맵 보기',
    
    // Search section
    'sitemap_search_title': '원하는 내용을 찾을 수 없으신가요?',
    'sitemap_search_description': '특정 문의사항이나 기술적 질문이 있으시면 연락 양식을 사용하여 당사 팀에 연락하십시오.',
    'btn_contact_for_help': '도움 요청하기',

    //Footer (일관성 유지)
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
            // Page meta
    'sitemap_page_title': 'Sitemap | Jimei Materials - Hersteller von Keramiksubstraten',
    'sitemap_meta_description': 'Vollständige Sitemap der Jimei Materials Website. Finden Sie alle unsere Keramiksubstrat-Produkte, technischen Ressourcen und Unternehmensinformationen auf einer organisierten Seite.',
    
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

    // Content
    'sitemap_main_title': 'Website-Sitemap',
    'sitemap_subtitle': 'Vollständige Navigation aller Seiten auf unserer Website',
    'breadcrumb_sitemap': 'Sitemap',
    
    // Update info
    'sitemap_update_info': 'Diese Seite bietet eine vollständige Liste aller Seiten auf unserer Website. Für Suchmaschinen können Sie auf unsere <a href="./sitemap.xml" class="fw-bold">XML-Sitemap</a> zugreifen.',
    'sitemap_last_updated': 'Sitemap zuletzt aktualisiert: 19. Dezember 2025',
    
    // Categories
    'sitemap_category_main': 'Hauptseiten',
    'sitemap_category_products': 'Produktseiten',
    'sitemap_category_resources': 'Technische Ressourcen',
    'sitemap_category_company': 'Unternehmensinformationen',
    'sitemap_category_legal': 'Rechtliche Seiten',
    
    // Home page
    'sitemap_home': 'Startseite',
    'sitemap_home_desc': 'Willkommensseite mit Unternehmensüberblick und ausgewählten Produkten',
    'sitemap_last_updated_label': 'Zuletzt aktualisiert: 19. Dezember 2025',
    
    // Product pages
    'sitemap_all_products': 'Alle Produkte',
    'sitemap_all_products_desc': 'Vollständiger Katalog der Keramiksubstrat-Produkte',
    'sitemap_dpc': 'DPC-Keramiksubstrat',
    'sitemap_dpc_desc': 'Direct Plated Copper Keramiksubstrat-Produkte',
    'sitemap_dbc': 'DBC-Keramiksubstrat',
    'sitemap_dbc_desc': 'Direct Bonded Copper Keramiksubstrat-Produkte',
    'sitemap_bare': 'Reinkeramik-Substrate',
    'sitemap_bare_desc': 'Aluminiumoxid- und Aluminiumnitrid-Keramiksubstrate',
    
    // Technical resources
    'sitemap_technical_resources': 'Technische Ressourcen',
    'sitemap_technical_resources_desc': 'Datenblätter, Applikationshinweise und technische Leitfäden',
    'sitemap_understanding_dbc': 'DBC-Substrate verstehen',
    'sitemap_understanding_dbc_desc': 'Technischer Leitfaden zu Direct Bonded Copper Substraten',
    'sitemap_dpc_technology': 'DPC-Technologie erklärt',
    'sitemap_dpc_technology_desc': 'Technischer Leitfaden zu Direct Plated Copper Technologie',
    'sitemap_metallization': 'Keramikmetallisierungsprozesse',
    'sitemap_metallization_desc': 'Leitfaden zu Keramikmetallisierung und Bonding-Techniken',
    'sitemap_bare_explained': 'Reinkeramik-Substrate erklärt',
    'sitemap_bare_explained_desc': 'Technischer Leitfaden zu Reinkeramik-Substraten',
    'sitemap_dpc_dam': 'DPC-Umschließungsrand (Encapsulation Dam)',
    'sitemap_dpc_dam_desc': 'Informationen über DPC-Umschließungsrand-Technologie',
    'sitemap_dpc_tec': 'DPC-Keramikmetallisierung TEC/TEG',
    'sitemap_dpc_tec_desc': 'DPC-Substrate für thermoelektrische Kühler/Generator-Anwendungen',
    
    // Company pages
    'sitemap_about': 'Über uns',
    'sitemap_about_desc': 'Unternehmensüberblick, Geschichte und Fertigungskapazitäten',
    'sitemap_contact': 'Kontakt',
    'sitemap_contact_desc': 'Kontaktinformationen, Formular und Standortdetails',
    
    // Legal pages
    'sitemap_privacy': 'Datenschutzrichtlinie',
    'sitemap_privacy_desc': 'Wie wir Ihre persönlichen Informationen sammeln, verwenden und schützen',
    'sitemap_terms': 'Nutzungsbedingungen',
    'sitemap_terms_desc': 'Rechtliche Bedingungen für die Nutzung unserer Website und Dienste',
    'sitemap_sitemap': 'Sitemap',
    'sitemap_sitemap_desc': 'Vollständige Liste aller Seiten auf unserer Website',
    
    // XML sitemap section
    'sitemap_xml_title': 'XML-Sitemap für Suchmaschinen',
    'sitemap_xml_description': 'Suchmaschinen können auf unsere vollständige XML-Sitemap unter folgender URL zugreifen:',
    'btn_view_xml_sitemap': 'XML-Sitemap ansehen',
    
    // Search section
    'sitemap_search_title': 'Können Sie nicht finden, was Sie suchen?',
    'sitemap_search_description': 'Nutzen Sie unser Kontaktformular, um unser Team für spezifische Anfragen oder technische Fragen zu kontaktieren.',
    'btn_contact_for_help': 'Hilfe kontaktieren',

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