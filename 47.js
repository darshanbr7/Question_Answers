// findning the number of charcater apperanece in the given string
function findAccurence ( str, char ) {
    let count = 0;
    for( let ele of str ){
        if( ele == char){
            count++;
        }
    }
    return count;
}



console.log( findAccurence( "bangalore", "a") );
console.log( findAccurence( "hello", "a") )