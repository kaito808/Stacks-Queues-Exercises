
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null; // Change to this.first
    this.last = null; // Change to this.last
    this.size = 0;
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return removedNode.val;
  }

  /** peek(): return the value of the top node in the stack. */
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
