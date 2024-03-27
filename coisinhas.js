function mudarCorTitulo() {
    document.getElementById('titulo').style.color = 'red';
}

function mudarTexto() {
    document.getElementsByName('campoTexto')[0].value = 'Novo texto de teste';
}

function aumentarFonte() {
    var elementos = document.getElementsByClassName('classeTeste');
    for(var i = 0; i < elementos.length; i++) {
        elementos[i].style.fontSize = '20px';
        elementos[i].style.backgroundColor = '#FF0000';
    }
}

function mudarCorFundo() {
    var primeiroDiv = document.querySelector('div');
    primeiroDiv.style.backgroundColor = 'yellow';
}

function adicionarBorda() {
    var todosDivs = document.querySelectorAll('div');
    for(var i = 0; i < todosDivs.length; i++) {
        todosDivs[i].style.border = '1px solid black';
    }
}
