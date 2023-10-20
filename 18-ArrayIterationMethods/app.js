

//Task1
// Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.
// const Arr= [1,3,5,7,8,9,10]

// console.log(Arr.map((elem) => Math.pow(elem,2)));

//Task2
//Array-in müsbət elementlərinin cəmini tapan funksiya yazın. Əgər array-in bütün elementləri mənfidirsə geriyə 0 qaytarsın.

// const Arr = [1, -3, 5, -6, 3, -9, 7, -9, 25,27 -13, 14, 0];

// function sumOfPositive(Arr) {
//     let sum = 0;
//     Arr.forEach(elem => {
//         if (elem > 0) {
//             sum += elem;
//         } else {
//             return 0;
//         }
//     }
//     )
//     console.log(sum);
// }
// sumOfPositive(Arr);

//Task3
//  Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik element ilə ən böyük elementin ədədi ortasıdır.


// const Arr = [1, -3, 5, -6, 3, -9, 7, -9, 25,27 -13, 14, 0];
// function getEdediorta(Arr) {
//     let sum = 0;
//     Arr.forEach((elem) => (sum += elem));
//     return (sum / Arr.length);
// }

// function getMedian(numberArr) {
//     let max = Math.max(...numberArr);
//     let min = Math.min(...numberArr);
//     let median = (max + min) / 2;
//     return median;
// }

// console.log(getEdediorta(Arr));
// console.log(getMedian(Arr));

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Task4
// 4. Hər hansı bir cümlədə istənilən  böyük hərflə olan simvolları birləşdirib qaytaran funksiya yazın.
// Məsələn

// Lorem impsum dolar sit - Lids

function UpperCase(sentences) {
    let UpperCase = '';
    for (let i = 0; i < sentences.length; i++) {
      if (sentences[i] === sentences[i].toUpperCase().trim() && sentences[i] === sentences[i].toUpperCase().trim()) {
        UpperCase += sentences[i];
      }
    }
    return UpperCase;
  }
  
  let sentences = "Lorem impsum dolar sit - Lids";
  console.log(UpperCase(sentences)); 
  
  //Task5
  // Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, javascript-j8t
// function abbrationSentence(sentence) {

//     let words = sentence.split(' ');

//     let abbredWord = words.map(word => {
//         if (word.length < 4) {
//             return word;
//         } else {
//             return word[0] + (word.length - 2) + word[word.length - 1];
//         }
//     })
//     return abbredWord.join(' ')
// }
// console.log(abbrationSentence("this is stəkan"));
