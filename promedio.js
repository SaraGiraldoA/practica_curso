
function calcularMediaAritmetica(lista){
    
    //let sumaLista = 0;
    //for (let i =0;i < lista.length; i++){
    //sumaLista = sumaLista + lista[i];
    //}

    const promedioLista = sumaLista / lista.length; 

    const sumaLista = lista.reduce(
       function(valorAcumulado = 0,nuevoelemento){
           return valorAcumulado + nuevoelemento;
       } 
    );

    return promedioLista;
}
