// Math Algorithms

//FIBONNACCI - O(n)
// let arr = [0,1]
// function fib(n){

//     for(let i = 2; i <n; i++){
//         arr[i] = arr[i-1] + arr[i-2]
//     }
// }
// fib(5)
// console.log(arr)

// FACTORIAL - O(n)
// function factorial(n){
//     let fact = 1
//     for(i=n;i>0;i--){
//         fact=fact*i
//     }
//     console.log(fact)
// }
// factorial(4)
// factorial(5)
// factorial(0)
// factorial(1)

// PRIME NUMBER - O(n)
// function isPrime(n){
//     if(n>=0){
//         for(i=2;i<n;i++){
//             console.log(i)
//             if(n%i == 0) {
//                 return false
//             }
//         }
//     }
//     else{
//         for(i=n+1;i<-1;i++){
//             if(n%i == -0) return false
//         }
//     }
//     return true
// }
// console.log(isPrime(5))
// console.log(isPrime(13))
// console.log(isPrime(4))
// console.log(isPrime(2))
// console.log(isPrime(0))
// console.log(isPrime(1))
// console.log(isPrime(-4))
// console.log(isPrime(-13))
// console.log(isPrime(-39))

// PRIME NUMBER - O(sqrt(n))
// sqrt of n always has a value less than or equal to itself for non prime numbers
// function isPrime(n){
//     if(n<2) return false
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%i == 0) return false
//     }
//     return true
// }
// console.log(isPrime(617307798891149))

// POWER OF 2 - O(logn)
// function isPowerOf2(n){
//     if(n < 1) return false
//     while(n%2 == 0){
//         n = n/2
//     }
//     if(n == 1) return true
//     else return false
// }
// console.log(isPowerOf2(1))
// console.log(isPowerOf2(2))
// console.log(isPowerOf2(5))
// console.log(isPowerOf2(256))

// POWER OF 2 - O(1) bitwise
// function isPowerOf2(n){
//     if(n < 1) return false
//     return (n & (n-1)) == 0
// }

// FIBONNACCI with Recursion - O(2^n)

// function fibRec(n) {
//   if (n < 2) return n
//   else {
//     return fibRec(n-1) + fibRec(n-2)
//   }
// }
// console.log(8)

// Factorial with recursion - O(n)

// function factorial(n){
//     if(n == 0) return 1
//     else {
//        return n * factorial(n-1)
//     }
// }
// console.log(factorial(4))

