// function funcA(param) {
//   // console.log(typeof param);
//   param("day la thong bao moi nhat.");
// }

// function myCallback(msg) {
//   console.log("Noi dung thong bao:", msg);
// }

// // myCallback("day la thong bao moi nhat");

// funcA(myCallback);

// const student1 = {
//   id: 1,
//   name: "Kỳ Bùi",
//   age: 25
// };
// const student2 = {
//   id: 2,
//   name: "Gia Bảo",
//   age: 28
// };
// const student3 = {
//   id: 3,
//   name: "Loi",
//   age: 24
// };

// Array.prototype.forEach2 = function (callback) {
//   if (typeof callback !== "function") {
//     throw new Error("Vui long truyen vao callback hop le!");
//   }
//   // for (let i = 0; i < this.length; i++) {
//   //   callback(this[i], i, this);
//   // }
//   for (let index in this) {
//     if (this.hasOwnProperty(index)) {
//       callback(this[index], index, this);
//     }
//   }
// };

// let students = [student1, student2, student3];

// // students.forEach((item, index, originalArray) => {
// //   console.log("Sinh vien tai vi tri", index, "co ten la:", item.name);
// // });

// students.forEach2((item, index, originalArray) => {
//   console.log("Sinh vien tai vi tri", index, "co ten la:", item.name);
// });

// students.forEach2(123);

// const newArr = new Array(20);

// newArr.forEach2((item) => {
//   console.log(item);
// });
