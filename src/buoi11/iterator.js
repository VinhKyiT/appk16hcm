let myArray = [1, 2, 3];
// let iterator = myArray[Symbol.iterator]();

// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// console.log(myArray[Symbol.iterator]().next());
// console.log(myArray[Symbol.iterator]().next());

// let a = Symbol("a");
// let b = Symbol("a");
// console.log(a === b);

// Bài tập: Viết 1 custom iterator, sẽ lần lượt trả về
// value là các số tăng dần và bắt đầu bằng số 1 và kết thúc bằng 5

// const numberIterator = {
//   currentValue: 1,
//   next() {
//     if (this.currentValue > 5) {
//       return {
//         value: undefined,
//         done: true
//       };
//     }
//     return {
//       value: this.currentValue++,
//       done: false
//     };
//   }
// };

// console.log(numberIterator.next());
// console.log(numberIterator.next());
// console.log(numberIterator.next());
// console.log(numberIterator.next());
// console.log(numberIterator.next());
// console.log(numberIterator.next());

// const range = {
//   start: 1,
//   end: 4,
//   [Symbol.iterator]() {
//     this.current = this.start;
//     return this;
//   },
//   next() {
//     if (this.current <= this.end) {
//       return {
//         done: false,
//         value: this.current++
//       };
//     }
//     return { done: true, value: undefined };
//   }
// };

// for (let item of range) {
//   console.log(item);
// }
