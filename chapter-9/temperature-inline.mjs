//Primitives, functions, objects, classes defined within a module are available to be exported and be visible to the outside. Inlining exports is when we prefix a primitive, function, object or class with the keyword 'export'.  This is the easiest and least nosiy approach to exporting.
//Since exports are spread out in the file, it may make it hard to quickly understand what is being exported in this file. This may not be a concern for relatively small files.
export const FREEZING_POINT = 0;

export function f2c(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

export const temperaturePoints = { freezing: 0, boiling: 100};

export class Thermostat {
  constructor() {
    //...initialization sequence
  }
}

const FREEZINGPOINT_IN_F = 32;