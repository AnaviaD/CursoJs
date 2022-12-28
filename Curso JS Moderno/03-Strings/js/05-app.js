const productoo3 = 'Monitor 20 Pulgadas';

//reemplazar con .replace
console.log(productoo3);
console.log(productoo3.replace('Pulgadas', '"'));
console.log(productoo3.replace('Monitor', 'Monitor Curvo '));


//cortar cadenas .slice
console.log(productoo3.slice(0,10));
console.log(productoo3.slice(8));
console.log(productoo3.slice(2,1));

//Alternativa a slice
//La diferencia de substring a slice es que si le pasas un numero mayor al inicio es:
//slice no hace nada pero substring lo modifica
console.log(productoo3.substring(0,10));
console.log(productoo3.substring(2, 1));


const usuario = "Juan";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));