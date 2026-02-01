(function () {
    'use strict';

    // Translations object
    const translations = {
        en: {
            // Page meta
            'terms_page_title': 'Terms of Service | Jimei Materials - Ceramic Substrate Manufacturer',
            'terms_meta_description': 'Terms of Service for Jimei Materials website and services. Legal terms governing the use of our website, products, and services.',

            // Content
            'terms_main_title': 'Terms of Service',
            'terms_subtitle': 'Legal terms governing your use of our website and services',
            'breadcrumb_terms': 'Terms of Service',

            // Notice Box
            'terms_notice_title': 'Important Legal Notice',
            'terms_notice_content': 'Please read these Terms of Service carefully before using our website. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our website or services.',

            // Update Date
            'terms_last_updated': 'Last Updated:',
            'terms_last_updated_date': 'January 1, 2026',
            'terms_intro_note': 'These Terms of Service ("Terms") govern your access to and use of the Jimei Materials Co., Ltd. website (www.jimei-materials.com) and our services. These Terms constitute a legally binding agreement between you and Jimei Materials Co., Ltd.',

            // Sections
            'terms_section1_title': '1. Acceptance of Terms',
            'terms_section1_content': 'By accessing, browsing, or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you are using our website on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.',

            'terms_section2_title': '2. Definitions',
            'terms_section2_content': 'In these Terms:',
            'terms_section2_list1': '"Company," "we," "us," or "our" refers to Jimei Materials Co., Ltd., a company registered in China.',
            'terms_section2_list2': '"Website" refers to www.jimei-materials.com and all associated subdomains.',
            'terms_section2_list3': '"Services" refers to all products, services, content, features, and functionality offered through our website.',
            'terms_section2_list4': '"User," "you," or "your" refers to any individual or entity accessing or using our website or services.',
            'terms_section2_list5': '"Content" includes all text, images, graphics, logos, videos, audio, data, and other materials available on our website.',

            'terms_section3_title': '3. Eligibility',
            'terms_section3_content': 'By using our website, you represent and warrant that:',
            'terms_section3_list1': 'You are at least 18 years old or have reached the age of majority in your jurisdiction',
            'terms_section3_list2': 'You have the legal capacity to enter into a binding agreement',
            'terms_section3_list3': 'You are not prohibited from receiving our services under applicable laws',
            'terms_section3_list4': 'All information you provide is accurate, current, and complete',

            'terms_section4_title': '4. Account Registration',
            'terms_section4_content': 'Certain features of our website may require you to create an account. When creating an account, you agree to:',
            'terms_section4_list1': 'Provide accurate, current, and complete information',
            'terms_section4_list2': 'Maintain the security of your account credentials',
            'terms_section4_list3': 'Notify us immediately of any unauthorized access or security breach',
            'terms_section4_list4': 'Accept responsibility for all activities under your account',
            'terms_section4_note': 'We reserve the right to suspend or terminate accounts that violate these Terms or are used for fraudulent activities.',

            'terms_section5_title': '5. Use of Website',
            'terms_section5_content': 'You agree to use our website only for lawful purposes and in accordance with these Terms. You shall not:',
            'terms_section5_list1': 'Use our website in any way that violates applicable laws or regulations',
            'terms_section5_list2': 'Engage in any fraudulent, deceptive, or harmful activities',
            'terms_section5_list3': 'Attempt to gain unauthorized access to our systems or networks',
            'terms_section5_list4': 'Interfere with or disrupt the operation of our website',
            'terms_section5_list5': 'Use any automated means to access or collect data from our website without permission',
            'terms_section5_list6': 'Upload or transmit viruses, malware, or other harmful code',
            'terms_section5_list7': 'Harass, abuse, or harm other users',

            'terms_section6_title': '6. Intellectual Property Rights',
            'terms_section6_content': 'All content, features, and functionality on our website are owned by Jimei Materials Co., Ltd., its licensors, or other providers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.',

            'terms_section6a_title': '6.1 Copyright',
            'terms_section6a_content': 'The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Jimei Materials Co., Ltd., its licensors, or other providers of such material and are protected by copyright laws.',

            'terms_section6b_title': '6.2 Trademarks',
            'terms_section6b_content': 'The Jimei Materials name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Jimei Materials Co., Ltd. or its affiliates or licensors. You must not use such marks without our prior written permission.',

            'terms_section6c_title': '6.3 Limited License',
            'terms_section6c_content': 'We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our website for personal, non-commercial purposes. This license does not include:',
            'terms_section6c_list1': 'Resale or commercial use of our website or its contents',
            'terms_section6c_list2': 'Collection and use of any product listings, descriptions, or prices',
            'terms_section6c_list3': 'Downloading or copying of account information for the benefit of another merchant',
            'terms_section6c_list4': 'Any use of data mining, robots, or similar data gathering and extraction tools',

            'terms_section7_title': '7. User Content',
            'terms_section7_content': 'Our website may allow you to submit content, including but not limited to comments, reviews, and inquiries ("User Content"). By submitting User Content, you:',
            'terms_section7_list1': 'Grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your User Content',
            'terms_section7_list2': 'Represent and warrant that you own or have the necessary rights to submit the User Content',
            'terms_section7_list3': 'Agree that User Content will not violate any third-party rights or applicable laws',
            'terms_section7_list4': 'Acknowledge that we are not responsible for User Content and may remove it at our discretion',

            'terms_section8_title': '8. Product Information and Quotations',
            'terms_section8_content': 'All product descriptions, specifications, and technical information on our website are provided for informational purposes only. We make reasonable efforts to ensure accuracy but do not guarantee that product descriptions or other content are accurate, complete, reliable, current, or error-free.',

            'terms_section8a_title': '8.1 Quotations and Orders',
            'terms_section8a_content': 'Quotations provided through our website are non-binding and subject to:',
            'terms_section8a_list1': 'Verification of technical specifications',
            'terms_section8a_list2': 'Availability of materials and production capacity',
            'terms_section8a_list3': 'Final written confirmation from our sales department',
            'terms_section8a_list4': 'Execution of a separate purchase agreement',

            'terms_section8b_title': '8.2 Export Controls',
            'terms_section8b_content': 'Our products and technology may be subject to export controls and sanctions laws. You agree to comply with all applicable export control regulations, including those of China, the United States, and other countries.',

            'terms_section9_title': '9. Third-Party Links',
            'terms_section9_content': 'Our website may contain links to third-party websites or services that are not owned or controlled by Jimei Materials. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Jimei Materials shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such websites or services.',

            'terms_section10_title': '10. Disclaimer of Warranties',
            'terms_section10_content': 'YOUR USE OF OUR WEBSITE AND SERVICES IS AT YOUR SOLE RISK. THE WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. JIMEI MATERIALS EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
            'terms_section10_content2': 'We do not warrant that:',
            'terms_section10_list1': 'The website will meet your specific requirements',
            'terms_section10_list2': 'The website will be uninterrupted, timely, secure, or error-free',
            'terms_section10_list3': 'The results that may be obtained from the use of the website will be accurate or reliable',
            'terms_section10_list4': 'The quality of any products, services, information, or other material purchased or obtained by you through the website will meet your expectations',

            'terms_section11_title': '11. Limitation of Liability',
            'terms_section11_content': 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, JIMEI MATERIALS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:',
            'terms_section11_list1': 'YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE WEBSITE',
            'terms_section11_list2': 'ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE WEBSITE',
            'terms_section11_list3': 'ANY CONTENT OBTAINED FROM THE WEBSITE',
            'terms_section11_list4': 'UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT',
            'terms_section11_content2': 'IN NO EVENT SHALL JIMEI MATERIALS\' TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT OF ONE HUNDRED UNITED STATES DOLLARS (USD 100.00).',

            'terms_section12_title': '12. Indemnification',
            'terms_section12_content': 'You agree to defend, indemnify, and hold harmless Jimei Materials Co., Ltd., its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising out of or relating to your violation of these Terms or your use of the website.',

            'terms_section13_title': '13. Termination',
            'terms_section13_content': 'We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the website will immediately cease.',

            'terms_section14_title': '14. Governing Law and Dispute Resolution',
            'terms_section14a_title': '14.1 Governing Law',
            'terms_section14a_content': 'These Terms shall be governed and construed in accordance with the laws of the People\'s Republic of China, without regard to its conflict of law provisions.',

            'terms_section14b_title': '14.2 Dispute Resolution',
            'terms_section14b_content': 'Any dispute, controversy, or claim arising out of or relating to these Terms shall be resolved through amicable negotiations. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may submit the dispute to the people\'s court having jurisdiction in Shenzhen, Guangdong, China.',

            'terms_section14c_title': '14.3 International Users',
            'terms_section14c_content': 'If you are accessing our website from outside China, you are responsible for compliance with local laws. We make no representation that materials on our website are appropriate or available for use in locations outside China.',

            'terms_section15_title': '15. Changes to Terms',
            'terms_section15_content': 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.',

            'terms_section16_title': '16. Severability',
            'terms_section16_content': 'If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. The invalid or unenforceable provision shall be replaced by a valid and enforceable provision that most closely achieves the intent of the original provision.',

            'terms_section17_title': '17. Entire Agreement',
            'terms_section17_content': 'These Terms constitute the entire agreement between you and Jimei Materials regarding our website and supersede and replace any prior agreements we might have had between us regarding the website.',

            'terms_section18_title': '18. Waiver',
            'terms_section18_content': 'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Jimei Materials.',

            'terms_section19_title': '19. Force Majeure',
            'terms_section19_content': 'We shall not be liable for any failure to perform our obligations under these Terms where such failure results from any cause beyond our reasonable control, including, without limitation, mechanical, electronic, or communications failure or degradation, acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.',

            'terms_section20_title': '20. Contact Information',
            'terms_section20_content': 'If you have any questions about these Terms, please contact us:',
            'terms_contact_title': 'Jimei Materials Co., Ltd.',
            'terms_contact_address': 'First Industrial Zone, Haosan Linpokeng, Xinqiao Street<br>Bao\'an District, Shenzhen, Guangdong, China 518104',
            'terms_contact_email': 'yfu@jimei-materials.com',
            'terms_contact_phone': '+86-147-4537-3293',
            'terms_contact_hours': 'Business Hours: Monday-Friday, 8:00 AM - 6:00 PM (GMT+8)',

            'terms_footer_note': 'These Terms of Service are written in English. In case of any discrepancies between the English version and translations, the English version shall prevail.',

            // CTA Section
            'terms_cta_title': 'Questions About Our Terms?',
            'terms_cta_description': 'Our legal team is available to address any questions or concerns you may have about our Terms of Service.',
            'btn_contact_us': 'Contact Us'
        },
        zh: {
            // Page meta
            'terms_page_title': '服务条款 | 集美材料 - 陶瓷基板制造商',
            'terms_meta_description': '集美材料网站与服务条款。规范使用我们网站、产品及服务的法律条款。',

            // Content
            'terms_main_title': '服务条款',
            'terms_subtitle': '规范您使用我们网站及服务的法律条款',
            'breadcrumb_terms': '服务条款',

            // Notice Box
            'terms_notice_title': '重要法律声明',
            'terms_notice_content': '在使用我们的网站前，请仔细阅读本服务条款。访问或使用我们的网站即表示您同意接受本条款的约束。如果您不同意本条款的任何部分，则不得使用我们的网站或服务。',

            // Update Date
            'terms_last_updated': '最后更新：',
            'terms_last_updated_date': '2026年1月1日',
            'terms_intro_note': '本《服务条款》（简称“条款”）规范您对集美材料有限公司网站 (www.jimei-materials.com) 及我们服务的访问和使用。本条款构成您与集美材料有限公司之间具有法律约束力的协议。',

            // Sections
            'terms_section1_title': '1. 条款接受',
            'terms_section1_content': '通过访问、浏览或使用我们的网站，即表示您确认已阅读、理解并同意受本《服务条款》的约束。如果您代表某一公司或其他法律实体使用我们的网站，您声明您有权使该实体受本条款约束。',

            'terms_section2_title': '2. 定义',
            'terms_section2_content': '在本条款中：',
            'terms_section2_list1': '“公司”、“我们”或“我方”指依据中国法律注册成立的集美材料有限公司。',
            'terms_section2_list2': '“网站”指 www.jimei-materials.com 及其所有关联子域名。',
            'terms_section2_list3': '“服务”指通过我们网站提供的所有产品、服务、内容、特性和功能。',
            'terms_section2_list4': '“用户”、“您”或“您的”指任何访问或使用我们网站或服务的个人或实体。',
            'terms_section2_list5': '“内容”包括我们网站上提供的所有文本、图像、图形、徽标、视频、音频、数据和其他材料。',

            'terms_section3_title': '3. 资格',
            'terms_section3_content': '使用我们的网站，即表示您声明并保证：',
            'terms_section3_list1': '您已年满18周岁，或已达到您所在司法管辖区的法定成年年龄',
            'terms_section3_list2': '您具有签订具有约束力协议的法律行为能力',
            'terms_section3_list3': '您未被适用法律禁止接收我们的服务',
            'terms_section3_list4': '您提供的所有信息均准确、最新且完整',

            'terms_section4_title': '4. 账户注册',
            'terms_section4_content': '我们网站的某些功能可能需要您创建账户。创建账户时，您同意：',
            'terms_section4_list1': '提供准确、最新且完整的信息',
            'terms_section4_list2': '维护您账户凭据的安全',
            'terms_section4_list3': '发现任何未经授权的访问或安全漏洞后立即通知我们',
            'terms_section4_list4': '对您账户下的所有活动承担责任',
            'terms_section4_note': '我们保留暂停或终止违反本条款或用于欺诈活动的账户的权利。',

            'terms_section5_title': '5. 网站使用',
            'terms_section5_content': '您同意仅出于合法目的并依据本条款使用我们的网站。您不得：',
            'terms_section5_list1': '以任何违反适用法律法规的方式使用我们的网站',
            'terms_section5_list2': '从事任何欺诈、欺骗或有害活动',
            'terms_section5_list3': '试图未经授权访问我们的系统或网络',
            'terms_section5_list4': '干扰或破坏我们网站的运行',
            'terms_section5_list5': '未经许可使用任何自动化手段从我们网站访问或收集数据',
            'terms_section5_list6': '上传或传播病毒、恶意软件或其他有害代码',
            'terms_section5_list7': '骚扰、辱骂或伤害其他用户',

            'terms_section6_title': '6. 知识产权',
            'terms_section6_content': '我们网站上的所有内容、特性和功能均为集美材料有限公司、其许可方或其他提供方所有，并受国际版权、商标、专利、商业秘密及其他知识产权法保护。',

            'terms_section6a_title': '6.1 版权',
            'terms_section6a_content': '本网站及其全部内容、特性和功能（包括但不限于所有信息、软件、文本、展示、图像、视频、音频及其设计、选择和编排）归集美材料有限公司、其许可方或此类材料的其他提供方所有，并受版权法保护。',

            'terms_section6b_title': '6.2 商标',
            'terms_section6b_content': '“集美材料”名称、徽标及所有相关名称、徽标、产品和服务名称、设计和标语均为集美材料有限公司或其关联公司或许可方的商标。未经我们事先书面许可，您不得使用此类标记。',

            'terms_section6c_title': '6.3 有限许可',
            'terms_section6c_content': '我们授予您一项有限的、非排他的、不可转让的、可撤销的许可，仅为个人非商业目的访问和使用我们的网站。此许可不包括：',
            'terms_section6c_list1': '转售或商业性使用我们的网站或其内容',
            'terms_section6c_list2': '收集和使用任何产品列表、描述或价格',
            'terms_section6c_list3': '为其他商家的利益下载或复制账户信息',
            'terms_section6c_list4': '任何数据挖掘、机器人或类似数据收集和提取工具的使用',

            'terms_section7_title': '7. 用户内容',
            'terms_section7_content': '我们的网站可能允许您提交内容，包括但不限于评论、评价和问询（“用户内容”）。通过提交用户内容，您：',
            'terms_section7_list1': '授予我们一项全球性、非独占的、免版税的许可，以使用、复制、修改、改编、发布、翻译和分发您的用户内容',
            'terms_section7_list2': '声明并保证您拥有或具有提交用户内容所必需的权利',
            'terms_section7_list3': '同意用户内容不会侵犯任何第三方权利或违反适用法律',
            'terms_section7_list4': '确认我们对用户内容不负责，并可能自行决定将其移除',

            'terms_section8_title': '8. 产品信息与报价',
            'terms_section8_content': '我们网站上的所有产品描述、规格和技术信息仅供参考。我们虽尽合理努力确保准确性，但不保证产品描述或其他内容是准确、完整、可靠、最新或无错误的。',

            'terms_section8a_title': '8.1 报价与订单',
            'terms_section8a_content': '通过我们网站提供的报价不具有约束力，并受制于以下条件：',
            'terms_section8a_list1': '技术规格的核实',
            'terms_section8a_list2': '材料供应与生产能力',
            'terms_section8a_list3': '我方销售部门的最终书面确认',
            'terms_section8a_list4': '单独采购协议的签订',

            'terms_section8b_title': '8.2 出口管制',
            'terms_section8b_content': '我们的产品和技术可能受出口管制和制裁法律的约束。您同意遵守所有适用的出口管制法规，包括中国、美国及其他国家的法规。',

            'terms_section9_title': '9. 第三方链接',
            'terms_section9_content': '我们的网站可能包含指向非集美材料所有或控制的第三方网站或服务的链接。我们对任何第三方网站或服务的内容、隐私政策或实践概不控制，也不承担任何责任。您承认并同意，对于因使用或依赖任何此类网站或服务上或通过其提供的任何此类内容、商品或服务而造成或据称造成的任何损害或损失，集美材料概不负责，无论直接或间接。',

            'terms_section10_title': '10. 免责声明',
            'terms_section10_content': '您使用我们的网站和服务风险自担。网站和服务按“原样”和“现有”基础提供。集美材料明确声明不提供任何形式的明示或暗示保证，包括但不限于对适销性、特定用途适用性和不侵权的暗示保证。',
            'terms_section10_content2': '我们不保证：',
            'terms_section10_list1': '网站将满足您的特定要求',
            'terms_section10_list2': '网站将不间断、及时、安全或无错误',
            'terms_section10_list3': '通过使用网站可能获得的结果将是准确或可靠的',
            'terms_section10_list4': '您通过网站购买或获得的任何产品、服务、信息或其他材料的质量将符合您的期望',

            'terms_section11_title': '11. 责任限制',
            'terms_section11_content': '在适用法律允许的最大范围内，对于因以下原因导致的任何间接、附带、特殊、后果性或惩罚性损害（包括但不限于利润、数据、使用、商誉或其他无形损失的损失），集美材料不承担任何责任：',
            'terms_section11_list1': '您访问或使用或无法访问或使用网站',
            'terms_section11_list2': '网站上任何第三方的任何行为或内容',
            'terms_section11_list3': '从网站获得的任何内容',
            'terms_section11_list4': '对您的传输或内容的未经授权访问、使用或更改',
            'terms_section11_content2': '在任何情况下，集美材料对您提出的所有索赔的总责任不得超过一百美元（USD 100.00）。',

            'terms_section12_title': '12. 赔偿',
            'terms_section12_content': '您同意为集美材料有限公司、其关联公司、许可方和服务提供商，及其各自的负责人、董事、员工、承包商、代理人、许可方、供应商、继承人和受让人进行辩护、赔偿并使其免受损害，赔偿范围包括因您违反本条款或使用网站而引起或与之相关的任何索赔、责任、损害、判决、裁决、损失、成本、开支或费用（包括合理的律师费）。',

            'terms_section13_title': '13. 终止',
            'terms_section13_content': '我们可随时因任何理由（包括但不限于您违反本条款）立即终止或暂停您对我们网站的访问，且不承担事先通知或任何责任。终止后，您使用网站的权利将立即停止。',

            'terms_section14_title': '14. 管辖法律与争议解决',
            'terms_section14a_title': '14.1 管辖法律',
            'terms_section14a_content': '本条款应受中华人民共和国法律管辖并据其解释，不适用其法律冲突规定。',

            'terms_section14b_title': '14.2 争议解决',
            'terms_section14b_content': '因本条款引起或与之相关的任何争议、纠纷或索赔，应通过友好协商解决。若争议在三十（30）日内无法通过协商解决，任何一方均可将该争议提交至中国广东省深圳市有管辖权的人民法院诉讼解决。',

            'terms_section14c_title': '14.3 国际用户',
            'terms_section14c_content': '如果您从中国境外访问我们的网站，您有责任遵守当地法律。我们并未声明我们网站上的材料适合或可供在中国境外使用。',

            'terms_section15_title': '15. 条款修改',
            'terms_section15_content': '我们保留随时自行决定修改或替换本条款的权利。如果修订属于重大变更，我们将在新条款生效前至少提前30天发出通知。何为重大变更将由我们自行决定。在该等修订生效后继续访问或使用我们的网站，即表示您同意受修订后的条款约束。',

            'terms_section16_title': '16. 可分割性',
            'terms_section16_content': '如果法院裁定本条款的任何规定无效或不可执行，本条款的其余规定仍将保持完全效力。无效或不可执行的规定应由最能实现原规定意图的有效且可执行的规定所取代。',

            'terms_section17_title': '17. 完整协议',
            'terms_section17_content': '本条款构成您与集美材料之间关于我们网站的完整协议，并取代和替换我们之间先前就网站达成的任何协议。',

            'terms_section18_title': '18. 弃权',
            'terms_section18_content': '我们未能执行本条款的任何权利或规定，不应被视为对该等权利的放弃。对该等权利或规定的任何弃权，仅在经集美材料正式授权代表书面签署后方为有效。',

            'terms_section19_title': '19. 不可抗力',
            'terms_section19_content': '对于因任何超出我们合理控制范围的原因（包括但不限于机械、电子或通信故障或降级、天灾、战争、恐怖主义、骚乱、禁运、民事或军事当局行为、火灾、洪水、事故、罢工、或运输设施、燃料、能源、劳动力或材料短缺）导致我们未能履行本条款项下义务的情况，我们不承担任何责任。',

            'terms_section20_title': '20. 联系信息',
            'terms_section20_content': '如果您对本条款有任何疑问，请通过以下方式联系我们：',
            'terms_contact_title': '集美材料有限公司',
            'terms_contact_address': '中国广东省深圳市宝安区新桥街道耗三林坡坑第一工业区 518104',
            'terms_contact_email': 'yfu@jimei-materials.com',
            'terms_contact_phone': '+86-147-4537-3293',
            'terms_contact_hours': '工作时间：周一至周五，上午8:00 - 下午6:00（北京时间 GMT+8）',

            'terms_footer_note': '本《服务条款》以英文书写。如英文版本与翻译版本之间存在任何差异，应以英文版本为准。',

            // CTA Section
            'terms_cta_title': '对我们的条款有疑问？',
            'terms_cta_description': '我们的法律团队可解答您对本《服务条款》的任何疑问或关切。',
            'btn_contact_us': '联系我们'
        },
        ja: {
            // ページメタ情報
            'terms_page_title': '利用規約 | Jimei Materials - セラミック基板メーカー',
            'terms_meta_description': 'Jimei Materialsのウェブサイトおよびサービスに関する利用規約。当社ウェブサイト、製品、サービスの利用を規定する法的条件です。',

            // 本文
            'terms_main_title': '利用規約',
            'terms_subtitle': '当社ウェブサイトおよびサービスのご利用に関する法的条件',
            'breadcrumb_terms': '利用規約',

            // 注意書きボックス
            'terms_notice_title': '重要な法的告知',
            'terms_notice_content': '本ウェブサイトをご利用になる前に、本利用規約をよくお読みください。本ウェブサイトにアクセスまたは利用することにより、お客様は本規約に拘束されることに同意したものとみなされます。本規約のいずれかの部分に同意できない場合は、当社のウェブサイトまたはサービスを利用してはなりません。',

            // 更新日
            'terms_last_updated': '最終更新日：',
            'terms_last_updated_date': '2026年1月1日',
            'terms_intro_note': '本利用規約（以下「本規約」）は、Jimei Materials Co., Ltd.（以下「当社」）のウェブサイト（www.jimei-materials.com）および当社サービスへのアクセスと利用を規定するものです。本規約は、お客様と当社との間の法的拘束力のある契約を構成します。',

            // セクション
            'terms_section1_title': '1. 規約の承諾',
            'terms_section1_content': '当社ウェブサイトへのアクセス、閲覧、または利用により、お客様は本利用規約を読み、理解し、これに拘束されることに同意したことを認めるものとします。お客様が会社その他の法的団体を代表して当社ウェブサイトを利用する場合、お客様は当該団体を本規約に拘束する権限を有することを表明するものとします。',

            'terms_section2_title': '2. 定義',
            'terms_section2_content': '本規約において：',
            'terms_section2_list1': '「当社」とは、中国に登録された会社であるJimei Materials Co., Ltd.を指します。',
            'terms_section2_list2': '「ウェブサイト」とは、www.jimei-materials.com及び全ての関連サブドメインを指します。',
            'terms_section2_list3': '「サービス」とは、当社ウェブサイトを通じて提供される全ての製品、サービス、コンテンツ、機能、および機能性を指します。',
            'terms_section2_list4': '「ユーザー」「お客様」とは、当社ウェブサイトまたはサービスにアクセスまたは利用する個人または団体を指します。',
            'terms_section2_list5': '「コンテンツ」とは、当社ウェブサイト上で利用可能な全てのテキスト、画像、図形、ロゴ、動画、音声、データ、その他の資料を含みます。',

            'terms_section3_title': '3. 利用資格',
            'terms_section3_content': '当社ウェブサイトを利用することにより、お客様は以下を表明し保証するものとします：',
            'terms_section3_list1': 'お客様が18歳以上である、またはお客様の管轄区域で成年に達していること',
            'terms_section3_list2': '拘束力のある契約を締結する法的能力を有すること',
            'terms_section3_list3': '適用される法律の下で当社のサービスを受けることを禁止されていないこと',
            'terms_section3_list4': '提供される全ての情報が正確、最新、かつ完全であること',

            'terms_section4_title': '4. アカウント登録',
            'terms_section4_content': '当社ウェブサイトの特定の機能では、アカウントの作成が必要な場合があります。アカウントを作成する際、お客様は以下に同意するものとします：',
            'terms_section4_list1': '正確、最新、かつ完全な情報を提供すること',
            'terms_section4_list2': 'お客様のアカウント認証情報のセキュリティを維持すること',
            'terms_section4_list3': '不正アクセスまたはセキュリティ侵害があった場合は直ちに当社に通知すること',
            'terms_section4_list4': 'お客様のアカウント下での全ての活動に対する責任を負うこと',
            'terms_section4_note': '当社は、本規約に違反する、または不正な活動に使用されたアカウントを停止または終了する権利を留保します。',

            'terms_section5_title': '5. ウェブサイトの利用',
            'terms_section5_content': 'お客様は、当社ウェブサイトを合法的な目的でのみ、かつ本規約に従って利用することに同意するものとします。お客様は以下を行ってはなりません：',
            'terms_section5_list1': '適用される法律または規制に違反する方法で当社ウェブサイトを利用すること',
            'terms_section5_list2': '詐欺的、欺瞞的、または有害な活動に従事すること',
            'terms_section5_list3': '当社のシステムまたはネットワークへの不正アクセスを試みること',
            'terms_section5_list4': '当社ウェブサイトの運営を妨害または混乱させること',
            'terms_section5_list5': '許可なく自動化された手段で当社ウェブサイトからデータにアクセスまたは収集すること',
            'terms_section5_list6': 'ウイルス、マルウェア、その他の有害なコードをアップロードまたは送信すること',
            'terms_section5_list7': '他のユーザーを嫌がらせ、虐待、または害すること',

            'terms_section6_title': '6. 知的財産権',
            'terms_section6_content': '当社ウェブサイト上のすべてのコンテンツ、機能、および機能性は、Jimei Materials Co., Ltd.、そのライセンサー、またはその他の提供者によって所有されており、国際的な著作権、商標、特許、営業秘密、その他の知的財産法によって保護されています。',

            'terms_section6a_title': '6.1 著作権',
            'terms_section6a_content': '本ウェブサイトおよびその全体のコンテンツ、機能、機能性（全ての情報、ソフトウェア、テキスト、表示、画像、動画、音声、およびそれらのデザイン、選択、配列を含みますがこれらに限定されません）は、Jimei Materials Co., Ltd.、そのライセンサー、または当該資料の他の提供者によって所有され、著作権法によって保護されています。',

            'terms_section6b_title': '6.2 商標',
            'terms_section6b_content': 'Jimei Materialsの名称、ロゴ、およびすべての関連する名称、ロゴ、製品およびサービス名、デザイン、スローガンは、Jimei Materials Co., Ltd. またはその関連会社もしくはライセンサーの商標です。お客様は、当社の事前の書面による許可なしに、これらの商標を使用してはなりません。',

            'terms_section6c_title': '6.3 限定ライセンス',
            'terms_section6c_content': '当社は、お客様に対し、個人的かつ非商業的目的で当社ウェブサイトにアクセスし利用するための、限定的、非独占的、譲渡不可、取消可能なライセンスを付与します。このライセンスには以下は含まれません：',
            'terms_section6c_list1': '当社ウェブサイトまたはそのコンテンツの転売または商業的利用',
            'terms_section6c_list2': '製品リスト、説明、または価格の収集および利用',
            'terms_section6c_list3': '他の販売業者の利益のためのアカウント情報のダウンロードまたは複製',
            'terms_section6c_list4': 'データマイニング、ロボット、または類似のデータ収集および抽出ツールのいかなる利用',

            'terms_section7_title': '7. ユーザーコンテンツ',
            'terms_section7_content': '当社ウェブサイトでは、コメント、レビュー、お問い合わせ等を含むコンテンツ（「ユーザーコンテンツ」）の投稿を許可する場合があります。ユーザーコンテンツを投稿することにより、お客様は以下を行うものとします：',
            'terms_section7_list1': '当社に対し、お客様のユーザーコンテンツを使用、複製、変更、翻案、公表、翻訳、および配布するための、世界的、非独占的、ロイヤルティフリーのライセンスを付与すること',
            'terms_section7_list2': 'お客様がユーザーコンテンツを投稿するために必要な権利を所有または有することを表明し保証すること',
            'terms_section7_list3': 'ユーザーコンテンツが第三者の権利または適用される法律に違反しないことに同意すること',
            'terms_section7_list4': '当社がユーザーコンテンツについて責任を負わず、当社の裁量によりこれを削除し得ることを認めること',

            'terms_section8_title': '8. 製品情報および見積もり',
            'terms_section8_content': '当社ウェブサイト上のすべての製品説明、仕様、および技術情報は、情報提供のみを目的としています。当社は正確性を確保するために合理的な努力を払いますが、製品説明またはその他のコンテンツが正確、完全、信頼できる、最新の、またはエラーのないものであることを保証するものではありません。',

            'terms_section8a_title': '8.1 見積もりおよび注文',
            'terms_section8a_content': '当社ウェブサイトを通じて提供される見積もりは拘束力のないものであり、以下に従うものとします：',
            'terms_section8a_list1': '技術仕様の確認',
            'terms_section8a_list2': '材料の入手可能性および生産能力',
            'terms_section8a_list3': '当社営業部門からの最終的な書面による確認',
            'terms_section8a_list4': '別途の購買契約書の締結',

            'terms_section8b_title': '8.2 輸出管理',
            'terms_section8b_content': '当社の製品および技術は、輸出管理および制裁法の対象となる場合があります。お客様は、中国、米国、その他の国々を含む、適用されるすべての輸出管理規制を遵守することに同意するものとします。',

            'terms_section9_title': '9. 第三者リンク',
            'terms_section9_content': '当社ウェブサイトには、Jimei Materialsが所有または管理していない第三者のウェブサイトまたはサービスへのリンクが含まれる場合があります。当社は、いかなる第三者のウェブサイトまたはサービスのコンテンツ、プライバシーポリシー、または慣行についても管理しておらず、責任を負いません。お客様は、かかるウェブサイトまたはサービス上でまたはそれらを通じて利用可能ないかなるコンテンツ、商品、またはサービスの利用または依存に起因または関連して生じた、または生じたと主張される損害または損失について、Jimei Materialsが直接的または間接的に責任を負わないことを認め同意するものとします。',

            'terms_section10_title': '10. 保証の否認',
            'terms_section10_content': '当社ウェブサイトおよびサービスのご利用は、お客様ご自身の単独の責任において行われるものとします。本ウェブサイトおよびサービスは、「現状有姿」および「利用可能な状態」で提供されます。JIMEI MATERIALSは、商品性、特定目的への適合性、および非侵害性の黙示的保証を含むがこれらに限定されない、明示的または黙示的を問わず、いかなる種類の保証も明確に否認します。',
            'terms_section10_content2': '当社は以下を保証しません：',
            'terms_section10_list1': '本ウェブサイトがお客様の特定の要件を満たすこと',
            'terms_section10_list2': '本ウェブサイトが中断なく、適時に、安全に、またはエラーなく提供されること',
            'terms_section10_list3': '本ウェブサイトの利用から得られる結果が正確または信頼できること',
            'terms_section10_list4': '本ウェブサイトを通じて購入または取得したいかなる製品、サービス、情報、その他の資料の品質がお客様の期待に沿うこと',

            'terms_section11_title': '11. 責任の制限',
            'terms_section11_content': '適用される法律により認められる最大限の範囲において、JIMEI MATERIALSは、以下のことに起因する、間接的、付随的、特別、結果的、または懲罰的損害（利益、データ、使用、のれん、その他の無形の損失の喪失を含みますがこれらに限定されません）について責任を負わないものとします：',
            'terms_section11_list1': 'お客様による本ウェブサイトへのアクセスまたは利用、またはアクセスもしくは利用できないこと',
            'terms_section11_list2': '本ウェブサイト上の第三者のいかなる行為またはコンテンツ',
            'terms_section11_list3': '本ウェブサイトから得たいかなるコンテンツ',
            'terms_section11_list4': 'お客様の送信またはコンテンツへの不正アクセス、利用、または改変',
            'terms_section11_content2': 'いかなる場合においても、JIMEI MATERIALSがお客様に対して負う全ての請求に関する総責任額は、100米ドル（USD 100.00）を超えないものとします。',

            'terms_section12_title': '12. 補償',
            'terms_section12_content': 'お客様は、本規約への違反または本ウェブサイトの利用に関連してまたは起因して生じる、あらゆる請求、責任、損害賠償、判決、裁決、損失、費用、経費、または手数料（合理的な弁護士費用を含む）から、Jimei Materials Co., Ltd.、その関連会社、ライセンサー、サービスプロバイダー、並びにそれらの役員、取締役、従業員、請負業者、代理人、ライセンサー、供給者、承継人、および譲受人を防御し、補償し、免責するものとします。',

            'terms_section13_title': '13. 終了',
            'terms_section13_content': '当社は、お客様が本規約に違反した場合を含むがこれに限定されない、いかなる理由においても、事前の通知または責任を負うことなく、お客様の本ウェブサイトへのアクセスを直ちに終了または停止することができます。終了時に、お客様の本ウェブサイトを利用する権利は直ちに消滅します。',

            'terms_section14_title': '14. 準拠法および紛争解決',
            'terms_section14a_title': '14.1 準拠法',
            'terms_section14a_content': '本規約は、中華人民共和国の法律に準拠し、その法律の抵触法規定を考慮せずに解釈されるものとします。',

            'terms_section14b_title': '14.2 紛争解決',
            'terms_section14b_content': '本規約から生じ、または本規約に関連するいかなる紛争、論争、または請求も、友好的な交渉を通じて解決されるものとします。紛争が30日以内の交渉を通じて解決できない場合、いずれの当事者も、中国広東省深圳市に管轄権を有する人民法院に紛争を付託することができます。',

            'terms_section14c_title': '14.3 国際的なユーザー',
            'terms_section14c_content': 'お客様が中国国外から当社ウェブサイトにアクセスする場合、お客様は現地の法律の遵守について責任を負うものとします。当社は、当社ウェブサイト上の資料が中国国外の地域での利用に適している、または利用可能であることを表明するものではありません。',

            'terms_section15_title': '15. 規約の変更',
            'terms_section15_content': '当社は、単独の裁量により、いつでも本規約を変更または置き換える権利を留保します。変更が重要なものである場合、当社は新しい条件が発効する少なくとも30日前に通知を提供します。何が重要な変更を構成するかは、当社の単独の裁量により決定されます。変更が発効した後も当社ウェブサイトへのアクセスまたは利用を継続することにより、お客様は修正された条件に拘束されることに同意したものとみなされます。',

            'terms_section16_title': '16. 分離可能性',
            'terms_section16_content': '本規約のいずれかの規定が裁判所により無効または執行不能と判断された場合でも、本規約の残りの規定は有効なまま存続します。無効または執行不能とされた規定は、元の規定の意図に最も近い、有効かつ執行可能な規定に置き換えられるものとします。',

            'terms_section17_title': '17. 完全合意',
            'terms_section17_content': '本規約は、当社ウェブサイトに関するお客様とJimei Materialsとの間の完全な合意を構成し、当社ウェブサイトに関して当社間で以前にあったいかなる合意も置き換え、優先するものとします。',

            'terms_section18_title': '18. 権利放棄',
            'terms_section18_content': '当社が本規約のいかなる権利または規定を執行しないことも、それらの権利の放棄とはみなされません。かかる権利または規定の放棄は、書面により、かつJimei Materialsの適切に授権された代表者によって署名された場合にのみ有効となります。',

            'terms_section19_title': '19. 不可抗力',
            'terms_section19_content': '当社は、機械的、電子的、または通信の故障または劣化、天災、戦争、テロリズム、暴動、禁輸措置、民事または軍事当局の行為、火災、洪水、事故、ストライキ、または輸送施設、燃料、エネルギー、労働力、または材料の不足を含むがこれらに限定されない、当社の合理的な管理を超えた原因により生じた、本規約に基づく当社の義務の履行不能について責任を負わないものとします。',

            'terms_section20_title': '20. 連絡先',
            'terms_section20_content': '本規約についてご質問がある場合は、以下の連絡先までお問い合わせください：',
            'terms_contact_title': 'Jimei Materials Co., Ltd.',
            'terms_contact_address': '中国 広東省 深圳市 宝安区 新橋街道 茘林坡坑 浩森第一工業区 518104<br>Haosan First Industrial Zone, Linpokeng, Xinqiao Street, Bao\'an District, Shenzhen, Guangdong, China 518104',
            'terms_contact_email': 'yfu@jimei-materials.com',
            'terms_contact_phone': '+86-147-4537-3293',
            'terms_contact_hours': '営業時間：月曜日～金曜日 8:00 ～ 18:00 (GMT+8)',

            'terms_footer_note': '本利用規約は英語で作成されています。英語版と翻訳版に齟齬がある場合、英語版が優先します。',

            // CTA セクション
            'terms_cta_title': '利用規約についてご質問は？',
            'terms_cta_description': '当社法務チームが、利用規約に関するご質問や懸念に対応いたします。',
            'btn_contact_us': 'お問い合わせ'
        },
        ko: {
            // Page meta
            'terms_page_title': '서비스 이용약관 | Jimei Materials - 세라믹 기판 제조업체',
            'terms_meta_description': 'Jimei Materials 웹사이트 및 서비스 이용약관. 당사 웹사이트, 제품 및 서비스 이용을 규율하는 법적 약관입니다.',

            // Content
            'terms_main_title': '서비스 이용약관',
            'terms_subtitle': '당사 웹사이트 및 서비스 이용을 규율하는 법적 약관',
            'breadcrumb_terms': '서비스 이용약관',

            // Notice Box
            'terms_notice_title': '중요 법적 고지',
            'terms_notice_content': '당사 웹사이트를 이용하기 전에 본 이용약관을 주의 깊게 읽어주시기 바랍니다. 당사 웹사이트에 접속하거나 이용함으로써 귀하는 본 약관에 구속되는 데 동의하는 것입니다. 본 약관의 어떤 부분에 동의하지 않으시는 경우, 당사 웹사이트나 서비스를 이용해서는 안 됩니다.',

            // Update Date
            'terms_last_updated': '최종 업데이트:',
            'terms_last_updated_date': '2026년 1월 1일',
            'terms_intro_note': '본 서비스 이용약관(이하 "약관")은 Jimei Materials Co., Ltd. 웹사이트(www.jimei-materials.com) 및 당사 서비스에 대한 귀하의 접속 및 이용을 규율합니다. 본 약관은 귀하와 Jimei Materials Co., Ltd. 사이의 법적 구속력 있는 계약을 구성합니다.',

            // Sections
            'terms_section1_title': '1. 약관의 승인',
            'terms_section1_content': '당사 웹사이트에 접속하거나 검색하거나 이용함으로써 귀하는 본 서비스 이용약관을 읽고 이해하며 이에 구속되는 데 동의함을 인정합니다. 귀하가 회사 또는 기타 법인을 대신하여 당사 웹사이트를 이용하는 경우, 귀하가 그러한 법인을 본 약관에 구속시킬 권한을 가진 것으로 진술합니다.',

            'terms_section2_title': '2. 정의',
            'terms_section2_content': '본 약관에서:',
            'terms_section2_list1': '"당사", "우리"는 중국에 등록된 회사인 Jimei Materials Co., Ltd.를 의미합니다.',
            'terms_section2_list2': '"웹사이트"는 www.jimei-materials.com 및 모든 관련 하위 도메인을 의미합니다.',
            'terms_section2_list3': '"서비스"는 당사 웹사이트를 통해 제공되는 모든 제품, 서비스, 콘텐츠, 기능 및 작동을 의미합니다.',
            'terms_section2_list4': '"사용자", "귀하"는 당사 웹사이트나 서비스에 접속하거나 이용하는 모든 개인 또는 법인을 의미합니다.',
            'terms_section2_list5': '"콘텐츠"는 당사 웹사이트에서 이용 가능한 모든 텍스트, 이미지, 그래픽, 로고, 비디오, 오디오, 데이터 및 기타 자료를 포함합니다.',

            'terms_section3_title': '3. 이용 자격',
            'terms_section3_content': '당사 웹사이트를 이용함으로써 귀하는 다음을 진술하고 보증합니다:',
            'terms_section3_list1': '귀하는 최소 18세 이상이거나 귀하 관할 지역의 성년 연령에 도달했습니다.',
            'terms_section3_list2': '귀하는 법적 구속력 있는 계약을 체결할 법적 능력을 보유하고 있습니다.',
            'terms_section3_list3': '귀하는 적용 가능한 법률에 따라 당사의 서비스를 받는 것이 금지되지 않았습니다.',
            'terms_section3_list4': '귀하가 제공하는 모든 정보는 정확하고 현재성 있으며 완전합니다.',

            'terms_section4_title': '4. 계정 등록',
            'terms_section4_content': '당사 웹사이트의 특정 기능은 계정 생성이 필요할 수 있습니다. 계정을 생성할 때 귀하는 다음에 동의합니다:',
            'terms_section4_list1': '정확하고 현재성 있으며 완전한 정보를 제공합니다.',
            'terms_section4_list2': '귀하의 계정 자격 증명 보안을 유지합니다.',
            'terms_section4_list3': '무단 접근 또는 보안 침해가 발생한 경우 즉시 당사에 통지합니다.',
            'terms_section4_list4': '귀하 계정 아래의 모든 활동에 대한 책임을 집니다.',
            'terms_section4_note': '당사는 본 약관을 위반하거나 사기 활동에 사용된 계정을 정지 또는 해지할 권리를 보유합니다.',

            'terms_section5_title': '5. 웹사이트 이용',
            'terms_section5_content': '귀하는 법적 목적과 본 약관에 따라 당사 웹사이트를 이용하는 데 동의합니다. 귀하는 다음을 해서는 안 됩니다:',
            'terms_section5_list1': '적용 가능한 법률이나 규정을 위반하는 방식으로 당사 웹사이트를 이용합니다.',
            'terms_section5_list2': '사기적, 기만적 또는 유해한 활동에 종사합니다.',
            'terms_section5_list3': '당사 시스템이나 네트워크에 무단 접근을 시도합니다.',
            'terms_section5_list4': '당사 웹사이트 운영을 방해하거나 중단시킵니다.',
            'terms_section5_list5': '허가 없이 자동화된 수단을 사용하여 당사 웹사이트에서 데이터에 접근하거나 수집합니다.',
            'terms_section5_list6': '바이러스, 맬웨어 또는 기타 유해 코드를 업로드하거나 전송합니다.',
            'terms_section5_list7': '다른 사용자를 괴롭히거나 학대하거나 해를 끼칩니다.',

            'terms_section6_title': '6. 지식재산권',
            'terms_section6_content': '당사 웹사이트의 모든 콘텐츠, 기능 및 작동은 Jimei Materials Co., Ltd., 그 라이선스 제공자 또는 기타 공급자가 소유하며 국제 저작권, 상표권, 특허권, 영업 비밀 및 기타 지식재산권 법률로 보호됩니다.',

            'terms_section6a_title': '6.1 저작권',
            'terms_section6a_content': '웹사이트와 그 전체 콘텐츠, 기능 및 작동(모든 정보, 소프트웨어, 텍스트, 디스플레이, 이미지, 비디오, 오디오 및 그 디자인, 선택, 배열을 포함하되 이에 국한되지 않음)은 Jimei Materials Co., Ltd., 그 라이선스 제공자 또는 해당 자료의 기타 공급자가 소유하며 저작권법으로 보호됩니다.',

            'terms_section6b_title': '6.2 상표권',
            'terms_section6b_content': 'Jimei Materials 명칭, 로고 및 모든 관련 명칭, 로고, 제품 및 서비스명, 디자인, 슬로건은 Jimei Materials Co., Ltd. 또는 그 계열사나 라이선스 제공자의 상표입니다. 귀하는 당사의 사전 서면 허가 없이 그러한 표지를 사용해서는 안 됩니다.',

            'terms_section6c_title': '6.3 제한적 라이선스',
            'terms_section6c_content': '당사는 귀하에게 개인적, 비상업적 목적으로 당사 웹사이트에 접속하고 이용할 수 있는 제한적, 비독점적, 양도 불가능한, 취소 가능한 라이선스를 부여합니다. 이 라이선스에는 다음이 포함되지 않습니다:',
            'terms_section6c_list1': '당사 웹사이트나 그 콘텐츠의 재판매 또는 상업적 이용',
            'terms_section6c_list2': '제품 목록, 설명 또는 가격의 수집 및 이용',
            'terms_section6c_list3': '다른 판매자를 위해 계정 정보를 다운로드하거나 복사',
            'terms_section6c_list4': '데이터 마이닝, 로봇 또는 유사한 데이터 수집 및 추출 도구의 이용',

            'terms_section7_title': '7. 사용자 콘텐츠',
            'terms_section7_content': '당사 웹사이트는 귀하가 댓글, 리뷰 및 문의 등을 포함하되 이에 국한되지 않는 콘텐츠("사용자 콘텐츠")를 제출할 수 있도록 할 수 있습니다. 사용자 콘텐츠를 제출함으로써 귀하는:',
            'terms_section7_list1': '당사에 귀하의 사용자 콘텐츠를 사용, 복제, 수정, 적응, 게시, 번역 및 배포할 수 있는 전세계적, 비독점적, 로열티 무료 라이선스를 부여합니다.',
            'terms_section7_list2': '귀하가 사용자 콘텐츠를 소유하거나 제출할 필요 권리를 보유하고 있음을 진술하고 보증합니다.',
            'terms_section7_list3': '사용자 콘텐츠가 제3자의 권리나 적용 가능한 법률을 위반하지 않을 것에 동의합니다.',
            'terms_section7_list4': '당사가 사용자 콘텐츠에 대해 책임지지 않으며 당사의 재량에 따라 이를 제거할 수 있음을 인정합니다.',

            'terms_section8_title': '8. 제품 정보 및 견적',
            'terms_section8_content': '당사 웹사이트의 모든 제품 설명, 사양 및 기술 정보는 정보 제공 목적으로만 제공됩니다. 당사는 정확성을 보장하기 위해 합리적인 노력을 기울이지만, 제품 설명이나 기타 콘텐츠가 정확하고 완전하며 신뢰할 수 있고 현재성 있고 오류가 없음을 보장하지는 않습니다.',

            'terms_section8a_title': '8.1 견적 및 주문',
            'terms_section8a_content': '당사 웹사이트를 통해 제공되는 견적은 구속력이 없으며 다음에 따릅니다:',
            'terms_section8a_list1': '기술 사양의 검증',
            'terms_section8a_list2': '자재 가용성 및 생산 능력',
            'terms_section8a_list3': '당사 영업 부서의 최종 서면 확인',
            'terms_section8a_list4': '별도 구매 계약의 체결',

            'terms_section8b_title': '8.2 수출 통제',
            'terms_section8b_content': '당사 제품 및 기술은 수출 통제 및 제재 법률의 적용을 받을 수 있습니다. 귀하는 중국, 미국 및 기타 국가의 규정을 포함하여 모든 적용 가능한 수출 통제 규정을 준수하는 데 동의합니다.',

            'terms_section9_title': '9. 제3자 링크',
            'terms_section9_content': '당사 웹사이트에는 Jimei Materials가 소유하거나 통제하지 않는 제3자 웹사이트나 서비스로의 링크가 포함될 수 있습니다. 당사는 제3자 웹사이트나 서비스의 콘텐츠, 개인정보처리방침 또는 관행에 대해 통제권이 없으며 책임을 지지 않습니다. 귀하는 Jimei Materials가 그러한 웹사이트나 서비스를 통해 이용 가능하거나 그러한 웹사이트나 서비스와 관련하여 제공되는 콘텐츠, 상품 또는 서비스에 대한 이용이나 의존으로 인해 발생하거나 발생한 것으로 주장되는 모든 손해나 손실에 대해 직접적이거나 간접적으로 책임지지 않음을 인정하고 동의합니다.',

            'terms_section10_title': '10. 보증의 부인',
            'terms_section10_content': '귀하의 당사 웹사이트 및 서비스 이용은 전적으로 귀하의 책임입니다. 웹사이트와 서비스는 "있는 그대로" 및 "이용 가능한 상태로" 제공됩니다. JIMEI MATERIALS는 상품성, 특정 목적에의 적합성 및 비침해성에 대한 묵시적 보증을 포함하되 이에 국한되지 않고 명시적이거나 묵시적인 모든 종류의 보증을 명시적으로 부인합니다.',
            'terms_section10_content2': '당사는 다음을 보증하지 않습니다:',
            'terms_section10_list1': '웹사이트가 귀하의 특정 요구사항을 충족할 것',
            'terms_section10_list2': '웹사이트가 중단 없이, 적시에, 안전하거나 오류가 없을 것',
            'terms_section10_list3': '웹사이트 이용으로 얻을 수 있는 결과가 정확하거나 신뢰할 수 있을 것',
            'terms_section10_list4': '웹사이트를 통해 구매하거나 얻은 제품, 서비스, 정보 또는 기타 자료의 품질이 귀하의 기대를 충족할 것',

            'terms_section11_title': '11. 책임의 제한',
            'terms_section11_content': '적용 가능한 법률이 허용하는 최대 한도 내에서, JIMEI MATERIALS는 다음과 같은 사유로 발생하는 간접적, 부수적, 특별, 결과적 또는 징벌적 손해(이익, 데이터, 사용, 영업권 또는 기타 무형 손실의 손실을 포함하되 이에 국한되지 않음)에 대해 책임을 지지 않습니다:',
            'terms_section11_list1': '웹사이트에 대한 귀하의 접속, 이용 또는 접속이나 이용의 불가능',
            'terms_section11_list2': '웹사이트상의 제3자의 모든 행위나 콘텐츠',
            'terms_section11_list3': '웹사이트에서 얻은 모든 콘텐츠',
            'terms_section11_list4': '귀하의 전송이나 콘텐츠에 대한 무단 접근, 이용 또는 변경',
            'terms_section11_content2': '어떠한 경우에도 JIMEI MATERIALS의 귀하에 대한 모든 청구에 대한 총 책임은 100 미국 달러(USD 100.00)를 초과하지 않습니다.',

            'terms_section12_title': '12. 면책',
            'terms_section12_content': '귀하는 본 약관 위반 또는 웹사이트 이용과 관련하여 발생하거나 이와 관련된 모든 청구, 책임, 손해, 판결, 수여, 손실, 비용, 경비 또는 수수료(합리적인 변호사 비용 포함)로부터 Jimei Materials Co., Ltd., 그 계열사, 라이선스 제공자 및 서비스 제공업체, 그리고 그와 그들의 각 임원, 이사, 직원, 계약자, 대리인, 라이선스 제공자, 공급자, 후계자 및 양수인을 방어, 면책 및 보호하는 데 동의합니다.',

            'terms_section13_title': '13. 계약 종료',
            'terms_section13_content': '당사는 귀하가 본 약관을 위반하는 경우를 포함하되 이에 국한되지 않고 어떠한 이유로든 사전 통지나 책임 없이 즉시 귀하의 당사 웹사이트 접속을 종료하거나 정지할 수 있습니다. 종료 시, 귀하의 웹사이트 이용 권리는 즉시 중단됩니다.',

            'terms_section14_title': '14. 준거법 및 분쟁 해결',
            'terms_section14a_title': '14.1 준거법',
            'terms_section14a_content': '본 약관은 법률 충돌 규정에 관계없이 중화인민공화국의 법률에 따라 규율되고 해석됩니다.',

            'terms_section14b_title': '14.2 분쟁 해결',
            'terms_section14b_content': '본 약관에서 발생하거나 이와 관련된 모든 분쟁, 논란 또는 청구는 우호적 협상을 통해 해결되어야 합니다. 분쟁이 30일 이내에 협상을 통해 해결되지 않는 경우, 어느 당사자도 중국 광동성 심천시에 관할권을 가진 인민법원에 분쟁을 제기할 수 있습니다.',

            'terms_section14c_title': '14.3 국제 사용자',
            'terms_section14c_content': '귀하가 중국 외부에서 당사 웹사이트에 접속하는 경우, 귀하는 현지 법률 준수에 대한 책임이 있습니다. 당사는 당사 웹사이트의 자료가 중국 외부 지역에서 이용하기에 적합하거나 이용 가능하다는 점을 보증하지 않습니다.',

            'terms_section15_title': '15. 약관 변경',
            'terms_section15_content': '당사는 단독 재량으로 언제든지 본 약관을 수정하거나 대체할 권리를 보유합니다. 수정사항이 중요한 경우, 당사는 새로운 약관이 효력을 발생하기 최소 30일 전에 통지를 제공할 것입니다. 중요한 변경을 구성하는 사항은 당사의 단독 재량으로 결정됩니다. 수정사항이 효력을 발생한 후에도 당사 웹사이트에 계속 접속하거나 이용함으로써 귀하는 수정된 약관에 구속되는 데 동의합니다.',

            'terms_section16_title': '16. 분리의 원칙',
            'terms_section16_content': '본 약관의 어떤 조항이 법원에 의해 무효 또는 집행 불가능한 것으로 판단되는 경우, 본 약관의 나머지 조항은 계속 효력을 유지합니다. 무효 또는 집행 불가능한 조항은 원래 조항의 의도에 가장 근접하게 달성하는 유효하고 집행 가능한 조항으로 대체됩니다.',

            'terms_section17_title': '17. 완전한 합의',
            'terms_section17_content': '본 약관은 귀하와 Jimei Materials 사이의 당사 웹사이트에 관한 완전한 합의를 구성하며, 당사 웹사이트에 관해 우리 사이에 있었을 수 있는 모든 기존 합의를 대체하고 대신합니다.',

            'terms_section18_title': '18. 권리 포기',
            'terms_section18_content': '당사가 본 약관의 권리나 조항을 집행하지 않는 것은 그러한 권리의 포기로 간주되지 않습니다. 그러한 권리나 조항의 포기는 서면으로 작성되고 Jimei Materials의 적절히 승인된 대표자가 서명한 경우에만 효력이 있습니다.',

            'terms_section19_title': '19. 불가항력',
            'terms_section19_content': '당사는 기계적, 전자적 또는 통신 장애나 저하, 천재지변, 전쟁, 테러리즘, 폭동, 금수 조치, 민간 또는 군사 당국의 행위, 화재, 홍수, 사고, 파업 또는 교통 시설, 연료, 에너지, 노동력 또는 자재의 부족을 포함하되 이에 국한되지 않고 당사의 합리적인 통제를 벗어난 원인으로 인해 본 약관에 따른 의무 이행에 실패하는 경우에 대해 책임을 지지 않습니다.',

            'terms_section20_title': '20. 연락처 정보',
            'terms_section20_content': '본 약관에 대해 질문이 있으시면 다음 연락처로 문의하십시오:',
            'terms_contact_title': 'Jimei Materials Co., Ltd.',
            'terms_contact_address': '중국 광동성 심천시 바오안구 신차오 가도 호삼 임포갱 제1공업구<br>우편번호 518104',
            'terms_contact_email': 'yfu@jimei-materials.com',
            'terms_contact_phone': '+86-147-4537-3293',
            'terms_contact_hours': '영업 시간: 월요일~금요일, 오전 8시 ~ 오후 6시 (GMT+8)',

            'terms_footer_note': '본 서비스 이용약관은 영어로 작성되었습니다. 영어 버전과 번역본 사이에 불일치가 있는 경우, 영어 버전이 우선합니다.',

            // CTA Section
            'terms_cta_title': '이용약관에 대해 질문이 있으십니까?',
            'terms_cta_description': '당사 법무팀은 이용약관에 대해 귀하가 가질 수 있는 질문이나 우려사항을 해결할 수 있도록 지원합니다.',
            'btn_contact_us': '문의하기'
        },
        de: {
            // Page meta
            'terms_page_title': 'Allgemeine Geschäftsbedingungen (AGB) | Jimei Materials - Hersteller von Keramiksubstraten',
            'terms_meta_description': 'Allgemeine Geschäftsbedingungen (AGB) der Jimei Materials für Website und Dienstleistungen. Rechtliche Bestimmungen für die Nutzung unserer Website, Produkte und Services.',

            // Content
            'terms_main_title': 'Allgemeine Geschäftsbedingungen',
            'terms_subtitle': 'Rechtliche Bestimmungen für die Nutzung unserer Website und Dienstleistungen',
            'breadcrumb_terms': 'AGB',

            // Notice Box
            'terms_notice_title': 'Wichtiger rechtlicher Hinweis',
            'terms_notice_content': 'Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen sorgfältig, bevor Sie unsere Website nutzen. Durch den Zugriff auf oder die Nutzung unserer Website erklären Sie sich damit einverstanden, an diese Bedingungen gebunden zu sein. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, dürfen Sie unsere Website oder Dienstleistungen nicht nutzen.',

            // Update Date
            'terms_last_updated': 'Zuletzt aktualisiert:',
            'terms_last_updated_date': '1. Januar 2026',
            'terms_intro_note': 'Diese Allgemeinen Geschäftsbedingungen ("AGB") regeln Ihren Zugang zu und die Nutzung der Website der Jimei Materials Co., Ltd. (www.jimei-materials.com) sowie unserer Dienstleistungen. Diese AGB stellen eine rechtsverbindliche Vereinbarung zwischen Ihnen und der Jimei Materials Co., Ltd. dar.',

            // Sections
            'terms_section1_title': '1. Annahme der Bedingungen',
            'terms_section1_content': 'Durch den Zugriff auf, das Browsen oder die Nutzung unserer Website bestätigen Sie, dass Sie diese Allgemeinen Geschäftsbedingungen gelesen, verstanden haben und sich damit einverstanden erklären, an sie gebunden zu sein. Wenn Sie unsere Website im Namen eines Unternehmens oder einer anderen Rechtseinheit nutzen, erklären Sie, dass Sie befugt sind, diese Entität an diese Bedingungen zu binden.',

            'terms_section2_title': '2. Definitionen',
            'terms_section2_content': 'In diesen AGB bedeuten:',
            'terms_section2_list1': '"Unternehmen", "wir", "uns" oder "unser" bezieht sich auf die Jimei Materials Co., Ltd., ein in China registriertes Unternehmen.',
            'terms_section2_list2': '"Website" bezieht sich auf www.jimei-materials.com und alle zugehörigen Subdomains.',
            'terms_section2_list3': '"Dienstleistungen" bezieht sich auf alle Produkte, Dienstleistungen, Inhalte, Funktionen und Funktionalitäten, die über unsere Website angeboten werden.',
            'terms_section2_list4': '"Nutzer", "Sie" oder "Ihr" bezieht sich auf jede Person oder Entität, die auf unsere Website zugreift oder unsere Dienstleistungen nutzt.',
            'terms_section2_list5': '"Inhalte" umfasst allen Text, Bilder, Grafiken, Logos, Videos, Audio, Daten und sonstiges Material, das auf unserer Website verfügbar ist.',

            'terms_section3_title': '3. Nutzungsberechtigung',
            'terms_section3_content': 'Durch die Nutzung unserer Website erklären und garantieren Sie, dass:',
            'terms_section3_list1': 'Sie mindestens 18 Jahre alt sind oder in Ihrer Gerichtsbarkeit die Volljährigkeit erreicht haben',
            'terms_section3_list2': 'Sie die gesetzliche Befugnis haben, eine bindende Vereinbarung einzugehen',
            'terms_section3_list3': 'Ihnen der Bezug unserer Dienstleistungen nach geltendem Recht nicht untersagt ist',
            'terms_section3_list4': 'Alle von Ihnen bereitgestellten Informationen zutreffend, aktuell und vollständig sind',

            'terms_section4_title': '4. Kontoregistrierung',
            'terms_section4_content': 'Bestimmte Funktionen unserer Website erfordern möglicherweise die Erstellung eines Kontos. Bei der Erstellung eines Kontos erklären Sie sich damit einverstanden:',
            'terms_section4_list1': 'Zutreffende, aktuelle und vollständige Informationen anzugeben',
            'terms_section4_list2': 'Die Sicherheit Ihrer Kontozugangsdaten zu gewährleisten',
            'terms_section4_list3': 'Uns unverzüglich über unbefugten Zugriff oder Sicherheitsverletzungen zu benachrichtigen',
            'terms_section4_list4': 'Die Verantwortung für alle Aktivitäten unter Ihrem Konto zu übernehmen',
            'terms_section4_note': 'Wir behalten uns das Recht vor, Konten zu sperren oder zu kündigen, die gegen diese AGB verstoßen oder für betrügerische Aktivitäten genutzt werden.',

            'terms_section5_title': '5. Nutzung der Website',
            'terms_section5_content': 'Sie erklären sich damit einverstanden, unsere Website nur für rechtmäßige Zwecke und in Übereinstimmung mit diesen AGB zu nutzen. Sie dürfen nicht:',
            'terms_section5_list1': 'Unsere Website auf eine Weise nutzen, die gegen geltende Gesetze oder Vorschriften verstößt',
            'terms_section5_list2': 'An betrügerischen, irreführenden oder schädlichen Aktivitäten teilnehmen',
            'terms_section5_list3': 'Versuchen, unbefugten Zugang zu unseren Systemen oder Netzwerken zu erlangen',
            'terms_section5_list4': 'Den Betrieb unserer Website beeinträchtigen oder stören',
            'terms_section5_list5': 'Ohne Erlaubnis automatisierte Mittel zum Zugriff auf oder zur Sammlung von Daten von unserer Website verwenden',
            'terms_section5_list6': 'Viren, Malware oder anderen schädlichen Code hochladen oder übertragen',
            'terms_section5_list7': 'Andere Nutzer belästigen, missbrauchen oder schädigen',

            'terms_section6_title': '6. Rechte an geistigem Eigentum',
            'terms_section6_content': 'Alle Inhalte, Funktionen und Funktionalitäten auf unserer Website sind Eigentum der Jimei Materials Co., Ltd., ihrer Lizenzgeber oder anderer Anbieter und durch internationale Urheberrechts-, Marken-, Patent-, Geschäftsgeheimnis- und andere Gesetze zum Schutz geistigen Eigentums geschützt.',

            'terms_section6a_title': '6.1 Urheberrecht',
            'terms_section6a_content': 'Die Website und ihre gesamten Inhalte, Funktionen und Funktionalitäten (einschließlich, aber nicht beschränkt auf alle Informationen, Software, Texte, Anzeigen, Bilder, Video und Audio sowie deren Gestaltung, Auswahl und Anordnung) sind Eigentum der Jimei Materials Co., Ltd., ihrer Lizenzgeber oder anderer Anbieter dieses Materials und durch Urheberrechtsgesetze geschützt.',

            'terms_section6b_title': '6.2 Marken',
            'terms_section6b_content': 'Der Name Jimei Materials, das Logo und alle verwandten Namen, Logos, Produkt- und Dienstleistungsnamen, Designs und Slogans sind Marken der Jimei Materials Co., Ltd. oder ihrer verbundenen Unternehmen oder Lizenzgeber. Sie dürfen diese Marken nicht ohne unsere vorherige schriftliche Genehmigung verwenden.',

            'terms_section6c_title': '6.3 Beschränkte Lizenz',
            'terms_section6c_content': 'Wir gewähren Ihnen eine beschränkte, nicht ausschließliche, nicht übertragbare, widerrufliche Lizenz zum Zugriff auf und zur Nutzung unserer Website für persönliche, nicht-kommerzielle Zwecke. Diese Lizenz umfasst nicht:',
            'terms_section6c_list1': 'Wiederverkauf oder kommerzielle Nutzung unserer Website oder ihrer Inhalte',
            'terms_section6c_list2': 'Sammlung und Nutzung von Produktlisten, -beschreibungen oder -preisen',
            'terms_section6c_list3': 'Herunterladen oder Kopieren von Kontoinformationen zugunsten eines anderen Händlers',
            'terms_section6c_list4': 'Jegliche Nutzung von Data-Mining, Robots oder ähnlichen Datenerfassungs- und Extraktionstools',

            'terms_section7_title': '7. Nutzerinhalte',
            'terms_section7_content': 'Unsere Website kann es Ihnen ermöglichen, Inhalte einzureichen, einschließlich, aber nicht beschränkt auf Kommentare, Bewertungen und Anfragen ("Nutzerinhalte"). Durch das Einreichen von Nutzerinhalten:',
            'terms_section7_list1': 'Räumen Sie uns eine weltweite, nicht ausschließliche, gebührenfreie Lizenz ein, Ihre Nutzerinhalte zu nutzen, zu reproduzieren, zu modifizieren, anzupassen, zu veröffentlichen, zu übersetzen und zu verbreiten',
            'terms_section7_list2': 'Erklären und garantieren Sie, dass Sie Eigentümer der Nutzerinhalte sind oder die notwendigen Rechte zu deren Einreichung haben',
            'terms_section7_list3': 'Erklären Sie sich damit einverstanden, dass Nutzerinhalte keine Rechte Dritter verletzen oder gegen geltende Gesetze verstoßen werden',
            'terms_section7_list4': 'Bestätigen Sie, dass wir nicht für Nutzerinhalte verantwortlich sind und diese nach unserem Ermessen entfernen können',

            'terms_section8_title': '8. Produktinformationen und Angebote',
            'terms_section8_content': 'Alle Produktbeschreibungen, Spezifikationen und technischen Informationen auf unserer Website werden nur zu Informationszwecken bereitgestellt. Wir unternehmen angemessene Anstrengungen, um die Richtigkeit zu gewährleisten, garantieren jedoch nicht, dass Produktbeschreibungen oder andere Inhalte zutreffend, vollständig, zuverlässig, aktuell oder fehlerfrei sind.',

            'terms_section8a_title': '8.1 Angebote und Bestellungen',
            'terms_section8a_content': 'Über unsere Website erteilte Angebote sind unverbindlich und unterliegen:',
            'terms_section8a_list1': 'Der Überprüfung der technischen Spezifikationen',
            'terms_section8a_list2': 'Der Verfügbarkeit von Materialien und Produktionskapazitäten',
            'terms_section8a_list3': 'Der endgültigen schriftlichen Bestätigung durch unsere Vertriebsabteilung',
            'terms_section8a_list4': 'Dem Abschluss eines separaten Kaufvertrags',

            'terms_section8b_title': '8.2 Exportkontrollen',
            'terms_section8b_content': 'Unsere Produkte und Technologien können Exportkontrollen und Sanktionsgesetzen unterliegen. Sie erklären sich damit einverstanden, alle anwendbaren Exportkontrollvorschriften einzuhalten, einschließlich derer Chinas, der Vereinigten Staaten und anderer Länder.',

            'terms_section9_title': '9. Links zu Drittanbietern',
            'terms_section9_content': 'Unsere Website kann Links zu Websites oder Dienstleistungen Dritter enthalten, die nicht im Eigentum von oder unter der Kontrolle von Jimei Materials stehen. Wir haben keine Kontrolle über und übernehmen keine Verantwortung für Inhalte, Datenschutzrichtlinien oder Praktiken von Websites oder Dienstleistungen Dritter. Sie erkennen an und erklären sich damit einverstanden, dass Jimei Materials nicht verantwortlich oder haftbar ist, direkt oder indirekt, für Schäden oder Verluste, die durch oder in Verbindung mit der Nutzung von oder dem Vertrauen auf solche Inhalte, Waren oder Dienstleistungen, die auf oder durch solche Websites oder Dienstleistungen verfügbar sind, verursacht oder angeblich verursacht werden.',

            'terms_section10_title': '10. Haftungsausschluss für Garantien',
            'terms_section10_content': 'DIE NUTZUNG UNSERER WEBSITE UND DIENSTLEISTUNGEN ERFOLGT AUF IHR EIGENES RISIKO. DIE WEBSITE UND DIENSTLEISTUNGEN WERDEN "WIE BESEHEN" UND "WIE VERFÜGBAR" BEREITGESTELLT. JIMEI MATERIALS SCHLIEßT AUSDRÜCKLICH ALLE GARANTIEN JEGLICHER ART AUS, OB AUSDRÜCKLICH ODER STILLSCHWEIGEND, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN GARANTIEN DER MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND NICHTVERLETZUNG VON RECHTEN DRITTER.',
            'terms_section10_content2': 'Wir garantieren nicht, dass:',
            'terms_section10_list1': 'Die Website Ihren spezifischen Anforderungen entspricht',
            'terms_section10_list2': 'Die Website ununterbrochen, zeitgerecht, sicher oder fehlerfrei ist',
            'terms_section10_list3': 'Die Ergebnisse, die aus der Nutzung der Website erzielt werden können, genau oder zuverlässig sind',
            'terms_section10_list4': 'Die Qualität von Produkten, Dienstleistungen, Informationen oder anderem Material, das Sie über die Website erwerben oder beziehen, Ihren Erwartungen entspricht',

            'terms_section11_title': '11. Haftungsbeschränkung',
            'terms_section11_content': 'IM MAXIMALEN, NACH GELTENDEM RECHT ZULÄSSIGEN UMFANG IST JIMEI MATERIALS NICHT HAFTBAR FÜR INDIREKTE, ZUFÄLLIGE, BESONDERE, FOLGE- ODER STRAFSCHADEN, EINSCHLIESSLICH, OHNE BESCHRÄNKUNG, VERLUST VON GEWINNEN, DATEN, NUTZUNG, FIRMENWERT ODER ANDERE IMMATERIELLE VERLUSTE, DIE SICH ERGEBEN AUS:',
            'terms_section11_list1': 'IHREM ZUGRIFF AUF ODER IHRER NUTZUNG DER WEBSITE ODER DER UNFÄHIGKEIT, AUF DIE WEBSITE ZUZUGREIFEN ODER SIE ZU NUTZEN',
            'terms_section11_list2': 'JEGLICHEM VERHALTEN ODER INHALTEN IRGENDEINES DRITTEN AUF DER WEBSITE',
            'terms_section11_list3': 'JEGLICHEN INHALTEN, DIE VON DER WEBSITE BEZOGEN WERDEN',
            'terms_section11_list4': 'UNBERECHTIGTEM ZUGRIFF, NUTZUNG ODER VERÄNDERUNG IHRER ÜBERTRAGUNGEN ODER INHALTE',
            'terms_section11_content2': 'IN KEINEM FALL SOLLTE DIE GESAMTHAFTUNG VON JIMEI MATERIALS GEGENÜBER IHNEN FÜR ALLE ANSPRÜCHE EINEN BETRAG VON EINHUNDERT US-DOLLAR (USD 100,00) ÜBERSTEIGEN.',

            'terms_section12_title': '12. Freistellung',
            'terms_section12_content': 'Sie erklären sich damit einverstanden, die Jimei Materials Co., Ltd., ihre verbundenen Unternehmen, Lizenzgeber und Dienstleister sowie deren jeweilige leitende Angestellte, Direktoren, Mitarbeiter, Vertragspartner, Vertreter, Lizenzgeber, Lieferanten, Nachfolger und Beauftragte von und gegen alle Ansprüche, Haftungen, Schäden, Urteile, Entscheidungen, Verluste, Kosten, Ausgaben oder Gebühren (einschließlich angemessener Anwaltsgebühren) zu verteidigen, schadlos zu halten und schad- und klaglos zu stellen, die sich aus oder in Bezug auf Ihre Verletzung dieser AGB oder Ihre Nutzung der Website ergeben.',

            'terms_section13_title': '13. Beendigung',
            'terms_section13_content': 'Wir können Ihren Zugang zu unserer Website sofort, ohne vorherige Ankündigung oder Haftung, aus beliebigem Grund beenden oder aussetzen, einschließlich, aber nicht beschränkt auf, wenn Sie gegen diese AGB verstoßen. Nach der Beendigung endet Ihr Recht zur Nutzung der Website sofort.',

            'terms_section14_title': '14. Anwendbares Recht und Streitbeilegung',
            'terms_section14a_title': '14.1 Anwendbares Recht',
            'terms_section14a_content': 'Diese AGB unterliegen dem Recht der Volksrepublik China und werden in Übereinstimmung damit ausgelegt, unter Ausschluss von Kollisionsnormen.',

            'terms_section14b_title': '14.2 Streitbeilegung',
            'terms_section14b_content': 'Jede Streitigkeit, Meinungsverschiedenheit oder Forderung, die sich aus oder in Bezug auf diese AGB ergibt, soll durch gütliche Verhandlungen beigelegt werden. Wenn die Streitigkeit nicht innerhalb von dreißig (30) Tagen durch Verhandlungen beigelegt werden kann, kann jede Partei die Streitigkeit dem für Shenzhen, Guangdong, China zuständigen Volksgericht vorlegen.',

            'terms_section14c_title': '14.3 Internationale Nutzer',
            'terms_section14c_content': 'Wenn Sie von außerhalb Chinas auf unsere Website zugreifen, sind Sie für die Einhaltung lokaler Gesetze verantwortlich. Wir geben keine Zusicherung, dass Materialien auf unserer Website für die Nutzung an Orten außerhalb Chinas angemessen oder verfügbar sind.',

            'terms_section15_title': '15. Änderungen der Bedingungen',
            'terms_section15_content': 'Wir behalten uns das Recht vor, diese AGB nach unserem alleinigen Ermessen jederzeit zu ändern oder zu ersetzen. Wenn eine Überarbeitung wesentlich ist, werden wir mindestens 30 Tage vor dem Inkrafttreten neuer Bedingungen benachrichtigen. Was eine wesentliche Änderung darstellt, wird von uns nach eigenem Ermessen bestimmt. Indem Sie nach Inkrafttreten dieser Überarbeitungen weiterhin auf unsere Website zugreifen oder sie nutzen, erklären Sie sich mit den überarbeiteten Bedingungen einverstanden.',

            'terms_section16_title': '16. Teilnichtigkeit',
            'terms_section16_content': 'Wenn eine Bestimmung dieser AGB von einem Gericht für ungültig oder nicht durchsetzbar erklärt wird, bleiben die übrigen Bestimmungen dieser AGB wirksam. Die ungültige oder nicht durchsetzbare Bestimmung wird durch eine gültige und durchsetzbare Bestimmung ersetzt, die dem Zweck der ursprünglichen Bestimmung am nächsten kommt.',

            'terms_section17_title': '17. Vollständige Vereinbarung',
            'terms_section17_content': 'Diese AGB stellen die vollständige Vereinbarung zwischen Ihnen und Jimei Materials in Bezug auf unsere Website dar und ersetzen und treten an die Stelle etwaiger früherer Vereinbarungen, die wir möglicherweise zwischen uns in Bezug auf die Website hatten.',

            'terms_section18_title': '18. Verzicht',
            'terms_section18_content': 'Unser Unterlassen, ein Recht oder eine Bestimmung dieser AGB durchzusetzen, gilt nicht als Verzicht auf dieses Recht oder diese Bestimmung. Der Verzicht auf ein solches Recht oder eine solche Bestimmung ist nur wirksam, wenn er schriftlich und von einem ordnungsgemäß bevollmächtigten Vertreter von Jimei Materials unterzeichnet ist.',

            'terms_section19_title': '19. Höhere Gewalt',
            'terms_section19_content': 'Wir haften nicht für das Nichterfüllen unserer Verpflichtungen nach diesen AGB, wenn ein solches Versagen auf eine Ursache zurückzuführen ist, die außerhalb unserer vernünftigen Kontrolle liegt, einschließlich, aber nicht beschränkt auf mechanisches, elektronisches oder Kommunikationsversagen oder -beeinträchtigung, höhere Gewalt, Krieg, Terrorismus, Unruhen, Embargos, Handlungen ziviler oder militärischer Behörden, Feuer, Überschwemmungen, Unfälle, Streiks oder Engpässe bei Transporteinrichtungen, Brennstoff, Energie, Arbeitskräften oder Materialien.',

            'terms_section20_title': '20. Kontaktinformationen',
            'terms_section20_content': 'Wenn Sie Fragen zu diesen AGB haben, kontaktieren Sie uns bitte:',
            'terms_contact_title': 'Jimei Materials Co., Ltd.',
            'terms_contact_address': 'First Industrial Zone, Haosan Linpokeng, Xinqiao Street<br>Bao\'an District, Shenzhen, Guangdong, China 518104',
            'terms_contact_email': 'yfu@jimei-materials.com',
            'terms_contact_phone': '+86-147-4537-3293',
            'terms_contact_hours': 'Geschäftszeiten: Montag-Freitag, 8:00 - 18:00 Uhr (GMT+8)',

            'terms_footer_note': 'Diese Allgemeinen Geschäftsbedingungen sind in englischer Sprache verfasst. Im Falle von Unstimmigkeiten zwischen der englischen Version und Übersetzungen hat die englische Version Vorrang.',

            // CTA Section
            'terms_cta_title': 'Fragen zu unseren AGB?',
            'terms_cta_description': 'Unser Rechtsteam steht zur Verfügung, um Fragen oder Bedenken zu unseren Allgemeinen Geschäftsbedingungen zu klären.',
            'btn_contact_us': 'Kontakt aufnehmen'
        }
    };


    // Initialize with common translations system
    if (window.CommonTranslations) {
        window.translations = window.CommonTranslations.initLanguageSystem(translations);
    }
})();