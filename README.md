## Ejemplo del uso del [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[Ver documentación](https://developer.mozilla.org/es/docs/Web/API/Fetch_API). Muestra de forma aleatoria personajes de la serie Rick and Morty usando la api de [The Rick and Morty APi](https://rickandmortyapi.com/).

versión live [https://fernandochata.github.io/js_test_api_fetch/](https://fernandochata.github.io/js_test_api_fetch/)

![ScreenShoot](https://i.imgur.com/OLFkOJ8.png)

## LICENCIA

MIT

## Detalle

solicitud GET que devuelve un archivo json
```javascript
fetch(url) // method: 'GET'
  .then((response) => {
    return response.json()
  })
  // lo anterior se puede reducir a
  //.then response => response.json()
  .then((data) => {
    ...
    data.name
    ...
  })
```

solicitud GET que devuelve un archivo text
```javascript
fetch(url) // method: 'GET'
  .then((response) => {
    return response.text()
  })
  // lo anterior se puede reducir a
  //.then response => response.text()
  .then((data) => {
    ...
    // podemos parsear el archivo text a json con JSON.parse()
    ...
  })
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

```javascript
fetch(url)
```
