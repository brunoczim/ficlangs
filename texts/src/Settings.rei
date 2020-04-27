type t;

let defaultSettings: t;

let setShowOrthography: (bool, t) => t;
let setShowRomanization: (bool, t) => t;
let setShowBroad: (bool, t) => t;
let setShowNarrow: (bool, t) => t;
let setShowLiteral: (bool, t) => t;
let setShowAttributes: (bool, t) => t;
let setShowTranslation: (bool, t) => t;

let showOrthography: t => bool;
let showRomanization: t => bool;
let showBroad: t => bool;
let showNarrow: t => bool;
let showLiteral: t => bool;
let showAttributes: t => bool;
let showTranslation: t => bool;
