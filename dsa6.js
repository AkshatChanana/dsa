// Custom Non-Linear Data Structures - Hash Tables, Trees, Graphs

// Hash Tables 

// Similar to Objects, they are a collection of key-value pairs
// Objects are an Implemntation of Hash Tables but Objects can have default keys which can cause collisions
// Maps and Objects are both Hash Tables Implementations
// Maps can be more verbose but can maintain insertion order and have any data type as keys
// Objects can be more compact but can't maintain insertion order and only have strings or symbols as keys
// Ideally, use maps for complex data structures with frequent updatesand objects for simple & small implementations with infrequent updates

// Implementation

// Uses Hash Function to map keys to indexes in an array
// Hash Maps are best implemented when O(1) insertion/deletion/searching is required
// Hash Collisions can occur when hash function is not good and maps to same indexes which can lead to poor performance as collisions are handled using chaining (linked lists/arrays)
// Worst case complexity can be O(n) when hash function is not good and all keys are mapped to same index

// Average case complexity is O(1) for insertion/deletion/searching

// class HashMap {
//     constructor(size){
//         this.keyMap = new Array(size)
//         this.size = size
//     }
//     hash(key){ // a simple implementation of hash function
//         let total = 0
//         for (let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key, value){
//         let index = this.hash(key)
//         //this.keyMap[index] = value
//         let bucket = this.keyMap[index]
//         if(!bucket) this.keyMap[index] = [[key, value]]
//         else {
//             for (let i = 0; i < bucket.length; i++){
//                 if(bucket[i][0] === key){
//                     bucket[i][1] = value
//                     return
//                 }
//             }
//             bucket.push([key, value])
//         }
//     }
//     get(key){
//         let index = this.hash(key)
//         // return this.keyMap[index]
//         let bucket = this.keyMap[index]
//         if(bucket){ 
//             for (let i = 0; i < bucket.length; i++){
//                 if(bucket[i][0] === key) return bucket[i][1]
//             }
//         }
//         return undefined
        
//     }
//     remove(key){
//         let index = this.hash(key)
//         //this.keyMap[index] = undefined
//         let bucket = this.keyMap[index]
//         if(bucket){
//             for (let i = 0; i < bucket.length; i++){
//                 if(bucket[i][0] === key){
//                     bucket.splice(i, 1)
//                     return
//                 }
//             }
//         }
//     }
//     display(){
//         for (let i = 0; i < this.keyMap.length; i++){
//            if(this.keyMap[i]) console.log(i, this.keyMap[i])
//         }
//     }
// }

// let map = new HashMap(50)
// map.set('name', 'Akshat')
// map.set('age', 28)
// map.display()
// console.log(map.get('name'))
// map.set('mane', 'Heisenberg')
// map.set('name', 'Walter White')
// map.remove('mane')
// map.display()

