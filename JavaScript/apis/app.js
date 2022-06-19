// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("All done with request!!!");
//     const data = JSON.parse(this.responseText);
//     console.log(data.show.name);
// }

// req.onerror = function () {
//     console.log("error!");
//     console.log(this);
// }

// req.open('GET', 'https://api.tvmaze.com/search/shows?q=girls')
// req.send();

// fetch('https://api.tvmaze.com/lookup/shows?imdb=tt0944947')
//     .then(res => {
//         console.log("RESPONSE, waiting to parse", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("data parsed...", data)
//         console.log(data.name)
//     })
//     .catch(e => {
//         console.log("Oh No! error!", e)
//     })

// const fetchTVShow = async () => {
//     try {
//         const res = await fetch('https://api.tvmaze.com/lookup/shows?imdb=tt0944947')
//         const data = await res.json()
//         console.log(data.name)
//     } catch (e) {
//         console.log("Something went wrong", e)
//     }
// }

// axios.get('https://api.tvmaze.com/lookup/shows?imdb=tt0944947')
//     .then(res => {
//         console.log(res.data.name)
//     })
//     .catch(err => {
//         console.log("Error", err)
//     })

const fetchTVShow = async () => {
    try {
        const res = await axios.get('https://api.tvmaze.com/lookup/shows?imdb=tt0944947')
        console.log(res.data.name)
    } catch (e) {
        console.log("Error", e)
    }
}

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi)
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "No jokes available! sorry :("
    }
}

button.addEventListener('click', addNewJoke)