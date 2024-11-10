// COLOR GENERATOR WITH HEXA CODE
// const colorBox = document.querySelector(".color-box");
// const btn = document.querySelector(".btn");
// let newPara = document.createElement('p');

// function getColor(){
//     let colorNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
//     console.log(colorNumber);
//     let final = "#" + colorNumber; 
//     colorBox.style.backgroundColor = final;
//     newPara.innerText = `Color = ${final}`;
//     colorBox.before(newPara);
// }

// btn.addEventListener('click', getColor);

// WITH RGB;

const colorBox = document.querySelector(".color-box");
const btn = document.querySelector(".btn");
let newPara = document.createElement('p');

function getColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let final =  `rgb(${r},${g},${b})`;
    console.log(final);
    colorBox.style.backgroundColor = final;
    newPara.innerText = `Color = ${final}`;
    colorBox.before(newPara);
}

btn.addEventListener('click', getColor);