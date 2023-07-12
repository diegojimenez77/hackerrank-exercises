let a = [1,2,3,4,3,2,1]
let unique = 0;
let count = 0;

for( i = 0; i < a.length; i++ ){
    for ( j = 0; j < a.length; j++ ){
        if(a[i] === a[j]){
            // console.log(a[i]);
            // console.log(a[j]);
            count += 1;
        }
    }
    if(count < 2){
        // console.log(`${a[i]} is the unique number`);
        unique = a[i];
    }
    count = 0;
}

return unique;



// function lonelyinteger(a) {
//     // Write your code here
//     let unique = 0;
//     let count = 0;

//         for( let i = 0; i < a.length; i++ ){
//             for ( let j = 0; j < a.length; j++ ){
//                 if(a[i] === a[j]){
//                     count += 1;
//                 }
//             }
//             if(count < 2){
//                 unique = a[i];
//             }
//             count = 0;
//         }
//     return unique;
// }
