(()=>{
  const pages={};
  const add=(slug,title,group,description,extra={})=>pages[slug]={slug,title,group,description,...extra};

  [
    ['payment-solutions','Payment Solutions','Explore online, retail, cost-reduction, high-risk, international, and fraud-protection payment options built around how your business sells.'],
    ['online','Online Payments','Secure online payment processing for eCommerce stores, mobile commerce, subscriptions, and digital services.'],
    ['retail','Retail Payments','Flexible in-person payment acceptance with reliable terminals, modern POS systems, and clear reporting.'],
    ['zero-cost-processing','Zero Cost Processing','Compliant pricing programs designed to help eligible merchants offset card-processing costs.'],
    ['cash-discount','Cash Discount','Offer customers a clearly disclosed cash price while maintaining a convenient card-payment option.'],
    ['dual-pricing','Dual Pricing','Display card and cash prices side by side so customers can choose how they want to pay.'],
    ['surcharging','Surcharging','Add a compliant card surcharge where permitted while keeping pricing transparent for customers.'],
    ['high-risk','High-Risk Processing','Reliable merchant-account options for regulated, emerging, and harder-to-place business models.'],
    ['international','International Payments','Accept payments across markets with multi-currency support and global acquiring relationships.'],
    ['3d-secure','3D Secure','Add issuer-backed customer authentication to reduce fraud exposure and strengthen online transactions.']
  ].forEach(([slug,title,description])=>add(slug,title,'Payment Solutions',description,{features:['Fast application review','Secure payment acceptance','Flexible gateway and terminal options','Hands-on account support']}));

  [
    ['products','Products','Explore payment hardware, point-of-sale systems, gateways, and accessories selected around your workflow.'],
    ['pos-systems','POS Systems','Manage payments, inventory, staff, reporting, and customer experiences from one connected platform.'],
    ['pin-pads','PIN Pads','Secure customer-facing devices supporting chip, swipe, PIN, and contactless payments.'],
    ['printers','Printers','Dependable receipt, label, and kitchen printing for busy retail and hospitality environments.'],
    ['handheld-terminals','Handheld Terminals','Portable all-in-one devices for tableside, curbside, delivery, and mobile checkout.'],
    ['wireless-card-readers','Wireless Card Readers','Accept secure payments throughout your location or while operating on the move.'],
    ['card-readers','Card Readers','Compact EMV, NFC, and magnetic-stripe acceptance for integrated payment environments.'],
    ['mobile-readers','Mobile Readers','Turn a compatible phone or tablet into a flexible payment-acceptance solution.'],
    ['countertop-terminals','Countertop Terminals','Fast, durable payment terminals designed for dependable everyday checkout.'],
    ['gateways','Payment Gateways','Connect websites, software, invoicing, and virtual terminals to secure payment processing.'],
    ['payment-accessories','Payment Accessories','Complete your checkout setup with scanners, cash drawers, stands, cables, and other essentials.']
  ].forEach(([slug,title,description])=>add(slug,title,'Products',description,{features:['EMV and contactless ready','Secure encrypted transactions','Flexible connectivity','Business-ready support']}));

  [
    ['bodega-ai-pos-system','Bodega AI','AI-native point-of-sale system for independent retailers with SKU intelligence, dual pricing, inventory tracking, analytics, and Android-compatible hardware.','POS Systems'],
    ['clover-flex-3rd-gen','Clover Flex 3rd Gen','Portable smart terminal for line-busting, curbside checkout, tableside payment acceptance, receipt printing, and compact retail workflows.','Wireless Card Readers'],
    ['clover-station-duo-2','Clover Station Duo 2','Dual-screen countertop POS for retail and service businesses that need fast checkout, customer display, printing, and reporting.','POS Systems'],
    ['clover-mini-3rd','Clover Mini 3rd','Compact countertop POS for smaller counters that need payments, receipts, simple inventory, and reporting.','POS Systems'],
    ['ingenico-dx8000','Ingenico DX8000','Smart Android payment terminal for mobile checkout, customer-facing payments, and wireless acceptance.','Wireless Card Readers'],
    ['valor-vl500','Valor VL500','Reliable card reader for fast in-person chip, swipe, tap, and keyed transactions.','Card Readers'],
    ['authorize-net-gateway','Authorize.Net Gateway','Secure online payment gateway for eCommerce checkout, invoices, recurring billing, and virtual terminal payments.','Gateways'],
    ['star-printer','Star Thermal Printer','Dependable receipt printer for retail, restaurant, and service checkout environments.','Printers'],
    ['zebra-scanner','Zebra Scanner','Barcode scanning accessory for faster item lookup, checkout, and inventory workflows.','Payment Accessories'],
    ['bbpos-chipper','BBPOS Chipper','Compact mobile card reader for phone and tablet-based payment acceptance.','Mobile Readers'],
    ['pax-a35','PAX A35','Customer-facing PIN pad for secure debit, EMV, and contactless countertop payments.','PIN Pads']
  ].forEach(([slug,title,description,category])=>add(slug,title,'Product Details',description,{category,template:'product-detail'}));

  const industryNames=[
    ['industries','All Industries'],['adult','Adult'],['cannabis','Cannabis-Related Businesses'],['cbd-delta-8','CBD & Delta 8'],['firearms','Firearms'],['jet-charter','Jet & Charter'],['jewellery-diamonds','Jewellery & Diamonds'],['peptides','Peptides'],['restaurant-bar','Restaurant & Bar'],['retail-industry','Retail'],['tobacco-cigarettes','Tobacco & Cigarettes'],['vape-ecig','Vape & eCig'],['web-design','Web Design'],['see-more-industries','See More Industries'],['travel','Travel'],['kratom','Kratom'],['7oh','7-OH'],['nutra','Nutraceuticals'],['hotels','Hotels'],['health-beauty','Health & Beauty'],['medical','Medical'],['food-truck','Food Trucks'],['apparel','Apparel'],['professional-services','Professional Services']
  ];
  industryNames.forEach(([slug,title])=>add(slug,title,'Industries',slug==='industries'?'Payment processing for low-risk, high-risk, card-present, and online businesses across more than one hundred industries.':`Payment processing structured around the operational, compliance, and customer-experience needs of ${title.toLowerCase()} businesses.`,{features:['Industry-aware underwriting','Online and in-person options','Fraud and chargeback tools','Dedicated support from application to launch']}));

  [
    ['partners','Partners','Partner with MannyPay through referral and agent programs designed around recurring revenue, merchant support, and long-term portfolio growth.'],
    ['referral-partners','Referral Partners','Introduce merchants to MannyPay and earn recurring residual income while our team handles the sales and onboarding process.'],
    ['agent-iso-partners','Agent / ISO Partners','Build and grow your payments portfolio with competitive revenue share, transparent reporting, and responsive support.']
  ].forEach(([slug,title,description])=>add(slug,title,'Partners',description,{features:['Competitive lifetime residuals','Detailed portfolio reporting','Fast merchant support','Broad low- and high-risk placement options']}));

  [
    ['integrations','All Integrations'],['shopify','Shopify'],['magento','Magento'],['woocommerce','WooCommerce'],['clover-pos','Clover POS'],['bigcommerce','BigCommerce'],['authorize-net','Authorize.Net'],['nmi','NMI'],['quickbooks','QuickBooks'],['salesforce','Salesforce'],['opencart','OpenCart'],['volusion','Volusion'],['zencart','Zen Cart'],['ecwid','Ecwid']
  ].forEach(([slug,title])=>add(slug,title,'Integrations',slug==='integrations'?'Connect MannyPay to leading commerce, accounting, CRM, gateway, and point-of-sale platforms.':`Connect ${title} with MannyPay for a streamlined payment, reporting, and customer-management workflow.`,{features:['Guided implementation','Secure payment connectivity','Centralized reporting','Support for growing transaction volume']}));

  add('about','About MannyPay','Company','MannyPay simplifies payment processing with practical technology, flexible placement options, and support that stays close to the merchant.');
  add('contact','Contact Us','Company','Tell us what you need and a MannyPay specialist will help identify the right payment path.',{template:'contact'});
  add('careers','Careers','Company','Help build approachable payment experiences for ambitious businesses and partners.',{template:'careers'});
  add('blog','Insights','Company','Payment operations, fraud prevention, hardware, pricing, and industry guidance from MannyPay.',{template:'blog'});
  add('upload','Secure Document Upload','Company','Send requested business documents securely to the MannyPay onboarding team.',{template:'upload'});
  add('privacy-policy','Privacy Policy','Legal','How MannyPay collects, uses, protects, and shares information when you use our websites and services.',{template:'privacy'});
  add('terms-conditions','Terms & Conditions','Legal','The terms governing access to MannyPay websites, content, forms, and related services.',{template:'terms'});
  add('free-quote','Free Quote / Apply Now','Onboarding','Share a few business details and receive a tailored processing recommendation.',{template:'application'});
  add('merchant-sign-up','Merchant Sign Up','Onboarding','Start your merchant application with basic contact and business information.',{template:'application'});
  add('referral-partner-sign-up','Referral Partner Sign Up','Onboarding','Join MannyPay as a referral partner and begin introducing businesses to our team.',{template:'partner-application'});
  add('agent-iso-sign-up','Agent / ISO Partner Sign Up','Onboarding','Tell us about your payments experience and the portfolio you want to build.',{template:'partner-application'});
  add('login','Login','Utility','Choose the MannyPay portal associated with your merchant or partner account.',{template:'login'});
  add('sign-up','Sign Up','Onboarding','Choose whether you want to apply as a merchant, referral partner, or agent / ISO partner.',{template:'signup'});

  const nav=[
    {label:'Payment Solutions',slug:'payment-solutions',featured:{title:'Payments without the runaround',copy:'Online, retail, pricing, high-risk, and international options in one place.'},columns:[{label:'Accept Payments',items:['online','retail','high-risk','international']},{label:'Reduce Costs',items:['zero-cost-processing','cash-discount','dual-pricing','surcharging']},{label:'Protect Revenue',items:['3d-secure']}]},
    {label:'Products',slug:'products',featured:{title:'Hardware that fits the workflow',copy:'From mobile readers to complete point-of-sale systems.'},columns:[{label:'Point of Sale',items:['products','pos-systems','handheld-terminals','countertop-terminals']},{label:'Payment Devices',items:['wireless-card-readers','card-readers','mobile-readers','pin-pads']},{label:'Infrastructure',items:['gateways','printers','payment-accessories']}]},
    {label:'Industries',slug:'industries',featured:{title:'Built for more business types',copy:'Flexible solutions for conventional, regulated, and emerging industries.'},columns:[{label:'Featured',items:['adult','cannabis','cbd-delta-8','firearms','jet-charter','jewellery-diamonds']},{label:'Commerce',items:['restaurant-bar','retail-industry','apparel','food-truck','hotels','travel']},{label:'Specialty',items:['peptides','tobacco-cigarettes','vape-ecig','kratom','7oh','nutra']},{label:'More Industries',items:['health-beauty','medical','web-design','professional-services','see-more-industries','industries']}]},
    {label:'Partners',slug:'partners',featured:{title:'Grow with MannyPay',copy:'Referral and agent programs backed by responsive merchant support.'},columns:[{label:'Programs',items:['partners','referral-partners','agent-iso-partners']},{label:'Get Started',items:['referral-partner-sign-up','agent-iso-sign-up']}]},
    {label:'Integrations',slug:'integrations',featured:{title:'Connect the tools you use',copy:'Commerce, accounting, CRM, POS, and gateway integrations.'},columns:[{label:'Commerce',items:['shopify','magento','woocommerce','bigcommerce','opencart','ecwid']},{label:'Payments',items:['clover-pos','authorize-net','nmi']},{label:'Business Tools',items:['quickbooks','salesforce','volusion','zencart']}]} 
  ];

  window.MANNYPAY_SITE={pages,nav,industryNames,href:slug=>`inner.html?page=${encodeURIComponent(slug)}`};
})();
