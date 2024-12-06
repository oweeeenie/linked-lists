import './styles.css';

class LinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    let nodeEnd = new Node(value);

    if (this.head === null) {
      this.head = nodeEnd;
      this.tail = nodeEnd;
    } else {
      this.tail.next = nodeEnd;
      this.tail = nodeEnd;
    }
    this.size++;
  }

  prepend(value) {
    let nodeStart = new Node(value);
    if (this.head === null) {
      this.head = nodeStart;
      this.tail = nodeStart;
    } else {
      nodeStart.next = this.head;
      this.head = nodeStart;
    }
    this.size++;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  getSize() {
    return this.size;
  }

  at(index) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode !== null && count < index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.head;
    let previousNode = null;

    if (this.head === null) {
      return null;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return null;
    }

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = previousNode;
    previousNode.next = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
