// const getFilms =  async (basePath) => {
//     try {
//         const films = await fetch(`${basePath}/api/films/`);
//         return films.json()
//     }catch (e) {
//         console.log(e)
//     }
// }
// const getCharactersPerFilm =  async (charactersArray) => {
//     try {
//         const arrayPromises = charactersArray.map(async characterUrl => {
//             const character = await fetch (characterUrl);
//             return character.json()
//         })
//       const characterData = await Promise.all(arrayPromises)
//      console.log(characterData)
//      return characterData
//     }catch (e) {
//         console.log(e)
//     }
// }
// document.addEventListener('DOMContentLoaded',async (ev)=> {
//     const BASE_PATH = "https://swapi.dev";
//     const films = await getFilms(BASE_PATH);
//     const charactersPerFilms = await Promise.all ( films.results.map ( async film => {
//         return  { film: film.title, characters :  (await getCharactersPerFilm(film.characters)).map(c=> c.name) }
//     }))
//   console.log(charactersPerFilms)
//     //console.log(films.results.map(film => film.title ))
// })

// const arrayCharacters = [
//     "http://swapi.dev/api/people/1/",
// "http://swapi.dev/api/people/2/",
// "http://swapi.dev/api/people/3/"]


// document.addEventListener('DOMContentLoaded',async (ev)=> {

//     const charactersDataAsync = arrayCharacters.map( async url => {
//         return await getCharactersPerFilm (url) })

//     const charactersData = await Promise.all (charactersDataAsync)
//     console.log (charactersData)
//     //const BASE_PATH = "https://swapi.dev";
//    // const films = await getFilms(BASE_PATH);
// })