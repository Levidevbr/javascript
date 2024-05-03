function carregar(){
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('foto').querySelector('.imagem')
    var data = new Date() 
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#A87139'
        //BOA TARDE
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#7F9EB4'
        //BOA TARDE
    }else{
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#594366'
        //BOA NOITE
    }
}
