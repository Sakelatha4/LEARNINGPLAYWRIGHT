// ============================================
// JavaScript Identifier Examples
// ============================================

// --- Valid Identifiers ---

// Starts with a letter
let name = "Alice";
let Name = "Bob";     // case-sensitive: different from 'name'
let _name = "Carol";  // starts with underscore
let $name = "Dave";   // starts with dollar sign
let name1 = "Eve";    // contains a digit after the first char
let firstName = "Frank"; // camelCase convention
let π = 3.14159;      // Unicode letter
let 变量 = "value";    // Unicode letters (Chinese)
let MAX_COUNT = 100;  // uppercase with underscore (common constant style)
let $ = "jquery";
let _ = "lodash";

// --- Invalid Identifiers (will cause SyntaxError if uncommented) ---

// let 1name = "invalid";      // Error: cannot start with a digit
// let first-name = "invalid"; // Error: hyphen is not allowed
// let first name = "invalid"; // Error: space is not allowed
// let @name = "invalid";      // Error: special character not allowed
// let #name = "invalid";      // Error: special character not allowed
// let var = "invalid";        // Error: reserved keyword
// let let = "invalid";        // Error: reserved keyword
// let const = "invalid";      // Error: reserved keyword
// let class = "invalid";      // Error: reserved keyword

// --- Case Sensitivity Demonstration ---

let total = 10;
let Total = 20;
let TOTAL = 30;
// All three are distinct variables

// --- Reserved Words (cannot be used as identifiers) ---

// Keywords
// break, case, catch, continue, debugger, default, delete, do, else, finally,
// for, function, if, in, instanceof, new, return, switch, this, throw, try,
// typeof, var, void, while, with

// Strict mode reserved words
// implements, interface, let, package, private, protected, public, static, yield

// Future reserved words
// const, class, enum, export, extends, import, super

// Literals
// true, false, null

// --- Edge Cases ---

// Digits are allowed after the first character
let item2 = "valid";
let item2b = "valid";

// Multiple underscores and dollar signs
let __proto__ = "valid";
let $$ = "valid";
let $2 = "valid";

// Underscore at the end
let name_ = "valid";

// Mixed Unicode and ASCII
let café = "valid";
let naïve = "valid";
let 日本語 = "valid";

// ============================================
// Summary
// ============================================
// Valid: letters, digits (not first), _, $, Unicode letters
// Invalid: starting with digit, spaces, special chars, reserved words
// ============================================
