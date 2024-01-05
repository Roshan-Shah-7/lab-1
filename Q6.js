// Ways of creating arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = new Array(6, 7, 8, 9, 10);
const array3 = [];
array3[0] = 'First'
array3[1] = 'Second'
array3[2] = 'Third'

array1.unshift(0); // unshidf() : use to insert element at start where push() insert at last
array1.push(6); //  push() : insert at last
array1.shift(); //  shift() : delet element from first
array1.pop(); //  pop() : delet element from last

for (i = 0; i < array1.length; i++) {
    console.log(`The elements ${i} of array ${array1[i]} \n`);
}
console.log(`The length of array = ${array1.length} \n`);
console.log(`${array1[2]} is the element of array \n`);