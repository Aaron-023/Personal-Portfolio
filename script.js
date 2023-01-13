// dark mode toggle

let btn = document.getElementById('btn')

function lightMode() {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    btn.innerHTML = 'Dark Mode'
    btn.removeEventListener('click', lightMode)
    btn.addEventListener('click', darkMode)
}

function darkMode() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    btn.innerHTML = 'Light Mode'
    btn.removeEventListener('click', darkMode)
    btn.addEventListener('click', lightMode)
}

btn.addEventListener('click', lightMode)

