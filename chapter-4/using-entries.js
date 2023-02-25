'use-strict';
//Enchanced for...of loops directly gives us the desired element in the iteration, however, it does not prevent us from getting the index. To access the index we use the entries() function.
//The entry returns two pieces, an index and the value at that index.
const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];

for(const entry of names.entries()) {
    console.log(entry);
}
