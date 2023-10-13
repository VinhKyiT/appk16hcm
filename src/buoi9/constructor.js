// Cach tao object thong thuong
// let xeMay = {
//   brand: "Yamaha",
//   type: "Exciter 150",
//   color: "black",

//   noMay: function () {
//     console.log("No may xe");
//   }
// };

// console.log("xeMay", xeMay);

// Cach tao object bang ham constructor
// function Bike(brand, type, color) {
//   if (!new.target) {
//     // throw Error("Ham construtor phai duoc khai bao voi tu khoa new");
//     return new Bike(brand, type, color);
//   }

//   this.brand = brand;
//   this.type = type;
//   this.color = color;

//   this.noMay = function () {
//     console.log("No may xe " + this.type + " cua hang " + this.brand);
//   };
// }

// let xeMay1 = new Bike("Yamaha", "Exciter", "black");
// let xeMay2 = Bike("Honda", "Winnder", "red");
// console.log(xeMay2.brand);

// Prototype
// Định nghĩa một constructor function (hàm tạo đối tượng)
// function Person(name) {
//   this.name = name;

//   // this.sayHello = function () {
//   //   console.log("Hello, my name is " + this.name);
//   // };
// }

// // Thêm phương thức sayHello() vào prototype của đối tượng Person
// Person.prototype.sayHello = function () {
//   console.log("Hello, my name is " + this.name);
// };

// // Thêm thuộc tính age vào prototype của đối tượng Person
// Person.prototype.age = 20;
// // Tạo đối tượng person1 và person2 từ Person
// let person1 = new Person("Ky");
// let person2 = new Person("Bao");

// // Gọi phương thức sayHello() trên đối tượng person1
// // person1.sayHello(); // In ra: Hello, my name is Ky
// // person2.sayHello();

// console.log(person1.__proto__);

// function Animal(name, leg) {
//   this.name = name;
//   this.leg = leg;
//   this.action = () => {
//     console.log("Keu meo meo");
//   };
// }

// const conMeo = new Animal("Meo", "4");

// console.log("conMeo", conMeo);
// conMeo.action();
