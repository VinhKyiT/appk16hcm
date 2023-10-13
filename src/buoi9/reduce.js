// Bài toán: Hãy tính tổng số lượng của tất cả sản phẩm
// trong mảng bên dưới

const products = [
  {
    id: "001",
    name: "Product 1",
    description: "Description of Product 1",
    price: 19.99,
    quantity: 10
  },
  {
    id: "002",
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    quantity: 5
  },
  {
    id: "003",
    name: "Product 3",
    description: "Description of Product 3",
    price: 9.99,
    quantity: 1
  },
  {
    id: "004",
    name: "Product 4",
    description: "Description of Product 4",
    price: 49.99,
    quantity: 16
  },
  {
    id: "005",
    name: "Product 5",
    description: "Description of Product 5",
    price: 14.99,
    quantity: 8
  }
];

// Khoi tao bien tich tru va gan gia tri mac dinh
// let accumulator = 0;

// for (let item of products) {
//   accumulator = accumulator + item.quantity;
// }

// console.log(accumulator);

// const totalQuantity = products.reduce((acc, cur) => {
//   return acc + cur.quantity;
// }, 0);

// console.log("totalQuantity", totalQuantity);
