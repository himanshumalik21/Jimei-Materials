// translations.js - Internationalization for Jimei Materials Website
// Author: Jimei Materials Development Team
// Version: 1.0.0
// Last Updated: 2025

(function() {
    'use strict';

    // Translations object
    const translations = {
        en: {
            // Contact Page Specific Translations
            "contact_page_title": "Contact Us | Jimei Materials - Ceramic Substrate Manufacturer",
            "contact_meta_description": "Contact Jimei Materials for high-quality DBC & DPC ceramic substrates. Get quotes, technical support, and samples. Global manufacturer of metallized ceramic solutions.",
            "contact_meta_keywords": "ceramic substrate contact, DBC manufacturer contact, DPC substrate quote, thermal management solutions, request ceramic sample, power electronics substrate inquiry",
            "contact_og_title": "Contact Jimei Materials - DBC & DPC Ceramic Substrate Manufacturer",
            "contact_og_description": "Get quotes, technical support and samples for high-performance ceramic substrates. Contact our team for custom solutions.",
            "contact_twitter_title": "Contact Jimei Materials - Ceramic Substrate Manufacturer",
            "contact_twitter_description": "Get quotes and technical support for DBC & DPC ceramic substrates. Contact our team today.",
            
            // Navigation (Shared with other pages)
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
            
            // Hero Section
            "contact_hero_title": "Get In Touch With Our Team",
            "contact_hero_description": "Contact Jimei Materials for high-performance ceramic substrate solutions, technical consultation, and custom quotes. Our experts are ready to assist with your project requirements.",
            "btn_contact_form": "Contact Form",
            "btn_contact_info": "Contact Info",
            
            // Contact Information Section
            "contact_info_title": "Contact Information",
            "contact_info_description": "We're here to help! Our team will provide clear, personalized quotes and technical support tailored to your project needs.",
            "contact_address_title": "Our Locations",
            "contact_corporate_office": "Corporate Office",
            "contact_corporate_address": "No. 10 Meiting Road, Industrial park, Duanzhou, Zhaoqing, Guangdong, China 526020",
            "contact_factory_address": "Factory Address",
            "contact_factory_address_detail": "First Industrial Zone, Haosan Linpokeng, Xinqiao Street, Bao'an District, Shenzhen, Guangdong, China 518104",
            "contact_email_title": "Email",
            "contact_email": "sales@jimei-materials.com",
            "contact_phone_title": "Phone",
            "contact_phone": "(+86) 147 4537 3293",
            "contact_whatsapp_title": "WhatsApp",
            "contact_whatsapp": "Message on WhatsApp",
            "contact_wechat_title": "WeChat",
            "contact_wechat_scan": "Scan QR Code",
            "contact_business_hours_title": "Business Hours",
            "contact_business_hours_mon_fri": "Monday - Friday: 8:00 AM - 6:00 PM (GMT+8)",
            "contact_business_hours_sat": "Saturday: 9:00 AM - 1:00 PM",
            "contact_business_hours_sun": "Sunday: Closed",
            
            // Contact Form Section
            "contact_form_title": "Send Us a Message",
            "contact_form_description": "Complete the form below and our team will respond within 24 hours with a personalized quote and technical consultation.",
            "form_label_first_name": "First Name *",
            "form_error_first_name": "Please enter your first name.",
            "form_label_last_name": "Last Name *",
            "form_error_last_name": "Please enter your last name.",
            "form_label_email": "Email Address *",
            "form_error_email": "Please enter a valid email address.",
            "form_label_phone": "Phone Number",
            "form_label_message": "Your Message *",
            "form_error_message": "Please enter a message with at least 10 characters.",
            "form_help_message": "Include details about your application, required substrate type, quantity, and any special requirements.",
            "form_label_product_interest": "Product Interest",
            "form_select_default": "Select a product category",
            "form_option_dbc": "Direct Bonded Copper (DBC)",
            "form_option_dpc": "Direct Plated Copper (DPC)",
            "form_option_bare": "Bare Ceramic Substrates",
            "form_option_custom": "Custom Solution",
            "form_option_other": "Other/Not Sure",
            "form_label_company": "Company/Organization",
            "form_label_newsletter": "Subscribe to our newsletter for industry insights and product updates",
            "btn_submit_form": "Submit Message",
            "form_submission_note": "We'll respond within 24 hours. For urgent inquiries, please call us directly.",
            
            // CTA Section
            "contact_cta_title": "Need Urgent Technical Support?",
            "contact_cta_description": "For immediate assistance with technical specifications, design files, or urgent project requirements, contact our engineering team directly.",
            "contact_cta_fast_response": "Fast Response Time",
            "contact_cta_fast_response_desc": "Technical queries answered within 4 hours",
            "contact_cta_design_review": "Free Design Review",
            "contact_cta_design_review_desc": "Get expert feedback on your substrate design",
            "btn_call_now": "Call Now",
            "contact_cta_email": "Or email: sales@jimei-materials.com",
            
            // WeChat Modal
            "wechat_modal_title": "Scan WeChat QR Code",
            "wechat_modal_subtitle": "Connect with us on WeChat",
            "wechat_modal_description": "Scan the QR code below to add our sales team on WeChat for quick communication.",
            "wechat_modal_note": "After scanning, please send a message with 'Ceramic Substrate Inquiry' for faster response.",
            
            // Footer (Shared with other pages)
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
            "footer_sitemap": "Sitemap",
            
            // Common Buttons
            "btn_view_details": "View Details",
            "btn_request_consultation": "Request Consultation",
            "btn_view_all_products": "View All Products",
            "btn_request_custom": "Request Custom Quote"
        },
        
        zh: {
            // 联系页面特定翻译
            "contact_page_title": "联系我们 | 吉美材料 - 陶瓷基板制造商",
            "contact_meta_description": "联系吉美材料，获取高品质DBC与DPC陶瓷基板解决方案。申请报价、获取技术支持与样品。全球领先的陶瓷金属化解决方案制造商。",
            "contact_meta_keywords": "陶瓷基板联系, DBC制造商联系, DPC基板询价, 热管理解决方案, 申请陶瓷样品, 功率电子基板咨询",
            "contact_og_title": "联系吉美材料 - DBC与DPC陶瓷基板制造商",
            "contact_og_description": "获取高性能陶瓷基板的报价、技术支持与样品。联系我们的团队，获取定制化解决方案。",
            "contact_twitter_title": "联系吉美材料 - 陶瓷基板制造商",
            "contact_twitter_description": "获取DBC与DPC陶瓷基板报价及技术支持。立即联系我们的团队。",
            
            // 导航（与全站一致）
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
            
            // 页面标题区
            "contact_hero_title": "与我们取得联系",
            "contact_hero_description": "联系吉美材料，获取高性能陶瓷基板解决方案、技术咨询与定制化报价。我们的专家团队已准备好为您的项目需求提供支持。",
            "btn_contact_form": "在线留言",
            "btn_contact_info": "联系信息",
            
            // 联系信息区
            "contact_info_title": "联系信息",
            "contact_info_description": "我们随时为您提供帮助！我们的团队将根据您的项目需求，提供清晰、个性化的报价与专业技术支持。",
            "contact_address_title": "我们的地址",
            "contact_corporate_office": "公司总部",
            "contact_corporate_address": "中国广东省肇庆市端州区工业园美亭路10号 邮编: 526020",
            "contact_factory_address": "制造基地",
            "contact_factory_address_detail": "中国广东省深圳市宝安区新桥街道豪三林坡坑第一工业区 邮编: 518104",
            "contact_email_title": "电子邮箱",
            "contact_email": "sales@jimei-materials.com",
            "contact_phone_title": "联系电话",
            "contact_phone": "(+86) 147 4537 3293",
            "contact_whatsapp_title": "WhatsApp",
            "contact_whatsapp": "通过WhatsApp发送消息",
            "contact_wechat_title": "微信",
            "contact_wechat_scan": "扫描二维码",
            "contact_business_hours_title": "办公时间",
            "contact_business_hours_mon_fri": "周一至周五: 上午 8:00 - 下午 6:00 (北京时间 GMT+8)",
            "contact_business_hours_sat": "周六: 上午 9:00 - 下午 1:00",
            "contact_business_hours_sun": "周日: 休息",
            
            // 联系表单区
            "contact_form_title": "发送消息给我们",
            "contact_form_description": "请填写以下表格，我们的团队将在24小时内回复，为您提供个性化报价与技术咨询。",
            "form_label_first_name": "名 *",
            "form_error_first_name": "请输入您的名。",
            "form_label_last_name": "姓 *",
            "form_error_last_name": "请输入您的姓。",
            "form_label_email": "电子邮箱 *",
            "form_error_email": "请输入有效的电子邮箱地址。",
            "form_label_phone": "电话号码",
            "form_label_message": "您的留言 *",
            "form_error_message": "留言内容至少需要10个字符。",
            "form_help_message": "请详细说明您的应用场景、所需基板类型、预估数量及任何特殊要求，这将帮助我们更快地为您提供精准方案。",
            "form_label_product_interest": "咨询产品类型",
            "form_select_default": "请选择产品类别",
            "form_option_dbc": "直接覆铜陶瓷基板 (DBC)",
            "form_option_dpc": "直接镀铜陶瓷基板 (DPC)",
            "form_option_bare": "裸陶瓷基板",
            "form_option_custom": "定制解决方案",
            "form_option_other": "其他/尚未确定",
            "form_label_company": "公司/机构名称",
            "form_label_newsletter": "订阅我们的行业洞察与产品更新通讯",
            "btn_submit_form": "提交留言",
            "form_submission_note": "我们将在24小时内回复您。如有紧急事宜，请直接致电。",
            
            // CTA区 (紧急技术支持)
            "contact_cta_title": "需要紧急技术支持？",
            "contact_cta_description": "如需立即获得关于技术规格、设计文件或紧急项目需求的支持，请直接联系我们的工程团队。",
            "contact_cta_fast_response": "快速响应",
            "contact_cta_fast_response_desc": "技术咨询4小时内回复",
            "contact_cta_design_review": "免费设计评审",
            "contact_cta_design_review_desc": "获取专家对您基板设计的反馈",
            "btn_call_now": "立即致电",
            "contact_cta_email": "或发送邮件至: sales@jimei-materials.com",
            
            // 微信二维码弹窗
            "wechat_modal_title": "扫描微信二维码",
            "wechat_modal_subtitle": "通过微信联系我们",
            "wechat_modal_description": "扫描下方二维码，添加我们的销售团队微信，以便快速沟通。",
            "wechat_modal_note": "添加后，请发送消息“陶瓷基板咨询”以便我们更快处理。",
            
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
            "footer_sitemap": "网站地图",
            
            // 通用按钮 (与首页等页面保持绝对一致)
            "btn_view_details": "查看详情",
            "btn_request_consultation": "获取技术咨询",
            "btn_view_all_products": "查看所有产品",
            "btn_request_custom": "申请定制方案"
        },
        
        ja: {
            // Contact Page Specific Translations
            "contact_page_title": "お問い合わせ | セラミック基板メーカー Jimei Materials",
            "contact_meta_description": "高品質DBC・DPCセラミック基板に関するお問い合わせはJimei Materialsへ。見積もり、技術サポート、サンプルのご提供。メタライズセラミックソリューションのグローバルメーカー。",
            "contact_meta_keywords": "セラミック基板 お問い合わせ, DBCメーカー 連絡先, DPC基板 見積もり, 熱管理ソリューション, セラミックサンプル 請求, パワーエレクトロニクス基板 お問い合わせ",
            "contact_og_title": "Jimei Materials お問い合わせ - DBC・DPCセラミック基板メーカー",
            "contact_og_description": "高性能セラミック基板の見積もり、技術サポート、サンプルをご希望ですか？カスタムソリューションについては当チームまでお問い合わせください。",
            "contact_twitter_title": "Jimei Materials お問い合わせ - セラミック基板メーカー",
            "contact_twitter_description": "DBC・DPCセラミック基板の見積もりと技術サポートはこちら。今すぐお問い合わせください。",
            
            // Navigation (Shared with other pages)
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
            
            // Hero Section
            "contact_hero_title": "当社チームにお問い合わせください",
            "contact_hero_description": "高性能セラミック基板ソリューション、技術相談、カスタム見積もりに関するお問い合わせはJimei Materialsへ。専門家がお客様のプロジェクト要件をサポートいたします。",
            "btn_contact_form": "お問い合わせフォーム",
            "btn_contact_info": "連絡先情報",
            
            // Contact Information Section
            "contact_info_title": "連絡先情報",
            "contact_info_description": "ご質問がございましたら、お気軽にお問い合わせください。当チームがお客様のプロジェクトニーズに合わせた、明確で個別対応の見積もりと技術サポートを提供いたします。",
            "contact_address_title": "所在地",
            "contact_corporate_office": "本社",
            "contact_corporate_address": "中国 広東省 肇慶市 端州区 工業園 美亭路10号 526020",
            "contact_factory_address": "工場",
            "contact_factory_address_detail": "中国 広東省 深圳市 宝安区 新橋街道 豪三林坡坑 第一工業区 518104",
            "contact_email_title": "メールアドレス",
            "contact_email": "sales@jimei-materials.com",
            "contact_phone_title": "電話番号",
            "contact_phone": "(+86) 147 4537 3293",
            "contact_whatsapp_title": "WhatsApp",
            "contact_whatsapp": "WhatsAppでメッセージ",
            "contact_wechat_title": "WeChat",
            "contact_wechat_scan": "QRコードをスキャン",
            "contact_business_hours_title": "営業時間",
            "contact_business_hours_mon_fri": "月曜日〜金曜日: 8:00 - 18:00 (中国標準時 GMT+8)",
            "contact_business_hours_sat": "土曜日: 9:00 - 13:00",
            "contact_business_hours_sun": "日曜日: 定休日",
            
            // Contact Form Section
            "contact_form_title": "メッセージを送信",
            "contact_form_description": "以下のフォームにご記入ください。担当者より24時間以内に、個別対応の見積もりと技術相談のご返信を差し上げます。",
            "form_label_first_name": "名 *",
            "form_error_first_name": "名を入力してください。",
            "form_label_last_name": "姓 *",
            "form_error_last_name": "姓を入力してください。",
            "form_label_email": "メールアドレス *",
            "form_error_email": "有効なメールアドレスを入力してください。",
            "form_label_phone": "電話番号",
            "form_label_message": "お問い合わせ内容 *",
            "form_error_message": "10文字以上でお問い合わせ内容を入力してください。",
            "form_help_message": "アプリケーションの詳細、必要な基板タイプ、数量、その他特別な要件などをご記入ください。",
            "form_label_product_interest": "対象製品",
            "form_select_default": "製品カテゴリを選択",
            "form_option_dbc": "直接接合銅（DBC）基板",
            "form_option_dpc": "直接鍍金銅（DPC）基板",
            "form_option_bare": "未金属化セラミック基板",
            "form_option_custom": "カスタムソリューション",
            "form_option_other": "その他 / 未定",
            "form_label_company": "会社名・組織名",
            "form_label_newsletter": "業界インサイトや製品更新情報を受け取るためにニュースレターに登録する",
            "btn_submit_form": "メッセージを送信",
            "form_submission_note": "24時間以内にご返信いたします。緊急のお問い合わせの場合は、直接お電話ください。",
            
            // CTA Section
            "contact_cta_title": "緊急の技術サポートが必要ですか？",
            "contact_cta_description": "技術仕様、設計ファイル、または緊急のプロジェクト要件に関する即時のサポートが必要な場合は、当社のエンジニアリングチームに直接ご連絡ください。",
            "contact_cta_fast_response": "迅速な対応",
            "contact_cta_fast_response_desc": "技術的なお問い合わせは4時間以内に回答",
            "contact_cta_design_review": "無料設計レビュー",
            "contact_cta_design_review_desc": "基板設計に関する専門家のフィードバックを提供",
            "btn_call_now": "今すぐ電話",
            "contact_cta_email": "またはメール: sales@jimei-materials.com",
            
            // WeChat Modal
            "wechat_modal_title": "WeChat QRコードをスキャン",
            "wechat_modal_subtitle": "WeChatで当社とつながる",
            "wechat_modal_description": "以下のQRコードをスキャンして、当社営業チームをWeChatで追加し、迅速なコミュニケーションを行えます。",
            "wechat_modal_note": "スキャン後、'Ceramic Substrate Inquiry'（セラミック基板お問い合わせ）のメッセージを送信いただくと、より迅速に対応いたします。",
            
            // Footer (Shared with other pages)
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
            "footer_sitemap": "サイトマップ",
            
            // Common Buttons
            "btn_view_details": "詳細を見る",
            "btn_request_consultation": "相談を依頼",
            "btn_view_all_products": "全ての製品を見る",
            "btn_request_custom": "カスタム見積依頼"
        },
        
        ko: {
            // Contact Page Specific Translations
            "contact_page_title": "문의하기 | Jimei Materials - 세라믹 기판 제조사",
            "contact_meta_description": "고품질 DBC 및 DPC 세라믹 기판에 대해 Jimei Materials에 문의하십시오. 견적, 기술 지원, 샘플을 제공받으세요. 금속화 세라믹 솔루션의 글로벌 제조사.",
            "contact_meta_keywords": "세라믹 기판 문의, DBC 제조사 연락처, DPC 기판 견적, 열 관리 솔루션, 세라믹 샘플 요청, 전력전자 기판 문의",
            "contact_og_title": "Jimei Materials 문의 - DBC & DPC 세라믹 기판 제조사",
            "contact_og_description": "고성능 세라믹 기판에 대한 견적, 기술 지원 및 샘플을 받아보세요. 맞춤형 솔루션에 대해 당사 팀에 문의하십시오.",
            "contact_twitter_title": "Jimei Materials 문의 - 세라믹 기판 제조사",
            "contact_twitter_description": "DBC 및 DPC 세라믹 기판에 대한 견적 및 기술 지원을 받아보세요. 지금 당사 팀에 문의하십시오.",
            
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
            
            // Hero Section
            "contact_hero_title": "당사 팀에 문의하십시오",
            "contact_hero_description": "고성능 세라믹 기판 솔루션, 기술 상담 및 맞춤형 견적에 대해 Jimei Materials에 문의하세요. 당사 전문가들이 귀하의 프로젝트 요구 사항을 지원할 준비가 되어 있습니다.",
            "btn_contact_form": "문의 양식",
            "btn_contact_info": "연락처 정보",
            
            // Contact Information Section
            "contact_info_title": "연락처 정보",
            "contact_info_description": "도움이 필요하신가요? 당사 팀은 귀하의 프로젝트 요구에 맞춤화된 명확하고 개인화된 견적 및 기술 지원을 제공할 것입니다.",
            "contact_address_title": "사업장 위치",
            "contact_corporate_office": "본사",
            "contact_corporate_address": "중국 광동성 자오칭시 두안저우구 공업단지 메이팅 로드 10번지 (우편번호: 526020)",
            "contact_factory_address": "공장 주소",
            "contact_factory_address_detail": "중국 광동성 선전시 바오안구 신차오 가도 하오산 린포켱 제1공업구 (우편번호: 518104)",
            "contact_email_title": "이메일",
            "contact_email": "sales@jimei-materials.com",
            "contact_phone_title": "전화",
            "contact_phone": "(+86) 147 4537 3293",
            "contact_whatsapp_title": "WhatsApp",
            "contact_whatsapp": "WhatsApp으로 메시지 보내기",
            "contact_wechat_title": "위챗",
            "contact_wechat_scan": "QR 코드 스캔",
            "contact_business_hours_title": "업무 시간",
            "contact_business_hours_mon_fri": "월요일 - 금요일: 오전 8:00 - 오후 6:00 (GMT+8)",
            "contact_business_hours_sat": "토요일: 오전 9:00 - 오후 1:00",
            "contact_business_hours_sun": "일요일: 휴무",
            
            // Contact Form Section
            "contact_form_title": "메시지 보내기",
            "contact_form_description": "아래 양식을 작성해 주시면 당사 팀이 24시간 이내에 개인화된 견적 및 기술 상담으로 답변드릴 것입니다.",
            "form_label_first_name": "이름 *",
            "form_error_first_name": "이름을 입력해 주세요.",
            "form_label_last_name": "성 *",
            "form_error_last_name": "성을 입력해 주세요.",
            "form_label_email": "이메일 주소 *",
            "form_error_email": "유효한 이메일 주소를 입력해 주세요.",
            "form_label_phone": "전화번호",
            "form_label_message": "메시지 내용 *",
            "form_error_message": "최소 10자 이상의 메시지를 입력해 주세요.",
            "form_help_message": "애플리케이션 세부 정보, 필요한 기판 유형, 수량 및 특별 요구 사항을 포함해 주세요.",
            "form_label_product_interest": "관심 제품",
            "form_select_default": "제품 카테고리 선택",
            "form_option_dbc": "직접 접합 동 (DBC) 기판",
            "form_option_dpc": "직접 도금 동 (DPC) 기판",
            "form_option_bare": "비금속화 세라믹 기판",
            "form_option_custom": "맞춤형 솔루션",
            "form_option_other": "기타/확실하지 않음",
            "form_label_company": "회사/조직명",
            "form_label_newsletter": "산업 동향 및 제품 업데이트를 위한 뉴스레터 구독",
            "btn_submit_form": "메시지 보내기",
            "form_submission_note": "24시간 이내에 답변드리겠습니다. 긴급 문의는 직접 전화해 주시기 바랍니다.",
            
            // CTA Section
            "contact_cta_title": "긴급 기술 지원이 필요하십니까?",
            "contact_cta_description": "기술 사양, 설계 파일 또는 긴급 프로젝트 요구 사항에 대한 즉각적인 지원이 필요하시면 당사 엔지니어링 팀에 직접 문의하십시오.",
            "contact_cta_fast_response": "신속한 응답 시간",
            "contact_cta_fast_response_desc": "기술 문의는 4시간 이내 답변",
            "contact_cta_design_review": "무료 설계 검토",
            "contact_cta_design_review_desc": "기판 설계에 대한 전문가 피드백 제공",
            "btn_call_now": "지금 전화하기",
            "contact_cta_email": "또는 이메일: sales@jimei-materials.com",
            
            // WeChat Modal
            "wechat_modal_title": "위챗 QR 코드 스캔",
            "wechat_modal_subtitle": "위챗으로 당사와 연결하세요",
            "wechat_modal_description": "아래 QR 코드를 스캔하여 당사 영업 팀을 위챗에 추가하고 빠른 의사소통을 하세요.",
            "wechat_modal_note": "스캔 후 '세라믹 기판 문의'라는 메시지를 보내시면 더 빠른 응답을 받으실 수 있습니다.",
            
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
            "footer_sitemap": "사이트맵",
            
            // Common Buttons (일관성 유지)
            "btn_view_details": "자세히 보기",
            "btn_request_consultation": "상담 요청",
            "btn_view_all_products": "전체 제품 보기",
            "btn_request_custom": "맞춤형 견적 요청"
        },

        de: {
            // Contact Page Specific Translations
            "contact_page_title": "Kontakt | Jimei Materials - Hersteller von Keramiksubstraten",
            "contact_meta_description": "Kontaktieren Sie Jimei Materials für hochwertige DBC- & DPC-Keramiksubstrate. Erhalten Sie Angebote, technischen Support und Muster. Globaler Hersteller von metallisierten Keramiklösungen.",
            "contact_meta_keywords": "Keramiksubstrat Kontakt, DBC Hersteller Kontakt, DPC Substrat Angebot, Wärmemanagement Lösungen, Keramikmuster anfordern, Anfrage Substrat Leistungselektronik",
            "contact_og_title": "Kontakt Jimei Materials - Hersteller von DBC- & DPC-Keramiksubstraten",
            "contact_og_description": "Erhalten Sie Angebote, technischen Support und Muster für Hochleistungs-Keramiksubstrate. Kontaktieren Sie unser Team für kundenspezifische Lösungen.",
            "contact_twitter_title": "Kontakt Jimei Materials - Hersteller von Keramiksubstraten",
            "contact_twitter_description": "Erhalten Sie Angebote und technischen Support für DBC- & DPC-Keramiksubstrate. Kontaktieren Sie unser Team.",
            
            // Navigation (Shared with other pages)
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
            
            // Hero Section
            "contact_hero_title": "Nehmen Sie Kontakt mit unserem Team auf",
            "contact_hero_description": "Kontaktieren Sie Jimei Materials für Hochleistungs-Keramiksubstrat-Lösungen, technische Beratung und individuelle Angebote. Unsere Experten unterstützen Sie bei Ihren Projektanforderungen.",
            "btn_contact_form": "Kontaktformular",
            "btn_contact_info": "Kontaktdaten",
            
            // Contact Information Section
            "contact_info_title": "Kontaktinformationen",
            "contact_info_description": "Wir sind für Sie da! Unser Team erstellt klare, individuelle Angebote und bietet technischen Support, der auf Ihre Projektanforderungen zugeschnitten ist.",
            "contact_address_title": "Unsere Standorte",
            "contact_corporate_office": "Unternehmenszentrale",
            "contact_corporate_address": "No. 10 Meiting Road, Industrial park, Duanzhou, Zhaoqing, Guangdong, China 526020",
            "contact_factory_address": "Werksadresse",
            "contact_factory_address_detail": "First Industrial Zone, Haosan Linpokeng, Xinqiao Street, Bao'an District, Shenzhen, Guangdong, China 518104",
            "contact_email_title": "E-Mail",
            "contact_email": "sales@jimei-materials.com",
            "contact_phone_title": "Telefon",
            "contact_phone": "(+86) 147 4537 3293",
            "contact_whatsapp_title": "WhatsApp",
            "contact_whatsapp": "Nachricht auf WhatsApp",
            "contact_wechat_title": "WeChat",
            "contact_wechat_scan": "QR-Code scannen",
            "contact_business_hours_title": "Geschäftszeiten",
            "contact_business_hours_mon_fri": "Montag - Freitag: 8:00 - 18:00 Uhr (GMT+8)",
            "contact_business_hours_sat": "Samstag: 9:00 - 13:00 Uhr",
            "contact_business_hours_sun": "Sonntag: Geschlossen",
            
            // Contact Form Section
            "contact_form_title": "Senden Sie uns eine Nachricht",
            "contact_form_description": "Füllen Sie das untenstehende Formular aus und unser Team antwortet innerhalb von 24 Stunden mit einem individuellen Angebot und technischer Beratung.",
            "form_label_first_name": "Vorname *",
            "form_error_first_name": "Bitte geben Sie Ihren Vornamen ein.",
            "form_label_last_name": "Nachname *",
            "form_error_last_name": "Bitte geben Sie Ihren Nachnamen ein.",
            "form_label_email": "E-Mail-Adresse *",
            "form_error_email": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
            "form_label_phone": "Telefonnummer",
            "form_label_message": "Ihre Nachricht *",
            "form_error_message": "Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.",
            "form_help_message": "Fügen Sie Details zu Ihrer Anwendung, dem benötigten Substrattyp, der Menge und besonderen Anforderungen hinzu.",
            "form_label_product_interest": "Produktinteresse",
            "form_select_default": "Produktkategorie auswählen",
            "form_option_dbc": "Direct Bonded Copper (DBC)",
            "form_option_dpc": "Direct Plated Copper (DPC)",
            "form_option_bare": "Reinkeramik-Substrate",
            "form_option_custom": "Kundenspezifische Lösung",
            "form_option_other": "Sonstiges/Unklar",
            "form_label_company": "Firma/Organisation",
            "form_label_newsletter": "Abonnieren Sie unseren Newsletter für Brancheneinblicke und Produkt-Updates",
            "btn_submit_form": "Nachricht senden",
            "form_submission_note": "Wir antworten innerhalb von 24 Stunden. Bei dringenden Anfragen rufen Sie uns bitte direkt an.",
            
            // CTA Section
            "contact_cta_title": "Benötigen Sie dringenden technischen Support?",
            "contact_cta_description": "Für sofortige Unterstützung bei technischen Spezifikationen, Design-Dateien oder dringenden Projektanforderungen kontaktieren Sie unser Ingenieurteam direkt.",
            "contact_cta_fast_response": "Schnelle Antwortzeit",
            "contact_cta_fast_response_desc": "Technische Anfragen innerhalb von 4 Stunden beantwortet",
            "contact_cta_design_review": "Kostenloser Design-Review",
            "contact_cta_design_review_desc": "Erhalten Sie Expertenfeedback zu Ihrem Substrat-Design",
            "btn_call_now": "Jetzt anrufen",
            "contact_cta_email": "Oder per E-Mail: sales@jimei-materials.com",
            
            // WeChat Modal
            "wechat_modal_title": "WeChat QR-Code scannen",
            "wechat_modal_subtitle": "Verbinden Sie sich mit uns auf WeChat",
            "wechat_modal_description": "Scannen Sie den untenstehenden QR-Code, um unser Vertriebsteam auf WeChat für schnelle Kommunikation hinzuzufügen.",
            "wechat_modal_note": "Nach dem Scannen senden Sie bitte eine Nachricht mit 'Keramiksubstrat-Anfrage' für eine schnellere Antwort.",
            
            // Footer (Shared with other pages)
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
            "footer_sitemap": "Sitemap",
            
            // Common Buttons
            "btn_view_details": "Details ansehen",
            "btn_request_consultation": "Beratung anfordern",
            "btn_view_all_products": "Alle Produkte ansehen",
            "btn_request_custom": "Kundenspezifisches Angebot anfordern"
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