class Carrito{
    //Agregar producto al carrito
    comprarProducto(e){
        e.prevenDefault();
        if(e.target.classList.contains('agregar-carrito'))
        {
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }
}