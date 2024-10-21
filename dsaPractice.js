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