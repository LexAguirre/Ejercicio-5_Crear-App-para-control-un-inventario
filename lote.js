"use strict";

export default class inventory{
    
    constructor(){
        this.inventario = new Array();
    }

    agregar(nuevo){
        if(this.inventario.length === 20){
            return false;
        } else if(this.inventario.length < 20){
            this.inventario.push(nuevo);
        }
    }

    buscar(codigo){
        for (let i=0; i<this.inventario.length; i++){
            if (codigo == this.inventario[i].codigo){
            return this.inventario[i];
            }
        }
        
        return null;
    }

    eliminar() {

    }

    listar() {
        if(this.inventario.length === 0){
            document.getElementById('detalles').innerHTML += `
            <p>El inventario se encuentra vacio</p>`;
        } else {
            for(let i=0; i<this.inventario.length; i++){
            document.getElementById('detalles').innerHTML += `
            <p>Elemento Num.${i}: Codigo ${this.inventario[i].codigo} Nombre ${this.inventario[i].nombre}</p>

        `;
        }
        }  
    }    

    listarReverso() {
        if(this.inventario.length === 0){
            document.getElementById('detalles').innerHTML += `
            <p>El inventario se encuentra vacio</p>`;
        } else {
            for(let i = this.inventario.length -1; i >= 0 ; i--){
            document.getElementById('detalles').innerHTML += `
            <p>Elemento Num.${i}: Codigo ${this.inventario[i].codigo} Nombre ${this.inventario[i].nombre}</p>

        `;
        }
        }  
    }    

    insertarEnPosicionEspecifica(nuevo){
        if(this.inventario.length === 20){
            return false;
        } else if(this.inventario.length < 20){
            this.inventario.push(nuevo);
        }
    }

    IntercambioDeElementos(datos, i = 0, j = datos.length -1){

        [datos[i], datos[j]] = [datos[j], datos[i]];
    }
}