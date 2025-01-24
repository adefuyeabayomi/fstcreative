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

export const creativeDesignAndSoftwareDevelopment: cDesignSDevObjType = {
  brandingAndIdentityDesign: {
    regular: {
      serviceSubgroup: "Branding & Identity Design",
      serviceGroup: "Creative Design",
      priceNGN: 35000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "regular",
    },
    standard: {
      serviceSubgroup: "Branding & Identity Design",
      serviceGroup: "Creative Design",
      priceNGN: 52500,
      priceDollar: 18,
      label: "For Growing Businesses",
      packageDeal: [
        "Logo Design (1 Primary + Alternate + Variations )",
        "Brand Guidelines ( Typography, Colors, Tone of Voice",
        "Stationery Design (Business Card, Letter Head, Email Signature",
        "10 Static Social Media Posts ( Static + 2 Carousel Posts)",
        "5 Posters or Flyer",
        "1 Banner Design (Rollup or Social Media",
      ],
      packageType: "standard",
    },
    premium: {
      serviceSubgroup: "Branding & Identity Design",
      serviceGroup: "Creative Design",
      priceNGN: 75000,
      priceDollar: 18,
      label: "For Established Enterprises",
      packageDeal: [
        "Logo Design (1 Primary + Alternate + Variations )",
        "Comprehensive Brand Guidelines",
        "Up to 5 Stationery & Merchandise Design",
        "Basic Packaging Design",
        "15 Social Media Posts (Static, 4 Carousel and 1 Video",
        "3 Posters or Flyers",
        "2 Banners (roll-up or billboards",
        "Social Media Kit (Profile Picture, Banners, Highlight Icons",
      ],
      packageType: "premium",
    },
  },
  creativeGraphicsDesign: {
    regular: {
      serviceSubgroup: "Creative Graphics Design",
      serviceGroup: "Creative Design",
      priceNGN: 35000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "regular",
    },
    standard: {
      serviceSubgroup: "Creative Graphics Design",
      serviceGroup: "Creative Design",
      priceNGN: 55000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "standard",
    },
    premium: {
      serviceSubgroup: "Creative Graphics Design",
      serviceGroup: "Creative Design",
      priceNGN: 80000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "premium",
    },
  },
  uiUxDesign: {
    regular: {
      serviceSubgroup: "UI/UX Design",
      serviceGroup: "Creative Design",
      priceNGN: 25000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "regular",
    },
    standard: {
      serviceSubgroup: "UI/UX Design",
      serviceGroup: "Creative Design",
      priceNGN: 25000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "standard",
    },
    premium: {
      serviceSubgroup: "UI/UX Design",
      serviceGroup: "Creative Design",
      priceNGN: 25000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "premium",
    },
  },
  webDevelopment: {
    regular: {
      serviceSubgroup: "Web Design & Development",
      serviceGroup: "Software",
      priceNGN: 25000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "regular",
    },
    standard: {
      serviceSubgroup: "Web Design & Development",
      serviceGroup: "Software",
      priceNGN: 25000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "standard",
    },
    premium: {
      serviceSubgroup: "Web Design & Development",
      serviceGroup: "Software",
      priceNGN: 25000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "premium",
    },
  },
  mobileAppDevelopment: {
    regular: {
      serviceSubgroup: "Mobile App Development",
      serviceGroup: "Software",
      priceNGN: 25000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "regular",
    },
    standard: {
      serviceSubgroup: "Mobile App Development",
      serviceGroup: "Software",
      priceNGN: 25000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "regular",
    },
    premium: {
      serviceSubgroup: "Mobile App Development",
      serviceGroup: "Software",
      priceNGN: 25000,
      priceDollar: 18,
      label: "Ideal For Startups",
      packageDeal: [
        "Logo Design ( Primary and Alternate )",
        "Basic Brand Guidelines ( Colors, fonts, logo usage)",
        "5 Static Social Media Posts",
        "2 Posters or Flyer",
      ],
      packageType: "regular",
    },
  },
};

export interface dCCreationObjType {
  copyWriting: {};
  socialMediaManagement: {};
  blogManagement: {};
}

export const digitalContentCreationAndSocialMediaManagement = {
  copyWriting: {},
  socialMediaManagement: {},
  blogManagement: {},
};

export interface vidEditObjType {
  twoDAnimation: {};
  videoEditAndCreation: {};
  productAdsVideoCreation: {};
}

export const videoEditsAndCreation = {
  twoDAnimation: {},
  videoEditAndCreation: {},
  productAdsVideoCreation: {},
};

export interface designBootcampObjType {
  designBasics: {};
  basicWebDevelopment: {};
  frontEndFrameworks: {};
  uiUxDesignClasses: {};
}

export const designAndCodingBootcamps = {
  designBasics: {},
  basicWebDevelopment: {},
  frontEndFrameworks: {},
  uiUxDesignClasses: {},
};
