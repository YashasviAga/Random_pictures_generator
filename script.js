const container = document.querySelector(".pictures");
const imgURL = "https://source.unsplash.com/random/";

const rows = 5;

const random_num = () => Math.floor(Math.random() * 10) + Math.floor(Math.random() * 300);
const random_no_size = () => `${random_num()} * ${random_num()}`

for(var i=0; i < rows * 3; i++){
    const image = document.createElement("img");
    image.src = `${imgURL}${random_no_size()}`;
    container.appendChild(image);
}























// function sum(a,b){
//     var total = a+b;
//     return(total);
// }

// sum(50,60);

// var add = () => {{console.log(a+b)} add(20,30)};