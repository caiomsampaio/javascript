function adicionar() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tabnum')
    var n = Number(num.value)
    if (n == 0 || n > 100 || n < 0) {
        window.alert('Por favor, digite um número entre 1 e 100')
    } else {
        tab.innerHTML= ''

    }
}