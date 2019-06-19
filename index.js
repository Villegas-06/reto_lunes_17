var totalPuntos = 1230;
var amigos = ["Mike","Lucas","Dustin","Eleven","Max"];
var artefactos = 3;
var puntosArtefactosPorAmigo = [0,0,0,0,0]
var sumaTotal = 0;
var totalPorcentaje = [0,0,0,0,0]

for(var i = 0; i<amigos.length;i++){
    for(var j = 0; j < artefactos; j++){
        do{
            var artefacto = prompt("Digite los puntos"+
            " del artefacto "+(j+1)+" recolectado por "+
            amigos[i]);
            artefacto = parseInt(artefacto)
        }while(artefacto < 1 || artefacto > 100)
        
        puntosArtefactosPorAmigo[i] += artefacto;

        //alert("el total de puntos va en "+
        //puntosArtefactosPorAmigo[i]);

    }
    
    sumaTotal += puntosArtefactosPorAmigo[i];

}


for(var k = 0; k < puntosArtefactosPorAmigo.length; k++){
    document.write("<h3>Los puntos que recogió "+
    amigos[k]+" fueron en total "
    + puntosArtefactosPorAmigo[k]);

}

for(var p = 0; p < totalPorcentaje.length; p++){

    totalPorcentaje[p] = puntosArtefactosPorAmigo[p] * 100 / sumaTotal;
    document.write("<h3> porcentaje: " + totalPorcentaje[p]);
    
}



document.write("<h3> La suma total es de: " + sumaTotal);