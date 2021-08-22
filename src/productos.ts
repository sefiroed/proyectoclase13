/*Creamos nuestra clase con los metodos a utilizar 
en la carpeta index.js*/

class Producto {
  public productos:any;
  constructor() {
    this.productos = [];
  }
  leer() {
    return this.productos;
  }
  leerPorId(id:any) {
    return this.productos.find((producto:any) => producto.id == id);
  }
  guardar(dato:any) {
    const producto = { id: this.productos.length, ...dato };
    this.productos.push(producto);
    return producto;
  }  
  actualizar(dato:any, id:any){
    if(this.productos.find((data:any) => data.id ==  id) == undefined){
      return {"error": "Producto no ha sido encontrado"};
    }    
    else {
      const indice = this.productos.findIndex((data:any) => data.id ==  id);
      dato['id'] = id
      this.productos[indice] = dato;
      return this.productos
    }
  }
  borrar(id:any) {
    if(this.productos.find((data:any) => data.id ==  id) == undefined){
        return {"error": "Producto no ha sido encontrado"};
    }    
    else {
        const indice = this.productos.findIndex((data:any) => data.id ==  id);
        this.productos.splice(indice, 1);
        return this.productos
    }
  } 
    
}


export default Producto;
