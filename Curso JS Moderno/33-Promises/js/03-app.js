const aplicarDescuento = new Promise((resolve, reject) =>{
    
    const descuento = true

    if (descuento) {
        resolve('Descuento Aplicado')
    }else{
        reject('No se pudo aplicar el descuento')
    }
})