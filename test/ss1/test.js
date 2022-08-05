///  1 Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và
//   in ra kết quả. (1đ)

// let str = prompt("Nhập chuỗi str").split("");
// let rong = "";
// for (let i = str.length - 1; i >= 0; i = i - 1) {
//   rong = rong + str[i];
// }
// console.log(rong);

/// 2. Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra
//     chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
// let k = "";
// let str = prompt("Nhập chuỗi stri");
// let strArr = str.split(" ");
// for (let i = 0; i < strArr.length; i++) {
//   let charArr = strArr[i].split("");
//   charArr[0] = charArr[0].toUpperCase();
//   strArr[i] = charArr.join("");
//   k = k + " " + strArr[i];
// }
// console.log(k);
//// 3.Viết một chương trình xóa các phần tử trùng của một
///  mảng và in ra kết quả. (1đ)

// Arraa = [
//   "one",
//   "two",
//   "three",
//   "one",
//   "one",
//   "four",
//   "five",
//   "four",
//   "five",
//   "five",
// ];

// let a = Array.from(new Set(Arraa));

// console.log(`Arr=[${a}]`);

/// 4. Viết một chương sắp xếp các phần tử là số ở trong
//// mảng theo thứ tự tăng dần. (1đ)
// let array = [40, 100, 1, 6, 35, 10];
// let t;
// let a = "";

// for (let i = 0; i <= array.length - 1; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[j] < array[i]) {
//       let t = array[i];
//       array[i] = array[j];
//       array[j] = t;
//     }
//   }
//   a = a + `${array[i]},`;
// }

// console.log(`[${a}]`);

//// 5.
// let arrRikkei = ["Hung", "Phong", "Duy"];
// let crud = prompt("Nhập C/R/U/D").toLowerCase();
// let state = true;
// while (state) {
//   if (crud === "c") {
//     let creat = prompt("Bạn muốn thêm mới nhân viên nào");
//     arrRikkei.push(creat);
//     console.log(arrRikkei);
//     break;
//   } else if (crud === "r") {
//     console.log(arrRikkei);
//   } else if (crud === "u") {
//     let update = prompt("Bạn muốn thay đổi nhân viên chỉ số nào");
//     let ucaka = prompt("Tên nhân viên bạn muốn thay thế vào chỉ số muốn thay");
//     arrRikkei[update] = ucaka;
//     console.log(arrRikkei);
//     break;
//   } else if (crud === "d") {
//     let kelete = prompt("Nhập chỉ số nhân viên bạn muốn xóa");
//     arrRikkei.splice(kelete, 1);
//     console.log(arrRikkei);
//     break;
//   }
// }

/// 7.

let bookstore = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];
let cart = [];
let state = true;
while (true) {
  for (let i = 0; i <= bookstore.length - 1; i = i + 1) {
    console.log(`${i + 1}. ${bookstore[i]}`);
    let crudd = prompt("Bạn hãy nhậm C/R/U/D").toLowerCase();
    if (crudd === "c") {
      let muaitem = prompt("Bạn muốn mua thêm sách gì");
      bookstore.push(muaitem);
      console.log(bookstore);
    }
  }
  if (crudd === "r") {
    console.log(bookstore);
  }
}
