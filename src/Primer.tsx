import React from 'react'
import {bancos} from './assets/bancos'


function Primer() {
    const element = '<h1>Hello</h1>';
    const nombre = 'Gabriel';
    const apellidos = 'Espino Sifuentes';
    const elemento = `<h1>Nombre: ${nombre}</h1>`;

    console.log(element);
    console.log(nombre + ' ' + apellidos);
    console.log(elemento);

    let valor = 5;
    valor = 7;
    console.log(valor);

    function getSaludo(nombre) {
        return 'Hola' + ' ' + nombre;
    }

    console.log(getSaludo('Mundo'))

    const estudiante = {
        matricula: 'A01234685',
        nombre: 'Gabriel',
        edad: 21,
        dirección: {
            ciudad: 'Mty',
            zip: 64800
        },
        clase: 'TC3004B'
    };

    console.log(estudiante);
    console.table(estudiante);

    const estudiante2 = {...estudiante};

    estudiante2.nombre = 'Ramon';

    console.log(estudiante2);
    console.table(estudiante2);

    const arreglo = [1,2,3,4,5];
    console.log(arreglo);

    arreglo.pop();
    console.log(arreglo);

    arreglo.push(9);
    console.log(arreglo);    

    let arreglo2 = {...arreglo};
    console.log(arreglo2);

    const saludar = function(nombre:string) {
        return `Hola ${nombre}`;
    }

    const saludar2 = (nombre:string) => {
        return `Hola ${nombre}`;
    }

    const saludar3 = (nombre:string) => `Hola ${nombre}`;

    console.log(saludar("Gabriel"));
    console.log(saludar2("Regina"));
    console.log(saludar3("Carlos"));

    let a, b, rest;
    [a, b] = [10, 20];
    console.log(a);
    // Expected output: 10
    console.log(b);
    // Expected output: 20
    [a, b, ...rest] = [10, 20, 30, 40, 50];
    console.log(rest);
    // Expected output: Array [30, 40, 50]

    console.log(bancos);

    const getBancoById = (id) => bancos.find ( (banco)=> banco.id===id);
    console.log(getBancoById(1))

    const getBancoByEmpresa = (name) => bancos.filter( (banco) => banco.name===name);
    console.log(getBancoByEmpresa('Santander'))

    const promesa = new Promise( (resolve, reject) => {
      setTimeout( () => {

        },3000)
      });

      const apiKey = 'UPAkadtmwjWS7YnklGT1NXe8nBDqni3F';
      const peticion = fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + apiKey);
      peticion
      .then( resp => resp.json() )
      .then( data =>{ console.log(data.data[0].url)})
      .catch( console.warn);

  return (
    <div>
      <h1>Hola Mundo!</h1>
      <h2>Gabriel Espino Sifuentes</h2>

      <h3>Lista de Bancos</h3>
      <ul>
        {bancos.map((a) => (
          <li key={a.id}>
            {a.id} — {a.name} — {a.country}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Primer
