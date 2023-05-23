"use strict";

// const user = "Sunnatillo";
// console.log(user.length);

// const arr = [1, 2, 3, 4];
// console.log(arr.length);

// const user = "Sunnatillo";
// const arr = [1, 2, 3, 4];
// console.log(user[2]);
// console.log(arr[2]);

//------------------------------//

// const user = "Sunnatillo";
// const arr = [1, 2, 3, 4];

// console.log(user.toUpperCase()); // -> SUNNATILLO

// console.log(user.toLowerCase()); // -> sunnatillo
// //// or
// const upperCaseUser = user.toLocaleUpperCase();
// console.log(upperCaseUser); // -> SUNNATILLO

// console.log(user); // -> Sunnatillo

//------------------------------//

// const greeting = "Hello World";
// console.log(greeting.indexOf("l")); // 2da turgan l harfini topib berdi

// const greeting = "Hello World";
// console.log(greeting.indexOf("z")); // -1  yani topilmadi sdegan manoni anglatadi

// const greeting = "Hello World";
// console.log(greeting.slice(6)); // World ni kesib oldik
// console.log(greeting.slice(0, 5)); // Hello ni chiqazib kesib olib beradi

// const greeting = "Hello World";
// console.log(greeting.substring(6, 11)); // World

// const greeting = "Hello World";
// console.log(greeting.substr(6, 3)); // Wor - bu yerda 6-elementdan keyin 3ta element korsatsin deyapmiz

//------------------------------//

//// Qoldiqli sonimizzi butun son qilib beradi,
//// Yani .dan keyingi sonimiz beshdan katta bo'lsa undan keyingi sonni yoki kishkina bo'ladigan bo'lsa o'sha sonni o'zini chiqazib beradi
// const num = 8.8;
// console.log(Math.round(num)); // 9 chiqazib beradi

// const num = 8.3;
// console.log(Math.round(num)); // 8 chiqazib beradi

// const borderWidth = "13.8px";
// console.log(parseInt(borderWidth)); // 13 - malumot turini numberga o'zgartirib butun sonnni o'zini chiqazib beradi

const borderWidth = "13.8px";
console.log(parseFloat(borderWidth)); // 13.8 ni chiqazib beradi
