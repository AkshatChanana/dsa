// Some Misc Problems

// Cartesian Product O(n*m) O(n^2) when both arrays are same length
// const A = [1,2]
// const B = [3,4,5]

// function cartProd(){
//     let output = []
//     for(let i = 0; i<A.length; i++){
//         for(let j = 0; j<B.length; j++){
//             output.push([A[i], B[j]])
//         }
//     }
//     return output
// }
// console.log(cartProd())

// Climbing Staircase - O(n)

// function numOfWaysToClimb(n){
//     let numOfWays = [1,2]
//     for(let i = 2; i <= n; i++) {
//         numOfWays[i] = numOfWays[i-1] + numOfWays[i-2]
//     }
//     return numOfWays[n - 1] // to account for 0 based index
// }
// function numOfWaysToClimb(n){ //best solution accounting for space as well
//     let one = 1
//     let two = 1 // ways to get to n steps
//     for(let i = 0; i<n-1; i++){ // as it takes n-1 steps to get "one" to 0 from steps, refer to neetcode explaination on yt
//         let temp = one
//         one = one + two
//         two = temp
//     }
//     return one

// }
// console.log(numOfWaysToClimb(1))
// console.log(numOfWaysToClimb(2))
// console.log(numOfWaysToClimb(3))
// console.log(numOfWaysToClimb(4))
// console.log(numOfWaysToClimb(5))

// Tower of Hanoi - O(2^n - 1) => O(2^n)

// function towerOfHanoi(numOfDisks, fromRod, toRod, usingRod){
//     // steps
//     // move n-1 disks from fromRod to usingRod
//     // move nth disk from fromRod to toRod
//     // move n-1 disks from usingRod to toRod

//     if(numOfDisks == 1){
//         console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
//         return
//     }
//     towerOfHanoi(numOfDisks-1, fromRod, usingRod, toRod)
//     console.log(`Move disk ${numOfDisks} from ${fromRod} to ${toRod}`)
//     towerOfHanoi(numOfDisks-1, usingRod, toRod, fromRod)
// }
// towerOfHanoi(3,'A','C','B')

// Some techniques for algorithm design

// Brute Force (Loops/Using Memoization where possible) - Simple and Exhaustive technique to evaluate every possible outcome to find the best solution, eg: Cartesian Product
// Greedy (Graphs/Trees)- Best option at current time without consideration for future, eg: Dijkstra's algorithm, Prim's algorithm, Kruskal's algorithm
// Divide and Conquer (Recursion/Loops) - Divide the problem into smaller sub-problems and combine them, eg: Binary Search, Quick Sort, Merge Sort, Tower Of Hanoi
// Dynamic Programming (Memoization with Recursion/Loops) - Store and use previously solved sub-problems to solve larger problems, eg: Fibonacci series, Climbing Staircase
// Backtracking (Trees/Recursion) - Generate all possible solutions, check if a path satisfies constraints, continue or backtrack to continue to different path, eg: N-Queens Problem

// Further Learning

// Priority Queue
// Circular Linked List
// AVL Trees, Red Black Trees and Tries
// Directed acyclic graphs
// Prim's, Kruskal's, Floyd's, Dijkstra's and A* algorithms
// Disjoint Sets/ Union Find

// Solve Problems

// let arr = [1, 5, 2, 2, 2, 5, 5, 4];
// let k = 3;
// let left = 0;
// let leftValSet = new Set();
// let outputArr = [];
// while (left < arr.length) {
//   let right = 0;
//   let rightValSet = new Set();
//   while (right < arr.length) {
//     if (right != left && !rightValSet.has(arr[right]) && !leftValSet.has(arr[right])) {
//       if (
//         arr[right] + arr[left] === k ||
//         arr[right] - arr[left] === k ||
//         arr[left] - arr[right] === k
//       ) {
//         console.log(rightValSet)
//         console.log(leftValSet)
//         outputArr.push([arr[left], arr[right]]);
//       }
//       rightValSet.add(arr[right])
//     }
//     right++;
//   }
//   leftValSet.add(arr[left])
//   left++
// }
// console.log(outputArr)

// Quick Sort
// let arr = [-6,-10,20,8,8,-2,4];
// function sort(arr){
//     if(arr.length < 2) return arr
//     let left = []
//     let right = []
//     let pivot = arr[arr.length - 1]
//     for(let i = 0; i<arr.length-1;i++){
//         if(arr[i] <= pivot) left.push(arr[i])
//         else right.push(arr[i])
//     }
//     return [...sort(left), pivot, ...sort(right)]
// }
// console.log(sort(arr))

