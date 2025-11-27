import React from 'react';

const imageFormats = [
  { label: 'Automatic', value: 'automatic' },
  { label: 'PNG', value: 'png' },
  { label: 'JPEG', value: 'jpeg' },
];

const colorModes = [
  { label: 'RGB', value: 'RGB' },
  { label: 'CMYK (beta)', value: 'CMYK' },
];

const pdfQuality = [
  { label: 'High (default)', value: 'high' },
  { label: 'Standard', value: 'standard' },
];

export default function ExportSettingsPanel({ settings, onChange }) {
  return (
    <section className="space-y-4">
      <SettingsCard title="Image settings">
        <SettingsField label="Image format">
          <select
            className="w-full bg-transparent focus:outline-none"
            value={settings.imageFormat}
            onChange={(e) => onChange('imageFormat', e.target.value)}
          >
            {imageFormats.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </SettingsField>
        <SettingsField label="DPI">
          <input
            className="w-full bg-transparent focus:outline-none"
            type="number"
            min="72"
            max="600"
            value={settings.imageDpi}
            onChange={(e) => onChange('imageDpi', parseInt(e.target.value, 10) || 72)}
          />
        </SettingsField>
        <SettingsField label="Color mode">
          <select
            className="w-full bg-transparent focus:outline-none"
            value={settings.imageColorMode}
            onChange={(e) => onChange('imageColorMode', e.target.value)}
          >
            {colorModes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </SettingsField>
      </SettingsCard>

      <SettingsCard title="PDF settings">
        <SettingsField label="Image quality">
          <select
            className="w-full bg-transparent focus:outline-none"
            value={settings.pdfQuality}
            onChange={(e) => onChange('pdfQuality', e.target.value)}
          >
            {pdfQuality.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </SettingsField>
        <SettingsField label="DPI">
          <input
            className="w-full bg-transparent focus:outline-none"
            type="number"
            min="72"
            max="600"
            value={settings.pdfDpi}
            onChange={(e) => onChange('pdfDpi', parseInt(e.target.value, 10) || 96)}
          />
        </SettingsField>
        <SettingsField label="Color mode">
          <select
            className="w-full bg-transparent focus:outline-none"
            value={settings.pdfColorMode}
            onChange={(e) => onChange('pdfColorMode', e.target.value)}
          >
            {colorModes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </SettingsField>
      </SettingsCard>
    </section>
  );
}

function SettingsCard({ title, children }) {
  return (
    <div className="border rounded-2xl p-4 space-y-3">
      <h3 className="text-sm font-semibold text-purple-900 uppercase">{title}</h3>
      {children}
    </div>
  );
}

function SettingsField({ label, children }) {
  return (
    <label className="text-xs text-gray-600 uppercase tracking-wide space-y-1 block">
      {label}
      <div className="text-sm text-gray-800 border rounded-lg px-3 py-2 bg-white">{children}</div>
    </label>
  );
}
