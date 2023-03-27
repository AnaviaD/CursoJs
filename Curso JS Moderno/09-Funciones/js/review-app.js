
function funcionDeTodaLaVida(){
    console.log('function nombreDeLaFuncion')
}

const nombreDeFuncion = function(){
    console.log('const nombreDeFuncion = function(){}')
}

function conValoresDefault(nomre = 'nombre DEFAULT', apellido = 'apellido DEFAULT'){
    console.log(`Hola ${nomre} ${apellido}`)
}

function retornaValor(a, b){
    return a + b;
}

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function(){
        console.log(`pausando...`)
    }
}
reproductor.borrar = function(id){
    console.log(`Borrando cancion... ${id}`)
}

const arrowFunction = () => {
    console.log('primera manera de arrow Function \n const nombreFuncion = () =>{}')
}

const aprendiendo001 = (tecnologia) => {
    console.log(`Aprendiendo arrowFunction con parametro ${tecnologia}`)
}

const reproductor00112 = {
    reproducir: id => console.log(`Reproduciendo cancion... con el ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando cancion ${id}`),
    crearPlayList: nombre => console.log(`Creando la playlist ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}





funcionDeTodaLaVida()
nombreDeFuncion()
conValoresDefault('Juan')
console.log(retornaValor(2, 6))

reproductor.reproducir(2)
reproductor.pausar()
reproductor.borrar(4)

arrowFunction()

aprendiendo001('JavaScript')

reproductor00112.nuevaCancion = 'Enter Sandman'

reproductor00112.reproducir(30)
reproductor00112.reproducir(20)
reproductor00112.pausar();
reproductor00112.borrar(30)
reproductor00112.borrar()
reproductor00112.crearPlayList('Metal')
reproductor00112.reproducirPlayList('Metal')
