function contador(){
    let total =50;
    setTimeout(function(){
        let valor = document.getElementById('contador');
        let respuesta = document.getElementById('resultado');
        let cantidad = valor.value.length;
        document.getElementById('resultado').innterHTML = cantidad + 'caracteres que te quedan' + (total - cantidad);
        if(cantidad>total){
            respuesta.style.color = "red";
        } else {
            respuesta.style.color = "green";
        }
    })
}