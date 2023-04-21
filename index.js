let jokesResult = document.querySelector(".jokes");
let generateBtn = document.querySelector(".jokes-container button");

function generateJoke() {
    fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	})
	.then(res => res.json())
	.then(data => jokesResult.innerText = data.joke);
}

generateBtn.addEventListener("click", generateJoke);
