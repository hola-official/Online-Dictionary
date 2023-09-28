const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
// btn.addEventListener("click", () => {
//     fetch(url).then((response => response.json()))
// })

btn.addEventListener('click', () => {
    const input = document.getElementById('input-word').value;
    console.log(input);
})