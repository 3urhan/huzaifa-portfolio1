
import { NavItem, PricingPlan, Testimonial, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Tech Blogger',
    content: 'Huzaifa knows exactly what Google wants. My site was rejected 5 times before I hired him. Approved in 1 week!',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: '2',
    name: 'Mike Ross',
    role: 'News Portal',
    content: 'Best investment for my blog. The CPC optimization service paid for itself in the first month.',
    avatar: 'https://picsum.photos/seed/mike/100/100',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$99',
    period: '/ one-time',
    badge: 'APPROVAL',
    features: [
      { text: 'Site Audit & Fixes', included: true },
      { text: 'Policy Violation Removal', included: true },
      { text: '2 Re-submission Attempts', included: true },
      { text: 'Revenue Optimization', included: false },
    ],
    cta: 'Get Approved',
  },
  {
    name: 'Scale',
    price: '$499',
    period: '/ month',
    badge: 'FULL MANAGEMENT',
    popular: true,
    features: [
      { text: 'Everything in Growth', included: true },
      { text: 'Advanced Ad Layout', included: true },
      { text: 'A/B Testing Placements', included: true },
      { text: 'Weekly Performance Reports', included: true },
      { text: '24/7 Priority WhatsApp', included: true },
    ],
    cta: 'Request Quote on WhatsApp',
  },
  {
    name: 'Growth',
    price: '$249',
    period: '/ one-time',
    badge: 'OPTIMIZATION',
    features: [
      { text: 'CTR Optimization', included: true },
      { text: 'Mobile Ad Setup', included: true },
      { text: 'Speed Optimization', included: true },
      { text: 'Weekly Reports', included: false },
    ],
    cta: 'Start Growing',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Can you guarantee AdSense approval?',
    answer: 'While no one can force Google, we have a 98% success rate. If your site isn\'t approved, we work with you until it is or offer a refund based on the selected package.',
  },
  {
    question: 'How long does the process take?',
    answer: 'Typically, audit and fixes take 2-3 days. Google\'s review takes anywhere from 2 days to 2 weeks. Most clients see results within 10 days.',
  },
  {
    question: 'Do you help with low CPC issues?',
    answer: 'Yes! We specialize in niche analysis and keyword optimization to help increase your CPC and overall revenue.',
  },
];
