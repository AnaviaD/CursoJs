const reproductor001 = {
    reproducir: id => console.log(`Reproduciendo cancion... con el ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando cancion ${id}`),
    crearPlayList: nombre => console.log(`Creando la playlist ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo la playlist ${nombre}`)
    
}

reproductor001.reproducir(30)
reproductor001.reproducir(20)
reproductor001.pausar();
reproductor001.borrar(30)
reproductor001.borrar()
reproductor001.crearPlayList('Metal')
reproductor001.reproducirPlayList('Metal')