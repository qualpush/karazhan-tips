import React, { useState } from 'react';
import { AlertCircle, Snowflake, Flame } from 'lucide-react';

const KarazhanTipsApp = () => {
  const [selectedBoss, setSelectedBoss] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSpec, setSelectedSpec] = useState('');

  const raidData = {
    name: "Karazhan",
    bosses: [
      { id: 'attumen', name: 'Attumen the Huntsman' },
      { id: 'moroes', name: 'Moroes' },
      { id: 'maiden', name: 'Maiden of Virtue' },
      { id: 'opera', name: 'Opera Event' },
      { id: 'curator', name: 'The Curator' },
      { id: 'shade', name: 'Shade of Aran' },
      { id: 'illhoof', name: 'Terestian Illhoof' },
      { id: 'netherspite', name: 'Netherspite' },
      { id: 'chess', name: 'Chess Event' },
      { id: 'prince', name: 'Prince Malchezaar' },
      { id: 'nightbane', name: 'Nightbane' }
    ]
  };

  const classes = [
    { id: 'warrior', name: 'Warrior', specs: ['Arms', 'Fury', 'Protection'] },
    { id: 'paladin', name: 'Paladin', specs: ['Holy', 'Protection', 'Retribution'] },
    { id: 'hunter', name: 'Hunter', specs: ['Beast Mastery', 'Marksmanship', 'Survival'] },
    { id: 'rogue', name: 'Rogue', specs: ['Assassination', 'Combat', 'Subtlety'] },
    { id: 'priest', name: 'Priest', specs: ['Discipline', 'Holy', 'Shadow'] },
    { id: 'shaman', name: 'Shaman', specs: ['Elemental', 'Enhancement', 'Restoration'] },
    { id: 'mage', name: 'Mage', specs: [
      { name: 'Arcane', icon: null },
      { name: 'Fire', icon: 'flame' },
      { name: 'Frost', icon: 'snowflake' }
    ] },
    { id: 'warlock', name: 'Warlock', specs: ['Affliction', 'Demonology', 'Destruction'] },
    { id: 'druid', name: 'Druid', specs: ['Balance', 'Feral', 'Restoration'] }
  ];

  // Concise tips based on real TBC Karazhan data
  const tipsData = {
    // Attumen the Huntsman
    'attumen-warrior-protection': [
      'Build rage on Midnight phase 1, then instantly grab Attumen when he spawns at 95%',
      'Use Disarm on Attumen to reduce incoming damage',
      'Face Attumen away to prevent Shadow Cleave hitting raid',
      'Use Spell Reflection on Intangible Presence curse',
      'Threat resets when they merge at 25% - rebuild aggro fast'
    ],
    'attumen-warrior-arms': [
      'DPS Midnight first until merge at 25%',
      'Stop DPS when Attumen spawns until tank has threat',
      'Stand behind boss to avoid Shadow Cleave'
    ],
    'attumen-warrior-fury': [
      'Focus Midnight first, cleave Attumen passively',
      'Wait for tank threat when Attumen spawns - he can\'t be taunted',
      'Stand behind the boss to avoid Shadow Cleave'
    ],
    'attumen-paladin-protection': [
      'Tank Midnight phase 1, can tank both if geared',
      'Face away from raid to avoid Shadow Cleave',
      'Decurse Intangible Presence from yourself immediately'
    ],
    'attumen-paladin-holy': [
      'Don\'t overheal when Attumen spawns or you\'ll pull threat',
      'Decurse Intangible Presence from tanks first, then DPS',
      'Be ready to heal Berserker Charge targets in phase 3'
    ],
    'attumen-priest-holy': [
      'Use Power Word: Shield pre-emptively to avoid being one-shot if you pull threat',
      'Heavy tank healing needed after the merge at 25%',
      'Prep heals for Berserker Charge victims'
    ],
    'attumen-priest-shadow': [
      'Stop DPS when Attumen spawns - wait for tank threat',
      'Keep DoTs rolling throughout fight',
      'Stay max range to avoid Charge in phase 3'
    ],
    'attumen-mage-frost': [
      'Interrupt assigned spells to drain his mana',
      'Stand at max range to avoid Charge',
      'Ice Block if charged and healers are busy'
    ],
    'attumen-mage-fire': [
      'Focus Midnight, then burn when they merge',
      'Position at max range from boss',
      'Save cooldowns for merged phase'
    ],
    'attumen-hunter-beastmastery': [
      'Use Misdirection when Attumen spawns to help tank',
      'Pet can tank adds if horses spawn',
      'Minimum range during phase 3 to avoid Charge'
    ],
    'attumen-druid-feral': [
      'Can tank Midnight then switch to DPS after merge',
      'Shapeshift to remove Intangible Presence movement debuff',
      'Use DPS gear if not tanking'
    ],
    'attumen-druid-restoration': [
      'Remove Intangible Presence curse from tanks immediately',
      'Keep Renew/HoTs on both tanks',
      'Be ready for random Charge damage'
    ],

    // Shade of Aran
    'shade-warrior-protection': [
      'Wear DPS gear - boss has no threat table',
      'During Flame Wreath: STOP ALL MOVEMENT',
      'Run away during Arcane Explosion pull',
      'Help tank Water Elementals at 40%'
    ],
    'shade-warrior-arms': [
      'Interrupt Fireball/Frostbolt on rotation',
      'FREEZE when Flame Wreath cast finishes',
      'Run from center during Arcane Explosion',
      'Burn Water Elementals fast at 40%'
    ],
    'shade-priest-holy': [
      'Stand 10+ yards from Aran to avoid Counterspell silence',
      'Dispel Chains of Ice quickly',
      'Top raid off fast after Mass Pyroblast',
      'Heavy healing needed when Water Elementals spawn'
    ],
    'shade-priest-shadow': [
      'Keep DoTs rolling throughout',
      'DO NOT MOVE during Flame Wreath',
      'Help interrupt Fireball/Frostbolt',
      'Burst Water Elementals at 40%'
    ],
    'shade-mage-arcane': [
      'Interrupt Fireball on rotation',
      'Stand 10+ yards away to avoid Counterspell',
      'FREEZE during Flame Wreath or wipe the raid',
      'Sheep/burn Water Elementals at 40%'
    ],
    'shade-mage-frost': [
      'Stand 10+ yards from boss',
      'Let Arcane Missiles go through - interrupt Fireball/Frostbolt',
      'Absolute zero movement during Flame Wreath',
      'Ice Block available for emergencies'
    ],
    'shade-warlock-affliction': [
      'Banish Water Elementals when they spawn',
      'Stay 10+ yards from boss to avoid silence',
      'Don\'t move during Flame Wreath',
      'Keep DoTs rolling'
    ],
    'shade-druid-restoration': [
      'Remove Chains of Ice (magic debuff)',
      'Stack HoTs before Mass Pyroblast',
      'Stay 10+ yards from boss',
      'Massive healing when Elementals spawn'
    ],
    'shade-hunter-marksmanship': [
      'Stand at max range',
      'Snake Trap adds give Aran more targets to cast on',
      'Stay put during Flame Wreath',
      'Kill Water Elementals priority at 40%'
    ],
    'shade-shaman-restoration': [
      'Chain Heal excellent for this fight',
      'Remove Chains of Ice',
      'Top raid fast after Pyroblast',
      'Stay back from boss to avoid silence'
    ],

    // Curator
    'curator-mage-arcane': [
      'Save Arcane Power for Bloodlust timing',
      'Kill Astral Flares immediately when they spawn',
      'Triple damage during Evocation - burn hard',
      'Time Evocation between Flare spawns'
    ],
    'curator-mage-frost': [
      'Flares are priority - switch DPS instantly',
      'Frostbolt spam on Curator between Flares',
      'Use Icy Veins during his Evocation',
      'Conserve mana for long fight'
    ],
    'curator-warlock-destruction': [
      'Time Curse of Doom to land during Evocation',
      'Kill Flares fast or chain damage wipes raid',
      'Burn phase during his Evocation',
      'Stay spread to minimize Flare damage'
    ],
    'curator-hunter-beastmastery': [
      'Swap to Flares instantly',
      'Multi-Shot to help with Flare spawns',
      'Misdirect back to tank after Flares',
      'Use all cooldowns during Evocation'
    ],
    'curator-priest-holy': [
      'Prepare for Hateful Bolt on off-tank',
      'Heal through constant raid damage',
      'Top everyone before Flare spawns',
      'Big heals during Evocation damage spike'
    ],

    // Prince Malchezaar
    'prince-warrior-protection': [
      'Tank with back to wall to minimize Infernal spawns hitting raid',
      'Use defensives during Phase 2 (60%) - he hits much harder',
      'Sunder Armor stacks hurt - watch your mitigation',
      'Avoid Infernal landing zones'
    ],
    'prince-priest-holy': [
      'Dispel Shadow Word: Pain quickly',
      'Top targets off before Enfeeble',
      'Run from Shadow Nova',
      'Avoid Infernal spawns'
    ],
    'prince-mage-arcane': [
      'Stay spread to avoid Shadow Nova chain',
      'Move away from Infernal landing spots',
      'Burn hard - long fight tests mana',
      'Spellsteal buffs if possible'
    ],
    'prince-paladin-protection': [
      'Position against wall',
      'Shield Wall phase 2+',
      'Move out of Shadow Nova range',
      'Avoid Infernals'
    ],

    // Moroes
    'moroes-priest-holy': [
      'Shackle Undead on assigned add',
      'Keep shackle up entire fight',
      'Heal through Moroes Garrote bleeds',
      'Decurse on cooldown'
    ],
    'moroes-hunter-beastmastery': [
      'Freezing Trap assigned add',
      'Re-trap when it breaks',
      'Kill priority: Healers first',
      'Watch for Gouge on main tank'
    ],

    // Netherspite
    'netherspite-warrior-protection': [
      'Soak Red beam (Perseverance) - increases defense',
      'Rotate out when Nether Exhaustion stacks',
      'Run to back of room during Banish phase',
      'Move out of Void Zones'
    ],
    'netherspite-mage-frost': [
      'Soak Blue beam (Dominance) for massive spell damage buff',
      'Rotate beam soaking every phase',
      'Avoid Void Zones',
      'Threat reduction built into Blue beam'
    ],
    'netherspite-priest-holy': [
      'Soak Green beam (Serenity) for healing boost',
      'Constant raid damage throughout',
      'Rotate beam assignments',
      'Massive healing during Banish phase'
    ],

    // Opera - Big Bad Wolf
    'opera-warrior-fury': [
      'DPS wolf normally',
      'If you get Red Riding Hood, kite along room edges',
      'Use Fear Ward/Tremor Totem for Terrifying Howl',
      'Stop DPS if tank gets stunned by Wide Swipe'
    ],
    'opera-hunter-marksmanship': [
      'If marked as Red Riding Hood, kite and stay alive',
      'Disengage helps if you get marked',
      'DPS from range when not marked',
      'Be ready for fear from Terrifying Howl'
    ],

    // Nightbane
    'nightbane-warrior-protection': [
      'Tank with back to balcony edge, face boss away from raid',
      'Stance dance or use Berserker Rage to avoid Bellowing Roar fear',
      'Pick up Restless Skeletons immediately during air phase',
      'Build rage before he lands to regain threat fast',
      'Move out of Charred Earth ground effect immediately'
    ],
    'nightbane-warrior-arms': [
      'Position at boss side near rear legs, not directly behind (Tail Sweep)',
      'Stay close to Tremor Totem for fear breaks',
      'Switch to Restless Skeletons during air phase',
      'Move away from Charred Earth instantly',
      'Watch threat - he\'s not tauntable'
    ],
    'nightbane-warrior-fury': [
      'Stack with other melee at side/rear leg position',
      'Tremor Totem breaks fear if you get caught',
      'Burn Skeletons fast in air phase',
      'Avoid Charred Earth ground fire',
      'Careful on threat - no taunt available'
    ],
    'nightbane-paladin-protection': [
      'Tank facing outward, back to edge',
      'No stance dance - rely on Fear Ward or PvP trinket',
      'Grab all 5 Restless Skeletons during air phase',
      'Use Holy Shield before landing to rebuild threat',
      'Move from Charred Earth immediately'
    ],
    'nightbane-paladin-holy': [
      'Stand at max range to avoid Bellowing Roar fear',
      'Heal Smoking Blast target (usually a healer) during air phase',
      'Dispel Distracting Ash (magic) immediately - reduces hit chance 30%',
      'Flash of Light spam on Smoking Blast victim',
      'Be ready for skeleton adds pulling threat on healers'
    ],
    'nightbane-priest-holy': [
      'Max range positioning avoids fear',
      'You might get Smoking Blast in air phase - wear armor if possible',
      'Dispel Distracting Ash from DPS/tanks fast',
      'Fear Ward the tank on cooldown',
      'BoP available for skeleton aggro emergencies'
    ],
    'nightbane-priest-shadow': [
      'Position at max range',
      'Keep DoTs rolling during ground phase',
      'Burn Restless Skeletons in air phase',
      'You may get Smoking Blast - healers will focus you',
      'Avoid Charred Earth'
    ],
    'nightbane-mage-arcane': [
      'Stand at absolute max range - avoids fear completely',
      'AoE the 5 Restless Skeletons during air phase',
      'Save Arcane Power for ground phase DPS',
      'Don\'t pull skeleton threat with AoE or you\'ll die',
      'Ice Block available if Smoking Blast targets you'
    ],
    'nightbane-mage-frost': [
      'Max range to avoid Bellowing Roar',
      'Frost Nova + Blizzard the Skeletons during air',
      'Watch AoE threat on skeletons',
      'Move away from Rain of Bones impact',
      'Stay within 40 yards or triggers Fireball Barrage'
    ],
    'nightbane-mage-fire': [
      'Position at max cast range',
      'Flamestrike the skeleton pack during air phase',
      'Control AoE threat or skeletons will kill you',
      'Move from Charred Earth and Rain of Bones',
      'Combust during ground phase burn windows'
    ],
    'nightbane-warlock-affliction': [
      'Stay at max range to avoid fear',
      'DoT Skeletons during air phase but watch AoE threat',
      'Fear can be broken with PvP trinket if needed',
      'Move out of ground effects',
      'Soulstone a healer before pull'
    ],
    'nightbane-warlock-destruction': [
      'Max range positioning',
      'Rain of Fire on Skeletons but control threat',
      'Shadowfury to stun skeleton pack',
      'Move from Charred Earth fast',
      'Long fight - conserve mana'
    ],
    'nightbane-hunter-beastmastery': [
      'Stand at max range to avoid fear',
      'Multi-Shot the 5 Skeletons during air phase',
      'Misdirect to tank when Nightbane lands',
      'Move from Charred Earth and Rain of Bones',
      'Pet can help tank skeletons briefly'
    ],
    'nightbane-hunter-marksmanship': [
      'Max range to avoid Bellowing Roar',
      'Volley the skeleton pack carefully',
      'Misdirect on landing to help tank',
      'Snake Trap can distract skeletons briefly',
      'Move out of ground fire immediately'
    ],
    'nightbane-druid-feral': [
      'Position at side of boss with other melee',
      'Shapeshift to break fear if hit',
      'Help burn Skeletons during air phase',
      'Move from Charred Earth',
      'Can offtank skeletons if needed'
    ],
    'nightbane-druid-restoration': [
      'Stand at max range',
      'Stack HoTs on Smoking Blast target during air',
      'Remove Distracting Ash (magic debuff) immediately',
      'Heavy tank healing needed throughout',
      'Skeletons may pull on you - call for help'
    ],
    'nightbane-shaman-restoration': [
      'Drop Tremor Totem near melee for fear breaks',
      'Chain Heal excellent for this fight',
      'Dispel Distracting Ash fast',
      'Focus Smoking Blast victim during air phase',
      'Earth Shield on tank'
    ],
    'nightbane-shaman-elemental': [
      'Max range to avoid fear',
      'Chain Lightning the Skeleton pack',
      'Watch threat on AoE or skeletons kill you',
      'Move from ground effects',
      'Tremor helps raid with fears'
    ],
    'nightbane-rogue-combat': [
      'Position at boss side near rear leg',
      'Vanish if you pull skeleton aggro',
      'Cloak of Shadows can avoid some mechanics',
      'Move from Charred Earth instantly',
      'Switch to Skeletons during air phase'
    ],

    // Enhancement Shaman - All Bosses
    'attumen-shaman-enhancement': [
      'Drop Windfury Totem + Strength of Earth for your melee group',
      'Grace of Air optional if you can totem twist',
      'DPS Midnight first, wait for tank threat when Attumen spawns',
      'Stormstrike on cooldown during burn phases',
      'Stay behind boss to avoid Shadow Cleave'
    ],
    'moroes-shaman-enhancement': [
      'Drop Poison Cleansing Totem in melee range - removes Blind',
      'Tremor Totem not needed (no fear mechanic)',
      'Help DPS priority kill targets',
      'Stay on Moroes after adds die - Garrote unavoidable',
      'Use Shamanistic Rage for mana if fight runs long'
    ],
    'maiden-shaman-enhancement': [
      'Stack with raid in melee behind boss',
      'Repentance stuns entire raid - no actions possible',
      'Drop totems before Repentance if timing allows',
      'Holy Fire is a magic debuff but only healers can dispel it',
      'Burn hard between Repentance casts'
    ],
    'opera-shaman-enhancement': [
      'Fight varies (Big Bad Wolf, Romulo & Julianne, or Wizard of Oz)',
      'Wolf: If marked as Little Red Riding Hood, run to edges',
      'Wolf: Tremor Totem breaks Terrifying Howl fear',
      'Romulo & Julianne: Stay on assigned target',
      'Wizard: Kill Dorothee\'s Tito first, then focus bosses in order'
    ],
    'curator-shaman-enhancement': [
      'Drop all DPS totems and maintain throughout',
      'Swap to Astral Flares immediately when they spawn',
      'Flares spawn every 10 seconds - must die fast',
      'Burn Curator hard during his Evocation phase (takes triple damage)',
      'Use Bloodlust/Heroism during Evocation window'
    ],
    'shade-shaman-enhancement': [
      'Position in melee range but prepared to move',
      'DO NOT MOVE during Flame Wreath cast or raid wipes',
      'Run away from center during Arcane Explosion',
      'Kill Water Elementals at 40% health immediately',
      'Drop totems when safe between mechanics'
    ],
    'illhoof-shaman-enhancement': [
      'DPS Terestian normally',
      'Kill Demon Chains on raid members ASAP',
      'Sacrifice spawns - tank kites them, you help DPS',
      'Drop Tremor Totem for Fear cast',
      'Burn Illhoof when demons under control'
    ],
    'netherspite-shaman-enhancement': [
      'Melee during Ground Phase only',
      'Run to back of room during Banish Phase - heavy raid damage',
      'Move out of Void Zones immediately',
      'DPS in short bursts during Ground Phase',
      'Let beam soakers do their job, focus on boss'
    ],
    'chess-shaman-enhancement': [
      'Control a piece (usually Rook or Knight)',
      'No traditional DPS role - it\'s a chess game',
      'Rook: Stay back and heal friendly pieces',
      'Knight: Move forward and damage enemy pieces',
      'Follow raid leader\'s calls for movements'
    ],
    'prince-shaman-enhancement': [
      'DPS Prince throughout fight',
      'Run from Shadow Nova (purple circle)',
      'Avoid Infernal landing zones',
      'Phase 2 (60%) hits harder - use defensives if needed',
      'Long fight - pace yourself and conserve mana'
    ],
    'nightbane-shaman-enhancement': [
      'Drop Tremor Totem in melee for Bellowing Roar fear breaks',
      'Position at side of boss with other melee',
      'Switch to Restless Skeletons during air phase',
      'Move from Charred Earth immediately',
      'Drop totems between air phases when safe'
    ],
  };

  const selectedClassData = classes.find(c => c.id === selectedClass);
  const availableSpecs = selectedClassData ? selectedClassData.specs : [];

  const getSpecName = (spec) => {
    return typeof spec === 'string' ? spec : spec.name;
  };

  const getSpecIcon = (spec) => {
    if (typeof spec === 'string') return null;
    return spec.icon;
  };

  const tipsKey = `${selectedBoss}-${selectedClass}-${selectedSpec.toLowerCase().replace(' ', '')}`;
  const tips = tipsData[tipsKey] || [];

  const handleReset = () => {
    setSelectedBoss('');
    setSelectedClass('');
    setSelectedSpec('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=BBH+Bartle:wght@400;700&display=swap');
      `}</style>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-2xl p-6 border border-purple-900">
          <h1 className="text-3xl font-bold text-center mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-400" style={{ fontFamily: "'BBH Bartle', serif", WebkitTextStroke: '0.25px white' }}>
            Karazhan Boss Guide
          </h1>
          <p className="text-center text-gray-400 mb-6 text-sm">TBC Anniversary</p>

          <div className="space-y-4">
            {/* Class Selection */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2 text-sm">Select Class</label>
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setSelectedSpec('');
                }}
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Choose a class...</option>
                {classes.map(cls => (
                  <option key={cls.id} value={cls.id}>{cls.name}</option>
                ))}
              </select>
            </div>

            {/* Spec Selection */}
            {selectedClass && (
              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm">Select Spec</label>
                <select
                  value={selectedSpec}
                  onChange={(e) => setSelectedSpec(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="">Choose a spec...</option>
                  {availableSpecs.map((spec, index) => {
                    const specName = getSpecName(spec);
                    const icon = getSpecIcon(spec);
                    return (
                      <option key={index} value={specName}>
                        {specName} {icon === 'snowflake' ? '❄️' : icon === 'flame' ? '🔥' : ''}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

            {/* Boss Selection - only show after spec is selected */}
            {selectedClass && selectedSpec && (
              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm">Select Boss</label>
                <select
                  value={selectedBoss}
                  onChange={(e) => setSelectedBoss(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="">Choose a boss...</option>
                  {raidData.bosses.map(boss => (
                    <option key={boss.id} value={boss.id}>{boss.name}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Tips Display */}
            {selectedBoss && selectedClass && selectedSpec && (
              <div className="mt-6 bg-black bg-opacity-60 border border-purple-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-purple-400">
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
                    className="bg-purple-700 hover:bg-purple-600 text-white px-3 py-1 rounded-lg transition-colors text-sm"
                  >
                    Reset
                  </button>
                </div>
                <p className="text-gray-400 text-sm mb-3">{selectedClassData?.name} - {selectedSpec}</p>

                {tips.length > 0 ? (
                  <div className="space-y-2">
                    {tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-2 bg-gray-950 bg-opacity-60 p-3 rounded-lg border border-gray-800">
                        <AlertCircle className="text-purple-500 flex-shrink-0 mt-0.5" size={16} />
                        <p className="text-gray-200 text-sm">{tip}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-400">
                      No tips available yet for this combination.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Tips coming soon as we gather more data!
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Instructions */}
            {!selectedBoss && (
              <div className="mt-6 bg-gray-950 bg-opacity-60 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-400 text-sm text-center">
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