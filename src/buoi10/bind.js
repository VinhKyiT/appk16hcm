// let sinhVien = {
//   ten: "Ngọc Anh",
//   getTen: function () {
//     console.log(this.ten);
//   },
//   chaoHoi: function (message, dauCau) {
//     console.log(this.ten + " " + message + dauCau);
//   }
// };

// const fn1 = sinhVien.chaoHoi.bind(sinhVien);
// fn1("tạm biệt bạn", ".");
// // setTimeout(fn1, 1000);

// let vanDongVien = {
//   ten: "Ngọc Anh",
//   chay: function (tocDo) {
//     console.log(this.ten + " chạy được " + tocDo + " m/s.");
//   }
// };

// let chim = {
//   ten: "Chim chích",
//   bay: function (tocDo) {
//     console.log(this.ten + " bay được " + tocDo + " m/s.");
//   }
// };
// let chay = vanDongVien.chay.bind(chim, 0.5);
// chay();

/**
 * Hãy viết một hàm bindMethod nhận vào một đối tượng
 * và tên phương thức, sau đó trả về một phiên bản của
 * phương thức đã được gắn với đối tượng đó. Hàm này nên
 * hoạt động tương tự như bind().
 */
// function bindMethod(obj, methodName) {
//   return obj[methodName].bind(obj);
// }

// const person = {
//   name: "Alice",
//   greet() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// const boundGreet = bindMethod(person, "greet");
// boundGreet(); // Kết quả: Hello, Alice!
