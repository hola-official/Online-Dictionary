const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

const speech = new SpeechSynthesisUtterance();
btn.addEventListener("click", () => {
    const inputWord = document.getElementById("input-word").value;
    //   console.log(input);

    fetch(`${url} ${inputWord}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data[0].meanings[0].definitions[0].definition);
            result.innerHTML = `
            <div class="word">
                <h3>${inputWord}</h3>
                <button>
                <i class="fa-solid fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
            </p>
            `

            const audioOutput = document.querySelector('.fa-volume-up')
            audioOutput.addEventListener('click', () => {
                speech.text = inputWord
                speechSynthesis.speak(speech)
            })
            // sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
            // console.log(sound);
        })

        .catch( () => {
            result.innerHTML = `<h3 class = "error">Couldn't Find The Word</h3>`
        });
       
});
