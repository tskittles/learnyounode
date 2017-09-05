function babySteps(){
    //var arr = Array.prototype.slice.call(arguments);
    var arr = process.argv.slice(2, process.argv.length);
    var output = arr.reduce(function (accumulator, currentValue){
        return Number(accumulator) + Number(currentValue);
    });
    if(output === 'undefined'){
        return '';
    } else {
        return output;
    }
}

console.log(babySteps());


