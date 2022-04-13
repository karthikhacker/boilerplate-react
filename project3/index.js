const jokeEl = document.getElementById('joke');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    generateJoke();
})

function generateJoke() {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            jokeEl.innerHTML = data.joke;
        })
}
