"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    //return function(_: Function) { // we can pass in an underscore so that typescript knows we understand there's an argument here, but we're not nessecairly using it right now
    return function (constructor) {
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
//@Logger('Logging - Person') // better to pass the decorator as a fuction so that we can then update what our decorator initially does. 
let Person1 = class Person1 {
    constructor() {
        this.name = "Rob";
        console.log('Creating person object...');
    }
};
Person1 = __decorate([
    Logger('Hey Rob'),
    WithTemplate('<h1> My Name is Rob </h1>', 'app') // executes the fuction logging template bottom up, but at initialization logger would create first
], Person1);
function Log(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
class Product {
    constructor(title, _price) {
        this.title = title;
        this._price = _price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Price should be positive');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
const person1 = new Person1();
console.log(person1);
const product = new Product('shirt', 3);
console.log(product.getPriceWithTax(.10)); // making sure that the 
