var setTest = new Set([1,2,3,4]);
setTest.add(5);
console.log(setTest);
setTest.delete(1);

var arr = [...setTest];
console.log(arr);

// Map
let mapTest = arr.map((x)=>{
    return x * 2;
});
console.log(mapTest);

// Filter
let filterTest = arr.filter((x)=>{
    return (x % 2) == 0;
});
console.log(filterTest);
