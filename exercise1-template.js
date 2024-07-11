/**
   Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. 
   Function tersebutakan mengembalikan true, jika array dari parameter tersebut merupakan deret aritmatika 
      dan false jika sebaliknya.
    
    Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
    Contoh: 
    - 2, 4,6, 8 adalah deret aritmatika dengan pertambahan nilai sebesar 2, 
    - 2, 4, 6, 9 bukanlah deret aritmatika karena ada perbedaan selisih antar angka yang tidak konsisten.

 */

function isArithmeticProgression(numbers) {
   let output = "";
   let selisih = numbers[2]-numbers[1];

   for (let index = 2; index < numbers.length - 1; index++) {
      if ((numbers[index+1]-numbers[index])==selisih) {
         output="true";
      } else {
         output="false";
      }
      
   }

   return output;
}
/*
iteration 1=
   let index = 2 
   index < number.length -2
   current_index = 2; 2 < 5 = true
   if ((numbers[index+1]-numbers[index])==selisih) {
         output="true";
      } else {
         output="false";
      }
*/

// Test Cases
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
