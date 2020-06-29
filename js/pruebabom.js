function saludar(){
    alert("Hola mundo");    
}

// window.setTimeout(saludar, 4000);
//le da un intervalo de tiempo
let tiempo = window.setInterval(contar, 1000);

let contador = 1;

function contar (){
    document.write(contador + "<br>")    
    if(contador==10){
        window.clearInterval(tiempo)//limpia el intervalo de tiempo del objeto window
    }
    contador ++;
}