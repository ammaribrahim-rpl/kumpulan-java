/*
OPERATOR
1. Arithmetic
2. Logical
3. Assignment
*/

/*
ARITHMETIC
1. Angka
2. Operator aritmatika
Operator
1. + --> Addition (Perjumlahan)
2. - --> Substraction (Pegurangan)
3. / --> Divion (Pembagian)
4. *  --> Multiplication (Perkalian)
5. ++ --> Increment (Penjumlahan 1)
6. -- --> Decrement (Pegurangan)
7. ** --> Exponentional (Perpangkatan)
*/

let angka = 5;
angka++; // 6
angka + 1; // 6

angka--; // 4
angka - 1; // 4

angka**2;
3**4;

// Operand
let angka1 = 72;
angka1 = angka1 * 89; // 10 + 20
console.log(angka1)

/*
LOGICAL --> Logika

Operator:
1. ! --> Negation (Tidak sama dengan)
2. && --> And
3. || --> Or

Logika Matematika
*/

let number1 = 5
let number2 = 7
let result1 = number1 < number2; // true
let result2 = number1 > number2; // false

console.log("Before Negation", result1);
let negationResult = !result1;

console.log("Negation Result", negationResult);