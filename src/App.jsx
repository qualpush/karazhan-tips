import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronRight } from 'lucide-react';
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
  const [showCriticalMechanics, setShowCriticalMechanics] = useState(false);

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
              <div className="text-center">
                <label className="block text-gray-300 font-semibold mb-2 text-sm">Select Spec</label>
                <select
                  value={selectedSpec}
                  onChange={(e) => setSelectedSpec(e.target.value)}
                  className="form-select text-center"
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
                <div className="text-center mb-4">
                  <h2 className="boss-title">
                    {raidData.bosses.find(b => b.id === selectedBoss)?.name}
                  </h2>
                  {tipsData[selectedBoss]?.bossMechanics && (
                    <div className="mt-2 max-w-xs mx-auto">
                      <button
                        onClick={() => setShowCriticalMechanics(!showCriticalMechanics)}
                        className="flex items-center justify-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors bg-gray-800 bg-opacity-40 border border-gray-700 rounded px-2 py-1 w-full text-left hover:bg-gray-700 hover:bg-opacity-40"
                      >
                        ⚠️ Click for Boss Mechanics
                      </button>
                      {showCriticalMechanics && (
                        <div className="mt-1 ml-2 p-1 bg-gray-800 bg-opacity-30 border border-gray-700 rounded space-y-2">
                          {tipsData[selectedBoss].bossMechanics.map((mechanic, index) => (
                            <p key={index} className="text-xs text-yellow-300 leading-tight">
                              {mechanic}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {selectedBoss === 'netherspite' && (
                    <p className="text-xs mt-1 flex flex-wrap items-center justify-center gap-1">
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
                  <p className="spec-label">{selectedClassData?.name} - {selectedSpec}</p>
                </div>

                {tips.length > 0 ? (
                  <div className="space-y-4">
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

                <div className="text-center mt-4">
                  <button
                    onClick={handleReset}
                    className="reset-button"
                  >
                    Reset
                  </button>
                </div>
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