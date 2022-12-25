class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length === 0 ? true : false; 
  }

  isEmpty() {
    return this.stackControl.length === 0 ? true : false;
  }

  push(item) {
    if (!this.canPush()) {
      throw new Error('STACK_OVERFLOW');
    } else {
      this.stackControl.push(item);
    }
    return this.stackControl;
  }

  pop() {
    if(!this.isEmpty()) {
      this.stackControl.pop();
    } else {
      throw new Error('STACK_UNDERFLOW');
    }
      return this.stackControl.pop();
  }

  display() {
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
