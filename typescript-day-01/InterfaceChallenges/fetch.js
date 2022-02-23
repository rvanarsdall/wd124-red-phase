function fetchChuck() {
    var fetchURL = "https://api.chucknorris.io/jokes/random";
    fetch(fetchURL)
        .then(function (res) { return res.json(); })
        .then(function (json) { return displayFetchInfo(json.value); });
}
function fetchRickAndMorty() {
    var fetchURL = "https://rickandmortyapi.com/api/character";
    fetch(fetchURL)
        .then(function (res) { return res.json(); })
        .then(function (json) {
        console.log(json.results);
        var randomNumber = Math.floor(Math.random() * json.results.length);
        var name = json.results[randomNumber].name;
        var origin = json.results[randomNumber].origin.name;
        displayFetchInfo("The morty character is ".concat(name, " and the origin is ").concat(origin));
    });
}
function displayFetchInfo(objToDisplay) {
    var displayData = document.querySelector(".display-fetch");
    displayData.innerText = objToDisplay;
}
