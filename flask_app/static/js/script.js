window.onload = function () {
    // Swal.fire({
    //     title: 'Error!',
    //     text: 'Do you want to continue',
    //     icon: 'error',
    //     confirmButtonText: 'Cool'
    //   })

    //hola = setTimeout(mensajes, 5000)
    const button = document.querySelector("#boton")
    button.addEventListener("click", function(){
        notificacion()
    });
};

// function mensajes(){
//     fetch("http://54.237.4.187/process")
//     .then( response => response.json() )
//     .then( data => console.log(data) )
// }

function notificacion(){

    var propiedades = {
        body: "Tienes un nuevo mensaje",
        icon: "static/img/icono_notificacion.png"
        //icon: "http://xitrus.es/imgs/logo_claro.png"
    }

    if(!("Notification" in window)){
        alert("El navegador no soporta notificaciones");
    }else if (Notification.permission === "granted"){
        console.log("Aca")
        var notificacion = new Notification("Mi primera notificación", propiedades)
        console.log("Ta")

        notificacion.onclick = (ev) => {
            ev.preventDefault()
            window.open("https://www.instagram.com")
        }
        
    }else if( Notification.permission !== "denied"){
        Notification.requestPermission(function(permission){
            if (Notification.permission === "granted"){
                var notificacion = new Notification("Hola mundo", propiedades) 

                notificacion.onclick = (ev) => {
                    ev.preventDefault()
                    window.open("https://www.instagram.com")
                }
            }
        });
    }


}