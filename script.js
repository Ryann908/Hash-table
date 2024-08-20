class Node {
    constructor(key, value, next = null) {
      this[key] = value;
      this.next = next;
    }
  }



class HashMap{
    storage = 16;
    loadFactor = 0.75;
    max = this.storage * this.loadFactor;
    buckets = new Array(this.storage).fill(null);
    size = 0;

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.storage;
        }
            return hashCode;
      }
      
    set(key, value){
        let node =  new Node(key, value);
        const idx = this.hash(key);

        if (idx < 0 || idx >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        let current;
        current = this.buckets[idx];

        if(!current){
            this.buckets[idx] = node;
            this.size++;
        } 
        else if(current){
            while(current.next){
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
        this.reSize();
    }
    get(key){
        const idx = test.hash(key);
        let current = this.buckets[idx];
        if(current.next && Object.keys(current)[0] !== key){
            while(current.next){
                current = current.next;
        }
        return current[key]
    } else{
        return current[key]
    }
    }
    
    
    ///
    has(key){
        const idx = this.hash(key);
        let current = this.buckets[idx];
        if(current){
            while(!current[key] && current.next){
                current = current.next;
            }
            if(current[key]){
                return true;
            } else{
                return false;
            } 
       } else {
        return false;
       }
    }

   
   // add logic for mutiple linkedlists nexts 
    remove(key){
        const idx = test.hash(key);
        let current = this.buckets[idx];
        if(current.next && Object.keys(current)[0] !== key){
            while(current.next){
                current = current.next;
        }
        this.size--;
        return this.buckets[idx].next = null;
    } else{
        this.size--;
        return this.buckets[idx] = null;
    }
    }
    length(){
        return this.size;
    }
    clear() {
        this.buckets = new Array(this.storage).fill(null);
        this.size = 0;
    }
    ////////
    keys(){
        let arr = [];
        for(let i = 0; i < this.buckets.length; i++){
            let current = this.buckets[i];
            if(current){
                while(current){
                arr.push(Object.keys(current)[0]); 
                current = current.next;
                } 
            }
        }
        return arr;
    }
    /////
    values(){
        let arr = [];
        for(let i = 0; i < this.buckets.length; i++){
            let current = this.buckets[i];
                while(current){
                    arr.push(Object.values(current)[0]); 
                    current = current.next
                }             
        }
        return arr;
    }

    entries() {
        let copy = [];
        for (let i = 0; i <= this.buckets.length; i++) {
          let current = this.buckets[i];
          if (current) {
            while (current) {
              let [key, value] = Object.entries(current)[0];
              copy.push([key, value]);
              if(current.next){
                [key, value] = Object.entries(current.next)[0];
                copy.push([key, value]);
              }
              current = current.nextNode;
            }
          }
        }
        return copy;
      }
    
      reSize() {
        if (this.size >= this.max) {
          this.storage = this.storage * 2;
          this.max = this.storage * this.loadFactor;
          let copy = this.entries();
          this.clear();
          this.buckets.length = this.storage;
          copy.forEach((entry) => {
            this.set(entry[0], entry[1]);
          });
        }
        return;
      }
    
    
}

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')

test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')

test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')






console.log(test.buckets.length);

console.log(test.remove('grape'));
console.log(test.length());
console.log(test.buckets)



