'use client';

import { categories } from '../data/tools';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string | null;
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

export default function Sidebar({ isOpen, onClose, activeCategory }: SidebarProps) {
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between p-4 lg:hidden border-b border-gray-200 dark:border-gray-800">
            <span className="font-semibold text-gray-900 dark:text-white">分类导航</span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Category List */}
          <nav className="flex-1 overflow-y-auto p-3 space-y-1">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-xl">{iconMap[category.icon] || '🔧'}</span>
                  <div className="flex-1 min-w-0">
                    <span className="block font-medium text-sm truncate">{category.name}</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                      {category.tools.length} 个工具
                    </span>
                  </div>
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Footer Info */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
              <p>共收录 {categories.reduce((acc, cat) => acc + cat.tools.length, 0)} 个AI工具</p>
              <p>持续更新中...</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
