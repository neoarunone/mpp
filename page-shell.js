(()=>{
  const site=window.MANNYPAY_SITE;
  if(!site)return;
  const params=new URLSearchParams(location.search),slug=params.get('page')||'online',page=site.pages[slug]||site.pages.online;
  document.body.dataset.pageKey=page.slug;
  document.body.dataset.studioNamespace=page.slug==='online'?'online-v2':page.slug;
  document.title=`${page.title} | MannyPay`;
  const main=document.querySelector('#main');
  const esc=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const href=site.href;
  const featureIcons=['verified_user','bolt','account_balance_wallet','support_agent'];
  const genericFaq=[
    ['How quickly can I get started?','Timing depends on the business type, requested solution, and completeness of the application. A specialist will explain the required documents and expected review path.'],
    ['Can MannyPay support online and in-person payments?','Yes. Solutions can include gateways, virtual terminals, payment links, countertop hardware, mobile readers, and complete point-of-sale systems.'],
    ['What security tools are available?','Available tools can include tokenization, PCI support, fraud screening, 3D Secure, address verification, and chargeback-management resources.'],
    ['Will the solution integrate with my existing software?','MannyPay supports leading commerce, accounting, CRM, gateway, and point-of-sale platforms, along with custom integration paths.']
  ];
  const imagePlaceholder=label=>`<div class="image-placeholder" role="img" aria-label="${esc(label)} image placeholder"><span class="material-symbols">image</span></div>`;
  const cta=`<section class="final-cta"><div class="container"><h2>Ready to simplify<br><span>your payments?</span></h2><a class="button button-dark" href="${href('free-quote')}">Get a free quote <span>→</span></a></div></section>`;
  const featureGrid=features=>`<div class="feature-grid">${features.map((item,index)=>`<article class="feature-card"><span class="material-symbols">${featureIcons[index%featureIcons.length]}</span><h3>${esc(item)}</h3><p>Flexible tools, clear guidance, and responsive support designed around the way your business accepts payments.</p></article>`).join('')}</div>`;
  const faq=items=>`<section class="inner-section"><div class="container inner-faq"><h2>Frequently asked<br><span>questions</span></h2><div class="accordion">${items.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></div></section>`;
  const hero=()=>`<section class="inner-hero"><div class="container inner-hero-grid"><div class="inner-hero-copy"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>${esc(page.group)}</span><span>/</span><span>${esc(page.title)}</span></nav><p class="inner-kicker">${esc(page.group)}</p><h1>${esc(page.title)} <span>built around your business.</span></h1><p>${esc(page.description)}</p><div class="inner-actions"><a class="button button-primary" href="${href('free-quote')}">Get started <span>→</span></a><a class="button button-secondary" href="${href('contact')}">Talk to a specialist</a></div></div><div class="inner-visual">${imagePlaceholder(page.title)}</div></div></section>`;
  const related=()=>{const items=Object.values(site.pages).filter(item=>item.group===page.group&&item.slug!==page.slug).slice(0,6);return items.length?`<section class="inner-section tint"><div class="container"><header class="inner-heading"><p class="section-label">Explore more</p><h2>More from <span>${esc(page.group)}</span></h2></header><div class="page-card-grid">${items.map(item=>`<a class="page-link-card" href="${href(item.slug)}"><span class="material-symbols">arrow_outward</span><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><span>Explore →</span></a>`).join('')}</div></div></section>`:''};

  function onlinePage(){
    const merchants=[
      ['shield_lock','Adult','Private, secure processing for regulated online businesses.'],
      ['science','CBD & Delta 8','Flexible account options for compliant wellness merchants.'],
      ['eco','Cannabis-related','Specialized support for eligible cannabis-adjacent businesses.'],
      ['flight','Jet & charter','Tools for high-ticket bookings and remote payments.'],
      ['diamond','Jewellery','Secure checkout support for valuable goods and luxury retail.'],
      ['sports_martial_arts','Firearms','Industry-aware underwriting for compliant merchants.'],
      ['description','Document services','Online invoicing and card-not-present payment tools.'],
      ['chair','Furniture','Checkout, invoicing and deposits for custom orders.'],
      ['smoking_rooms','Vape & tobacco','Payment options built around regulated commerce.'],
      ['health_and_safety','Telemedicine','Simple recurring and patient payment experiences.'],
      ['subscriptions','Subscriptions','Recurring billing for memberships and digital services.'],
      ['storefront','eCommerce','Gateway connections for growing online storefronts.']
    ];
    const options=[
      ['shopping_cart','eCommerce','Create a secure, low-friction checkout for web and mobile shoppers.','assets/images/online-payments/ecommerce.jpg'],
      ['language','Card not present','Accept keyed, invoice, payment-link and virtual-terminal transactions.','assets/images/online-payments/card-not-present.jpg'],
      ['point_of_sale','Retail','Connect online orders with in-store terminals and operational reporting.','assets/images/online-payments/retail.jpg'],
      ['restaurant','Restaurants','Support online ordering, deposits, tabs and customer-friendly checkout.','assets/images/online-payments/restaurant.jpg']
    ];
    const reviews=[
      ['“The right payment partner should make complex requirements feel manageable—from application through launch.”','Sample testimonial','Replace with a verified MannyPay customer review.'],
      ['“Responsive support and a checkout configured around the business can save hours of manual work every month.”','Sample testimonial','Replace with a verified MannyPay customer review.'],
      ['“Clear communication, dependable integrations and practical fraud tools are what merchants value most.”','Sample testimonial','Replace with a verified MannyPay customer review.']
    ];
    return `<div class="online-page">
      <section class="online-hero" aria-labelledby="online-title">
        <div class="container online-hero-grid">
          <div class="online-hero-copy">
            <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Payment Solutions</span><span>/</span><span>Online Payments</span></nav>
            <p class="online-eyebrow">Online payment processing</p>
            <h1 id="online-title">Accept payments online. Grow without limits.</h1>
            <p>Bring cards, digital wallets, payment links and recurring billing into one secure checkout experience—configured around how your business sells.</p>
            <a class="button button-primary online-cta" href="#free-quote">Get a free quote <span>arrow_downward</span></a>
            <div class="online-trust"><span><i class="material-symbols">verified_user</i>Secure technology</span><span><i class="material-symbols">bolt</i>Fast onboarding</span><span><i class="material-symbols">support_agent</i>Human support</span></div>
          </div>
          <div class="online-hero-visual">
            <img src="assets/images/home/online-merchant.jpg" alt="Online merchant preparing customer orders" width="1200" height="800">
            <div class="online-payment-status"><span class="material-symbols">check_circle</span><div><small>Payment approved</small><strong>$248.00</strong></div></div>
          </div>
        </div>
      </section>

      <section class="online-section online-merchants" aria-labelledby="merchant-title">
        <div class="container">
          <header class="online-heading centered"><p class="online-eyebrow">Built for more business models</p><h2 id="merchant-title">We work with <span>every kind of merchant.</span></h2><p>From everyday eCommerce to complex and regulated industries, MannyPay helps match merchants with the right account, gateway and payment tools.</p></header>
          <div class="merchant-grid">${merchants.map(([icon,title,copy])=>`<article class="merchant-card"><span class="material-symbols" style="--icon-weight:200">${icon}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div>
          <div class="online-center-action"><a class="button button-primary" href="#free-quote">Get a free quote <span>→</span></a></div>
        </div>
      </section>

      <section class="online-section online-developers" aria-labelledby="developer-title">
        <div class="container online-split">
          <div class="online-copy"><p class="online-eyebrow">For developers</p><h2 id="developer-title">A payment setup that fits <span>your stack.</span></h2><p>Connect your website, accounting platform, CRM, shopping cart, point of sale or preferred gateway. MannyPay helps your team identify a practical integration path without forcing the rest of your operation to change.</p><ul class="online-checks"><li>Gateway and virtual-terminal options</li><li>Recurring and subscription billing</li><li>Hosted checkout and payment links</li><li>Fraud, tokenization and reporting tools</li></ul><a class="text-arrow" href="${href('web-design')}">Explore developer solutions <span>arrow_forward</span></a></div>
          <div class="online-upload-placeholder" role="img" aria-label="Developer integration image placeholder"><span class="material-symbols">add_photo_alternate</span><strong>Developer image placeholder</strong><small>Upload your final visual in Design Studio</small></div>
        </div>
      </section>

      <section class="online-section online-options" aria-labelledby="options-title">
        <div class="container">
          <header class="online-heading"><p class="online-eyebrow">Flexible ways to get paid</p><h2 id="options-title">Payment options your business can <span>rely on.</span></h2><p>Choose the right experience for each customer—from a mobile checkout to a keyed transaction or connected in-store sale.</p></header>
          <div class="payment-option-grid">${options.map(([icon,title,copy,image])=>`<article class="payment-option"><div class="payment-option-image"><img src="${image}" alt="${title} payment environment" loading="lazy"><span class="material-symbols" style="--icon-weight:200">${icon}</span></div><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('')}</div>
        </div>
      </section>

      <section class="online-section online-testimonials" aria-labelledby="reviews-title">
        <div class="container testimonial-layout">
          <div><p class="online-eyebrow">Merchant feedback</p><h2 id="reviews-title">What businesses value in a <span>payment partner.</span></h2><div class="testimonial-controls"><button type="button" data-review-prev aria-label="Previous testimonial"><span class="material-symbols">arrow_back</span></button><button type="button" data-review-next aria-label="Next testimonial"><span class="material-symbols">arrow_forward</span></button></div></div>
          <div class="testimonial-slider" aria-live="polite">${reviews.map(([quote,name,role],index)=>`<figure class="testimonial-slide${index===0?' active':''}" data-review-slide><div class="review-stars" aria-label="Five stars">★★★★★</div><blockquote>${quote}</blockquote><figcaption><strong>${name}</strong><span>${role}</span></figcaption></figure>`).join('')}</div>
        </div>
      </section>

      <section class="online-section online-manny" aria-labelledby="manny-title">
        <div class="container online-split manny-split">
          <div class="manny-portrait"><img src="assets/images/online-payments/manny-blue-card.png" alt="Manny Pacquiao holding a blue payment card" loading="lazy" width="1024" height="1536"></div>
          <div class="online-copy"><p class="online-eyebrow">Meet MannyPay</p><h2 id="manny-title">Payments should feel <span>clear, fast and supported.</span></h2><p>MannyPay brings together payment technology, processing relationships and hands-on guidance for businesses that need more than a one-size-fits-all account.</p><p>Whether you are launching a new store or replacing a solution that no longer fits, our goal is simple: understand your business, help you get approved and give you the tools to keep moving.</p><a class="text-arrow" href="${href('about')}">About MannyPay <span>arrow_forward</span></a></div>
        </div>
      </section>

      <section class="online-quote" id="free-quote" aria-labelledby="quote-title">
        <div class="container quote-grid">
          <div class="quote-copy"><p class="online-eyebrow">Free payment review</p><h2 id="quote-title">Start accepting payments with <span>confidence.</span></h2><p>Tell us a little about your business. A MannyPay specialist will review your needs and outline the most suitable next step.</p><div class="quote-points"><span><i class="material-symbols">check</i>No-obligation conversation</span><span><i class="material-symbols">check</i>Options matched to your business</span><span><i class="material-symbols">check</i>Secure handling of your information</span></div></div>
          <form class="online-quote-form" id="online-quote-form">
            <div class="quote-field"><label for="quote-first">First name <span>*</span></label><input id="quote-first" name="firstName" autocomplete="given-name" required></div>
            <div class="quote-field"><label for="quote-last">Last name <span>*</span></label><input id="quote-last" name="lastName" autocomplete="family-name" required></div>
            <div class="quote-field full"><label for="quote-industry">Industry <span>*</span></label><input id="quote-industry" name="industry" autocomplete="organization-title" required></div>
            <div class="quote-field"><label for="quote-email">Email <span>*</span></label><input id="quote-email" name="email" type="email" autocomplete="email" required></div>
            <div class="quote-field"><label for="quote-phone">Mobile number <span>*</span></label><input id="quote-phone" name="phone" type="tel" autocomplete="tel" required></div>
            <div class="quote-field full"><label for="quote-volume">Estimated monthly processing volume <span>*</span></label><select id="quote-volume" name="volume" required><option value="">Select a range</option><option>Under $25,000</option><option>$25,000–$100,000</option><option>$100,000–$500,000</option><option>Over $500,000</option></select></div>
            <button class="button button-primary full" type="submit">Request my free quote <span>→</span></button>
            <p class="quote-privacy full">By submitting, you agree that MannyPay may contact you about this request. Review our <a href="${href('privacy-policy')}">Privacy Policy</a>.</p><p class="quote-status full" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </div>`;
  }

  const solutionPages={
    'payment-solutions':{
      kicker:'Merchant payment solutions',
      title:'Payment solutions that fit the way you sell.',
      intro:'MannyPay brings online checkout, retail acceptance, cost-reduction programs, high-risk placement, international processing and fraud protection into one clear path.',
      image:'assets/images/home/hero-composite.png',
      alt:'MannyPay payment hardware and online checkout tools',
      supportTitle:'We work with many types of merchants',
      supportIntro:'Use this page as the hub for the major ways MannyPay can help a business accept payments, protect revenue and reduce operational friction.',
      support:[['storefront','Retail stores'],['shopping_cart','eCommerce'],['restaurant','Restaurants & bars'],['public','International merchants'],['shield_lock','High-risk businesses'],['price_check','Dual pricing'],['payments','Cash discount'],['verified_user','3D Secure']],
      benefitsTitle:'A smarter route to payment processing',
      benefits:[['hub','One connected setup','Match gateways, hardware, pricing programs and reporting to one operating model.'],['bolt','Faster launch path','Understand requirements early, reduce back-and-forth and move toward approval with confidence.'],['support_agent','Human guidance','Get practical support from application through configuration and launch.']],
      tools:['Online checkout and payment links','Retail POS and terminals','Cash discount and dual pricing','Surcharging where allowed','High-risk account placement','International and multi-currency options','Fraud and 3DS tools','Reporting and integrations'],
      faqs:[['What solution should I start with?','Start with how you accept payments today: online, in-person, keyed-in, recurring, or across borders. MannyPay can then recommend the best fit.'],['Can one business use multiple payment solutions?','Yes. Many merchants combine online gateways, retail terminals, reporting, fraud tools and pricing programs.'],['Is every pricing program available everywhere?','No. Surcharging and related programs depend on rules, card type, geography and disclosure requirements. MannyPay can help review the right path.']]
    },
    retail:{
      kicker:'Retail merchant processing',
      title:'Retail payments built for busy in-store teams.',
      intro:'Accept secure in-person payments, connect checkout to reporting, and give your retail team dependable tools for everyday transactions.',
      image:'assets/images/home/pos-system.png',
      alt:'Retail point of sale system',
      supportTitle:'Retail businesses MannyPay can support',
      supportIntro:'Retail is never one-size-fits-all. MannyPay can help fit payment acceptance around the specific store, service counter or customer experience.',
      support:[['hotel','Hotels'],['restaurant','Restaurants'],['local_bar','Bars'],['storefront','Retail stores'],['electrical_services','Electricians'],['gavel','Lawyers'],['business_center','Consultants'],['spa','Beauty & nail salons'],['school','Learning centers'],['fitness_center','Fitness centers'],['calculate','Accountants'],['account_balance','Schools & colleges']],
      benefitsTitle:'Trusted retail payment processing',
      benefits:[['point_of_sale','POS systems & hardware','Countertop, mobile and customer-facing devices selected around your checkout flow.'],['sync_alt','Accounting integrations','Connect payments to the systems you already use to reduce manual reconciliation.'],['dashboard','Personal dashboard','Track payments, reporting and operational activity from a clearer control center.'],['security','Chargeback management','Use prevention and response tools to protect revenue when disputes happen.']],
      tools:['POS systems and hardware','Accounting integrations','Omnichannel workflows','Personal dashboard','Chargeback management','Online reporting','Multiple gateways','Integrated platforms'],
      faqs:[['What retail hardware can MannyPay support?','Retail setups can include countertop terminals, PIN pads, mobile readers, receipt printers and full POS systems.'],['Can retail and online payments be connected?','Yes. MannyPay can help connect online ordering, in-store checkout and reporting where the selected platforms support it.'],['Is retail processing only for low-risk businesses?','No. Retail stores may be low-risk or specialized/high-risk depending on the products, transaction profile and underwriting requirements.']]
    },
    'zero-cost-processing':{
      kicker:'Cost-reduction programs',
      title:'Reduce processing costs without hiding the math.',
      intro:'Zero-cost style programs help eligible merchants offset credit card processing expenses with clear, properly disclosed pricing and the right POS setup.',
      image:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
      alt:'Business owner reviewing payment costs',
      supportTitle:'Low-cost options MannyPay can evaluate',
      supportIntro:'The right program depends on your state, business model, card mix, customer experience and compliance requirements.',
      support:[['payments','Cash discount'],['receipt_long','Convenience fees'],['price_change','Wholesale pricing'],['add_card','Surcharging'],['sell','Dual pricing'],['analytics','Interchange management']],
      benefitsTitle:'Benefits of zero-cost payment processing',
      benefits:[['savings','Reduce a major business expense','Processing fees are often one of the largest recurring costs. A compliant program can help protect margin.'],['payments','Encourage lower-cost payment methods','Give customers a clear choice while helping your business retain more cash.'],['add_card','Keep payment options open','Continue accepting cards without letting fees control your ability to serve customers.']],
      tools:['Disclosure and signage guidance','Compatible POS configuration','Credit-card fee offset options','Debit-card rule awareness','Receipt visibility','Customer communication support'],
      faqs:[['Is zero-cost processing the same as surcharging?','Not always. Many programs are related, but the structure and disclosure rules differ. MannyPay helps evaluate the compliant option.'],['Can debit cards be surcharged?','Generally no. Debit and prepaid cards have different rules, so the program must be configured carefully.'],['Will customers understand the program?','Clear signage, receipt language and staff guidance make the experience easier for customers to understand.']]
    },
    'cash-discount':{
      kicker:'Cash discount processing',
      title:'Reward lower-cost payments while protecting your margin.',
      intro:'Cash discount programs show the card price clearly while giving customers a real discount when they choose cash, ACH or another lower-cost payment method.',
      image:'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1400&q=80',
      alt:'Customer paying at checkout',
      supportTitle:'Businesses that can use cash discounting',
      supportIntro:'Cash discounting works well where clear price communication and customer choice can reduce pressure from card fees.',
      support:[['science','CBD & Delta 8'],['storefront','Retail'],['code','Web developers'],['local_laundry_service','Dry cleaners'],['assignment','Leasing'],['account_balance','Bail bonds'],['smoking_rooms','Tobacco & cigar'],['construction','Construction'],['diamond','Pawn shops'],['more_horiz','And more']],
      benefitsTitle:'Benefits of cash discount processing',
      benefits:[['trending_up','Higher profit margins','Keep more of every sale by encouraging lower-cost payment methods.'],['shield','Simpler transactions','Use clear posted pricing and automated POS rules to reduce confusion.'],['sentiment_satisfied','Customer satisfaction','Customers experience the lower price as a reward instead of a hidden penalty.']],
      tools:['Posted card and cash price support','POS automation','Receipt disclosure','ACH/check compatibility','Staff rollout guidance','Gateway or terminal configuration'],
      faqs:[['Are cash discounts legal?','Cash discounts are generally allowed when they are true discounts and properly disclosed. Specific implementation still matters.'],['Can discounts apply beyond cash?','Many programs can include ACH, check or debit depending on structure and provider rules.'],['What needs to be shown to customers?','Customers should see clear signage, posted pricing and receipts that explain the price difference.']]
    },
    'dual-pricing':{
      kicker:'Dual pricing',
      title:'Give customers a clear card price and cash price.',
      intro:'Dual pricing helps merchants show both prices upfront, allowing customers to choose how they pay while keeping the checkout experience transparent.',
      image:'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1400&q=80',
      alt:'Customer using payment terminal',
      supportTitle:'Businesses where dual pricing can help',
      supportIntro:'Dual pricing is useful where card fees are material, price transparency matters, and customers appreciate choice.',
      support:[['local_shipping','Movers & brokers'],['restaurant','Restaurant & bar'],['plumbing','Plumbing'],['smoking_rooms','Tobacco & cigar'],['eco','Cannabis-related'],['car_repair','Auto repair'],['vaping_rooms','Vape shops'],['weekend','Furniture stores'],['construction','Construction'],['flight','Jet & charter']],
      benefitsTitle:'Benefits of dual pricing',
      benefits:[['savings','Reduced costs','Lower the impact of card fees across daily transactions.'],['diversity_3','Customer choice','Let shoppers decide between the standard card price and lower cash-style price.'],['workspace_premium','Market competitiveness','A visible discount can help close price-sensitive purchase decisions.']],
      tools:['Both prices displayed clearly','Receipt clarity','POS support for pricing rules','Cash/ACH/check paths','Staff scripts and rollout support','Compliance-minded configuration'],
      faqs:[['Is dual pricing legal?','Dual pricing is generally legal when both prices are displayed transparently and the program follows applicable rules.'],['Do posted prices need to change?','Usually both cash and card prices should be visible before payment so customers can make an informed choice.'],['Can MannyPay provide compatible POS options?','Yes. MannyPay can recommend POS systems and terminals that support dual-pricing workflows.']]
    },
    surcharging:{
      kicker:'Surcharging',
      title:'Offset credit card fees with clear disclosure.',
      intro:'Surcharging lets eligible merchants add a disclosed fee to credit card transactions where allowed, while keeping debit and prepaid card rules in mind.',
      image:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80',
      alt:'Credit card payment close up',
      supportTitle:'Businesses where surcharging may fit',
      supportIntro:'Surcharging touches many business models, but it requires careful configuration, signage and card-type handling.',
      support:[['directions_car','Car dealerships'],['plumbing','Plumbing'],['hvac','HVAC'],['flight','Jet & charter'],['restaurant','Restaurants & bars'],['storefront','Retail'],['account_balance','Bail bonds'],['diamond','Pawn shops'],['local_shipping','Movers & brokers'],['weekend','Furniture stores']],
      benefitsTitle:'Benefits of surcharging',
      benefits:[['price_check','Reduce processing fee pressure','Shift eligible credit-card costs to customers who choose that payment method.'],['integration_instructions','Works with current systems','Configure compatible POS, gateway or terminal workflows around your operation.'],['verified','Compliance-minded setup','Use signage, receipt lines and card-type rules to reduce avoidable mistakes.']],
      tools:['Credit-card-only surcharge handling','Debit/prepaid exclusions','Entrance and checkout signage','Receipt line items','Refund handling','State and card-brand rule review'],
      faqs:[['Can I surcharge debit cards?','No. Debit and prepaid cards generally cannot be surcharged, even when run as credit.'],['Is surcharging legal everywhere?','No. Surcharging rules vary by state and card network, so eligibility must be checked before launch.'],['What disclosure is needed?','Customers should see clear communication before and after the transaction, including signage and receipt details.']]
    },
    'high-risk':{
      kicker:'High-risk merchant accounts',
      title:'Payment processing for businesses banks often overcomplicate.',
      intro:'MannyPay helps regulated, emerging and harder-to-place businesses find practical processing options for online and in-person payments.',
      image:'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=80',
      alt:'Business documents and payment planning',
      supportTitle:'High-risk industries MannyPay can review',
      supportIntro:'Every high-risk business is different. The right path depends on product category, transaction history, chargeback exposure and compliance readiness.',
      support:[['science','CBD & Delta 8'],['shield_lock','Adult businesses'],['eco','Cannabis-adjacent'],['shopping_cart','eCommerce'],['credit_score','Credit repair'],['local_shipping','Drop shipping'],['assignment','Leasing companies'],['weekend','Furniture stores'],['code','Web design'],['medical_services','Medical billing'],['groups','MLM businesses'],['nutrition','Nutraceuticals'],['smoking_rooms','Tobacco & vape'],['move_up','Movers']],
      benefitsTitle:'Trusted high-risk payment processing',
      benefits:[['point_of_sale','POS and gateways','Support for hardware, online checkout and multiple gateway paths.'],['shield','Chargeback management','Tools and guidance to monitor disputes and reduce avoidable losses.'],['analytics','Online reporting','Visibility into payment activity, funding and operational metrics.'],['hub','Integrated platforms','Connect processing with commerce, CRM, accounting and reporting tools.']],
      tools:['Online and retail processing','Multiple gateways','Chargeback monitoring','Fraud tools','Integrated platforms','Account review guidance','No-trap support mindset','Industry-aware underwriting'],
      faqs:[['What makes a merchant high-risk?','Risk can come from industry category, chargeback ratio, ticket size, card-not-present volume, credit history or regulatory complexity.'],['Are rates higher for high-risk merchants?','Often yes. Pricing depends on the industry, risk profile, bank requirements and processing history.'],['Can MannyPay help reduce chargebacks?','MannyPay can help identify fraud tools, 3D Secure, monitoring and operational steps that reduce avoidable disputes.']]
    },
    international:{
      kicker:'International payment processing',
      title:'Accept payments across borders with more confidence.',
      intro:'International processing helps businesses sell to customers in other countries, support multiple currencies and improve cross-border approval paths.',
      image:'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
      alt:'International business team planning payments',
      supportTitle:'When international processing makes sense',
      supportIntro:'If your customers, operations or approvals cross borders, the acquiring setup and settlement path matter.',
      support:[['public','Cross-border sales'],['currency_exchange','Multi-currency checkout'],['travel_explore','Global customer base'],['account_balance','Foreign acquiring'],['analytics','Approval-rate optimization'],['payments','USD or local settlement'],['language','Localized checkout'],['shield','Fraud controls']],
      benefitsTitle:'Built for global payment complexity',
      benefits:[['currency_exchange','Multi-currency support','Accept payments in supported foreign currencies while settling through the right provider path.'],['route','Smarter routing','Match transactions to better acquiring options when international decline rates are a problem.'],['account_balance_wallet','Settlement options','Review USD or local-currency settlement based on the acquiring bank and business profile.']],
      tools:['Multi-currency processing','International customer payments','Cross-border acquiring paths','Settlement review','Volume requirement review','Fraud and risk controls','Gateway compatibility','Business documentation support'],
      faqs:[['Can a non-US business get a US merchant account?','Some non-US businesses may qualify depending on country, business model, processing history and underwriting profile.'],['Can I process multiple currencies?','Yes, multi-currency processing can let customers pay in different currencies while the merchant settles in a preferred currency.'],['Will international processing improve approvals?','It can help when cross-border declines are caused by domestic-only routing or regional acquiring limitations.']]
    },
    '3d-secure':{
      kicker:'3D Secure fraud protection',
      title:'Add stronger authentication to online payments.',
      intro:'3D Secure helps verify cardholder identity, reduce fraud exposure and shift liability for eligible online transactions.',
      image:'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1400&q=80',
      alt:'Secure online payment authentication',
      supportTitle:'Businesses that rely on 3DS',
      supportIntro:'3DS is especially useful for online merchants where fraud, chargebacks and card-not-present risk can hurt approval rates and revenue.',
      support:[['shopping_cart','eCommerce merchants'],['sports_esports','Online gaming'],['hotel','Hospitality'],['flight','Airline & charter'],['subscriptions','Subscription services'],['favorite','Online dating'],['school','Online education'],['more_horiz','And more']],
      benefitsTitle:'How 3DS can increase revenue',
      benefits:[['security','Enhanced security','Verify customer identity before processing high-risk or suspicious payments.'],['bolt','Seamless checkout','Modern risk-based authentication keeps legitimate customers moving.'],['gpp_good','Compliance support','Support PSD2/SCA-style expectations and card-network authentication standards.'],['trending_down','Fewer chargebacks','Reduce unauthorized disputes and protect more approved revenue.']],
      tools:['Customer payment initiation','Risk-based 3DS trigger','Issuer authentication','Transaction verification','Approval and liability protection','Chargeback reduction','Online gateway compatibility'],
      faqs:[['What is 3D Secure?','3D Secure is an online card authentication protocol that verifies the cardholder before approval to reduce fraud and chargebacks.'],['Does 3DS slow checkout down?','Modern 3DS is often frictionless, with extra customer verification only when a transaction appears risky.'],['Can 3DS reduce chargebacks?','Yes. Verified transactions can lower unauthorized fraud exposure and may shift eligible fraud liability away from the merchant.']]
    }
  };

  const quoteBlock=label=>`<section class="solution-quote" id="free-quote"><div class="container solution-quote-grid"><div><p class="solution-eyebrow">Free quote</p><h2>Let’s find the right ${esc(label).toLowerCase()} setup.</h2><p>Share a few details and a MannyPay specialist will help map the best account, hardware, gateway or pricing path for your business.</p></div><form class="online-quote-form solution-form"><div class="quote-field"><label>First name <span>*</span></label><input required autocomplete="given-name"></div><div class="quote-field"><label>Last name <span>*</span></label><input required autocomplete="family-name"></div><div class="quote-field full"><label>Industry <span>*</span></label><input required autocomplete="organization-title"></div><div class="quote-field"><label>Email <span>*</span></label><input type="email" required autocomplete="email"></div><div class="quote-field"><label>Mobile number <span>*</span></label><input type="tel" required autocomplete="tel"></div><div class="quote-field full"><label>Current or estimated monthly volume <span>*</span></label><select required><option value="">Select a range</option><option>Under $25,000</option><option>$25,000–$100,000</option><option>$100,000–$500,000</option><option>Over $500,000</option></select></div><button class="button button-primary full" type="submit">Start processing <span>→</span></button><p class="quote-privacy full">Your contact information is secure and handled according to our <a href="${href('privacy-policy')}">Privacy Policy</a>.</p></form></div></section>`;

  function solutionPage(){
    const data=solutionPages[page.slug]||solutionPages['payment-solutions'];
    return `<div class="solution-page" data-solution="${esc(page.slug)}">
      <section class="solution-hero">
        <div class="container solution-hero-grid">
          <div class="solution-hero-copy">
            <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Payment Solutions</span><span>/</span><span>${esc(page.title)}</span></nav>
            <p class="solution-eyebrow">${esc(data.kicker)}</p>
            <h1>${esc(data.title)}</h1>
            <p>${esc(data.intro)}</p>
            <div class="solution-actions"><a class="button button-primary" href="#free-quote">Get a free quote <span>arrow_downward</span></a><a class="button button-secondary" href="${href('contact')}">Talk to a specialist</a></div>
          </div>
          <div class="solution-visual"><img src="${esc(data.image)}" alt="${esc(data.alt)}" loading="eager"><div class="solution-float"><span class="material-symbols">verified</span><strong>Fast review</strong><small>Secure, practical, merchant-first guidance.</small></div></div>
        </div>
      </section>

      <section class="solution-section">
        <div class="container">
          <header class="solution-heading centered"><p class="solution-eyebrow">Where it fits</p><h2>${esc(data.supportTitle)}</h2><p>${esc(data.supportIntro)}</p></header>
          <div class="solution-support-grid">${data.support.map(([icon,title])=>`<article class="solution-chip-card"><span class="material-symbols">${esc(icon)}</span><h3>${esc(title)}</h3></article>`).join('')}</div>
        </div>
      </section>

      <section class="solution-section solution-soft">
        <div class="container solution-benefit-layout">
          <div class="solution-sticky-copy"><p class="solution-eyebrow">Why it matters</p><h2>${esc(data.benefitsTitle)}</h2><p>Built from the AllayPay reference structure, rewritten for MannyPay and simplified into clearer, more modern sections.</p><a class="text-arrow" href="#free-quote">Request quote <span>arrow_forward</span></a></div>
          <div class="solution-benefit-grid">${data.benefits.map(([icon,title,copy],index)=>`<article class="solution-benefit"><span class="count">${String(index+1).padStart(2,'0')}</span><i class="material-symbols">${esc(icon)}</i><h3>${esc(title)}</h3><p>${esc(copy)}</p></article>`).join('')}</div>
        </div>
      </section>

      <section class="solution-section">
        <div class="container solution-tools-panel">
          <div><p class="solution-eyebrow">What MannyPay can configure</p><h2>Tools and support matched to the page.</h2></div>
          <ul>${data.tools.map(item=>`<li><span class="material-symbols">check</span>${esc(item)}</li>`).join('')}</ul>
        </div>
      </section>

      ${related()}
      ${faq(data.faqs)}
      ${quoteBlock(page.title)}
    </div>`;
  }

  const productCategoryData=[
    ['pos-systems','POS Systems','Point-of-sale systems help businesses accept payments, manage staff, track inventory, analyze sales, and run daily operations from one connected platform.','assets/images/home/pos-system.png','point_of_sale','category-pos','Clover'],
    ['handheld-terminals','Handheld Terminals','Handheld terminals give mobile teams an all-in-one way to take payments at tables, counters, curbside, delivery stops and events.','assets/images/home/handheld-terminal.png','tap_and_play','category-reader','Clover'],
    ['countertop-terminals','Countertop Terminals','Countertop terminals provide fast, dependable card-present checkout for fixed retail counters, service desks and front-of-house teams.','assets/images/home/countertop-terminal.png','store','category-pos','Clover'],
    ['wireless-card-readers','Wireless Card Readers','Wireless terminals give merchants flexible checkout mobility, so payments can happen in-store, curbside, tableside, or on the road.','assets/images/home/handheld-terminal.png','wifi_tethering','category-reader','Ingenico'],
    ['card-readers','Card Readers','Compact card readers securely accept tap, chip, swipe, and wallet payments with a simple customer-facing checkout flow.','assets/images/home/countertop-terminal.png','credit_card','category-reader','Valor'],
    ['gateways','Gateways','Payment gateways connect websites, virtual terminals, invoicing, recurring billing, and business software to secure payment processing.','assets/images/home/online-merchant.jpg','language','category-gateway','Authorize.Net'],
    ['mobile-readers','Mobile Readers','Mobile readers let merchants process payments anywhere using a phone, tablet, or compact reader without a full countertop setup.','assets/images/home/mobile-reader.png','phone_iphone','category-reader','BBPOS'],
    ['pin-pads','PIN Pads','PIN pads support secure customer entry for debit, EMV, and contactless payments at high-volume checkout counters.','assets/images/home/countertop-terminal.png','pin','category-reader','PAX'],
    ['printers','Printers','Receipt, label, and kitchen printers keep retail, hospitality, and service workflows moving with dependable output.','https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1400&q=80','print','category-accessory','Star'],
    ['payment-accessories','Payment Accessories','Accessories such as stands, scanners, cash drawers, cables, and docks complete the payment station.','https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&w=1400&q=80','qr_code_scanner','category-accessory','Zebra']
  ];
  const productDetailData={
    'bodega-ai-pos-system':{
      title:'Bodega AI',
      category:'POS Systems',
      brand:'Bodega AI',
      accent:'#1768ef',
      summary:'AI-native point-of-sale system for independent retailers that need fast checkout, SKU intelligence, inventory tracking, dual pricing, and clearer store analytics.',
      highlights:['SKU database: 200,000+ preloaded items with AI-based product recognition','Language support: multilingual voice and text input across 12+ languages','Pricing: built-in dual pricing support for cash discount and surcharge-ready workflows','Inventory: real-time cloud tracking and SKU auto-suggestion by ZIP code','AI engine: dynamic pricing, product mix optimization and tax automation','Analytics: profit margins, sales performance and hot-product alerts','Hardware: compatible with Android tablets, barcode scanners, cash drawers and printers'],
      overview:'Bodega AI is designed for independent retailers such as bodegas, delis, liquor stores, tobacco shops and local markets. It combines a large preloaded SKU database with AI-assisted item recognition, checkout tools, dual-pricing support and inventory intelligence so small teams can move faster with less manual setup.',
      specs:[['SKU Library','Over 200,000 preloaded SKUs for common retail inventory.'],['Languages','Voice and text input across 12+ languages.'],['AI Features','Smart SKU recognition from receipt or visual input, dynamic regional pricing, product mix suggestions and tax classification.'],['Dual Pricing','Built-in support for cash discount and surcharging-style workflows where configured correctly.'],['Analytics','Profit margin reporting, hot product alerts and category performance insights.'],['Inventory','Real-time cloud tracking and automated purchase ordering support.'],['POS Functions','Item lookup, rapid checkout, price override and loyalty options.'],['Connectivity','Internet / cloud-based access; offline mode is not the primary workflow.'],['Hardware','Compatible with Android POS tablets, barcode scanners, cash drawers and receipt printers.'],['Security','Cloud backup, encrypted credentials and merchant portal access.'],['Target Users','Bodegas, liquor stores, delis, tobacco shops and local markets.'],['Support','Partner-provided onboarding, configuration and remote technical support.']]
    },
    'clover-flex-3rd-gen':{
      title:'Clover Flex 3rd Gen',
      category:'Wireless Card Readers',
      brand:'Clover',
      accent:'#1768ef',
      summary:'Portable smart terminal for line-busting, curbside checkout, tableside payments, quick receipts and flexible mobile retail workflows.',
      highlights:['Portable all-in-one checkout device','Accepts chip, tap, swipe and keyed transactions','Built-in receipt and customer signature workflows','Useful for retail, restaurant, service and curbside operations','Connects payment acceptance with reporting and app workflows'],
      overview:'Clover Flex 3rd Gen is a compact wireless terminal for businesses that need payment mobility without giving up a full smart checkout experience. It works well for service counters, mobile teams, restaurants, delivery, events and line-busting retail environments.',
      specs:[['Device Type','Portable smart payment terminal.'],['Payment Methods','EMV chip, contactless NFC, swipe and keyed payments.'],['Best For','Mobile checkout, curbside, tableside, service counters and pop-up retail.'],['Reporting','Supports transaction visibility and business reporting through connected software.'],['Accessories','Compatible with docks, chargers and receipt workflows based on final setup.']]
    },
    'clover-station-duo-2':{
      title:'Clover Station Duo 2',
      category:'POS Systems',
      brand:'Clover',
      accent:'#1768ef',
      summary:'Dual-screen countertop POS for merchants who need fast checkout, customer display, built-in printing and staff-friendly daily operations.',
      highlights:['Dual-screen merchant and customer checkout experience','Built for fixed retail and service counters','Supports payments, orders, receipts and reporting','Good fit for high-volume countertop checkout','Expandable with accessories and platform apps'],
      overview:'Clover Station Duo 2 is a full countertop point-of-sale system for merchants that want a polished checkout station with customer-facing interaction, reporting, payment acceptance and device expandability.',
      specs:[['Device Type','Countertop point-of-sale station.'],['Display','Merchant display with customer-facing screen.'],['Best For','Retail counters, restaurants, service businesses and fixed checkout locations.'],['Payment Flow','Supports card-present transactions and customer-facing payment prompts.'],['Expansion','Works with printers, cash drawers, scanners and compatible accessories.']]
    },
    'clover-mini-3rd':{
      title:'Clover Mini 3rd',
      category:'POS Systems',
      brand:'Clover',
      accent:'#1768ef',
      summary:'Compact countertop POS for merchants who need payments, receipts, reporting and simple inventory tools without a large footprint.',
      highlights:['Compact countertop POS footprint','Accepts chip, tap and swipe payments','Useful for retail and service counters','Supports receipt and reporting workflows','Expandable with compatible accessories'],
      overview:'Clover Mini 3rd is built for merchants who want a compact POS station that still feels professional at checkout. It is a good fit for smaller counters, quick-service teams and retail environments where space matters.',
      specs:[['Device Type','Compact countertop POS.'],['Best For','Small retail counters, service desks and quick-service businesses.'],['Payments','Card-present checkout with compatible processing setup.'],['Reporting','Transaction and sales visibility through connected software.'],['Accessories','Can support compatible printers, drawers and stands.']]
    },
    'ingenico-dx8000':{
      title:'Ingenico DX8000',
      category:'Wireless Card Readers',
      brand:'Ingenico',
      accent:'#1768ef',
      summary:'Android smart terminal for mobile payment acceptance, customer-facing checkout and flexible in-person transaction workflows.',
      highlights:['Portable smart terminal experience','Supports chip, tap, swipe and keyed payments','Designed for wireless checkout flexibility','Useful for retail, service and mobile teams','Modern touchscreen customer interaction'],
      overview:'Ingenico DX8000-style terminals are built for businesses that want modern mobile acceptance with a familiar smart-device feel. MannyPay can position this kind of device for teams that need flexible checkout away from a fixed counter.',
      specs:[['Device Type','Wireless smart payment terminal.'],['Best For','Mobile checkout, retail floors, delivery and service teams.'],['Connectivity','Wireless-first setup depending on provider configuration.'],['Payment Methods','EMV, NFC/contactless, swipe and keyed workflows.'],['Support','Configuration and onboarding support available.']]
    },
    'valor-vl500':{
      title:'Valor VL500',
      category:'Card Readers',
      brand:'Valor',
      accent:'#1768ef',
      summary:'Reliable in-person card reader for merchants who need a clean, fast and secure customer payment experience.',
      highlights:['Fast card-present checkout','Supports common card and wallet workflows','Simple customer-facing payment interaction','Good fit for everyday retail and services','Works as part of a broader payment setup'],
      overview:'Valor VL500 represents the kind of practical card reader many merchants need: straightforward, dependable and easy to place inside a checkout workflow.',
      specs:[['Device Type','Card reader / payment terminal.'],['Best For','Retail, services and fixed counter checkout.'],['Payment Methods','Chip, tap, swipe and keyed acceptance depending on setup.'],['Use Case','Simple in-person payments with secure processing.']]
    },
    'authorize-net-gateway':{
      title:'Authorize.Net Gateway',
      category:'Gateways',
      brand:'Authorize.Net',
      accent:'#1768ef',
      summary:'Secure online payment gateway for eCommerce checkout, invoices, recurring billing, virtual terminal payments and software integrations.',
      highlights:['Online checkout gateway support','Virtual terminal and keyed transaction workflows','Recurring billing and invoicing options','eCommerce and software integration path','Fraud and security tools available'],
      overview:'Authorize.Net-style gateways help businesses accept card-not-present transactions across websites, invoices, subscriptions and virtual terminal workflows.',
      specs:[['Device Type','Payment gateway.'],['Best For','eCommerce, invoices, recurring billing and virtual terminals.'],['Payment Channels','Online and card-not-present transactions.'],['Integrations','Can connect with compatible carts, CRMs and business systems.']]
    },
    'star-printer':{
      title:'Star Thermal Printer',
      category:'Printers',
      brand:'Star',
      accent:'#1768ef',
      summary:'Receipt printer for retail, restaurant and service teams that need dependable checkout output.',
      highlights:['Thermal receipt printing','Useful for retail and hospitality checkout','Compact station-ready hardware','Supports receipt workflows in POS environments','Pairs with compatible POS setups'],
      overview:'A dependable printer is a small piece of hardware that keeps checkout moving. MannyPay can help include printers as part of a complete payment station.',
      specs:[['Device Type','Receipt printer.'],['Best For','Retail checkout, restaurants and service counters.'],['Workflow','Receipts, order tickets and customer documentation.'],['Compatibility','Depends on POS and hardware configuration.']]
    },
    'zebra-scanner':{
      title:'Zebra Scanner',
      category:'Payment Accessories',
      brand:'Zebra',
      accent:'#1768ef',
      summary:'Barcode scanner accessory for faster item lookup, inventory workflows and cleaner retail checkout.',
      highlights:['Fast barcode scanning','Useful for retail and inventory workflows','Pairs with POS systems','Reduces manual item lookup','Supports smoother checkout operations'],
      overview:'Barcode scanners help retail teams move quickly and reduce manual entry. MannyPay can include scanners as part of the complete POS/accessory setup.',
      specs:[['Device Type','Barcode scanner accessory.'],['Best For','Retail, inventory and item lookup workflows.'],['Use Case','Checkout scanning and stock support.'],['Compatibility','Depends on selected POS platform.']]
    },
    'bbpos-chipper':{
      title:'BBPOS Chipper',
      category:'Mobile Readers',
      brand:'BBPOS',
      accent:'#1768ef',
      summary:'Compact mobile card reader for phone and tablet-based payment acceptance.',
      highlights:['Compact mobile reader','Good for on-the-go payments','Pairs with phones or tablets','Supports small mobile teams and events','Simple mobile checkout path'],
      overview:'BBPOS-style readers are useful for merchants that need lightweight payment acceptance without a full POS station.',
      specs:[['Device Type','Mobile card reader.'],['Best For','Mobile teams, events, pop-ups and service providers.'],['Workflow','Phone/tablet-based checkout.'],['Payment Methods','Card and contactless options depend on setup.']]
    },
    'pax-a35':{
      title:'PAX A35',
      category:'PIN Pads',
      brand:'PAX',
      accent:'#1768ef',
      summary:'Customer-facing PIN pad for debit, EMV and contactless payments at fixed checkout counters.',
      highlights:['Customer-facing PIN entry','Supports debit and EMV workflows','Countertop-friendly form factor','Good for retail and service desks','Works with compatible POS/payment setup'],
      overview:'PAX A35-style PIN pads are designed for merchants who want a secure customer-facing payment device at the counter.',
      specs:[['Device Type','PIN pad / customer-facing terminal.'],['Best For','Retail counters and service desks.'],['Payment Methods','Debit, EMV and contactless depending on configuration.'],['Compatibility','Depends on selected processor and POS environment.']]
    }
  };
  const productSvg=(kind='pos',view=0,accent='#1768ef')=>`<svg class="product-render-svg" viewBox="0 0 760 560" role="img" aria-label="Recreated generic product render ${view+1}"><defs><linearGradient id="screen${kind}${view}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#f9fbff"/><stop offset="1" stop-color="#dce8ff"/></linearGradient><filter id="shadow${kind}${view}" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="24" stdDeviation="22" flood-color="#173966" flood-opacity=".16"/></filter></defs><rect width="760" height="560" rx="36" fill="#f7f9fd"/><g filter="url(#shadow${kind}${view})" transform="${view%2?'translate(96 86) rotate(-3 300 220)':'translate(94 78)'}"><rect x="86" y="66" width="430" height="270" rx="24" fill="#ffffff" stroke="#d9e2ef" stroke-width="6"/><rect x="118" y="96" width="366" height="190" rx="14" fill="url(#screen${kind}${view})"/><rect x="142" y="124" width="118" height="16" rx="8" fill="${accent}"/><rect x="142" y="158" width="292" height="12" rx="6" fill="#bed0ef"/><rect x="142" y="186" width="250" height="12" rx="6" fill="#d8e2f3"/><rect x="142" y="224" width="78" height="42" rx="10" fill="#ffffff"/><rect x="236" y="224" width="78" height="42" rx="10" fill="#ffffff"/><rect x="330" y="224" width="78" height="42" rx="10" fill="#ffffff"/><rect x="166" y="342" width="282" height="80" rx="18" fill="#eef2f8" stroke="#d7e0ed" stroke-width="4"/><rect x="206" y="378" width="202" height="12" rx="6" fill="#becbe0"/></g><g filter="url(#shadow${kind}${view})" transform="${view===2?'translate(86 262) rotate(8 110 120)':'translate(84 250)'}"><rect x="0" y="0" width="142" height="240" rx="28" fill="#ffffff" stroke="#d9e2ef" stroke-width="5"/><rect x="18" y="28" width="106" height="136" rx="14" fill="#eef5ff"/><circle cx="72" cy="199" r="17" fill="${accent}" opacity=".9"/><path d="M44 72h56M44 104h42M44 132h62" stroke="#8ea5cb" stroke-width="8" stroke-linecap="round"/></g><g filter="url(#shadow${kind}${view})" transform="${view===3?'translate(560 270) rotate(-7 80 100)':'translate(558 250)'}"><rect x="0" y="0" width="120" height="186" rx="28" fill="#111827"/><rect x="18" y="20" width="84" height="78" rx="10" fill="#2dc4ff"/><g fill="#ffffff" opacity=".76"><rect x="24" y="116" width="18" height="14" rx="4"/><rect x="52" y="116" width="18" height="14" rx="4"/><rect x="80" y="116" width="18" height="14" rx="4"/><rect x="24" y="142" width="18" height="14" rx="4"/><rect x="52" y="142" width="18" height="14" rx="4"/><rect x="80" y="142" width="18" height="14" rx="4"/></g></g></svg>`;
  const allProducts=[
    ['bodega-ai-pos-system','Bodega AI','POS Systems','Bodega AI','category-pos','AI-native POS with SKU intelligence and dual pricing support.'],
    ['clover-flex-3rd-gen','Clover Flex 3rd Gen','Wireless Card Readers','Clover','category-reader','Portable smart terminal for curbside, mobile and tableside payments.'],
    ['clover-station-duo-2','Clover Station Duo 2','POS Systems','Clover','category-pos','Dual-screen countertop POS for polished retail checkout.'],
    ['clover-mini-3rd','Clover Mini 3rd','POS Systems','Clover','category-pos','Compact POS for counters with payments, receipts and reporting.'],
    ['ingenico-dx8000','Ingenico DX8000','Wireless Card Readers','Ingenico','category-reader','Android smart terminal for mobile and countertop checkout.'],
    ['valor-vl500','Valor VL500','Card Readers','Valor','category-reader','Reliable card reader for fast in-person transactions.'],
    ['authorize-net-gateway','Authorize.Net Gateway','Gateways','Authorize.Net','category-gateway','Secure online gateway for eCommerce and virtual terminal payments.'],
    ['star-printer','Star Thermal Printer','Printers','Star','category-accessory','Dependable receipt printing for retail and hospitality.'],
    ['zebra-scanner','Zebra Scanner','Payment Accessories','Zebra','category-accessory','Barcode scanning accessory for quicker checkout workflows.'],
    ['bbpos-chipper','BBPOS Chipper','Mobile Readers','BBPOS','category-reader','Compact mobile reader for phone and tablet-based payment acceptance.'],
    ['pax-a35','PAX A35','PIN Pads','PAX','category-reader','Customer-facing PIN pad for secure debit, EMV and contactless checkout.']
  ];
  function productsLanding(){
    const featured=['bodega-ai-pos-system','clover-flex-3rd-gen','clover-station-duo-2'];
    const categories=['All','POS Systems','Wireless Card Readers','Card Readers','Gateways','Mobile Readers','PIN Pads','Printers','Payment Accessories'];
    const brands=['All','Bodega AI','Clover','Ingenico','Valor','Authorize.Net','Star','Zebra'];
    return `<div class="products-redesign" data-products-page>
      <section class="products-hero">
        <div class="container products-hero-grid">
          <div class="products-hero-copy"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Products</span></nav><p class="product-kicker">Payment hardware and software</p><h1>Discover MannyPay’s range of POS systems, card readers, gateways and accessories.</h1><p>Explore curated payment products for retail, mobile, online and service businesses — redesigned in MannyPay’s cleaner, blue-first product experience.</p><a class="button button-primary" href="#product-browser">Explore products <span>arrow_downward</span></a></div>
          <div class="products-hero-art"><img src="assets/images/products/manny-products-hero.png" alt="MannyPay brand ambassador holding a phone and blue credit card"><div class="hero-product-pill"><span class="material-symbols">contactless</span><strong>Tap. Swipe. Key. Connect.</strong></div></div>
        </div>
      </section>
      <section class="featured-products-section"><div class="container"><header class="products-section-head centered"><p class="product-kicker">Featured products</p><h2>Three starting points for modern checkout.</h2><p>Keep the product landing focused: one AI POS, one mobile reader and one countertop station.</p></header><div class="featured-product-grid">${featured.map((slug,index)=>{const item=productDetailData[slug],product=allProducts.find(p=>p[0]===slug);return `<a class="featured-product-card tone-${index+1}" href="${href(slug)}"><div class="featured-visual">${productSvg(product?.[4]||'category-pos',index,item.accent)}</div><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p><span>View product →</span></a>`}).join('')}</div></div></section>
      <section class="product-browser-section" id="product-browser"><div class="container"><header class="products-section-head centered"><p class="product-kicker">Explore all products</p><h2>Browse by category or brand.</h2></header><div class="product-tabs-shell"><div class="product-tab-group" role="tablist" aria-label="Product category filters">${categories.map((cat,index)=>`<button class="product-filter-tab${index===0?' active':''}" type="button" data-filter-type="category" data-filter-value="${esc(cat)}">${esc(cat)}</button>`).join('')}</div><div class="product-tab-group brand-tabs" role="tablist" aria-label="Product brand filters">${brands.map((brand,index)=>`<button class="product-filter-tab${index===0?' active':''}" type="button" data-filter-type="brand" data-filter-value="${esc(brand)}">${esc(brand)}</button>`).join('')}</div></div><div class="product-result-meta"><span data-product-count>Showing ${allProducts.length} products</span></div><div class="product-result-grid">${allProducts.map((product,index)=>`<a class="product-result-card" href="${href(product[0])}" data-product-card data-category="${esc(product[2])}" data-brand="${esc(product[3])}"><div class="product-result-art">${productSvg(product[4],index%5)}</div><p>${esc(product[2])}</p><h3>${esc(product[1])}</h3><small>${esc(product[5])}</small><span>Details →</span></a>`).join('')}</div></div></section>
      ${quoteBlock('Products')}
    </div>`;
  }
  function productCategoryPage(){
    const category=productCategoryData.find(item=>item[0]===page.slug)||productCategoryData[0];
    const [slug,title,copy,image,icon,,brand]=category;
    const categoryName=title;
    const products=allProducts.filter(product=>product[2]===categoryName || (slug==='handheld-terminals'&&['Wireless Card Readers','Mobile Readers'].includes(product[2])) || (slug==='countertop-terminals'&&product[2]==='POS Systems'));
    const relatedCategories=productCategoryData.filter(item=>item[0]!==slug).slice(0,4);
    return `<div class="products-redesign product-category-page" data-product-category="${esc(slug)}">
      <section class="product-category-hero">
        <div class="container product-category-hero-grid">
          <div class="product-category-copy"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="${href('products')}">Products</a><span>/</span><span>${esc(title)}</span></nav><p class="product-kicker">Product category</p><h1>${esc(title)} for modern payment workflows.</h1><p>${esc(copy)}</p><div class="solution-actions"><a class="button button-primary" href="#category-products">View ${esc(title)} <span>arrow_downward</span></a><a class="button button-secondary" href="${href('products')}">All products</a></div></div>
          <figure class="category-visual-card"><span class="material-symbols">${esc(icon)}</span><img src="${esc(image)}" alt="${esc(title)} category visual"><figcaption><strong>${esc(products.length)} products</strong><small>Filtered from the MannyPay product catalog.</small></figcaption></figure>
        </div>
      </section>
      <section class="product-category-list" id="category-products"><div class="container"><header class="products-section-head centered"><p class="product-kicker">${esc(title)}</p><h2>Explore ${esc(title)}.</h2><p>This page only lists products that belong to the selected mega-menu category. No repeated master catalog page.</p></header><div class="category-product-grid">${products.map((product,index)=>`<a class="product-result-card" href="${href(product[0])}"><div class="product-result-art">${productSvg(product[4],index)}</div><p>${esc(product[2])}</p><h3>${esc(product[1])}</h3><small>${esc(product[5])}</small><span>Details →</span></a>`).join('')}</div></div></section>
      <section class="category-support-section"><div class="container catalog-feature-row"><div><p class="product-kicker">Category guidance</p><h2>Choose by fit, not by product count.</h2><p>MannyPay can help compare ${esc(title).toLowerCase()} by checkout environment, transaction volume, mobility, software integrations and support needs.</p></div><div class="catalog-mini-grid">${[['fact_check','Workflow review'],['contactless','Payment method fit'],['sync_alt','Software compatibility'],['support_agent','Setup support']].map(([i,t])=>`<article><span class="material-symbols">${i}</span><strong>${t}</strong></article>`).join('')}</div></div></section>
      <section class="related-category-section"><div class="container"><header class="products-section-head"><p class="product-kicker">Related categories</p><h2>Browse more product groups.</h2></header><div class="catalog-card-grid">${relatedCategories.map(item=>`<a class="catalog-card" href="${href(item[0])}"><span class="material-symbols">${esc(item[4])}</span><h3>${esc(item[1])}</h3><p>${esc(item[2])}</p><b>Explore →</b></a>`).join('')}</div></div></section>
      ${quoteBlock(title)}
    </div>`;
  }
  function productDetailPage(){
    const data=productDetailData[page.slug]||productDetailData['bodega-ai-pos-system'];
    const related=allProducts.filter(product=>product[0]!==page.slug).slice(0,3);
    const slides=[0,1,2,3,4].map(index=>productSvg('category-pos',index,data.accent));
    return `<div class="product-detail-page" data-product-detail>
      <section class="product-detail-hero">
        <div class="container product-detail-grid">
          <div class="product-gallery" aria-label="${esc(data.title)} product gallery">
            <div class="product-main-shot" data-product-main>${slides[0]}</div>
            <div class="product-thumbs">${slides.map((svg,index)=>`<button class="product-thumb${index===0?' active':''}" type="button" data-product-thumb="${index}" aria-label="View ${esc(data.title)} image ${index+1}">${svg}</button>`).join('')}</div>
          </div>
          <aside class="product-buy-box">
            <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="${href('products')}">Products</a><span>/</span><span>${esc(data.title)}</span></nav>
            <p class="product-category-line">Category: <a href="${href('pos-systems')}">${esc(data.category)}</a></p>
            <h1>${esc(data.title)}</h1>
            <p>${esc(data.summary)}</p>
            <ul class="product-highlights">${data.highlights.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>
            <a class="button button-primary" href="#free-quote">Get a quote <span>arrow_downward</span></a>
          </aside>
        </div>
      </section>
      <section class="product-info-section"><div class="container product-info-layout"><article><p class="product-kicker">Overview</p><h2>Overview</h2><p>${esc(data.overview)}</p></article><article><p class="product-kicker">Specifications</p><h2>Specifications</h2><div class="spec-stack">${data.specs.map(([name,value])=>`<div class="spec-row"><strong>${esc(name)}</strong><p>${esc(value)}</p></div>`).join('')}</div></article></div></section>
      <section class="related-products-section"><div class="container"><header class="products-section-head"><p class="product-kicker">Related products</p><h2>Similar products merchants compare.</h2></header><div class="product-result-grid related">${related.map((product,index)=>`<a class="product-result-card" href="${href(product[0])}"><div class="product-result-art">${productSvg(product[4],index+1)}</div><p>${esc(product[2])}</p><h3>${esc(product[1])}</h3><small>${esc(product[5])}</small><span>Details →</span></a>`).join('')}</div></div></section>
      ${quoteBlock(data.title)}
    </div>`;
  }
  function productPage(){
    if(page.template==='product-detail')return productDetailPage();
    if(page.slug==='products')return productsLanding();
    return productCategoryPage();
  }

  const industryIcons={adult:'lock',cannabis:'eco','cbd-delta-8':'science',firearms:'security','jet-charter':'flight','jewellery-diamonds':'diamond',peptides:'biotech','restaurant-bar':'restaurant','retail-industry':'storefront','tobacco-cigarettes':'smoking_rooms','vape-ecig':'vaping_rooms','web-design':'code',travel:'travel_explore',kratom:'psychiatry','7oh':'science',nutra:'nutrition',hotels:'hotel','health-beauty':'spa',medical:'medical_services','food-truck':'local_shipping',apparel:'checkroom','professional-services':'business_center','see-more-industries':'apps',industries:'domain'};
  const lowRiskIndustryList=[
    ['auto-repair','Auto Repair','build'],['restaurant-bar','Restaurant & Bar','restaurant'],['hotels','Hotels','hotel'],['car-dealerships','Car Dealerships','directions_car'],['online','eCommerce','shopping_cart'],['medical','Doctor’s Office','medical_services'],['retail-industry','Retail','storefront'],['plumbing','Plumbing','plumbing'],['food-truck','Food Trucks','local_shipping'],['health-beauty','Health & Beauty','spa'],['apparel','Apparel','checkroom'],['professional-services','Professional Services','business_center']
  ];
  const highRiskIndustryList=[
    ['adult','Adult Entertainment','lock'],['cbd-delta-8','CBD & Delta 8','science'],['cannabis','Cannabis Related','eco'],['firearms','Firearms','security'],['jet-charter','Jet & Charter','flight'],['jewellery-diamonds','Jewellery & Diamonds','diamond'],['peptides','Peptides','biotech'],['tobacco-cigarettes','Tobacco & Cigarettes','smoking_rooms'],['vape-ecig','Vape & eCig','vaping_rooms'],['web-design','Web Developers','code'],['kratom','Kratom','psychiatry'],['nutra','Nutraceuticals','nutrition']
  ];
  const highRiskIndustries=new Set(highRiskIndustryList.map(item=>item[0]));
  const industrySupportItems=['Guaranteed cost savings','QuickBooks compatibility','Invoicing & payment links','POS system integration','Online virtual terminals','Chip & mobile readers','Same/next day funding','Multiple gateways'];
  const adultSupported=['Strip Clubs','Streaming Services','Adult Photography','Phone Sex Operators','Toy & Novelty Stores','Lubricants and Lotions','Sex Education Courses','Online Dating'];
  const adultTools=[['point_of_sale','POS Systems & Hardware'],['sync_alt','Accounting Integrations'],['hub','Omni Channel'],['dashboard','Personal Dashboard'],['support_agent','Chargeback Management'],['analytics','Online Reporting'],['language','Multiple Gateways'],['integration_instructions','Integrated Platforms']];
  const industryFaqs=[
    ['How can I apply for an industry-specific merchant account?','Start with the form below. MannyPay will review the business category, processing needs and documentation path.'],
    ['What types of payment methods are supported?','Solutions can include card-present payments, online checkout, gateways, virtual terminals, invoicing and recurring billing.'],
    ['Can MannyPay help with chargebacks?','Yes. Available options can include fraud tools, chargeback monitoring, better checkout rules and support guidance.'],
    ['Are high-risk industries supported?','Yes. MannyPay can review specialized and regulated categories and recommend realistic processing paths.'],
    ['How long does approval take?','Timing depends on the category, documents and provider review. Complete applications usually move faster.']
  ];
  const testimonialBlock=()=>`<section class="industry-testimonials"><div class="container"><div class="industry-review-card"><div><p class="industry-eyebrow">Merchant feedback</p><h2>What businesses value about MannyPay.</h2><p class="google-note">Google reviews ★★★★★</p></div><figure><div class="review-stars">★★★★★</div><blockquote>“The right payment partner makes complex requirements feel manageable. MannyPay keeps the conversation clear and practical.”</blockquote><figcaption><strong>Sample merchant review</strong><span>Replace with verified testimonial later</span></figcaption></figure></div></div></section>`;
  function industriesLanding(){
    const grid=list=>`<div class="industry-card-grid">${list.map(([slug,title,icon])=>`<a class="industry-landing-card" href="${site.pages[slug]?href(slug):href('industries')}"><span class="material-symbols">${icon}</span><strong>${title}</strong></a>`).join('')}</div>`;
    return `<div class="industries-redesign" data-industries-page>
      <section class="industries-landing-hero">
        <div class="container industries-hero-grid">
          <div><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Industries</span></nav><p class="industry-eyebrow">Simple. Reliable. Secure.</p><h1>We service thousands of merchant industries.</h1><p>Browse low-risk and high-risk merchant categories MannyPay can support with online, in-person, gateway and reporting solutions.</p><a class="button button-primary" href="#industry-tabs">Explore industries <span>arrow_downward</span></a></div>
          <div class="industries-hero-image"><img src="assets/images/industries/manny-industries-laptop.png" alt="MannyPay brand ambassador holding a laptop"></div>
        </div>
      </section>
      <section class="industry-tab-section" id="industry-tabs">
        <div class="industry-tabs" role="tablist" aria-label="Merchant risk category"><button class="industry-tab active" type="button" data-industry-tab="low"><span class="material-symbols">speed</span> Low-Risk Merchant</button><button class="industry-tab" type="button" data-industry-tab="high"><span class="material-symbols">shield_lock</span> High-Risk Merchant</button></div>
        <div class="container">
          <div class="industry-panel active" data-industry-panel="low"><header class="industry-section-head centered"><p class="industry-eyebrow">Low-risk merchants</p><h2>We service thousands of low-risk merchants.</h2><p>For restaurants, hotels, retail, services, healthcare and commerce brands that need secure, clear and reliable payment acceptance.</p></header>${grid(lowRiskIndustryList)}</div>
          <div class="industry-panel" data-industry-panel="high"><header class="industry-section-head centered"><p class="industry-eyebrow">High-risk merchants</p><h2>Specialized processing for complex categories.</h2><p>For regulated, card-not-present and harder-to-place businesses that need thoughtful underwriting, fraud tools and flexible gateway support.</p></header>${grid(highRiskIndustryList)}</div>
        </div>
      </section>
      <section class="industry-takeaway"><div class="container industry-takeaway-card"><div><p class="industry-eyebrow">Quick takeaway</p><h2>We integrate with any merchant industry.</h2><p>From gateways and point-of-sale systems to invoicing, online virtual terminals and reporting, MannyPay can help configure the tools around the business.</p></div><ul>${industrySupportItems.map(item=>`<li><span class="material-symbols">check_circle</span>${item}</li>`).join('')}</ul></div></section>
      ${testimonialBlock()}
      ${quoteBlock('Industries')}
    </div>`;
  }
  function industryDetailPage(){
    const isAdult=page.slug==='adult';
    const title=isAdult?'Adult Entertainment Merchant Processing':`${esc(page.title)} Merchant Processing`;
    const supported=isAdult?adultSupported:['Online payments','In-person payments','Invoicing','Virtual terminals','POS systems','Multiple gateways','Chargeback support','Reporting dashboards'];
    const tools=isAdult?adultTools:[['point_of_sale','POS Systems & Hardware'],['sync_alt','Accounting Integrations'],['hub','Omni Channel'],['dashboard','Personal Dashboard'],['support_agent','Chargeback Management'],['analytics','Online Reporting'],['language','Multiple Gateways'],['integration_instructions','Integrated Platforms']];
    return `<div class="industry-detail-redesign">
      <section class="industry-detail-hero">
        <div class="container industry-detail-hero-grid">
          <div><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="${href('industries')}">Industries</a><span>/</span><span>${esc(page.title)}</span></nav><p class="industry-eyebrow">Simple. Reliable. Secure.</p><h1>${title}</h1><p>${isAdult?'Secure online and in-store payments for adult entertainment businesses with clear support, practical tools and compliant workflows.':`Payment processing designed around the specific requirements of ${esc(page.title).toLowerCase()} businesses.`}</p><a class="button button-primary" href="#free-quote">Free quote <span>arrow_downward</span></a></div>
          <div class="industry-detail-symbol"><span class="material-symbols">${industryIcons[page.slug]||'storefront'}</span></div>
        </div>
      </section>
      <section class="industry-intro"><div class="container narrow"><h2>${isAdult?'Adult credit card processing.':`${esc(page.title)} payment support.`}</h2><p>${isAdult?'Running an adult entertainment business has many challenges, especially when obtaining reliable payment processing. MannyPay can help businesses evaluate secure, discreet and practical payment tools.':`MannyPay helps ${esc(page.title).toLowerCase()} merchants evaluate online and in-person payment tools, gateways, dashboards, fraud controls and support paths.`}</p></div></section>
      <section class="industry-support-banner"><div class="container industry-support-card"><div><p class="industry-eyebrow">${esc(page.title)} support</p><h2>${esc(page.title)} we support.</h2><p>Use this section as the editable industry support banner. Content can be expanded later per category.</p><ul>${supported.map(item=>`<li><span class="material-symbols">check_circle</span>${item}</li>`).join('')}</ul><a class="button button-primary" href="#free-quote">View more</a></div><img src="assets/images/industries/industry-support-model.png" alt="Professional model for industry support banner"></div></section>
      <section class="trusted-industry"><div class="container"><header class="industry-section-head centered"><p class="industry-eyebrow">Trusted processing</p><h2>Trusted ${esc(page.title)} payment processing.</h2><p>Fast approvals and a clear support path backed by tools merchants actually need.</p></header><div class="trusted-tool-grid">${tools.map(([icon,label])=>`<article><span class="material-symbols">${icon}</span><strong>${label}</strong></article>`).join('')}</div></div></section>
      <section class="industry-faq-section"><div class="container"><header class="industry-section-head centered"><p class="industry-eyebrow">FAQs</p><h2>${esc(page.title)} payment processing FAQs.</h2></header><div class="industry-faq-stack">${industryFaqs.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></div></section>
      <section class="industry-mini-benefits"><div class="container mini-benefit-grid">${[['point_of_sale','Highest rated POS systems & hardware'],['payments','Matching your payment processing needs'],['support_agent','Your single point of contact']].map(([icon,heading])=>`<article><span class="material-symbols">${icon}</span><h3>${heading}</h3><p>Placeholder copy ready for final industry-specific messaging.</p></article>`).join('')}</div></section>
      ${testimonialBlock()}
      ${quoteBlock(page.title)}
    </div>`;
  }
  function industryPage(){
    if(page.slug==='industries'||page.slug==='see-more-industries')return industriesLanding();
    return industryDetailPage();
  }

  const integrationDirectory=[
    ['shopify','Shopify','eCommerce','shopify.svg'],['bigcommerce','BigCommerce','eCommerce','big-commerce.webp'],['woocommerce','WooCommerce','eCommerce','woocommerce.webp'],['magento','Magento','eCommerce','magento-ecom.webp'],['opencart','OpenCart','eCommerce','opencart.webp'],['volusion','Volusion','eCommerce','volusion.webp'],['ecwid','Ecwid','eCommerce','logo_hyva.png'],['prestashop','PrestaShop','eCommerce','presta-shop.webp'],['shopware','Shopware','eCommerce','shopware.webp'],['nopcommerce','nopCommerce','eCommerce','nop-commerce.png'],
    ['quickbooks','QuickBooks','Accounting','quickbooks.webp'],['xero','Xero','Accounting','invoice-simple.png'],['sage-intacct','Sage Intacct','Accounting','sage-intacct.png'],['sap','SAP','ERP','sap.webp'],['sap-s4-hana','SAP S/4HANA','ERP','sap_s4_hana.png'],['netsuite','NetSuite','ERP','netsuite.webp'],['odoo','Odoo','ERP','odoo.svg'],['oracle','Oracle','ERP','sap-hybris.webp'],['epicor','Epicor Prophet 21','ERP','epicor-prophet.svg'],['syspro','SYSPRO','ERP','syspro.webp'],['infor','Infor','ERP','infor.webp'],['acumatica','Acumatica','ERP','acumatica-1024x369.webp'],
    ['salesforce','Salesforce','CRM','salesforce.webp'],['hubspot','HubSpot','CRM','hubspot.png'],['zoho','Zoho','CRM','zoho.webp'],['active-campaign','ActiveCampaign','CRM','active-campaign.webp'],['marketo','Marketo','CRM','marketo.webp'],['ontraport','Ontraport','CRM','ontraport (1).webp'],['pipedrive','Pipedrive','CRM','podio.png'],['sugarcrm','SugarCRM','CRM','sugar-crm.webp'],['agilecrm','Agile CRM','CRM','agile-crm.webp'],['highlevel','HighLevel','CRM','high-level.png'],
    ['authorize-net','Authorize.Net','Payment Gateway','authorize-net.png'],['nmi','NMI','Payment Gateway','NMI_Logo_Primary1.png'],['fluidpay','FluidPay','Payment Gateway','fluidpay.png'],['cybersource','CyberSource','Payment Gateway','cybersource.webp'],['chase-paymentech','Chase Paymentech','Payment Gateway','chase-paymentech.png'],['paytrace','PayTrace','Payment Gateway','pay-trace.webp'],['heartland','Heartland','Payment Gateway','heartland.webp'],['paypal','PayPal','Payment Gateway','poynt.webp'],['freedompay','FreedomPay','Payment Gateway','freedom-payment.png'],['accept-blue','Accept.Blue','Payment Gateway','accept.blue_.png'],
    ['clover-pos','Clover POS','POS','clover.svg'],['flow-pos','Flow POS','POS','golfnow.svg'],['poynt','Poynt','POS','poynt.webp'],['ingenico','Ingenico','POS','ingenico.webp'],['verifone','Verifone','POS','verifone.png'],['dejavoo','Dejavoo','POS','dejavoo.webp'],['pax','PAX','POS','pax.webp'],['korona','KORONA POS','POS','korona.webp'],['ipos-pays','iPOSpays','POS','iPOSpays-2.png'],['myr','MYR POS','POS','myr.webp'],
    ['advancedmd','AdvancedMD','EMR','advancedMd.svg'],['chirocat','ChiroCat','EMR','Chirocat.svg'],['chirohd','ChiroHD','EMR','ChiroHD.svg'],['collaboratemd','CollaborateMD','EMR','Collaborate-MD.png'],['dentrix','Dentrix','EMR','dentrix.svg'],['drchrono','DrChrono','EMR','drchrono.png'],['eaglesoft','Eaglesoft','EMR','eaglesoft.svg'],['modmed','ModMed','EMR','modmed.svg'],['opendental','Open Dental','EMR','open-dental.png'],['rxnt','RXNT','EMR','rxnt.png'],['simplepractice','SimplePractice','EMR','simplepractice.png'],['therapy-notes','TherapyNotes','EMR','therapynotes.png'],
    ['servicetitan','ServiceTitan','Business Tools','servicetitan.svg'],['tekmetric','Tekmetric','Business Tools','tekmetric.png'],['zendesk','Zendesk','Business Tools','zendesk.webp'],['jira','Jira','Business Tools','jira (1).webp'],['podio','Podio','Business Tools','podio.png'],['webpt','WebPT','Business Tools','webPT.svg'],['vista','Vista','Business Tools','vista.png'],['golfnow','GolfNow','Business Tools','golfnow.svg']
  ];
  function integrationPage(){
    const categories=['All','Accounting','CRM','eCommerce','EMR','ERP','Payment Gateway','POS','Business Tools'];
    const featured=['shopify','flow-pos','clover-pos','quickbooks','bigcommerce','authorize-net','salesforce','woocommerce','nmi','see-more'];
    const logoPath=file=>`assets/images/integrations/logos/${file}`;
    const featuredCard=slug=>slug==='see-more'?`<a class="integration-dropdown-card see-more" href="#integration-directory"><span class="material-symbols">apps</span><strong>See more integrations</strong><small>Browse the full library</small></a>`:(()=>{const item=integrationDirectory.find(integration=>integration[0]===slug);return item?`<a class="integration-dropdown-card" href="#integration-${esc(item[0])}"><img src="${logoPath(esc(item[3]))}" alt="${esc(item[1])} logo"><strong>${esc(item[1])}</strong><small>${esc(item[2])}</small></a>`:''})();
    return `<div class="integrations-redesign" data-integrations-page>
      <section class="integrations-hero"><div class="container integrations-hero-grid"><div><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Integrations</span></nav><p class="integration-eyebrow">Payment integrations</p><h1>Customized integrations that work for you.</h1><p>Connect MannyPay with the commerce, accounting, CRM, gateway, POS, EMR and ERP systems your business already uses.</p><div class="solution-actions"><a class="button button-primary" href="#free-quote">Free quote <span>arrow_downward</span></a><a class="button button-secondary" href="#integration-directory">Browse integrations</a></div></div><div class="integration-hero-graphic"><div class="integration-orbit">${['shopify','quickbooks','salesforce','authorize-net','clover-pos','woocommerce'].map((slug,index)=>{const item=integrationDirectory.find(integration=>integration[0]===slug);return `<span style="--i:${index}"><img src="${logoPath(esc(item[3]))}" alt="${esc(item[1])} logo"></span>`}).join('')}<i class="material-symbols">hub</i></div></div></div></section>
      <section class="integration-dropdown-section"><div class="container"><div class="integration-dropdown-grid">${featured.map(featuredCard).join('')}</div></div></section>
      <section class="integration-directory-section" id="integration-directory"><div class="container"><header class="integration-section-head centered"><p class="integration-eyebrow">Find your connection</p><h2>All the integrations you’ll ever need to run your business.</h2><p>Search by name or use the category tabs to quickly narrow the directory.</p></header><div class="integration-controls"><label class="integration-search"><span class="material-symbols">search</span><input data-integration-search type="search" placeholder="Search integrations, e.g. QuickBooks"></label><div class="integration-category-tabs" role="tablist">${categories.map((cat,index)=>`<button class="integration-category-tab${index===0?' active':''}" type="button" data-integration-category="${esc(cat)}">${esc(cat)}</button>`).join('')}</div></div><div class="integration-logo-grid">${integrationDirectory.map(([slug,title,category,file])=>`<article class="integration-logo-card" id="integration-${esc(slug)}" data-integration-card data-category="${esc(category)}" data-name="${esc(title.toLowerCase())}"><img src="${logoPath(esc(file))}" alt="${esc(title)} logo"><strong>${esc(title)}</strong><small>${esc(category)}</small></article>`).join('')}</div><p class="integration-empty" data-integration-empty hidden>No integrations found. Try another search or choose All.</p></div></section>
      <section class="integration-support-strip"><div class="container"><div><p class="integration-eyebrow">Need custom integration?</p><h2>We can help map the right payment workflow.</h2><p>Use the quote form below and tell us which platform, gateway or system you need connected.</p></div><a class="button button-primary" href="#free-quote">Request integration support</a></div></section>
      ${quoteBlock('Integrations')}
    </div>`;
  }

  function partnerPage(){
    const merchantOptions=[
      ['shield_lock','High-risk','Multi-MID load balancing','Chargeback management','No reserves'],
      ['verified_user','Low-risk','Same-day funding','Custom POS solutions','Free terminal options'],
      ['language','Online','Omni-channel options','Multiple payment gateways','Shopping cart integrations'],
      ['money_off','Zero cost','Dual pricing','Cash discount','Surcharging'],
      ['hub','Integrations','QuickBooks, Xero and more','CRM and API solutions','eCommerce and retail'],
      ['payments','Solutions','Integration and development','eCheck and ACH options','Working capital loans']
    ];
    const residuals=[
      ['trending_up','Earn up to 80% true profit splits','No mark-up on buy rates, which means you earn truer profit splits.'],
      ['analytics','Full reports & breakdowns','Detailed reporting each month so you can see how every portfolio is performing.'],
      ['support_agent','Single point of contact','A real support path for you and your referred merchants.'],
      ['receipt_long','Processing statement analysis','Quick savings comparisons and clear merchant-fit recommendations.'],
      ['workspace_premium','Exclusive agent programs','Premium tools, priority support and growth options for qualified agents.'],
      ['link','Pre-app links','Send merchants a branded application path with the right details pre-filled.']
    ];
    return `<div class="partners-redesign" data-partner-page>
      <section class="partners-hero">
        <div class="container partners-hero-grid">
          <div class="partners-hero-copy"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Partners</span></nav><p class="partner-eyebrow">Simple. Reliable. Secure.</p><h1>Partner with MannyPay. Earn true profit sharing.</h1><p>Join a practical partner program built for referral partners and agents who want more merchant options, clear reporting and long-term residual income.</p><div class="solution-actions"><a class="button button-primary" href="#partner-apply">Join now <span>arrow_downward</span></a><a class="button button-secondary" href="#partner-programs">Explore programs</a></div></div>
          <figure class="partners-hero-image"><img src="assets/images/partners/partners-hero-manny.png" alt="MannyPay partnership hero with Manny and a business partner"></figure>
        </div>
      </section>
      <section class="partner-programs" id="partner-programs">
        <div class="container"><header class="partner-section-head centered"><p class="partner-eyebrow">Two ways to partner</p><h2>Choose the program that fits how you grow.</h2><p>Referral partners can send opportunities to MannyPay. Agents can build a more hands-on portfolio with higher upside and more control.</p></header>
          <div class="partner-tabs" role="tablist" aria-label="Partner program type"><button class="partner-tab active" type="button" data-partner-tab="referral"><span class="material-symbols">diversity_3</span>Referral Partner</button><button class="partner-tab" type="button" data-partner-tab="agent"><span class="material-symbols">work</span>Agent</button></div>
          <div class="partner-calculator-card">
            <div class="partner-program-copy"><p class="partner-eyebrow" data-partner-kicker>Referral partner</p><h3 data-partner-title>Our referral partner program.</h3><p data-partner-copy>Refer merchants and let MannyPay handle sales support, onboarding and ongoing service.</p><div class="partner-residual-badge"><strong data-partner-badge>Up to 50%</strong><span>lifetime residuals</span></div><label for="merchant-range">Merchants per month <strong data-merchant-value>4</strong></label><input id="merchant-range" data-residual-range type="range" min="1" max="50" value="4"></div>
            <div class="partner-chart" aria-label="Estimated residual chart">${[1,2,3,4,5].map(year=>`<div class="partner-bar-wrap"><span data-bar-label>${year===1?'$17K':'$0K'}</span><i data-residual-bar style="--bar:20%"></i><b>${year}<sup>${['st','nd','rd'][year-1]||'th'}</sup> Year</b></div>`).join('')}</div>
          </div>
        </div>
      </section>
      <section class="partner-steps"><div class="container"><header class="partner-section-head centered"><p class="partner-eyebrow">How to get started</p><h2>Three simple steps.</h2></header><div class="partner-step-grid">${[['person_add','Sign up','Apply in a few minutes using the partner form.'],['storefront','Refer merchants','Introduce merchants that need a better payment fit.'],['paid','Get paid','Receive monthly residual payments once accounts are processing.']].map(([icon,title,copy])=>`<article><span class="material-symbols">${icon}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div></div></section>
      <section class="merchant-options"><div class="container"><header class="partner-section-head centered"><p class="partner-eyebrow">More options</p><h2>More options for your merchants.</h2></header><div class="merchant-option-grid">${merchantOptions.map(([icon,title,...items],index)=>`<article class="${index===0?'featured':''}"><span class="material-symbols">${icon}</span><h3>${title}</h3><ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul></article>`).join('')}</div></div></section>
      <section class="partner-residuals"><div class="container"><header class="partner-section-head centered"><p class="partner-eyebrow">Higher residuals</p><h2>Higher residuals for you.</h2></header><div class="residual-banner-stack">${residuals.map(([icon,title,copy])=>`<article><span class="material-symbols">${icon}</span><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('')}</div></div></section>
      ${testimonialBlock().replace('What businesses value about MannyPay.','What partners are saying about MannyPay.').replace('Merchant feedback','Partner feedback')}
      <section class="partner-apply" id="partner-apply"><div class="container partner-apply-grid"><div class="partner-apply-visual"><img src="assets/images/partners/partner-form-person.png" alt="Confident MannyPay partner representative"><h2>Others build portfolios,<br>we build relationships.</h2></div><form class="partner-apply-form"><h2>Start earning today</h2><div class="dynamic-field full"><label>Partner type</label><select><option>Referral Partner</option><option>Agent</option></select></div><div class="dynamic-field"><label>First name</label><input></div><div class="dynamic-field"><label>Last name</label><input></div><div class="dynamic-field full"><label>Email</label><input type="email"></div><div class="dynamic-field full"><label>Mobile number</label><input type="tel"></div><fieldset><legend>Do you have previous merchant services experience?</legend><label><input type="radio" name="partner-experience"> Yes</label><label><input type="radio" name="partner-experience"> No</label></fieldset><div class="dynamic-field full"><label>Comments</label><textarea></textarea></div><button class="button button-primary form-submit" type="submit">Submit <span>→</span></button><p>Your contact information is secure and adheres to our strict <a href="${href('privacy-policy')}">Privacy Policy</a>.</p></form></div></section>
    </div>`;
  }

  function companyPage(){
    if(page.slug==='blog')return `${hero()}<section class="catalog-section"><div class="container"><header class="catalog-heading centered"><p class="catalog-eyebrow">Insights</p><h2>Payment knowledge, simplified.</h2><p>Use this page for MannyPay articles on processing, chargebacks, pricing programs, hardware, integrations and industry rules.</p></header><div class="catalog-card-grid">${['Chargeback prevention','Choosing a POS system','Online payment security','High-risk approval checklist','Cash discount basics','Integration planning'].map((title,i)=>`<article class="catalog-card"><span class="material-symbols">${['shield','point_of_sale','lock','fact_check','payments','integration_instructions'][i]}</span><h3>${title}</h3><p>Placeholder article card ready for MannyPay blog content.</p><b>Read more →</b></article>`).join('')}</div></div></section>${cta}`;
    if(page.slug==='upload')return `${hero()}<section class="catalog-section catalog-soft"><div class="container"><div class="upload-panel"><span class="material-symbols">cloud_upload</span><h2>Secure document upload</h2><p>Use this area to connect the final encrypted upload service for merchant applications, statements, IDs, licenses and supporting documents.</p><button class="button button-primary" type="button">Choose files</button><small>Placeholder UI only — final upload service can be wired later.</small></div></div></section>`;
    if(page.slug==='login')return `${hero()}<section class="catalog-section"><div class="container partner-program-grid"><article><span class="material-symbols">storefront</span><h2>Merchant Portal</h2><p>Access merchant reporting, applications and support resources.</p><a class="button button-primary" href="#">Merchant login</a></article><article><span class="material-symbols">groups</span><h2>Partner Portal</h2><p>Access referral, agent and ISO partner resources.</p><a class="button button-secondary" href="#">Partner login</a></article></div></section>`;
    if(page.slug==='sign-up')return `${hero()}<section class="catalog-section"><div class="container partner-program-grid"><article><span class="material-symbols">store</span><h2>Merchant</h2><p>Apply for payment processing.</p><a class="button button-primary" href="${href('merchant-sign-up')}">Merchant Sign Up</a></article><article><span class="material-symbols">diversity_3</span><h2>Referral Partner</h2><p>Refer merchants and earn.</p><a class="button button-secondary" href="${href('referral-partner-sign-up')}">Referral Sign Up</a></article><article><span class="material-symbols">work</span><h2>Agent / ISO</h2><p>Build a payments portfolio.</p><a class="button button-secondary" href="${href('agent-iso-sign-up')}">Agent Sign Up</a></article></div></section>`;
    if(page.slug==='careers')return `${hero()}<section class="catalog-section"><div class="container catalog-feature-row"><div><p class="catalog-eyebrow">Careers</p><h2>Make an impact in payments.</h2><p>Build merchant-friendly payment experiences with a team focused on practical support, clear communication and growth.</p></div><div class="catalog-mini-grid">${[['campaign','Marketing Manager'],['handshake','Independent Sales Agent'],['support_agent','Merchant Support'],['code','Implementation Specialist']].map(([i,t])=>`<article><span class="material-symbols">${i}</span><strong>${t}</strong></article>`).join('')}</div></div></section><section class="catalog-section catalog-soft"><div class="container contact-form-wrap"><form class="dynamic-contact-form"><div class="dynamic-field"><label>Full name</label><input></div><div class="dynamic-field"><label>Email</label><input type="email"></div><div class="dynamic-field"><label>Phone</label><input type="tel"></div><div class="dynamic-field"><label>LinkedIn</label><input></div><div class="dynamic-field full"><label>Resume / CV</label><input type="file"></div><button class="button button-primary form-submit" type="submit">Submit resume <span>→</span></button></form></div></section>`;
    return `${hero()}<section class="catalog-section"><div class="container catalog-feature-row"><div><p class="catalog-eyebrow">About MannyPay</p><h2>Relationships first. Processing second.</h2><p>MannyPay is designed to simplify payment processing for merchants that need clarity, better fit and human support — especially when the business model is more complex than average.</p></div><div class="catalog-mini-grid">${[['verified_user','Trust and dependability'],['support_agent','Attentive support'],['hub','Broad processing relationships'],['bolt','Practical onboarding'],['point_of_sale','Modern payment tools'],['handshake','Partner-friendly growth']].map(([i,t])=>`<article><span class="material-symbols">${i}</span><strong>${t}</strong></article>`).join('')}</div></div></section><section class="catalog-section catalog-soft"><div class="container split-section"><div class="image-placeholder"><span class="material-symbols">groups</span></div><div class="split-copy"><p class="section-label">Mission</p><h2>Make payment processing feel less complicated.</h2><p>Like the AllayPay reference, this page frames the brand around relief, relationship-building and service. The MannyPay version keeps that idea but uses a simpler, cleaner fintech presentation.</p><ul class="check-list"><li>Clear merchant guidance</li><li>Flexible account paths</li><li>Support for specialized categories</li><li>Integrated hardware and online tools</li></ul></div></div></section>${cta}`;
  }

  function standardPage(){const features=page.features||['Fast approvals','Flexible technology','Transparent options','Responsive support'];return `${hero()}<section class="inner-section"><div class="container"><header class="inner-heading"><p class="section-label">Designed to perform</p><h2>Payment tools that remove <span>friction.</span></h2><p>MannyPay combines payment technology, banking relationships, and practical support to help businesses launch confidently and operate efficiently.</p></header>${featureGrid(features)}</div></section><section class="inner-section tint"><div class="container split-section"><div>${imagePlaceholder(`${page.title} solutions`)}</div><div class="split-copy"><p class="section-label">A better fit</p><h2>Configured for the way you sell.</h2><p>Every recommendation begins with your business model, customers, payment channels, transaction profile, and growth goals. We then match the account, technology, and support path to those needs.</p><ul class="check-list"><li>Cards and digital wallets</li><li>Online and in-person options</li><li>Secure reporting tools</li><li>Scalable integrations</li><li>Fraud-management support</li><li>Funding options for eligible merchants</li></ul></div></div></section>${related()}${faq(genericFaq)}${cta}`}

  function contactPage(){return `${hero()}<section class="inner-section"><div class="container contact-layout"><aside class="contact-info"><h2>Connect with MannyPay</h2><p>A representative will review your message and help route it to the right team.</p><div class="contact-detail"><span class="material-symbols">schedule</span><div><strong>Office hours</strong><br>Monday–Friday, 8am–6pm ET</div></div><div class="contact-detail"><span class="material-symbols">call</span><div><strong>Phone</strong><br>Merchant, new-account, and partner support</div></div><div class="contact-detail"><span class="material-symbols">location_on</span><div><strong>United States</strong><br>Serving merchants nationwide</div></div></aside><div class="contact-form-wrap"><div class="form-builder-toolbar" data-runtime-control><strong>Form fields</strong><select id="field-type" aria-label="Field type"><option value="text">Text field</option><option value="email">Email</option><option value="tel">Phone</option><option value="select">Select</option><option value="textarea">Textarea</option></select><button id="add-field" type="button">+ Add field</button></div><form class="dynamic-contact-form" id="contact-form"><button class="button button-primary form-submit" type="submit">Send message <span>→</span></button></form></div></div></section>${cta}`}

  const legalSections={privacy:[['Information we collect','We may collect information you provide through forms, account interactions, applications, support requests, and website usage.'],['How information is used','Information may be used to respond to requests, evaluate service eligibility, support accounts, improve experiences, prevent fraud, and meet legal obligations.'],['Information sharing','Information may be shared with processors, banks, service providers, professional advisers, and authorities when needed to provide services or comply with law.'],['Data security','Reasonable administrative, technical, and physical safeguards are used to protect information. No method of transmission or storage can be guaranteed completely secure.'],['Your choices','You may request access, correction, or deletion where applicable and can opt out of eligible marketing communications.'],['Contact','Questions about this policy can be sent through the MannyPay contact page.']],terms:[['Website use','You may use this website for lawful informational and business purposes. You may not interfere with its operation or misuse its content, forms, or services.'],['No guarantee of approval','Submitting a form or application does not guarantee merchant-account approval, pricing, funding timing, hardware availability, or access to a particular provider.'],['Third-party services','Processing, banking, gateway, hardware, and other services may be provided by independent third parties under separate agreements.'],['Intellectual property','Website content, branding, graphics, and software are protected by applicable intellectual-property laws and may not be reused without permission.'],['Disclaimers','Website information is provided for general purposes and may change. Specific service terms are defined in applicable agreements.'],['Limitation and contact','To the extent permitted by law, liability is limited as described in applicable agreements. Questions can be submitted through the contact page.']]};
  function legalPage(type){const sections=legalSections[type];return `${hero()}<section class="inner-section"><div class="container legal-layout"><nav class="legal-nav">${sections.map((item,index)=>`<a href="#legal-${index+1}">${esc(item[0])}</a>`).join('')}</nav><article class="legal-copy"><p><strong>Last updated:</strong> June 23, 2026</p><p>This draft provides a website-ready structure and should be reviewed by qualified legal counsel before publication.</p>${sections.map((item,index)=>`<section id="legal-${index+1}"><h2>${esc(item[0])}</h2><p>${esc(item[1])}</p></section>`).join('')}</article></div></section>`}

  function applicationPage(){return `${hero()}<section class="inner-section tint"><div class="container"><div class="application-panel"><header class="inner-heading"><p class="section-label">Start here</p><h2>Tell us about <span>your business.</span></h2><p>A specialist will review your information before discussing documentation, pricing, and next steps.</p></header><form class="dynamic-contact-form"><div class="dynamic-field"><label>First name</label><input required></div><div class="dynamic-field"><label>Last name</label><input required></div><div class="dynamic-field"><label>Business name</label><input required></div><div class="dynamic-field"><label>Email</label><input type="email" required></div><div class="dynamic-field"><label>Phone</label><input type="tel"></div><div class="dynamic-field"><label>Estimated monthly volume</label><select><option>Select range</option><option>Under $25,000</option><option>$25,000–$100,000</option><option>Over $100,000</option></select></div><div class="dynamic-field full"><label>How can we help?</label><textarea></textarea></div><button class="button button-primary form-submit" type="submit">Continue <span>→</span></button></form></div></div></section>`}

  if(page.slug==='online')main.innerHTML=onlinePage();
  else if(page.group==='Payment Solutions')main.innerHTML=solutionPage();
  else if(page.group==='Products'||page.template==='product-detail')main.innerHTML=productPage();
  else if(page.group==='Industries')main.innerHTML=industryPage();
  else if(page.group==='Integrations')main.innerHTML=integrationPage();
  else if(page.group==='Partners')main.innerHTML=partnerPage();
  else if(page.template==='contact')main.innerHTML=contactPage();
  else if(page.template==='privacy')main.innerHTML=legalPage('privacy');
  else if(page.template==='terms')main.innerHTML=legalPage('terms');
  else if(['application','partner-application'].includes(page.template))main.innerHTML=applicationPage();
  else if(['blog','upload','careers','login','signup'].includes(page.template)||['about','blog','upload','careers','login','sign-up'].includes(page.slug))main.innerHTML=companyPage();
  else main.innerHTML=standardPage();
  main.classList.add('inner-page');

  const defaultFields=[{id:'first-name',label:'First name',type:'text'},{id:'last-name',label:'Last name',type:'text'},{id:'email',label:'Email',type:'email'},{id:'phone',label:'Mobile number',type:'tel'},{id:'message',label:'How can we help?',type:'textarea',full:true}];
  const form=document.querySelector('#contact-form');
  if(form){
    const key='mannypay-contact-fields-v1';let fields;try{fields=JSON.parse(localStorage.getItem(key)||'null')||defaultFields}catch{fields=defaultFields}
    const render=()=>{form.querySelectorAll('.dynamic-field').forEach(field=>field.remove());fields.forEach(field=>{const wrap=document.createElement('div');wrap.className=`dynamic-field${field.full?' full':''}`;wrap.dataset.fieldId=field.id;const control=field.type==='textarea'?'<textarea></textarea>':field.type==='select'?'<select><option>Select an option</option><option>Option one</option></select>':`<input type="${field.type}">`;wrap.innerHTML=`<label>${esc(field.label)}</label>${control}<button class="remove-field" data-runtime-control type="button" aria-label="Remove ${esc(field.label)}">Remove</button>`;form.insertBefore(wrap,form.querySelector('.form-submit'))});localStorage.setItem(key,JSON.stringify(fields));form.querySelectorAll('.remove-field').forEach(button=>button.addEventListener('click',()=>{fields=fields.filter(field=>field.id!==button.parentElement.dataset.fieldId);render()}))};
    document.querySelector('#add-field')?.addEventListener('click',()=>{const type=document.querySelector('#field-type').value,id=`field-${Date.now()}`;fields.push({id,label:`New ${type==='textarea'?'message':type} field`,type,full:type==='textarea'});render()});
    form.addEventListener('submit',event=>{event.preventDefault()});render();
  }

  const reviewSlides=[...document.querySelectorAll('[data-review-slide]')];
  if(reviewSlides.length){let reviewIndex=0;const showReview=index=>{reviewIndex=(index+reviewSlides.length)%reviewSlides.length;reviewSlides.forEach((slide,item)=>slide.classList.toggle('active',item===reviewIndex))};document.querySelector('[data-review-prev]')?.addEventListener('click',()=>showReview(reviewIndex-1));document.querySelector('[data-review-next]')?.addEventListener('click',()=>showReview(reviewIndex+1))}
  const quoteForm=document.querySelector('#online-quote-form');
  quoteForm?.addEventListener('submit',event=>{event.preventDefault();const status=quoteForm.querySelector('.quote-status');status.textContent='Thank you — your information is ready for connection to the final form service.';quoteForm.classList.add('submitted')});

  const productsRoot=document.querySelector('[data-products-page]');
  if(productsRoot){
    let category='All',brand='All';
    const cards=[...productsRoot.querySelectorAll('[data-product-card]')],count=productsRoot.querySelector('[data-product-count]');
    const applyFilters=()=>{let visible=0;cards.forEach(card=>{const show=(category==='All'||card.dataset.category===category)&&(brand==='All'||card.dataset.brand===brand);card.hidden=!show;if(show)visible+=1});if(count)count.textContent=`Showing ${visible} product${visible===1?'':'s'}`};
    productsRoot.querySelectorAll('.product-filter-tab').forEach(button=>button.addEventListener('click',()=>{const group=[...productsRoot.querySelectorAll(`.product-filter-tab[data-filter-type="${button.dataset.filterType}"]`)];group.forEach(item=>item.classList.toggle('active',item===button));if(button.dataset.filterType==='category')category=button.dataset.filterValue;else brand=button.dataset.filterValue;applyFilters()}));
    applyFilters();
  }
  const detailRoot=document.querySelector('[data-product-detail]');
  if(detailRoot){
    const main=detailRoot.querySelector('[data-product-main]'),thumbs=[...detailRoot.querySelectorAll('[data-product-thumb]')];
    thumbs.forEach(button=>button.addEventListener('click',()=>{thumbs.forEach(item=>item.classList.toggle('active',item===button));main.innerHTML=button.innerHTML}));
  }
  const industriesRoot=document.querySelector('[data-industries-page]');
  if(industriesRoot){
    industriesRoot.querySelectorAll('[data-industry-tab]').forEach(button=>button.addEventListener('click',()=>{
      const target=button.dataset.industryTab;
      industriesRoot.querySelectorAll('[data-industry-tab]').forEach(item=>item.classList.toggle('active',item===button));
      industriesRoot.querySelectorAll('[data-industry-panel]').forEach(panel=>panel.classList.toggle('active',panel.dataset.industryPanel===target));
    }));
  }
  const partnerRoot=document.querySelector('[data-partner-page]');
  if(partnerRoot){
    const state={program:'referral',merchants:4};
    const config={referral:{kicker:'Referral partner',title:'Our referral partner program.',copy:'Refer merchants and let MannyPay handle sales support, onboarding and ongoing service.',badge:'Up to 50%',rate:354},agent:{kicker:'Agent program',title:'Build your agent portfolio.',copy:'Work more directly with merchants while accessing stronger portfolio tools, reporting and long-term upside.',badge:'Up to 80%',rate:560}};
    const range=partnerRoot.querySelector('[data-residual-range]'),value=partnerRoot.querySelector('[data-merchant-value]'),bars=[...partnerRoot.querySelectorAll('[data-residual-bar]')],labels=[...partnerRoot.querySelectorAll('[data-bar-label]')];
    const money=n=>n>=1000000?`$${(n/1000000).toFixed(1)}M`:`$${Math.round(n/1000)}K`;
    const renderPartner=()=>{const c=config[state.program];partnerRoot.querySelector('[data-partner-kicker]').textContent=c.kicker;partnerRoot.querySelector('[data-partner-title]').textContent=c.title;partnerRoot.querySelector('[data-partner-copy]').textContent=c.copy;partnerRoot.querySelector('[data-partner-badge]').textContent=c.badge;value.textContent=state.merchants;const vals=[1,2,3,4,5].map(year=>state.merchants*12*c.rate*year*.98);const max=Math.max(...vals);bars.forEach((bar,index)=>{bar.style.setProperty('--bar',`${Math.max(12,vals[index]/max*100)}%`);labels[index].textContent=money(vals[index])})};
    partnerRoot.querySelectorAll('[data-partner-tab]').forEach(button=>button.addEventListener('click',()=>{state.program=button.dataset.partnerTab;partnerRoot.querySelectorAll('[data-partner-tab]').forEach(item=>item.classList.toggle('active',item===button));renderPartner()}));
    range?.addEventListener('input',()=>{state.merchants=Number(range.value);renderPartner()});
    partnerRoot.querySelector('.partner-apply-form')?.addEventListener('submit',event=>event.preventDefault());
    renderPartner();
  }
  const integrationsRoot=document.querySelector('[data-integrations-page]');
  if(integrationsRoot){
    let category='All',query='';
    const cards=[...integrationsRoot.querySelectorAll('[data-integration-card]')],empty=integrationsRoot.querySelector('[data-integration-empty]'),search=integrationsRoot.querySelector('[data-integration-search]');
    const applyIntegrations=()=>{let visible=0;cards.forEach(card=>{const matchesCategory=category==='All'||card.dataset.category===category;const matchesSearch=!query||card.dataset.name.includes(query);const show=matchesCategory&&matchesSearch;card.hidden=!show;if(show)visible+=1});if(empty)empty.hidden=visible>0};
    integrationsRoot.querySelectorAll('[data-integration-category]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.integrationCategory;integrationsRoot.querySelectorAll('[data-integration-category]').forEach(item=>item.classList.toggle('active',item===button));applyIntegrations()}));
    search?.addEventListener('input',()=>{query=search.value.trim().toLowerCase();applyIntegrations()});
    if(location.hash?.startsWith('#integration-'))setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView({behavior:'smooth',block:'center'}),120);
    applyIntegrations();
  }
})();
