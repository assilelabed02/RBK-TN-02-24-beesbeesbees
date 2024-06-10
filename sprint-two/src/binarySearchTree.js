
class BinarySearchTree {
  constructor(value){
      this.left  = null;
      this.right = null
      this.value = value
  }
  insert(val){
      if (val < this.value) {
          if (this.left === null) {
            this.left = new BinarySearchTree(val);
          } else {
            this.left.insert(val);
          }
        } else if (val > this.value) {
          if (this.right === null) {
            this.right = new BinarySearchTree(val);
          } else {
            this.right.insert(val);
          }
        } else {
         return "value already exists"
        }
  }
  contains(val){
      if (val === this.value) {
          return true;
        } else if (val < this.value) {
          return !!(this.left && this.left.contains(val));
        } else if (val > this.value) {
          return !!(this.right && this.right.contains(val));
        }
  }
  depthFirstLog(callBack){
      callBack(this.value);
      if (this.left) {
        this.left.depthFirstLog(callBack);
      }
      if (this.right) {
        this.right.depthFirstLog(callBack);
      }
  }

}



/*
* Complexity: What is the time complexity of the above functions?
*/
