import socketIo from 'socket.io';
import { guardarFromForm, guardarNewMessage } from '../modules/guardar';
import { productos, msn } from '../modules/data.js';


export const initWSServer = (server) => {
    const io = socketIo(server);
    
    io.on('connection', (socket) => {
        console.log('Nueva Conexion establecida!');

        socket.on('newProducto', (data) => {
            let res = guardarFromForm(data);

            if (res === 400) {
                socket.emit('mensajes', 'Datos no validos en el formulario');
            } else {
                let producto = [productos[productos.length - 1]];
                io.emit('update', producto);
            }
            //RESPUESTA A UN SOLO CLIENTE
            // socket.emit('mensajes', messages);
      
            //ENVIARLE MENSAJE A TODOS
            //io.emit('update', messages);
      
            //PARA ENVIARLE MENSAJE A TODOS MENOS AL QUE LO MANDO
            // socket.broadcast.emit('mensajes', messages);
        });

        socket.on('Productos', () => {
            console.log('Envie los productos');
            if (productos.length > 0) {
              socket.emit('update', productos);
            }
        });

        socket.on('newMensaje', (data) => {
            console.log('Guarda Mensajes');
            guardarNewMessage(data);
            let message = [msn[msn.length - 1]];
            io.emit('updateChat', message);
        });

        socket.on('Mensajes', () => {
            console.log('Envie Mensajes');
            if (msn.length > 0) {
              socket.emit('updateChat', msn);
            }
        });
    
    });

    return io;
};    









