import React from 'react';
import { Save, Grid3X3, Grid, Lock, Unlock } from 'lucide-react';

export default function DesignerTopBar({
  presets,
  templateName,
  onTemplateNameChange,
  canvasSize,
  onSizeChange,
  sizePreset,
  onPresetChange,
  lockDimensions,
  onToggleLock,
  showGrid,
  onToggleGrid,
  onSave,
}) {
  return (
    <header className="h-20 bg-white border-b px-6 flex items-center justify-between gap-6">
      <div className="flex items-center gap-4 flex-1">
        <input
          type="text"
          value={templateName}
          onChange={(e) => onTemplateNameChange(e.target.value)}
          className="text-lg font-semibold text-gray-800 border rounded-lg px-4 py-2 w-72"
          placeholder="Template name"
        />

        <select
          value={sizePreset}
          onChange={(e) => onPresetChange(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm text-gray-600"
        >
          {presets.map((preset) => (
            <option key={preset.value} value={preset.value}>
              {preset.label}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <label className="text-xs text-gray-500 uppercase tracking-wide">W</label>
          <input
            type="number"
            value={canvasSize.width}
            onChange={(e) => onSizeChange('width', parseInt(e.target.value, 10))}
            className="w-24 border rounded-lg px-3 py-2"
            min="100"
          />
          <button
            type="button"
            onClick={onToggleLock}
            className="border rounded-full p-2 text-gray-600 hover:bg-gray-50"
          >
            {lockDimensions ? <Lock size={16} /> : <Unlock size={16} />}
          </button>
          <label className="text-xs text-gray-500 uppercase tracking-wide">H</label>
          <input
            type="number"
            value={canvasSize.height}
            onChange={(e) => onSizeChange('height', parseInt(e.target.value, 10))}
            className="w-24 border rounded-lg px-3 py-2"
            min="100"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleGrid}
          className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm text-gray-600"
        >
          {showGrid ? <Grid3X3 size={16} /> : <Grid size={16} />}
          {showGrid ? 'Hide grid' : 'Show grid'}
        </button>

        <button
          type="button"
          onClick={onSave}
          className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full shadow"
        >
          <Save size={18} /> Save template
        </button>
      </div>
    </header>
  );
}
