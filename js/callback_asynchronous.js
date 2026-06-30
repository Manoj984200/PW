function processData(data) {
    console.log('processing.....'+data);
       
    
}
function deleteData(data) {
    console.log('deleting.....'+data);
    
}
function func(methodName) {
    methodName('John')
    methodName('Cena')
}
func(deleteData);