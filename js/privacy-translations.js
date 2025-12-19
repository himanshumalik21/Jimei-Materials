(function() {
    'use strict';

    // Translations object
    const translations = {
        en: {
            // Page meta
            'privacy_page_title': 'Privacy Policy | Jimei Materials - Ceramic Substrate Manufacturer',
            'privacy_meta_description': 'Privacy Policy of Jimei Materials. Learn how we collect, use, and protect your personal information in compliance with data protection regulations.',

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
            'privacy_main_title': 'Privacy Policy',
            'privacy_subtitle': 'Our commitment to protecting your personal information',
            'breadcrumb_privacy': 'Privacy Policy',
            'privacy_last_updated': 'Last Updated:',
            'privacy_last_updated_date': 'December 19, 2025',
            'privacy_intro_note': 'This Privacy Policy describes how Jimei Materials Co., Ltd. ("we," "our," or "us") collects, uses, and protects your personal information when you visit our website www.jimei-materials.com.',
            
            // Sections
            'privacy_section1_title': '1. Introduction',
            'privacy_section1_content': 'Jimei Materials Co., Ltd. is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We comply with applicable data protection laws, including China\'s Personal Information Protection Law (PIPL) and other relevant international regulations.',
            
            'privacy_section2_title': '2. Information We Collect',
            'privacy_section2a_title': '2.1 Information You Provide Directly',
            'privacy_section2a_content': 'When you interact with our website, particularly through our contact forms, we may collect:',
            'privacy_section2a_list1': 'Full name and contact details (email address, phone number)',
            'privacy_section2a_list2': 'Company name and job title',
            'privacy_section2a_list3': 'Technical requirements and project information',
            'privacy_section2a_list4': 'Any other information you voluntarily provide in your communications with us',
            
            'privacy_section2b_title': '2.2 Information Collected Automatically',
            'privacy_section2b_content': 'When you visit our website, we may automatically collect certain information through cookies and similar tracking technologies:',
            'privacy_section2b_list1': 'Device information (browser type, operating system)',
            'privacy_section2b_list2': 'IP address and approximate location',
            'privacy_section2b_list3': 'Pages visited and time spent on our website',
            'privacy_section2b_list4': 'Referring website or search terms',
            
            'privacy_section3_title': '3. How We Use Your Information',
            'privacy_section3_content': 'We use the collected information for the following purposes:',
            'privacy_section3_list1': 'To respond to your inquiries and provide requested information',
            'privacy_section3_list2': 'To process and fulfill your requests for quotes, samples, or services',
            'privacy_section3_list3': 'To improve our website functionality and user experience',
            'privacy_section3_list4': 'To analyze website usage and optimize our marketing efforts',
            'privacy_section3_list5': 'To comply with legal obligations and protect our legal rights',
            'privacy_section3_list6': 'To send relevant technical information, updates, and newsletters (with your consent)',
            
            'privacy_section4_title': '4. Legal Basis for Processing',
            'privacy_section4_content': 'We process your personal information based on one or more of the following legal grounds:',
            'privacy_section4_list1': 'Consent: When you have given us explicit consent to process your information',
            'privacy_section4_list2': 'Contractual necessity: When processing is necessary to fulfill a contract with you',
            'privacy_section4_list3': 'Legitimate interests: When processing is necessary for our legitimate business interests',
            'privacy_section4_list4': 'Legal compliance: When processing is necessary to comply with legal obligations',
            
            'privacy_section5_title': '5. Data Sharing and Disclosure',
            'privacy_section5_content': 'We do not sell, trade, or rent your personal information to third parties. We may share your information with:',
            'privacy_section5_list1': 'Service providers who assist us in operating our website and business',
            'privacy_section5_list2': 'Legal authorities when required by law or to protect our rights',
            'privacy_section5_list3': 'Third-party analytics providers (like Google Analytics) to understand website usage',
            'privacy_section5_note': 'We ensure that any third parties with access to your data provide adequate protection in accordance with applicable data protection laws.',
            
            'privacy_section6_title': '6. International Data Transfers',
            'privacy_section6_content': 'As a global company serving international clients, your information may be transferred to and processed in countries outside of your residence. We implement appropriate safeguards, such as standard contractual clauses, to ensure your data receives adequate protection regardless of where it is processed.',
            
            'privacy_section7_title': '7. Data Security',
            'privacy_section7_content': 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:',
            'privacy_section7_list1': 'Encryption of sensitive data in transit and at rest',
            'privacy_section7_list2': 'Regular security assessments and updates',
            'privacy_section7_list3': 'Access controls and authentication mechanisms',
            'privacy_section7_list4': 'Employee training on data protection best practices',
            
            'privacy_section8_title': '8. Data Retention',
            'privacy_section8_content': 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, we retain contact information for active business relationships and for a reasonable period thereafter to address any follow-up inquiries.',
            
            'privacy_section9_title': '9. Your Rights',
            'privacy_section9_content': 'Depending on your location and applicable laws, you may have the following rights regarding your personal information:',
            'privacy_section9_list1': 'Right to access and obtain a copy of your personal information',
            'privacy_section9_list2': 'Right to correct inaccurate or incomplete information',
            'privacy_section9_list3': 'Right to request deletion of your personal information',
            'privacy_section9_list4': 'Right to restrict or object to certain processing activities',
            'privacy_section9_list5': 'Right to data portability (where applicable)',
            'privacy_section9_list6': 'Right to withdraw consent at any time',
            'privacy_section9_note': 'To exercise these rights, please contact us using the information provided in the "Contact Us" section below.',
            
            'privacy_section10_title': '10. Cookies and Tracking Technologies',
            'privacy_section10_content': 'Our website uses cookies and similar technologies to enhance user experience and analyze website traffic. We use:',
            'privacy_section10_list1': 'Essential cookies: Required for basic website functionality',
            'privacy_section10_list2': 'Analytical cookies: To understand how visitors use our website (Google Analytics)',
            'privacy_section10_list3': 'Preference cookies: To remember your settings and preferences',
            'privacy_section10_note': 'You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.',
            
            'privacy_google_analytics_title': 'Google Analytics',
            'privacy_google_analytics_content': 'We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information anonymously and reports website trends without identifying individual visitors. You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.',
            
            'privacy_section11_title': '11. Children\'s Privacy',
            'privacy_section11_content': 'Our website is not directed to children under the age of 16, and we do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.',
            
            'privacy_section12_title': '12. Third-Party Links',
            'privacy_section12_content': 'Our website may contain links to third-party websites. This Privacy Policy applies only to our website. We are not responsible for the privacy practices or content of third-party websites. We encourage you to review the privacy policies of any third-party sites you visit.',
            
            'privacy_section13_title': '13. Changes to This Privacy Policy',
            'privacy_section13_content': 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new effective date. We encourage you to review this Privacy Policy periodically.',
            
            'privacy_section14_title': '14. Contact Us',
            'privacy_section14_content': 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
            'privacy_contact_title': 'Jimei Materials Co., Ltd.',
            'privacy_contact_address': 'First Industrial Zone, Haosan Linpokeng, Xinqiao Street<br>Bao\'an District, Shenzhen, Guangdong, China 518104',
            'privacy_contact_email': 'yfu@jimei-materials.com',
            'privacy_contact_phone': '+86-147-4537-3293',
            'privacy_contact_hours': 'Business Hours: Monday-Friday, 8:00 AM - 6:00 PM (GMT+8)',
            
            'privacy_section15_title': '15. Complaints',
            'privacy_section15_content': 'If you have concerns about how we handle your personal information, please contact us first so we can address your concerns. You also have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.',
            
            'privacy_footer_note': 'This Privacy Policy is written in English. In case of any discrepancies between the English version and translations, the English version shall prevail.',
            
            // CTA Section
            'privacy_cta_title': 'Questions About Our Privacy Policy?',
            'privacy_cta_description': 'Our team is here to help you understand how we protect your information and address any concerns you may have.',
            'btn_contact_us': 'Contact Us',

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
                    
            // Page meta
            'privacy_page_title': '隐私政策 | 集美材料 - 陶瓷基板制造商',
            'privacy_meta_description': '集美材料隐私政策。了解我们如何依据数据保护法规收集、使用和保护您的个人信息。',

            // Navigation - 微调以更符合中文网站导航习惯
                    "nav_home": "首页",
                    "nav_products": "产品中心",
                    "nav_dpc": "直接镀铜陶瓷基板",
                    "nav_dbc": "直接覆铜陶瓷基板",
                    "nav_bare": "裸陶瓷基片",
                    "nav_all_products": "全部产品",
                    "nav_resources": "技术资源",
                    "nav_about": "关于集美",
                    "nav_contact": "联系我们",
                    "nav_request_quote": "在线询价",
                    "nav_blog": "技术博客",
            
            // Content
            'privacy_main_title': '隐私政策',
            'privacy_subtitle': '我们保护您个人信息的承诺',
            'breadcrumb_privacy': '隐私政策',
            'privacy_last_updated': '最后更新：',
            'privacy_last_updated_date': '2025年12月19日',
            'privacy_intro_note': '本隐私政策阐述了当您访问我们的网站 www.jimei-materials.com 时，集美材料有限公司（"我们"）如何收集、使用和保护您的个人信息。',
            
            // Sections
            'privacy_section1_title': '1. 引言',
            'privacy_section1_content': '集美材料有限公司致力于保护您个人信息的隐私和安全。本隐私政策说明了当您访问我们的网站或使用我们的服务时，我们如何收集、使用、披露和保护您的信息。我们遵守适用的数据保护法律，包括《中华人民共和国个人信息保护法》（PIPL）及其他相关的国际法规。',
            
            'privacy_section2_title': '2. 我们收集的信息',
            'privacy_section2a_title': '2.1 您直接提供的信息',
            'privacy_section2a_content': '当您通过我们的网站（特别是通过联系表单）与我们互动时，我们可能会收集：',
            'privacy_section2a_list1': '姓名全称和联系方式（电子邮件地址、电话号码）',
            'privacy_section2a_list2': '公司名称和职位',
            'privacy_section2a_list3': '技术要求与项目信息',
            'privacy_section2a_list4': '您在与我们沟通中自愿提供的任何其他信息',
            
            'privacy_section2b_title': '2.2 自动收集的信息',
            'privacy_section2b_content': '当您访问我们的网站时，我们可能通过Cookie和类似追踪技术自动收集某些信息：',
            'privacy_section2b_list1': '设备信息（浏览器类型、操作系统）',
            'privacy_section2b_list2': 'IP地址和大致地理位置',
            'privacy_section2b_list3': '访问的页面和在网站停留的时间',
            'privacy_section2b_list4': '引荐网站或搜索词',
            
            'privacy_section3_title': '3. 我们如何使用您的信息',
            'privacy_section3_content': '我们使用收集的信息用于以下目的：',
            'privacy_section3_list1': '回复您的问询并提供您要求的信息',
            'privacy_section3_list2': '处理和满足您对报价、样品或服务的请求',
            'privacy_section3_list3': '改进我们网站的功能和用户体验',
            'privacy_section3_list4': '分析网站使用情况并优化我们的营销工作',
            'privacy_section3_list5': '遵守法律义务并保护我们的合法权利',
            'privacy_section3_list6': '发送相关的技术信息、更新和新闻通讯（在取得您同意的情况下）',
            
            'privacy_section4_title': '4. 个人信息处理的合法依据',
            'privacy_section4_content': '我们基于以下一项或多项合法依据处理您的个人信息：',
            'privacy_section4_list1': '同意：已取得您对处理个人信息的明确同意',
            'privacy_section4_list2': '为履行合同所必需：处理是为履行与您签订的合同所必需',
            'privacy_section4_list3': '合法利益：处理为我们追求合法商业利益所必需',
            'privacy_section4_list4': '法律合规：处理为遵守法律义务所必需',
            
            'privacy_section5_title': '5. 数据共享与披露',
            'privacy_section5_content': '我们不会向第三方出售、交易或出租您的个人信息。我们可能在以下情况下共享您的信息：',
            'privacy_section5_list1': '协助我们运营网站和业务的服务提供商',
            'privacy_section5_list2': '法律要求或为保护我们的权利时向法定机构披露',
            'privacy_section5_list3': '第三方分析服务提供商（如Google Analytics），用于了解网站使用情况',
            'privacy_section5_note': '我们确保任何能够访问您数据的第三方均根据适用的数据保护法律提供充分保护。',
            
            'privacy_section6_title': '6. 国际数据传输',
            'privacy_section6_content': '作为服务全球客户的跨国公司，您的信息可能会被传输至您所在国家/地区之外进行处理。我们实施适当的保障措施（例如签署标准合同），以确保您的数据无论在何处处理都能得到充分的保护。',
            
            'privacy_section7_title': '7. 数据安全',
            'privacy_section7_content': '我们实施适当的技术和组织措施，以保护您的个人信息免遭未经授权的访问、更改、披露或破坏。这些措施包括：',
            'privacy_section7_list1': '对传输中和静态的敏感数据进行加密',
            'privacy_section7_list2': '定期的安全评估和更新',
            'privacy_section7_list3': '访问控制和认证机制',
            'privacy_section7_list4': '对员工进行数据保护最佳实践的培训',
            
            'privacy_section8_title': '8. 数据保留',
            'privacy_section8_content': '我们仅在为实现收集目的所必需的期限内保留您的个人信息，包括为满足任何法律、会计或报告要求。通常，我们会为活跃的业务关系保留联系信息，并在此后一段合理时间内保留以处理任何后续问询。',
            
            'privacy_section9_title': '9. 您的权利',
            'privacy_section9_content': '根据您所在的地域及适用的法律，您可能对您的个人信息享有下列权利：',
            'privacy_section9_list1': '访问并获取您的个人信息副本的权利',
            'privacy_section9_list2': '更正不准确或不完整信息的权利',
            'privacy_section9_list3': '要求删除您个人信息的权利',
            'privacy_section9_list4': '限制或反对某些处理活动的权利',
            'privacy_section9_list5': '数据可携权（如适用）',
            'privacy_section9_list6': '随时撤回同意的权利',
            'privacy_section9_note': '如欲行使上述权利，请通过下方"联系我们"章节提供的联系方式与我们联系。',
            
            'privacy_section10_title': '10. Cookie和追踪技术',
            'privacy_section10_content': '我们的网站使用Cookie和类似技术以增强用户体验和分析网站流量。我们使用：',
            'privacy_section10_list1': '必要Cookie：网站基础功能所必需',
            'privacy_section10_list2': '分析Cookie：用于了解访客如何使用我们的网站（Google Analytics）',
            'privacy_section10_list3': '偏好Cookie：用于记住您的设置和偏好',
            'privacy_section10_note': '您可以通过浏览器偏好设置控制Cookie。但请注意，禁用某些Cookie可能会影响网站功能。',
            
            'privacy_google_analytics_title': 'Google Analytics',
            'privacy_google_analytics_content': '我们使用Google Analytics以了解访客如何与我们的网站互动。Google Analytics以匿名方式收集信息并报告网站趋势，不会识别具体访客。您可以通过安装"Google Analytics 退出浏览器插件"来选择退出。',
            
            'privacy_section11_title': '11. 儿童隐私',
            'privacy_section11_content': '我们的网站并非面向16周岁以下的儿童，我们不会故意收集儿童的个人信息。如果您认为我们收集了儿童的信息，请立即联系我们。',
            
            'privacy_section12_title': '12. 第三方链接',
            'privacy_section12_content': '我们的网站可能包含指向第三方网站的链接。本隐私政策仅适用于我们的网站。我们对第三方网站的隐私实践或内容不承担责任。我们建议您查阅所访问的任何第三方网站的隐私政策。',
            
            'privacy_section13_title': '13. 本隐私政策的变更',
            'privacy_section13_content': '我们可能会不时更新本隐私政策，以反映我们实践或法律要求的变化。对于任何重大变更，我们将在网站上发布更新后的政策并注明新的生效日期，以此方式通知您。我们建议您定期查阅本隐私政策。',
            
            'privacy_section14_title': '14. 联系我们',
            'privacy_section14_content': '如果您对本隐私政策或我们的数据实践有任何疑问、关切或请求，请通过以下方式联系我们：',
            'privacy_contact_title': '集美材料有限公司',
            'privacy_contact_address': '中国广东省深圳市宝安区新桥街道耗三林坡坑第一工业区 518104',
            'privacy_contact_email': 'yfu@jimei-materials.com',
            'privacy_contact_phone': '+86-147-4537-3293',
            'privacy_contact_hours': '工作时间：周一至周五，上午8:00 - 下午6:00（北京时间 GMT+8）',
            
            'privacy_section15_title': '15. 投诉',
            'privacy_section15_content': '如果您对我们处理您个人信息的方式有任何疑虑，请首先联系我们以便解决您的问题。您也有权向您所在司法管辖区的相关数据保护主管部门进行投诉。',
            
            'privacy_footer_note': '本隐私政策以英文书写。如英文版本与翻译版本之间存在任何差异，应以英文版本为准。',
            
            // CTA Section
            'privacy_cta_title': '对我们的隐私政策有疑问？',
            'privacy_cta_description': '我们的团队随时为您提供帮助，解答我们如何保护您的信息，并处理您可能存在的任何疑虑。',
            'btn_contact_us': '联系我们',

            // Footer
            'footer_description': '自2016年起，专业生产用于电力电子和热管理应用的陶瓷金属化基板。通过ISO 14001:2015认证，具备全球制造能力。',
            'footer_products': '产品',
            'footer_company': '公司',
            'footer_contact': '联系信息',
            'footer_address': '中国深圳市宝安区新桥街道耗三林坡坑第一工业区',
            'footer_hours': '周一至周五：上午8:00 - 下午6:00（北京时间）',
            'footer_languages': '支持语言：英语、中文、日语、韩语、德语',
            'footer_rights': '版权所有。',
            'footer_privacy': '隐私政策',
            'footer_terms': '服务条款',
            'footer_sitemap': '网站地图'
        },
        ja: {
            // ページメタ情報
            'privacy_page_title': 'プライバシーポリシー | Jimei Materials - セラミック基板メーカー',
            'privacy_meta_description': 'Jimei Materialsのプライバシーポリシー。データ保護法規に準拠し、当社がお客様の個人情報をどのように収集、利用、保護しているかをご確認ください。',

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

            // 本文
            'privacy_main_title': 'プライバシーポリシー',
            'privacy_subtitle': '個人情報保護への取り組み',
            'breadcrumb_privacy': 'プライバシーポリシー',
            'privacy_last_updated': '最終更新日：',
            'privacy_last_updated_date': '2025年12月19日',
            'privacy_intro_note': '本プライバシーポリシーは、Jimei Materials Co., Ltd.（「当社」「弊社」または「私たち」）が、当社ウェブサイト（www.jimei-materials.com）をご訪問される際に、お客様の個人情報をどのように収集、利用、保護するかを説明するものです。',

            // セクション
            'privacy_section1_title': '1. はじめに',
            'privacy_section1_content': 'Jimei Materials Co., Ltd. は、お客様の個人情報のプライバシーとセキュリティ保護に努めております。本プライバシーポリシーでは、当社ウェブサイトのご利用やサービス利用時に、情報をどのように収集、利用、開示、保護するかを説明します。当社は、中国の個人情報保護法（PIPL）およびその他の関連する国際法規を含む、適用されるデータ保護法を遵守します。',

            'privacy_section2_title': '2. 収集する情報',
            'privacy_section2a_title': '2.1 お客様から直接提供される情報',
            'privacy_section2a_content': 'お問い合わせフォーム等を通じて当社ウェブサイト上でお客様とやり取りする際、以下の情報を収集する場合があります：',
            'privacy_section2a_list1': '氏名および連絡先情報（メールアドレス、電話番号）',
            'privacy_section2a_list2': '会社名および役職',
            'privacy_section2a_list3': '技術的要件およびプロジェクト情報',
            'privacy_section2a_list4': 'その他、お客様が当社との通信において任意に提供される情報',

            'privacy_section2b_title': '2.2 自動的に収集される情報',
            'privacy_section2b_content': '当社ウェブサイトにアクセスされる際、Cookie（クッキー）や類似の追跡技術を通じて、以下のような情報を自動的に収集する場合があります：',
            'privacy_section2b_list1': 'デバイス情報（ブラウザの種類、オペレーティングシステム）',
            'privacy_section2b_list2': 'IPアドレスおよびおおよその位置情報',
            'privacy_section2b_list3': '訪問ページおよび当サイトでの滞在時間',
            'privacy_section2b_list4': '参照元ウェブサイトまたは検索キーワード',

            'privacy_section3_title': '3. 情報の利用目的',
            'privacy_section3_content': '収集した情報は、以下の目的で利用します：',
            'privacy_section3_list1': 'お問い合わせへの対応およびご請求いただいた情報の提供',
            'privacy_section3_list2': '見積もり、サンプル、またはサービスに関するご要望の処理および遂行',
            'privacy_section3_list3': '当社ウェブサイトの機能およびユーザー体験の向上',
            'privacy_section3_list4': 'ウェブサイト利用状況の分析およびマーケティング活動の最適化',
            'privacy_section3_list5': '法的義務の遵守および当社の法的権利の保護',
            'privacy_section3_list6': '関連する技術情報、更新情報、ニュースレターの送付（お客様の同意がある場合）',

            'privacy_section4_title': '4. 処理の法的根拠',
            'privacy_section4_content': '当社は、以下の法的根拠の一つまたは複数に基づき、お客様の個人情報を処理します：',
            'privacy_section4_list1': '同意：お客様が情報処理について明示的な同意を与えられた場合',
            'privacy_section4_list2': '契約履行の必要性：お客様との契約を履行するために処理が必要な場合',
            'privacy_section4_list3': '正当な利益：当社の正当な事業上の利益のために処理が必要な場合',
            'privacy_section4_list4': '法的遵守：法的義務を遵守するために処理が必要な場合',

            'privacy_section5_title': '5. データの共有および開示',
            'privacy_section5_content': '当社は、お客様の個人情報を第三者に販売、交換、貸与することはありません。以下の場合に情報を共有する場合があります：',
            'privacy_section5_list1': '当社ウェブサイトおよび事業の運営を支援するサービスプロバイダー',
            'privacy_section5_list2': '法律で要求される場合、または当社の権利を保護する必要がある場合の法執行機関',
            'privacy_section5_list3': 'ウェブサイト利用状況を把握するための第三者アナリティクスプロバイダー（Google Analytics等）',
            'privacy_section5_note': '当社は、お客様のデータにアクセスするいかなる第三者も、適用されるデータ保護法に従った適切な保護を提供することを確保します。',

            'privacy_section6_title': '6. 国際データ移転',
            'privacy_section6_content': '当社は国際的な顧客にサービスを提供するグローバル企業として、お客様の情報はお客様の居住国以外の国に移転され、処理される場合があります。当社は、標準契約条項等の適切な保護措置を実施し、データがどこで処理されても十分な保護を受けることを確保します。',

            'privacy_section7_title': '7. データセキュリティ',
            'privacy_section7_content': '当社は、お客様の個人情報を不正アクセス、改ざん、開示、破壊から保護するために、適切な技術的および組織的措置を実施します。これらの措置には以下が含まれます：',
            'privacy_section7_list1': '送信中および保存中の機微データの暗号化',
            'privacy_section7_list2': '定期的なセキュリティ評価および更新',
            'privacy_section7_list3': 'アクセス制御および認証メカニズム',
            'privacy_section7_list4': 'データ保護のベストプラクティスに関する従業員研修',

            'privacy_section8_title': '8. データの保存期間',
            'privacy_section8_content': '当社は、収集目的を達成するために必要な期間、および法的、会計的、報告上の要件を満たすために必要な期間のみ、お客様の個人情報を保持します。通常、連絡先情報は継続的なビジネス関係がある間、およびその後は追跡調査に対応するため合理的な期間保持します。',

            'privacy_section9_title': '9. お客様の権利',
            'privacy_section9_content': 'お客様の所在地および適用される法律に応じて、個人情報に関して以下の権利を有する場合があります：',
            'privacy_section9_list1': '個人情報へのアクセス権およびその写しの取得権',
            'privacy_section9_list2': '不正確または不完全な情報の修正を求める権利',
            'privacy_section9_list3': '個人情報の削除を求める権利',
            'privacy_section9_list4': '特定の処理活動の制限または異議を申し立てる権利',
            'privacy_section9_list5': 'データのポータビリティに関する権利（適用される場合）',
            'privacy_section9_list6': 'いつでも同意を撤回する権利',
            'privacy_section9_note': 'これらの権利を行使される場合は、下記「14. お問い合わせ」に記載の連絡先よりご連絡ください。',

            'privacy_section10_title': '10. Cookie（クッキー）および追跡技術',
            'privacy_section10_content': '当社ウェブサイトは、ユーザー体験の向上およびウェブサイトトラフィックの分析のために、Cookieおよび類似の技術を利用しています。利用するものは以下の通りです：',
            'privacy_section10_list1': '必須Cookie：ウェブサイトの基本機能に必要なもの',
            'privacy_section10_list2': '分析用Cookie：訪問者が当サイトをどのように利用するかを理解するため（Google Analytics）',
            'privacy_section10_list3': '設定用Cookie：お客様の設定や嗜好を記憶するため',
            'privacy_section10_note': 'お客様はブラウザの設定を通じてCookieの設定を管理できます。ただし、特定のCookieを無効にすると、ウェブサイトの機能に影響が出る可能性があります。',

            'privacy_google_analytics_title': 'Google Analyticsについて',
            'privacy_google_analytics_content': '当社は、訪問者が当社ウェブサイトとどのようにやり取りするかを理解するためにGoogle Analyticsを利用しています。Google Analyticsは情報を匿名で収集し、個人を特定することなくウェブサイトのトレンドを報告します。Google Analytics オプトアウト アドオンをインストールすることで、Google Analytics からのデータ収集を無効にできます。',

            'privacy_section11_title': '11. 子供のプライバシー',
            'privacy_section11_content': '当社ウェブサイトは16歳未満の子供を対象としたものではなく、故意に子供から個人情報を収集することはありません。子供からの情報収集があったとお考えの場合は、直ちに当社までご連絡ください。',

            'privacy_section12_title': '12. 第三者サイトへのリンク',
            'privacy_section12_content': '当社ウェブサイトには、第三者運営のウェブサイトへのリンクが含まれる場合があります。本プライバシーポリシーは当社ウェブサイトにのみ適用されます。当社は、第三者サイトのプライバシー慣行またはコンテンツについて責任を負いません。訪問される第三者サイトのプライバシーポリシーを確認されることをお勧めします。',

            'privacy_section13_title': '13. プライバシーポリシーの変更',
            'privacy_section13_content': '当社は、慣行または法的要件の変更を反映するため、本プライバシーポリシーを随時更新する場合があります。重要な変更がある場合は、ウェブサイト上に更新されたポリシーを新しい発効日とともに掲載することで通知します。定期的に本プライバシーポリシーをご確認ください。',

            'privacy_section14_title': '14. お問い合わせ',
            'privacy_section14_content': '本プライバシーポリシーまたは当社のデータ取り扱いに関するご質問、懸念、ご要望がございましたら、以下の連絡先までお問い合わせください：',
            'privacy_contact_title': 'Jimei Materials Co., Ltd.',
            'privacy_contact_address': '中国 広東省 深圳市 宝安区 新橋街道 茘林坡坑 浩森第一工業区 518104<br>Haosan First Industrial Zone, Linpokeng, Xinqiao Street, Bao\'an District, Shenzhen, Guangdong, China 518104',
            'privacy_contact_email': 'yfu@jimei-materials.com',
            'privacy_contact_phone': '+86-147-4537-3293',
            'privacy_contact_hours': '営業時間：月曜日～金曜日 8:00 ～ 18:00 (GMT+8)',

            'privacy_section15_title': '15. 苦情・通報',
            'privacy_section15_content': '当社の個人情報取り扱いについて懸念がおありの場合は、まず当社にご連絡いただき、対応させていただきます。また、お客様は、お客様の管轄区域の関連データ保護当局に苦情を申し立てる権利を有します。',

            'privacy_footer_note': '本プライバシーポリシーは英語で作成されています。英語版と翻訳版に齟齬がある場合、英語版が優先します。',

            // CTA セクション
            'privacy_cta_title': 'プライバシーポリシーについてご質問は？',
            'privacy_cta_description': '当社チームは、お客様の情報をどのように保護しているかご説明し、お持ちの懸念に対応いたします。',
            'btn_contact_us': 'お問い合わせ',

            // フッター
            'footer_description': '2016年設立。パワーエレクトロニクスおよび熱マネジメント用途向けセラミックメタライゼーション基板の主力メーカー。ISO 14001:2015認証取得、グローバルな製造能力を有します。',
            'footer_products': '製品',
            'footer_company': '会社情報',
            'footer_contact': '連絡先情報',
            'footer_address': '中国 広東省 深圳市 宝安区 新橋街道 茘林坡坑 浩森第一工業区',
            'footer_hours': '月～金: 8:00 - 18:00 (GMT+8)',
            'footer_languages': '対応言語: 英語、中国語、日本語、韓国語、ドイツ語',
            'footer_rights': 'All rights reserved.',
            'footer_privacy': 'プライバシーポリシー',
            'footer_terms': '利用規約',
            'footer_sitemap': 'サイトマップ'
        },
        ko: {
            // Page meta
            'privacy_page_title': '개인정보 처리방침 | Jimei Materials - 세라믹 기판 제조업체',
            'privacy_meta_description': 'Jimei Materials의 개인정보 처리방침입니다. 당사가 데이터 보호 규정을 준수하며 귀하의 개인정보를 어떻게 수집, 사용 및 보호하는지 알아보십시오.',

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
            'privacy_main_title': '개인정보 처리방침',
            'privacy_subtitle': '귀하의 개인정보 보호에 대한 당사의 약속',
            'breadcrumb_privacy': '개인정보 처리방침',
            'privacy_last_updated': '최종 업데이트:',
            'privacy_last_updated_date': '2025년 12월 19일',
            'privacy_intro_note': '본 개인정보 처리방침은 Jimei Materials Co., Ltd.(이하 "당사", "우리")가 귀하가 당사 웹사이트(www.jimei-materials.com)를 방문할 때 귀하의 개인정보를 어떻게 수집, 사용 및 보호하는지를 설명합니다.',

            // Sections
            'privacy_section1_title': '1. 서론',
            'privacy_section1_content': 'Jimei Materials Co., Ltd.는 귀하의 개인정보 보호와 안전을 최우선으로 합니다. 본 개인정보 처리방침은 귀하가 당사 웹사이트를 방문하거나 당사의 서비스를 이용할 때 당사가 귀하의 정보를 수집, 사용, 공개 및 보호하는 방법을 설명합니다. 당사는 중국의 개인정보보호법(PIPL) 및 기타 관련 국제 규정을 포함하여 적용 가능한 데이터 보호 법규를 준수합니다.',

            'privacy_section2_title': '2. 수집하는 정보',
            'privacy_section2a_title': '2.1 귀하가 직접 제공하는 정보',
            'privacy_section2a_content': '귀하가 당사 웹사이트와 상호작용할 때, 특히 연락처 양식을 통해 다음 정보를 수집할 수 있습니다:',
            'privacy_section2a_list1': '성명 및 연락처 정보(이메일 주소, 전화번호)',
            'privacy_section2a_list2': '회사명 및 직함',
            'privacy_section2a_list3': '기술 요구사항 및 프로젝트 정보',
            'privacy_section2a_list4': '당사와의 의사소통 과정에서 귀하가 자발적으로 제공하는 기타 정보',

            'privacy_section2b_title': '2.2 자동으로 수집되는 정보',
            'privacy_section2b_content': '귀하가 당사 웹사이트를 방문할 때, 쿠키 및 유사한 추적 기술을 통해 다음과 같은 정보를 자동으로 수집할 수 있습니다:',
            'privacy_section2b_list1': '기기 정보(브라우저 유형, 운영 체제)',
            'privacy_section2b_list2': 'IP 주소 및 대략적 위치 정보',
            'privacy_section2b_list3': '방문한 페이지 및 웹사이트 체류 시간',
            'privacy_section2b_list4': '유입 웹사이트 또는 검색어',

            'privacy_section3_title': '3. 정보 사용 목적',
            'privacy_section3_content': '당사는 수집한 정보를 다음과 같은 목적으로 사용합니다:',
            'privacy_section3_list1': '귀하의 문의에 응답하고 요청된 정보를 제공하기 위해',
            'privacy_section3_list2': '견적, 샘플 또는 서비스 요청을 처리 및 이행하기 위해',
            'privacy_section3_list3': '당사 웹사이트 기능 및 사용자 경험을 개선하기 위해',
            'privacy_section3_list4': '웹사이트 사용 현황을 분석하고 마케팅 활동을 최적화하기 위해',
            'privacy_section3_list5': '법적 의무를 준수하고 당사의 법적 권리를 보호하기 위해',
            'privacy_section3_list6': '(귀하의 동의 하에) 관련 기술 정보, 업데이트 및 뉴스레터를 발송하기 위해',

            'privacy_section4_title': '4. 처리의 법적 근거',
            'privacy_section4_content': '당사는 귀하의 개인정보를 다음 법적 근거 중 하나 이상에 기반하여 처리합니다:',
            'privacy_section4_list1': '동의: 귀하가 당사에 정보 처리에 대한 명시적 동의를 부여한 경우',
            'privacy_section4_list2': '계약 이행의 필요성: 귀하와의 계약 이행에 정보 처리가 필수적인 경우',
            'privacy_section4_list3': '합법적 이익: 당사의 정당한 사업적 이익을 위해 정보 처리가 필수적인 경우',
            'privacy_section4_list4': '법적 준수 의무: 법적 의무 준수를 위해 정보 처리가 필수적인 경우',

            'privacy_section5_title': '5. 데이터 공유 및 제공',
            'privacy_section5_content': '당사는 귀하의 개인정보를 제3자에게 판매, 거래 또는 대여하지 않습니다. 당사는 귀하의 정보를 다음과 같은 경우에 공유할 수 있습니다:',
            'privacy_section5_list1': '당사 웹사이트 및 사업 운영을 지원하는 서비스 제공업체',
            'privacy_section5_list2': '법률에 의해 요구되거나 당사의 권리를 보호하기 위해 필요한 경우 법적 기관',
            'privacy_section5_list3': '웹사이트 사용 현황을 파악하기 위한 제3자 분석 제공업체(Google Analytics 등)',
            'privacy_section5_note': '당사는 귀하의 데이터에 접근하는 모든 제3자가 적용 가능한 데이터 보호 법규에 따라 적절한 보호 조치를 제공하도록 보장합니다.',

            'privacy_section6_title': '6. 국제적 데이터 전송',
            'privacy_section6_content': '당사는 국제적 고객에게 서비스를 제공하는 글로벌 기업으로서, 귀하의 정보는 귀하의 거주지 이외의 국가로 전송 및 처리될 수 있습니다. 당사는 표준계약조항과 같은 적절한 보호 장치를 구현하여 정보가 처리되는 장소와 무관하게 귀하의 데이터가 적절히 보호되도록 합니다.',

            'privacy_section7_title': '7. 데이터 보안',
            'privacy_section7_content': '당사는 귀하의 개인정보가 무단 접근, 변경, 공개 또는 파괴로부터 보호되도록 적절한 기술적 및 조직적 조치를 구현합니다. 이러한 조치에는 다음이 포함됩니다:',
            'privacy_section7_list1': '전송 중 및 저장 중인 민감한 데이터의 암호화',
            'privacy_section7_list2': '정기적인 보안 평가 및 업데이트',
            'privacy_section7_list3': '접근 제어 및 인증 메커니즘',
            'privacy_section7_list4': '데이터 보호 모범 사례에 대한 직원 교육',

            'privacy_section8_title': '8. 데이터 보유',
            'privacy_section8_content': '당사는 귀하의 개인정보를 수집 목적을 달성하는 데 필요한 기간 동안만 보유하며, 여기에는 법적, 회계적 또는 보고 요건을 충족시키기 위한 목적도 포함됩니다. 일반적으로 당사는 활성적인 비즈니스 관계를 위한 연락처 정보와 후속 문의를 처리하기 위한 합리적인 기간 동안 해당 정보를 보유합니다.',

            'privacy_section9_title': '9. 귀하의 권리',
            'privacy_section9_content': '귀하의 위치 및 적용 가능한 법률에 따라 귀하의 개인정보에 대해 다음과 같은 권리를 가질 수 있습니다:',
            'privacy_section9_list1': '개인정보에 대한 접근 및 사본 획득 권리',
            'privacy_section9_list2': '부정확하거나 불완전한 정보 정정 권리',
            'privacy_section9_list3': '개인정보 삭제 요청 권리',
            'privacy_section9_list4': '특정 처리 활동에 대한 제한 또는 이의 제기 권리',
            'privacy_section9_list5': '데이터 이전성 권리(해당되는 경우)',
            'privacy_section9_list6': '동의를 언제든지 철회할 수 있는 권리',
            'privacy_section9_note': '이러한 권리를 행사하려면 아래 "문의하기" 섹션에 제공된 정보를 사용하여 당사에 문의하십시오.',

            'privacy_section10_title': '10. 쿠키 및 추적 기술',
            'privacy_section10_content': '당사 웹사이트는 사용자 경험을 향상시키고 웹사이트 트래픽을 분석하기 위해 쿠키 및 유사한 기술을 사용합니다. 당사는 다음을 사용합니다:',
            'privacy_section10_list1': '필수 쿠키: 기본적인 웹사이트 기능을 위해 필요',
            'privacy_section10_list2': '분석 쿠키: 방문자가 당사 웹사이트를 어떻게 사용하는지 이해하기 위해(Google Analytics)',
            'privacy_section10_list3': '선호도 쿠키: 귀하의 설정과 선호도를 기억하기 위해',
            'privacy_section10_note': '귀하는 브라우저 환경설정을 통해 쿠키 설정을 제어할 수 있습니다. 그러나 특정 쿠키를 비활성화하면 웹사이트 기능에 영향을 미칠 수 있습니다.',

            'privacy_google_analytics_title': 'Google Analytics',
            'privacy_google_analytics_content': '당사는 방문자가 당사 웹사이트와 어떻게 상호작용하는지 이해하기 위해 Google Analytics를 사용합니다. Google Analytics는 정보를 익명으로 수집하며 개별 방문자를 식별하지 않고 웹사이트 트렌드를 보고합니다. Google Analytics에서 수집하는 정보를 거부하려면 Google Analytics Opt-out Browser Add-on을 설치하시기 바랍니다.',

            'privacy_section11_title': '11. 아동의 개인정보 보호',
            'privacy_section11_content': '당사 웹사이트는 16세 미만의 아동을 대상으로 하지 않으며, 당사는 고의로 아동으로부터 개인정보를 수집하지 않습니다. 만약 당사가 아동으로부터 정보를 수집하였다고 생각되시면 즉시 당사에 연락해 주십시오.',

            'privacy_section12_title': '12. 제3자 링크',
            'privacy_section12_content': '당사 웹사이트에는 제3자 웹사이트로의 링크가 포함될 수 있습니다. 본 개인정보 처리방침은 당사 웹사이트에만 적용됩니다. 당사는 제3자 웹사이트의 개인정보 보호 관행이나 콘텐츠에 대해 책임을 지지 않습니다. 귀하가 방문하는 제3자 사이트의 개인정보 처리방침을 검토하시기 바랍니다.',

            'privacy_section13_title': '13. 개인정보 처리방침 변경',
            'privacy_section13_content': '당사는 관행 또는 법적 요구사항의 변경을 반영하기 위해 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 당사는 웹사이트에 새로운 효력 발생일과 함께 업데이트된 정책을 게시하여 중요한 변경 사항을 알려드릴 것입니다. 본 개인정보 처리방침을 정기적으로 검토하시기를 권장합니다.',

            'privacy_section14_title': '14. 문의하기',
            'privacy_section14_content': '본 개인정보 처리방침 또는 당사의 데이터 처리 관행에 대해 질문, 우려사항 또는 요청이 있으시면 다음 연락처를 통해 당사에 문의하십시오:',
            'privacy_contact_title': 'Jimei Materials Co., Ltd.',
            'privacy_contact_address': '중국 광동성 심천시 바오안구 신차오 가도 호삼 임포갱 제1공업구<br>우편번호 518104',
            'privacy_contact_email': 'yfu@jimei-materials.com',
            'privacy_contact_phone': '+86-147-4537-3293',
            'privacy_contact_hours': '영업 시간: 월요일~금요일, 오전 8시 ~ 오후 6시 (GMT+8)',

            'privacy_section15_title': '15. 불만사항',
            'privacy_section15_content': '귀하의 개인정보 처리 방식에 대해 우려사항이 있으시면 먼저 당사에 연락하여 귀하의 우려사항을 해결할 수 있도록 하십시오. 귀하에게는 관할 지역의 관련 데이터 보호 기관에 불만을 제기할 권리도 있습니다.',

            'privacy_footer_note': '본 개인정보 처리방침은 영어로 작성되었습니다. 영어 버전과 번역본 사이에 불일치가 있는 경우, 영어 버전이 우선합니다.',

            // CTA Section
            'privacy_cta_title': '개인정보 처리방침에 대해 질문이 있으십니까?',
            'privacy_cta_description': '당사 팀은 당사가 귀하의 정보를 어떻게 보호하는지 이해시키고 귀하가 가질 수 있는 모든 우려사항을 해결하는 데 도움을 드릴 수 있습니다.',
            'btn_contact_us': '문의하기',

            //Footer
            "footer_description": "2016년 설립 이래 파워 일렉트로닉스 및 열 관리 애플리케이션을 위한 세라믹 금속화 기판의 선도적인 제조업체입니다. ISO 14001:2015 인증을 보유한 글로벌 생산 능력을 갖추고 있습니다.",
            "footer_products": "제품",
            "footer_company": "회사",
            "footer_contact": "연락처 정보",
            "footer_address": "중국 광동성 심천시 바오안구 신차오 가도 호삼 임포갱 제1공업구",
            "footer_hours": "월-금: 오전 8시 - 오후 6시 (GMT+8)",
            "footer_languages": "지원 언어: 영어, 중국어, 일본어, 한국어, 독일어",
            "footer_rights": "All rights reserved.",
            "footer_privacy": "개인정보 처리방침",
            "footer_terms": "서비스 이용약관",
            "footer_sitemap": "사이트맵"
        },
        de: {
            // Page meta
            'privacy_page_title': 'Datenschutzerklärung | Jimei Materials - Hersteller von Keramiksubstraten',
            'privacy_meta_description': 'Datenschutzerklärung der Jimei Materials. Erfahren Sie, wie wir Ihre personenbezogenen Daten erfassen, nutzen und schützen – im Einklang mit den Datenschutzvorschriften.',

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
            'privacy_main_title': 'Datenschutzerklärung',
            'privacy_subtitle': 'Unser Einsatz für den Schutz Ihrer personenbezogenen Daten',
            'breadcrumb_privacy': 'Datenschutz',
            'privacy_last_updated': 'Zuletzt aktualisiert:',
            'privacy_last_updated_date': '19. Dezember 2025',
            'privacy_intro_note': 'Diese Datenschutzerklärung informiert Sie über die Verarbeitung Ihrer personenbezogenen Daten durch die Jimei Materials Co., Ltd. (nachfolgend "wir" oder "Verantwortlicher") beim Besuch unserer Website www.jimei-materials.com.',

            // Sections
            'privacy_section1_title': '1. Einleitung',
            'privacy_section1_content': 'Die Jimei Materials Co., Ltd. verpflichtet sich, den Schutz und die Sicherheit Ihrer personenbezogenen Daten zu gewährleisten. Diese Datenschutzerklärung erläutert, wie wir Ihre Daten erfassen, verwenden, offenlegen und schützen, wenn Sie unsere Website besuchen oder unsere Dienstleistungen in Anspruch nehmen. Wir verarbeiten personenbezogene Daten im Einklang mit den geltenden Datenschutzvorschriften, darunter das chinesische Gesetz zum Schutz persönlicher Informationen (Personal Information Protection Law, PIPL) sowie andere relevante internationale Vorschriften wie die EU-Datenschutz-Grundverordnung (DSGVO).',

            'privacy_section2_title': '2. Von uns erfasste Daten',
            'privacy_section2a_title': '2.1 Direkt von Ihnen bereitgestellte Daten',
            'privacy_section2a_content': 'Wenn Sie mit unserer Website interagieren, insbesondere über unsere Kontaktformulare, erfassen wir möglicherweise:',
            'privacy_section2a_list1': 'Vollständigen Namen und Kontaktdaten (E-Mail-Adresse, Telefonnummer)',
            'privacy_section2a_list2': 'Firmenname und Position',
            'privacy_section2a_list3': 'Technische Anforderungen und Projektinformationen',
            'privacy_section2a_list4': 'Alle sonstigen Informationen, die Sie uns freiwillig in Ihrer Kommunikation mitteilen',

            'privacy_section2b_title': '2.2 Automatisch erfasste Daten',
            'privacy_section2b_content': 'Wenn Sie unsere Website besuchen, erfassen wir automatisch bestimmte Informationen durch Cookies und ähnliche Tracking-Technologien:',
            'privacy_section2b_list1': 'Geräteinformationen (Browsertyp, Betriebssystem)',
            'privacy_section2b_list2': 'IP-Adresse und ungefährer Standort',
            'privacy_section2b_list3': 'Besuchte Seiten und Verweildauer auf unserer Website',
            'privacy_section2b_list4': 'Verweisende Website oder Suchbegriffe',

            'privacy_section3_title': '3. Zwecke der Datenverarbeitung',
            'privacy_section3_content': 'Wir verwenden die erfassten Daten für folgende Zwecke:',
            'privacy_section3_list1': 'Zur Beantwortung Ihrer Anfragen und Bereitstellung der angeforderten Informationen',
            'privacy_section3_list2': 'Zur Abwicklung und Erfüllung Ihrer Anfragen für Angebote, Muster oder Dienstleistungen',
            'privacy_section3_list3': 'Zur Verbesserung der Funktionalität und Benutzererfahrung unserer Website',
            'privacy_section3_list4': 'Zur Analyse der Websitenutzung und Optimierung unserer Marketingmaßnahmen',
            'privacy_section3_list5': 'Zur Erfüllung gesetzlicher Verpflichtungen und zum Schutz unserer berechtigten Rechtsinteressen',
            'privacy_section3_list6': 'Zur Zusendung von relevanten technischen Informationen, Updates und Newsletter (jeweils nur mit Ihrer Einwilligung)',

            'privacy_section4_title': '4. Rechtsgrundlage der Verarbeitung',
            'privacy_section4_content': 'Wir verarbeiten Ihre personenbezogenen Daten auf Grundlage einer oder mehrerer der folgenden Rechtsgrundlagen:',
            'privacy_section4_list1': 'Einwilligung: Wenn Sie uns eine ausdrückliche Einwilligung zur Verarbeitung Ihrer Daten erteilt haben[citation:3]',
            'privacy_section4_list2': 'Vertragserfüllung: Wenn die Verarbeitung zur Erfüllung eines Vertrags mit Ihnen erforderlich ist',
            'privacy_section4_list3': 'Berechtigte Interessen: Wenn die Verarbeitung für unsere berechtigten geschäftlichen Interessen erforderlich ist',
            'privacy_section4_list4': 'Gesetzliche Verpflichtung: Wenn die Verarbeitung zur Erfüllung gesetzlicher Pflichten erforderlich ist',

            'privacy_section5_title': '5. Datenweitergabe und Offenlegung',
            'privacy_section5_content': 'Wir verkaufen, handeln nicht mit oder vermieten Ihre personenbezogenen Daten an Dritte. Wir geben Ihre Daten möglicherweise an folgende Stellen weiter:',
            'privacy_section5_list1': 'Dienstleister, die uns beim Betrieb unserer Website und unseres Geschäfts unterstützen (Auftragsverarbeiter)',
            'privacy_section5_list2': 'Strafverfolgungsbehörden, wenn dies gesetzlich vorgeschrieben ist oder zum Schutz unserer Rechte erforderlich ist',
            'privacy_section5_list3': 'Drittanbieter von Analysediensten (wie Google Analytics), um die Websitenutzung zu verstehen',
            'privacy_section5_note': 'Wir stellen sicher, dass alle Auftragsverarbeiter vertraglich zu einem angemessenen Datenschutzniveau gemäß den anwendbaren Gesetzen verpflichtet sind[citation:7].',

            'privacy_section6_title': '6. Internationale Datenübermittlungen',
            'privacy_section6_content': 'Als globales Unternehmen mit internationalen Kunden können Ihre Daten in Länder außerhalb Ihres Wohnsitzlandes übermittelt und dort verarbeitet werden. Wir setzen angemessene Garantien wie Standardvertragsklauseln ein, um sicherzustellen, dass Ihre Daten unabhängig vom Verarbeitungsort ein angemessenes Schutzniveau erhalten.',

            'privacy_section7_title': '7. Datensicherheit',
            'privacy_section7_content': 'Wir setzen geeignete technische und organisatorische Maßnahmen um, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen[citation:7]. Dazu gehören:',
            'privacy_section7_list1': 'Verschlüsselung sensibler Daten während der Übertragung und im Ruhezustand',
            'privacy_section7_list2': 'Regelmäßige Sicherheitsbewertungen und Updates',
            'privacy_section7_list3': 'Zugriffskontrollen und Authentifizierungsmechanismen',
            'privacy_section7_list4': 'Schulungen unserer Mitarbeiter zu Best Practices im Datenschutz',

            'privacy_section8_title': '8. Aufbewahrung von Daten',
            'privacy_section8_content': 'Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie es für die Erfüllung der Zwecke, für die sie erhoben wurden, notwendig ist, einschließlich zur Erfüllung gesetzlicher, buchhalterischer oder melderechtlicher Anforderungen[citation:1][citation:7]. In der Regel bewahren wir Kontaktdaten für aktive Geschäftsbeziehungen und für einen angemessenen Zeitraum danach auf, um eventuelle Folgeanfragen zu bearbeiten.',

            'privacy_section9_title': '9. Ihre Rechte',
            'privacy_section9_content': 'Abhängig von Ihrem Standort und den anwendbaren Gesetzen können Sie folgende Rechte in Bezug auf Ihre personenbezogenen Daten haben[citation:1]:',
            'privacy_section9_list1': 'Recht auf Auskunft und auf Kopie Ihrer personenbezogenen Daten',
            'privacy_section9_list2': 'Recht auf Berichtigung unrichtiger oder unvollständiger Daten',
            'privacy_section9_list3': 'Recht auf Löschung Ihrer personenbezogenen Daten',
            'privacy_section9_list4': 'Recht auf Einschränkung oder Widerspruch gegen bestimmte Verarbeitungsvorgänge',
            'privacy_section9_list5': 'Recht auf Datenübertragbarkeit (soweit anwendbar)',
            'privacy_section9_list6': 'Recht, Ihre Einwilligung jederzeit zu widerrufen',
            'privacy_section9_note': 'Um diese Rechte auszuüben, kontaktieren Sie uns bitte mit den Informationen aus dem Abschnitt "Kontakt" unten.',

            'privacy_section10_title': '10. Cookies und Tracking-Technologien',
            'privacy_section10_content': 'Unsere Website verwendet Cookies und ähnliche Technologien, um die Benutzererfahrung zu verbessern und den Websiteverkehr zu analysieren. Wir verwenden:',
            'privacy_section10_list1': 'Notwendige Cookies: Erforderlich für die grundlegende Website-Funktionalität',
            'privacy_section10_list2': 'Analyse-Cookies: Um zu verstehen, wie Besucher unsere Website nutzen (Google Analytics)',
            'privacy_section10_list3': 'Präferenz-Cookies: Um Ihre Einstellungen und Präferenzen zu speichern',
            'privacy_section10_note': 'Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers verhindern oder einschränken. Das Deaktivieren bestimmter Cookies kann jedoch die Funktionalität der Website beeinträchtigen.',

            'privacy_google_analytics_title': 'Google Analytics',
            'privacy_google_analytics_content': 'Wir verwenden Google Analytics, um zu verstehen, wie Besucher mit unserer Website interagieren. Google Analytics erfasst Informationen anonym und berichtet Website-Trends, ohne einzelne Besucher zu identifizieren. Sie können die Erfassung durch Google Analytics verhindern, indem Sie das Google Analytics Opt-out Browser Add-on installieren.',

            'privacy_section11_title': '11. Datenschutz für Kinder',
            'privacy_section11_content': 'Unsere Website richtet sich nicht an Kinder unter 16 Jahren, und wir sammeln nicht wissentlich personenbezogene Daten von Kindern. Wenn Sie glauben, dass wir Daten von einem Kind erhoben haben, kontaktieren Sie uns bitte umgehend.',

            'privacy_section12_title': '12. Links zu Drittanbietern',
            'privacy_section12_content': 'Unsere Website kann Links zu Websites Dritter enthalten. Diese Datenschutzerklärung gilt nur für unsere eigene Website. Wir sind nicht verantwortlich für die Datenschutzpraktiken oder den Inhalt von Websites Dritter. Wir empfehlen Ihnen, die Datenschutzrichtlinien aller besuchten Websites Dritter zu prüfen.',

            'privacy_section13_title': '13. Änderungen dieser Datenschutzerklärung',
            'privacy_section13_content': 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen in unseren Praktiken oder gesetzlichen Anforderungen Rechnung zu tragen[citation:10]. Über wesentliche Änderungen werden wir Sie informieren, indem wir die aktualisierte Richtlinie mit einem neuen Datum auf unserer Website veröffentlichen. Wir empfehlen Ihnen, diese Datenschutzerklärung regelmäßig zu überprüfen.',

            'privacy_section14_title': '14. Kontakt',
            'privacy_section14_content': 'Wenn Sie Fragen, Bedenken oder Anfragen zu dieser Datenschutzerklärung oder unseren Datenpraktiken haben, kontaktieren Sie uns bitte:',
            'privacy_contact_title': 'Jimei Materials Co., Ltd.',
            'privacy_contact_address': 'First Industrial Zone, Haosan Linpokeng, Xinqiao Street<br>Bao\'an District, Shenzhen, Guangdong, China 518104',
            'privacy_contact_email': 'yfu@jimei-materials.com',
            'privacy_contact_phone': '+86-147-4537-3293',
            'privacy_contact_hours': 'Geschäftszeiten: Montag-Freitag, 8:00 - 18:00 Uhr (GMT+8)',

            'privacy_section15_title': '15. Beschwerden',
            'privacy_section15_content': 'Wenn Sie Bedenken bezüglich unseres Umgangs mit Ihren personenbezogenen Daten haben, kontaktieren Sie uns bitte zuerst, damit wir Ihr Anliegen klären können. Sie haben auch das Recht, eine Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde in Ihrem Land einzureichen.',

            'privacy_footer_note': 'Diese Datenschutzerklärung ist in englischer Sprache verfasst. Im Falle von Unstimmigkeiten zwischen der englischen Version und Übersetzungen hat die englische Version Vorrang.',

            // CTA Section
            'privacy_cta_title': 'Fragen zu unserer Datenschutzerklärung?',
            'privacy_cta_description': 'Unser Team hilft Ihnen gerne zu verstehen, wie wir Ihre Daten schützen, und beantwortet Ihre Fragen.',
            'btn_contact_us': 'Kontakt aufnehmen',

            //Footer
            "footer_description": "Führender Hersteller von keramischen Metallisierungssubstraten für Leistungselektronik und Wärmemanagement-Anwendungen seit 2016. ISO 14001:2015 zertifiziert mit globalen Fertigungskapazitäten.",
            "footer_products": "Produkte",
            "footer_company": "Unternehmen",
            "footer_contact": "Kontakt",
            "footer_address": "First Industrial Zone, Haosan Linpokeng, Xinqiao Street, Bao'an District, Shenzhen, China",
            "footer_hours": "Mo-Fr: 8:00 - 18:00 Uhr (GMT+8)",
            "footer_languages": "Unterstützte Sprachen: Englisch, Chinesisch, Japanisch, Koreanisch, Deutsch",
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