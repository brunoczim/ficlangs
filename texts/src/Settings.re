type t = {
  showOrthography: bool,
  showRomanization: bool,
  showBroad: bool,
  showNarrow: bool,
  showTranslation: bool,
  showAttributes: bool,
};

let defaultSettings = {
  showOrthography: true,
  showRomanization: false,
  showBroad: false,
  showNarrow: false,
  showTranslation: false,
  showAttributes: false,
};

let setShowOrthography = (showOrthography, settings) => {
  ...settings,
  showOrthography,
};
let setShowRomanization = (showRomanization, settings) => {
  ...settings,
  showRomanization,
};
let setShowBroad = (showBroad, settings) => {
  ...settings,
  showBroad,
};
let setShowNarrow = (showNarrow, settings) => {...settings, showNarrow};
let setShowTranslation = (showTranslation, settings) => {
  ...settings,
  showTranslation,
};
let setShowAttributes = (showAttributes, settings) => {
  ...settings,
  showAttributes,
};

let showOrthography = settings => settings.showOrthography;
let showRomanization = settings => settings.showRomanization;
let showBroad = settings => settings.showBroad;
let showNarrow = settings => settings.showNarrow;
let showTranslation = settings => settings.showTranslation;
let showAttributes = settings => settings.showAttributes;
