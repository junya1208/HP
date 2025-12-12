// Language translations
const translations = {
    en: {
        // Header
        name: "Your Name",
        subtitle: "PhD Student | Researcher | Engineer",
        
        // Navigation
        navAbout: "About",
        navResearch: "Research",
        navPublications: "Publications",
        navProjects: "Projects",
        navContact: "Contact",
        
        // About Section
        aboutTitle: "About Me",
        aboutP1: "I am a PhD student researching at the intersection of artificial intelligence and systems engineering. My work focuses on developing practical solutions that bridge theoretical computer science with real-world applications.",
        aboutP2: "My research interests include machine learning systems, distributed computing, and human-computer interaction. I am particularly interested in how we can design intelligent systems that are both powerful and accessible to end users across various domains.",
        aboutP3: "I am open to academic collaborations and industrial partnerships that can create meaningful impact through innovative technology solutions.",
        
        // Research Section
        researchTitle: "Research Topics",
        researchItem1Title: "Machine Learning Systems",
        researchItem1Text: "Exploring efficient architectures and algorithms for deploying machine learning models in resource-constrained environments. Focus on optimization techniques and practical deployment strategies.",
        researchItem2Title: "Distributed Computing",
        researchItem2Text: "Investigating scalable distributed systems that can handle large-scale data processing and real-time applications. Research includes fault tolerance, consistency models, and performance optimization.",
        researchItem3Title: "Human-Computer Interaction",
        researchItem3Text: "Designing intuitive interfaces and interaction paradigms that make complex systems accessible to non-expert users. Focus on usability, accessibility, and user experience research.",
        
        // Publications Section
        publicationsTitle: "Selected Publications",
        pub1Title: "Efficient Deep Learning Model Deployment in Edge Computing Environments",
        pub1Authors: "Authors:",
        pub1AuthorsList: "Your Name, Co-Author A, Co-Author B",
        pub1Conference: "Conference:",
        pub1ConferenceName: "International Conference on Machine Learning (ICML) 2024",
        pub1Abstract: "Abstract:",
        pub1AbstractText: "We present a novel framework for deploying deep learning models on edge devices with limited computational resources, achieving significant improvements in inference speed while maintaining accuracy.",
        pub2Title: "Scalable Distributed Data Processing with Consistency Guarantees",
        pub2Authors: "Authors:",
        pub2AuthorsList: "Your Name, Co-Author C",
        pub2Journal: "Journal:",
        pub2JournalName: "ACM Transactions on Computer Systems, 2023",
        pub2Abstract: "Abstract:",
        pub2AbstractText: "This paper introduces a distributed computing framework that provides strong consistency guarantees while maintaining high throughput and low latency in large-scale deployments.",
        pub3Title: "User-Centered Design for Complex AI Systems",
        pub3Authors: "Authors:",
        pub3AuthorsList: "Your Name, Co-Author D, Co-Author E",
        pub3Conference: "Conference:",
        pub3ConferenceName: "ACM Conference on Human Factors in Computing Systems (CHI) 2023",
        pub3Abstract: "Abstract:",
        pub3AbstractText: "We explore design principles for creating intuitive interfaces for AI-powered systems, validated through user studies with diverse participant groups.",
        
        // Projects Section
        projectsTitle: "Projects and Engineering Experience",
        project1Title: "Open Source ML Framework",
        project1Role: "Role:",
        project1RoleText: "Core Contributor",
        project1Duration: "Duration:",
        project1DurationText: "2023 - Present",
        project1Text: "Contributing to an open-source machine learning framework focused on efficient model training and deployment. Responsibilities include developing optimization algorithms, reviewing code contributions, and maintaining documentation.",
        project1Tech: "Technologies:",
        project1TechList: "Python, PyTorch, CUDA, Docker",
        project2Title: "Distributed Analytics Platform",
        project2Role: "Role:",
        project2RoleText: "Software Engineer Intern",
        project2Duration: "Duration:",
        project2DurationText: "Summer 2022",
        project2Text: "Designed and implemented a distributed analytics platform for processing large-scale time-series data. The system handles millions of events per second with low latency and high reliability.",
        project2Tech: "Technologies:",
        project2TechList: "Go, Apache Kafka, Kubernetes, PostgreSQL",
        project3Title: "Interactive Visualization Tool",
        project3Role: "Role:",
        project3RoleText: "Lead Developer",
        project3Duration: "Duration:",
        project3DurationText: "2021 - 2022",
        project3Text: "Built an interactive web-based visualization tool for exploring complex datasets. The tool has been adopted by several research groups and is used in teaching data science courses.",
        project3Tech: "Technologies:",
        project3TechList: "JavaScript, D3.js, React, Node.js",
        
        // Contact Section
        contactTitle: "Contact Information",
        contactEmail: "Email:",
        contactOffice: "Office:",
        contactOfficeText: "Department of Computer Science, Room 123",
        contactOfficeLocation: "University Name, City, Country",
        contactLinks: "Links:",
        contactCollaboration: "I am actively seeking collaborations on research projects and open to consulting opportunities in industry. Please feel free to reach out if you are interested in working together.",
        
        // Footer
        footerCopyright: "© 2024 Your Name. All rights reserved."
    },
    ja: {
        // Header
        name: "あなたの名前",
        subtitle: "博士課程学生 | 研究者 | エンジニア",
        
        // Navigation
        navAbout: "自己紹介",
        navResearch: "研究",
        navPublications: "論文",
        navProjects: "プロジェクト",
        navContact: "連絡先",
        
        // About Section
        aboutTitle: "自己紹介",
        aboutP1: "私は人工知能とシステム工学の交差点を研究している博士課程の学生です。私の研究は、理論的なコンピュータサイエンスと実世界のアプリケーションを橋渡しする実用的なソリューションの開発に焦点を当てています。",
        aboutP2: "私の研究関心は、機械学習システム、分散コンピューティング、ヒューマンコンピュータインタラクションを含みます。特に、様々な領域のエンドユーザーにとって強力でアクセスしやすいインテリジェントシステムをどのように設計できるかに興味があります。",
        aboutP3: "革新的な技術ソリューションを通じて意義のある影響を生み出すことができる学術的な協力関係や産業パートナーシップを歓迎します。",
        
        // Research Section
        researchTitle: "研究テーマ",
        researchItem1Title: "機械学習システム",
        researchItem1Text: "リソースが制約された環境で機械学習モデルを展開するための効率的なアーキテクチャとアルゴリズムを探求しています。最適化技術と実用的な展開戦略に焦点を当てています。",
        researchItem2Title: "分散コンピューティング",
        researchItem2Text: "大規模データ処理とリアルタイムアプリケーションを処理できるスケーラブルな分散システムを研究しています。フォールトトレランス、一貫性モデル、パフォーマンス最適化を含みます。",
        researchItem3Title: "ヒューマンコンピュータインタラクション",
        researchItem3Text: "複雑なシステムを専門家でないユーザーにもアクセス可能にする直感的なインターフェースとインタラクションパラダイムを設計しています。ユーザビリティ、アクセシビリティ、ユーザーエクスペリエンス研究に焦点を当てています。",
        
        // Publications Section
        publicationsTitle: "主要論文",
        pub1Title: "エッジコンピューティング環境における効率的なディープラーニングモデルの展開",
        pub1Authors: "著者：",
        pub1AuthorsList: "あなたの名前、共著者A、共著者B",
        pub1Conference: "会議：",
        pub1ConferenceName: "International Conference on Machine Learning (ICML) 2024",
        pub1Abstract: "概要：",
        pub1AbstractText: "計算リソースが限られたエッジデバイス上でディープラーニングモデルを展開するための新しいフレームワークを提示し、精度を維持しながら推論速度の大幅な改善を達成しました。",
        pub2Title: "一貫性保証を持つスケーラブルな分散データ処理",
        pub2Authors: "著者：",
        pub2AuthorsList: "あなたの名前、共著者C",
        pub2Journal: "ジャーナル：",
        pub2JournalName: "ACM Transactions on Computer Systems, 2023",
        pub2Abstract: "概要：",
        pub2AbstractText: "大規模展開において高いスループットと低レイテンシを維持しながら、強い一貫性保証を提供する分散コンピューティングフレームワークを紹介します。",
        pub3Title: "複雑なAIシステムのためのユーザー中心設計",
        pub3Authors: "著者：",
        pub3AuthorsList: "あなたの名前、共著者D、共著者E",
        pub3Conference: "会議：",
        pub3ConferenceName: "ACM Conference on Human Factors in Computing Systems (CHI) 2023",
        pub3Abstract: "概要：",
        pub3AbstractText: "多様な参加者グループとのユーザー研究を通じて検証された、AI駆動システムのための直感的なインターフェースを作成するための設計原則を探求します。",
        
        // Projects Section
        projectsTitle: "プロジェクトとエンジニアリング経験",
        project1Title: "オープンソースMLフレームワーク",
        project1Role: "役割：",
        project1RoleText: "コアコントリビューター",
        project1Duration: "期間：",
        project1DurationText: "2023年 - 現在",
        project1Text: "効率的なモデルトレーニングと展開に焦点を当てたオープンソースの機械学習フレームワークに貢献しています。責任には、最適化アルゴリズムの開発、コード貢献のレビュー、ドキュメンテーションの維持が含まれます。",
        project1Tech: "技術：",
        project1TechList: "Python、PyTorch、CUDA、Docker",
        project2Title: "分散アナリティクスプラットフォーム",
        project2Role: "役割：",
        project2RoleText: "ソフトウェアエンジニアインターン",
        project2Duration: "期間：",
        project2DurationText: "2022年夏",
        project2Text: "大規模な時系列データを処理するための分散アナリティクスプラットフォームを設計・実装しました。システムは毎秒数百万のイベントを低レイテンシと高い信頼性で処理します。",
        project2Tech: "技術：",
        project2TechList: "Go、Apache Kafka、Kubernetes、PostgreSQL",
        project3Title: "インタラクティブ可視化ツール",
        project3Role: "役割：",
        project3RoleText: "リード開発者",
        project3Duration: "期間：",
        project3DurationText: "2021年 - 2022年",
        project3Text: "複雑なデータセットを探索するためのインタラクティブなWebベースの可視化ツールを構築しました。このツールはいくつかの研究グループに採用され、データサイエンスコースの教育に使用されています。",
        project3Tech: "技術：",
        project3TechList: "JavaScript、D3.js、React、Node.js",
        
        // Contact Section
        contactTitle: "連絡先情報",
        contactEmail: "メール：",
        contactOffice: "オフィス：",
        contactOfficeText: "コンピュータサイエンス学科、123号室",
        contactOfficeLocation: "大学名、都市、国",
        contactLinks: "リンク：",
        contactCollaboration: "研究プロジェクトでの協力を積極的に求めており、産業界でのコンサルティング機会にもオープンです。一緒に働くことに興味がある場合は、お気軽にご連絡ください。",
        
        // Footer
        footerCopyright: "© 2024 あなたの名前. All rights reserved."
    }
};

// Current language (default: English)
let currentLang = localStorage.getItem('language') || 'en';

// Supported languages
const SUPPORTED_LANGUAGES = ['en', 'ja'];

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    setLanguage(currentLang);
    
    // Add click event to language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
        updateButtonText();
    }
});

// Toggle between English and Japanese
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ja' : 'en';
    setLanguage(currentLang);
    localStorage.setItem('language', currentLang);
    updateButtonText();
}

// Update the language toggle button text
function updateButtonText() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'en' ? '日本語' : 'English';
    }
}

// Apply translations to the page
function setLanguage(lang) {
    // Validate language parameter
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        console.error(`Invalid language: ${lang}. Falling back to English.`);
        lang = 'en';
    }
    
    const t = translations[lang];
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Header
    setText('header-name', t.name);
    setText('header-subtitle', t.subtitle);
    
    // Navigation
    setText('nav-about', t.navAbout);
    setText('nav-research', t.navResearch);
    setText('nav-publications', t.navPublications);
    setText('nav-projects', t.navProjects);
    setText('nav-contact', t.navContact);
    
    // About Section
    setText('about-title', t.aboutTitle);
    setText('about-p1', t.aboutP1);
    setText('about-p2', t.aboutP2);
    setText('about-p3', t.aboutP3);
    
    // Research Section
    setText('research-title', t.researchTitle);
    setText('research-item1-title', t.researchItem1Title);
    setText('research-item1-text', t.researchItem1Text);
    setText('research-item2-title', t.researchItem2Title);
    setText('research-item2-text', t.researchItem2Text);
    setText('research-item3-title', t.researchItem3Title);
    setText('research-item3-text', t.researchItem3Text);
    
    // Publications Section
    setText('publications-title', t.publicationsTitle);
    setText('pub1-title', t.pub1Title);
    setText('pub1-authors', t.pub1Authors);
    setText('pub1-authors-list', t.pub1AuthorsList);
    setText('pub1-conference', t.pub1Conference);
    setText('pub1-conference-name', t.pub1ConferenceName);
    setText('pub1-abstract', t.pub1Abstract);
    setText('pub1-abstract-text', t.pub1AbstractText);
    setText('pub2-title', t.pub2Title);
    setText('pub2-authors', t.pub2Authors);
    setText('pub2-authors-list', t.pub2AuthorsList);
    setText('pub2-journal', t.pub2Journal);
    setText('pub2-journal-name', t.pub2JournalName);
    setText('pub2-abstract', t.pub2Abstract);
    setText('pub2-abstract-text', t.pub2AbstractText);
    setText('pub3-title', t.pub3Title);
    setText('pub3-authors', t.pub3Authors);
    setText('pub3-authors-list', t.pub3AuthorsList);
    setText('pub3-conference', t.pub3Conference);
    setText('pub3-conference-name', t.pub3ConferenceName);
    setText('pub3-abstract', t.pub3Abstract);
    setText('pub3-abstract-text', t.pub3AbstractText);
    
    // Projects Section
    setText('projects-title', t.projectsTitle);
    setText('project1-title', t.project1Title);
    setText('project1-role', t.project1Role);
    setText('project1-role-text', t.project1RoleText);
    setText('project1-duration', t.project1Duration);
    setText('project1-duration-text', t.project1DurationText);
    setText('project1-text', t.project1Text);
    setText('project1-tech', t.project1Tech);
    setText('project1-tech-list', t.project1TechList);
    setText('project2-title', t.project2Title);
    setText('project2-role', t.project2Role);
    setText('project2-role-text', t.project2RoleText);
    setText('project2-duration', t.project2Duration);
    setText('project2-duration-text', t.project2DurationText);
    setText('project2-text', t.project2Text);
    setText('project2-tech', t.project2Tech);
    setText('project2-tech-list', t.project2TechList);
    setText('project3-title', t.project3Title);
    setText('project3-role', t.project3Role);
    setText('project3-role-text', t.project3RoleText);
    setText('project3-duration', t.project3Duration);
    setText('project3-duration-text', t.project3DurationText);
    setText('project3-text', t.project3Text);
    setText('project3-tech', t.project3Tech);
    setText('project3-tech-list', t.project3TechList);
    
    // Contact Section
    setText('contact-title', t.contactTitle);
    setText('contact-email', t.contactEmail);
    setText('contact-office', t.contactOffice);
    setText('contact-office-text', t.contactOfficeText);
    setText('contact-office-location', t.contactOfficeLocation);
    setText('contact-links', t.contactLinks);
    setText('contact-collaboration', t.contactCollaboration);
    
    // Footer
    setText('footer-copyright', t.footerCopyright);
}

// Helper function to set text content
function setText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    } else if (typeof console !== 'undefined' && console.warn) {
        // Log warning in development mode
        console.warn(`Element with id "${id}" not found`);
    }
}
