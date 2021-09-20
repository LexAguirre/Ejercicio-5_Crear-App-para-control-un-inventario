"use strict";

import Product from "./producto.js";
import inventory from "./lote.js";
import Position from "./script.js";

let producto = new Product();
let lote = new inventory();
let posicion = new Position();

let btnAdd = document.getElementById('btnAdd');

    btnAdd.addEventListener('click',()=>{
        let codigo = document.getElementById('txtCode').value;
        let nombre = document.getElementById('txtName').value;
        let cantidad = document.getElementById('txtQuantity').value;
        let costo = document.getElementById('txtCost').value;

        let producto = new Product(codigo, nombre,cantidad, costo);

        if(lote.agregar(producto) === false) {
            document.getElementById('detalles').innerHTML += `
            <p>Se agotaron los espacios por lo que el producto ${producto.codigo} no se agrego</p>

        `;
        } else {
            document.getElementById('detalles').innerHTML += `
            <p>Se agrego el producto ${producto.codigo} correctamente</p>

        `;
        }
        
    });

let btnSearch=document.getElementById('btnSearch');

    btnSearch.addEventListener('click',()=>{
        let codigo = document.getElementById('txtCode').value;
        let buscado = lote.buscar(codigo);
        let detalles = document.getElementById('detalles');
        if (buscado == null)
        detalles.innerHTML += '<p>No se encontro</p>';
        else
        detalles.innerHTML +=`${buscado.infoHtml()}`;
    });

let btnList = document.getElementById('btnList');

    btnList.addEventListener('click',()=>{
        lote.listar();
    })

let btnListReverse = document.getElementById('btnListReverse');

    btnListReverse.addEventListener('click',()=>{
        lote.listarReverso();
    })

let btnPosition = document.getElementById('btnPosition');

    btnPosition.addEventListener('click',()=>{
        let codigo = document.getElementById('txtCode').value;
        let nombre = document.getElementById('txtName').value;
        let cantidad = document.getElementById('txtQuantity').value;
        let costo = document.getElementById('txtCost').value;
        let posicion = document.getElementById('txtPosition').value;

        let producto = new Product(codigo, nombre,cantidad, costo);
        let posicion = new Position(posicion);

        if(lote.agregar(producto) === false) {
            document.getElementById('detalles').innerHTML += `
            <p>Se agotaron los espacios por lo que el producto ${producto.codigo} no se agrego</p>

        `;
        } else {
            document.getElementById('detalles').innerHTML += `
            <p>Se agrego el producto ${producto.codigo} correctamente</p>

        `;
        }
    });