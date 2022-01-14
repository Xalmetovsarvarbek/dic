
// var sound="grunt";
// var bear={sound:"roar"};
// function roar(){
//     console.log(this.sound);
// }
// roar.apply(bear);


// console.log('men')
// setTimeout(()=>{console.log('hi')},-1);
// console.log('menasas')

// let array=['a','b','c'];
// for (var i=0;i<array.length;i++){
//     console.log(array[i]);
// }

// let sarvar=["men","sen","u"];
// sarvar.pop();
// sarvar.splice(0,2);

// console.log(typeof(42));

// a=5;
// console.log(a++);
// console.log(++a);

// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// const obj2={
//     ...obj,
//     a:0
// }
// console.log(obj2.a,obj2.b);


// function salom(){var a=10;}
// console.log(a);


// class Car {
//     constructor(name) {
//       this.brand = name;
//     }
//   }
  
//   mycar = new Car("Ford");
// console.log(mycar.brand);

class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model+this.brand;
    }
  }
  mycar = new Model("Ford", "Mustang");
  console.log(mycar.show());