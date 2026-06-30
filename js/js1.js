function abc(){
    console.log('hello');
    
}
function adc(fn){
    return fn();
}

adc(abc)