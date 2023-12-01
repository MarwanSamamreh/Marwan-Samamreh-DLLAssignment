const DoublyLinkedList = require("./DoublyLinkedList");
const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(list);
console.log("the value of index 1 is: " + list.get(1));
list.set(1, 24);
console.log("the new value of index 1 is: " + list.get(1));
