//A module must import references it wants to use exported by other modules. The import directive should specifiy the location of the module or file to load. There are two rules to bring named exports from another module. First, the name specified in the import for the reference should match the exported name. Second, the names have to be specified within a {} block.
import { FREEZING_POINT } from './temperature-inline';
import { celsiusToKelvin } from './temperature-export-named';

const fpInK = celsiusToKelvin(FREEZING_POINT);