'use client';

import { Tool } from '../types';
import { ExternalLink, Flame, Sparkles } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  // Generate a gradient based on tool name
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-green-500 to-emerald-500',
    'from-indigo-500 to-purple-500',
    'from-pink-500 to-rose-500',
    'from-cyan-500 to-blue-500',
    'from-amber-500 to-orange-500',
  ];
  
  const gradientIndex = tool.name.length % gradients.length;
  const gradient = gradients[gradientIndex];

  // Get first letter or first two characters for Chinese
  const getInitials = (name: string) => {
    if (/^[\u4e00-\u9fa5]/.test(name)) {
      return name.slice(0, 2);
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="tool-card group block bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-300 dark:hover:border-blue-700"
    >
      <div className="p-4">
        {/* Header: Icon & Name */}
        <div className="flex items-start gap-3">
          {/* Icon/Avatar */}
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            {getInitials(tool.name)}
          </div>
          
          {/* Title & Tags */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h3>
              {tool.isHot && (
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium">
                  <Flame className="w-3 h-3" />
                  热门
                </span>
              )}
              {tool.isNew && (
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium">
                  <Sparkles className="w-3 h-3" />
                  新
                </span>
              )}
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1 mt-1.5">
              {tool.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* External Link Icon */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        {/* Description */}
        <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>
      </div>
      
      {/* Hover Effect Bar */}
      <div className={`h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </a>
  );
}
