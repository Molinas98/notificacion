window.onload = function () {
    // Swal.fire({
    //     title: 'Error!',
    //     text: 'Do you want to continue',
    //     icon: 'error',
    //     confirmButtonText: 'Cool'
    //   })

    hola = setTimeout(mensajes, 5000)
};

function mensajes(){
    fetch("http://54.237.4.187/process")
    .then( response => response.json() )
    .then( data => console.log(data) )
}s
