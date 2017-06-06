var arrName = ['Tinh','Tu','Cuong','Linh','Tung'];
arrName.map((value, key)=>{
    console.log(value.toUpperCase());
    arrName[key] = value.toUpperCase();
});

console.log(arrName);

console.log(typeof(()=>{}));


setTimeout(()=>{
    console.log('3s');
},1000);
