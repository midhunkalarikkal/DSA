class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
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
}

const ht = new HashTable(50)
ht.set("astin","Aston martin")
ht.set("bntl","Bently")
ht.set("cadil","Cadilac")
ht.set("dg","Dodge")
ht.set("fr","Ferrari")
ht.set("er","Entevour")
ht.display()
