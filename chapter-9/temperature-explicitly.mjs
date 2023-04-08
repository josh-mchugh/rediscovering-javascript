//You can also export an existing function, object, primitive, and classes at any time by declaring an export. This is called explicit export. Explicit exports are useful when inline exports are not suitable.
function c2f(celsius) {
  return celsius * 1.8 + 32;
}

const FREEZING_IN_K = 273.15, BOILING_IN_K = 373.15;

export { c2f, FREEZING_IN_K };