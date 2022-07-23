function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade <= 18) {
                // Jovem
                img.setAttribute('src', 'hjovem.png')
            } else if (idade <= 60) {
                // Adulto
                img.setAttribute('src', 'idoso.png')
            } else {
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                // Criança
            } else if (idade <21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                //idoso
            }
        }
        res.getElementsByClassName.textAllign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
     }
}