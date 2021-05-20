function convertFahrToCelsius(fahrenheit){
    var fahrenheitTemp = ((fahrenheit - 32) * 5 / 9);
    var fahrenheitToCelsius = fahrenheitTemp.toFixed(4);
    var message = fahrenheitToCelsius

    if (typeof fahrenheit == 'number'){
        return fahrenheitToCelsius

    } else if (typeof fahrenheit === 'string'){
        return  "I feel good! is not a valid number but a string"

    } else if ( Array.isArray(fahrenheit)){
        return "[1,2,3] is not a valid number but a/an array"

    } else if (typeof fahrenheit === 'object'){
        return "{temp: 0} is not a valid number but a/an object"

    } else if ( typeof fahrenheit === 'boolean'){
        return "true is not a valid number but a/an boolean"

    } else{
        return message
    }
}
   
   console.log(convertFahrToCelsius(20));
   console.log(convertFahrToCelsius(parseFloat("20")));
   console.log(convertFahrToCelsius("I feel good!"));
   console.log(convertFahrToCelsius([1,2,3]));
   console.log(convertFahrToCelsius({"temp": 0}));
   console.log(convertFahrToCelsius(true));


   function checkYuGiOh(n){
    let parsedNum;
    if(!Array.isArray(n)){
    parsedNum = parseInt(n)
    }
    if (isNaN(parsedNum)) {
    return `invalid parameter: ${JSON.stringify(n)}`;
    }
    let arr = Array.from({length: n}, (_, i) => i + 1);
    let results = []
    for(let i = 0; i < arr.length; i++){
        if((arr[i] % 2 === 0) && (arr[i] % 3 === 0) && (arr[i] % 5 === 0)){
            results.push("yu-gi-oh")
        }else if((arr[i] % 2 === 0) && (arr[i] % 3 === 0)){
            results.push("yu-gi")
        }else if((arr[i] % 2 === 0) && (arr[i] % 5 === 0)){
            results.push("yu-oh")
        }else if((arr[i] % 3 === 0) && (arr[i] % 5 === 0)){
            results.push("gi-oh")
        }else if(arr[i] % 2 === 0){
            results.push("yu")
        }else if(arr[i] % 3 === 0){
            results.push("gi")
        }else if(arr[i] % 5 === 0){
            results.push("oh")
        }else{
            results.push(arr[i])
        }

    }

    console.log(results)
    return results
}