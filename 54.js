// find the unique characters in the given string;
const findUnique = ( str ) => {
    let unique = "";
    for( let ele of  str ){
        if(! unique.includes( ele )){
            unique += ele;
        }
    }
    return unique;
}
console.log( findUnique("hello world"));
console.log( findUnique("ddcctt"));

// finding the unique letter of given array
const findUniqueInArray = ( arr ) => {
    const result = []
    for( let ele of arr ) {
        if( !result.includes(ele)){
            result.push(ele)
        }
    }
    return result;
}
console.log(findUniqueInArray(["cat", "dog", "cow","cat"]))