var nombres = [];

function solicitarNombre() {
  var num = 0;

  // Revisar si el usuario escribió un número
  do {
    num = parseInt( window.prompt("¿Cuántos nombres desea ingresar?") )
    /* 
      Si el usuario escribe 'string', entonces SERÁ un NaN
      Si es así convertir 'num' en 'LOL' para que dé error el 'while' y se repita esta cosa 
    */
    if ( isNaN(num) ) {
      num = "LOL";
    }
  } while ( typeof(num) !== "number" );
  
  // Ingresar nombres al array
  for ( var i = 0; i < num; i++ ) {
    var nombre = "";
    // Revisar si el usuario solo escribe 'strings'
    do {
      nombre = window.prompt("Escriba un nombre.");
      /* 
        Si el usuario escribe 'string', entonces SERÁ un NaN, por lo tanto está bien,
        así que si no es NaN, el usuario escribió un número, 
        por lo que se debe cambiar a 'número' para que dé error el 'while' y se repita 
        ¡¡¡¡¡¡¡¡¡ AAAAAAAHHHH EL USUARIO PUEDE ESCRIBIR NÚMEROS EN EL NOMBRE !!!!!!!!!!
      */
      
      if ( !isNaN( parseInt(nombre) ) || nombre.length <= 2 ) {
        nombre = Number(nombre);
      }

    } while (typeof(nombre) !== "string");

    nombres.push(nombre);
  }

  // Imprimir array desordenado
  console.log("Array desordenado:");
  console.log(nombres);

  // Imprimir array ordenado
  console.log("Array ordenado:");
  console.log(nombres.sort());
} 

solicitarNombre();