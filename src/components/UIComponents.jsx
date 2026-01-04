import React from 'react';
import { AlertCircle } from 'lucide-react';

export const TipItem = ({ tip }) => (
  <div className="flex items-start gap-2 bg-gray-950 bg-opacity-60 p-3 rounded-lg border border-gray-800">
    <AlertCircle className="text-purple-500 flex-shrink-0 mt-0.5" size={16} />
    <p className="text-gray-200 text-sm">{tip}</p>
  </div>
);

export const SelectDropdown = ({ label, value, onChange, options, placeholder }) => (
  <div>
    <label className="block text-gray-300 font-semibold mb-2 text-sm">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    >
      <option value="">{placeholder}</option>
      {options.map(({ id, name, icon }) => (
        <option key={id} value={id}>
          {name} {icon}
        </option>
      ))}
    </select>
  </div>
);
