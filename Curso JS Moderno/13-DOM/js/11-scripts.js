const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('footer')

btnFlotante.addEventListener('click', mostrarOcultarFooter)


// puede ser btnFlotante o this 
function mostrarOcultarFooter(){
    if(footer.classList.contains('activo'))
    {
        footer.classList.remove('activo')
        btnFlotante.classList.remove('Activo')
    }else{
        footer.classList.add('activo')
        btnFlotante.classList.add('Activo')
    }
    console.log(footer.classList)
}