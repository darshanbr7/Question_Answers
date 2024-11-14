// find the lower case letterr only
function findLowerCase ( str ) {
    let result = "";
    for( let ele of str ) {
        if( ele == ele.toLowerCase()){
            result += ele
        }
    }
    return result ;
}
console.log (findLowerCase("ALLcBJHaNJJVt"))