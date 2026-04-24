function generarTablas(){

    
    let titulo =document.getElementById("titulotxt")
    let contenedor = document.getElementById("txtTabla");
    let contenido ="";
    let numero =parseInt(document.getElementById("numInput").value);

    // VALIDACIÓN: ¿Es un número válido?
    if (isNaN(numero)) {
        // 1. Cambiamos el título para avisar del error
        titulo.innerHTML = "SISTEMA: ERROR DE ENTRADA";
        titulo.style.color = "#ff4d4d"; // Rojo para indicar alerta

        // 2. Mostramos un mensaje de ayuda en el contenedor
        contenedor.innerHTML = `
            <div class="item" style="border-left-color: #ff4d4d; justify-content: center;">
                <span class="op">POR FAVOR, INGRESA UN NÚMERO</span>
            </div>`;
        
        // 3. Detenemos la ejecución de la función
        return;
    }

    // Si el número es válido, restauramos el estilo y generamos la tabla
    titulo.style.color = "var(--neon-cyan)";
    titulo.innerHTML = "SISTEMA: TABLA " + numero;

    for(let i=1;i<=10 ;i++){
        contenido += `
            <div class="item">
                <span class="op">${numero} x ${i}</span> 
                <span class="res">${numero * i}</span>
            </div>`;
    }
    contenedor.innerHTML = contenido;
    titulo.innerHTML = "SISTEMA: TABLA "+ numero;
}