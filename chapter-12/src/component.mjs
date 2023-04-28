//Component() function receives properties as its parameter but immediately returns another function - the decorator function. The decorated class from the function apply the metadata to the target.
import 'reflect-metadata';

export const Component = function(properties) {
    return function(target) {
        Reflect.defineMetadata('annotations', properties, target);
        return target;
    };
}
