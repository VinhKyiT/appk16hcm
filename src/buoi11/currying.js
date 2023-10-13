// Hàm nhân
// const multiply = (a, b) => a * b;
// const result1 = multiply(2, 4);
// console.log(result1);

// const multiply = (a) => (b) => a * b;
// // const result2 = multiply(2)(4);
// // console.log(result2(5));

// const nhanCho2 = multiply(2);
// console.log(nhanCho2(3));

// const nhanCho4 = multiply(4);
// console.log(nhanCho4(3));

// Bai 1
// const createLogger = (logType) => {
//   const logTypeString = "[" + logType.toUpperCase() + "]:";
//   return (msg) => {
//     logType === "" ? console.log(msg) : console.log(logTypeString, msg);
//   };
// };
// createLogger("error")("Something went wrong");

// console.log([1, 6, 2, 8, 3].filter((num) => num > 5));
// const filterArray = (predicate) => {
//   return (arr) => {
//     if (Array.isArray(arr)) {
//       return arr.filter(predicate);
//     }
//   };
// };

// const result = filterArray((num) => num > 5)([1, 6, 2, 8, 3]);
// console.log("result", result);
