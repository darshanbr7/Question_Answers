// find the charcode value of  the given oppoite  lowercase or upperCAse  character
const counterPartCharCode = ( char ) =>{
    if( char == char.toUpperCase()){
        return char.toLowerCase().charCodeAt()
    } else {
        return char.toUpperCase().charCodeAt()
    }
}

console.log( counterPartCharCode("a"))
console.log( counterPartCharCode("A"))