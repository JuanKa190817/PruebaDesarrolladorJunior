const url = 'https://rickandmortyapi.com/api/character/10'
fetch(url)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element')
        elemento.innerHTML = `
        <h1>Nombre: "${data.name}"</h1>
        <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
        <h3>Ubicado en: "${data.location.name}"</h3x>
        <h3 style="text-align: left;">Origen: "${data.origin.name}"</h3>
        <h3 style="text-align: left;">Tipo de especie: "${data.species}"</h3>
        <h3 style="text-align: left;">Estado: "${data.status}"</h3>
        <h4 style="text-align: left;">Se desempeña como: "${data.type}"</h4>
        `;
        console.log(data)
    })
    .catch(err => console.log(err))

const urlV = 'https://rickandmortyapi.com/api/character/10'
fetch(urlV)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('elementV')
        elemento.innerHTML = `
        <h3>Nombre: "${data.name}"</h3>
        <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
        <h4>Ubicado en: "${data.location.name}"</h4>
        <h4 style="text-align: left;">Origen: "${data.origin.name}"</h4>
        <h4 style="text-align: left;">Tipo de especie: "${data.species}"</h4>
        <h4 style="text-align: left;">Estado: "${data.status}"</h4>
        <h5 style="text-align: left;">Se desempeña como: "${data.type}"</h5>
        `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url1 = 'https://rickandmortyapi.com/api/character/1'
fetch(url1)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element1')
        elemento.innerHTML = `
        <h1>Nombre: "${data.name}"</h1>
        <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
        <h2>Ubicado en: "${data.location.name}"</h2>
        <h3 style="text-align: left;">Origen: "${data.origin.name}"</h3>
        <h3 style="text-align: left;">Tipo de especie: "${data.species}"</h3>
        <h3 style="text-align: left;">Estado: "${data.status}"</h3>
        <h4 style="text-align: left;">Se desempeña como: "${data.type}"</h4> 
        `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url1V = 'https://rickandmortyapi.com/api/character/1'
fetch(url1V)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element1V')
        elemento.innerHTML = `
            <h3>Nombre: "${data.name}"</h3>
            <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
            <h4>Ubicado en: "${data.location.name}"</h4>
            <h4 style="text-align: left;">Origen: "${data.origin.name}"</h4>
            <h4 style="text-align: left;">Tipo de especie: "${data.species}"</h4>
            <h4 style="text-align: left;">Estado: "${data.status}"</h4>
            <h5 style="text-align: left;">Se desempeña como: "${data.type}"</h5> 
            `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url2 = 'https://rickandmortyapi.com/api/character/5'
fetch(url2)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element2')
        elemento.innerHTML = `
        <h1>Nombre: "${data.name}"</h1>
        <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
        <h2>Ubicado en: "${data.location.name}"</h2>
        <h3 style="text-align: left;">Origen: "${data.origin.name}"</h3>
        <h3 style="text-align: left;">Tipo de especie: "${data.species}"</h3>
        <h3 style="text-align: left;">Estado: "${data.status}"</h3>
        <h4 style="text-align: left;">Se desempeña como: "${data.type}"</h4>  
        `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url2V = 'https://rickandmortyapi.com/api/character/5'
fetch(url2V)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element2V')
        elemento.innerHTML = `
            <h3>Nombre: "${data.name}"</h3>
            <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
            <h4>Ubicado en: "${data.location.name}"</h4>
            <h4 style="text-align: left;">Origen: "${data.origin.name}"</h4>
            <h4 style="text-align: left;">Tipo de especie: "${data.species}"</h4>
            <h4 style="text-align: left;">Estado: "${data.status}"</h3>
            <h5 style="text-align: left;">Se desempeña como: "${data.type}"</h5> 
            `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url3 = 'https://rickandmortyapi.com/api/character/12'
fetch(url3)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element3')
        elemento.innerHTML = `
        <h1>Nombre: "${data.name}"</h1>
        <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
        <h2>Ubicado en: "${data.location.name}"</h2>
        <h3 style="text-align: left;">Origen: "${data.origin.name}"</h3>
        <h3 style="text-align: left;">Tipo de especie: "${data.species}"</h3>
        <h3 style="text-align: left;">Estado: "${data.status}"</h3>
        <h4 style="text-align: left;">Se desempeña como: "${data.type}"</h4> 
        `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url3V = 'https://rickandmortyapi.com/api/character/12'
fetch(url3V)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element3V')
        elemento.innerHTML = `
                <h3>Nombre: "${data.name}"</h3>
                <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
                <h4>Ubicado en: "${data.location.name}"</h4>
                <h4 style="text-align: left;">Origen: "${data.origin.name}"</h4>
                <h4 style="text-align: left;">Tipo de especie: "${data.species}"</h4>
                <h4 style="text-align: left;">Estado: "${data.status}"</h3>
                <h5 style="text-align: left;">Se desempeña como: "${data.type}"</h5> 
                `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url4 = 'https://rickandmortyapi.com/api/character/50'
fetch(url4)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element4')
        elemento.innerHTML = `
        <h1>Nombre: "${data.name}"</h1>
        <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
        <h2>Ubicado en: "${data.location.name}"</h2>
        <h3 style="text-align: left;">Origen: "${data.origin.name}"</h3>
        <h3 style="text-align: left;">Tipo de especie: "${data.species}"</h3>
        <h3 style="text-align: left;">Estado: "${data.status}"</h3>
        <h4 style="text-align: left;">Se desempeña como: "${data.type}"</h4> 
        `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url4V = 'https://rickandmortyapi.com/api/character/50'
fetch(url4V)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element4V')
        elemento.innerHTML = `
                <h3>Nombre: "${data.name}"</h3>
                <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
                <h4>Ubicado en: "${data.location.name}"</h4>
                <h4 style="text-align: left;">Origen: "${data.origin.name}"</h4>
                <h4 style="text-align: left;">Tipo de especie: "${data.species}"</h4>
                <h4 style="text-align: left;">Estado: "${data.status}"</h3>
                <h5 style="text-align: left;">Se desempeña como: "${data.type}"</h5> 
                `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url5 = 'https://rickandmortyapi.com/api/character/18'
fetch(url5)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element5')
        elemento.innerHTML = `
        <h1>Nombre: "${data.name}"</h1>
        <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
        <h2>Ubicado en: "${data.location.name}"</h2>
        <h3 style="text-align: left;">Origen: "${data.origin.name}"</h3>
        <h3 style="text-align: left;">Tipo de especie: "${data.species}"</h3>
        <h3 style="text-align: left;">Estado: "${data.status}"</h3>
        <h4 style="text-align: left;">Se desempeña como: "${data.type}"</h4>
        `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url5V = 'https://rickandmortyapi.com/api/character/18'
fetch(url5V)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element5V')
        elemento.innerHTML = `
                <h3>Nombre: "${data.name}"</h3>
                <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
                <h4>Ubicado en: "${data.location.name}"</h4>
                <h4 style="text-align: left;">Origen: "${data.origin.name}"</h4>
                <h4 style="text-align: left;">Tipo de especie: "${data.species}"</h4>
                <h4 style="text-align: left;">Estado: "${data.status}"</h3>
                <h5 style="text-align: left;">Se desempeña como: "${data.type}"</h5> 
                `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url6 = 'https://rickandmortyapi.com/api/character/27'
fetch(url6)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element6')
        elemento.innerHTML = `
        <h1>Nombre: "${data.name}"</h1>
        <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
        <h2>Ubicado en: "${data.location.name}"</h2>
        <h3 style="text-align: left;">Origen: "${data.origin.name}"</h3>
        <h3 style="text-align: left;">Tipo de especie: "${data.species}"</h3>
        <h3 style="text-align: left;">Estado: "${data.status}"</h3>
        <h4 style="text-align: left;">Se desempeña como: "${data.type}"</h4> 
        `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url6V = 'https://rickandmortyapi.com/api/character/27'
fetch(url6V)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element6V')
        elemento.innerHTML = `
                <h3>Nombre: "${data.name}"</h3>
                <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
                <h4>Ubicado en: "${data.location.name}"</h4>
                <h4 style="text-align: left;">Origen: "${data.origin.name}"</h4>
                <h4 style="text-align: left;">Tipo de especie: "${data.species}"</h4>
                <h4 style="text-align: left;">Estado: "${data.status}"</h3>
                <h5 style="text-align: left;">Se desempeña como: "${data.type}"</h5> 
                `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url7 = 'https://rickandmortyapi.com/api/character/90'
fetch(url7)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element7')
        elemento.innerHTML = `
        <h1>Nombre: "${data.name}"</h1>
        <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
        <h2>Ubicado en: "${data.location.name}"</h2>
        <h3 style="text-align: left;">Origen: "${data.origin.name}"</h3>
        <h3 style="text-align: left;">Tipo de especie: "${data.species}"</h3>
        <h3 style="text-align: left;">Estado: "${data.status}"</h3>
        <h4 style="text-align: left;">Se desempeña como: "${data.type}"</h4>  
        `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url7V = 'https://rickandmortyapi.com/api/character/90'
fetch(url7V)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element7V')
        elemento.innerHTML = `
                <h3>Nombre: "${data.name}"</h3>
                <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
                <h4>Ubicado en: "${data.location.name}"</h4>
                <h4 style="text-align: left;">Origen: "${data.origin.name}"</h4>
                <h4 style="text-align: left;">Tipo de especie: "${data.species}"</h4>
                <h4 style="text-align: left;">Estado: "${data.status}"</h3>
                <h5 style="text-align: left;">Se desempeña como: "${data.type}"</h5> 
                `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url8 = 'https://rickandmortyapi.com/api/character/77'
fetch(url8)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element8')
        elemento.innerHTML = `
        <h1>Nombre: "${data.name}"</h1>
        <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
        <h2>Ubicado en: "${data.location.name}"</h2>
        <h3 style="text-align: left;">Origen: "${data.origin.name}"</h3>
        <h3 style="text-align: left;">Tipo de especie: "${data.species}"</h3>
        <h3 style="text-align: left;">Estado: "${data.status}"</h3>
        <h4 style="text-align: left;">Se desempeña como: "${data.type}"</h4>  
        `;
        console.log(data)
    })
    .catch(err => console.log(err))

const url8V = 'https://rickandmortyapi.com/api/character/77'
fetch(url8V)
    .then(response => response.json())
    .then(data => {
        let elemento = document.getElementById('element8V')
        elemento.innerHTML = `
                <h3>Nombre: "${data.name}"</h3>
                <img style="border-radius: 30px; width: 50%;" src='${data.image}'/>
                <h4>Ubicado en: "${data.location.name}"</h4>
                <h4 style="text-align: left;">Origen: "${data.origin.name}"</h4>
                <h4 style="text-align: left;">Tipo de especie: "${data.species}"</h4>
                <h4 style="text-align: left;">Estado: "${data.status}"</h3>
                <h5 style="text-align: left;">Se desempeña como: "${data.type}"</h5> 
                `;
        console.log(data)
    })
    .catch(err => console.log(err))

/*const url1 = 'https://rickandmortyapi.com/api/character/5'
fetch(url1)
    .then(response1 => response1.json())
    .then(data => {
        let elemento1 = document.getElementById('element1')
        elemento1.innerHTML = `
            <p>${data.name}</p>
            <p>${data.origin.name}</p>
            <img src='${data.image}'/>
            `;
        console.log(data)
    })
    .catch(err1 => console.log(err1))*/

/*let url = 'https://rickandmortyapi.com/api/character/'
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<div>
        <div>${data[i].name}</div>
        <img src='${data[i].image}'/>
        <div>${data[i].created}</div>
        <div>${data[i].species}</div>
        <div>${data[i].status}</div>
        </div>`
    }
    document.getElementById('data').innerHTML = body
}*/