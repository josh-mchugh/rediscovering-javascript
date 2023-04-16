# Chapter 9
JavaScript modules are well-encapsulated files. Modules all for cohesive software designs as it allows for clearly specifiying what is needed via imports and what can be used by others via exports. This control prevents accidental and unintentional dependencies in code and reduces errors. Javascript modules allow for big applications to be broken down into well structured parts.

## right.mjs & middle.mjs & left.mjs
JavaScript modules use 'use-strict' mode without it needing to be declared. JavaScript modules control exports with the 'export' keyword and imports with the 'import' keyword. Imports cannot be nested in code and must be placed at the top of the file. When JavaScript loads modules, it loads them smartly as a module is loaded only once and when the first import is seen in the execution flow. If a module is already loaded then a request to load is skipped and any variables are assigned to the proper references.

## temperature-inline.mjs
Primitives, functions, objects, classes defined within a module are available to be exported and be visible to the outside. Inlining exports is when we prefix a primitive, function, object or class with the keyword 'export'.  This is the easiest and least nosiy approach to exporting.

## temperature-explicitly.mjs
You can also export an existing function, object, primitive, and classes at any time by declaring an export. This is called explicit export. Explicit exports are useful when inline exports are not suitable.

## temperature-export-named.mjs
Declarations can be explicitly exported with different names. This is useful for giving more descriptive names for the outside world to see but keep the shorter names for internal use.

## temperature-export-defaults.mjs
A default export may signify the most significant or only export a module may like to expose. A module only supports one default export. When using default exports outside of the class, they are referenced by 'default'.

## temperature-operations.mjs
A module must import references it wants to use exported by other modules. The import directive should specifiy the location of the module or file to load. There are two rules to bring named exports from another module. First, the name specified in the import for the reference should match the exported name. Second, the names have to be specified within a {} block.