import API from "./api.js"; // importa la clase, desde el archivo
const api = new API(); // se crea una constante api que instancia de lo recién importado
const $characterContainer = document.querySelector("#character-container");
const characterTemplate = `
    <article class="character">
      <div class="character-grid">
        <h2>nombre</h2>
        <img src="" alt="" />
      </div>
    </article>
`;

class Character {
  constructor({ name, img }) {
    this.name = name;
    this.img = img;
    this.render();
  }
  build() {
    return `
      <article class="character">
        <div class="character-grid">
          <h2>${name}</h2>
          <img src="${img}" alt="" />
        </div>
      </article>
  `;
  }
  render() {
    $characterContainer.innerHTML = this.build();
  }
}
console.log(api.getCharacter(2));
