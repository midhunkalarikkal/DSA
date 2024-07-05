// function bs(arr){
//     let swapped
//     do{
//         swapped = false
//         for(let i = 0; i < arr.length-1; i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
//     return arr
// }

// const arr = [5,7,22,55,68,-1,65,-9,-77,69,90]
// console.log(bs(arr))

// var average = function(salary) {
//     salary.sort((a,b) => a-b)
//     let sum = 0
//     let n = salary.length
//     let avg = 0
//     for(let i = 1; i < n-1; i++){
//         sum += salary[i]
//     }
//     avg = sum / (n-2)
//     return avg.toFixed(5)
// };

// salary = [4000,3000,1000,2000]
// console.log(average(salary))

// async function demoSleep() {
//     console.log('Sleeping for 2 seconds...');
//     await sleep(2000);
//     console.log('Awake now!');
// }

// function sleep(millis){
//     return new Promise(resolve => setTimeout(resolve,millis))
// }

// demoSleep();
