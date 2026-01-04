// Concise tips based on real TBC Karazhan data
export const tipsData = {
  // Attumen the Huntsman
  'attumen': {
    'warrior': {
      'arms': [
        'DPS Midnight first, stop DPS when Attumen spawns until tank has threat',
        'Use Mortal Strike on cooldown to reduce boss healing',
        'Spam Execute below 20% when they merge',
        'Stand behind boss to avoid Shadow Cleave',
        'Save cooldowns for merged phase burn'
      ],
      'fury': [
        'DPS Midnight, cleave Attumen passively with Whirlwind',
        'Wait for tank threat when Attumen spawns',
        'Bloodthirst + Whirlwind rotation on cooldown',
        'Stand behind to avoid Shadow Cleave',
        'Execute spam below 20% on merged boss'
      ],
      'protection': [
        'Tank Midnight phase 1, pick up Attumen when he spawns',
        'Threat resets at 25% merge - rebuild fast',
        'Use Devastate to maintain Sunder stacks',
        'Face away from raid to prevent Cleave',
        'Disarm Attumen to reduce damage'
      ]
    },
    'paladin': {
      'protection': [
        'Tank Midnight phase 1, can tank both if geared',
        'Face away from raid to avoid Shadow Cleave',
        'Decurse Intangible Presence from yourself immediately'
      ],
      'holy': [
        'Don\'t overheal when Attumen spawns or you\'ll pull threat',
        'Decurse Intangible Presence from tanks first, then DPS',
        'Be ready to heal Berserker Charge targets in phase 3'
      ]
    },
    'priest': {
      'holy': [
        'Use Power Word: Shield pre-emptively to avoid being one-shot if you pull threat',
        'Heavy tank healing needed after the merge at 25%',
        'Prep heals for Berserker Charge victims'
      ],
      'shadow': [
        'Stop DPS when Attumen spawns - wait for tank threat',
        'Keep DoTs rolling throughout fight',
        'Stay max range to avoid Charge in phase 3'
      ]
    },
    'mage': {
      'frost': [
        'Frostbolt spam - your main nuke',
        'Summon Water Elemental at pull',
        'Icy Veins during merged burn phase',
        'Cold Snap to reset cooldowns mid-fight',
        'Ice Lance while moving'
      ],
      'fire': [
        'Scorch to 5 stacks, then Fireball spam',
        'Stand at max range to avoid Charge',
        'Combustion during merged burn phase',
        'Fire Blast while moving',
        'Save cooldowns for 25% merge'
      ],
      'arcane': [
        'Arcane Blast spam during burn phases with Arcane Power + Icy Veins',
        'Manage mana with Frostbolt filler rotation (3-4 Frostbolt → 1 Arcane Blast)',
        'Stand at max range to avoid Charge',
        'Save cooldowns for merged phase at 25%',
        'Evocate when mana drops to 20% or between phases'
      ]
    },
    'hunter': {
      'beast mastery': [
        'Misdirect when Attumen spawns at 95%',
        'DPS Midnight first, pet on Midnight',
        'Stand at minimum range to avoid Charge',
        'Pet can help with adds if horses spawn',
        'Use Bestial Wrath during merged burn phase'
      ],
      'marksmanship': [
        'Aimed Shot opener, then steady shot rotation',
        'Misdirect when Attumen spawns',
        'Stay at range to avoid Charge',
        'Use Rapid Fire during burn phase',
        'Readiness to reset cooldowns'
      ],
      'survival': [
        'Lock and Load procs for burst',
        'Explosive Shot on cooldown',
        'Misdirect when Attumen spawns',
        'Black Arrow for DoT damage',
        'Trap Launcher available for utility'
      ]
    },
    'shaman': {
      'elemental': [
        'Drop Wrath of Air and Totem of Wrath for caster group',
        'DPS Midnight first, Attumen second',
        'Lightning Bolt spam as primary damage',
        'Stand at range to avoid Charge',
        'Use Chain Lightning when both targets close together'
      ],
      'enhancement': [
        'Drop Windfury Totem + Strength of Earth for your melee group',
        'Grace of Air optional if you can totem twist',
        'DPS Midnight first, wait for tank threat when Attumen spawns',
        'Stormstrike on cooldown during burn phases',
        'Stay behind boss to avoid Shadow Cleave'
      ],
      'restoration': [
        'Chain Heal excellent for this fight',
        'Remove Intangible Presence curse',
        'Top raid fast after Berserker Charge',
        'Earth Shield on main tank',
        'Heavy tank healing after merge at 25%'
      ]
    },
    'druid': {
      'feral': [
        'Can tank Midnight then switch to DPS after merge',
        'Shapeshift to remove Intangible Presence movement debuff',
        'Use DPS gear if not tanking'
      ],
      'restoration': [
        'Remove Intangible Presence curse from tanks immediately',
        'Keep Renew/HoTs on both tanks',
        'Be ready for random Charge damage'
      ]
    }
  },

  // Maiden of Virtue
  'maiden': {
    'warrior': {
      'arms': [
        'Stack in melee behind boss with raid',
        'You cannot move during Repentance - no actions possible',
        'Holy Fire hurts - use Last Stand if low health',
        'Burn hard between Repentance casts',
        'Execute spam below 20%'
      ],
      'fury': [
        'Stack melee behind boss',
        'Keep Bloodthirst rolling during Repentance downtime',
        'Whirlwind for AoE if adds spawn',
        'Can\'t do anything during Repentance stuns',
        'Burst hard between Repentances'
      ],
      'protection': [
        'Tank with back to wall',
        'Shield Block before every Holy Fire hit',
        'You\'re stunned during Repentance like everyone',
        'Face away to prevent Cleave damage',
        'Use Shield Wall if Holy Fire stacks high'
      ]
    },
    'hunter': {
      'beast mastery': [
        'Stack at range with raid',
        'Pet stays on boss throughout',
        'Can\'t move during Repentance',
        'Mend Pet if she hits your pet with Holy Fire',
        'Burn hard between Repentances'
      ],
      'marksmanship': [
        'Steady shot spam',
        'Can\'t move during Repentance',
        'Aimed Shot when possible',
        'Use Rapid Fire between Repentances',
        'Readiness resets Rapid Fire'
      ],
      'survival': [
        'Explosive Shot spam',
        'Can\'t move during Repentance',
        'Black Arrow for steady damage',
        'Expose Weakness on crits',
        'Use Rapid Fire between stuns'
      ]
    },
    'shaman': {
      'elemental': [
        'Stack at range with raid',
        'Cannot cast during Repentance stun',
        'Chain Lightning if adds spawn',
        'Flame Shock for steady damage',
        'Burn between Repentance casts'
      ],
      'enhancement': [
        'Stack with raid in melee behind boss',
        'Repentance stuns entire raid - no actions possible',
        'Drop totems before Repentance if timing allows',
        'Holy Fire is a magic debuff but only healers can dispel it',
        'Burn hard between Repentance casts'
      ],
      'restoration': [
        'Stack with raid for Chain Heal',
        'Cannot heal during Repentance',
        'Prep Chain Heal after stun ends',
        'Remove Holy Fire if assigned',
        'Riptide between Repentences'
      ]
    }
  },

  // Shade of Aran
  'shade': {
    'warrior': {
      'arms': [
        'Wear DPS gear - boss has no threat table',
        'During Flame Wreath: STOP ALL MOVEMENT',
        'Run away during Arcane Explosion pull',
        'Help tank Water Elementals at 40%',
        'Interrupt Fireball/Frostbolt on rotation'
      ],
      'fury': [
        'Wear DPS gear - no threat table',
        'FREEZE when Flame Wreath cast finishes',
        'Run from center during Arcane Explosion',
        'Burn Water Elementals fast at 40%',
        'Whirlwind when Elementals spawn'
      ],
      'protection': [
        'Wear DPS gear - boss has no threat table',
        'During Flame Wreath: STOP ALL MOVEMENT',
        'Run away during Arcane Explosion pull',
        'Help tank Water Elementals at 40%',
        'Shield Wall if you pull aggro'
      ]
    },
    'paladin': {
      'protection': [
        'Wear DPS gear - no threat table',
        'During Flame Wreath: STOP ALL MOVEMENT',
        'Run away during Arcane Explosion pull',
        'Help tank Water Elementals at 40%',
        'Blessing of Freedom for Arcane Explosion'
      ],
      'holy': [
        'Stand 10+ yards from Aran to avoid Counterspell silence',
        'Dispel Chains of Ice quickly',
        'Top raid off fast after Mass Pyroblast',
        'Heavy healing needed when Water Elementals spawn',
        'Blessing of Freedom for Arcane Explosion'
      ]
    },
    'priest': {
      'holy': [
        'Stand 10+ yards from Aran to avoid Counterspell silence',
        'Dispel Chains of Ice quickly',
        'Top raid off fast after Mass Pyroblast',
        'Heavy healing needed when Water Elementals spawn',
        'Power Word: Shield for Arcane Explosion'
      ],
      'shadow': [
        'Keep DoTs rolling throughout',
        'DO NOT MOVE during Flame Wreath',
        'Help interrupt Fireball/Frostbolt',
        'Burst Water Elementals at 40%',
        'Silence for interrupts'
      ]
    },
    'mage': {
      'frost': [
        'Stand 10+ yards from boss',
        'Let Arcane Missiles go through - interrupt Fireball/Frostbolt',
        'Absolute zero movement during Flame Wreath',
        'Ice Block available for emergencies',
        'Counterspell for interrupts'
      ],
      'fire': [
        'Stand 10+ yards away to avoid Counterspell',
        'FREEZE during Flame Wreath or wipe the raid',
        'Sheep/burn Water Elementals at 40%',
        'Fire Ward for Arcane Missiles',
        'Help with interrupts'
      ]
    },
    'hunter': {
      'beast mastery': [
        'Stand at max range',
        'Snake Trap adds give Aran more targets to cast on',
        'Stay put during Flame Wreath',
        'Kill Water Elementals priority at 40%',
        'Misdirect if tank needs help'
      ],
      'marksmanship': [
        'Stand at max range',
        'Silencing Shot for interrupts',
        'Stay put during Flame Wreath',
        'Kill Water Elementals priority at 40%',
        'Aimed Shot during burn phases'
      ],
      'survival': [
        'Stand at max range',
        'Wyvern Sting for emergency CC',
        'Stay put during Flame Wreath',
        'Kill Water Elementals priority at 40%',
        'Trap for adds if needed'
      ]
    },
    'shaman': {
      'elemental': [
        'Stand 10+ yards from boss to avoid silence',
        'Chain Lightning when Elementals spawn',
        'DO NOT MOVE during Flame Wreath',
        'Help interrupt Fireball/Frostbolt',
        'Grounding Totem for Arcane Missiles'
      ],
      'enhancement': [
        'Position in melee but prepared to move',
        'DO NOT MOVE during Flame Wreath cast or raid wipes',
        'Run away from center during Arcane Explosion',
        'Kill Water Elementals at 40% health immediately',
        'Windfury Totem for melee'
      ],
      'restoration': [
        'Chain Heal excellent for this fight',
        'Remove Chains of Ice',
        'Top raid fast after Pyroblast',
        'Stay back from boss to avoid silence',
        'Earth Shield on tank'
      ]
    },
    'druid': {
      'feral': [
        'Wear DPS gear - no threat table',
        'DO NOT MOVE during Flame Wreath',
        'Run from center during Arcane Explosion',
        'Help burn Water Elementals at 40%',
        'Berserk for burst damage'
      ],
      'restoration': [
        'Remove Chains of Ice (magic debuff)',
        'Stack HoTs before Mass Pyroblast',
        'Stay 10+ yards from boss',
        'Massive healing when Elementals spawn',
        'Bear form if you pull aggro'
      ]
    }
  },

  // Curator
  'curator': {
    'warrior': {
      'arms': [
        'Kill Astral Flares immediately when they spawn',
        'DPS Curator hard during Evocation (triple damage)',
        'Use Mortal Strike on cooldown',
        'Execute below 20%',
        'Save cooldowns for Evocation phase'
      ],
      'fury': [
        'Swap to Flares instantly when they spawn',
        'Whirlwind when multiple Flares are up',
        'Bloodthirst on Curator between Flares',
        'Execute below 20%',
        'Use Death Wish during Evocation'
      ],
      'protection': [
        'Tank Curator, use Shield Block on cooldown',
        'Taunt Flares off healers if needed',
        'Keep Sunder Armor up',
        'Use Shield Wall during Evocation',
        'Watch for Hateful Bolts on off-tank'
      ]
    },
    'paladin': {
      'protection': [
        'Tank Curator with back to wall',
        'Use Holy Shield on cooldown',
        'Righteous Fury for threat on Flares',
        'Blessing of Protection during emergencies',
        'Consecrate for add pickup'
      ],
      'holy': [
        'Prepare for Hateful Bolt on off-tank',
        'Heal through constant raid damage',
        'Top everyone before Flare spawns',
        'Big heals during Evocation damage spike',
        'Cleanse magic debuffs if needed'
      ]
    },
    'priest': {
      'holy': [
        'Prepare for Hateful Bolt on off-tank',
        'Heal through constant raid damage',
        'Top everyone before Flare spawns',
        'Big heals during Evocation damage spike',
        'Power Word: Shield on off-tank'
      ],
      'shadow': [
        'DPS Curator between Flares',
        'Swap to Astral Flares immediately',
        'Mind Blast on cooldown',
        'Shadow Word: Death below 20%',
        'Help with interrupts if needed'
      ]
    },
    'mage': {
      'frost': [
        'Flares are priority - switch DPS instantly',
        'Frostbolt spam on Curator between Flares',
        'Use Icy Veins during his Evocation',
        'Ice Block if you pull aggro',
        'Counterspell for Arcane Volleys'
      ],
      'fire': [
        'Kill Astral Flares immediately when they spawn',
        'Fireball/Fire Blast spam on Curator',
        'Use Arcane Power during Evocation',
        'Combustion for burst',
        'Scorch for debuff'
      ]
    },
    'hunter': {
      'beast mastery': [
        'Swap to Flares instantly',
        'Multi-Shot to help with Flare spawns',
        'Misdirect back to tank after Flares',
        'Use all cooldowns during Evocation',
        'Pet can help tank Flares briefly'
      ],
      'marksmanship': [
        'Aimed Shot on Curator between Flares',
        'Multi-Shot Flares when they spawn',
        'Rapid Fire during Evocation',
        'Readiness for second burn phase',
        'Silencing Shot for interrupts'
      ],
      'survival': [
        'Explosive Shot on Flares for priority',
        'Black Arrow on Curator',
        'Lock and Load procs on Flares',
        'Trap Flares if needed',
        'Expose Weakness maintained'
      ]
    },
    'shaman': {
      'elemental': [
        'Time Curse of Doom to land during Evocation',
        'Kill Flares fast or chain damage wipes raid',
        'Burn phase during his Evocation',
        'Lightning Bolt on Curator between Flares',
        'Chain Lightning when Flares spawn'
      ],
      'enhancement': [
        'Drop all DPS totems and maintain throughout',
        'Swap to Astral Flares immediately when they spawn',
        'Flares spawn every 10 seconds - must die fast',
        'Burn Curator hard during his Evocation phase (takes triple damage)',
        'Use Bloodlust/Heroism during Evocation window'
      ],
      'restoration': [
        'Chain Heal through constant raid damage',
        'Earth Shield on tank',
        'Heal Hateful Bolt targets',
        'Riptide on tank',
        'Mana Tide during Evocation phase'
      ]
    },
    'druid': {
      'feral': [
        'DPS Curator between Flares',
        'Swipe/Maul on Flares when they spawn',
        'Use Ferocious Bite on Curator',
        'Bear form if you pull aggro',
        'Barkskin during emergencies'
      ],
      'restoration': [
        'Heal through constant raid damage',
        'Lifebloom on tank before Hateful Bolts',
        'Rejuvenation on raid',
        'Tranquility during heavy damage',
        'Innervate during Evocation'
      ]
    }
  },

  // Moroes
  'moroes': {
    'warrior': {
      'arms': [
        'Assigned to DPS priority kill targets - follow raid leader',
        'Mortal Strike reduces healer add healing output',
        'Use Sweeping Strikes when adds are stacked',
        'Thunder Clap helps with add threat management',
        'Be ready to help offtank if needed'
      ],
      'fury': [
        'Follow kill priority on adds',
        'Whirlwind cleaves multiple adds',
        'Maintain Battle Shout throughout fight',
        'Help burn Moroes after adds die',
        'Garrote bleed is unavoidable - just heal through'
      ],
      'protection': [
        'Main tank Moroes or offtank add',
        'Use Shield Block on cooldown',
        'Taunt adds off healers if needed',
        'Garrote bleeds stack - use Last Stand if needed',
        'Keep Sunder Armor up'
      ]
    },
    'hunter': {
      'beast mastery': [
        'Assigned to trap add with Freezing Trap',
        'Re-trap when it breaks',
        'Send pet to priority kill target',
        'Misdirect pulls if needed',
        'Kill Command on cooldown'
      ],
      'marksmanship': [
        'Trap assigned add',
        'Aimed Shot on priority target',
        'Steady shot spam on Moroes',
        'Use Rapid Fire for burst',
        'Silencing Shot for interrupts if needed'
      ],
      'survival': [
        'Trap assigned add',
        'Explosive Shot on priority target',
        'Lock and Load procs',
        'Black Arrow on Moroes',
        'Expose Weakness on crits'
      ]
    },
    'shaman': {
      'elemental': [
        'Focus fire on priority kill targets',
        'Drop Tremor Totem if needed (no fear this fight)',
        'Chain Lightning when adds are grouped',
        'Keep Flame Shock rolling on Moroes',
        'Use elemental totems for caster DPS boost'
      ],
      'enhancement': [
        'Drop Poison Cleansing Totem in melee range - removes Blind',
        'Tremor Totem not needed (no fear mechanic)',
        'Help DPS priority kill targets',
        'Stay on Moroes after adds die - Garrote unavoidable',
        'Use Shamanistic Rage for mana if fight runs long'
      ],
      'restoration': [
        'Drop Poison Cleansing Totem in melee',
        'Chain Heal through Garrote bleeds',
        'Remove curses on cooldown',
        'Riptide on tanks',
        'Massive healing when adds active'
      ]
    },
    'priest': {
      'holy': [
        'Shackle Undead on assigned add',
        'Keep shackle up entire fight',
        'Heal through Moroes Garrote bleeds',
        'Decurse on cooldown'
      ]
    },
    'mage': {
      'arcane': [
        'Sheep assigned add if needed',
        'Arcane Blast on priority kill targets',
        'Watch threat - Improved Scorch helps but manage carefully',
        'Remove Curse of Doom with Remove Lesser Curse',
        'Long fight - use mana conservation rotation'
      ],
      'fire': [
        'Maintain Scorch stacks on Moroes',
        'Fireball spam on priority targets',
        'Blast Wave if adds are grouped',
        'Remove curses as assigned',
        'Dragon\'s Breath for extra AoE burst'
      ],
      'frost': [
        'Sheep assigned add',
        'Frostbolt spam on Moroes',
        'Water Elemental adds consistent DPS',
        'Maintain Winter\'s Chill debuff',
        'Ice Block if you pull threat'
      ]
    }
  },

  // Opera Event
  'opera': {
    'warrior': {
      'arms': [
        'If marked Red Riding Hood, kite along room edges',
        'Use Berserker Rage to break fear from Terrifying Howl',
        'Sweeping Strikes on wolf if adds spawn',
        'Stop DPS if tank is stunned by Wide Swipe',
        'Execute below 20%'
      ],
      'fury': [
        'Normal Bloodthirst + Whirlwind rotation',
        'If Red Riding Hood marked, run to edges',
        'Fear Ward helps or use PvP trinket for Howl',
        'Execute below 20%',
        'Maintain Battle Shout'
      ],
      'protection': [
        'Tank wolf normally',
        'If you get Red Riding Hood, run to edges',
        'Use Shield Block on cooldown',
        'Taunt if off-tank gets Little Red',
        'Face away from raid'
      ]
    },
    'hunter': {
      'beast mastery': [
        'If Red Riding Hood, kite with Disengage',
        'Mend Pet if wolf targets your pet',
        'Multi-Shot if adds spawn',
        'Bestial Wrath during Bloodlust',
        'Snake Trap to give wolf extra targets'
      ],
      'marksmanship': [
        'If Red Riding Hood, kite with Disengage',
        'Steady shot rotation',
        'Multi-Shot if adds spawn',
        'Aimed Shot for burst',
        'Use Rapid Fire during Bloodlust'
      ],
      'survival': [
        'If Red Riding Hood, kite with traps',
        'Explosive Shot on cooldown',
        'Lock and Load during add phases',
        'Black Arrow on wolf',
        'Expose Weakness up at all times'
      ]
    },
    'shaman': {
      'elemental': [
        'Wolf: Stand at range, Chain Lightning if adds',
        'Wolf: Drop Tremor for Terrifying Howl fear',
        'If Little Red, kite and keep casting',
        'Romulo & Julianne: Focus assigned target',
        'Wizard: Lightning Bolt spam, burn priority targets'
      ],
      'enhancement': [
        'Fight varies (Big Bad Wolf, Romulo & Julianne, or Wizard of Oz)',
        'Wolf: If marked as Little Red Riding Hood, run to edges',
        'Wolf: Tremor Totem breaks Terrifying Howl fear',
        'Romulo & Julianne: Stay on assigned target',
        'Wizard: Kill Dorothee\'s Tito first, then focus bosses in order'
      ],
      'restoration': [
        'Wolf: Chain Heal for fear damage',
        'Drop Tremor for Terrifying Howl',
        'Romulo & Julianne: Heal through bleeds',
        'Wizard: Chain Heal AoE damage'
      ]
    }
  },

  // Terestian Illhoof
  'illhoof': {
    'warrior': {
      'arms': [
        'DPS Terestian normally',
        'Swap to Demon Chains on trapped players ASAP',
        'Kill Sacrifice demons when they spawn',
        'Use Sweeping Strikes when demons spawn',
        'Burst boss when adds are under control'
      ],
      'fury': [
        'Bloodthirst on Illhoof on cooldown',
        'Swap to Demon Chains immediately',
        'Whirlwind when demons spawn',
        'Execute Sacrifice demons quickly',
        'Maintain Battle Shout'
      ],
      'protection': [
        'Tank Terestian center of room',
        'Taunt Sacrifice demons or have offtank grab them',
        'Use Shield Block on cooldown',
        'Disarm if possible',
        'Don\'t stand in green portal circles'
      ]
    },
    'hunter': {
      'beast mastery': [
        'Pet on Terestian',
        'Swap to Demon Chains immediately',
        'Multi-Shot when demons spawn',
        'Pet can help tank Sacrifice demons briefly',
        'Mend Pet throughout fight'
      ],
      'marksmanship': [
        'Steady shot on Illhoof',
        'Swap to Chains immediately',
        'Multi-Shot when demons spawn',
        'Aimed Shot for burst',
        'Use Rapid Fire wisely'
      ],
      'survival': [
        'Explosive Shot on Illhoof',
        'Swap to Chains fast',
        'Lock and Load on demons',
        'Black Arrow for steady damage',
        'Trap for adds if needed'
      ]
    },
    'shaman': {
      'elemental': [
        'Lightning Bolt on Illhoof',
        'Swap to Demon Chains fast',
        'Chain Lightning when demons spawn',
        'Drop Tremor for Fear cast',
        'Focus fire priority targets'
      ],
      'enhancement': [
        'DPS Terestian normally',
        'Kill Demon Chains on raid members ASAP',
        'Sacrifice spawns - tank kites them, you help DPS',
        'Drop Tremor Totem for Fear cast',
        'Burn Illhoof when demons under control'
      ],
      'restoration': [
        'Heal Demon Chains targets',
        'Chain Heal through raid damage',
        'Drop Tremor for Fear',
        'Earth Shield on tank',
        'Riptide on priority targets'
      ]
    }
  },

  // Netherspite
  'netherspite': {
    'warrior': {
      'arms': [
        'Melee during Ground Phase only',
        'Run to back during Banish Phase',
        'Move out of Void Zones instantly',
        'Short burn windows - use cooldowns wisely',
        'Don\'t stand in beams unless assigned'
      ],
      'fury': [
        'Melee during Ground Phase',
        'Run away during Banish Phase',
        'Move from Void Zones',
        'Bloodthirst + Whirlwind when in range',
        'Avoid assigned beam positions'
      ],
      'protection': [
        'Can soak Red beam (Perseverance) for defense buff',
        'Rotate out when stacks get high',
        'Run to back during Banish Phase',
        'Tank during Ground Phase only',
        'Move from Void Zones'
      ]
    },
    'hunter': {
      'beast mastery': [
        'DPS during Ground Phase',
        'Pull pet back during Banish Phase',
        'Can soak Blue beam if assigned',
        'Move from Void Zones',
        'Keep pet alive - he takes raid damage'
      ],
      'marksmanship': [
        'Steady shot during Ground Phase',
        'Pull back during Banish Phase',
        'Can soak Blue beam if assigned',
        'Multi-Shot if multiple targets',
        'Move from Void Zones'
      ],
      'survival': [
        'Explosive Shot during Ground Phase',
        'Pull back during Banish Phase',
        'Can soak Blue beam if assigned',
        'Lock and Load when available',
        'Move from Void Zones'
      ]
    },
    'shaman': {
      'elemental': [
        'Can soak Blue beam if assigned',
        'DPS during Ground Phase only',
        'Pull back during Banish Phase',
        'Move from Void Zones',
        'Chain Lightning if adds spawn'
      ],
      'enhancement': [
        'Melee during Ground Phase only',
        'Run to back of room during Banish Phase - heavy raid damage',
        'Move out of Void Zones immediately',
        'DPS in short bursts during Ground Phase',
        'Let beam soakers do their job, focus on boss'
      ],
      'restoration': [
        'Can soak Green beam for healing boost',
        'Massive healing during Banish Phase',
        'Chain Heal constantly',
        'Rotate beam assignments',
        'Move from Void Zones'
      ]
    }
  },

  // Chess Event
  'chess': {
    'warrior': {
      'arms': [
        'Control a melee piece (Knight or King)',
        'No traditional DPS - follow raid leader commands',
        'Use piece abilities to damage enemy pieces',
        'Position to protect your King',
        'This is a puzzle not a DPS race'
      ],
      'fury': [
        'Control a melee piece',
        'No DPS rotation - it\'s chess mechanics',
        'Follow raid leader positioning',
        'Use piece abilities on enemy pieces',
        'Protect your King'
      ],
      'protection': [
        'Control King piece if assigned',
        'Protect King at all costs',
        'Follow raid leader calls',
        'No traditional tanking',
        'Use King abilities strategically'
      ]
    },
    'hunter': {
      'beast mastery': [
        'Control Rook or Knight piece',
        'No DPS rotation - it\'s chess',
        'Follow raid leader',
        'Use piece abilities',
        'Dismiss pet for this fight'
      ],
      'marksmanship': [
        'Control a piece',
        'No hunter rotation',
        'Follow raid leader',
        'Dismiss pet',
        'Use piece abilities'
      ],
      'survival': [
        'Control a piece',
        'No DPS rotation',
        'Dismiss pet',
        'Follow raid leader',
        'Use piece abilities'
      ]
    },
    'shaman': {
      'elemental': [
        'Control a piece',
        'No elemental rotation',
        'Follow raid leader',
        'Use piece abilities',
        'Dismiss totems for this fight'
      ],
      'enhancement': [
        'Control a piece (usually Rook or Knight)',
        'No traditional DPS role - it\'s a chess game',
        'Rook: Stay back and heal friendly pieces',
        'Knight: Move forward and damage enemy pieces',
        'Follow raid leader\'s calls for movements'
      ],
      'restoration': [
        'Control Rook piece',
        'Heal friendly pieces',
        'Follow raid leader',
        'No traditional healing rotation',
        'Use piece abilities'
      ]
    }
  },

  // Prince Malchezaar
  'prince': {
    'warrior': {
      'arms': [
        'DPS throughout fight',
        'Run from Shadow Nova purple circle',
        'Avoid Infernal landing zones',
        'Use defensives in Phase 2 (60%)',
        'Long fight - conserve rage'
      ],
      'fury': [
        'Bloodthirst + Whirlwind throughout',
        'Move from Shadow Nova circle',
        'Watch for Infernal spawns',
        'Phase 2 damage increase at 60%',
        'Execute below 20%'
      ],
      'protection': [
        'Tank with back to wall to minimize Infernal spawns hitting raid',
        'Use Shield Block on cooldown',
        'Phase 2 hits much harder - use Shield Wall',
        'Don\'t get hit by Enfeeble at low health',
        'Move from Shadow Nova'
      ]
    },
    'hunter': {
      'beast mastery': [
        'Stand at max range',
        'Run from Shadow Nova',
        'Avoid Infernal landing zones',
        'Misdirect if tank loses threat',
        'Long fight - manage mana with Viper'
      ],
      'marksmanship': [
        'Steady shot spam',
        'Run from Shadow Nova',
        'Avoid Infernals',
        'Use Rapid Fire on cooldown',
        'Readiness for second burn'
      ],
      'survival': [
        'Explosive Shot spam',
        'Run from Shadow Nova',
        'Avoid Infernal spawns',
        'Lock and Load procs',
        'Expose Weakness maintained'
      ]
    },
    'shaman': {
      'elemental': [
        'Lightning Bolt spam throughout',
        'Run from Shadow Nova',
        'Avoid Infernal spawns',
        'Long fight - manage mana',
        'Drop totems for caster group'
      ],
      'enhancement': [
        'DPS Prince throughout fight',
        'Run from Shadow Nova (purple circle)',
        'Avoid Infernal landing zones',
        'Phase 2 (60%) hits harder - use defensives if needed',
        'Long fight - pace yourself and conserve mana'
      ],
      'restoration': [
        'Chain Heal through constant damage',
        'Top targets before Enfeeble',
        'Remove Shadow Word: Pain if assigned',
        'Run from Shadow Nova',
        'Long fight - manage mana with water'
      ]
    }
  },

  // Nightbane
  'nightbane': {
    'warrior': {
      'arms': [
        'Position at boss side near rear legs, not directly behind (Tail Sweep)',
        'Stay close to Tremor Totem for fear breaks',
        'Switch to Restless Skeletons during air phase',
        'Move away from Charred Earth instantly',
        'Watch threat - he\'s not tauntable'
      ],
      'fury': [
        'Stack with other melee at side/rear leg position',
        'Tremor Totem breaks fear if you get caught',
        'Burn Skeletons fast in air phase',
        'Avoid Charred Earth ground fire',
        'Careful on threat - no taunt available'
      ],
      'protection': [
        'Tank with back to balcony edge, face boss away from raid',
        'Stance dance or use Berserker Rage to avoid Bellowing Roar fear',
        'Pick up all 5 Restless Skeletons during air phase',
        'Build rage before he lands to regain threat fast',
        'Move out of Charred Earth ground effect immediately'
      ]
    },
    'hunter': {
      'beast mastery': [
        'Stand at max range to avoid fear',
        'Multi-Shot the 5 Skeletons during air phase',
        'Misdirect to tank when Nightbane lands',
        'Move from Charred Earth and Rain of Bones',
        'Pet can help tank skeletons briefly'
      ],
      'marksmanship': [
        'Max range to avoid Bellowing Roar',
        'Volley the skeleton pack carefully',
        'Misdirect on landing to help tank',
        'Snake Trap can distract skeletons briefly',
        'Move out of ground fire immediately'
      ],
      'survival': [
        'Max range to avoid fear',
        'Multi-Shot the 5 Skeletons during air phase',
        'Misdirect to tank when Nightbane lands',
        'Move from Charred Earth and Rain of Bones',
        'Pet can help tank skeletons briefly'
      ]
    },
    'shaman': {
      'elemental': [
        'Max range to avoid fear',
        'Chain Lightning the Skeleton pack',
        'Watch threat on AoE or skeletons kill you',
        'Move from ground effects',
        'Tremor helps raid with fears'
      ],
      'enhancement': [
        'Drop Tremor Totem in melee for Bellowing Roar fear breaks',
        'Position at side of boss with other melee',
        'Switch to Restless Skeletons during air phase',
        'Move from Charred Earth immediately',
        'Drop totems between air phases when safe'
      ],
      'restoration': [
        'Drop Tremor Totem near melee for fear breaks',
        'Chain Heal excellent for this fight',
        'Dispel Distracting Ash fast',
        'Focus Smoking Blast victim during air phase',
        'Earth Shield on tank'
      ]
    }
  }
};
