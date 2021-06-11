function saludoretardo(){

    setTimeout(function(){saludo()},2000);

}


function saludo(){alert('¡Bienvenido a La cocina de Musashi!');}

window.onload = saludoretardo;


