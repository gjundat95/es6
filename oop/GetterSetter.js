'use strict'
class Animal {

    constructor(name = 'Dog'){
        this._name = name;
    }

    set name(value){
        this._name = value;
    }
    get name(){
        return this._name;
    }

    walk(){
        return `${this._name} walking in roard`;
    }
    
}

let animal = new Animal();

console.log(animal.walk());