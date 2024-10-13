// Sorting Algorithms

// Bubble Sort - O(n^2)
// using recursion, alternatively can use do-while loop with nested for loop
// let arr = [-6,20,8,-2,4]
// function bubbleSort(arr){
//     let swapped = false
//     let temp = null
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] > arr[i+1]) {
//             temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             swapped = true
//         }
//     }
//     if(swapped) bubbleSort(arr)
// }
// bubbleSort(arr)
// console.log(arr)

// Insertion Sort - O(n^2)
// let arr = [-6,-10,20,8,-2,4]
// function insertionSort(arr){
//     for(let i = 1; i < arr.length; i++){
//         let numberToInsert = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j] > numberToInsert){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = numberToInsert
//     }
// }
// insertionSort(arr)
// console.log(arr)

// Quick Sort - O(n^2) Worst Case when array is sorted
// O(nlogn) Average Case
// let arr = [-6,-10,20,8,-2,4]
// function quickSort(arr){
//     if(arr.length < 2) return arr
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right =[]
//     for(let i = 0; i<arr.length - 1; i++){
//         if(arr[i]>pivot) left.push(arr[i])
//         else right.push(arr[i])
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }
// console.log(quickSort(arr))

// Merge Sort - O(nlogn)
// let arr = [-6,-10,20,8,-2,4]
// function mergeSort(arr){
//     if(arr.length < 2) return arr
//     const mid = Math.floor(arr.length/2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left, right){
//     const sortedArr = []
//     while(left.length && right.length){
//         if(left[0] <= right[0]){
//             sortedArr.push(left.shift())
//         }
//         else sortedArr.push(right.shift())
//     }
//     return [...sortedArr,...left,...right]
// }
// console.log(mergeSort(arr))