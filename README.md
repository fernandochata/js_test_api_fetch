## Ejemplo del uso del [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[Ver documentación](https://developer.mozilla.org/es/docs/Web/API/Fetch_API). Muestra de forma aleatoria personajes de la serie Rick and Morty usando la api de [The Rick and Morty APi](https://rickandmortyapi.com/).

versión live [https://fernandochata.github.io/js_test_fetch_api/](https://fernandochata.github.io/js_test_fetch_api/)

![ScreenShoot](https://i.imgur.com/OLFkOJ8.png)

## LICENCIA

MIT

## Detalle

GET que devuelve un archivo json
```javascript
fetch(url) // method: 'GET'
  .then((response) => { return response.json() }) // se puede reducir a .then response => response.json()
  .then((data) => { ... data.name ... })
  .catch((err) => {console.log(err)})
```
GET que devuelve un archivo de texto
```javascript
fetch(url) // method: 'GET'
  .then((response) => { return response.text() }) // se puede reducir a .then response => response.text()
  .then((data) => { ... console.log(data) ... }) // se puede parsear con JSON.parse(data)
  .catch((err) => {console.log(err)})
```
GET que devuelve una imagen
```javascript
fetch(url) // method: 'GET'
  .then((response) => { return response.blob() })
  // se puede reducir a .then response => response.blob()
  .then((binaryLargeObject) => {
    const domString = URL.createObjectURL(binaryLargeObject);
    // se puede usar domString como una imagen
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

