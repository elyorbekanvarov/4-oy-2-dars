// 1 - masala

// alert('A,B,C');
// let a = 5;
// if (a>0) {
//     a++;
// }
// console.log(a);

// 2 - masala 

// alert('A,B,C');
// let a = 5;
// if (a>0) {
//     a++;
// } else {
//     a-=2;
// }
// console.log(a);

// 3 - masala

// function sonniOzgartir(son) {
//     if (son > 0) {
//         return son + 1;
//     } else if (son < 0) {
//         return son - 2;
//     } else {
//         return 10;
//     }
// }
// let berilganSon = 8;
// let hosilBolganSon; (berilganSon);
// console.log(son)

// 4 - masala 

// function countPositiveNumbers(numbers) {
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 0) {
//             count++;
//         }
//     }
//     return count;
// }
// const numbers = [3, -5, 2, 0, -8, 4];
// const positiveCount = countPositiveNumbers(numbers);
// console.log("Musbat sonlar soni: " + positiveCount);

// 5 - masala

// function countPositiveAndNegativeNumbers(num1, num2, num3) {
//     let positiveCount = 0;
//     let negativeCount = 0;
//     if(num1 > 0) {
//         positiveCount++;
//     } else if(num1 < 0) {
//         negativeCount++;
//     }
//     if(num2 > 0) {
//         positiveCount++;
//     } else if(num2 < 0) {
//         negativeCount++;
//     }
//     if(num3 > 0) {
//         positiveCount++;
//     } else if(num3 < 0) {
//         negativeCount++;
//     }
//     console.log(`Musbat sonlar soni: ${positiveCount}`);
//     console.log(`Manfiy sonlar soni: ${negativeCount}`);
// }
// countPositiveAndNegativeNumbers(5, -2, 0);

// 6 - masala

// function kattaSonTopish(son1, son2) {
//     if (son1 > son2) {
//         return son1;
//     } else if (son2 > son1) {
//         return son2;
//     } else {
//         return "Sonlar o'zaro teng";
//     }
// }

// Test uchun ikkita sonni topish

// let son1 = 10;
// let son2 = 20;
// let kattaSon = kattaSonTopish(son1, son2);
// console.log(`Ikkita berilgan sonning kattasi: ${kattaSon}`);

// 7 - masala

// function kichikRaqamniTop(son1, son2) {
//     if (son1 < son2) {
//         return son1;
//     } else {
//         return son2;
//     }
// }

// Test uchun misol ishlaymiz

// let son1 = 15;
// let son2 = 7;

// let kichikSon = kichikRaqamniTop(son1, son2);
// console.log(`Kichik son: ${kichikSon}`);

// 8 - masala

// function kattasiKichigi(a, b) {
//     if (a > b) {
//         console.log(a);
//         console.log(b);
//     } else {
//         console.log(b);
//         console.log(a);
//     }
// }
// kattasiKichigi(16, 8); // Misol uchun: 16 va 8

// 9 - masala 

// let A = 5;
// let B = 10;
// if (A > B) {
//     let temp = A;
//     A = B;
//     B = temp;
// }
// console.log("A qiymati: " + A);
// console.log("B qiymati: " + B);

// 10 - masala

// let A = 10;
// let B = 5;
// if (A !== B) {
//   let sum = A + B;
//   A = sum;
//   B = sum;
// } else {
//   A = 0;
//   B = 0;
// }
// console.log(`A qiymati: ${A}`);
// console.log(`B qiymati: ${B}`);

// 11 - masala

// let A = 5;
// let B = 3;
// if (A !== B) {
//     if (A > B) {
//         console.log("A ning qiymati katta");
//     } else {
//         console.log("B ning qiymati katta");
//     }
// } else {
//     A = 0;
//     B = 0;
//     console.log("A va B tengson.");
// }
// console.log("A = " + A);
// console.log("B = " + B);

// 12 - masala

// function findSmallestNumber(num1, num2, num3) {
//     let smallest = num1;
//     if (num2 < smallest) {
//       smallest = num2;
//     }
//     if (num3 < smallest) {
//       smallest = num3;
//     }
//     return smallest;
//   }
//   let num1 = 10;
//   let num2 = 5;
//   let num3 = 8;
//   let smallestNumber = findSmallestNumber(num1, num2, num3);
//   console.log("The smallest number is: " + smallestNumber); 

// 13 - masala

// function findMiddleNumber(num1, num2, num3) {

    // Sort the numbers in ascending order

    // let sortedNumbers = [num1, num2, num3].sort((a, b) => a - b); 
  
    // The middle number is now at index 1

//     return sortedNumbers[1]; 
//   }
//   let num1 = 10;
//   let num2 = 5;
//   let num3 = 8;
//   let middleNumber = findMiddleNumber(num1, num2, num3);
//   console.log("The middle number is: " + middleNumber);

// 14 - masala

// function findSmallestAndLargest(num1, num2, num3) {
//     let smallest = Math.min(num1, num2, num3);
//     let largest = Math.max(num1, num2, num3);
//     console.log("The smallest number is: " + smallest);
//     console.log("The largest number is: " + largest);
//   }
//   let num1 = 10;
//   let num2 = 5;
//   let num3 = 8;
//   findSmallestAndLargest(num1, num2, num3);

// 15 - masala

// function findTwoLargestNumbers(num1, num2, num3) {
//     let sortedNumbers = [num1, num2, num3].sort((a, b) => a - b); 
//     console.log("The two largest numbers are: " + sortedNumbers[1] + " and " + sortedNumbers[2]);
//   }
//   let num1 = 10;
//   let num2 = 5;
//   let num3 = 8;
//   findTwoLargestNumbers(num1, num2, num3);