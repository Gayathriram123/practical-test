
let num=[1,2,3,4,5,1,6,2,7,1,3]

console.log([...new Set(fruits)])




let chars = [1,2,3,4,5,1,6,2,7,1,3];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);