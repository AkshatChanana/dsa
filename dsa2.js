// Search Algorithms

// Linear Search - O(n)

// let arr = [-5,2,10,4,6]
// function search(t){
//     for(let i = 0; i<arr.length; i++){
//         if(t == arr[i]) return i
//     }
//     return -1
// }

// console.log(search(8))
// console.log(search(10))
// console.log(search(4))
// console.log(search(-5))

// Binary Search - O(logn)
// only for sorted array

// let arr = [-5,2,4,6,10]
// function binSearch(t){
//     if(arr.length == 0)  return -1
//     else{
//         let left = 0
//         let right = arr.length - 1
//         let middle = 0
//         while(left<=right){
//             middle = Math.floor((left + right)/2)
//             if(arr[middle] == t) return middle
//             if(arr[middle] > t) right = middle - 1
//             else left = middle + 1
//         }
//         return -1
//     }
// }

// console.log(binSearch(2))
// console.log(binSearch(5))
// console.log(binSearch(10))
// console.log(binSearch(6))
// console.log(binSearch(-5))
// console.log(binSearch(9))

// Binary Search - O(logn)
// only for sorted array, with Recursion
// let arr = [-5,2,4,6,10]
// function recBinSearch(arr,t){
//     return search(arr, t, 0, arr.length - 1)
// }
// function search(arr, t, left, right){
//     if(left > right) return -1
//     let middle = Math.floor((left + right)/2)
//     if(arr[middle] == t) return middle
//     if(arr[middle] < t) search(arr,t, middle+1, right)
//     else return search(arr,t, left, middle-1)
// }
// console.log(recBinSearch(arr,2))
// console.log(recBinSearch(arr,5))
// console.log(recBinSearch(arr,10))
// console.log(recBinSearch(arr,6))
// console.log(recBinSearch(arr,-5))
// console.log(recBinSearch(arr,9))

