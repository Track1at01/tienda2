const tienda = [
    { nombre: "Peluche Bulbasaur", precio: 19.9 },
    { nombre: "Peluche Charmander", precio: 19.9 },
    { nombre: "Peluche Squirtle ", precio: 19.9 },
    { nombre: "Peluche Eevee", precio: 21.9 },
];
let carrito = [];
const tiendacontenedor = document.getElementById("shop")
tienda.forEach((item) => {
    console.log("elemento:", item);

    const itemContenedor = document.createElement("div")
    tiendacontenedor.appendChild(itemContenedor)
    itemContenedor.className = "hola"

    const itemNombre = document.createElement("span")
    itemNombre.textContent = item.nombre
    itemContenedor.appendChild(itemNombre)
    itemNombre.className = "span"


    const itemPrecio = document.createElement("span")
    itemContenedor.appendChild(itemPrecio)
    itemPrecio.textContent = item.precio + "$"
    itemPrecio.className = "span"

    const itemBoton = document.createElement("button")
    itemContenedor.appendChild(itemBoton)
    itemBoton.textContent = "Agregar"
    
    itemBoton.addEventListener("click", () => {
        const existe = carrito.find((elemento) => {
            return elemento.nombre == item.nombre
        });
        if (existe !== undefined) {
            existe.cantidad = existe.cantidad + 1
        } else {
            carrito.push({
                nombre: item.nombre,
                precio: item.precio,
                cantidad: 1
            });
        }
    })
});