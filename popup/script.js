const btn = document.getElementById('btn');
const close = document.getElementById('close');
const popupModal = document.getElementById('popup_container');

btn.addEventListener('click', () => {
    popupModal.classList.add('show');
})

close.addEventListener('click', () => {
    popupModal.classList.remove('show');
})
