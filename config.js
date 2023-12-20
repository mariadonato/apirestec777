//console.log(process.env)

const MODO_PERSISTENCIA = 'MONGODB'      //'MEM' - 'FILE' - 'MONGODB'
const PORT = process.env.PORT || 8080
//const STRCNX = 'mongodb://127.0.0.1'
const STRCNX = 'mongodb+srv://cielo:cielo2010@cluster0.fo3olik.mongodb.net/?retryWrites=true&w=majority'
const BASE = 'ecommerce'

export default {
    MODO_PERSISTENCIA,            // MODO_PERSISTENCIA : MODO_PERSISTENCIA
    PORT,
    STRCNX,
    BASE
}