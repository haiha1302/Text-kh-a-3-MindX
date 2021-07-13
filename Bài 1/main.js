function adjacentElementsProduct(inputArray) {
    var multiplyMax = inputArray[0] * inputArray[1]
    for (i = 0;  i < inputArray.length - 1; i++) {
        var multiply = inputArray[i] * inputArray[i + 1]
        if (multiply > multiplyMax) { 
            multiplyMax = inputArray[i] * inputArray[i + 1] 
        }
    }
    return multiplyMax
}
console.log(adjacentElementsProduct([2, -4, -5, -2, 4]))
console.log(adjacentElementsProduct([1, 3, 5, 6, 5, 9, 9]))