// 1. Can we put duplicate values in the set object ?
// Ans -> No, We can not put duplicate values in the set Object

// 2. Write the syntax for
// a) Creating new set object
 let set = new Set();

//  b) Adding new element to set object
set.add("Kashif");
set.add("Sanjeevan");
set.add("Navin");
set.add("Hyder");

console.log(set);

// c) Deleting element from set object

set.delete("Kashif");
console.log("Blockchain course mentors are ",set);


// 3. Create a set object with four random numbers from 0 to 10. Check if this
// newly created set object has 8 in it. Use set object methods.
let numSet = new Set();

while(numSet.size<4){
    numSet.add(Math.trunc(Math.random()*10));
}

console.log(numSet);

if(numSet.has(8))
    console.log("8 is present in set");
else
    console.log("8 is not present in set");