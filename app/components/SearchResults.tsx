'use client';

import { Tool } from '../types';
import ToolCard from './ToolCard';
import { Search, ArrowLeft } from 'lucide-react';

interface SearchResultsProps {
  query: string;
  results: Tool[];
  onClear: () => void;
}

export default function SearchResults({ query, results, onClear }: SearchResultsProps) {
  if (!query.trim()) {
    return null;
  }

  return (
    <div className="space-y-4">
      {/* Search Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
            <Search className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              搜索结果
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &quot;{query}&quot; 找到 {results.length} 个工具
            </p>
          </div>
        </div>
        
        <button
          onClick={onClear}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          返回全部
        </button>
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {results.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
            <Search className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            未找到相关工具
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
            没有找到与 &quot;{query}&quot; 相关的工具，请尝试其他关键词
          </p>
        </div>
      )}
    </div>
  );
}
