export type JSInterpreterScope = Record<string, unknown>;

export interface JSInterpreter {

  /**
   * Create a new JSInterpreter with the given code / init function.
   */
  new(code: string, initFn: (interpreter: JSInterpreter, scope: JSInterpreterScope) => void): JSInterpreter;

  /**
   * Convert an internal "pseudo" formatted value into it's native representation.
   */
  pseudoToNative: <T = unknown>(obj: unknown) => T;

  /**
   * Convert a native value into an internal / "pseudo" format.
   */
  nativeToPseudo: <T = unknown>(obj: unknown) => T;

  /**
   * Assign an internal / pseudo formatted value / function to the given scope.
   */
  setProperty: (scope: JSInterpreterScope, name: string, pseudoFunction: unknown) => void;

  /**
   * Run the code given when this interpreter was constructed.
   */
  run(): void;

}