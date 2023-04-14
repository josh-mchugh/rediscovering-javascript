//Declarations can be explicitly exported with different names. This is useful for giving more descriptive names for the outside world to see but keep the shorter names for internal use.
function c2k(celsius) {
    return celsius + 273.15;
}

export { c2k as celsiusToKelvin };