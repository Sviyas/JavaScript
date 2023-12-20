// Basic concepts of oops

// Class

/**
 *
 *
 ** 1. A javaScript object is an entity having state and behavior (properties and method).
 ** For example: car, pen, bike, chair, glass, keyboard, monitor etc.
 ** JavaScript is an object-based language. Everything is an object in JavaScript.

 ** In JavaScript, classes are the special type of functions. We can define the class just like function declarations and function expressions
 ** The JavaScript class contains various class members within a body including methods or constructor. The class is executed in strict mode. So, the code containing the silent error or mistake throws an error.
 */

//  Class Declarations example

class Employee {
  // ? initialize the private key declaring
  #secret = 'this is secret message';

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  detail() {
    return console.log(`hello ${this.name} , how are ur , ${this.#secret}`);
  }
}

const emp = new Employee(1, 'viyas');

emp.detail();

// ? Object Oriented Programming System
