class _Node {
  constructor(value, next, prev) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

class DLQueue {
  constructor() {
    this.first = null
    this.last = null
  }

  insertFirst(item) {
    let newNode = new _Node(item, this.head, null);
    if (this.head !== null) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
  }
  insertLast(item) {
    let newNode = new _Node(item, null, this.tail);
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (this.head === null) {
      this.head = newNode;
    }
  }
  insertAfter(item, prevItem) {
    let currentNode = this.head;
    while (currentNode.value !== prevItem) {
      if (currentNode === null) {
        console.log('Item not found');
        return;
      }
      currentNode = currentNode.next;
    }
    if (currentNode === this.last) {
      insertLast(item);
    }
    else {
      let newNode = new _Node(item, currentNode.next, currentNode);
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next.previous = newNode;
      currentNode.next = newNode;
    }
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.value !== item) {
      current = current.next;
      if (current === null) {
        console.log('Item to remove is not on the list');
        return null;
      }
    }
    //found it - now remove it

    //if the node to be removed is head, make the next node head
    if (current === this.head) {
      this.head = current.next;
      //return;
    } else {
      current.prev.next = current.next;
    }

    //delete last node
    if (current === this.tail) {
      this.tail = current.prev;
    } else {
      current.next.prev = current.prev;
    }
  }
}


function displayList(list) {
  let currNode = list.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(lst) {
  let counter = 0;
  let currNode = lst.head;
  if (!currNode) {
    return counter;
  }
  else
    counter++;
  while (!(currNode.next == null)) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

function reverseDLL(lst) {
  let currNode = lst.head;
  let tempNode = null;

  while (currNode !== null) {
    //swapping nodes
    tempNode = currNode.next;
    currNode.next = currNode.prev;
    currNode.prev = tempNode;

    currNode = tempNode;
  }
  tempNode = lst.head;
  lst.head = lst.tail;
  lst.tail = tempNode
}

let DLL = new DoublyLinkedList()

DLL.insertFirst('Aquaria')
DLL.insertFirst('Caprica')

console.log(DLL)
