// levantar el a del link de wsp
var aMsjWsp = document.getElementById('enviar')

function mensaje_wsp(){
    var nombre = document.getElementById("name")
    var apellido = document.getElementById("apellido")
    var email = document.getElementById("mail")
    var razon = document.getElementById("msg")
}

var mensaje_final
mensaje_final = "Hola,%20mi%20nombre%20es%20" + nombre.value + "%20"
mensaje_final = mensaje_final + apellido.value + ".%20"
mensaje_final = mensaje_final + "Mi%20e-mail%20es:%20" + email.value + ".%20"
mensaje_final = mensaje_final + razonvalue

var mensaje = "https://api.whatsapp.com/send/?phone=541121902602&text=" + mensaje_final

aMsjWsp.href = mensaje

aMsjWsp.addEventListener('click', mensaje_wsp)













