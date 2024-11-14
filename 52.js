// finding the second largest value of the given array
const secondLargest = ( arr ) => {
    const sortedArr = arr.sort( (a, b) => b - a );
    const secondLargest =  sortedArr[1]
    return secondLargest;
   
}
console.log( secondLargest([ 10, 2, 40, 7]))
