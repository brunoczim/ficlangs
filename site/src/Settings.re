type t = {
  showOrthography: bool,
  showRomanization: bool,
  showBroad: bool,
  showNarrow: bool,
  showLiteral: bool,
  showAttributes: bool,
  showTranslation: bool,
};

let defaultSettings = {
  showOrthography: true,
  showRomanization: false,
  showBroad: false,
  showNarrow: false,
  showLiteral: false,
  showAttributes: false,
  showTranslation: false,
};

let setShowOrthography = (showOrthography, settings) => {
  ...settings,
  showOrthography,
};
let setShowRomanization = (showRomanization, settings) => {
  ...settings,
  showRomanization,
};
let setShowBroad = (showBroad, settings) => {...settings, showBroad};
let setShowNarrow = (showNarrow, settings) => {...settings, showNarrow};
let setShowLiteral = (showLiteral, settings) => {...settings, showLiteral};
let setShowAttributes = (showAttributes, settings) => {
  ...settings,
  showAttributes,
};
let setShowTranslation = (showTranslation, settings) => {
  ...settings,
  showTranslation,
};

let showOrthography = settings => settings.showOrthography;
let showRomanization = settings => settings.showRomanization;
let showBroad = settings => settings.showBroad;
let showNarrow = settings => settings.showNarrow;
let showLiteral = settings => settings.showLiteral;
let showAttributes = settings => settings.showAttributes;
let showTranslation = settings => settings.showTranslation;
