/*let numeroSecreto = numeroSecreto();
console.log(numeroSecreto);


function AsignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
AsignarTextoElemento("h1","Juego del nuemero secreto");
AsignarTextoElemento("p","Agrega un numero del 1 al 10");

function intentoUsuario(){
    alert("intento del usuario");
    return;
}
function numeroSecreto(){
    return numeroSecreto = Math.floor(Math.random()*10)+1;
}*/
/*let GeneraNumeroSecreto = 0;
let intentos = 0;
// cuando se tiene una variable no se puede llamar con el mismo nombre de la funcion

// dentro de la consola va el    de lo que se quiera llamar 
function agregarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function numeroSecreto() {
   return Math.floor(Math.random()*10)+1;
}
function verifircarIntento(){
    let NueroDelUsuraio = parseInt(document.getElementById("NumeroUsurio").value);
   console.log(intentos);
    if(NueroDelUsuraio === GeneraNumeroSecreto){
         agregarTexto("p",`Ganaste en ${intentos} ${(intentos === 1) ? "vez": "veces"}`);
         document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (NueroDelUsuraio > GeneraNumeroSecreto){
            agregarTexto("p","El numero es menor");
        } else {
            agregarTexto("p","El numero es mayor");
        }
    }
    intentos++;
    limpiar();
    // cuando se agrega el === es para indicar que tiene que ser igual tanto la condicion como el formato
    return;
}
function condicionesIniciales(){
agregarTexto("h1","Juego secreto");
agregarTexto("p","Agrega un numero del 1 al 10");
GeneraNumeroSecreto = numeroSecreto();
intentos = 1;

}
function limpiar(){          
   let valorCaja = document.getElementById("NumeroUsurio").value ="";

}
function reniciarjuego() {
    limpiar();
    condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
    
}
condicionesIniciales();
*/

/*let parrafo = document.querySelector("p");
// se utiliza la misma linea de codigo para refejar el parrafo que se tiene
parrafo.innerHTML = "Escoje un numero del 1 al 10";
// cuando se tiene dos lineas de codigo se puede realizar una funcion para hacer mas facil el codigo*/
let numeroSecreto = 0;
//cuando se declara la variable y asignar el "generar numero secreto" se indica que la variable corresponde a la funcion y la funcion retorna el numero secreto que se genera
let intentos = 0;
let ListaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);
function asignarTexto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    // cuando se utiliza el dentro de los parentesis el elemento y el texto son los parametros de forma universal que se van a utilizar
    elementoHTML.innerHTML = texto; 
    return;
}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroUsuario === numeroSecreto){
    asignarTexto("p",`Acertaste el numero secreto, en ${intentos} ${intentos == 1 ? "vez":"veces" }`);
    document.querySelector("#reiniciar").removeAttribute("disabled");
    } else {
        if(numeroUsuario > numeroSecreto){
            asignarTexto("p","el numero es menor");
        } else {
            asignarTexto("p","el numero es mayor ");
        }
        intentos++;
        limpiarCaja();
    }
    return;

}
function limpiarCaja() {
   document.querySelector("#valorUsuario").value ="";
   return;
}
function generarNumeroSecreto() {
    let numeroGenerados = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerados);
    console.log(ListaNumerosSorteados);
    // para que retorne la variable se debe colocar el nombre de la variable cuando se ejecute se devuel un valor
    if (ListaNumerosSorteados.length == numeroMaximo){
      asignarTexto("p","Se han asignados todos lo numeros posibles");
    } else {
    if(ListaNumerosSorteados.includes(numeroGenerados)) {
       return generarNumeroSecreto();
    } else {
        ListaNumerosSorteados.push(numeroGenerados);
        return numeroGenerados;
    }

}
}
function condicionesIniciales(){
    asignarTexto("h1","Juego del numero secreto desde asignar");
    //cuando se realiza la asignacion los parametro deben de llevar ya sea la comilla simple o comilla doble para ambos parametros
    asignarTexto("p",`Escoje un nuemero del 1 al ${numeroMaximo}`);  
    // el alemento es H1, h2, h3 etc y el texto es lo que se le agregara
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;


}

function reniciarJuego() {
    // limpiar caja 
    limpiarCaja();
    // indicar mensaje de incio 
    condicionesIniciales();
    // generar el numero alatorio 
    
    // desavilitar el botaon del intentos 
    document.querySelector("#reiniciar").setAttribute("disabled","true")
    // iniciar nuevamente el incio 
    
}

condicionesIniciales();
