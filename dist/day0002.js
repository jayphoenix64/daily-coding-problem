/**
 * Good morning! Here's your coding interview problem for today.
 * This problem was asked by Uber.
 * Given an array of integers, return a new array such that each element at index i of the
 * new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
 * If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * Follow-up: what if you can't use division?
 */
const input = [1, 2, 3, 4, 5];
const output = input.map(element => {
    let result = 1;
    const temp = input.filter(x => x !== element);
    for (let index of temp) {
        result *= index;
    }
    return result;
});
console.log('input:', input);
console.log('output:', output);
/**
 * Ok, my solution has a complexity of O(n^3) but it works.
 * Also splicing the array with input.splice(input.indexOf(element, 1))
 * did not work and resulted with the arras [3, 2, 1] and the first
 * element 3 in a temp array of [3] due to the splice being at
 * input.splice(0,1) and splice return the to be removed element at the
 * index 0. Filtering workds better but, of course, adds yet another
 * iteration of the array.
 */ 
//# sourceMappingURL=day0002.js.map