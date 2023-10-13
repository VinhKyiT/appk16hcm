// function thongBao() {
//   console.log("Hàm thông báo");
// }

// // thongBao();
// thongBao.call();

// function tong2So(a, b) {
//   return a + b;
// }

// let ketQua = tong2So.call(this, 10, 20);
// console.log(ketQua);

// let loiChao = "Chào";

// let chaoHoi = {
//   loiChao: "Xin chào"
// };

// function chao(ten) {
//   console.log(this.loiChao + " " + ten);
// }

// // chao();
// chao.call(chaoHoi, "JS");

// function Hinh(chieuCao, chieuRong) {
//   this.chieuCao = chieuCao;
//   this.chieuRong = chieuRong;
// }

// function TuGiac(tongSoGocVuong, chieuCao, chieuRong) {
//   Hinh.call(this, chieuCao, chieuRong);
//   this.tongSoGocVuong = tongSoGocVuong;
// }

// let hinhVuong = new TuGiac(4, 100, 100);
// console.log(hinhVuong);

// const oto = {
//   ten: "Vinfast VF33",
//   khoiDong: function () {
//     console.log("Khởi động " + this.ten);
//   },
//   tangToc: function () {
//     console.log("Tăng tốc " + this.ten);
//   },
//   dungLai: function () {
//     console.log("Dừng " + this.ten);
//   }
// };

// const mayBay = {
//   ten: "Su-34",
//   bay: function () {
//     console.log("Đang bay");
//   }
// };

// oto.dungLai.call(mayBay);

// function laySoLe() {
//   const danhSach = Array.prototype.slice.call(arguments);
//   return danhSach.filter((x) => x % 2);
// }

// let soLe = laySoLe(10, 1, 3, 4, 8, 9);
// console.log(soLe);
