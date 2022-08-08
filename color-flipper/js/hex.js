const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "S", "D", "F", "G", "H", "J", "K", "L"];
const btn = document.getElementById("btn");
const colorCode = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hashtag = "#";
    for (let i = 0; i < 6 ; i++) {
        hashtag += hex[randomNumber()];
    }

    document.body.style.backgroundColor = hashtag
    colorCode.textContent = hashtag
});

function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}