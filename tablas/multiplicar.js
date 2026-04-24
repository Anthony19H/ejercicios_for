function generarTablas(){

    
    let titulo =document.getElementById("titulotxt")
    let contenedor = document.getElementById("txtTabla");
    let contenido ="";
    let numero =parseInt(document.getElementById("numInput").value);

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