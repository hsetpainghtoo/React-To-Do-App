// const numbers = [9,3,7,4,5,1,0,4,2,3,9];

//Sum of array
// let result = 0;
// for(el of numbers){
//     result += el;
// }
// console.log(result);

//Remove Duplicate numbers
// const result = [];
// for(el of numbers){
//     if(!result.includes(el)){
//         result.push(el);
//     }
// }
// console.log(result);

//Sum of each element but double
// let result = 0;
// for(el of numbers){
//     result += el*2;
// }
// console.log(result);

//Remove Odd Element
// const result = [];
// for(el of numbers){
//     if(el % 2 === 0){
//         result.push(el);
//     }
// }
// console.log(result);

//Only Odd Numbers
// const result = [];
// for(el of numbers){
//     if(el % 2 === 0){
//         null
//     }else{
//         result.push(el);
//     }
// }
// console.log(result);

// const numbers = [9,3,7,4,5,1,0,4,2,3,9];

// console.log(numbers.reduce((pv,cv)=>pv+cv,0)); //sum
// console.log(new Set(numbers)); //remove duplicate elements
// console.log(numbers.filter(el => el % 2 === 0));

//Higher Ordered Function
// const filter = (arr,callback)=>{
//     const result = [];
//     for(el of arr){
//         if(callback(el)){
//             result.push(el);
//         }
//     }
//     return result;
// }
// console.log(filter([1,2,3,4,5,6],(x)=> x > 3));

//Mutable way
// const arr = ["a","b","c"];
// console.log(arr);
// arr[3]="d";
// console.log(arr);

// const obj = {a:"a",b:"b",c:"c"};
// obj.b = "zzz";
// console.log(obj);

// const numbers = [3,8,6];
// console.log(numbers);
// for(index in numbers){
//     console.log(index,numbers[index]);
//     numbers[index] = numbers[index]*2;
// }
// console.log(numbers);

//Immutable way
// const arr = ["a","b","c"];
// console.log(arr);
// console.log([...arr,"d"]);
// console.log(arr);

// const obj = {a:"a",b:"b",c:"c"};
// console.log({...obj,b:"zzz"});

// const numbers = [3,8,6];
// console.log(numbers.map((x)=>x*2));
// console.log(numbers);

function factorial (n){
    console.log(n);
    if(n===0){
        return 1
    }
    return n * factorial(n-1);
}
console.log(factorial(6));