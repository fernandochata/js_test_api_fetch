/* Datos que entrega la api
name	string	The name of the character.
status	string	The status of the character ('Alive', 'Dead' or 'unknown').
species	string	The species of the character.
gender	string	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
image	string (url)	Link to the character's image. All images are 300x300px
*/

const id = Math.floor(Math.random() * 592);

fetch("https://rickandmortyapi.com/api/character/" + id)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let element = document.getElementById("character");
    element.innerHTML = `
    <h1>${data.name}</h1>
    <p>Especie: ${data.species}</p>
    <p>Género: ${data.gender}</p>
    <img class="avatar" src="${data.image}" alt="${data.name}">
    `;
    console.log(data);
  })
  .catch((err) => console.log(err));
