$(document).ready(function(){

    var canvas = document.getElementById("Cam")

    var ctx = canvas.getContext("2d");
    
    var matrix = []

    // dibujar fondo
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    var canvasx = Math.abs(canvas.width/10).toFixed(0)
    var canvasy = Math.abs(canvas.height/10).toFixed(0)


    // console.log(window.innerWidth + " " + window.innerHeight)

    function randomMatriz(){
        for(var i=0; i<canvasx; i++){
            
            matrix[i] = [];

            for(var j=0; j<canvasy; j++){
                matrix[i][j] = Math.floor(Math.random() * 2)
            }
        }
    }

    function renderMatriz(){
        for (let i = 0; i < canvasx; i++) {
            for (let j = 0; j < canvasy; j++) {

                // console.log(i, " ", j)

                if (matrix[i][j] == 0) {

                    ctx.fillStyle = "black"
                    ctx.fillRect(i*10, j*10, 10, 10)

                }else{
                    ctx.fillStyle = "white"
                    ctx.fillRect(i*10, j*10, 10, 10)
                }
            }            
        }
    }

    function dibujarGrid(){
        //Lineas verticales
        for (let i = 0; i < canvas.width; i += 10) {
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, canvas.height)
            ctx.strokeStyle = "white"
            ctx.lineWidth = 0.1

            ctx.stroke()
            
        }

        //Lineas horizontales
        for (let j = 0; j < canvas.height; j += 10) {
            ctx.beginPath()
            ctx.moveTo(0, j)
            ctx.lineTo(canvas.width, j)
            ctx.strokeStyle = "white"
            ctx.lineWidth = 0.1

            ctx.stroke()
            
        }
    }

    function clearMatrix() {
        for(var i=0; i<canvasx; i++){

            matrix[i] = []

            for(var j=0; j<canvasy; j++){
                matrix[i][j] = 0
            }
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

    function renderJugador(){

        //izquierda     3
        //derecha       1
        //arriba        0
        //abajo         2

        // Movimiento a derecha
        if(jugador.dir == 1) {
            if(jugador.dirAnt == 3) {
                jugador.dir = 3;
            }else{
                jugador.x++
            }
        }

        // Movimiento a izq
        if(jugador.dir == 3) {
            if(jugador.dirAnt == 1) {
                jugador.dir = 1;
            }else{
                jugador.x--
            }
        }

        // Movimiento arriba
        if(jugador.dir == 0) {
            if(jugador.dirAnt == 2) {
                jugador.dir = 2;
            }else{
                jugador.y++
            }
        }

        //Movimiento abajo
        if(jugador.dir == 2) {
            if(jugador.dirAnt == 0) {
                jugador.dir = 0;
            }else{
                jugador.y--
            }
        }

        jugador.dirAnt = jugador.dir;

        if(jugador.x > canvasx-1) {
            jugador.x = 0
        }else if(jugador.x < 0){
            jugador.x = canvasx - 1;
        }else if(jugador.y > canvasy-1) {
            jugador.y = 0
        }else if(jugador.y < 0){
            jugador.y = canvasy - 1
        }

        matrix[jugador.x][jugador.y] = 1

    }


    var game = {
        level       : 1
    }

    var jugador = {
        x           : 0,
        y           : 0,
        dir         : 0,
        dirAnt      : 0,
        temporal    : 1,
        puntos      : 0,
        val         : 20,
        tiempo      : 0,
        matrizCola  : [],
        xAnt        : 0,
        yAnt        : 0
    }

    var puntoComida = {
        x       : 0,
        y       : 0,
        comida  : 1,
    }


    // randomMatriz()

    clearMatrix()
    
    setInterval(() => {
        //Pone la matriz en 0
        clearMatrix()

        renderJugador()

        // Agrega valor de comida aleatorio
        crearComida()
        // Agrega 1 a esa posicion
        renderComida()

        // renderiza la capa matriz
        renderMatriz()
        

        // renderiza el Grid
        dibujarGrid()  
        
        
    }, 1000);

    document.addEventListener("keydown", function(e){
        if(e.keyCode == 37){            //izquierda
            jugador.dir = 3
        }else if(e.keyCode == 40){      //arriba
            jugador.dir = 0
        }else if(e.keyCode == 39){      //derecha
            jugador.dir = 1
        }else if(e.keyCode == 38){      //abajo
            jugador.dir = 2
        }

    })


})