class Interfaz{

    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }

    construirSelect(){
        cotizacionador.obtenerMonedasAPI()
            .then(monedas => {
                const select = document.querySelector('#criptomoneda');
                for( const [key, value] of Object.entries(monedas.monedas.Data) ){
                    console.log(value);

                    //anadir el symbol y el nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
                
            })
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));


        //seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
          divMensaje.appendChild(div); 


        //mostrar contenido
        setTimeout(() => {
             document.querySelector('.mensajes div').remove();
        }, 3000);
    
    }

    //Imprime el resultado de la cotizacion
    mostrarResultado(resultado, moneda, crypto){

        const datosMoneda = resultado[crypto][moneda];
        console.log(datosMoneda);

        //recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2),
            porcentaje = datosMoneda.datosMoneda.CHANGEPCDAY.toFixed(2),
            actualizado = new Date(datosMoneda.LASTUPDATE *1000).toLocaleTimeString('es-MX');

;
        //Construir el template
        let templateHTML = `
            <div class="card ng-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: ${datosMoneda.PRICE}
                    <p>Variacion ultio dia: % ${porcentaje}</p>   
                    <p>Ultima actualizacion: ${actualizadp} </p> 
                </div>
            </div>
        `;

        //insertar el resultado
        document.querySelector('#resultado').innerHTML = templateHTML;
    }
}


