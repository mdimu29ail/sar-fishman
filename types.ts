export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Service {
  title: string;
  description: string[];
}

export interface Achievement {
  year: string;
  title: string;
  category: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
}

export interface Insight {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}