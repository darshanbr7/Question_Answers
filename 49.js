// capitalize the letter bsed on the  ascii value;
function asciiCapitalize ( str ) {
    let result = "";
    for( let ele of  str ) {
        if( ele.charCodeAt() %2 == 0 ){
            result += ele.toLowerCase();
        } else {
            result += ele.toUpperCase();
        }
    }
    return result ;
}
console.log(asciiCapitalize("hello user i'm from mandya"))