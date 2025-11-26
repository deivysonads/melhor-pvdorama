export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  features: string[];
  ctaLink: string;
  isPopular?: boolean;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}