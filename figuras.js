//código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado es :"+ perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El area del cuadrado es: "+ areaCuadrado + "cm2");
console.groupEnd();

//código del triángulo
console.group("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
//  "Los lados del triángulo miden: "
//+ ladoTriangulo1
//+ "cm,"
//+ ladoTriangulo2  
//+ "cm,"
//+ baseTriangulo
//+ "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura  del Triangulo es: "+ alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del Triangulo es: "+ perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El area del Triangulo es: "+ areaTriangulo + "cm2");
console.groupEnd();

//código del circulo
console.group("Circulos");
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es : "+ radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//pi
const PI = Math.PI;
console.log("Pi es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//console.log("El perimetro del circulo es: "+ perimetroCirculo + "cm");

//area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


console.groupEnd();

console.group("trianguloisoceles");

function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles');
        return Math.sqrt(lado1**2 - base**2/ 4);
    }
    else{
        alert('no lo se');
    }
}
//altura(6, 6, 4)
console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetrocuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreacuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const value = Number(input1.value);
    const input2 = document.getElementById("InputLado2");
    const value1 = Number(input2.value);
    const base = document.getElementById("InputBase");
    const value2 = Number(base.value);

    const perimetro = perimetroTriangulo(value,value1,value2);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("InputBase");
    const value = Number(base.value);
    const altura = document.getElementById("InputAltura");
    const value1 = Number(altura.value);

    const area = areaTriangulo(value,value1);
    alert(area);
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}