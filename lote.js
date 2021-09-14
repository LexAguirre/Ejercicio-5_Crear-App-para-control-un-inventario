"use strict";

export default class inventory{
    
    constructor(){
        this.inventario = new Array();
    }

    agregar(nuevo){
        this.inventario.push(nuevo);
    }

    buscar(codigo){
        for (let i=0; i<this.inventario.length; i++){
            console.log('...',this.inventario[i].codigo);
            if (codigo == this.inventario[i].codigo)
            return this.inventario[i];
        }

        return null;
    }

    

}