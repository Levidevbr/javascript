function clicar() {
    var fano = window.document.getElementById('div-ano');
    var fsx = window.document.querySelectorAll('[name="opcoes"]');
    var img = window.document.getElementById('div-img');
    var data = new Date();
    var ano = data.getFullYear();
    var idade = ano - parseInt(fano.value);
    var foto = document.createElement('img');
    foto.setAttribute('id', 'Foto');

    if (fano.value.length == 0 || parseInt(fano.value) < 1899 || parseInt(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!');
    } else {
        var sx = '';
        if (fsx[0].checked) {
            sx = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                foto.setAttribute('src', 'crianca-m.jpg');
                foto.style.borderRadius = '50%';
                foto.style.width = '250px';
                foto.style.height = '250px';
            } else if (idade >= 10 && idade < 21) {
                // Adolescente
                foto.setAttribute('src', 'adolescente-m.jpg');
                foto.style.borderRadius = '50%';
                foto.style.width = '250px';
                foto.style.height = '250px';
            } else if (idade < 50) {
                // Adulto
                foto.setAttribute('src', 'adulto-m.jpg');
                foto.style.borderRadius = '50%';
                foto.style.width = '250px';
                foto.style.height = '250px';
            } else {
                // Idoso
                foto.setAttribute('src', 'idoso-m.jpg');
                foto.style.borderRadius = '50%';
                foto.style.width = '250px';
                foto.style.height = '250px';
            }
        } else if (fsx[1].checked) {
            sx = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                foto.setAttribute('src', 'crianca-f.jpg');
                foto.style.borderRadius = '50%';
                foto.style.width = '250px';
                foto.style.height = '250px';
            } else if (idade >= 10 && idade < 21) {
                // Adolescente
                foto.setAttribute('src', 'adolescente-f.jpg');
                foto.style.borderRadius = '50%';
                foto.style.width = '250px';
                foto.style.height = '250px';
            } else if (idade < 50) {
                // Adulto
                foto.setAttribute('src', 'adulto-f.jpg');
                foto.style.borderRadius = '50%';
                foto.style.width = '250px';
                foto.style.height = '250px';
            } else {
                // Idoso
                foto.setAttribute('src', 'idoso-f.jpg');
                foto.style.borderRadius = '50%';
                foto.style.width = '250px';
                foto.style.height = '250px';
            }
        }

        var texto = document.createElement('p');
        texto.textContent = `Percebemos que você é ${sx} com uma idade de ${idade} anos.`;

        img.innerHTML = ''; // Limpa qualquer conteúdo anterior
        img.style.textAlign = 'center';
        img.appendChild(texto);
        img.appendChild(foto);
    }
}
