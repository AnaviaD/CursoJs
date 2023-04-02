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

    function clearMatrix() {
        for(var i=0; i<canvasx; i++){

            matrix[i] = []

            for(var j=0; j<canvasy; j++){
                matrix[i][j] = 0
            }
        }
    } 


    setInterval(() => {
        // randomMatriz()

        // renderMatriz()

    }, 500);


})