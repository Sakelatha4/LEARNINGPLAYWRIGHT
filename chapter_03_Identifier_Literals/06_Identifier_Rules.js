// var $=10;
var v=10;
var V=10;
var _a=10;
// var 123=10; invalid
var av123 = 10;
// console.log($);
console.log(v);
console.log(V);
console.log(_a);
// console.log(123);  invalid
console.log(av123);
var latha="latha";
console.log(latha);
// var latha sake = "Latha" ;// invalid

var latha$sake ="latha$sake";
console.log(latha$sake);

// ============================================
// Additional JavaScript Identifier Examples
// ============================================

// --- Valid Identifiers ---

// Starts with a letter
let name = "Alice";
console.log(name);
let Name = "Bob";     // case-sensitive: different from 'name'
console.log(Name);
let _name = "Carol";  // starts with underscore
console.log(_name);
let $name = "Dave";   // starts with dollar sign
console.log($name);
let name1 = "Eve";    // contains a digit after the first char
console.log(name1);
let firstName = "Frank"; // camelCase convention
console.log(firstName);
let π = 3.14159;      // Unicode letter
console.log(π);
let 变量 = "value";    // Unicode letters (Chinese)
console.log(变量);
let MAX_COUNT = 100;  // uppercase with underscore (common constant style)
console.log(MAX_COUNT);
let $ = "jquery";
console.log($);
let _ = "lodash";
console.log(_);

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
console.log(total);
let Total = 20;
console.log(Total);
let TOTAL = 30;
console.log(TOTAL);
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
console.log(item2);
let item2b = "valid";
console.log(item2b);

// Multiple underscores and dollar signs
let __proto__ = "valid";
console.log(__proto__);
let $$ = "valid";
console.log($$);
let $2 = "valid";
console.log($2);

// Underscore at the end
let name_ = "valid";
console.log(name_);

// Mixed Unicode and ASCII
let café = "valid";
console.log(café);
let naïve = "valid";
console.log(naïve);
let 日本語 = "valid";
console.log(日本語);

// ============================================
// Summary
// ============================================
// Valid: letters, digits (not first), _, $, Unicode letters
// Invalid: starting with digit, spaces, special chars, reserved words
// ============================================