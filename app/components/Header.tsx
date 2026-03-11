'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Menu, 
  X, 
  Github,
  Sun,
  Moon
} from 'lucide-react';
import { categories } from '../data/tools';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
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

export default function Header({ 
  searchQuery, 
  onSearchChange, 
  isDark, 
  onThemeToggle,
  onMenuToggle,
  isMobileMenuOpen
}: HeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-[1920px] mx-auto">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Left: Logo & Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI工具导航
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-0.5">发现最热门的AI工具</p>
              </div>
            </a>
          </div>

          {/* Center: Search */}
          <div className="flex-1 max-w-xl mx-4">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${isSearchFocused ? 'text-blue-500' : 'text-gray-400'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="搜索AI工具..."
                className="w-full h-10 pl-10 pr-4 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all text-sm"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={isDark ? '切换到亮色模式' : '切换到暗色模式'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            <a
              href="https://github.com/Xueweizhe-freedom/nextjs-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
            </a>
          </div>
        </div>

        {/* Category Navigation */}
        <nav className="hidden lg:flex items-center gap-1 px-4 lg:px-6 pb-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all whitespace-nowrap"
            >
              <span>{iconMap[category.icon] || '🔧'}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
