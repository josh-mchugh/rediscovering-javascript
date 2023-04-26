'use-strict';
//Leveraging JavaScripts prototype inheritence we can set a proxy with a 'get()' trap on 'Map' prototype. This new design compared to previous, we do not have to worry about existing members. The proxy now serves as the appointed prototye since we know when JavaScript calls a property on an object, it requests it from the object's prototype when it is not found and propagates up the objects prototye chain. The proxy will be called only for nonexistent members since it is at the root of the prototype chain.
const proxy = new Proxy(Map.prototype, {
    get: function(target, propertyName, receiver) {
        return receiver.get(propertyName);
    }
});
Reflect.setPrototypeOf(Map.prototype, proxy);

const langsAndAuthors = new Map([ ['JavaScript', 'Eich'], ['Java', 'Gosling'] ]);

console.log(langsAndAuthors.get('JavaScript'));
console.log(langsAndAuthors.JavaScript);

const capitals = new Map([
    ['USA', 'Washington. D.C.'],
    ['UK', 'London'],
    ['Trinidad & Tobago', 'Port of Spain']
]);

console.log(capitals.UK);
console.log(capitals['Trinidad & Tobago']);
