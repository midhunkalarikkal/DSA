function firstCharCap(str){
    return str.split(" ").map((word)=> word.charAt(0).toUpperCase() + word.slice(1).toLoweCase()).join("")
}

console.log("iam a software enginner")