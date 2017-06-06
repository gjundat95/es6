let arr = [1,2,3];
arr.push(7);
let [a,b,c] = arr;
console.log(a+""+b+""+c);


var person = {
    name: 'Tinh Ngo',
    address: 'Kinh Mon, Hai Duong',
    age: 20
};

let {name: x, address: y, age: z} = person;
console.log(x);
