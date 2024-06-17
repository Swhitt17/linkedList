/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** LinkedList: chained together nodes. */
  
  class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }

    find(idx){
        let currentNode = this.head;
        let count = 0;

        while(currentNode !== null && count != idx){
            count +=1;
            currentNode = currentNode.next ;
        }

        return currentNode;
          
    }
  
    /** push(val): add new value to end of list. */
  
    push(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } 
        if(this.tail !== null){
            this.tail.next = newNode;
            this.tail = newNode;
        }   
        
        this.length += 1;
  
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
        let newNode = new Node(val);

        if(this.head !== null){
            newNode.next = this.head;
            this.head = newNode;
        } 
        else{
            this.head = newNode;
        }

        

        this.length +=1;
  
    }
  
    /** pop(): return & remove last item. */
  
    pop() {

    return this.removeAt(this.length -1)
        // let previous = this.head;
        // let temp = this.head.next;
        // while(temp.next !== null){
        //     previous = previous.next
        // }
        // previous.next = null;
        // this.tail = previous;
  
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
        let temp;
        temp = this.head;
        this.head = this.head.next;
        return this.head;

  
    }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
        if(idx >= this.length || idx < 0){
            throw new Error("Index exceeds list size")
        }

        return this.find(idx).val
    

        // let currentNode = this.head;
        // let currentInd = 0;
        // while(currentInd <= idx){
        //    currentNode = currentNode.next;
        // }
        // return currentNode.val
  
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
        if(idx >= this.length || idx < 0){
            throw new Error("Index exceeds list size")
        }
        let currentNode = this.find(idx);
        currentNode.val = val


        // let currentNode = this.head;
        // let currentInd = 0;
        // while(currentInd <= idx){
        //     currentNode = currentNode.next;
        // }
        // currentNode = val
        // return currentNode.val;
  
    }
  
    /** insertAt(idx, val): add node w/val before idx. */
  
    insertAt(idx, val) {
        if(idx >= this.length || idx < 0){
            throw new Error("Index exceeds list size")
        }

        if(idx === 0) return this.unshift(val);
        if(idx === this.length) return this.push(val)

            let previous = this.find(idx-1)
            let newNode = new Node(val);
            newNode.next = previous.next;
            previous.next = newNode;
            this.length +=1;



        // let newNode = new Node(val);
        // let previous = this.head;
        // let currentIdx = 0;
        // while(currentIdx < idx -1){
        //     previous = previous.next
        //     currentIdx +=1;
        // }
        // newNode.next = previous.next;
        // previous.next = newNode;
  
    }
  
    /** removeAt(idx): return & remove item at idx, */
  
    removeAt(idx) {

        if(idx >= this.length || idx < 0){
            throw new Error("Index exceeds list size")
        }

        // remove first node
        if(idx === 0){
            let val = this.head.val;
            this.head = this.head.next;
            this.length=-1;
            if(this.length < 2) this.tail = this.head
            return val;
        }
        let previous = this.find(idx - 1)

        //remove last node
        if(idx === this.length -1 ){
            let val = previous.next.val;
            previous.next = null;
            this.tail
            this.length=-1;
            return val;
        }

        let val = previous.next.val;
        previous.next = prev.next.next;
        this.length -=1;
        return val;


        // let currentNode = this.head;
        // let previous = this.head;
        // let currentIdx = 0;
        // let previousIdx = 0;


        // while(currentIdx < idx){
        //     currentNode = currentNode.next
        //     currentIdx+=1
        // }

        // while(previousIdx < idx -1){
        //     previous = previous.next
        //     previousIdx +=1
        // }

        // previous.next = currentNode.next
        // return previous.next.val
  
    }
  
    /** average(): return an average of all values in the list */
  
    average() {

    if(this.length === 0) return 0;
       let currentNode = this.head;
       let total = 0;
        // const total = this.vals.reduce(acc,currVal => acc, currVal,currentNode)

   while(currentNode){
    total += currentNode.val
    currentNode = currentNode.next
   }
      return total/this.length
      
    }
  }
  
  module.exports = LinkedList;
  