// Start your implementation here

// splitStringInto2Half, one containing the numberstring and anotherContaing FooString
// Convert numberString to Number and Increment the value,
// PadingCheck
//concat string


const bizarreStringIncrementer  = (inputString) =>{
    const INCREMENT_VALUE = 1
    const breakingPoint = getIndexBeforeAddition(inputString)
    const temp = stringSplitByNumber(inputString,breakingPoint)
    let fooString = temp[0]
    let numberString = temp[1]
    let incrementedString = incrementValue(numberString,INCREMENT_VALUE)
    let padString = checkPadding(numberString.length,incrementedString.toString())
    return fooString+ padString
}

stringSplitByNumber = (inputString,breakingPoint) =>{
    let foo_string = inputString.slice(0,breakingPoint+1)
    let num_string = inputString.slice(breakingPoint+1)
    if(!num_string){
        num_string = "0"
    }
    return [foo_string,num_string]
}
incrementValue = (numberString,incrementBy) =>{
    let incrementedNumber = parseInt(numberString) + incrementBy 
    return incrementedNumber
}
checkPadding = (paddingSize,incrementedString) =>{
    let paddedString =""
    if(paddingSize <incrementedString.length ){
        paddedString = incrementedString
    }
    else if (paddingSize == incrementedString.length){
        paddedString = incrementedString
    }
    else{
        var temp = ""
        var paddedZero =  paddingSize -incrementedString.length;
        for(let i = 0; i < paddedZero; i++){
            var temp = temp + "0"
        }
        paddedString = temp +incrementedString
    }

return paddedString
}


getIndexBeforeAddition = (inputString) =>{
let breakingPoint
    for(let i = 0; i < inputString.length; i ++){
        if(isNaN(parseFloat(inputString.charAt(i)))){
            breakingPoint = i
        }
    }
    return breakingPoint ||  inputString.toString().length
    }


console.log(bizarreStringIncrementer("foo"))
console.log(bizarreStringIncrementer("foo23"))
console.log(bizarreStringIncrementer("foo0041"))
console.log(bizarreStringIncrementer("foo9") )
console.log(bizarreStringIncrementer("foo099"))
console.log(bizarreStringIncrementer("f99oo"))
console.log(bizarreStringIncrementer("f99oo23"))
console.log(bizarreStringIncrementer("f99oo099"))
console.log(bizarreStringIncrementer("f99oo0099"))



