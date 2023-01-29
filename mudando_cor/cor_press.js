function mudando_cor() {
    document.getElementById('fundo_cor').style.backgroundColor = '#' + Math.floor(
        Math.random() * 16777215).toString(16);
}
function mudar_cor_letra() {
    document.getElementById('cores').style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
}  
function mudar_cor_titulo() {
    document.getElementById('cor_titulo').style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
} 