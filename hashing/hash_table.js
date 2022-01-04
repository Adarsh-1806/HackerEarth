class HashTable{
    constructor(size=50){
      this.list =  new Array(size)
      this.size = size
    }
  
    hash(key){
      return key.toString().length % this.size;
    }
    
    // Insert data
    setItem(key,value){
      let index = this.hash(key);
      
      if(!this.list[index]){
        this.list[index] = [];
      }
      
      this.list[index].push([key,value])
      return index
    }
  
    // Search data
    getItem(key){
      let index = this.hash(key);
    
       if(!this.list[index])return null
       
          for(let bucket of this.list[index]){
               // key
            if(bucket [0] === key){
               // value
              return bucket [1]
             }
          }
    }
  }
  
  const hashTable = new HashTable();
  // Insert data to the hash table
  hashTable.setItem("a1","Data structures algorithms");
  hashTable.setItem("a2","Data analytics");
  hashTable.setItem("a3","Cyber security");
  hashTable.setItem("b1","Business Intelligence");
  hashTable.setItem("b2","Software Development");
  
  // Search data from the hash table 
  console.log(hashTable.getItem("a1"));