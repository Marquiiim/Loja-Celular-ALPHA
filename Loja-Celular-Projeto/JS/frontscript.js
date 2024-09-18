const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const container = document.querySelector('.container')
const items = container.querySelectorAll('.list .item')
const list = container.querySelector('.list')
const indicator = document.querySelector('.indicators')
const dots = indicator.querySelectorAll('ul li')

let active = 0
const firstPosition = 0
const lastPosition = items.length - 1

function updateActiveItem() {
    // REMOVE A CLASSE 'ACTIVE' DO ITEM ANTERIOR.

    items.forEach(item => item.classList.remove('active'))
    dots.forEach(dot => dot.classList.remove('active'))

    // ADICIONA CLASSE 'ACTIVE' AO ITEM E PONTO ATUAIS
    
    items[active].classList.add('active')
    dots[active].classList.add('active')
    indicator.querySelector('.numbers').textContent = `0${active + 1}`
}

function moveSlider(direction){
    // DEFINE A DIREÇÃO DO MOVIMENTO.
    
    list.style.setProperty('--calculation', direction)

    // ATUALIZA O ÍNDICE ATIVO

    if (direction === 1) {
        active = (active + 1) > lastPosition ? firstPosition : active + 1

    } else if (direction === -1) {
        active = (active - 1) < firstPosition ? lastPosition : active - 1

    }

    // ATUALIZA O ITEM ATIVO E O INDICADOR
    updateActiveItem()
}

prevButton.addEventListener('click', () => moveSlider(-1))
nextButton.addEventListener('click', () => moveSlider(1))