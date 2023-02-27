window.onload = function () {
    hola = setTimeout(mensajes, 5000)
};

function mensajes(){
    fetch("http://localhost:5000/process")
    .then( response => response.json() )
    .then( data => console.log(data) )
}
  