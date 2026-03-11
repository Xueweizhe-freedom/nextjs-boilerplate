'use client';

import { Category } from '../types';
import ToolCard from './ToolCard';
import { forwardRef } from 'react';

interface CategorySectionProps {
  category: Category;
}

const iconMap: Record<string, string> = {
  'MessageSquare': '💬',
  'Image': '🎨',
  'Video': '🎬',
  'Music': '🎵',
  'PenTool': '✍️',
  'Code': '💻',
  'Briefcase': '💼',
  'Palette': '🎨',
  'Search': '🔍',
  'User': '👤',
  'GraduationCap': '🎓',
  'ShoppingCart': '🛒',
};

const CategorySection = forwardRef<HTMLElement, CategorySectionProps>(
  ({ category }, ref) => {
    return (
      <section
        ref={ref}
        id={`category-${category.id}`}
        className="scroll-mt-24"
      >
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
            {iconMap[category.icon] || '🔧'}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {category.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {category.tools.length} 个工具
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {category.tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    );
  }
);

CategorySection.displayName = 'CategorySection';

export default CategorySection;
