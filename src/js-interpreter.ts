import { JSInterpreter } from './types';

declare global {
  var acorn: any;
  var Interpreter: JSInterpreter;
  interface Window {
    acorn: any;
  }
}

// Load acorn and assign it to the global scope
const acorn = require('../original-repo/acorn');

const nativeGlobal = (typeof globalThis === 'undefined') ? this || window : globalThis;
nativeGlobal.acorn = acorn;

// Load the js-interpreter
require('../original-repo/interpreter');

// export interpreter
export const Interpreter = nativeGlobal.Interpreter as JSInterpreter;
