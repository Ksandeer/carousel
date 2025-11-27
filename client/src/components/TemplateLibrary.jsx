import React from 'react';

export default function TemplateLibrary({ templates, onLoad, currentTemplateId, onCreateNew }) {
  return (
    <section>
      <header className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold text-purple-900 uppercase">Template library</h3>
          <p className="text-xs text-gray-500">Saved layouts ({templates.length})</p>
        </div>
        <button
          type="button"
          onClick={onCreateNew}
          className="text-xs font-semibold text-purple-700 border border-purple-200 rounded-full px-3 py-1 hover:bg-purple-50"
        >
          + New template
        </button>
      </header>
      <div className="space-y-2 max-h-64 overflow-auto pr-1">
        {templates.map((template) => {
          const isActive = template.id === currentTemplateId;
          return (
            <button
              key={template.id}
              type="button"
              onClick={() => onLoad(template.id)}
              className={`w-full border rounded-xl px-3 py-2 text-left text-sm ${
                isActive ? 'border-purple-400 bg-purple-50' : 'border-gray-200 hover:border-purple-200'
              }`}
            >
              <p className="font-semibold text-gray-800">{template.name || 'Untitled template'}</p>
              <p className="text-xs text-gray-500 flex items-center gap-2">
                <span>
                  {template.width}×{template.height}
                </span>
                {template.updatedAt && (
                  <span>Updated {new Date(template.updatedAt).toLocaleDateString()}</span>
                )}
              </p>
            </button>
          );
        })}
        {templates.length === 0 && (
          <div className="text-xs text-gray-500 border border-dashed rounded-xl px-3 py-4 text-center">
            No templates yet. Save the current design to create one.
          </div>
        )}
      </div>
    </section>
  );
}
