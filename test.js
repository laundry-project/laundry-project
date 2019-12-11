// const createMaze = s => {
//   let result = "";
//   for (let i = 0; i < s; i++) {
//     result += "@";
//     for (let j = 1; j < s - 1; j++) {
//       if (i === 0 || i % 4 === 0) {
//         if (j !== 1) {
//           result += "@";
//         } else {
//           result += " ";
//         }
//         continue;
//       }
//       if (i % 2 === 0) {
//         if (j !== s - 2) {
//           result += "@";
//         } else {
//           result += " ";
//         }
//         continue;
//       }
//       result += " ";
//     }
//     result += "@\n";
//   }
//   return result;
// };
// console.log(createMaze(10));
