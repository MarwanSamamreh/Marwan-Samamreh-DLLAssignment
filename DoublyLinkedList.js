const Node = require("./node.js");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return this;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      this.head = node;
      node.next = temp;
      temp.prev = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.prev = null;
    }
    this.length--;
    return this;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    let node = new Node(val);
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    let temp = current;
    let prev = temp.prev;
    prev.next = node;
    node.next = temp;
    node.prev = prev;
    temp.prev = node;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    let prev = current.prev;
    let next = current.next;
    prev.next = next;
    next.prev = prev;
    this.length--;
    return true;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let current;
    let counter;

    if (index <= this.length / 2) {
      current = this.head;
      counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }

    return current.value;
  }

  set(index, val) {
    if (index < 0 || index >= this.length) return false;

    let current;
    let counter;

    if (index <= this.length / 2) {
      current = this.head;
      counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }

    current.value = val;
    return true;
  }
}

module.exports = DoublyLinkedList;
