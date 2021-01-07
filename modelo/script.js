function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    if (hora >= 05 && hora < 13) {
         msg.innerHTML = "Agora são " + hora + " horas," + " Bom dia!"
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#CF9D6A'
    } else if (hora >= 13 && hora <18) {
        msg.innerHTML = "Agora são " + hora + " horas," + " Boa Tarde!"
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#BA4E06'
    } else {
        msg.innerHTML = "Agora são " + hora + " horas," + " Bom Noite!"
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#032C64'
    }

}
