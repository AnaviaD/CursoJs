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

reproductor00112.nuevaCancion = 'Enter Sandman'

reproductor00112.reproducir(30)
reproductor00112.reproducir(20)
reproductor00112.pausar();
reproductor00112.borrar(30)
reproductor00112.borrar()
reproductor00112.crearPlayList('Metal')
reproductor00112.reproducirPlayList('Metal')