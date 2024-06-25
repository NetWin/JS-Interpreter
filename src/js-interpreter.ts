import { JSInterpreter } from './types';

// Load acorn and assign it to the global scope
const acorn = require('../original-repo/acorn');

const nativeGlobal = global as any;
nativeGlobal.acorn = acorn;

// Load the js-interpreter
require('../original-repo/interpreter');

// export interpreter
export const Interpreter = nativeGlobal.Interpreter as JSInterpreter;
