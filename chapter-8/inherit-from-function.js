'use-strict';
//For backwards compatibility, classes using the old syntax can be used as base classes and extends with the new 'extends' syntax
//Even those the base class is a legacy approach, the default constructor performs the automatic passthrough of the arguments.
function LegacyClass(value) {
    this.value = value;
}

class NewClass extends LegacyClass {}

console.log(new NewClass(1));
