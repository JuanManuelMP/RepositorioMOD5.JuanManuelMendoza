let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];


let ropa = productos.filter(producto => producto.categoria === 'Ropa');
console.log("Productos de la categoría 'Ropa':", ropa);

let preciosMayores = productos.filter(producto => producto.precio > 30);
console.log("Productos con precio mayor a 30:", preciosMayores);
