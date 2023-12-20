import express from 'express'
import RouterProductos from './router/productos.js'  //en nodejs siempre hay q poner el .js cuando importamos un script
import config from './config.js'
import CnxMongoDB from './model/DBmongo.js'

const app = express()
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// ------------------- rutas / endpoints API RESTful --------------
app.use('/api/productos', new RouterProductos().start())


// -------------------- LISTEN DEL SERVIDOR -----------------
if (config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor apiRestful ECommerce escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error del servidor:${error.message}`))