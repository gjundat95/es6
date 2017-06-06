var a = 1;
var b = 100;
// es6 
function getSalary(isTrue = true){
    if(isTrue){
        let a = 100;
        return a + b;
    }
    return a + b;
}

console.log(getSalary());
console.log(getSalary(false));