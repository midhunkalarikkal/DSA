function findVowels(str){
    let vowels = ["a","e","i","o","u","A","E","I","O","U"]
    for(let char in str){
        if(vowels.includes(str[char])){
            console.log(str[char])
        }
    }
}

const str = "MIdhun"
findVowels(str)