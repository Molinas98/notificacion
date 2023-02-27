from flask_app import app
from flask import render_template
from flask import jsonify
from notifypy import Notify
from os import path
import time

direccion = path.abspath(path.dirname(__file__))
carpetas = direccion.split("\\")
direccion = direccion[:(len(direccion)-len(carpetas[len(carpetas)-1])-1)]
notificacion_base = Notify(
    # default_notification_icon=path.join(direccion, 'static\\img', "icono_notificacion.png"),
    # default_notification_audio=path.join(direccion, 'static\\audio', "notificacion.wav"),
)

def enviar_notificacion(titulo, mensaje):
    notificacion_base.title = titulo
    notificacion_base.message = mensaje
    notificacion_base.send()
    time.sleep(5)

mensajes = [
    {"titulo": "Primero", "mensaje": "Este es el primer mensaje"},
    {"titulo": "Segundo", "mensaje": "Este es el segundo mensaje"},
    {"titulo": "Tercero", "mensaje": "Este es el tercer mensaje"},
]


@app.route("/")
def login():
    noti = Notify()
    noti.title = "hola"
    noti.message = "Esta es una prueba"
    noti.send()
    return render_template('index.html')

@app.route("/process")
def logina():
    for mensaje in mensajes:
        enviar_notificacion(mensaje["titulo"],mensaje["mensaje"])
    return jsonify(message="Hello World")