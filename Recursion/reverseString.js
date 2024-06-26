const reverseString = str => {
    if(str === ""){
        return ""
    }else{
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}

const str = "Hello"
console.log(reverseString(str))