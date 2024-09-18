const cartPhone = document.querySelectorAll('.btn-buy1');
const cartSmart = document.querySelectorAll('.btn-buy2');
const cartAir = document.querySelectorAll('.btn-buy3');

const modalCartPhone = document.querySelector('.cart-phone');
const modalCartSmart = document.querySelector('.cart-smartwatch');
const modalCartAir = document.querySelector('.cart-airpod');

function openModal(modal) {
    modal.style.display = 'flex'
}

function closeModal(modal) {
    modal.style.display = 'none'
}

cartPhone.forEach(element => {
    element.addEventListener('click', () => {
        openModal(modalCartPhone);
    });
});

cartSmart.forEach(element => {
    element.addEventListener('click', () => {
        openModal(modalCartSmart);
    });
});

cartAir.forEach(element => {
    element.addEventListener('click', () => {
        openModal(modalCartAir);
    });
});

document.addEventListener('click', (event) => {
    if (event.target === modalCartPhone) {
        closeModal(modalCartPhone)
    }
    if (event.target === modalCartSmart) {
        closeModal(modalCartSmart)
    }
    if (event.target === modalCartAir) {
        closeModal(modalCartAir)
    }
})