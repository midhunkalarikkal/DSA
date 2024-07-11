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

    set(key , value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const existingItem = bucket.find( item => item[0] === key)
            if(existingItem){
                existingItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const existingItem = bucket.find(item => item[0] === key)
            if(existingItem){
                return existingItem[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const itemIndex = bucket.findIndex( item => item[0] === key)
            if(itemIndex !== -1){
                bucket.splice(itemIndex,1)
            }
        }
    }

    display(){
        for(let i = 0; i < this.table.length; i++){
            console.log(i," : ",this.table[i])
        }
    }

    resize(){
        const newsize = this.size * 2
        const newTable = new HashTable(newsize)
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                for(const [key,value] of this.table[i]){
                    this.set([key,value])
                }
            }
        }
        this.table = newTable
    }
}