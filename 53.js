// swaping the case  for the given value;
const swapCase  = ( str ) => {
    let result = "";
    for( let ele of str ) {
        if( ele == ele.toUpperCase()){
            result += ele.toLowerCase()
        } else{
            result += ele.toUpperCase()
        }
    }
    return result;
}
console.log( swapCase("Happy Birthday"))