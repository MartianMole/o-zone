
'use strict';

//checkbox

const checkbox = document.querySelectorAll('.filter-check_checkbox'); 

checkbox.forEach(function(elem) {
        elem.addEventListener('change', function() {
        if(this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

//end checkbox



//bucket

const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');

btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    modalCart.style.display = '';
    document.body.style.overflow = '';
});

//end bucket



//stuff in bucket

const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmpty = document.getElementById('cart-empty');
const countGoods = document.querySelector('.counter');

/*



    !!!!!!ВНИМАНИЕ!!!!!!

    ЭТОТ КОММЕНТАРИЙ И ВСЕ ЧТО НИЖЕ - МОЯ САМОДЕЯТЕЛЬНОСТЬ

    Это моя реализация общей суммы товаров в корзине
    Надеюсь, не слишком криво



*/


//const cartTotal = document.querySelector('.cart-total span');

cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });

});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
    //let res = 0;
    //cardsCart.forEach((card) => {
        //const price = card.querySelector('.card-price');
        //res += Number(price.textContent.slice(0, 5))
    //});
    //cartTotal.textContent = res;
}

//end stuff in bucket