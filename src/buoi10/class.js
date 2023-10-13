// class SinhVien {
//   // Hàm khởi tạo
//   constructor(hoTen, gioiTinh, MSSV, namSinh, listDiem) {
//     this.hoTen = hoTen;
//     this.gioiTinh = gioiTinh;
//     this.namSinh = namSinh;
//     this.MSSV = MSSV;
//     this._listSoDiem = listDiem;
//   }

//   get getHoTen() {
//     return this.hoTen;
//   }

//   get getListDiem() {
//     return this._listSoDiem;
//   }

//   get getNamSinh() {
//     return this.namSinh;
//   }

//   get getGioiTinh() {
//     return this.gioiTinh;
//   }

//   get getMSSV() {
//     return this.MSSV;
//   }

//   set setHoTen(hoTen) {
//     this.hoTen = hoTen;
//   }

//   set setGioiTinh(gioiTinh) {
//     this.gioiTinh = gioiTinh;
//   }

//   set setNamSinh(namSinh) {
//     this.namSinh = namSinh;
//   }

//   set setMSSV(MSSV) {
//     this.MSSV = MSSV;
//   }

//   set setListDiem(listDiem) {
//     if (!Array.isArray(listDiem)) {
//       return;
//     }
//     this._listSoDiem = listDiem;
//   }

//   //Khai báo phương thức
//   hocBai() {
//     console.log("Đang học bài...");
//   }
//   diNgu() {
//     console.log("Đang ngủ...");
//   }
//   xemPhim() {
//     console.log("Đang xem phim...");
//   }
//   themDiem(objDiem) {
//     this._listSoDiem.push(objDiem);
//   }
// }

// const sinhVien1 = new SinhVien("Ky Bui", "Nam", "18DHABC123", 1995, [
//   { name: "Toan", score: 10 },
//   { name: "Van", score: 9 }
// ]);
// const sinhVien2 = new SinhVien("Phu Le", "Nam");
// const sinhVien3 = new SinhVien();

// // console.log("sinhVien1", sinhVien1);
// // console.log("sinhVien2", sinhVien2);
// // console.log("sinhVien3", sinhVien3);

// sinhVien1.setMSSV = "ABCDEF_123";
// sinhVien1.MSSV = "ABC";
// sinhVien1.listSoDiem = null;
// sinhVien1.themDiem({ name: "Tin Hoc", score: 10 });

// console.log(sinhVien1);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
// p1.distance; //undefined
// p2.distance; //undefined

// console.log(Point.distance(p1, p2)); // 7.0710678118654755

// class ConNguoi {
//   constructor(hoTen, namSinh) {
//     this.hoTen = hoTen || "unknown";
//     this.namSinh = namSinh || "unknown";
//   }
//   getHoTen() {
//     return "Tên " + this.hoTen + ", sinh năm " + this.namSinh;
//   }
// }

// class SinhVien extends ConNguoi {
//   constructor(maSSV, hoTen, namSinh) {
//     super(hoTen, namSinh);
//     this.maSSV = maSSV || "unknown";
//   }
//   // getThongTin() {
//   //   return this.getHoTen() + ", mã sinh viên " + this.maSSV;
//   // }
//   getThongTin() {
//     return "MSSV " + this.maSSV + ", " + super.getHoTen();
//   }
// }
// var sinhVien1 = new SinhVien("B1704863", "Ngô Minh Trung", "1999");

// console.log(sinhVien1 instanceof ConNguoi);
