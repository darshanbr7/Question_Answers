// find the unique element  in the array without using any inbuild methods

const findUnique = ( arr ) => {
    const uniqueEle = [ ]
    for ( let ele of  arr  ){
        if(arr.indexOf( ele) ===  arr.lastIndexOf( ele ) ) uniqueEle;
}

console.log( findUnique ( [ 10, 9, 10, 4, 13, 10, 9, 67 ]))