const cellModal = document.querySelector('.modal-phones')
const smartModal = document.querySelector('.modal-smartWatch')
const airModal = document.querySelector('.modal-airPods')

const cellInform = document.querySelectorAll('.cellphone1')
const smartInform = document.querySelectorAll('.smartWatch2')
const airInform = document.querySelectorAll('.airPods3')

function openModal(modal) {
    modal.style.display = 'block'
}

function closeModal(modal) {
    modal.style.display = 'none'
}

cellInform.forEach(element => {
    element.addEventListener('click', () => {
        openModal(cellModal)
    })
})

smartInform.forEach(element => {
    element.addEventListener('click', () => {
        openModal(smartModal)
    })
})

airInform.forEach(element => {
    element.addEventListener('click', () => {
        openModal(airModal)
    })
})

document.addEventListener('click', (event) => {
    if (event.target === cellModal) {
        closeModal(cellModal)
    }
    if (event.target === smartModal) {
        closeModal(smartModal)
    }
    if (event.target === airModal) {
        closeModal(airModal)
    }
})