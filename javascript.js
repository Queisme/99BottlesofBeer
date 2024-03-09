// 99 bottles of beer on the wall
// 99 bottles of beer
// Take one down, pass it around 
// 98 bottles of beer on the wall

let count = 99;
let bobs = 'bottles of beer';
let onw = 'on the wall';
let tod = 'Take one down,'
let pia = 'pass it around';
let bob = 'bottle of beer';

while (count > 0 && count !== 1) {
    console.log(`${count} ${bobs} ${onw}`);
    console.log(`${count} ${bobs}`);
    console.log(`${tod} ${pia}`);
    count -= 1;
    if (count !== 1) {
        console.log(`${count} ${bobs} ${onw}`);
    } else {
        console.log(`1 ${bob} ${onw}`);
        console.log(`1 ${bob} ${onw}`);
        console.log(`1 ${bob}`);
        console.log(`${tod} ${pia}`);
        console.log(`No ${bobs} ${onw} *hiccup*`);
    };
};

