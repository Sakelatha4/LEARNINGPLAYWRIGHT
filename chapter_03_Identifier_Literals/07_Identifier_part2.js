// ============================================
// JavaScript Identifier Naming Conventions (Cases)
// ============================================

// --- 1. camelCase ---
// First word lowercase, subsequent words capitalized.
// Most common for variables and functions in JavaScript.

let firstName = "Alice";
let myVariableName = "value";
let getUserDetails = "function reference";
let totalScoreCount = 100;

console.log("camelCase examples:");
console.log(firstName);
console.log(myVariableName);
console.log(getUserDetails);
console.log(totalScoreCount);

// --- 2. PascalCase (UpperCamelCase) ---
// Every word starts with a capital letter.
// Commonly used for class names and constructor functions.

let FirstName = "Bob";
let MyVariableName = "another value";
let UserAccountDetails = "class reference";
let TotalScoreCount = 200;

console.log("\nPascalCase examples:");
console.log(FirstName);
console.log(MyVariableName);
console.log(UserAccountDetails);
console.log(TotalScoreCount);

// --- 3. snake_case ---
// All lowercase with underscores between words.
// Less common in JS, but used in some libraries and for readability.

let first_name = "Carol";
let my_variable_name = "snake value";
let get_user_details = "snake function";
let total_score_count = 300;

console.log("\nsnake_case examples:");
console.log(first_name);
console.log(my_variable_name);
console.log(get_user_details);
console.log(total_score_count);

// --- 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE / CONSTANT_CASE) ---
// All uppercase with underscores between words.
// Convention for constants and configuration values.

const MAX_COUNT = 1000;
const FIRST_NAME = "DAVE";
const MY_VARIABLE_NAME = "constant value";
const TOTAL_SCORE_COUNT = 400;
const API_BASE_URL = "https://api.example.com";

console.log("\nSCREAMING_SNAKE_CASE examples:");
console.log(MAX_COUNT);
console.log(FIRST_NAME);
console.log(MY_VARIABLE_NAME);
console.log(TOTAL_SCORE_COUNT);
console.log(API_BASE_URL);

// --- 5. Hungarian Notation ---
// Prefix indicates the type or purpose of the variable.
// Older style, less common in modern JavaScript.

let strName = "Eve";           // string
let nCount = 50;               // number
let bIsActive = true;          // boolean
let arrNames = ["a", "b"];     // array
let elButton = "button element"; // DOM element
let fnCallback = "callback function"; // function

console.log("\nHungarian notation examples:");
console.log(strName);
console.log(nCount);
console.log(bIsActive);
console.log(arrNames);
console.log(elButton);
console.log(fnCallback);

//above 5 cases are most commonly used in JavaScript. The following are additional naming conventions that are less common but still valid and sometimes used in specific contexts.

// --- 6. Single Character Identifiers ---
// Short names, often used in loops or mathematical contexts.

let i = 0;      // common loop counter
let j = 1;      // nested loop counter
let x = 10;     // coordinate / math
let y = 20;     // coordinate / math
let n = 5;      // count

console.log("\nSingle character examples:");
console.log(i);
console.log(j);
console.log(x);
console.log(y);
console.log(n);

// --- 7. Leading Underscore (Private Convention) ---
// Indicates "private" or "internal" by convention.

let _privateVar = "private";
let _internalCount = 60;
let __hiddenValue = "hidden";

console.log("\nLeading underscore examples:");
console.log(_privateVar);
console.log(_internalCount);
console.log(__hiddenValue);

// --- 8. Trailing Underscore ---
// Used to avoid naming conflicts with reserved words.

let class_ = "class value";
let name_ = "name value";
let type_ = "type value";

console.log("\nTrailing underscore examples:");
console.log(class_);
console.log(name_);
console.log(type_);

// --- 9. Dollar Sign Prefix ---
// Common in jQuery and template literals. Also used for special variables.

let $element = "jquery element";
let $$ = "double dollar";
let $2 = "dollar two";
let $name = "dollar name";

console.log("\nDollar sign prefix examples:");
console.log($element);
console.log($$);
console.log($2);
console.log($name);

// --- 10. Double Underscore (Dunder / Magic) ---
// Often used for meta-properties or special system variables.

let __proto__ = "prototype";
let __filename = "filename";
let __dirname = "directory";
let __count__ = 70;

console.log("\nDouble underscore examples:");
console.log(__proto__);
console.log(__filename);
console.log(__dirname);
console.log(__count__);

// --- 11. Abbreviated / Acronym Style ---
// Using abbreviations and acronyms.

let usrID = "user123";
let btnCls = "button class";
let httpReq = "HTTP request";
let xmlDoc = "XML document";
let cssProp = "CSS property";

console.log("\nAbbreviated examples:");
console.log(usrID);
console.log(btnCls);
console.log(httpReq);
console.log(xmlDoc);
console.log(cssProp);

// --- 12. Mixed Number Suffix / Prefix ---
// Using numbers to distinguish versions or counts.

let item1 = "first item";
let item2 = "second item";
let version2 = "v2";
let level3Data = "level 3";

console.log("\nNumber suffix/prefix examples:");
console.log(item1);
console.log(item2);
console.log(version2);
console.log(level3Data);

// --- 13. Unicode Identifiers ---
// Using non-ASCII characters as identifiers.

let π = 3.14159;
let ε = 0.0001;
let 变量 = "Chinese variable";
let 名前 = "Japanese variable";
let café = "café";
let naïve = "naïve";

console.log("\nUnicode identifier examples:");
console.log(π);
console.log(ε);
console.log(变量);
console.log(名前);
console.log(café);
console.log(naïve);

// --- Invalid Cases (will cause SyntaxError if uncommented) ---

// kebab-case is NOT valid in JavaScript identifiers
// let first-name = "invalid";  // hyphen acts as subtraction operator

// Starting with digit is NOT valid
// let 2ndItem = "invalid";

// Space is NOT valid
// let first name = "invalid";

// Special characters are NOT valid (except _ and $)
// let my@name = "invalid";
// let my#name = "invalid";
// let my%name = "invalid";

// Reserved words are NOT valid
// let class = "invalid";
// let function = "invalid";
// let return = "invalid";

// ============================================
// Summary of Naming Conventions
// ============================================
// camelCase        : variables, functions         -> firstName, getUser()
// PascalCase       : classes, constructors        -> Person, MyComponent
// snake_case       : some file names, readability -> file_name, my_var
// SCREAMING_SNAKE  : constants, config            -> MAX_SIZE, API_KEY
// Hungarian        : type indication (legacy)     -> strName, nCount
// Leading _        : private/internal             -> _privateVar
// Trailing _       : avoid reserved words         -> class_, type_
// $ prefix         : jQuery, special vars         -> $element, $$
// __ dunder        : meta, special properties     -> __proto__, __filename
// ============================================
