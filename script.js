const funcionInit = () => {
	if (!"geolocation" in navigator) {
		return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
	}

	const $latitud = document.querySelector("#latitud"),
		$longitud = document.querySelector("#longitud"),
		$enlace = document.querySelector("#enlace");


	const onUbicacionConcedida = async ubicacion =>  {
		console.log("Tengo la ubicación: ", ubicacion);
		const coordenadas = ubicacion.coords;
		$latitud.innerText = coordenadas.latitude;
		$longitud.innerText = coordenadas.longitude;
		$enlace.href = `https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},20z`;
        
        let ruta = "https://appconmiciv.com/ubicacion/notas.php";
        let datos = new FormData();
        let metodo = "POST";
        datos.append("lat",coordenadas.latitude);
        datos.append("lon",coordenadas.longitude);
        //let data = await modulo.fetch_await(ruta,datos,metodo);

        try{
            let response = await fetch(ruta,{
                method : metodo,
                body : datos
            });
            let data;
            if(response.ok){
                data = await response.json();
            }else{
                data= "error"
            }
            
            return data;
        }catch(err){
            console.log(err);
            return false;
        }
    
    }

	const onErrorDeUbicacion = err => {
		$latitud.innerText = "Error obteniendo ubicación: " + err.message;
		$longitud.innerText = "Error obteniendo ubicación: " + err.message;
		console.log("Error obteniendo ubicación: ", err);
	}

	const opcionesDeSolicitud = {
		enableHighAccuracy: true, // Alta precisión
		maximumAge: 0, // No queremos caché
		timeout: 5000 // Esperar solo 5 segundos
	};

	$latitud.innerText = "Cargando...";
	$longitud.innerText = "Cargando...";
	navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);

};

document.addEventListener("DOMContentLoaded", funcionInit);