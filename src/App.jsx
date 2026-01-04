import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { raidData } from './data/raidData';
import { classes } from './data/classes';
import { tipsData } from './data/tipsData';
import { getSpecName, getSpecIcon, getTips } from './utils/helpers';
import { TipItem, SelectDropdown } from './components/UIComponents.jsx';
import './styles/styles.css';

const KarazhanTipsApp = () => {
  const [selectedBoss, setSelectedBoss] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSpec, setSelectedSpec] = useState('');

  const tips = getTips(tipsData, selectedBoss, selectedClass, selectedSpec);

  const handleReset = () => {
    setSelectedBoss('');
    setSelectedClass('');
    setSelectedSpec('');
  };

  const selectedClassData = classes.find(c => c.id === selectedClass);
  const availableSpecs = selectedClassData ? selectedClassData.specs : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-2xl p-6 border border-purple-900">
          <h1 className="text-3xl font-bold text-center mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-400 main-title">
            Karazhan Boss Guide
          </h1>
          <p className="text-center text-gray-400 mb-6 text-sm">TBC Anniversary</p>

          <div className="space-y-4">
            {/* Class Selection */}
            <SelectDropdown
              label="Select Class"
              value={selectedClass}
              onChange={(e) => {
                setSelectedClass(e.target.value);
                setSelectedSpec('');
              }}
              options={classes}
              placeholder="Choose a class..."
            />

            {/* Spec Selection */}
            {selectedClass && (
              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm">Select Spec</label>
                <select
                  value={selectedSpec}
                  onChange={(e) => setSelectedSpec(e.target.value)}
                  className="form-select"
                >
                  <option value="">Choose a spec...</option>
                  {availableSpecs.map((spec, index) => {
                    const specName = getSpecName(spec);
                    const icon = getSpecIcon(spec);
                    return (
                      <option key={index} value={specName}>
                        {specName} {icon}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

            {/* Boss Selection - only show after spec is selected */}
            {selectedClass && selectedSpec && (
              <SelectDropdown
                label="Select Boss"
                value={selectedBoss}
                onChange={(e) => setSelectedBoss(e.target.value)}
                options={raidData.bosses}
                placeholder="Choose a boss..."
              />
            )}

            {/* Tips Display */}
            {selectedBoss && selectedClass && selectedSpec && (
              <div className="mt-6 bg-black bg-opacity-60 border border-purple-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="boss-title">
                      {raidData.bosses.find(b => b.id === selectedBoss)?.name}
                    </h2>
                    {selectedBoss === 'netherspite' && (
                      <p className="text-xs mt-1 flex flex-wrap items-center gap-1">
                        <span className="text-red-500 font-bold">Red beam</span>
                        <span className="text-white">= Tank (defense buff)</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-blue-500 font-bold">Blue beam</span>
                        <span className="text-white">= DPS (spell damage)</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-green-500 font-bold">Green beam</span>
                        <span className="text-white">= Healer (healing boost)</span>
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleReset}
                    className="reset-button"
                  >
                    Reset
                  </button>
                </div>
                <p className="spec-label">{selectedClassData?.name} - {selectedSpec}</p>

                {tips.length > 0 ? (
                  <div className="space-y-2">
                    {tips.map((tip, index) => (
                      <TipItem key={index} tip={tip} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="no-tips-text">
                      No tips available yet for this combination.
                    </p>
                    <p className="no-tips-subtext">
                      Tips coming soon as we gather more data!
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Instructions */}
            {!selectedBoss && (
              <div className="mt-6 bg-gray-950 bg-opacity-60 border border-gray-800 rounded-lg p-4">
                <p className="instructions-text">
                  Fast tips right before you pull. Select class → spec → boss for instant info.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KarazhanTipsApp;