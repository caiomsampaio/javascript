function enviar() {
    var msg = window.document.getElementById('res')

    var idade = window.document.querySelector('input#ano')
    var m1= window.document.querySelector('input#masc')
    var f1= window.document.querySelector('input#fem')

    var idadef = Number(idade.value)
    var s = 2022 - idadef

    res.innerHTML =`Detectamos um homem ou uma mulher de <strong>${s}</strong> anos`

    if(s < 18 && m1) {
        res.innerHTML = `Detectamos um homem de ${s} anos`
        img.src= "menino.png"
    } else if (s >=18 && m1) {
        res.innerHTML = `Detectamos um homem de ${s} anos`
        img.src= "hjovem.png"
    } else if (s >=60 && m1) {
        res.innerHTML = `Detectamos um homem de ${s} anos`
        img.src= "idoso.png"
    } else if (s < 18 && f1) {
        res.innerHTML = `Detectamos uma mulher de ${s} anos`
        img.src= "menina.png"
    } else if (s >= 18 && f1) {
        res.innerHTML = `Detectamos uma mulher de ${s} anos`
        img.src= "mjovem.png"
    } else if (s >=60 && f1) {
        res.innerHTML = `Detectamos uma mulher de ${s} anos`
        img.src= "idosa.png"
    } else {
        res.innerHTML = `[ERRO]`
    }

}