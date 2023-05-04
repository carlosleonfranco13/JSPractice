// EVENTOS DEL DOM

// CLICKS
const heading = document.querySelector('.heading')
heading.addEventListener('click', () => {
    heading.textContent = 'Diste click en el Heading'
})

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(link => {
    link.addEventListener('click', () => {
        link.textContent  = 'Diste click en uno de los enlaces' 
    })
})