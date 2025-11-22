import { Palette, Code, Shield, BarChart3, Layers, Globe, TrendingUp } from 'lucide-react';
import { ServiceItem, TestimonialItem, ProjectItem, NavItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Bespoke Web Design',
    description: 'Tailored visual identities that resonate with your audience. We move beyond templates to create unique digital footprints.',
    icon: Palette,
  },
  {
    id: '2',
    title: 'Advanced Web Development',
    description: 'Robust, scalable, and secure code. From complex web applications to lightning-fast marketing sites using the latest tech stacks.',
    icon: Code,
  },
  {
    id: '3',
    title: 'IT Infrastructure & Security',
    description: 'Comprehensive IT solutions ensuring your digital assets are protected, optimized, and always online.',
    icon: Shield,
  },
  {
    id: '7',
    title: 'Performance Marketing',
    description: 'Strategic SEO, PPC, and content campaigns designed to drive conversion and maximize ROI for your digital properties.',
    icon: TrendingUp,
  },
  {
    id: '4',
    title: 'Website Maintenance',
    description: 'Proactive care for your digital presence. We handle updates, backups, and performance tuning so you can focus on business.',
    icon: Layers,
  },
  {
    id: '5',
    title: 'Digital Strategy',
    description: 'Data-driven insights to guide your digital transformation. We align technology with your core business goals.',
    icon: BarChart3,
  },
  {
    id: '6',
    title: 'Global Hosting Solutions',
    description: 'High-performance cloud hosting architectures designed for speed, redundancy, and global reach.',
    icon: Globe,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote: "TOCHMOC transformed our outdated platform into a state-of-the-art digital experience. The attention to detail is simply unmatched.",
    author: "Elena V.",
    role: "Chief Marketing Officer",
    company: "Nexus Financial",
    image: "https://picsum.photos/id/1027/100/100",
  },
  {
    id: 't2',
    quote: "They don't just write code; they understand business. Our conversion rates doubled within a month of the new launch.",
    author: "Marcus T.",
    role: "Founder",
    company: "Vanguard Systems",
    image: "https://picsum.photos/id/1005/100/100",
  },
  {
    id: 't3',
    quote: "Professional, timely, and incredibly talented. It felt like they were an extension of our own team rather than an external agency.",
    author: "Sarah L.",
    role: "Director of Operations",
    company: "Lumina Retail",
    image: "https://picsum.photos/id/338/100/100",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Aether Finance Dashboard',
    category: 'FinTech / Web App',
    image: 'https://picsum.photos/id/48/800/600',
    year: '2024'
  },
  {
    id: 'p2',
    title: 'Luxe Interiors',
    category: 'E-Commerce / Design',
    image: 'https://picsum.photos/id/201/800/600',
    year: '2023'
  },
  {
    id: 'p3',
    title: 'Orbit Tech Solutions',
    category: 'Corporate / Branding',
    image: 'https://picsum.photos/id/180/800/600',
    year: '2023'
  },
  {
    id: 'p4',
    title: 'Serenity Wellness',
    category: 'Healthcare / Mobile',
    image: 'https://picsum.photos/id/431/800/600',
    year: '2024'
  },
];