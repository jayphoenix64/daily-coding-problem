/**
 * Good morning! Here's your coding interview problem for today.
 * This problem was recently asked by Google.
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 */
const list = [10, 15, 3, 7];
let found = false;

// sequential solution
// for (let i = 0; i < list.length; i++) {
//   for (let j = 0; j < list.length; j++) {
//     if (list[i] + list[j] === 10) {
//       found = true;
//     }
//   }
// }

//functional solution
list.map((i) =>
  list.map((j) => {
    if (i + j === 10) {
      found = true;
    }
  })
);

console.log(list);
console.log(found);