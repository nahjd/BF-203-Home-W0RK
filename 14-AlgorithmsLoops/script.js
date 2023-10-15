// Task1 Son rəqəmi 7 olan bütün iki rəqəmli ədədləri tapmaq üçün bir funksiya tərtib edək
// for (let i = 10; i < 100; i++) {
//     if (i % 10 == 7) {
//         console.log(i);
//     }
// }
// Task2 Rəqəmləri eyni olan bütün iki rəqəmli ədələrin çapa verən proqram tərtib edin.

//  for (let i = 10; i < 100; i++){
//     if( i % 11 == 0){
//         console.log(i)
//     }
// }

// Task3 Verilmiş ədədi rəqəmlərinə ayıran proqram tərtib edin.
// let n = 1234;
// let a = [];
// while (n > 0){
//     let b = n % 10;
//     a.unshift(b);
//     n = Math.floor(n / 10);
// }
// console.log("Ededin reqemleri: ) ", a.join(","));

// Task4 Verilmiş ədədin rəqəmlərindən ən böyük olanı təyin edən proqram tərtib edin.
// let n = 1234;
// let max = 0;
// while(n > 0){
//     let a = n % 10;
//     if (max < a){
//         max=a;
//     }
//     n=Math.floor(n / 10);
// }
// console.log(max);



//Task 5 Verilmiş ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin. 
//  let n = 1234;
//  let sum = 0;
//  let count = 0;
//  let product = 1;
//  while (n > 10){
//     let a = n % 10;
//     {
//         sum += a;
//         count++;
//         product *= a;
//     }
//     n = Math.floor(n / 10);
//  }
//  console.log(`Ededin reqemlerinin cemi=${sum}`);
//  console.log(`Ededin reqemlerinin hasili=${product}`);
//  console.log(`Ededin reqemlerinin ededi ortasi=${sum/count}`);


// Task6 Verilmiş ədədin bütün bölənlərini tapan proqram tərtib edin.
// let n = 36;
// for (let i = 1;  i <= n; i++){
//     if(n % i == 0){
//         console.log(i);
//     }
// }



//Task7  Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
// let n = 36;
// let count = 0;
// for ( let i = 1; i <= n; i++) {
//     if (n % i == 0){
//         count++;
//     }
// }
// console.log(count);


//Task8 Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];
// for( let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 1){
//         console.log(i);
//     }
// }


//Task9 Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.
// let arr=[3,8,2,5,4,10,7,6];
// for ( let i = 0; i < arr.length; i++){
//     if ( i % 2 == 1){
//         console.log(arr[i]);
//     }
// }


//Task10  erilmiş array-in max elementini çapa verən proqram tərtib edin.
// let arr=[3,8,2,5,4,10,7,6];
// let max= arr[0];
// for ( let i = 0; i < arr.length; i++){
//     if( max < arr[i]){
//         max = arr[i];
//     }
// }

// console.log(max);


//Task11 Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.
// let arr=[3,8,2,5,4,10,7,6];
// let max = arr[0];
// for ( let i = 0; i < arr.length; i++){
//      if ( max < arr[i]){
//           max = arr[i];
// }
// }


//Task12  Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];
// let min = arr[0];
// let index;
// for ( let i = 0; i < arr.length; i++){
//     if( min > arr[i]){
//         min = arr[i];
//         index = i;
//     }
// }
// console.log(index);


//Task13 Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

// let arr=[3,8,2,5,4,10,7,6];
// let max = arr[0];
// let maxindex;
// let min = arr[0];
// let minindex;
// for( let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//         maxindex = i;
//     }
//     if(min > arr[i]){
//         min = arr[i];
//         minindex = i;
//     }
// }
// console.log(`Maksimum element: ${max}`);
// console.log(`Maksimum element: ${min}`);



//Task14  Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin
// let arr=[3,8,2,5,4,10,7,6];
// let max = arr[0];
// let maxindex;
// let min = arr[0];
// let minindex;
// for ( let i = 0; i < arr.length; i++){
//     if ( arr[i] % 2 == 1){
//         if( max < arr[i]){
//             max = arr[i];
//             maxindex = i;
//         }
//     }
//     if(arr[i % 2 == 0]){
//         if ( min > arr[i]){
//             min = arr[i];
//             minindex = i;
//         }
//     }
// }
// console.log(`Maksimum element: ${max}`);
// console.log(`Maksimum element: ${min}`);

// const temp = arr[maxindex];
// arr[maxindex] = arr[minindex];
// arr[minindex] = temp;
// console.log[arr];


//Task15  Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.
// let arr=[3,8,2,5,4,10,7,6];
// let a = Number(prompt("Ededi daxil edin"));
// console.log(arr.includes(a));


//Task16  Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.
// let arr=[3,8,2,5,4,10,7,6];
// let max =arr[0];
// let min =arr[0];

// let sum = 0;

// for(let i =0; i < arr.length; i++){
//     sum += arr[i];
//     if( max < arr[i]);{
//         max = arr[i];
//     }
//     if(min > arr[i]);{
//         min = arr[i];
//     }
// }
// console.log(`Max element: ${max}`);
// console.log(`Min element: ${min}`);
// console.log(`Sum element: ${sum}`);
// sum -= max + min;
// console.log(`Max ve Min nezere alinmadan sum= ${sum}`);
  


//Task17  Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin
// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
// for ( let i =0; i < arr.length; i++){
//     if (typeof arr[i] == "boolean"){
//         console.log(`Boolean element: ${arr[i]}`);
//         if ( i > 0){
//             console.log(`Evvelki element= ${arr[i-1]};`)}
//         if ( i < arr.length - 1) {
//             console.log(`Sonraki element= ${arr[i-1]};`)
//         }
//         }
//     }


//Task18 Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın


// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
// let en_uzun_soz = "";
// for ( let i = 0; i < arr.length; i++){
//     if (typeof arr[i] == "string"){
//         if( arr[i].length > en_uzun_soz.length){
//             en_uzun_soz = arr[i];
//         }
//     }
// }
// if ( en_uzun_soz === ""){
//     console.log("Soz tapilmasi");
// }
// else {
//     console.log(`en uzun soz: ${en_uzun_soz}`);
// }


//Task19 Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
// let index;
// for ( let i = 0; i < arr.length; i++){
//     if( typeof arr[i] === "string"){
//         let boyuk_olan = arr[i].toUpperCase();
//         if (boyuk_olan === arr[i]){
//             console.log(`Herfleri boyuk olan: ${arr[i]}`);
//             index = i;
//         }
//     }
// }
// console.log(`Indeks: ${index}`);


//Task20  Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın

let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
let count = 0
for ( let i = 0; i < arr.length; i++){
    if (typeof arr[i] == "string"){
        for ( let j = 0; j <arr.length; j++){
            if ( arr[i][j] >="A" && arr[i][j] <= "Z"){
                count++;
            }
            if ( count > 2) {
                console.log(`Elementler: ${arr[i]}`);
                count = 0;
                break;
            }
        }
    }
}
