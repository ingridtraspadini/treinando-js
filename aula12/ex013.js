var agora = new Date()
var diaSem = agora.getDay()

/* 
domingo
segunda
terça
quarta
quinta
sexta
sabado
*/
console.log(diaSem)
switch (diaSem) {
    case 0:
        consolose.log('domingo')
        break
    case 1:
        console.log('segunda')
        break

    case 2:
        consolose.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
            consolose.log('quinta')
            break
    case 5:
            console.log('sexta')
            break
    case 6:
            console.log('sabado')
            break
    default:
        console.log('[erro] comando invalido')
}















