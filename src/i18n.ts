import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Customers: "Customers",
        Services: "Services",
        Technology: "Technology",
        Company: "Company",
        Docs: "Docs",
        main_intro_title: "The Future of Markets",
        main_intro_text:
          "A tech platform that provides professional market making tools and services - for scaling, earning and asset allocation.",
        "Trusted by": "trusted by",
        main_text: "The best way to predict the market is to create it",
        main_link_1: "Market Making Services",
        main_link_2: "ALLOCATE AND GROW THE CAPITAL",
        main_link_3: "CREATE AND MANAGE MARKETS",
        main_link_1_btn: "Scale",
        main_link_2_btn: "Earn",
        main_link_3_btn: "Use",
        main_cards_title: "Most Advanced and Effective Liquidity Management",
        main_cards_1_tag: "Reliability",
        main_cards_1_title: "Distributed Nodes",
        main_cards_1_text:
          "A decentralized node network with neuronic automation systems that leverage stability and performance, without any downtime or costs for maintenance.",
        main_cards_2_tag: "Efficiency",
        main_cards_2_title: "High Speed",
        main_cards_2_text:
          "Automation systems with routing mechanisms to choose the fastest nodes and have the lowest quote to quote latency.",
        main_cards_3_tag: "Scalability",
        main_cards_3_title: "Bandwidth",
        main_cards_3_text:
          "Utilization of node capacity and network optimization to provide high speed data transfer between the automation system and exchange, reaching 500k quotes/minute per node.",
        main_cards_4_tag: "Connectivity",
        main_cards_4_title: "Socket",
        main_cards_4_text:
          "Flexible widget interfaces for casual use or unified protocol which allows modular bolt-on connectivity with professional terminals and institutional software.",
        main_video_text:
          "One technology to rule all markets. Technology for distributed automation systems for distributed automation systems",
        main_globe_title: "Global. Stable. Efficient.",
        main_globe_text:
          "Distributed runtime engine for trading and market making.",
        Stats: "Stats",
        main_stats_1_title: "$110M",
        main_stats_1_text: "TVL",
        main_stats_2_title: "≤38%",
        main_stats_2_text: "APR",
        main_stats_3_title: "500K",
        main_stats_3_text: "Request Per Min",
        main_stats_4_title: "10K",
        main_stats_4_text: "Orders Per Sec",
        main_stats_5_title: "27",
        main_stats_5_text: "Running Nodes",
        main_stats_6_title: "~23MS",
        main_stats_6_text: "Order Latency",
        main_services_1_title: "Premarket",
        main_services_1_list: "Token development, Advisory, Fundraising",
        main_services_2_title: "Market Making",
        main_services_2_list:
          "TGE and Launch, Market boost, Liquidity management",
        main_services_3_title: "Market Support",
        main_services_3_list:
          "PR/media promotions, KOLs engagement, Network introductions",
        main_services_4_title: "Capital Allocation",
        main_services_4_list:
          "ARB and Stat ARB, HFT Scalping, Market accumulation",
        main_services_5_title: "SAAS",
        main_services_5_list:
          "Pro-dashboard, Automation systems, Raw data analytics",
        main_services_6_title: "Technology",
        main_services_6_list: "SDK kit,Node servers,Backend integration",
        "as seen in": "as seen in",
        main_news_1_tag: "Case Studies",
        main_news_1_text:
          "Tokenization Spotlight: Courtyard.io Puts Analog Collectibles Like Pokémon Cards Onchain",
        main_final_subtitle: "Get in touch",
        main_final_title: "Ready to Level Up?",
        "Get Started": "Get Started",
        service_intro_title: "The Market is Yours",
        service_intro_text:
          "Full circle Token development and Market Making, organic market activation and liquidity provision solutions.",
        "Get In": "Get In",
        service_cards_1_tag: "Launch",
        service_cards_1_text:
          "Launch a new market with fully prepared and stress-tested economy",
        service_cards_2_tag: "Scale",
        service_cards_2_text:
          "Scale you secondary token markets to reach new audience",
        service_cards_3_tag: "fundraise",
        service_cards_3_text:
          "Attract financing and liquidity to increase the market size",
        service_cards_4_tag: "Protect",
        service_cards_4_text:
          "Protect your project’s capital from arbitrage and spread exploits",
        service_cards_5_tag: "increase the Treasury",
        service_cards_5_text:
          "Increase the treasury with our expert algorithms",
        service_cards_6_tag: "use Analytics",
        service_cards_6_text: "Full detailed RAW data with in-depth analytics",
        service_text: "We help you grow and protect your market",
        service_image_text:
          "Liqudity control center with real-time data to monitor and manage your market",
        "Connected exchanges": "Connected exchanges",
        service_image_2_title: "Want to manage market yourself?",
        service_image_2_text:
          "Use STELS pro-dashboard with integrated automation systems.",
        "Learn More": "Learn More",
        service_final_subtitle: "Get in touch",
        service_final_title: "Take Your Project to the Next Level",
        service_final_btn: "Get Started",
        dist_intro_title: "Make Your Funds Work",
        dist_intro_text:
          "Full circle Token development and Market Making, organic market activation and liquidity provision solutions. Organic market activation and liquidity provision solutions.",
        dist_cards_1_text: "Low risk HFT arbitrage strategies",
        dist_cards_2_text: "Market accumulation opportunities",
        dist_cards_3_text: "Portfolio dashboard with analytics",
        dist_cards_4_text: "Self-custody",
        dist_text:
          "Access professional market making tools and automation systems",
        dist_strategy_1_title: "Стратегия 1",
        dist_strategy_1_text:
          "Open a new market and with fully prepared and stress-tested economy. Scale you secondary token markets to reach new audience",
        dist_strategy_2_title: "Стратегия 2",
        dist_strategy_2_text:
          "Attract liquidity from your customers to increase the market size. Protect your project’s capital from arbitrage and spread exploits",
        dist_strategy_3_title: "Стратегия 3",
        dist_strategy_3_text:
          "Increase the treasury with our expert algorithms. Full detailed RAW data with in-depth analytics.",
        "Platform advantages": "Platform advantages",
        dist_adv_1_title: "Low Risk HFT Arbitrage Strategies",
        dist_adv_1_text:
          "Use ready-to-go setup of algorithms that are united into Botboxes - teams of specialized AI-workers that are combining efforts to maximize efficiency and perform the ordered task.",
        dist_adv_2_title: "Portfolio Dashboard with Analytics",
        dist_adv_2_text:
          "Enhance your ROI and metrics with our neuronic decision-making system, that analyzes streaming RAW data from all markets and communicates with all the bots to immediately execute.",
        dist_adv_3_title: "Self-Custody",
        dist_adv_3_text:
          "Connect through encrypted API keys or thought our patented WEB-fix protocol directly. Maintain full control of your assets, benefiting from compounded rewards and flexible withdrawals.",
        dist_adv_4_title: "Market Accumulation Opportunities",
        dist_adv_4_text:
          "Flexible widget interfaces for casual use or unified protocol which allows modular bolt-on connectivity with professional terminals and institutional software.",
        dist_adv_5_title: "Support and Service",
        dist_adv_5_text:
          "Have 24/7 customer support and education tutorials to enjoy all the features available.",
        dist_image_title: "Need an institutional connection?",
        dist_image_text:
          "Connect your software to STELS and benefit from the technology features.",
        "Trusted by institutional clients": "Trusted by institutional clients",
        dist_final_subtitle: "Get started",
        dist_final_title: "Explore the Opportunities",
        dist_final_btnText: "Get In",
        usage_intro_title: "Create and Manage Markets",
        usage_intro_text:
          "Market making and liquidity management technology that empowers your ideas with all the possibilities.",
        usage_cards_1_tag: "For projects",
        usage_cards_1_text: "Market Making for Digital Assets",
        usage_cards_2_tag: "FOR TRADING TEAMS",
        usage_cards_2_text: "Back-End SDK Integration",
        usage_cards_3_tag: "FOR DEFI SERVICES",
        usage_cards_3_text: "Build on STELS Network",
        usage_text: "Get an edge with our disrupting technology",
        "Use cases": "Use cases",
        usage_cases_1_title: "Market Making for Digital Assets",
        usage_cases_1_text:
          "Ready to go automation systems to increase the efficiency of the market while cutting the operational cost.; Flexible strategies based on neuronic modules.; Advanced tools to configure own market behavior.",
        usage_cases_2_title: "Back-End SDK Integration",
        usage_cases_2_text:
          "Fast and reliable trading engine build on RUST.; Unified connector for CEX and DEX exchanges, SPOT or Derivatives markets.; External compatibility with all professional dashboards.",
        usage_cases_3_title: "Build on STELS network",
        usage_cases_3_text:
          "Distributed network nodes with minimum latency.; Huge in and out quote capacity.; Various protocol support, build in WEB-FIX for RAW data communication.",
        "Technology advantages": "Technology advantages",
        usage_adv_1_text: "Real time raw data analysis",
        usage_adv_2_text: "Customizable dashboards ",
        usage_adv_3_text: "Unified connector",
        usage_adv_4_text: "High speed stable connection",
        usage_adv_5_text: "Huge bandwidth capacity",
        usage_adv_6_text: "Encrypted data transfer protocol",
        usage_final_subtitle: "Get started",
        usage_final_title: "Ready to Level Up?",
        usage_final_btnText: "Get In",
        about_intro_title: "About Us",
        about_intro_text_1:
          "We are STELS, a global market making and technology development company. We are excited to share our passion for innovative and disrupting products.",
        about_intro_text_2:
          "Team from top corporations and hedge funds such as Deutsche Bank, Casys Capital, SxS, Atas Trading and Spacefex Capital. With over 7 years in top-tier Market-Making, we combine our knowledge and experience to deliver technology that redefines market making at its core.",
        about_invite_title: "Ready to Experience the Future?",
        about_invite_text:
          "Become a part of the STELS community. Explore our products, engage with our team, and witness the future of market management and yield generation.",
        Home: "Home",
        Partners: "Partners",
        "Future of Market": "Future of Market",
        "Tech Features": "Tech Features",
        "In the News": "In the News",
        Projects: "Projects",
        Holders: "Holders",
        "Asset managers": "Asset managers",
        Exchanges: "Exchanges",
        "Trading teams": "Trading teams",
        Developers: "Developers",
        "Pre-market": "Pre-market",
        "Market Making": "Market Making",
        "Market Support": "Market Support",
        "Capital Allocation": "Capital Allocation",
        SAAS: "SAAS",
        "About us": "About us",
        "Become a part of STELS community": "Become a part of STELS community",
        contact_error_text:
          "Enter your name, email or telegram address and your request",
        contact_title: "Leave your request and we’ll reply to you shortly",
      },
    },
    ru: {
      translation: {
        Customers: "Клиенты",
        Services: "Сервис",
        Technology: "Технологии",
        Company: "Компания",
        Docs: "Документация",
        "About us": "О нас",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
