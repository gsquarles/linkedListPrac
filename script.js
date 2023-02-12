class Node{
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}

class linkedList{
    constructor(head = null){
        this.head = head;
    };
    append(value){
        //Check if it is an empty node
        if(!this.head){
            this.head = new Node(value);
            return this;
        }
        let tail = this.getTail();
        tail.next = new Node(value);
        return tail;
    };

    prepend(value){
        //Check if it is an empty node
        if(!this.head){
            this.head = new Node(value);
            return this;
        }
        const prevHead = this.head;
        this.head = new Node(value, prevHead);
    }

    size(){
        //Check if list is empty
        if(!this.head) return 0;
        let tail = this.head;
        let total = 1;
        while(tail.next !== null){
            tail = tail.next;
            total++;
        }
        return total;
    }

    getHead(){
        //Check if list is empty
        if(!this.head) return null;
        return this.head;
    }

    getTail(){
        //Check if list is empty
        if(!this.head) return null;
        let tail = this.head;
        while(tail.next !== null){
            tail = tail.next;
        }
        return tail;
    }

    at(index){
        //Check if list is empty
        if(!this.head) return null;
        let node = this.head;
        let counter = 0;
        while(counter < index){
            node = node.next;
            counter ++;
        }
        return node;
    }

    pop(){
        //Check if list is empty
        if(!this.head) return null;
        let index = this.size() - 2;
        let node = this.at(index);
        node.next = null;
    }

    contains(value){
        //Check if list is empty
        if(!this.head) return false;
        let node = this.head;
        while(node !== null){
            if(node.value === value){
                return true;
            }
            node = node.next;
        }
        return false; 
    }

    find(value){
        //Check if list is empty
        if(!this.head) return null;
        let node = this.head;
        let counter = 0;
        while(node !== null){
            if(node.value === value){
                return counter;
            }
            node = node.next;
            counter++;
        }
        return null; 
    }

    toString(){
        //Check if list is empty
        if(!this.head) return 'null';
        let node = this.head;
        let stringContainer = '';
        while(node.next !== null){
            stringContainer = `${stringContainer} ( ${node.value} ) ->`;
            node = node.next;
        }
        return `${stringContainer} ( ${node.value} ) -> null`;
    }

    insertAt(value, index) {
        if (!this.head) {
          this.head = new Node(value);
          return this;
        }
      
        let currentNode = this.head;
        let nextNode = currentNode.next;
        let counter = 0;
      
        while (currentNode !== null) {
          if (counter === (index-1)) {
            currentNode.next = new Node(value, nextNode);
            return this;
          }
      
          currentNode = currentNode.next;
      
          if (currentNode !== null) {
            nextNode = currentNode.next;
          }
      
          counter++;
        }}
    
    remove(index){
        //Check if list is empty
        if(!this.head) return null;
        let currentNode = this.head;
        let counter = 0;
        while(currentNode !== null){
            if(counter === (index-1)){
                currentNode.next = currentNode.next.next;
            }
            currentNode = currentNode.next;
            counter++;
        }
    }
}

/*let list = new linkedList();
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.prepend(1);
console.log(list);
console.log(list.toString());
list.remove(2);
console.log(list.toString());
list.remove(3);
console.log(list.toString());
*/
