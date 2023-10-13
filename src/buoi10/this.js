// let sinhVien = {
//   name: "Ky Bui",
//   age: 30,
//   averageScore: 8.5,
//   objCon: {
//     name: "Object con",
//     methodCon: function () {
//       const funcCon = () => {
//         console.log(this.name);
//       };
//       funcCon();
//     }
//   },
//   inThongTin: function () {
//     console.log(this);
//     // console.log(`Toi ten la ${this.name}, nam nay toi ${this.age} tuoi!`);
//   }
// };

// sinhVien.objCon.methodCon();

// function SinhVien(name, age) {
//   this.name = name;
//   this.age = age;

//   this.inThongTin = function () {
//     console.log(this);
//     // console.log(`Toi ten la ${this.name}, nam nay toi ${this.age} tuoi!`);
//   };
// }

// let sinhVien1 = new SinhVien("Phu", 19);
// let sinhVien2 = new SinhVien("Bao", 25);

// sinhVien2.inThongTin();

// function funcA() {
//   console.log(this);
// }
// funcA();

// console.log(this);

// function Car(name, brand, color) {
//   this.name = name;
//   this.brand = brand;
//   this.color = color;
// }
// Car.prototype.openDoor = function () {
//   return `Đang mở cửa chiếc ${this.name} màu ${this.color} của hãng ${this.brand}`;
// };

// const car1 = new Car("S450", "Mercesdes", "đen");
// const car2 = new Car("Aventador", "Lamborghini", "vàng");

// console.log(car1.openDoor());
// const openCar2Door = car2.openDoor;
// console.log(openCar2Door === car2.openDoor);

// console.log(openCar2Door());
