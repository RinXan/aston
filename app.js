function sayHi(){
	console.log("Hello, World!");
}

function sayBy(){
	console.log("By-by");
}

function greating(name){
	console.log("Hello,", name);
}

// homeWork_02

let counter = {counter: 0};
let counter2 = new Object();
let counter3 = Object.create({});
let counter4 = Object.assign({}, counter);
let counter5 = new Counter();

function Counter() {
	this.value = 0;
}

class CounterClass {
	constructor() {
		this.value = 0;
	}
}

let counter6 = new CounterClass();

// ********************

let copy = {};

for(key in counter) {
	copy[key] = counter[key];
}

let copy2 = Object.assign({}, counter);
let copy3 = {...counter};
let copy4 = JSON.parse(JSON.stringify(counter));
let copy5 = cloneDeep(counter);     // function from lodash library
let copy6 = structuredClone(counter); // global method to deep object copy

// ********************

function makeCounter() {
	return {value: 0};
}

const makeCounter2 = function() {
	return {value: 0};
}

const makeCounter3 = () => {
	return {value: 0}
}

// reverse string using array methods

function reverseStr(str) {
	return str.split('').reverse().join('');
}

// deep comparison function of objects


