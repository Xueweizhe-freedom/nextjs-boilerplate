'use client';

import { Tool } from '../types';
import ToolCard from './ToolCard';
import { Flame } from 'lucide-react';

interface HotToolsProps {
  tools: Tool[];
}

export default function HotTools({ tools }: HotToolsProps) {
  // Get top 10 hot tools
  const hotTools = tools.slice(0, 10);

  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
          <Flame className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            热门推荐
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            最受欢迎的AI工具
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {hotTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
