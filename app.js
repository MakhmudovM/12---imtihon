//1) Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang.
/*
// Example
/*
   'To be or not to be', 'not'  => 'To be or to be'
   'I like legends', 'end' => 'I like legs',
   'ABABAB','BA' => 'ABAB'

function removeFirstOccurrences(str, value) {
    // your code
}



*/
/*
function removeFirstOccurrences(str, value) {
    const index = str.indexOf(value);

    return str.slice(0, index) + str.slice(index + value.length);
}
console.log(removeFirstOccurrences('To be or not to be', 'not'));
*/

//2) Birinchi va so’ngi burchali qavslarni olib tashlang.
/*
// example
   '<div>' => 'div'
   '<span>' => 'span'
   '<a>' => 'a'

function unbracketTag(str) {
    // your code
}
*/
/*
function unbracketTag(str) {
    let a = str.indexOf('<') + 1;
    let b = str.indexOf('>');
    return str.slice(a, b)
}
console.log(unbracketTag('<div>'));
*/

//3) Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin:
// Example
/*   
*   4 => false
*   5 => true
*   6 => false
*   7 => true
*   11 => true
*   12 => false
*   16 => false
*   17 => true
*/
/*
function isPrime(n) {
    if( n % 2 == 0){
        return true;
    } else(n % 2 != 0)
    return false;
    
}
console.log(isPrime(4))
console.log(isPrime(5))
*/

//4) Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali.
// Example

/*
[	
	{ country: 'Belarus', city: 'Brest' },
	{ country: 'Russia', city: 'Omsk' },
	{ country: 'Russia', city: 'Samara' },
	{ country: 'Belarus', city: 'Grodno' },
	{ country: 'Belarus', city: 'Minsk' },
	{ country: 'Poland', city: 'Lodz' }
]
*/

// output
/* 
	{
	  belarus : ["Brest", "Grodno", "Minsk"],
	  russia  : ["Omsk", "Samara"], 
	  poland  : ["Lodz"]
	}

*/

/*
const data = [
    { country: 'Belarus', city: 'Brest' },
    { country: 'Russia', city: 'Omsk' },
    { country: 'Russia', city: 'Samara' },
    { country: 'Belarus', city: 'Grodno' },
    { country: 'Belarus', city: 'Minsk' },
    { country: 'Poland', city: 'Lodz' }
];

function group(array, keySelector, valueSelector) {
    const result = [];
    array.forEach(item => {
        const key = keySelector(item);
        const value = valueSelector(item);

        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(value);
    });
    return result;
}
const result = group(data, item => item.country.toLowerCase(), item => item.city);

console.log(result);
*/
//5) n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.
// Example
/*
  1,2   =>  3  ( = 1+2 )
  5,10  =>  45 ( = 5+6+7+8+9+10 )
  -1,1  =>  0  ( = -1 + 0 + 1 )
*/
/*
function getSumBetweenNumbers(n1, n2) {
    
    if (n1 > n2) {
        [n1, n2] = [n2, n1];
    }
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}


console.log(getSumBetweenNumbers(1, 2));
console.log(getSumBetweenNumbers(5, 10)); 
console.log(getSumBetweenNumbers(-1, 1)); 
 */

//-------------------------------------------------------------------------------------------------------------
//6) n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.

// Input: [1, 5, 6, 1, 5, 7, 2]

// Output: [6, 7, 2]


//-----------------------------------------------------------------------------------------------------------------------

//7) n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsing.
/*
let arr = [1, 2, 3, 4, 2, 3, 5];

function removeDuplicate(arr) {
    let Elements = []; 
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (!Elements[arr[i]]) {
            result.push(arr[i]);
            Elements[arr[i]] = true;
        }
    }
    return result;
}

console.log(removeDuplicate(arr)); 
*/

//8) n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.

//9) Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.

  const books = [
    {
      title: "Halqa",
      author: "Akrom Malik",
      alreadyRead: false,
    },
    {
      title: "Dunyo ishlari",
      author: "O'tkir Hoshimov",
      alreadyRead: true,
    },
    {
      title: "Vaqtning qadri",
      author: "Abdulfattoh Abu G'udda",
      alreadyRead: false,
    },
];


for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
    console.log(`${i + 1}. ${book.author}ning "${book.title}" kitobi ${status};`);
}

//10) Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.
// Input:
const products = [
    { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
    { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
    { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
    { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
    { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
  ];
  
  function calc () {
    let sum = 0;
  }