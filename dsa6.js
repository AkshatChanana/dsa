// Custom Non-Linear Data Structures - Hash Tables, Trees, Heaps & Graphs

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


// Trees

// Hierarchical Data Structure with parent and child nodes 
// Binary Trees - Each node has at most 2 children

// Binary Search Trees - Binary Trees where each left node is less than its parent and each right node is greater than its parent

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){ // O(1)
//         return this.root === null
//     }

//     insert(value){ // O(log n)
//         let newNode = new Node(value)
//         if(this.isEmpty()) this.root = newNode
//         else{
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root,newNode){ // O(log n)
//         if(newNode.value < root.value){
//             if(root.left === null) root.left = newNode
//             else this.insertNode(root.left, newNode)
//         }
//         else{
//             if(root.right === null) root.right = newNode
//             else this.insertNode(root.right, newNode)
//         }
//     }

//     search(root,value){ // O(log n)
//         if(!root) {
//             return false
//         }
//         else{
//             if(root.value === value) return true
//             else if(value < root.value){
//                 return this.search(root.left, value)
//             }
//             else{
//                 return this.search(root.right, value)
//             }
//         }
//     }

//     // DFS Search traversals

//     // preorder DFS - root, left, right
//     // inorder DFS - left, root, right
//     // postorder DFS - left, right, root

//     preOrderDFS(root){ // O(n)
//         if(root) {
//             console.log(root.value)
//             this.preOrderDFS(root.left)
//             this.preOrderDFS(root.right)
//         }
//     }

//     inOrderDFS(root){ // O(n)
//         if(root){
//             this.inOrderDFS(root.left)
//             console.log(root.value)
//             this.inOrderDFS(root.right)
//         }
//     }

//     postOrderDFS(root){ // O(n)
//         if(root){
//             this.postOrderDFS(root.left)
//             this.postOrderDFS(root.right)
//             console.log(root.value)
//         }
//     }

//     // BFS Search traversal

//     // create a queue and enqueue the root node
//     // while the queue is not empty, dequeue the first node and print it
//     // if the left child of the dequeued node is not null, enqueue it
//     // if the right child of the dequeued node is not null, enqueue it
//     // repeat this process until the queue is empty


//     levelOrderBFS(){ // O(n)
//         let queue = new Queue()
//         queue.enqueue(this.root)
//         while(queue.size()){
//             let curr = queue.peek()
//             queue.dequeue()
//             console.log(curr.value)
//             if (curr.left) queue.enqueue(curr.left)
//             if (curr.right) queue.enqueue(curr.right)
//         }

//         // alternatively for smaller implementations can use arrays for easier implementation
//         // but dequeue operation will have O(n) time complexity

//         // let queueArr = []
//         // queueArr.push(this.root)
//         // while(queueArr.length){
//         //     let curr = queueArr.shift()
//         //     console.log(curr.value)
//         //     if (curr.left) queue.push(curr.left)
//         //     if (curr.right) queue.push(curr.right)
//         // }

//     }

//     min(root){
//         if(!root.left) return root.value
//         else return this.min(root.left)
//     }

//     max(root){
//         if(!root.right) return root.value
//         else return this.max(root.right)
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root, value)
//     }

//     deleteNode(root, value){
//         if(root === null) return null
//         else{
//             if(value < root.value) root.left = this.deleteNode(root.left, value)
//             else if (value > root.value) root.right = this.deleteNode(root.right, value)
//             else{
//                 // Case 1 : leaf node
//                 if(!root.left && !root.right){
//                     return null
//                 }
//                 // Case 2: One child, return the child to point to previous node's left or right
//                 if(!root.left){
//                     return root.right
//                 }
//                 else if (!root.right){
//                     return root.left
//                 }
//                 // Case 3: 2 Children, copy the inOrder successor value to the root and delete the inOrder successor (min value in right subtree)
//                 root.value = this.min(root.right)
//                 root.right = this.deleteNode(root.right, root.value)
//             }
//             return root
//         }
//     }

// }

// class Queue{
//     constructor(){
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }
//     enqueue(element){
//         this.items[this.rear] = element
//         this.rear++
//     }
//     dequeue(){
//         delete this.items[this.front]
//         this.front++
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     isEmpty(){
//         return this.rear - this.front === 0
//     }
//     size(){
//         return this.rear - this.front
//     }
//     clear(){
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }
//     print(){
//         console.log(this.items)
//     }
// }

// let bst = new BinarySearchTree()
// console.log(bst.isEmpty())
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)
// bst.insert(20)
// bst.insert(13)
// // console.log(bst.search(bst.root, 10))
// // console.log(bst.search(bst.root, 5))
// // console.log(bst.search(bst.root, 15))
// // console.log(bst.search(bst.root, 20))
// // bst.preOrderDFS(bst.root)
// // bst.inOrderDFS(bst.root)
// // bst.postOrderDFS(bst.root)
// bst.delete(10)
// bst.levelOrderBFS()
// // console.log(bst.min(bst.root))
// // console.log(bst.max(bst.root))

// Binary Heaps (Min/Max Heap)

// parent node must have only at most 2 children
// all levels except the last level must be full
// all nodes must be filled from left to right
// min-heap: every parent node must be smaller than its children - root node is always smallest
// max-heap: every parent node must be greater than its children - root node is always largest

// Representation of Binary Heaps in an Array
// root node = 0 index
// parent node = Floor((i - 1)/2)
// left child node = 2i + 1
// right child node = 2i + 2

// class MinHeap{
//     constructor(){
//         this.storage = []
//         this.size = 0
//     }
//     getParentIndex(index){
//         return Math.floor((index - 1)/2)
//     }
//     getLeftChildIndex(index){
//         return 2*index + 1
//     }
//     getRightChildIndex(index){
//         return 2*index + 2
//     }
//     hasParent(index){
//         return this.getParentIndex(index) >= 0
//     }
//     hasLeftChild(index){
//         return this.getLeftChildIndex(index) < this.size
//     }
//     hasRightChild(index){
//         return this.getRightChildIndex(index) < this.size
//     }
//     swap(index1, index2){
//         let temp = this.storage[index1]
//         this.storage[index1] = this.storage[index2]
//         this.storage[index2] = temp
//     }
//     parent(index){
//         return this.storage[this.getParentIndex(index)]
//     }
//     leftChild(index){
//         return this.storage[this.getLeftChildIndex(index)]
//     }
//     rightChild(index){
//         return this.storage[this.getRightChildIndex(index)]
//     }
//     insert(value){
//         this.storage[this.size] = value
//         this.size++
//         this.heapifyUp()
//     }
//     heapifyUp(){
//         let index = this.size - 1
//         while(this.hasParent(index) && this.parent(index) > this.storage[index]){
//             this.swap(this.getParentIndex(index), index)
//             index = this.getParentIndex(index)
//         }
//     }
//     // recursive implementation
//     // insert(value){
//     //     this.storage[this.size] = value
//     //     this.size++
//     //     this.heapifyUp(this.size - 1)
//     //}
//     // heapifyUp(index){
//     //     if(this.hasParent(index) && this.parent(index) > this.storage[index]){
//     //         this.swap(this.getParentIndex(index), index)
//     //         this.heapifyUp(this.getParentIndex(index))
//     //     }
//     // }
//     removeMin(){
//         if(this.size === 0){
//             throw new Error("Heap is empty")
//         }
//         let min = this.storage[0]
//         this.storage[0] = this.storage[this.size - 1]
//         this.size--
//         this.heapifyDown()
//         return min
//     }
//     heapifyDown(){
//         let index = 0
//         while(this.hasLeftChild(index)){
//             let smallerChildIndex = this.getLeftChildIndex(index)
//             if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) smallerChildIndex = this.getRightChildIndex(index)
//             if(this.storage[index] < this.storage[smallerChildIndex]) break
//             this.swap(index, smallerChildIndex)
//             index = smallerChildIndex
//         }
//     }
// recursive implementation
// removeMin(){
//     if(this.size === 0){
//         throw new Error("Heap is empty")
//     }
//     let min = this.storage[0]
//     this.storage[0] = this.storage[this.size - 1]
//     this.size--
//     this.heapifyDown(0)
//     return min
// }
// heapifyDown(index){
//  let smallest = index
//  if(this.hasLeftChild(index) && this.leftChild(index) < this.storage[index]) smallest = this.getLeftChildIndex(index)
//  if(this.hasRightChild(index) && this.rightChild(index) < this.storage[index]) smallest = this.getRightChildIndex(index)
//  if(smallest !== index){
//      this.swap(smallest, index)
//      this.heapifyDown(smallest)
// }
//}
// }

// Graphs

// consists of a finite number of vertices (nodes) connected by edges
// graphs can be directed or undirected (unidirectional or bidirectional)
// graphs can be weighted or unweighted
// graphs can be connected or disconnected
// graphs can have cycles or acyclic
// graphs can have self-loops (edges that connect a vertex to itself)
// used in Google Maps, social networks, routing systems, and many other applications
// Graphs are represented using adjacency lists or adjacency matrices

// Adjacency Matrix

// 2D array of size n x n where n is the number of vertices in the graph
// each row and column represents a vertex in the graph
// each element in the matrix represents the weight of the edge between the two vertices
// if the element is 0, there is no edge between the two vertices
// if the element is 1, there is an edge between the two vertices

//   A B C
// A 0 1 0
// B 1 0 1
// C 0 1 0

// const matrix = [
//     [0, 1, 0],
//     [1, 0, 1],
//     [0, 1, 0]
// ]
// console.log(matrix[0][1]) // 1 => A to B connected

// Adjacency List

// vertices stored in a map like structure where every vertex stores a list of its adjacent vertices

// A -> B
// B -> A,C
// C -> B

// let adjacencyList = {
//     'A': ['B'],
//     'B': ['A', 'C'],
//     'C': ['B']
// }

// console.log(adjacencyList['B']) // B connected to A and C

// Adjacency List more storage efficient as it only stores values where there is an edge
// unlike adjacency matrix where empty elements are also stored

// with adjacency list, insertion and finding adjacent nodes are O(1) 
// unlike adjacency matrix where they are O(n)

// Graph Implementation

// class Graph {
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set()
//     }
//     addEdge(vertex1, vertex2){
//         if(!this.adjacencyList[vertex1]) this.addVertex(vertex1)
//         if(!this.adjacencyList[vertex2]) this.addVertex(vertex2)
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
//     display(){
//         for (const vertex in this.adjacencyList) {
//             console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
//         }
//     }
//     hasEdge(vertex1, vertex2){
//         return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//     }
//     removeEdge(vertex1, vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){ 
//         if(!this.adjacencyList[vertex]) return
//         for (const adjacentVertex of this.adjacencyList[vertex]) {
//             this.removeEdge(vertex, adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }
// }

// const graph = new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addEdge('A', 'B')
// graph.addEdge('B', 'C')
// graph.display()
// console.log(graph.hasEdge('A', 'B'))
// console.log(graph.hasEdge('A', 'C'))
// graph.removeEdge('A', 'B')
// graph.display()
// graph.removeVertex('B')
// graph.display()