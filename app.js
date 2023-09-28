const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    const inputWord = document.getElementById("input-word").value;
    //   console.log(input);

    fetch(`${url} ${inputWord}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                <h3>Sample</h3>
                <button><i class="fa-solid fa-volume-up"></i></button>
            </div>
            <div class="details">
                <p>Pos</p>
                <p>/Sample/</p>
            </div>
            <p class="word-meaning">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
                quae.
            </p>
            <p class="word-example">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
                quae.
            </p>
            `
        });
});
