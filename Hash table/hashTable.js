class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
        this.count = 0
    }

    hash(key){
        let total = 0
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const exisitng = bucket.find(item => item[0] === key)
            if(exisitng){
                exisitng[1] = value
            }else{
                bucket.push([key,value])
            }
        }
        this.count ++
        if(this.count / this.size > 0.7){
            this.resize()
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const exisitng = bucket.find(item => item[0] === key)
            if(exisitng){
                return exisitng[1]
            }
        }
        return undefined
    }
    
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const itemIndex = bucket.findIndex(item => item[0] == key)
            if(itemIndex !== -1){
                bucket.splice(itemIndex,1)
                this.count--
            }
        }
    }

    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i ," : ",this.table[i])
            }
        }
    }

    resize(){
        const newSize = this.size * 2
        const newTable = new HashTable(newSize)
        const oldTable = this.table
        this.table = newTable
        this.size = newSize
        this.count = 0
        for(const bucket of oldTable){
            if(bucket){
                for(const [key , value] of bucket){
                    this.set(key, value)
                }
            }
        }
    }

    getSize(){
        return this.size
    }
}

const ht = new HashTable(50)
ht.set("astin","Aston martin")
ht.set("bntl","Bently")
ht.set("cadil","Cadilac")
ht.set("dg","Dodge")
ht.set("fr","Ferrari")
ht.set("er","Entevour")
ht.display()
console.log("Size of table : ",ht.getSize())
ht.resize()
console.log("Size of table : ",ht.getSize())