const autenticado = true;

if(autenticado){
    console.log(`El usuario no esta autenticado`)
}
const puntaje = 450;

function revisaPuntaje(){
    if(puntaje > 400){
        console.log('Excelente!!');
        return;
    }

    if(puntaje > 300){
        console.log(`Buen puntaje... Felicidades`);
        return;
    }
}

revisaPuntaje();