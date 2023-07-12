// let strings = ['ab', 'ab', 'abc'];
// let queries = ['ab', 'abc', 'bc'];

// let strings = ['aba', 'baba', 'aba', 'xzxb'];
// let queries = ['aba', 'xzxb', 'ab'];

// let strings = ['def', 'de', 'fgh'];
// let queries = ['de', 'lmn', 'fgh'];

let strings = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'];
let queries = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'];
let int = [];

let res = 0;

    for (i = 0; i < queries.length; i++){
        console.log(queries[i]);
    
        for(j = 0; j < strings.length; j++){
            console.log(strings[j]);
            if(queries[i] === strings[j]){
                res += 1;
            }
        }
        console.log(res);
        int[i] = res;
        console.log(`validacion ${i}`);
        res = 0;
    }    
console.log(int);


// Solution in hackerRank

// function matchingStrings(strings, queries) {
//     // Write your code here
// let int = [];
// let res = 0;

//     for (let i = 0; i < queries.length; i++){
    
//         for(let j = 0; j < strings.length; j++){
//             console.log(strings[j]);
//             if(queries[i] === strings[j]){
//                 res += 1;
//             }
//         }
//         int[i] = res;
//         res = 0;
//     }    
//     return int;
// }