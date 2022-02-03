// TRIANGULO

function area_triangulo(base,altura) {
    var areaTriangulo = (base * altura) / 2
   return areaTriangulo;
}

// ALTURA DE UN TRIANGULO ISOSCELES 

function altura_isosceles(longitud_lado,base) {
    var altura = (longitud_lado * longitud_lado) - (base * base / 4)
    return Math.sqrt(altura).toFixed(2)
}


// CUADRADO

function perimetro_cuadrado(lado) {
    var perimetro = lado * 4
    return perimetro;
}

function area_cuadro(longitud_lado) {
    var area = longitud_lado * longitud_lado
    return area
}


//AQUI INTERACTUAMOS CON EL HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value
    const perimetro = perimetro_cuadrado(value)
    alert(`El perimetro del cuadrado es de ${perimetro} cm`);
}

function calcularAreaCuadro() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value
    const area = area_cuadro(value);
    alert(`El area del cuadro es de ${area} cm al cuadrado`)
}

function calcularAreaTriangulo() {
    const input_base = document.getElementById("InputTriangulo_base");
    const input_altura = document.getElementById("InputTriangulo_altura");
    const value_base = input_base.value
    const value_altura = input_altura.value
    const area = area_triangulo(value_base,value_altura);
    alert(`El area del triangulo es de ${area} cm`)  
}