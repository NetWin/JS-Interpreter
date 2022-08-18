import { JSInterpreter } from './types';

// Load acorn and assign it to the global scope
const acorn: any = require('../original-repo/acorn');

const nativeGlobal = global as any;
nativeGlobal.acorn = acorn;

// Load the js-interpreter
require('../original-repo/interpreter');

// export interpreter and types
export { JSInterpreter, JSInterpreterScope } from './types';
export const Interpreter = nativeGlobal.Interpreter as JSInterpreter;