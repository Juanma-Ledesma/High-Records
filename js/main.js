const productos = [
    { nombre: "Highway to Hell - ", precio: 608.09 },
    { nombre: "Thriller - ", precio: 465.02 },
    { nombre: "Destroyer - ", precio: 397.59 },

]

let carrito = []

let seleccion = prompt("Hola desea comprar algo? si o no?")

while (seleccion != "si" && seleccion != "no") {
    alert("porfavor ingresar si o no")
    seleccion = prompt("Desea comprar algo? si o no?")
}

if (seleccion == "si") {
    alert("a continuacion nuestros productos disponibles")
    let todoslosproductos = productos.map((producto) => producto.nombre + "" + producto.precio + "$")
    alert(todoslosproductos.join(" - "))
} else if (seleccion == "no") {
    alert("gracias por venir")
}

while (seleccion != "no") {
    let producto = prompt("agregar un producto a tu carrito")
    let precio = 0


    if (producto == "highway to hell" || producto == "thriller" || producto == "destroyer") {
        switch (producto) {
            case "highway to hell":
                precio = 608.09;
                break;
            case "thriller":
                precio = 465.02;
                break;
            case "destroyer":
                precio = 397.59;
                break;
            default:
                break;
        }

        carrito.push({ producto, precio })
        console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando??")

    while (seleccion === "no") {
        alert("gracias por la compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${ carritoFinal.producto }, total a pagar por producto ${carritoFinal.precio}`)
        })
    break
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio, 0)
console.log(`el total a pagar su compra es: ${total}`)