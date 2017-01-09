var MESSAGES_EN = {
  LOGIN_BUTTON: "Enter Code",

  // getToken
  ENTER_USER_TOKEN: "If you have an EnglishON user token, paste it here",
  SUBMIT_WITH_TOKEN: "I have a token",
  ERROR_INVALID_TOKEN: "Invalid user token",
  ERROR_CREATING_TOKEN: "Failed to login as guest",
  AGREE_TO_TOS: "By logging in you agree to our ",
  TOS_LINK: "Terms of Service",
  CLOSE_TOS: "Close",

  ERROR_CONNECTING: "There was an error connecting to EnglishON, please contact support@englishon.org",

  ENABLE: "Enable EnglishON",
  DISABLE: "Disable EnglishON",

  WRONG_KEYBOARD_LAYOUT: "Please switch keyboard layout.",
  WRONG_KEYBOARD_LAYOUT_HINT: "Alt + Shift",
  LOGGED_IN_AS: "Logged in as",
  LOGGED_OUT: "You are not logged in.",
  LOGOUT: "Log out",
  LOGIN_AS: "Log in as:",

  EN: "English",
  ES: "Spanish",
  FR: "French",
  ZH: "Chinese",
};
// Until we have real RTL, it's important not to finish sentences with periods, because they'll align wrong
var MESSAGES_HE = {
  LOGIN_BUTTON: "הכנס קוד",

  // getToken
  ENTER_USER_TOKEN: "אם יש לך קוד משתמש של אינגלישון, הדבק אותו כאן",
  SUBMIT_WITH_TOKEN: "יש לי קוד",
  ERROR_INVALID_TOKEN: "קוד שגוי",
  ERROR_CREATING_TOKEN: "שגיאה בהתחברות כאורח",
  AGREE_TO_TOS: "על ידי התחברות את\\ה מסכימ\\ה ל",
  TOS_LINK: "תנאי השימוש",
  CLOSE_TOS: "סגור",

  ERROR_CONNECTING: "הייתה שגיאה בהתחברות לאינגלישון, אם זה קורה שוב דווח בבקשה לsupport@englishon.org",

  ENABLE: "הדלק את אינגלישון",
  DISABLE: "כבה את אינגלישון",

  WRONG_KEYBOARD_LAYOUT: "החלף את שפת המקלדת",
  WRONG_KEYBOARD_LAYOUT_HINT: "Alt + Shift",
  LOGGED_IN_AS: "מחובר בתור",
  LOGGED_OUT: "אינך מחובר",
  LOGOUT: "התנתק",
  LOGIN_AS: "התחבר בתור:",

  EN: "אנגלית",
  ES: "ספרדית",
  FR: "צרפתית",
  ZH: "סינית",
};
var RTL = 'rtl', LTR = 'ltr';
var WEBSITE_I18N = {
  'www.bhol.co.il': {
    MESSAGES: MESSAGES_HE,
    DIRECTION: RTL,
    DEFAULT_TARGET_LANGUAGE: 'en',
  },
  'www.bloombergview.com': {
    MESSAGES: MESSAGES_EN,
    DIRECTION: LTR,
    DEFAULT_TARGET_LANGUAGE: 'fr',
  },
  'shturem.net': {
    MESSAGES: MESSAGES_HE,
    DIRECTION: RTL,
    DEFAULT_TARGET_LANGUAGE: 'en',
  },  
  'www.shturem.net': {
    MESSAGES: MESSAGES_HE,
    DIRECTION: RTL,
    DEFAULT_TARGET_LANGUAGE: 'en',
  },
};
var I18N = WEBSITE_I18N[location.hostname];
var MESSAGES = I18N.MESSAGES;
