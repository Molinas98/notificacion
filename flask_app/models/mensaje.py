from flask import flash
from notifypy import Notify
import time
from os import path
import re

class Usuario:
    def __init__(self,data):
        self.id = data['id']
        self.nombre = data['nombre']
        self.apellido = data['apellido']
        self.email = data['email']
        self.password = data['password']
        self.celular = data['celular']
        self.activo = data['activo']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.nivel_usuario_id = data['nivel_usuario_id']

    @staticmethod
    def enviar_notificacion(titulo, mensaje):
        direccion = path.abspath(path.dirname(__file__))
        notificacion = Notify()
        # notificacion.icon =path.join(direccion, 'static\\img', "icono_notificacion.png"),
        # notificacion.audio=path.join(direccion, 'static\\audio', "notificacion.wav"),
        notificacion.title = titulo
        notificacion.message = mensaje
        notificacion.send()
        time.sleep(3)


