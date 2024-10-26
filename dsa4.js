// Built in Data Structures - Arrays, Objects, Sets, Maps

// Arrays

// Common Properties & Methods + Time Complexity
// length - O(1)
// push/pop - O(1)
// Accessing Elements - O(1)
// Searching Elements - O(n)
// Insertion/Deletion - O(n)
// forEach/map/filter/reduce - O(n)
// unshift/shift/concat/slice/splice/reverse/join/includes/indexOf/lastIndexOf - O(n)
// sort - O(nlogn)

// const arr = [1,2,3,"Akshat"]
// arr.push(4)
// arr.unshift(0)
// arr.pop()
// arr.shift()
// for (const element of arr) {
//     console.log(element)
// }


// Objects

// Common Properties & Methods + Time Complexity
// Accessing Elements - O(1)
// Insertion/Deletion - O(1)
// Searching Elements - O(n)
// Object.keys/values/entries - O(n)

// Can have symbols as keys for unique keys that can't be easily accessed or updated when getting object keys

// const obj = {
//     name: "Akshat",
//     age: 28,
//     "key with spaces": "value with spaces",
//     sayMyName: function(){
//         console.log(this.name)
//     }
// }
// obj.hobby = "football"
// delete obj.hobby
// obj['name'] = 'Heisenberg'
// obj.sayMyName()
// console.log(obj.name)
// console.log(obj['age'])
// console.log(obj['key with spaces'])
// console.log(obj)


// Sets

// Common Properties & Methods + Time Complexity

// add/delete/has/size - O(1)
// Creating New set - O(n)
// Accessing Keys/Values/Entries - O(n)
// clear - O(n)
// for of - O(n)

// Similar to Arrays 
// But can't have duplicate elements
// Don't have an insertion order like array indexes
// Searching and Deleting is faster than arrays
// their typeof is object
// they are iterables unlike objects and can use for of loop

// const set = new Set([1,2,3, {name: "Akshat"}])
// set.add(4)
// set.add(4) // ignored
// let objRef = {name: "Heisenberg"}
// set.add(objRef)
// console.log(set.has(4)) // to check if element exists in set
// set.delete(objRef)
// console.log(set.size) // to get number of elements in set.size
// set.clear() // empties set
// for (const element of set) {
//     console.log(element)
// }

// Maps

// Common Properties & Methods + Time Complexity    
// set/delete/get/has/size - O(1)
// clear/creation/entries/iterating over keys/values - O(n)
// for of - O(n)

// Similar to Objects, they are a collection of key-value pairs
// But are ordered unlike objects which are unordered
// Keys can be any data type unlike objects where they can only be strings or symbols
// Objects have prototype keys but maps don't have any default keys so no chance of collision
// they are iterables unlike objects and can use loops
// Has a size property for easy and quick access to number of elements unlike objects where size is manually found by looping through keys
// Maps cannot have methods/functions, only data unlike objects which can have both

// const map = new Map([["name", "Akshat"], ["age", 28]])
// map.set("hobby", "football")
// console.log(map.has("name"))
// console.log(map.get("name"))
// map.delete("hobby")
// console.log(map.size)
// map.clear()
// for (const [key, value] of map) {
//     console.log(`${key}: ${value}`)
// }