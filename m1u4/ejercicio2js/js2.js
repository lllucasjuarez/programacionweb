
//INTENTO RESOLVER EL PROBLEMA A TRAVES DE UN ARRAY CON NUMEROS PROPORCIONADOS POR EL USUARIO, PERO NO ENTIENDO COMO ENCONTRAR EL NUMERO MAS ALTO E IMPRIMIRLO EN PANTALLA.


// const datos = [
//     parseInt (prompt("Ingrese primer valor")),
//     parseInt (prompt("Ingrese segundo valor")),
//     parseInt (prompt("Ingrese tercer valor"))
// ]

// for (let i = 0; i < datos.length; i++){ 
//      document.write("El numero mayor es " + [i])
// }




let numero1 = parseInt (prompt("Ingrese el primer numero al azar"));
let numero2 = parseInt (prompt("Ingrese el segundo numero al azar"));
let numero3 = parseInt (prompt("Ingrese el tercer numero al azar"));

if(numero1 >= numero2 && numero1 >= numero3) {
    alert("El numero mayor es " + numero1)
} else if(numero2 >= numero1 && numero2 >= numero3) {
    alert("El numero mayor es " + numero2)
} if(numero3 >= numero1 && numero3 >= numero2){
    alert("El numero mayor es " + numero3)
}

//SOLO PUDE RESOLVER EL PROBLEMA USANDO CONDICIONES.