// class SimpleDate {

//     constructor(year, month, day){

//         this.year = year;
//         this.month = month;
//         this.day = day;
//     }

//     addDays(nDays){
//         this.day = nDays;
//     }

//     getDay(){
//         return this.day;
//     }
// }

// Privacy with Weak Maps
// let today = new SimpleDate(2017, 6, 6);
// today.addDays(16);
// document.writeln(today.day);

// Symbol
// let SimpleDate = (function(){
//     let _yearKey = Symbol();
//     let _monthKey = Symbol();
//     let _dayKey = Symbol();

//     class SimpleDate{
//         constructor(year, month, day){
//             this[_dayKey] = year;
//             this[_monthKey] = month;
//             this[_dayKey] = day;
//         }

//         addDays(nDays){

//         }

//         getDay(){
//             return this[_dayKey];
//         }
//     }

//     return SimpleDate;

// })();

// let SimpleDate = (function(){

//     let _years = new WeakMap();
//     let _months = new WeakMap();
//     let _days = new WeakMap();

//     class SimpleDate{
//         constructor(year, month, day){
//             _years.set(this, year);
//             _month.set(this, month);
//             _day.set(this, _days);
//         }

//         addDays(nDays){

//         }

//         getDay(){
//             return _days.get(this);
//         }
//     }

//     return SimpleDate;

// })();

// let getDay = SimpleDate.prototype.getDay;
// getDay.call(today);
// getDay.call(tomorrow);
// console.log(tomorrow.getDay());