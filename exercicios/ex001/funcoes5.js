// RECURSIVIDADE - quando uma função chama (chamada) ela mesma
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

// n! = n * (n-1)!