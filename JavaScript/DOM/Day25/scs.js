// savetoDb(
//   "apna college",
//   () => {
//     console.log("success : your data was saved");
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2 : your data was saved");
//         savetoDb(
//           "apna college",
//           () => {
//             console.log("success3 : your data was saved");
//           },
//           () => {
//             console.log("failure3: weak connection try again.");
//           },
//         );
//       },
//       () => {
//         console.log("failure2: weak connection try again.");
//       },
//     );
//   },
//   () => {
//     console.log("failure: weak connection try again.");
//   },
// );

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success");
    } else {
      reject("failure");
    }
  });
}

savetoDb("apna college")
  .then((result) => {
    console.log("data1 was saved");
    console.log(result);
    return savetoDb("helloWorld");
  })
  .then((result)=>{
    console.log("data2 was saved")
    console.log(result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log(error);
  });
