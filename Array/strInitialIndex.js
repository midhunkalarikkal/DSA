var strStr = function(haystack, needle) {
    if(needle === "" || needle.length > haystack.length){
        return -1
    }
    for(let i = 0; i <= haystack.length - needle.length; i++){
        if(haystack.substring(i,i+needle.length) == needle){
            return i
        }
    }
    return -1
};
let haystack = "sadbutsad", needle = "sad"
console.log(strStr(haystack,needle))