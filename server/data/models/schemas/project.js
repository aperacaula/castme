const { Schema } = require('mongoose')
const Casting = require('./casting')

module.exports = new Schema({
    title: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    paid: {
        type: Boolean,
        required: true
    },
    professional: {
        type: Boolean,
        required: true
    },
    province: {
        type: String,
        required: true,
        enum: ['Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Avila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres',
            'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
            'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra',
            'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
            'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza']

    },
    description: {
        type: String,
        required: true
    },

    situation: {
        type: String,
        enum: ['Open', 'Closed', 'Delayed'],
        required: true
    },

    castings: [Casting]
})