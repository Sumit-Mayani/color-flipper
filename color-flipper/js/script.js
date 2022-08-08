const colors = ["green", "red", "rgba(133,122,280)", "#f15025"];

const btn = document.getElementById("btn");
const colorCode = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomnumber = randomNumber();
    document.body.style.backgroundColor = colors[randomnumber];
    colorCode.textContent = colors[randomnumber]

})

function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}
