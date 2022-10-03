/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generarCarta() {
    //aca generamos primero el array de palos de las cartas y luego lo aleatorizamos
    let palos = ["♦", "♥", "♠", "♣"];
    let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

    //aca generamos primero el array de numeros y letras de las cartas y luego lo aleatorizamos
    let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
    let numeroAleatorio = number[Math.floor(Math.random() * number.length)];

    let color =
      paloAleatorio == "♥" || paloAleatorio == "♦" ? "text-danger" : "";

    //generacion del codigo HTML
    document.getElementById(
      "cartas-random"
    ).innerHTML += `<div class=" col container rounded">
    <div class="container text-center text-bg-success p-3 rounded">
        <div class="card" style="width: 10rem; height: 13rem" id="card">
            <div class="card2 ${color}" id="palo-izq" style="height: 20%"><div class="palosIzq">${paloAleatorio}</div></div>
            <div class="card2 ${color}" id="numero" style="height: 60%"><div class="numeros">${numeroAleatorio}</div></div>
            <div class="card2 ${color}" id="palo-der" style="height: 20%"><div class="paloDer">${paloAleatorio}</div></div>
        </div>
    </div>
</div>`;

    let aleatorio = [numeroAleatorio, paloAleatorio];

    return aleatorio;
  }

  //hacemos el array
  let arrCartas = [];

  function generarArray() {
    document.getElementById("cartas-random").innerHTML = "";
    arrCartas = [];
    let carntidadDeCartas = document.getElementById("cantidad-cartas").value;
    // arrCartas.length = carntidadDeCartas;
    for (let i = 0; i < carntidadDeCartas; i++) {
      let cartaAleatoria = generarCarta();
      arrCartas.push(cartaAleatoria);
    }
    console.log(arrCartas);
    return arrCartas;
  }

  // aca llamamos a generar el array y las cartas

  document.getElementById("baraja").addEventListener("click", generarArray);

  //comienza funcion para ordenar

  document.getElementById("ordena").addEventListener("click", function() {
    let wall = arrCartas.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
      let index = 0;

      while (index < wall) {
        //compare the adjacent positions, if the right one is bigger, we have to swap

        if (arrCartas[index + 1][0] == "K") {
          arrCartas[index + 1][0] = 12;
        } else if (arrCartas[index + 1][0] == "Q") {
          arrCartas[index + 1][0] = 11;
        } else if (arrCartas[index + 1][0] == "J") {
          arrCartas[index + 1][0] = 10;
        } else if (arrCartas[index + 1][0] == "A") {
          arrCartas[index + 1][0] = 1;
        }

        if (arrCartas[index][0] == "K") {
          arrCartas[index][0] = 12;
        } else if (arrCartas[index][0] == "Q") {
          arrCartas[index][0] = 11;
        } else if (arrCartas[index][0] == "J") {
          arrCartas[index][0] = 10;
        } else if (arrCartas[index][0] == "A") {
          arrCartas[index][0] = 1;
        }
        if (arrCartas[index][0] > arrCartas[index + 1][0]) {
          let aux = arrCartas[index];
          arrCartas[index] = arrCartas[index + 1];
          arrCartas[index + 1] = aux;
        }
        index++;
      }
      wall--; //decrease the wall for optimization
    }

    console.log(arrCartas);
    document.getElementById("cartas-random").innerHTML = "";
    for (let index = 0; index < arrCartas.length; index++) {
      let color =
        arrCartas[index][1] == "♥" || arrCartas[index][1] == "♦"
          ? "text-danger"
          : "";
      if (arrCartas[index][0] == 12) {
        arrCartas[index][0] = "K";
      } else if (arrCartas[index][0] == 11) {
        arrCartas[index][0] = "Q";
      } else if (arrCartas[index][0] == 10) {
        arrCartas[index][0] = "J";
      } else if (arrCartas[index][0] == 1) {
        arrCartas[index][0] = "A";
      }
      document.getElementById(
        "cartas-random"
      ).innerHTML += `<div class=" col container rounded">
  <div class="container text-center text-bg-success p-3 rounded">
      <div class="card" style="width: 10rem; height: 13rem" id="card">
          <div class="card2 ${color}" id="palo-izq" style="height: 20%"><div class="palosIzq">${arrCartas[index][1]}</div></div>
          <div class="card2 ${color}" id="numero" style="height: 60%"><div class="numeros">${arrCartas[index][0]}</div></div>
          <div class="card2 ${color}" id="palo-der" style="height: 20%"><div class="paloDer">${arrCartas[index][1]}</div></div>
      </div>
  </div>
</div>`;
    }
    return arrCartas;
  });

  //fin de funcion para ordenar
};
