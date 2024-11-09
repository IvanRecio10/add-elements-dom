 // Aquí tu código
var btnAgregar = document.getElementById("agregar")
var list = document.getElementById("lista")

btnAgregar.addEventListener('click', () => {
    var elementList = prompt("Ingrese un elemento a la lista:")
    if(elementList != ""){
        list.innerHTML += "<li>" + elementList + "</li>"
        alert("Su elemento se ha añadido correctamente")
    }else{
        alert("Tienes que ingreasar algo")
    }
})