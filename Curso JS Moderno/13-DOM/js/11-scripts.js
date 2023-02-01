const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('footer')

btnFlotante.addEventListener('click', mostrarOcultarFooter)


// puede ser btnFlotante o this 
function mostrarOcultarFooter(){
    if(footer.classList.contains('activo'))
    {
        footer.classList.remove('activo')
        btnFlotante.classList.remove('Activo')
        this.textContent = 'Idioma y moneda'
    }else{
        footer.classList.add('activo')
        btnFlotante.classList.add('Activo')
        this.textContent = 'X Cerrar'
    }
    console.log(footer.classList)
}