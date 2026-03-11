'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CategorySection from './components/CategorySection';
import SearchResults from './components/SearchResults';
import HotTools from './components/HotTools';
import { categories, getHotTools, searchTools } from './data/tools';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchTools(searchQuery);
  }, [searchQuery]);

  // Hot tools
  const hotTools = useMemo(() => getHotTools(), []);

  // Track active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const [id, element] of categoryRefs.current.entries()) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveCategory(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set category ref
  const setCategoryRef = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      categoryRefs.current.set(id, el);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isDark={isDark}
        onThemeToggle={toggleTheme}
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Sidebar */}
      <Sidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeCategory={activeCategory}
      />

      {/* Main Content */}
      <main className="pt-16 lg:pl-64">
        <div className="p-4 lg:p-6 max-w-[1920px] mx-auto">
          {searchQuery.trim() ? (
            // Search Results View
            <SearchResults
              query={searchQuery}
              results={searchResults}
              onClear={() => setSearchQuery('')}
            />
          ) : (
            // Normal View
            <>
              {/* Hot Tools Section */}
              <HotTools tools={hotTools} />

              {/* Category Sections */}
              <div className="space-y-8">
                {categories.map((category) => (
                  <CategorySection
                    key={category.id}
                    category={category}
                    ref={setCategoryRef(category.id)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
