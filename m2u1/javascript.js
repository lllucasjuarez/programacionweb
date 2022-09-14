const item1 = document.getElementById("item1");
const body = document.getElementById("body");

function changeColor() {
    body.style.backgroundColor="#0b2b3a"
};

function changeColor2() {
    body.style.backgroundColor="#cdcfcf"
};

function changeColor3() {
    body.style.backgroundColor="#2f9c4c"
};



item1.addEventListener("click" , changeColor);
item2.addEventListener("click" , changeColor2);
item3.addEventListener("click" , changeColor3);