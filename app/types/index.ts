export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon?: string;
  tags: string[];
  isHot?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  tools: Tool[];
}

export type Theme = 'light' | 'dark';
