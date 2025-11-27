import React from 'react';
import { Type, Image, Square, Sparkles, Layers } from 'lucide-react';

const tools = [
  { icon: Type, label: 'Text', type: 'text' },
  { icon: Square, label: 'Shape', type: 'shape' },
  { icon: Image, label: 'Image', type: 'image' },
  { icon: Sparkles, label: 'Highlight', type: 'shape', props: { backgroundColor: '#fef08a' } },
];

export default function Toolbar({ onAdd }) {
  return (
    <div className="w-20 bg-purple-700 text-white flex flex-col items-center py-6 space-y-4 h-full">
      <div className="rounded-full bg-purple-600 p-3">
        <Layers size={20} />
      </div>
      {tools.map((tool) => (
        <button
          key={tool.label}
          type="button"
          title={`Add ${tool.label}`}
          className="w-12 h-12 flex items-center justify-center rounded-2xl bg-purple-600 hover:bg-white/20 transition"
          onClick={() => onAdd(tool.type, tool.props)}
        >
          <tool.icon size={20} />
          <span className="sr-only">{tool.label}</span>
        </button>
      ))}
    </div>
  );
}
