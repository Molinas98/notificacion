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
    fetch("http://127.0.0.1:5000/process")
    .then( response => response.json() )
    .then( data => console.log(data) )
}s