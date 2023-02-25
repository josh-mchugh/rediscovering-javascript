'use-strict';
//We can deconstruct the entry value to access the index and value as variables. It is also nice to note that the variable for the index is immutable which reduces the chance for errors.
const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];

for(const [i, name] of names.entries()) {
    console.log(i + '--' + name);
}
