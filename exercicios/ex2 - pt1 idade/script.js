function enviar() {
    var msg = window.document.getElementById('res')

    var idade = window.document.querySelector('input#ano')
    var m1= window.document.querySelector('input#masc')
    var f1= window.document.querySelector('input#fem')

    var idadef = Number(idade.value)
    var s = 2022 - idadef

    res.innerHTML =`Detectamos um homem ou uma mulher de <strong>${s}</strong> anos`


}

//                        if (sexo = masc && idade = ) {

//                         } else {

//                         }

