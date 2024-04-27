// 60-misol 

// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// let findMatrix = function(matrix, target){
//     if(matrix.length === target){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(findMatrix(matrix, 3));













// 61-misol   

// 1-usul 

// let input = `djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest`
// let arr = input.split("")
// let word = "Najot ta'lim is the best" 
// let new_arr = word.split("")
// let result = []
// for(let i = 0; i < new_arr.length; i++){
//     if (new_arr[i] === " ") {
//         result.push(" ")
//     }else if(arr.includes(new_arr[i])){
//         result.push(new_arr[i])
//     }
// }
// console.log(result.join(""));



// 2-usul 

// function findWrd(words, length){
//     for(let i = 0; i < words.length - length + 1; i++){
//         let word = words.substring(i, i + length);
//         if(word === `najot`){
//             return word;
//         }
//     }
//     return null;
// }
// console.log(findWrd(`kjfkjdskdsknajotshvksfh`, 5))















// 62-misol 

// function Matrix(matrix) {
//     const n = matrix.length;
//     const rotateMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             rotateMatrix[j][n - 1 - i] = matrix[i][j];
//         }
//     }
//     return rotateMatrix;
// }
// const testCases = [
//     [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]],
//     [[1,2,3],[4,5,6],[7,8,9]]
// ];
// testCases.forEach(matrix => {
//     console.log("Input:", matrix);
//     console.log("Output:", Matrix(matrix));
// });












// 63-misol 


// let item = `salom dunyo`
// let arr = item.split(" ")
// console.log(arr[arr.length -1].length)












// 64-masala  


// function item(p, q) {
//     if (p.length !== q.length) {
//         return false;
//     }
//     for (let i = 0; i < p.length; i++) {
//         if (p[i] !== q[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// const testCases = [
//     [[1,2,3], [1,2,3]],
//     [[1,2], [1,null,2]],
//     [[1,2,1], [1,1,2]]
// ];
// testCases.forEach(([p, q]) => {
//     console.log("Input: p =", p, "q =", q);
//     console.log("Output:", item(p, q));
// });
















//65-misol 

// function item (obj){
//     let arr = Object.entries(obj);
//     let main = arr.map(([key, value]) => `${key}${value}`);
//     return main
// }
// console.log(item({a: 2, b: 5, c: 7}));












//66-misol  

// let number1 =  [1,2]
// let number2 = [3,4]
// let arr = [...number1,...number2]
// function item (){
//     let index = parseInt(arr.length / 2)
//     if(arr.length %  2 == 0){
//         return (arr[index] + (arr[index - 1])) / 2
//     }else{
//         return arr[index]
//     }
// }
// console.log(item(arr));
















// 67-misol 

// function item_box(array) {
//     const arr = {};  
//     const result = []; 
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         if (arr[item]) {
//             continue;
//         }
//         arr[item] = true; 
//         const count = array.filter(element => element === item).length; 
//         if (count > 1) { 
//             result.push(item);
//         }
//     }
//     return result;
// }
// const array = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7];
// console.log("Input array:", array);
// console.log("Result:", item_box(array));