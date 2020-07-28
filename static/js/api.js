export default class API {
  // exporta por defecto esta clase
  getCharacter(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
}
