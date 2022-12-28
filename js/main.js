let ListaDeProductosOServicios = '';
let ProductoUSevicioIngresado = prompt('Ingrese el nombre del producto u servicio, para terminar ingrese Siguiente');

while (ProductoUSevicioIngresado !== 'Siguiente') {
    ListaDeProductosOServicios = ListaDeProductosOServicios + '\n' + ProductoUSevicioIngresado;
    ProductoUSevicioIngresado = prompt('Ingrese el nombre del producto u servicio, para terminar ingrese Siguiente');
}

alert('La lista de nombre ingresado es: ' + ListaDeProductosOServicios);

total = 0

const ProductosAsumar = parseInt(prompt('Cuantos productos o servicios tiene?'));

function IngresarCosto() {

    for (let i = 1; i <= ProductosAsumar; i++) {
        const CostoIngresado = prompt('Ingrese el costo del producto u servicio');
        const Numero = parseInt(CostoIngresado);
        if (Numero) {
            total = total + Numero;
        }
    }
}

IngresarCosto ();

alert('La suma de todos los costos de los productos o servicios es: ' + total);