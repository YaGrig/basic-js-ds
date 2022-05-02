const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor(){
    this.first = null;
  }

  root() {
    return this.first;
  }

  add(data) {
    const node = this.first;
    if(node === null) {
      this.first = new Node(data);
      return
    } else {
      const searchTree = function(node){
        if(data < node.data){
          if(node.left === null){
            node.left = new Node(data);
            return
          } else if (node.left !== null){
            return searchTree(node.left);
          }
        } else if(data > node.data){
          if(node.right === null){
            node.right = new Node(data);
            return
          } else if (node.right !== null){
            return searchTree(node.right);
          }
        } else {
          return null
        }
      }
      return searchTree(node);
    }
  }

  has(data) {
    debugger;
    try{
      let current = this.first;
    while(current !== null && data !== null && current.data !== data){
      if(data < current.data){
        current = current.left;
      } else if (data > current.data){
        current = current.right;
      }
      else if( current == null) {
        return false;
      }
    }
    return current.data === data;
    }

    catch{
      return false
    }
  }

  find(data) {
    let current = this.first;
    if(current == null){
      return null;
    }
    while(current !== null && data !== null && current.data !== data){
      if(data < current.data){
        current = current.left;
      } else if (data > current.data){
        current = current.right;
      }
      else if( current == null) {
        return null;
      }
    }
    return current;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.first = removeNode(this.first, data);
  }

  min() {
    let current = this.first;
    while( current.left !== null){
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.first;
    while( current.right !== null){
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};