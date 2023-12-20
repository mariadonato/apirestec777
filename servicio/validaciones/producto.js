import Joi from 'joi'

const validar = producto => {
    const productosSchema = Joi.object({
        nombre: Joi.string().min(2).max(20).required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
        marca: Joi.string().required(),
        categoria: Joi.string().required(),
        detalles: Joi.string().required(),
        foto: Joi.string().required(),
        envio: Joi.required()
    })

    const { error } = productosSchema.validate(producto)
    return error
}

export default validar