export type Service = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  features: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
  pricing?: { item: string; price: string }[];
  whyChooseUsTitle?: string;
  whyChooseUs?: string[];
  whyChooseUsIntro?: string;
  whyChooseUsClosing?: string;
  introSection?: { title: string; paragraph: string };
  whyEssential?: { title: string; intro: string; causes?: string[]; closing?: string };
  getStarted?: { title?: string; intro: string; steps: { title: string; text: string }[] };
  whoNeedsIt?: { title: string; intro: string; list?: string[]; safetyNote?: string };
  beyondJumpstart?: { title: string; intro: string; services: string[]; closing?: string };
  whyPartner?: { title: string; intro: string; points?: string[]; closing?: string };
  vehicleTypes?: { title: string; intro: string; list: string[] };
  serviceHighlights?: { title: string; intro?: string; items: { icon: string; title: string; description: string }[] };
  costFactorsTitle?: string;
  costFactorsParagraph?: string;
  costFactors?: string[];
  costFactorsDetailed?: { icon: string; title: string; description: string; image?: string }[];
  pricingTitle?: string;
  pricingNote?: string;
  pricingIntro?: { title: string; paragraphs: string[] };
  testimonials?: { name: string; area: string; quote: string }[];
  showBrands?: boolean;
  showAreas?: boolean;
  heroImage?: string;
};

const services: Service[] = [
  {
    slug: "tyre-replacement",
    heroImage: "/tyres/tyre-solution.png",
    title: "Tyre Replacement Dubai – We Reach You in 30-45 Minutes",
    description:
      "On-site tyre replacement with a wide range of tyre brands and sizes, fitted at your location.",
    intro:
      "Flat tyre change in Dubai, starting from AED 99, in just 30 minutes. We fit a new tyre or your spare at your location — home, work, or the roadside — no towing needed.\n\nOur mobile tyre fitment vans carry a wide range of brands and sizes, so whether you need a single tyre swapped or a full set replaced, 800 Speedy handles it on-site, 24/7.",
    introSection: {
      title: "Mobile Tyre Replacement, Wherever You Are",
      paragraph:
        "Worn out, damaged, or blown tyres don't have to mean a trip to the workshop. Our technicians arrive within 30-45 minutes anywhere in Dubai, carrying a stock of common tyre sizes and brands, and fit a new tyre or your spare on the spot — so you can get back on the road safely without towing.",
    },
    serviceHighlights: {
      title: "Our Complete Roadside & Car Service in Dubai",
      intro: "While we're at your location, we can also take care of:",
      items: [
        { icon: "wrench", title: "Tyre Fitting", description: "New tyre or spare fitted, balanced, and pressure-checked on the spot." },
        { icon: "car", title: "Roadside Assistance", description: "Breakdowns and minor issues handled wherever you're parked or stranded." },
        { icon: "battery", title: "Battery Replacement", description: "Genuine batteries delivered and installed if your battery also needs replacing." },
        { icon: "clock", title: "Car Diagnostics", description: "Quick health checks on tyres, battery, and alternator while on-site." },
      ],
    },
    getStarted: {
      title: "How Our Tyre Replacement Works",
      intro: "Getting a new tyre fitted is simple:",
      steps: [
        { title: "Call or Book Online", text: "Share your location, vehicle, and tyre size." },
        { title: "We Dispatch Immediately", text: "A mobile tyre van reaches you in 30-45 minutes." },
        { title: "Tyre Fitted On-Site", text: "We mount, balance, and check pressure on the spot." },
        { title: "Drive Away Safely", text: "You're back on the road — no towing required." },
      ],
    },
    vehicleTypes: {
      title: "All You Need in One Place",
      intro: "Our mobile units are equipped to handle:",
      list: [
        "Sedans, SUVs, and 4x4s",
        "Commercial vans and light trucks",
        "Standard and run-flat tyres",
        "Battery jumpstart and replacement add-ons",
        "Emergency fuel delivery if needed",
        "Towing assistance for serious issues",
      ],
    },
    whyPartner: {
      title: "The Best Tyre Solution for Your Car",
      intro: "Whatever you drive, we carry the right tyre options and tools to get it done properly the first time.",
      points: [
        "Wide stock of tyre brands and sizes carried on every van",
        "Technicians trained across vehicle classes, from sedans to 4x4s",
        "Honest guidance — repair when possible, replace when necessary",
        "Service backed by warranty on fitment and workmanship",
      ],
    },
    whyChooseUsTitle: "Why Choose 800 Speedy?",
    whyChooseUsIntro: "Here's why drivers across Dubai trust us for tyre replacement:",
    whyChooseUs: [
      "24/7 availability — flat tyre at 2 AM? We're ready",
      "Mobile tyre fitment vans equipped to handle all vehicle types",
      "Fast response, typically at your location in 30-45 minutes",
      "Expert technicians for cars, SUVs, 4x4s, and commercial vehicles",
      "Transparent pricing with no hidden charges",
      "Citywide coverage across Dubai",
    ],
    costFactors: [
      "Tyre brand and size selected",
      "Number of tyres being replaced",
      "Vehicle type — sedan, SUV, 4x4, or commercial",
      "Time of call-out — standard hours vs night/holiday",
    ],
    pricingNote: "Tyre replacement starts from AED 99 — we confirm exact pricing for your tyre size and brand before starting.",
    features: [
      "24/7 availability — flat tyre at 2 AM? We're ready",
      "Mobile tyre fitment vans equipped to handle all vehicle types",
      "Fast response, typically at your location in 30-45 minutes",
      "Expert technicians for cars, SUVs, 4x4s, and commercial vehicles",
      "Transparent pricing with no hidden charges",
      "Citywide coverage across Dubai",
    ],
    steps: [
      "Call 800 Speedy or book online",
      "Technician arrives within 30-45 minutes",
      "Tyre changed — drive away safely",
    ],
    faqs: [
      { q: "What's the response time?", a: "Average of 30-45 minutes across Dubai, available 24/7 including weekends and holidays." },
      { q: "What vehicle types are served?", a: "Commercial vehicles, 4x4s, SUVs, sedans, and standard or run-flat tyres." },
      { q: "What if I have no spare tyre?", a: "Our mobile units stock quality replacement options to fit your vehicle and budget." },
      { q: "What payment methods do you accept?", a: "Cash, credit/debit cards, and online payments." },
      { q: "Do you replace more than one tyre at a time?", a: "Yes, our vans carry stock for full-set replacements, not just single tyres." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "tyre-repair",
    heroImage: "/tyres/repair-tyre.png",
    title: "Tyre Repair Dubai – On-Site in 30-45 Minutes",
    description:
      "Professional tyre puncture repair to get you safely back on the road without a full replacement.",
    intro:
      "Flat tyre repair in Dubai — we come to you, 24/7. Our technicians arrive quickly to fix tyres on-site so you can resume your journey without delays or towing.\n\nMost punctures can be plugged or patched on the spot, saving you the cost of a full replacement, while our vans also carry spares for the cases where a patch isn't enough.",
    introSection: {
      title: "Mobile Tyre Repair, Wherever You Are",
      paragraph:
        "A nail, screw, or sharp debris can puncture a tyre anywhere — at home, at work, or mid-drive. 800 Speedy's mobile repair vans reach you in 30-45 minutes anywhere in Dubai, inspect the damage, and patch or plug the puncture so you're back on the road without needing a tow.",
    },
    serviceHighlights: {
      title: "Our Complete Roadside & Car Service in Dubai",
      intro: "While we're fixing your tyre, we can also take care of:",
      items: [
        { icon: "wrench", title: "Tyre Fitting", description: "Puncture repair, patching, or spare/replacement tyre fitting on the spot." },
        { icon: "car", title: "Roadside Assistance", description: "Lockouts, breakdowns, and minor repairs handled wherever you're stranded." },
        { icon: "battery", title: "Battery Replacement", description: "Genuine batteries delivered and fitted at your location if your battery also needs it." },
        { icon: "clock", title: "Car Diagnostics", description: "Quick checks on battery, alternator, and tyre health while we're already there." },
      ],
    },
    getStarted: {
      title: "Repair Process Explained",
      intro: "Here's how we fix your tyre, step by step:",
      steps: [
        { title: "Inspection", text: "We examine the tyre to locate the puncture and assess the damage." },
        { title: "Repair or Patch", text: "The puncture is plugged or patched using professional-grade tools." },
        { title: "Reinflate & Balance", text: "Tyre is reinflated, balanced, and checked for correct pressure." },
        { title: "Final Safety Check", text: "We confirm the repair is roadworthy before you drive off." },
      ],
    },
    vehicleTypes: {
      title: "All You Need in One Place",
      intro: "From punctures to full roadside support, we cover:",
      list: [
        "Tyre puncture repair and patching",
        "Spare tyre fitting",
        "Battery jumpstart and replacement",
        "On-site roadside diagnostics",
        "Emergency fuel delivery",
        "Towing assistance if needed",
      ],
    },
    whyPartner: {
      title: "The Best Tyre Solution for Your Car",
      intro: "Whether it's a sedan, SUV, or commercial vehicle, our technicians carry the right tools and replacement options for a lasting repair.",
      points: [
        "Quality plug and patch materials built to last",
        "Technicians trained on all tyre types and vehicle classes",
        "Honest advice — repair when safe, replacement when necessary",
        "Service backed by warranty on labour and parts",
      ],
    },
    whyChooseUsTitle: "Why Choose 800 Speedy?",
    whyChooseUsIntro: "Here's why Dubai drivers trust us for tyre repair:",
    whyChooseUs: [
      "24/7 availability, including weekends and holidays",
      "Quick response — mobile repair vans typically arrive within 30-45 minutes",
      "On-site service wherever you're located",
      "Professional technicians equipped for various tyre issues",
      "Transparent pricing, no hidden charges",
      "Covers all Dubai areas, including underground parking",
    ],
    costFactors: [
      "Severity and location of the puncture",
      "Tyre size and vehicle type",
      "Time of day — night or holiday call-outs",
      "Whether a patch is sufficient or a spare/new tyre is needed",
    ],
    pricingNote: "Most punctures are repaired affordably on the spot — we always confirm the price before starting work.",
    features: [
      "24/7 availability, including weekends and holidays",
      "Quick response — mobile repair vans typically arrive within 30-45 minutes",
      "On-site service wherever you're located",
      "Professional technicians equipped for various tyre issues",
      "Transparent pricing, no hidden charges",
      "Covers all Dubai areas, including underground parking",
    ],
    steps: [
      "Call or book online — share your location and tyre issue",
      "Fully equipped tyre van dispatched to your area",
      "Inspect tyre, locate the puncture, repair or patch it",
      "Reinflate, balance, and verify tyre pressure",
      "Care advice given and completed work documented",
    ],
    faqs: [
      { q: "Can punctures be repaired instead of replaced?", a: "Yes, minor punctures can typically be repaired on-site without replacement." },
      { q: "How long does a repair take?", a: "Most repairs take 20-30 minutes including pressure checks and safety validation." },
      { q: "What if I have no spare tyre?", a: "Not an issue — technicians carry replacement tyres for common makes and sizes." },
      { q: "Is the repair guaranteed?", a: "Yes, labour and parts are guaranteed for plug or patch repairs." },
      { q: "What's the response time?", a: "Average of 30-45 minutes across Dubai, available 24/7 including weekends and holidays." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "flat-tyre-replacement",
    heroImage: "/tyres/tyre-solution.png",
    title: "Flat Tyre Change Service in Dubai – starts from AED 99, in just 30 minutes",
    description:
      "Quick flat tyre replacement service that gets you back on the road safely with minimal downtime.",
    intro:
      "Flat Tyre Change Service is an emergency roadside assistance service that assists in fitting a new tyre or patching a punctured tyre to your vehicle on the spot - at your home or work, or on the road. It provides quick, convenient, and professional assistance without periodically bringing your vehicle to the workshop on a tow truck.\n\nThe issue of a flat tyre can be devastating at the most inconvenient time, when you are going to work, regular family outing, or in the middle of a busy road. We realize how stressful and hazardous this situation may be at 800 Speedy Dubai. This is what drives us to provide a quick tyre replacement service throughout Dubai, so that you can feel safe and go on the road immediately.\n\nWhether tyre change in Dubai, flat tyre service, or professional mobile tyre fitting anywhere, any time, we still find the time and place to help you.",
    introSection: {
      title: "What Is Our Flat Tyre Change Service?",
      paragraph:
        "Our flat tyre service is designed to get you moving again without the hassle of towing your vehicle. Whether your tyre is punctured, worn out, or completely deflated, our trained team will inspect the damage thoroughly, replace the tyre with your spare or a new one if needed, check wheel alignment if applicable, ensure proper air pressure and safety standards, and offer you tyre purchase options if your spare is missing or unusable. We also assist customers who have lost wheel nuts, damaged rims, or require emergency flat tire help in parking garages or basements.",
    },
    whyEssential: {
      title: "Our Mobile Tyre Fitment Van – A Garage On Wheels",
      intro: "Our mobile tyre fitment vans are fully loaded with:",
      causes: ["Tyre mounting and balancing machines", "Air compressors", "Torque wrenches", "Spare tyres and branded replacements", "Puncture repair kits", "Tyre inflators"],
      closing: "This mobile setup allows us to handle most tyre issues on-site—be it at home, office, roadside, parking garage, or desert track.",
    },
    whyChooseUsTitle: "Why Choose 800 Speedy's Tyre Change Service?",
    whyChooseUsIntro: "When it comes to mobile tyre services, not all companies are created equal. Here's why 800 Speedy stands out as your trusted tyre change partner in Dubai:",
    whyChooseUs: [
      "24/7 Availability – Flat tyre at 2 AM? We're ready.",
      "Mobile Tyre Fitment Vans – We come equipped to handle all types of tyre changes on the spot.",
      "Fast Response Time – Typically at your location in 30 minutes or less.",
      "Transparent Pricing – No hidden charges, ever.",
      "Expert Technicians – We handle cars, SUVs, 4x4s, and even commercial vehicles.",
      "Citywide Coverage – From Downtown Dubai to JLT, JVC, and beyond.",
    ],
    getStarted: {
      title: "How Our Tyre Change Service in Dubai Works",
      intro: "Here's how simple it is to get your tyre changed with 800 Speedy:",
      steps: [
        { title: "Call or Book Online", text: "Reach out to us with your location and vehicle details." },
        { title: "We Dispatch Immediately", text: "Our mobile tyre van will arrive within 30-45 minutes." },
        { title: "Quick Tyre Change On Spot", text: "We'll replace the flat, secure the wheel, and check your tyre pressure." },
        { title: "Get Back on the Road", text: "You're ready to drive again, stress-free." },
      ],
    },
    whyPartner: {
      title: "What You Can Expect from Our Flat Tyre Service in Dubai",
      intro: "Here's what sets our service apart:",
      points: [
        "Speed & Reliability – Our average response time is under 40 minutes.",
        "Professionalism – Clean, trained, uniformed technicians.",
        "Quality Tyres – Choose from top brands like Bridgestone, Michelin, Dunlop, and Pirelli.",
        "Affordable Rates – Competitive and fair pricing with upfront quotes.",
      ],
      closing: "Customer First Approach – We believe in doing the job once and doing it right.",
    },
    whoNeedsIt: {
      title: "Why Flat Tyre Service Matters in Dubai",
      intro: "Driving with a flat or underinflated tyre is risky and can damage your wheel or suspension. Quick tyre change ensures:",
      list: ["Safety for you and others", "Better fuel efficiency", "Extended tyre lifespan", "Smooth ride comfort", "Peace of mind"],
      safetyNote: "In a Hurry to have Flat Tyre Services in Dubai? A flat tyre should not be a hitch. Depending on where you are, such as at home, on the highway, or even in the parking lot, 800 Speedy Dubai can conveniently bring the service of a seasoned tyre changer to meet you wherever you are. Call us now or fill out our quick service form to get help within minutes.",
    },
    beyondJumpstart: {
      title: "Roadside Assistance For Flat Tyres – Always Ready",
      intro: "At 800 Speedy, we don't just change tyres—we offer full roadside assistance in Dubai. No need to wait hours or get stuck in the heat—our team responds fast and gets the job done right.",
      services: ["Flat Tyre Replacement", "Puncture Repair", "Jumpstart Services", "Battery Replacement", "Towing Services", "Fuel Delivery"],
    },
    features: [
      "Thorough inspection of the damage",
      "Tyre replacement with your spare or a new one if needed",
      "Wheel alignment check where applicable",
      "Proper air pressure and safety standards ensured",
      "Help with lost wheel nuts, damaged rims, and tricky locations",
      "Citywide coverage, 24/7",
    ],
    steps: [
      "Call 800 Speedy or book online",
      "Technician arrives within 30-45 minutes",
      "Tyre changed — drive away safely",
    ],
    costFactorsTitle: "Pricing Factors – What Affects Tyre Change Cost in Dubai?",
    costFactorsParagraph: "Several variables affect the cost of your tyre change service:",
    costFactors: [
      "Type of vehicle (sedan, SUV, 4x4, etc.)",
      "Number of tyres to be replaced",
      "Brand and size of tyres",
      "Emergency vs scheduled service",
      "Location (standard roadside or hard-to-access areas)",
    ],
    pricingNote: "On average, tyre change services start from AED 99, and can go higher depending on tyre replacement requirements.",
    faqs: [
      { q: "What can I do when I have a flat tyre in Dubai?", a: "Call or book 800 Speedy online and our mobile team will reach your location to fit a new tyre or your spare on the spot." },
      { q: "What is the response time of your mobile team?", a: "Typically 30-45 minutes anywhere in Dubai, 24/7." },
      { q: "Do you offer tyre changing services at night or on weekends?", a: "Yes, we're available 24/7 including nights, weekends, and public holidays." },
      { q: "Do you repair any kind of tyres and vehicles?", a: "We handle sedans, SUVs, 4x4s, and commercial vehicles, with both standard and run-flat tyres." },
      { q: "What happens when I do not have a spare tyre?", a: "Our mobile units carry replacement tyre options so we can still get you moving." },
      { q: "What payment methods do you accept?", a: "Cash, credit/debit cards, and online payments." },
      { q: "How can I book a tyre change service?", a: "Call us directly, use the website form, or message us on WhatsApp for 24/7 service." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "flat-tyre-repair",
    heroImage: "/tyres/repair-tyre.png",
    title: "Flat Tyre Repair Dubai – 800 Speedy Comes to You 24/7",
    description:
      "On-the-spot flat tyre patching and repair so you can avoid a costly replacement when possible.",
    intro:
      "Flat tyre repair in Dubai — we come to you, 24/7. Expert technicians arrive quickly to fix tyres on-site so you can resume your journey without delays or towing.\n\nWith over 10 years of experience, 800 Speedy repairs punctures, patches damaged tyres, and gets you safely back on the road wherever you are in Dubai.",
    introSection: {
      title: "24/7 Tyre Repair Service in Dubai",
      paragraph:
        "A flat tyre rarely happens at a convenient time. 800 Speedy's mobile tyre repair vans reach you at home, work, or the roadside — inspecting the damage, patching or plugging the puncture, and checking pressure and balance before you drive off, day or night.",
    },
    serviceHighlights: {
      title: "Our Complete Roadside & Car Service in Dubai",
      intro: "Beyond tyre repair, our technicians arrive ready to handle whatever else your car needs:",
      items: [
        { icon: "wrench", title: "Tyre Fitting", description: "Puncture repair, patching, and spare or replacement tyre fitting on the spot." },
        { icon: "car", title: "Roadside Assistance", description: "Lockouts, breakdowns, and minor repairs handled wherever you're stranded." },
        { icon: "battery", title: "Battery Replacement", description: "Genuine batteries delivered and fitted at your location if your battery is also due." },
        { icon: "clock", title: "Car Diagnostics", description: "Quick checks on battery, alternator, and tyre health while we're already on-site." },
      ],
    },
    getStarted: {
      title: "Repair Process Explained",
      intro: "Here's how we get your tyre fixed, step by step:",
      steps: [
        { title: "Inspection", text: "We examine the tyre to locate the puncture and assess the damage." },
        { title: "Repair or Patch", text: "The puncture is plugged or patched using professional-grade tools." },
        { title: "Reinflate & Balance", text: "Tyre is reinflated, balanced, and checked for correct pressure." },
        { title: "Final Safety Check", text: "We confirm the repair is roadworthy before you drive off." },
      ],
    },
    vehicleTypes: {
      title: "All You Need in One Place",
      intro: "From punctures to full roadside support, we cover:",
      list: [
        "Tyre puncture repair and patching",
        "Spare tyre fitting",
        "Battery jumpstart and replacement",
        "On-site roadside diagnostics",
        "Emergency fuel delivery",
        "Towing assistance if needed",
      ],
    },
    whyPartner: {
      title: "The Best Tyre Solution for Your Car",
      intro: "Whether it's a sedan, SUV, or commercial vehicle, our technicians carry the right tools and replacement options for a lasting repair.",
      points: [
        "Quality plug and patch materials built to last",
        "Technicians trained on all tyre types and vehicle classes",
        "Honest advice — repair when safe, replacement when necessary",
        "Service backed by warranty on labour and parts",
      ],
    },
    whyChooseUsTitle: "Why Choose 800 Speedy?",
    whyChooseUsIntro: "Thousands of Dubai drivers trust 800 Speedy for fast, reliable tyre repair:",
    whyChooseUs: [
      "24/7 availability, year-round including holidays",
      "Quick response — mobile repair vans typically arrive within 30 minutes",
      "On-site repair or replacement wherever you're located",
      "Comprehensive solutions beyond tyres: battery, jumpstart, fuel, towing",
      "Transparent pricing, multiple payment options accepted",
      "Wide coverage including underground parking",
    ],
    costFactors: [
      "Severity and location of the puncture",
      "Tyre size and vehicle type",
      "Time of day — night or holiday call-outs",
      "Whether a patch is sufficient or a spare/new tyre is needed",
    ],
    pricingNote: "Most punctures are repaired affordably on the spot — we always confirm the price before starting work.",
    features: [
      "24/7 availability, year-round including holidays",
      "Quick response — mobile repair vans typically arrive within 30 minutes",
      "On-site repair or replacement wherever you're located",
      "Comprehensive solutions beyond tyres: battery, jumpstart, fuel, towing",
      "Transparent pricing, multiple payment options accepted",
      "Wide coverage including underground parking",
    ],
    steps: [
      "Call or book online — share your location and tyre issue",
      "Fully equipped tyre van dispatched to your area",
      "Inspect tyre, locate the puncture, repair or patch it",
      "Reinflate, balance, and verify tyre pressure",
      "Care advice given and completed work documented",
    ],
    faqs: [
      { q: "Can punctures be repaired instead of replaced?", a: "Yes, minor punctures can typically be repaired on-site without replacement." },
      { q: "How long does a repair take?", a: "Most repairs take 20-30 minutes including pressure checks and safety validation." },
      { q: "Is underground parking accessible?", a: "Yes, mobile vans can access most basement and multi-level parking areas." },
      { q: "Is the repair guaranteed?", a: "Yes, labour and parts are guaranteed for plug or patch repairs." },
      { q: "Are you available for emergency tyre repair at night?", a: "Yes, we operate 24/7 across Dubai, including weekends and public holidays." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "roadside-assistance",
    heroImage: "/images/about/road-side-assist.png",
    title: "Stuck on the Road? Call 800 Speedy for 24/7 Roadside Help in Dubai",
    description:
      "24/7 roadside assistance covering breakdowns, lockouts, and minor repairs wherever you are.",
    intro:
      "Roadside emergencies are stressful; no one wants a flat tire, a dead battery, or to run out of fuel. This is where 800 Speedy Dubai roadside rescue saves your day. You can reach us 24/7, and we are fully equipped and one call away from getting you back on the road safe and fast.\n\nAll our technicians are trained to deal with car breakdowns, jumpstarts, flat tire changes, fuel delivery, and others with an excellent response time and reasonable prices.",
    introSection: {
      title: "Who Are We?",
      paragraph:
        "800 Speedy is a reliable company to replace a car battery and provide roadside assistance in Dubai. Built on over a decade of experience, we have assisted thousands of drivers who have been stranded on the road and put them back on route safely.\n\nWe provide top-notch services with unrivaled reliability in the areas of Dubai and beyond. We begin to assist when your car comes to a standstill.",
    },
    whyChooseUsTitle: "Why Choose 800 Speedy Roadside Assistance?",
    whyChooseUsIntro: "We're not just another car support company. 800 Speedy stands out because we put drivers first.",
    whyChooseUs: [
      "Quick Response Time – Our arrival is within 30 minutes or less, long wait and delays.",
      "Low, Transparent Pricing – No need to worry about the hidden charges. All services have upfront pricing.",
      "Open 24/7 – Breakdowns are not 9-5, nor are we. Whether it is day or night, rain or shine, we are here to assist.",
      "Qualified Technicians – Our technicians are skilled, experienced, and well-mannered, thus you will feel secure and supported.",
      "On-Site Service – We go to where you are in Dubai; at home, office, roadside, or parking lot.",
    ],
    serviceHighlights: {
      title: "How Can We Assist You?",
      intro: "Our roadside assistance services cover a wide range of emergency car problems across Dubai. Here's how we help you:",
      items: [
        { icon: "battery", title: "Replacing or jumpstarting a car battery", description: "Regardless, whether your car battery is no longer running or simply in need of a boost, we provide immediate jumpstart or car battery replacement at your place." },
        { icon: "car", title: "Flat tyre change", description: "Got a flat tyre? Our roadside assistance comes promptly with the equipment to change your flat tire or install your spare—in a flash, and safely." },
        { icon: "fuel", title: "Emergency Fuel Supply", description: "Ran out of fuel? We bring gas, diesel, or petrol to you wherever you are." },
        { icon: "truck", title: "Towing Car Services", description: "We also have tow truck services in case your car breaks down and cannot be fixed at the roadside, we tow it to a garage that is nearest or any other place that you would like it." },
      ],
    },
    vehicleTypes: {
      title: "Comprehensive Roadside Services — All in One Place",
      intro: "800 Speedy isn't limited to just one type of help. We deliver a complete roadside solution, including:",
      list: [
        "Jumpstart Service – Battery dead? Get a quick boost at your spot.",
        "Car Battery Replacement – Get a new premium battery installed instantly.",
        "Flat Tyre Change – We change your tire fast and safely.",
        "Emergency Fuel Delivery – Petrol or diesel delivered when you run out.",
        "Towing Services – For serious issues, we tow to a safe location.",
        "Lockout Assistance – Locked out? We help without damaging your car.",
      ],
    },
    whyEssential: {
      title: "Key Benefits Of Our Roadside Assistance In Dubai",
      intro: "",
      causes: ["Peace of mind on every drive", "Quick service across all Dubai locations", "Support for all vehicle makes & models", "Safe handling and an experienced crew", "No towing unless necessary"],
    },
    whoNeedsIt: {
      title: "Why Roadside Assistance Is Essential In Dubai",
      intro: "Dubai roads can be unpredictable. Extreme heat, traffic delays, or even simple wear and tear can cause unexpected issues. Here's why having a roadside service provider like 800 Speedy matters:",
      list: ["Long drives or road trips", "Heat-related car breakdowns", "Running out of fuel in remote areas", "Unexpected tire bursts"],
    },
    getStarted: {
      title: "How It Works — Quick & Easy",
      intro: "Getting help is just three simple steps:",
      steps: [
        { title: "Call or Book Online", text: "Contact us via phone or website to request service." },
        { title: "Share Your Location", text: "Our GPS-enabled system ensures we reach you fast." },
        { title: "We Arrive & Fix the Issue", text: "A skilled technician will assist on the spot or arrange towing if needed." },
      ],
    },
    beyondJumpstart: {
      title: "Work Process: We Keep It Simple",
      intro: "Your safety and satisfaction are always our priorities.",
      services: ["Diagnose the problem on arrival", "Repair, replace, or assist as needed", "Ensure your car is ready to drive", "Or tow it to a garage if necessary"],
    },
    whyPartner: {
      title: "Don't Wait on the Road — Call 800 Speedy Now",
      intro: "We're always ready to help—anytime, anywhere in Dubai.",
      points: ["Call us now for instant roadside help", "Or book a service online in seconds", "We'll reach you in 30 minutes or less"],
    },
    testimonials: [
      { name: "Ahmad", area: "Downtown", quote: "800 Speedy helped me within 25 minutes. My tire blew on Sheikh Zayed Road and I was panicking. They arrived fast and handled it professionally." },
      { name: "Fatima", area: "Al Nahda", quote: "I ran out of fuel late at night. 800 Speedy came with petrol in 20 minutes. Super fast and affordable!" },
      { name: "Hassan", area: "Downtown Dubai", quote: "They replaced my dead car battery on the spot. No extra charges and the technician was very polite." },
    ],
    showBrands: true,
    showAreas: true,
    features: [
      "Arrival within 30 minutes or less",
      "Available 24/7, 365 days a year, across all Dubai locations",
      "Skilled, experienced, well-mannered technicians",
      "Transparent, upfront pricing with no hidden charges",
      "Support for all vehicle makes and models",
      "Battery replacement, towing, fuel delivery, and tyre services",
    ],
    steps: [
      "Call or book online to request service",
      "Share your location for GPS-enabled rapid dispatch",
      "We arrive and fix the issue on-site or arrange towing",
    ],
    faqs: [
      { q: "How fast can you reach me in Dubai?", a: "Typically within 30 minutes, depending on your location and traffic." },
      { q: "Do you provide fuel delivery?", a: "Yes, diesel and petrol delivery is available throughout Dubai." },
      { q: "Do you replace car batteries on-site?", a: "Yes, with premium batteries and warranty coverage if a replacement is needed on-site." },
      { q: "Can you help if I'm locked out?", a: "Yes, our technicians are trained in non-damaging unlocking techniques." },
      { q: "How do I pay?", a: "Cash, card, or online transfer." },
    ],
  },
  {
    slug: "car-towing-recovery",
    heroImage: "/images/about/car towing.png",
    title: "Car Towing Service Dubai",
    description:
      "Professional car towing and recovery for accidents, breakdowns, or vehicles stuck off-road.",
    intro:
      "800 Speedy UAE provides efficient and expert towing and roadside assistance services. Our committed team is available around the clock to ensure you receive hassle-free help whenever you need it.",
    introSection: {
      title: "About 800 Speedy's Tow Truck Service in Dubai",
      paragraph:
        "800 Speedy is the one-stop service provider of emergency tow truck Dubai and roadside assistance in the United Arab Emirates. We provide quick, smooth, and professional car towing services. Regardless of whether your battery is dead, your tyre is flat, or you have met with an accident, or are stuck somewhere. Our mobile services are ready 24/7. When you need support, we provide a reliable source.",
    },
    whyChooseUsTitle: "Why Choose Our Tow Truck Dubai Service?",
    whyChooseUs: [
      "Full Range of Recovery Services – We provide more than towing: flat tyre change, battery boost, fuel delivery, car unlocking, basement or sand pull-out, and specialized services for sports and luxury vehicles.",
      "24/7 Rapid Response – Available any time, day or night, our tow truck Dubai team reaches you within 30 to 45 minutes. No waiting, no hassle.",
      "Skilled & Certified Technicians – Our operators are trained in safe vehicle handling, lift operations, and towing protocols. Licensed for accident and breakdown recovery in Dubai.",
      "State-of-the-Art Towing – Fleet from flatbeds to heavy-duty tow trucks, our equipment handles sedans, SUVs, motorcycles, luxury cars, and off-road vehicles with precision and care.",
      "Affordable & Transparent Pricing – We offer upfront quotes, no hidden fees, and flexible payment methods accepted on-site or online.",
    ],
    serviceHighlights: {
      title: "Our Comprehensive Tow Truck Dubai Services",
      items: [
        { icon: "truck", title: "Standard Tow Truck Services", description: "Our core service: professional towing either on flatbed or wheel-lift. Need towing services in Dubai, just because of a mechanical failure or a small disaster? Our tow truck Dubai units will provide safe transport to the location of your choice, be it a garage, your home, or the 800 Speedy workshop." },
        { icon: "clock", title: "Emergency Roadside Assistance", description: "We come to you, wherever you are in Dubai, for services like: flat tyre replacement, battery jumpstart or replacement, emergency fuel delivery, car lockout help, and pull out from sand, basements, or off-road spots." },
        { icon: "car", title: "Sports & Luxury Car Towing", description: "Driving a high-end vehicle? Our technicians and equipment are specially equipped to handle low-clearance or sensitive models carefully, keeping your vehicle scratch-free." },
        { icon: "location", title: "Sand & Desert Recovery", description: "Dubai's roads often include sandy areas and off-road paths. Our desert recovery trucks are specially prepared and certified to tow vehicles stuck in sand." },
        { icon: "building", title: "Basement & Underground Pull Out", description: "Stuck in underground parking or basement garages? Our team can carefully extract your vehicle using safe techniques tailored for tight spaces." },
        { icon: "wrench", title: "Motorcycle Towing & Recovery", description: "We provide secure towing and transport for bikes and scooters using appropriate hitch and cradle systems." },
      ],
    },
    getStarted: {
      title: "How Our Tow Truck Dubai Process Works",
      intro: "From your call to a safe drop-off, here's what happens:",
      steps: [
        { title: "Contact Us", text: "Call or WhatsApp with your issue and location." },
        { title: "Initial Assessment", text: "We verify the issue and dispatch the near tow truck Dubai unit best equipped." },
        { title: "Arrival", text: "Technician arrives with gear, battery, tyre tools, or fuel as needed." },
        { title: "On-Site Assistance", text: "We attempt a fix (jumpstart, tyre change) or start towing securely." },
        { title: "Safe Transport", text: "Your vehicle is towed safely to your preferred location." },
        { title: "Invoice & Warranty", text: "Service invoice includes warranty on parts/labour where applicable." },
      ],
    },
    whyEssential: {
      title: "Safety, Certification & Equipment",
      intro: "All our tow truck operations follow strict safety and equipment standards:",
      causes: [
        "All tow truck Dubai vehicles are licenced and insured for roadside recovery and towing operations.",
        "Technicians receive regular training in vehicle handling, especially for exotic or low-clearance cars.",
        "Our trucks are equipped with air lift jacks, flatbeds, winches, safety lights, and first aid kits.",
        "We follow Dubai safety standards—your vehicle and personal safety are our top priorities.",
      ],
    },
    whyPartner: {
      title: "Customer First: Quality & Trust",
      intro: "Here's why drivers across Dubai keep calling 800 Speedy back:",
      points: [
        "100% Transparent Costing – You pay what we quote—no hidden charges.",
        "Satisfaction Guarantee – If you're unsatisfied with coverage, we'll return without additional charge.",
        "Repeat & Referral Clients – Over 40% of our business comes via repeat or referred customers across Dubai.",
        "Verified Reviews – Consistent 4.7+ rating on Google and high praise for our tow truck Dubai service.",
      ],
    },
    whoNeedsIt: {
      title: "Helpful Tips When You Need a Tow Truck in Dubai",
      intro: "A few quick tips while you wait for help to arrive:",
      list: [
        "Stay safe, put hazard lights on, and pull over in an easy-to-see and safe area.",
        "Exact location with landmarks or GPS can help in faster dispatches.",
        "Always avoid carrying out roadside repairs when on busy roads—wait until professionals arrive.",
        "Carry an extra can of fuel when in the desert areas; gas stations are very scarce.",
        "Notify attendants of the type of vehicle to issue the right equipment.",
      ],
    },
    beyondJumpstart: {
      title: "Book a Tow Truck Dubai Service Today",
      intro: "No more delays or unsafe handling services — just pick up the phone and call 800 Speedy Dubai for a fast, trusty tow truck across the city and beyond.",
      services: [
        "Affordable rates, reliable equipment, and good support, every time you call.",
        "Call or WhatsApp us and get help where and when you need it.",
        "Online booking may be done in advance or in case of an emergency.",
        "Their 24/7 service is all year round.",
      ],
    },
    pricingTitle: "Pricing Guide & Turnaround",
    pricingNote: "Prices vary by actual location, traffic, and vehicle type.",
    showBrands: true,
    showAreas: true,
    features: [
      "Professional towing using flatbed or wheel-lift equipment",
      "24/7 rapid response, typically within 30-45 minutes",
      "Licensed and insured tow truck operations",
      "Desert, sand, and basement/underground parking recovery",
      "Motorcycle and luxury vehicle towing",
      "Upfront quotes with no hidden fees",
    ],
    steps: [
      "Contact us by call or WhatsApp with issue and location",
      "Team verifies the problem and dispatches the right equipment",
      "Technician arrives with the necessary tools and supplies",
      "On-site assistance attempted, or towing initiated",
      "Vehicle transported securely to your preferred destination",
      "Invoice and warranty documentation provided",
    ],
    faqs: [
      { q: "How quickly can you dispatch a tow truck in Dubai?", a: "Typically 30-45 minutes across most Dubai areas, 24/7." },
      { q: "What if my car is in a basement or tight garage?", a: "Yes, our specialists use low-profile jacks and winches for safe, tight-space and desert recovery." },
      { q: "Do you offer flat tyre changes and jumpstarts?", a: "Yes, alongside towing we offer flat tyre changes, jumpstarts, and fuel delivery as add-on services." },
      { q: "Can you assist with sports or luxury car towing?", a: "Yes, flatbed trucks and trained operators protect delicate vehicles." },
      { q: "What payment options are available?", a: "Cash, card on-site, or digital payments, charged after service completion." },
      { q: "What payment options are accepted?", a: "Cash, card on-site, or digital payments, charged after service completion." },
      { q: "Do you tow motorcycles?", a: "Yes, dedicated racks and secure transport trailers are available." },
      { q: "Are your tow trucks licensed?", a: "Yes, all trucks comply with official UAE tow operator licensing requirements." },
      { q: "What happens to my old battery?", a: "Old batteries are collected and recycled to UAE environmental standards." },
    ],
    pricing: [
      { item: "Local towing (Dubai city)", price: "From AED 150-200" },
      { item: "Flat tyre / jumpstart add-on", price: "+AED 50-75" },
      { item: "Emergency fuel delivery add-on", price: "+AED 100" },
      { item: "Desert / basement extraction", price: "AED 300-500" },
      { item: "Luxury vehicle surcharge", price: "+AED 150-200" },
    ],
  },
  {
    slug: "car-recovery-dubai",
    heroImage: "/images/about/car-recovery.png",
    title: "24/7 Car Recovery Services in Dubai in Less Than 45 Minutes with 800 Speedy",
    description:
      "Dedicated car recovery service across Dubai for breakdowns, collisions, and stuck vehicles.",
    intro:
      "You might want to have a reliable car recovery in Dubai, and that is where we, 800 Speedy Dubai, come in. We will help you with our available experts and capabilities on the road to provide the best assistance on how to get your car out of the jam. If you find your stuck in the middle of nowhere, or you are a victim of a flat tyre, or other road accidents, our team of experts is on the ground 24/7 to restore you to the driving seat, in less time to stay safe.\n\nWe are devoted to delivering immediate assistance, instructional assistance by stage on the phone, and recovery assistance wherever you reside. When you have the 800 Speedy by your side, you are assured of a calm repose with the knowledge that you can be readily assisted by an expert at any place in Dubai.",
    whyEssential: {
      title: "Key Benefits of Our Car Recovery Service",
      intro: "",
      causes: [
        "Peace of mind: You are never too long out of reach.",
        "Safety is High: All towing services have high standards of safety.",
        "Flexibility: We can service anything and everything.",
        "Full Service Range: From jumpstarts to towing, we're your complete recovery solution.",
        "Trusted by Many: Rated highly by Dubai drivers for reliability and professionalism.",
      ],
    },
    whyChooseUsTitle: "Why Choose 800 Speedy for Car Recovery in Dubai?",
    whyChooseUsIntro: "800 Speedy stands out with:",
    whyChooseUs: [
      "Rapid Response (Typically < 45 minutes)",
      "Experienced, Certified Operators",
      "Modern Recovery Fleet Equipped For All Sizes",
      "Safe and Secure Vehicle Handling",
      "Transparent, Upfront Pricing",
      "Service Available Any Time—Day or Night",
    ],
    serviceHighlights: {
      title: "How Can We Assist You?",
      intro: "Our Car Recovery Dubai services are designed to handle all vehicle emergencies professionally and efficiently:",
      items: [
        { icon: "truck", title: "Emergency Towing", description: "We tow your vehicle safely to your preferred location—home, workshop, or 800 Speedy center—using flatbed or wheel-lift trucks." },
        { icon: "wrench", title: "Roadside Support", description: "From flat tyres to jumpstarts and battery replacements, we help you on the spot whenever possible." },
        { icon: "car", title: "Breakdown Rescue", description: "If your car fails due to engine, alternator, or fuel issues, we offer comprehensive recovery and diagnostic assistance." },
        { icon: "building", title: "Recovery from Difficult Spots", description: "Stuck in sand or in narrow parking? Our recovery team extracts vehicles safely from basements, dunes, or tight spots." },
      ],
    },
    beyondJumpstart: {
      title: "Our Values",
      intro: "",
      services: [
        "Integrity – Honest service and transparent billing.",
        "Respect – Respect for your time, vehicle, and safety.",
        "Reliability – We deliver on our promise every time.",
        "Expertise – Proficient training and up-to-date equipment.",
      ],
    },
    whyPartner: {
      title: "Our Vision & Mission",
      intro: "Our Vision: To be recognized as the most trusted and responsive car recovery service across Dubai and the UAE.\n\nOur Mission: To ensure every road user receives fast, courteous, and safe recovery support—anytime and anywhere.",
    },
    getStarted: {
      title: "Car Recovery Work Process",
      intro: "",
      steps: [
        { title: "Book Your Service", text: "Call or message with your location and issue." },
        { title: "We Dispatch a Team", text: "GPS-enabled tracking ensures rapid deployment." },
        { title: "On-Site Assessment", text: "We assess your needs—whether tow, jumpstart, tyre fix, or fuel delivery." },
        { title: "Safe Recovery", text: "We tow or fix your vehicle using industry-standard techniques." },
        { title: "Post-Service Support", text: "You receive an invoice, warranty info, and follow-up if needed." },
      ],
    },
    testimonials: [
      { name: "Rehman", area: "Dubai Marina driver", quote: "My car battery kept draining. 800 Speedy tested the alternator and replaced the regulator on-site. My car is back to normal. Highly recommended!" },
      { name: "Sarah", area: "Dubai Marina", quote: "800 Speedy came swiftly when my car overheated near Sheikh Zayed Road. Quick recovery and no damage. Highly recommend!" },
      { name: "Ahmed", area: "Business Bay", quote: "I was stuck downtown at night with a flat tyre. They handled everything in under 40 minutes. Excellent support." },
    ],
    showBrands: true,
    showAreas: true,
    features: [
      "Swift response, typically within 30-45 minutes",
      "Jumpstarts, towing, fuel delivery, tyre repairs, and alternator diagnostics",
      "24/7 availability across all Dubai locations",
      "Professional operators with modern equipment",
      "Transparent pricing with quotes before service begins",
      "Specialized handling for luxury vehicles and difficult extractions",
    ],
    steps: [
      "Book — call or message with your location and vehicle issue",
      "Dispatch — GPS-tracked team deploys rapidly",
      "Assessment — technicians evaluate needs on-site",
      "Recovery — vehicle towed or repaired to industry standards",
      "Follow-up — invoice, warranty details, and support provided",
    ],
    faqs: [
      { q: "How long does recovery in Dubai usually take?", a: "Typically 30-45 minutes." },
      { q: "Do you recover luxury and low-clearance cars?", a: "Yes, our team is trained for sensitive vehicles." },
      { q: "What if my car is stuck in sand or underground parking?", a: "Yes, we're equipped with specialized extraction tools." },
      { q: "How much does car recovery cost in Dubai?", a: "Pricing depends on distance, vehicle type, and complexity — we always quote upfront before starting." },
      { q: "Is payment due right away?", a: "Card, cash, or digital wallets, accepted on-site after service." },
    ],
  },
  {
    slug: "buy-new-tyre",
    heroImage: "/tyres/buy-new-tyre.png",
    title: "Buy New Tyre Dubai – Delivered & Fitted in 20-30 Minutes",
    description:
      "Order brand-new tyres online and get them delivered and fitted at your location, starting from AED 79.",
    intro:
      "Need a new tyre in Dubai? Order online or by phone and 800 Speedy delivers and fits your new tyre at your home, office, or roadside location — no workshop visit needed.\n\nWe stock a wide range of brands and sizes for sedans, SUVs, and commercial vehicles, with services starting from AED 79.",
    introSection: {
      title: "Order a New Tyre, We Bring It to You",
      paragraph:
        "Browse our tyre brands, pick your size, and book online or by phone. Our mobile fitting vans reach you in 20-30 minutes anywhere in Dubai and fit your new tyre on the spot — balanced and pressure-checked before we leave.",
    },
    getStarted: {
      title: "How to Buy a New Tyre",
      intro: "Getting a new tyre fitted is simple:",
      steps: [
        { title: "Choose Your Tyre", text: "Pick your brand and size online or tell us your vehicle details." },
        { title: "We Dispatch Immediately", text: "A mobile fitting van reaches you in 20-30 minutes." },
        { title: "Fitted On-Site", text: "Tyre mounted, balanced, and pressure-checked at your location." },
        { title: "Pay & Drive Away", text: "Pay by card or pay by link, no cash needed." },
      ],
    },
    whyChooseUsTitle: "Why Choose 800 Speedy?",
    whyChooseUsIntro: "Here's why drivers across Dubai buy their tyres from us:",
    whyChooseUs: [
      "Wide stock of tyre brands and sizes on every van",
      "Fast response, typically at your location in 20-30 minutes",
      "Free fitting, balancing, and pressure check included",
      "Pay by card or pay by link, no hidden charges",
      "Services start from AED 79",
      "Citywide coverage across Dubai, 24/7",
    ],
    costFactors: [
      "Tyre brand and size selected",
      "Number of tyres being fitted",
      "Vehicle type — sedan, SUV, or commercial",
    ],
    pricingNote: "Services start from AED 79 — we confirm exact pricing for your tyre size and brand before starting.",
    features: [
      "Wide stock of tyre brands and sizes on every van",
      "Fast response, typically at your location in 20-30 minutes",
      "Free fitting, balancing, and pressure check included",
      "Pay by card or pay by link, no hidden charges",
      "Services start from AED 79",
      "Citywide coverage across Dubai, 24/7",
    ],
    steps: [
      "Call 800 Speedy or book online with your tyre size",
      "Mobile fitting van dispatched to your location",
      "New tyre fitted, balanced, and pressure-checked",
    ],
    faqs: [
      { q: "How fast can a new tyre be delivered and fitted?", a: "Typically 20-30 minutes anywhere in Dubai, 24/7." },
      { q: "What brands can I choose from?", a: "Michelin, Bridgestone, Pirelli, Continental, Goodyear, Dunlop, Yokohama, Hankook, Toyo, Kumho, Nexen, Falken, BFGoodrich, Maxxis, and Cooper." },
      { q: "How much does a new tyre cost?", a: "Services start from AED 79 — final price depends on brand and size." },
      { q: "How do I pay?", a: "Pay by card or pay by link, no cash needed." },
      { q: "Do you fit tyres for SUVs and commercial vehicles?", a: "Yes, we stock sizes for sedans, SUVs, 4x4s, and commercial vehicles." },
    ],
    showBrands: true,
    showAreas: true,
  },
  {
    slug: "air-fill",
    heroImage: "/tyres/tyre-air-fill.png",
    title: "Tyre Air Fill Dubai – On-Site in 20-30 Minutes",
    description:
      "Quick, accurate tyre air top-up and pressure check at your location, starting from AED 79.",
    intro:
      "Low tyre pressure warning light on? 800 Speedy comes to you for a quick air fill and pressure check — at home, work, or the roadside, 24/7.\n\nCorrect tyre pressure improves fuel efficiency, handling, and tyre lifespan — our technicians top up and verify all four tyres in minutes.",
    introSection: {
      title: "Mobile Tyre Air Fill, Wherever You Are",
      paragraph:
        "Under- or over-inflated tyres wear unevenly and affect handling. Our technicians reach you in 20-30 minutes anywhere in Dubai with calibrated equipment to top up and check every tyre to the correct pressure.",
    },
    getStarted: {
      title: "How Our Air Fill Service Works",
      intro: "Getting your tyres topped up is simple:",
      steps: [
        { title: "Call or Book Online", text: "Share your location and vehicle details." },
        { title: "We Dispatch Immediately", text: "A technician reaches you in 20-30 minutes." },
        { title: "Pressure Checked & Filled", text: "All four tyres topped up to the correct pressure." },
      ],
    },
    whyChooseUsTitle: "Why Choose 800 Speedy?",
    whyChooseUsIntro: "Here's why drivers across Dubai trust us for tyre air fills:",
    whyChooseUs: [
      "24/7 availability, including weekends and holidays",
      "Fast response, typically at your location in 20-30 minutes",
      "Calibrated equipment for accurate pressure checks",
      "Services start from AED 79",
      "Transparent pricing, no hidden charges",
      "Citywide coverage across Dubai",
    ],
    pricingNote: "Services start from AED 79 — we confirm the price before starting work.",
    features: [
      "24/7 availability, including weekends and holidays",
      "Fast response, typically at your location in 20-30 minutes",
      "Calibrated equipment for accurate pressure checks",
      "Services start from AED 79",
      "Transparent pricing, no hidden charges",
      "Citywide coverage across Dubai",
    ],
    steps: [
      "Call 800 Speedy or book online",
      "Technician arrives within 20-30 minutes",
      "All tyres checked and topped up to correct pressure",
    ],
    faqs: [
      { q: "Why is correct tyre pressure important?", a: "It improves fuel efficiency, handling, and extends tyre life." },
      { q: "How long does an air fill take?", a: "Usually under 10 minutes once the technician arrives." },
      { q: "How much does it cost?", a: "Services start from AED 79." },
      { q: "Can you check all four tyres?", a: "Yes, we check and top up every tyre to the manufacturer-recommended pressure." },
      { q: "What's the response time?", a: "Average of 20-30 minutes across Dubai, available 24/7." },
    ],
    showAreas: true,
  },
  {
    slug: "spare-tyre-change",
    heroImage: "/tyres/spare-tyre-change.png",
    title: "Spare Tyre Change Dubai – On-Site in 20-30 Minutes",
    description:
      "Fast spare tyre fitting to get you safely back on the road, starting from AED 79.",
    intro:
      "Flat tyre and need your spare fitted fast? 800 Speedy comes to you, 24/7, and swaps in your spare tyre on the spot — no towing needed.\n\nOur technicians safely jack your vehicle, fit the spare, and check pressure before you drive off.",
    introSection: {
      title: "Mobile Spare Tyre Fitting, Wherever You Are",
      paragraph:
        "A flat tyre can happen anywhere. Our technicians reach you in 20-30 minutes anywhere in Dubai, fit your spare tyre safely, and check it's roadworthy before leaving.",
    },
    getStarted: {
      title: "How Spare Tyre Change Works",
      intro: "Here's how we get your spare fitted, step by step:",
      steps: [
        { title: "Call or Book Online", text: "Share your location and vehicle details." },
        { title: "We Dispatch Immediately", text: "A technician reaches you in 20-30 minutes." },
        { title: "Spare Fitted On-Site", text: "Vehicle jacked safely, spare fitted, pressure checked." },
        { title: "Drive Away Safely", text: "You're back on the road, no towing required." },
      ],
    },
    whyChooseUsTitle: "Why Choose 800 Speedy?",
    whyChooseUsIntro: "Here's why drivers across Dubai trust us for spare tyre changes:",
    whyChooseUs: [
      "24/7 availability — flat tyre at 2 AM? We're ready",
      "Fast response, typically at your location in 20-30 minutes",
      "Safe, professional jacking and fitting",
      "Services start from AED 79",
      "Transparent pricing, no hidden charges",
      "Citywide coverage across Dubai",
    ],
    pricingNote: "Services start from AED 79 — we confirm the price before starting work.",
    features: [
      "24/7 availability — flat tyre at 2 AM? We're ready",
      "Fast response, typically at your location in 20-30 minutes",
      "Safe, professional jacking and fitting",
      "Services start from AED 79",
      "Transparent pricing, no hidden charges",
      "Citywide coverage across Dubai",
    ],
    steps: [
      "Call 800 Speedy or book online",
      "Technician arrives within 20-30 minutes",
      "Spare tyre fitted and pressure-checked",
    ],
    faqs: [
      { q: "Do you fit my own spare tyre?", a: "Yes, we safely fit your spare tyre on-site." },
      { q: "What if my spare is also flat or damaged?", a: "We carry replacement tyres for common sizes if your spare isn't usable." },
      { q: "How much does it cost?", a: "Services start from AED 79." },
      { q: "How long does it take?", a: "Most spare tyre changes take 20-30 minutes including response time." },
      { q: "Is this service available at night?", a: "Yes, 24/7 including weekends and holidays." },
    ],
    showAreas: true,
  },
  {
    slug: "fix-puncture-tyre",
    heroImage: "/tyres/fix-puncture-tyre.png",
    title: "Fix Puncture Tyre Dubai – On-Site in 20-30 Minutes",
    description:
      "Quick puncture repair to get you safely back on the road without a full replacement, starting from AED 79.",
    intro:
      "Got a puncture in Dubai? 800 Speedy comes to you, 24/7, and plugs or patches most punctures on the spot — saving you the cost of a full tyre replacement.\n\nOur technicians inspect the damage first and give honest advice on whether a repair or replacement is the safer option.",
    introSection: {
      title: "Mobile Puncture Repair, Wherever You Are",
      paragraph:
        "A nail or sharp debris can puncture a tyre anywhere. Our technicians reach you in 20-30 minutes anywhere in Dubai, inspect the damage, and plug or patch the puncture so you're back on the road quickly.",
    },
    getStarted: {
      title: "Puncture Repair Process Explained",
      intro: "Here's how we fix your puncture, step by step:",
      steps: [
        { title: "Inspection", text: "We examine the tyre to locate the puncture and assess the damage." },
        { title: "Repair or Patch", text: "The puncture is plugged or patched using professional-grade tools." },
        { title: "Reinflate & Check", text: "Tyre is reinflated and checked for correct pressure." },
        { title: "Final Safety Check", text: "We confirm the repair is roadworthy before you drive off." },
      ],
    },
    whyChooseUsTitle: "Why Choose 800 Speedy?",
    whyChooseUsIntro: "Here's why Dubai drivers trust us for puncture repair:",
    whyChooseUs: [
      "24/7 availability, including weekends and holidays",
      "Fast response, typically at your location in 20-30 minutes",
      "Honest advice — repair when safe, replacement when necessary",
      "Services start from AED 79",
      "Transparent pricing, no hidden charges",
      "Citywide coverage across Dubai",
    ],
    pricingNote: "Services start from AED 79 — we always confirm the price before starting work.",
    features: [
      "24/7 availability, including weekends and holidays",
      "Fast response, typically at your location in 20-30 minutes",
      "Honest advice — repair when safe, replacement when necessary",
      "Services start from AED 79",
      "Transparent pricing, no hidden charges",
      "Citywide coverage across Dubai",
    ],
    steps: [
      "Call 800 Speedy or book online — share your location and issue",
      "Technician dispatched to your area",
      "Inspect tyre, locate the puncture, repair or patch it",
      "Reinflate and verify tyre pressure",
    ],
    faqs: [
      { q: "Can punctures be repaired instead of replaced?", a: "Yes, minor punctures can typically be repaired on-site without replacement." },
      { q: "How long does a repair take?", a: "Most repairs take 20-30 minutes including pressure checks and safety validation." },
      { q: "How much does it cost?", a: "Services start from AED 79." },
      { q: "Is the repair guaranteed?", a: "Yes, labour and parts are guaranteed for plug or patch repairs." },
      { q: "What's the response time?", a: "Average of 20-30 minutes across Dubai, available 24/7 including weekends and holidays." },
    ],
    showAreas: true,
  },
];

export default services;
