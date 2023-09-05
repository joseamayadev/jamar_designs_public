function procesarJSON(jsonData, numero, url, tiempoEsperaMs) {
    // Extraer los datos del JSON
    const numeroJSON = jsonData.numero;
    const urlJSON = jsonData.url;
  
    // Extraer los parámetros de consulta de la URL
    const urlParams = new URLSearchParams(new URL(url).search);
    const numeroQueryParam = urlParams.get('numero');
    const urlQueryParam = urlParams.get('url');
  
    // Validar si los datos coinciden
    if (numero === numeroJSON && urlQueryParam === urlJSON) {
      console.log(`Datos del JSON coinciden con los parámetros de la URL. Ejecutando código en ${tiempoEsperaMs} ms...`);
      setTimeout(function() {
        // Aquí colocar el código que se desea ejecutar
        console.log("Código ejecutado correctamente.");
      }, tiempoEsperaMs);
    } else {
      console.log("Los datos del JSON no coinciden con los parámetros de la URL. No se ejecuta el código.");
    }
  }
  
  // Ejemplo de uso:
  // Supongamos que tenemos el siguiente JSON:
  // const jsonData = {
  //     numero: 42,
  //     url: "https://ejemplo.com"
  // };
  
  // Supongamos que la URL con parámetros de consulta es:
  // const url = "https://ejemplo.com?numero=42&url=https://ejemplo.com";
  
  // Llamamos a la función con los parámetros del JSON y la URL a verificar:
  // procesarJSON(jsonData, 42, url, 5000);
  