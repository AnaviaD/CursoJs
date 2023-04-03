$(document).ready(function(){
    // Definir canvas y contexto
    var canvas = document.getElementById("Cam");
    // Obtenemos el canvas contexto 2D del div Cam
    var ctx = canvas.getContext("2d");

    // Le damos las propiedades de la ventana 
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Dibujar fondo
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var canvasx = Math.abs(canvas.width / 10).toFixed(0)
    var canvasy = Math.abs(canvas.height / 10).toFixed(0)

    var matrix = []

    function randomMatriz(){
        for (let i = 0; i < canvasx; i++) {
            matrix[i] = []

            for (let j = 0; j < canvasy; j++) {
                matrix[i][j] = Math.floor(Math.random() * 2)
            }
        }

    }

    function renderMatriz(){
        for (let i = 0; i < canvasx; i++) {

            for (let j = 0; j < canvasy; j++) {

                if (matrix[i][j] == 0) {
                    ctx.fillStyle = "black"
                    ctx.fillRect(i * 10, j * 10, 10, 10)

                }else{
                    ctx.fillStyle = "white"
                    ctx.fillRect(i * 10, j * 10, 10, 10)
                }
                
            }
        }
    }

    function dibujarGrid(){
        for (let i = 0; i < canvas.width; i+= 10) {
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, canvas.height)
            ctx.strokeStyle = "white"
            ctx.lineWidth = 0.1;
            ctx.stroke();
        }

        for (let j = 0; j < canvas.height; j += 10) {
            ctx.beginPath()
            ctx.moveTo(0, j)
            ctx.lineTo(canvas.width, j)
            ctx.strokeStyle = "white"
            ctx.lineWidth = 0.1
            ctx.stroke()
        }
    }

    function crearComida(){

        puntoComida.x = Math.floor(Math.random() * canvasx)
        puntoComida.y = Math.floor(Math.random() * canvasy)
    }

    function renderComida(){
        if (puntoComida.comida == 1) {
            matrix[puntoComida.x][puntoComida.y] = 1
        }
    }

    var game = {
        level:  1
    }

    var jugador = {
        x:          0,
        y:          0,
        dir:        0,
        dirAnt:     0,
        tem:        0,
        puntos:     0,
        val:        0,
        tiempo:     0,
        matrizCola: [],
        xAnt:        0,
        yAnt:        0,
    }

    var puntoComida = {
        x:          0,
        y:          0,
        comida:     1
    }

    function clearMatrix(){
        for (let i = 0; i < canvasx; i++) {
            matrix[i] = []
            
            for (let j = 0; j < canvasy; j++) {
                matrix[i][j] = 0
            }
        }
    }

    randomMatriz()
    crearComida()
    clearMatrix()
    
    setInterval(() => {
        
        renderMatriz()
        
        dibujarGrid()
        
        renderComida()


    }, 500);

    document.addEventListener('keydown', function(e){
        console.log(e.keyCode)
        if (e.keyCode == 37) {
            //Izquierda
            jugador.dir = 3;
        }else if (e.keyCode == 39) {
            //Derecha
            jugador.dir = 1;
        }else if (e.keyCode == 38) {
            //Arriba
            jugador.dir = 0;
        }else if (e.keyCode == 40) {
            //Abajo
            jugador.dir = 2;
        }
    })

})