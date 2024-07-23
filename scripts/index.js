// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;
const contentMain = document.querySelector('.content')
const cardContainer = contentMain.querySelector('.places__list')
const cardElement = cardTemplate.querySelector('.card');

let placesName = ['Анапа', 'Сызрань', 'Волга', 'Пехорка', 'Екатеринбург'];

// @todo: Функция создания карточки

placesName.forEach(function (item) {
    let index = placesName.indexOf(item);
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const resetButton = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__image').src = `./images/place${index+1}.jpg`;
    cardElement.querySelector('.card__description').textContent = item;

    resetButton.addEventListener('click', removeCard);
    cardContainer.append(cardElement);
}
)

// @todo: DOM узлы
// @todo: Функция удаления карточки

function removeCard() {
    let card = this.closest('.card');
    card.remove();
}

// @todo: Вывести карточки на страницу


