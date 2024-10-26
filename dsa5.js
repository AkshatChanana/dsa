// Custom Linear Data Structures - Stacks, Queues, Linked Lists

// Stack

// LIFO - Last In First Out, like a stack of plates/pancakes
// push/pop/peek/isEmpty/size/clear/print - O(1)
// Usage - Function/Query Call stack, Browser history tracking, undo operation

// class Stack {
//     constructor() {
//         this.items = []
//     }
//     push(element) {
//         this.items.push(element)
//     }
//     pop() {
//         return this.items.pop()
//     }
//     peek() {
//         return this.items[this.items.length - 1]
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     size() {
//         return this.items.length
//     }
//     clear() {
//         this.items = []
//     }
//     print() {
//         console.log(this.items.toString())  
//     }
// }

// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.pop()
// console.log(stack.peek())
// console.log(stack.isEmpty())
// stack.print()
// stack.clear()
// console.log(stack.size())


// Queue

// FIFO - First In First Out, like a line at the grocery store
// enqueue/peek/isEmpty/size/clear - O(1)
// dequeue - O(n) (when using arrays)
// print - O(n)
// Usage - Task Scheduling, Callback/Task Queue in Js, Printers

// class Queue {
//     constructor() {
//         this.items = []
//     }
//     enqueue(element) {
//         this.items.push(element)
//     }
//     dequeue() {
//         return this.items.shift()
//     }
//     peek() {
//         return this.items[0]
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     size() {
//         return this.items.length
//     }
//     clear() {
//         this.items = []
//     }
//     print() {
//         console.log(this.items.toString())  
//     }
// }

// const queue = new Queue()   
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.dequeue()
// console.log(queue.peek())
// console.log(queue.isEmpty())
// queue.print()
// queue.clear()
// console.log(queue.size())

// Optimized Queue 

// Using objects instead of arrays to make dequeue O(1)
// enqueue/dequeue/peek/isEmpty/size/clear - O(1)
// print - O(n)

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
// const queue = new Queue()   
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.dequeue()
// console.log(queue.peek())
// console.log(queue.isEmpty())
// queue.print()
// queue.clear()
// console.log(queue.size())
// queue.print()

// Circular Queue

// Size of Queue is fixed and a single block of memory is used as if first and last elements are connected
// FIFO - First In First Out, Also called Circular/Ring Buffer
// Great for Queues with fixed maximum size
// Memory position of Front element removed after dequeue can be used by rear pointer later
// To visualise, Front and Rear pointers move in a Circular Memory structure with fixed length starting from same positions
// elements enqueued move the rear pointer to the next position and dequeue moves the front pointer to the next position 
// till the queue is full after which new elements cannot be enqueued until a memory space is opened by dequeue and front pointer moves to next position
// Usage - Clock, Streaming Data, Traffic Lights, Task Buffers

// enqueue/dequeue/peek/isEmpty/size/clear/isFull/currentLength - O(1)
// print - O(n)

// class CircularQueue{
//     constructor(size){
//         this.items = new Array(size)
//         this.front = -1
//         this.rear = -1
//         this.size = size
//         this.currentLength = 0
//     }
//     isFull(){
//         return this.currentLength === this.size
//     }
//     isEmpty(){
//         return this.currentLength === 0
//     }
//     enqueue(element){
//         if(this.isFull()){
//             console.log("Queue is full!")
//             return null
//         }
//         this.rear = (this.rear + 1) % this.size
//         this.items[this.rear] = element
//         this.currentLength++
//         if(this.front === -1){
//             this.front = this.rear
//         }
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("Queue is empty!")
//             return null
//         }
//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front + 1) % this.size
//         this.currentLength--
//         if(this.isEmpty()){
//             this.front = -1
//             this.rear = -1
//         }
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("Queue is empty!")
//             return null
//         }
//         return this.items[this.front]
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("Queue is empty!")
//         }
//         else {
//             let str = ""
//             for(let i = this.front; i != this.rear; i = (i + 1) % this.size){
//                 str += this.items[i] + " "
//             }
//             str += this.items[this.rear]
//             console.log(str)
//         }
//     }
//     clear(){
//         this.items = new Array(this.size)
//         this.front = -1
//         this.rear = -1
//         this.currentLength = 0
//     }
// }

// const queue = new CircularQueue(5)
// queue.enqueue(1)
// queue.enqueue(2)    
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)
// queue.enqueue(6)
// queue.print()
// console.log(queue.isFull())
// queue.dequeue()
// queue.dequeue()
// console.log(queue.peek())
// queue.enqueue(7)
// queue.enqueue(8)
// queue.print()
// queue.clear()
// console.log(queue.isEmpty())


// Linked List 

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){ // O(1)
//         return this.size === 0
//     }
//     prependNode(value){ //O(1)
//         let headNode = new Node(value)
//         if(!this.isEmpty()){
//             headNode.next = this.head
//         }
//         else this.tail = headNode
//         this.head = headNode
//         this.size++
//     }

//     appendNode(value){ // O(1) (will be O(1) if maintaining tail pointer)
//         let newNode = new Node(value)
//         if(this.isEmpty()) {
//             this.head = newNode
//             this.tail = newNode
//         }
//         else{
//             this.tail.next = newNode
//             this.tail = newNode
//             // else{
//             //     let tempNode = this.head
//             //     while(tempNode.next){
//             //         tempNode = tempNode.next
//             //     }
//             //     tempNode.next = newNode
//             // }
//         }
//         this.size++
//     }

//     printList(){ // O(n)
//         if(this.isEmpty()) console.log("List is Empty!")
//         else{
//             let tempNode = this.head
//             let listOutput = ''
//             while(tempNode){
//                 listOutput+= `${tempNode.value}=>`
//                 tempNode = tempNode.next
//             }
//             if(tempNode == null) listOutput+= 'null'
//             console.log(listOutput)
//         }
        
//     }

//     insertNewNodeAt(value, index){ // O(n)
//         if(index < 0 || index > this.size) console.log("Node not added! index provided is beyond list bounds")
//         else if (index === 0) this.prependNode(value)
//         else if (index === this.size) this.appendNode(value)
//         else{
//             let prevNode = this.head
//             let newNode = new Node(value)
//             for(let i = 0; i < index - 1; i++){ // to get to node at prev index
//                 prevNode = prevNode.next
//             }
//             newNode.next = prevNode.next
//             prevNode.next = newNode
//             this.size++
//         }
//     }

//     removeNodeAt(index){ // O(n)
//         if(index < 0 || index >= this.size) {
//             console.log("Node not removed! index provided is beyond list bounds")
//             return null
//         }
//         else if (index == 0) {
//             let currNode = this.head
//             this.head = currNode.next
//         }
//         else{
//             let prevNode = this.head
//             for(let i = 0; i<index-1; i++){
//                 prevNode = prevNode.next
//             }
//             let currNode = prevNode.next
//             prevNode.next = currNode.next
//         }
//         this.size--
//     }

//     removeNodeWithValue(value){ // O(n)
//         if(this.isEmpty()) {
//             console.log("List is Empty!, No node Removed")
//             return null
//         }
//         else if (this.head.value == value) {
//             this.head = this.head.next
//             this.size--
//         }
//         else{
//             let prevNode = this.head
//             while(prevNode.next && prevNode.next.value !== value){
//                 prevNode = prevNode.next
//             }
//             if(prevNode.next){
//                 prevNode.next = prevNode.next.next
//                 this.size--
//             }
//         }
    
        
//     }

//     searchNode(value){ // O(n)
//         if(this.isEmpty()) return null
//         else{
//             let tempNode = this.head
//             for(let i = 0 ; i < this.size; i++){
//                 if(tempNode.value === value) {
//                     console.log(`Found ${value} in the linked list at index ${i}`)
//                     return tempNode.value
//                 }
//                 tempNode = tempNode.next
//             }
//             console.log(`${value} not found in the linked list`)
//         }
//     }

//     reverseList(){ // O(n)
//         if(this.isEmpty()) console.log("Cannot Reverse an Empty list!")
//         else{
//             let prev = null
//             let curr = this.head
//             this.tail = this.head
//             while(curr){
//                 let next = curr.next
//                 curr.next = prev
//                 prev = curr
//                 curr = next
//             }
//             this.head = prev
//         }
//     }

//     removeNodeFromFront(){ // O(1)
//         if(this.isEmpty()) {
//             console.log("List is Empty!")
//             return null
//         }
//         const value = this.head.value
//         if(this.size === 1){
//             this.head = null
//             this.tail = null
//         }
//         else{
//             this.head = this.head.next
//         }
//         this.size--
//         return value
//     }

//     removeNodeFromEnd(){ // O(n)
//         if(this.isEmpty()) {
//             console.log("List is Empty!")
//             return null
//         }
//         const value = this.tail.value
//         if (this.size === 1) {
//             this.head = null
//             this.tail = null
//         }
//         else{
//             let prevNode = this.head
//             while(prevNode.next !== this.tail) {
//                 prevNode = prevNode.next
//             }
//             prevNode.next = null
//             this.tail = prevNode
//         }
//         this.size--
//         return value
//     }

// }

// class LinkedListStack{
//     constructor(){
//         this.list = new LinkedList()
//     }

//     push(value){ // O(1)
//         this.list.prependNode(value)
//     }

//     pop(){ // O(1)
//         return this.list.removeNodeFromFront()
//     }

//     peek(){ // O(1)
//         return this.list.head.value
//     }

//     isEmpty(){ // O(1)
//         return this.list.isEmpty()
//     }
    
//     print(){ // O(n)
//         return this.list.printList()
//     }
// }

// class LinkedListQueue{
//     constructor(){
//         this.list = new LinkedList()
//     }

//     enqueue(value){ // O(1)
//         this.list.appendNode(value)
//     }

//     dequeue(){ // O(1)
//         return this.list.removeNodeFromFront()
//     }

//     peek(){ // O(1)
//         return this.list.head.value
//     }

//     isEmpty(){ // O(1)
//         return this.list.isEmpty()
//     }
    
//     print(){ // O(n)
//         return this.list.printList()
//     }
// }

// // Note: We can use doubly linked list instead of singly linked list too
// // In doubly linked list we need to keep track of prev and next node
// // it is more memory intensive than singly linked list & is slower at traversal along the list
// // but can provide O(1) time complexity for deletion at end & traversal along the list is easier to understand and implement

// let list = new LinkedList()
// console.log(list.isEmpty())
// console.log(list.size)
// list.printList()
// list.appendNode(40)
// list.prependNode(30)
// list.prependNode(10)
// list.appendNode(50)
// list.insertNewNodeAt(20, 1)
// list.removeNodeAt(5)
// list.removeNodeWithValue(10)
// list.removeNodeWithValue(30)
// list.searchNode(60)
// list.reverseList()
// list.removeNodeFromFront()
// list.removeNodeFromEnd()
// list.removeNodeFromFront()
// list.removeNodeFromEnd()
// list.printList()

// let stack = new LinkedListStack()
// console.log(stack.isEmpty())
// stack.push(10)
// stack.push(20)
// stack.push(30)
// console.log(stack.list.size)
// stack.pop()
// console.log(stack.peek())
// stack.print()

// let queue = new LinkedListQueue()
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.list.size)
// queue.dequeue()
// console.log(queue.peek())
// queue.print()
