// Obtenemos los elementos de las bebidas
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");

const bebi1 = document.getElementById("bebi1");
const bebi2 = document.getElementById("bebi2");
const bebi3 = document.getElementById("bebi3");

// Función para mostrar la lista de bebidas según la opción seleccionada
function mostrarBebidas() {
    if (op1.checked) {
        bebi1.style.display = "block";
        bebi2.style.display = "none";
        bebi3.style.display = "none";
    } else if (op2.checked) {
        bebi1.style.display = "none";
        bebi2.style.display = "block";
        bebi3.style.display = "none";
    } else if (op3.checked) {
        bebi1.style.display = "none";
        bebi2.style.display = "none";
        bebi3.style.display = "block";
    }
}

// Llamamos a la función para mostrar las bebidas según el estado inicial
mostrarBebidas();

// Agregamos eventos a los radio buttons para que se actualice la vista
op1.addEventListener("change", mostrarBebidas);
op2.addEventListener("change", mostrarBebidas);
op3.addEventListener("change", mostrarBebidas);


// Ahora, para los postres

// Obtenemos los elementos de los postres
const opp1 = document.getElementById("opp1");
const opp2 = document.getElementById("opp2");
const opp3 = document.getElementById("opp3");

const post1 = document.getElementById("post1");
const post2 = document.getElementById("post2");
const post3 = document.getElementById("post3");

// Función para mostrar la lista de postres según la opción seleccionada
function mostrarPostres() {
    if (opp1.checked) {
        post1.style.display = "block";
        post2.style.display = "none";
        post3.style.display = "none";
    } else if (opp2.checked) {
        post1.style.display = "none";
        post2.style.display = "block";
        post3.style.display = "none";
    } else if (opp3.checked) {
        post1.style.display = "none";
        post2.style.display = "none";
        post3.style.display = "block";
    }
}

// Llamamos a la función para mostrar los postres según el estado inicial
mostrarPostres();

// Agregamos eventos a los radio buttons para que se actualice la vista
opp1.addEventListener("change", mostrarPostres);
opp2.addEventListener("change", mostrarPostres);
opp3.addEventListener("change", mostrarPostres);
