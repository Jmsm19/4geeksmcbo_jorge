tempSemanal = [];

function calcularTemperatura() {
  // Ingresar nombres al array
  for ( var i = 0; i < 7; i++ ) {
    var temp = "";
    var tempPromedio = 0;
    var maxTemp = 0;
    var minTemp = 0;

    // Revisar si el usuario solo escribe 'número' para cada día
    do {
      switch (i) {
        case 0:
          temp = parseFloat(window.prompt("Temperatura del lunes:"));
          break;
        case 1:
          temp = parseFloat(window.prompt("Temperatura del martes:"));
          break;
        case 2:
          temp = parseFloat(window.prompt("Temperatura del miércoles:"));
          break;
        case 3:
          temp = parseFloat(window.prompt("Temperatura del jueves:"));
          break;
        case 4:
          temp = parseFloat(window.prompt("Temperatura del viernes:"));
          break;
        case 5:
          temp = parseFloat(window.prompt("Temperatura del sábado:"));
          break;
        case 6:
          temp = parseFloat(window.prompt("Temperatura del domingo:"));
          break;
      } // FIN DEL SWITCH
      
      if ( isNaN( temp) ) {
        temp = "LOL";
      }

    } while (typeof(temp) !== "number");

    tempSemanal.push(temp);
  } // FIN DEL FOR
  

  /* 
    ¡¡¡¡ CALCULOS !!!!
  */

  // Calcular temp promedio
  tempPromedio = promedio(tempSemanal);
  console.log("Temperatura promedio: " + tempPromedio + " °C");

  // Calcular temp máxima
  maxTemp = Math.max.apply(null, tempSemanal);
  // maxTemp = Math.max( ...tempSemanal ); // Hace lo mismo, por alguna razón
  console.log("Temperatura máxima: " + maxTemp + " °C");

  // Calcular temp mínima
  minTemp = Math.min.apply(null, tempSemanal);
  // minTemp = Math.min( ...tempSemanal );  // Hace lo mismo, por alguna razón
  console.log("Temperatura mínima: " + minTemp + " °C");
}

function promedio(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
      total = total + array[i];
  }
  return Math.floor(total / array.length);
}

calcularTemperatura();