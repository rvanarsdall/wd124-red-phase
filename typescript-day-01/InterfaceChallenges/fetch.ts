interface ChuckResponse {
  catagories: string[],
  created_at: string,
  icon_url: string,
  id: string,
  updated_at: string,
  url: string,
  value: string
}

interface IRickandMortyResponse{
  info: Info
  results: Results[]
}

interface Info{

}

interface Results{
  name: string,
  origin: Origin
}

interface Origin {
  name: string
}

function fetchChuck() {
  let fetchURL = "https://api.chucknorris.io/jokes/random";
  fetch(fetchURL)
  .then(res=> res.json())
  .then((json:ChuckResponse) => displayFetchInfo(json.value))
}

function fetchRickAndMorty() {
  let fetchURL = "https://rickandmortyapi.com/api/character";
  fetch(fetchURL)
  .then(res=> res.json())
  .then((json:IRickandMortyResponse)=>{
    console.log(json.results)
    let randomNumber = Math.floor(Math.random() * json.results.length)
    let name = json.results[randomNumber].name
    let origin = json.results[randomNumber].origin.name
    displayFetchInfo(`The morty character is ${name} and the origin is ${origin}`)
  })
}

function displayFetchInfo(objToDisplay: string) {
  const displayData = document.querySelector(".display-fetch") as HTMLElement;

  displayData.innerText = objToDisplay;
}
