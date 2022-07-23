function enviar() {
    var msg = window.document.getElementById('res')

    var idade = window.document.querySelector('input#ano')
    var m1= window.document.querySelector('input#masc')
    var f1= window.document.querySelector('input#fem')

    var idadef = Number(idade.value)
    var s = 2022 - idadef

    res.innerHTML =`Detectamos um homem ou uma mulher de <strong>${s}</strong> anos`

    if(s < 18 && homem) {
        res.innerHTML = `Detectamos um homem de ${s} anos`
        img.src= ""
    } else if (s >=18 homem) {
        res.innerHTML = `Detectamos um homem de ${s} anos`
        img.src= ""
    } else if (s >=60 homem) {
        res.innerHTML = `Detectamos um homem de ${s} anos`
        img.src= ""
    } else if (s < 18 && mulher) {
        res.innerHTML = `Detectamos uma mulher de ${s} anos`
        img.src= ""
    } else if (s >= 18 && mulher) {
        res.innerHTML = `Detectamos uma mulher de ${s} anos`
        img.src= ""
    } else if (s >=60 && mulher) {
        res.innerHTML = `Detectamos uma mulher de ${s} anos`
        img.src= ""
    }

}