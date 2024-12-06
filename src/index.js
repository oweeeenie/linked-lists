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
      this.head.next = nodeStart;
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
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
