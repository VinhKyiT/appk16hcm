/* Bài tập giải trí:
 * Tại SEA GAMES 32 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng
 * tổng sắp huy chương. Hãy tạo hàm getTotalGoldMedal có 1 tham số là mảng.
 * Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được
 * trong kỳ SEA Game lần này.
 */

// Danh sách số huy chương vàng của các bộ môn.
// const goldMedals = [
//   { id: "1", name: "Bơi", gold: 7 },
//   { id: "2", name: "Boxing", gold: 2 },
//   { id: "3", name: "Đạp xe", gold: 1 },
//   { id: "4", name: "Đấu kiếm", gold: 4 }
// ];

// function getTotalGoldMedal(arr) {
//   // do something here
//   if (!Array.isArray(arr)) {
//     throw new Error("Tham so truyen vao khong hop le");
//   }
//   return arr.reduce((accu, curr) => {
//     return accu + curr.gold;
//   }, 0);
// }
// console.log(getTotalGoldMedal(goldMedals)); // Output: 14

// Bài 2:
// let arr = [
//   ["name", "Ky Bui"],
//   ["age", 18]
// ];
// const arrToObj = (arr) => {
//   // do something here
//   if (!Array.isArray(arr)) {
//     throw new Error("Doi so truyen vao khong hop le!");
//   }
//   return arr.reduce((acc, cur) => {
//     console.log("cur", cur);

//     return Object.assign(acc, { [cur[0]]: cur[1] });
//   }, {});
// };
// console.log(arrToObj(arr));
