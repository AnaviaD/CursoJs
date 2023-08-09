const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
    
        console.log('Intentando conectar')
        
        await mongoose.connect( process.env.MONGODB_CNN, {
            //  https://stackoverflow.com/questions/68958221/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported
            //  Se supone que toda esta configuracion ya esta dada por defecto
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true,
            //     useCreateIndex: true,
            //     useFindAndModify: false
        })

        console.log('Base de datos online')

    } catch (error) {
        
        console.log(error)
        throw new Error('Error en la base de datos');
    
    }
}

module.exports = {
    dbConnection: dbConnection
}