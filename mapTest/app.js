
let map = new Map([
    ['name','Ngo Doan Tinh'],
    ['email', 'gjundat95@gmail.com'],
    ['website', 'jundat95.com']
]);

console.log(map);

let map1 = new Map();
map1.set('name', 'Ngo Doan Tinh');
map1.set('address', 'Kinh Mon, Hai Duong');
map1.set('age',5);

// for(let [key, value] of map1){
//     console.log("Key: "+key+" - Value: "+value);
// }

map1.forEach((value, key) => {
    console.log("Key: "+key+" - Value: "+value);
});
console.log(map1);


