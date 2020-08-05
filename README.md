## Ejemplo del uso del Fetch API [Ver doc](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).

El ejemplo muestra de forma aleatoria personajes de la serie Rick and Morty usando la api de [The Rick and Morty APi](https://rickandmortyapi.com/).

Versión live [pincha acá](https://fernandochata.github.io/test_html5_js_fetch_api/)

![ScreenShoot](https://i.imgur.com/OLFkOJ8.png)



## Ayuda Memoria

Si api devuelve un archivo json
```javascript
fetch(url) // method: 'GET'
  .then((response) => { return response.json() }) // se puede reducir a .then response => response.json()
  .then((data) => { ... data.name ... })
  .catch((err) => {console.log(err)})
```
Si api devuelve un texto
```javascript
fetch(url) // method: 'GET'
  .then((response) => { return response.text() }) // se puede reducir a .then response => response.text()
  .then((data) => { ... console.log(data) ... }) // se puede parsear con JSON.parse(data)
  .catch((err) => {console.log(err)})
```
Si api devuelve una imagen
```javascript
fetch(url) // method: 'GET'
  .then((response) => { return response.blob() }) // se puede reducir a .then response => response.blob()
  .then((binaryLargeObject) => {
    const domString = URL.createObjectURL(binaryLargeObject); // se puede usar domString como una imagen
  })
  .catch((err) => {console.log(err)})
```


solicitud POST
```javascript
fetch(url,{
  method: 'POST',
  headers: {
    'content-Type: 'application/json
  },
  body: JSON.stringify({
    name: 'My Name',
    age: 20
  })
})
```

