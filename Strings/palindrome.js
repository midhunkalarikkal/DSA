function palindrome(str){
    str = str.toLowerCase();
    
    let reverseStr = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    
    if (str === reverseStr) {
        return "It's a palindrome";
    } else {
        return "Not a palindrome";
    }
}

console.log(palindrome("MALAYALAM"))