let hora1 = "12:00:00AM"
let hora2 = "02:30:00PM"
let hora3 = "01:50:30AM"
let hora4 = "12:45:54PM"

let [hr, min, sec,] = hora4.split(':');

let[dec, un, m1, m2] = sec.split('');

if (m1 === "A" && hr === "12"){
    hr = "00";
}else if(m1 === "P" && hr !== "12"){
    hr = parseInt(hr, 10) + 12;
}

let time24 = `${hr}:${min}:${dec}${un}`;
console.log(time24);