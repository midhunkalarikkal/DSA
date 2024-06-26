function shiftChar(char,n){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = alphabet.toUpperCase();

    if(alphabet.includes(char)){
        let newIndex = (alphabet.indexOf(char)+n) % 26
        if(newIndex < 0){
            newIndex += 26
        }
        return alphabet[newIndex]
    }else if(upperAlphabet.includes(char)){
        let newIndex = (upperAlphabet.indexOf(char)+n) % 26
        if(newIndex < 0){
            newIndex += 26
        }
        return upperAlphabet[newIndex]
    }else{
        return char
    }
}

function replaceWithNthPosition(str,n){
    let result = ""
    for(let char of str){
        result += shiftChar(char,n)
    }
    return result
}

console.log(replaceWithNthPosition("midhun",8))