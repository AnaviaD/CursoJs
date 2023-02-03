window.addEventListener('scroll', ()=>{
    // const scrollPX = window.scrollY;
    // console.log(scrollPX)

    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect();

    // console.log(ubicacion);

    if (ubicacion.top < 100) {
        console.log('Elemento visible')
    }
})