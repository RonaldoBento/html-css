/*Script functions */
var quebrada = false
function mudaLampada(tipo) { 
    if (!quebrada) {
        document.getElementById("luz").src = tipo + ".png"
        if (tipo == 'lampada-quebrada') {
            quebrada = true
        }
    }   
}