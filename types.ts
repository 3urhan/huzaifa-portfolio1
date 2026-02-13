
export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  badge?: string;
  features: { text: string; included: boolean }[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
