// class StudentList {
//   constructor() {
//     this.students = [];
//   }
//   addStudent(student) {
//     this.students.push(student);
//   }
//   removeStudent(studentId) {
//     this.students = this.students.filter((item) => {
//       return item.id !== studentId;
//     });
//   }
//   // removeStudent(studentIndex) {
//   //   this.students.splice(studentIndex, 1);
//   // }
//   displayStudents() {
//     this.students.forEach((item) => {
//       console.log(item);
//     });
//   }
// }

// const studentList = new StudentList();

// // console.log("Khi chua them sinh vien");
// // studentList.displayStudents();

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

// studentList.addStudent(student1);
// studentList.addStudent(student2);
// studentList.addStudent(student3);
// // console.log("Sau khi da them 2 sinh vien");
// // studentList.displayStudents();

// studentList.removeStudent(student2.id);
// // console.log("Sau khi da xoa sinh vien 2");
// // studentList.displayStudents();

// const studentList2 = { students: [{ id: 4, name: "Phu" }] };

// const displayStudents = studentList.displayStudents.bind(studentList2);
// displayStudents();
