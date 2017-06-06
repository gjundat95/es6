var testArrow = (name, message) => {
    console.log("Hello: "+name+" - Tin nhan gui den ban la: "+message);
};

// co mot lenh
var hello = (name, message) => console.log("Hello: "+name+" - Message: "+message);

// co mot tham so truyen vao
var hi = name => console.log("Xin chao: "+name);

// khong truyen tham so nao vao
var noParam = () => console.log("Hello World")

testArrow("tinh","Xin chao ba con");
hello("Ngo Tinh","Co gi hot");
hi("Tinh Ngo");
noParam();