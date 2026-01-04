// Helper functions for the Karazhan Tips App

export const getSpecName = (spec) => {
  return typeof spec === 'string' ? spec : spec.name;
};

export const getSpecIcon = (spec) => {
  if (typeof spec === 'string') return null;
  return spec.icon;
};

export const getTips = (tipsData, selectedBoss, selectedClass, selectedSpec) => {
  return tipsData[selectedBoss]?.[selectedClass]?.[selectedSpec.toLowerCase().replace(' ', '')] || [];
};
