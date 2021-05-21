function convertFahrToCelsius(num){
    let result;
    if (!isNaN(num) && num!==null && num!==""){
        result= Number(((+num - 32) *5/9).toFixed(4));
    }else{
        result=`${num} is not a valid number, but a/an    ${ typeof num} parameter type .` ;
    }
    return result;
}

convertFahrToCelsius(0);