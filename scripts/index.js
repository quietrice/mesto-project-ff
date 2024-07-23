// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;
const contentMain = document.querySelector('.content')
const cardContainer = contentMain.querySelector('.places__list')
// const cardElement = cardTemplate.querySelector('.card');

const placesName = ['Анапа', 'Сызрань', 'Волга', 'Пехорка', 'Екатеринбург', 'Астана'];

const cardInfo = [
    {
    placeName: '', link: '', alt: '' 
    },
    {
    placeName: '', link: '', alt: '' 
    }, 
    {
    placeName: '', link: '', alt: '' 
    },
    {
    placeName: '', link: '', alt: '' 
    },
    {
    placeName: '', link: '', alt: '' 
    },
    {
    placeName: '', link: '', alt: '' 
    },

]



// массив объектов наполняется данными карточек
cardInfo.forEach((card, index) =>{
    card.placeName = placesName[index];
    card.link = `./images/place${index+1}.jpg`;
    card.alt = `Красоты замечательного места ${placesName[index]}`;
})

// @todo: Функция создания карточки
function createCard(item) {
    // тут создаете карточку и возвращаете ее

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__image').alt = item.alt;
    cardElement.querySelector('.card__description').textContent = item.placeName;
    
    const resetButton = cardElement.querySelector('.card__delete-button');

    resetButton.addEventListener('click', removeCard);
    console.log('функция создания карточек использована');
    return cardElement
}

cardInfo.forEach(function (item) {
    let index = placesName.indexOf(item);

    const newCard = createCard(item);
    cardContainer.append(newCard);
    console.log('карточка добавлена');
}
)
// @todo: DOM узлы
// @todo: Функция удаления карточки

function removeCard() {
    let card = this.closest('.card');
    card.remove();
    console.log('удаление')
}

// @todo: Вывести карточки на страницу


