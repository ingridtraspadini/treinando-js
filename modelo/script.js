function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    msg.innertHTML = `agora são ${hora} horas.`
    if (hora >= 05 && hora < 13) {
         ('BOM DIA!')
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#CF9D6A'
    } else if (hora >= 13 && hora <18) {
            ('BOA TARDE!')
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#BA4E06'
    } else {
        ('BOA NOITE!')
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#032C64'
    }

}