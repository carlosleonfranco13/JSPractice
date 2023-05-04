// EVENT DOM INPUTS

const inputNombre = document.querySelector('.nombre')

inputNombre.addEventListener('input', function(e) {
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword(e) {
    inputPassword.type = 'text'

    setTimeout( () => {
        inputPassword.type = 'password'
    }, 1000)
}