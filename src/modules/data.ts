import { leerMessages } from './app';

/**
 * DATOS A MANIPULAR
 */

/* Definiendo mis Array */
const productos:any = []; 
const dbIDs:any = []; 
const lastID:any = { lastID: 0 }; 
const msn:any = []; 

/* Validar si existen mensajes guardados */
function checkMessagesOld() {

    let messageOld = JSON.parse(leerMessages());
    if (messageOld !== -1) {
      msn.push.apply(msn, messageOld);
    }
}

/* Inicializamos los mensajes */
checkMessagesOld();
export { productos, dbIDs, lastID, msn };