const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', ()=>{
//     console.log('escribiendo...');
// })

// busqueda.addEventListener('paste', ()=>{
//     console.log('copiando...');
// })

// busqueda.addEventListener('cut', ()=>{
//     console.log('cortar...');
// })


// busqueda.addEventListener('input', ()=>{
//     console.log('input...');
// })

busqueda.addEventListener('keydown', (e)=>{
    // console logeando evento
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    console.log('escribiendo...');
})