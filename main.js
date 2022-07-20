//Declaracion de variables
let verduras = [
    {
        nombre: 'Tomate',
        tipo: 'Redondo',
        peso: '1 kg',
        precio: '200$',
        imagen: 'img/tomate1.jpg'        
    },
    {
        nombre: 'Cebolla',
        tipo: 'Común',
        peso: '1 kg',
        precio: '180$',
        imagen: 'img/cebolla.jpg'
    },
    {
        nombre: 'Lechuga',
        tipo: 'Mantecosa',
        peso: '1 kg',
        precio: '170$',
        imagen: 'img/lechuga.jpg'
    },
    {
        nombre: 'Papa',
        tipo: 'Lavada',
        peso: '1 kg',
        precio: '150$',
        imagen: 'img/papas.jpg'
    },
    {
        nombre: 'Pimiento',
        tipo: 'Rojo',
        peso: '100 gr',
        precio: '80$',
        imagen: 'img/pimiento.jpg'
    },
    {
        nombre: 'Remolacha',
        tipo: 'Común',
        peso: '1 kg',
        precio: '200$',
        imagen: 'img/remolacha.jpg'
    },
    {
        nombre: 'Zanahoria',
        tipo: 'Danvers',
        peso: '1 kg',
        precio: '190$',
        imagen: 'img/zanahorias.jpg'
    },
    {
        nombre: 'Palta',
        tipo: 'Hass',
        peso: 'Por unidad',
        precio: '100$',
        imagen: 'img/palta1.jpg'
    },
    {
        nombre: 'Choclo',
        tipo: 'Dentado',
        peso: '1 kg',
        precio: '250$',
        imagen: 'img/choclo.jpg'
    },
    {
        nombre: 'Zapallo',
        tipo: 'Brasilero',
        peso: '1 kg',
        precio: '230$',
        imagen: 'img/zapallo.png'
    },
]

//Interacción con el DOM
let miLista = document.getElementById("listaDeVerduras");


//Buble iterador que arma cada ficha de verdura, siendo visible en el HTML
for (let verdura of verduras){
    miLista.innerHTML += `
        <div class = "div-padre">
            <h3>${verdura.nombre}</h3>
            <p>${verdura.tipo}</p>
            <p>${verdura.peso}</p>
            <p>${verdura.precio}</p>
            <div class="imagen"><img src="${verdura.imagen}"></div>
        </div>
    `
}

