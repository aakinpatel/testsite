import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
}