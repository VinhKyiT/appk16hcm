// const sinhVien = {
//   ten: "Ngọc Anh",
//   tuoi: 18
// };

// function chao(loiChao, hoiTham) {
//   return `${loiChao} ${this.ten}. ${hoiTham}`;
// }
// // let ketQua = chao.apply(sinhVien, ["Chào", "Khỏe không?"]);
// let ketQua = chao.call(sinhVien, "Chào", "Khỏe không?");

// console.log(ketQua);

// const lapTop = {
//   name: "Macbook",
//   isOn: false,
//   turnOn() {
//     this.isOn = true;
//     return `${this.name} đang mở`;
//   },
//   turnOff() {
//     this.isOn = false;
//     return `${this.name} đang tắt`;
//   }
// };

// const mobile = {
//   name: "iPhone",
//   isOn: false
// };

// const moDienThoai = lapTop.turnOn.apply(mobile);
// console.log(moDienThoai);

// console.log(mobile);

// let mang1 = [1, 2, 3];
// let mang2 = [4, 5, 6];

// // Nối mang2 vào cuối mang1
// mang1.push.apply(mang1, mang2);

// console.log(mang1);

/*
 * Viết một hàm sumArray nhận vào một mảng các số và
 * sử dụng apply() để tính tổng của chúng.
 */
// function sumArray(numbers) {
//   // Hoàn thành mã ở đây
//   return Array.prototype.reduce.apply(numbers, [(acc, cur) => acc + cur, 0]);
// }

// const numbers = [1, 2, 3, 4, 5];
// const total = sumArray(numbers);
// console.log(total); // Kết quả: 15
