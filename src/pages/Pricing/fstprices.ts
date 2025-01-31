import { PCardPropType } from "../../components/Cards/PricingCard";

export interface cDesignSDevObjType {
  brandingAndIdentityDesign: {
    regular: PCardPropType;
    standard: PCardPropType;
    premium: PCardPropType;
  };

  creativeGraphicsDesign: {
    regular: PCardPropType;
    standard: PCardPropType;
    premium: PCardPropType;
  };

  uiUxDesign: {
    regular: PCardPropType;
    standard: PCardPropType;
    premium: PCardPropType;
  };

  webDevelopment: {
    regular: PCardPropType;
    standard: PCardPropType;
    premium: PCardPropType;
  };

  mobileAppDevelopment: {
    regular: PCardPropType;
    standard: PCardPropType;
    premium: PCardPropType;
  };
}

export interface ServicePriceObjType {
  regular: PCardPropType;
  standard: PCardPropType;
  premium: PCardPropType;
}

export const brandingAndIdentityDesign: ServicePriceObjType = {
  regular: {
    serviceSubgroup: "Branding & Identity",
    serviceGroup: "Creative",
    priceNGN: 40000,
    priceDollar: 18,
    label: "Ideal For Startups",
    packageDeal: [
      "Logo Design ( Primary and Alternate )",
      "Basic Brand Guidelines ( Colors, Fonts, Basic Logo Usage)",
      "5 Static Social Media Posts",
      "1 Posters or Flyer",
    ],
    packageType: "regular",
  },
  standard: {
    serviceSubgroup: "Branding & Identity",
    serviceGroup: "Creative",
    priceNGN: 75000,
    priceDollar: 18,
    label: "For Growing Businesses",
    packageDeal: [
      "Logo Design (1 Primary + Alternate + Variations )",
      "Brand Guidelines ( Typography, Colors, Tone of Voice)",
      "2 Stationery Designs (Business Card, Letter Head, Email Signature, Envelope, or ID Card)",
      "10 Static Social Media Posts",
      "2 Carousel Social Media Posts (For Campaigns)",
      "3 Posters or Flyer",
      "1 Banner Design (Rollup or Social Media",
    ],
    packageType: "standard",
  },
  premium: {
    serviceSubgroup: "Branding & Identity",
    serviceGroup: "Creative",
    priceNGN: 110000,
    priceDollar: 18,
    label: "For Established Enterprises",
    packageDeal: [
      "Logo Design (1 Primary + Alternate + Variations )",
      "Comprehensive Brand Guidelines (Typography (font selection and usage), Color Palette, Logo Usage Guidelines, Tone of Voice & Messaging, Brand Imagery Style)",
      "Stationery Designs (Business Card, Letter Head, Email Signature, Envelope, or ID Card)",
      "Merchandise & Packaging Design (T-Shirts, Tote Bags,Mugs,Product Packaging, Labels & Stickers)",
      "20 Social Media Posts (15Static, 4 Carousel and 1 Video",
      "3 Posters or Flyers",
      "2 Banners (roll-up or billboards",
      "Social Media Kit (Profile Picture, Banners, Highlight Icons",
    ],
    packageType: "premium",
  },
};

export const creativeGraphicsDesign: ServicePriceObjType = {
  regular: {
    serviceSubgroup:
      "Graphics Design ( Posters, flyers, Print Media, Social Media, etc. )",
    serviceGroup: "Creative",
    priceNGN: 45000,
    priceDollar: 18,
    label: "Ideal For Small Scale Digital Operations",
    packageDeal: [
      "5 Static Graphics Designs  ( eg, for prints, for ads, for social media engagements etc )",
      "1 Advert Design",
      "1 Multi Platform Social Media Post",
    ],
    packageType: "regular",
  },
  standard: {
    serviceSubgroup:
      "Graphics Design ( Posters, flyers, Print Media, Social Media, etc. )",
    serviceGroup: "Creative",
    priceNGN: 75000,
    priceDollar: 18,
    label: "Ideal For Growing Digital Operations",
    packageDeal: [
      "10 Static Graphics Designs  ( eg, for prints, for ads, for social media engagements etc ) ",
      "1 Multi-Slide Designs (7 slides Max) for Campaigns or Short Motion Graphics",
      "3 Advert Designs",
      "3 Multi Platform Social Media Post",
    ],
    packageType: "standard",
  },
  premium: {
    serviceSubgroup:
      "Graphics Design ( Posters, flyers, Print Media, Social Media, etc. )",
    serviceGroup: "Creative",
    priceNGN: 132000,
    priceDollar: 18,
    label: "Ideal For Startups",
    packageDeal: [
      "20 Static Graphic Designs ( eg, for prints, for ads, for social media engagements etc )",
      "2 Multi-Slide Designs (10 slides Max) for Campaigns",
      "2 Motion Graphics",
      "5 Adverts Design",
      "5 Multi Platform Social Media Post",
      "1 Re-Usable Template from any of the designs of your choice",
    ],
    packageType: "premium",
  },
};

export const uiUxDesign: ServicePriceObjType = {
  regular: {
    serviceSubgroup: "UI/UX Design",
    serviceGroup: "Creative Design",
    priceNGN: 180000,
    priceDollar: 18,
    label: "Ideal For Startups",
    packageDeal: [
      "User Research (basic persona creation, competitor analysis)",
      "Wireframes for 8-12 screens",
      "UI Design for 8–12 screens (mobile or web)",
      "Style Guide (colors, fonts, button styles)",
    ],
    packageType: "regular",
  },
  standard: {
    serviceSubgroup: "UI/UX Design",
    serviceGroup: "Creative Design",
    priceNGN: 250000,
    priceDollar: 18,
    label: "Ideal For Startups",
    packageDeal: [
      "User Research (personas, customer journey maps, and competitor analysis)",
      "Wireframes for 12–20 screens",
      "UI Design for 12-20 screens",
      "Prototype (interactive for user testing)",
      "Style Guide (detailed with icons and reusable components)",
    ],
    packageType: "standard",
  },
  premium: {
    serviceSubgroup: "UI/UX Design",
    serviceGroup: "Creative Design",
    priceNGN: 350000,
    priceDollar: 18,
    label: "Ideal For Startups",
    packageDeal: [
      "Full User Research (surveys, interviews, journey maps)",
      "Wireframes for 20-32 screens",
      "UI Design for 20-32 screens",
      "Prototype (fully interactive for user testing)",
      "Style Guide + Design System (detailed with icons and reusable components for scalability)",
    ],
    packageType: "premium",
  },
}

export const webDevelopment: ServicePriceObjType = {
  regular: {
    serviceSubgroup: "Web Design & Development",
    serviceGroup: "Software",
    priceNGN: 250000,
    priceDollar: 18,
    label: "Basic Plan – Simple Websites",
    packageDeal: [
      "Responsive Landing Page (1–4 pages)",
      "Basic SEO Optimization",
      "Contact Form Integration",
      "Deployment Assistance",
    ],
    packageType: "regular",
  },
  standard: {
    serviceSubgroup: "Web Design & Development",
    serviceGroup: "Software",
    priceNGN: 550000,
    priceDollar: 18,
    label: "Standard Plan – Dynamic and Functional Websites",
    packageDeal: [
      "Multi-Page Website (5–10 pages)",
      "CMS Integration (e.g., WordPress or custom)",
      "Basic E-Commerce Setup (up to 20 products)",
      "SEO Optimization + Analytics Setup",
      "1 Month Free Maintenance",
    ],
    packageType: "standard",
  },
  premium: {
    serviceSubgroup: "Web Design & Development",
    serviceGroup: "Software",
    priceNGN: 1100000,
    priceDollar: 18,
    label: "Ideal For Startups",
    packageDeal: [
      "Fully Custom Website (10+ pages)",
      "Advanced E-Commerce Setup (unlimited products, payment integration)",
      "API Integration (e.g., CRM, marketing tools)",
      "SEO Optimization + Analytics Setup",
      "Security Optimization (SSL Certificate)",
      "3 Months Free Maintenance",
    ],
    packageType: "premium",
  },
};
