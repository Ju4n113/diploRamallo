function saludo() {
    alert('Hola hola caserola')
}

let btn = document.getElementById('btn')
console.dir(btn);

btn.className = 'botonPrimario'

// btn.onclick = () => alert('sjdhashjdk')
// No permite agregar mas eventos

btn.addEventListener('click', () => {
    alert('jjjjjjjjjjj')
})

btn.addEventListener('click', () => {
    document.body.style.background = 'red'
})