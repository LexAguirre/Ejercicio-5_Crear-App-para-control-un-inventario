"use strict";

import Product from "./producto.js";
import inventory from "./lote.js";

let producto = new Product();
let lote = new inventory();

let btnAdd = document.getElementById('btnAdd');

    btnAdd.addEventListener('click',()=>{
        let codigo = document.getElementById('txtCode').value;
        let nombre = document.getElementById('txtName').value;
        let cantidad = document.getElementById('txtQuantity').value;
        let costo = document.getElementById('txtCost').value;

        let producto = new Product(codigo, nombre,cantidad, costo);

        lote.agregar(producto);

        document.getElementById('detalles').innerHTML += `
            <p>Se agrego el producto ${producto.codigo} correctamente</p>

        `;
        //ui.addProducto(nuevo)
    });

let btnSearch=document.getElementById('btnSearch');

    btnSearch.addEventListener('click',()=>{
        let codigo = document.getElementById('txtCode').value;
        console.log(codigo);
        let buscado = lote.buscar(codigo);
        let detalles = document.getElementById('detalles');
        if (buscado == null)
        detalles.innerHTML += '<p>No se encontro</p>';
        else
        detalles.innerHTML +=`${buscado.infoHtml()}`;
    });

