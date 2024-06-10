class LinkedList {
  constructor(){
    this.list = {}
    this.head = null;
    this.tail = null;
  }
  
  addToTail (value){
    var newTail = new Node(value)
    if(! this.head){
      this.head = newTail;
    }
    if(this.tail){
      this.tail.next = newTail
    }
    this.tail = newTail;
  }

  removeHead(){
    if(this.head === null){
      return null;
    }

    var currentHead = this.head;
    this.head = this.head.next
    return currentHead.value;
  }

  contains(target){
    var node = this.head;
    while(node){
      if(node.value === target){
        return true;
      }
      node = node.next
    }
    return false;
  }

}


class Node {
  constructor(value){
    this.value = value;
    this.next = null;    
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */