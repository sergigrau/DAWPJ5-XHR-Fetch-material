/*
 * 09.03.2026
 * - Actualització a NodeJS 24
 */

let xhr;

function inici() {
    document.getElementById('carregar').addEventListener('click', obtenirProductes);
    document.getElementById('afegir').addEventListener('click', afegirProducte);
    document.getElementById('modificar').addEventListener('click', modificarProducte);
    document.getElementById('esborrar').addEventListener('click', esborrarProducte);
    xhr = new XMLHttpRequest();

}

function obtenirProductes() {
    //callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            document.getElementById("llista").innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', '/api/productes');
    xhr.send(null);
}

function afegirProducte() {
    let cat = document.getElementById('cat').value;
    let nom = document.getElementById('nom').value;
    let preu = document.getElementById('preu').value;

    let data = `cat=${cat}&nom=${nom}&preu=${preu}`;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log('producte afegit');
        }
    });

    xhr.open("POST", "http://localhost:3000/api/productes");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}


function modificarProducte() {
    let cat = document.getElementById('cat').value;
    let nom = document.getElementById('nom').value;
    let preu = document.getElementById('preu').value;

    let data = `cat=${cat}&nom=${nom}&preu=${preu}`;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log('producte modificat');
        }
    });

    xhr.open("PUT", `http://localhost:3000/api/productes/${cat}/${nom}`);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}

function esborrarProducte() {
    let cat = document.getElementById('cat').value;
    let nom = document.getElementById('nom').value;
    let preu = document.getElementById('preu').value;


    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log('producte esborrar');
        }
    });

    xhr.open("DELETE", `http://localhost:3000/api/productes/${cat}/${preu}`);
    xhr.send(null);
}

window.addEventListener("load", inici, true);