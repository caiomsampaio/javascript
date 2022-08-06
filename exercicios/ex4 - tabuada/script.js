function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for (let c = 1; c <=10; c+1 ) {
           // while ( c <= 10 ) {
            let item = document.createElement('option') //Option criado pelo JS (ver HTML)
            item.text = `${n} x ${c} = ${n*c}` // "A parte interior ao option"
            item.value = `tab${c}` // Value do option - da significado a cada linha da tabela.célula 1 = tab${c=1} , célula 2 = tab${c=2} ... (Útil para outras linguagens -PHP e etc)
            tab.appendChild(item)
            c++
        }
    }
}