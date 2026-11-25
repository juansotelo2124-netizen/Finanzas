const categoria = document.getElementById("Categoria")
const gastos = document.getElementById("hijo2")
fetch("http://localhost:3000/api/categorias")
 
.then(respuesta => respuesta.json())
.then(datos => {
    for (let i = 0; i < datos.length; i++) {
        categoria.innerHTML += `<option>${datos[i].nombre}</option>`
    }
})
 
fetch("http://localhost:3000/api/gastos")   
.then(respuesta => respuesta.json())  
.then(datos => {
    for (let i = 0; i < datos.length; i++) {
        gastos.innerHTML += `
                

                <div class="sp1">
                <label id="gasto" for="gastos">Gastos:</label>
                <span>$${datos[i].monto}</span>
                <span>${datos[i].nombre}</span>
                <button class="boton">Eliminar</button>
                <button class="boton">Editar</button>
                </div>
                <div class="sp2">
                </div>
            </div>`
    }
})

