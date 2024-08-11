// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;
const contentMain = document.querySelector('.content');
const cardContainer = contentMain.querySelector('.places__list');

// редактирование карточек
const addCardButton = contentMain.querySelector('.profile__add-button');
const windowFormAddCard = document.querySelector('.popup_type_new-card');

// лучше отедльно каждой
// const popupCloseButton = windowFormAddCard.querySelector('.popup__close');

// редактирование профиля
const editProfileButton = contentMain.querySelector('.profile__edit-button'); 
const windowEditProfile = document.querySelector('.popup_type_edit')


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
// функции с поп апами
// открытие поп апа, добавив класс открытия
// Добавляет закрытие по овелею
function popupOpenWithButton(element) {
    element.classList.add("popup_is-opened");

    // element.addEventListener('click', function(evt) {
    //     console.log(evt.target);
    //     evt.target.classList.remove("popup_is-opened");
    // })
}

// закрытие поп апа, убрав класс открытия
function popupCloseWithButton(element) {
    console.log('функция удаления')
    element.classList.remove("popup_is-opened")
    
}





// закрытие поп апа, нажав на серую зону
// function popupCloseWithOverlay(element) {
//     element
// }

// открытие формы для добавления карточки

addCardButton.addEventListener('click', function(evt) {
    // console.log(evt);
    // console.log(contentMain)
    // windowFormAddCard.style.display = "flex"
    popupOpenWithButton(windowFormAddCard);
})

// popupCloseButton.addEventListener('click', function() {
//     popupCloseWithButton(windowFormAddCard)
// })

// popupCloseButton.addEventListener('click', function() {
//     popupCloseWithButton(windowFormAddCard)
// })


// windowFormAddCard.addEventListener('click', function(evt) {

// })


// редактирование профиля
editProfileButton.addEventListener('click', function() {
    popupOpenWithButton(windowEditProfile);
})

// popupCloseButton.addEventListener('click', function() {
//     popupCloseWithButton(windowFormAddCard)
// })

// songsContainer.addEventListener('click', function (evt) {
//     // evt.target.classList.toggle('song__like_active');
//     if (evt.target.classList.contains('song__like')) {
//       evt.target.classList.toggle('song__like_active');
//     }
//   });


windowFormAddCard.addEventListener('click', function(evt) {
    console.log(evt)
    if (evt.target.classList.contains('.popup')) {
        popupCloseWithButton(windowFormAddCard);
        
        console.log(windowFormAddCard);
        console.log('ты черт')
        // console.log();
        // console.log();
        console.log(querySelector('.popup_type_new-card'))
    }
})




// массив объектов наполняется данными карточек
cardInfo.forEach((card, index) =>{
    card.placeName = placesName[index];
    card.link = `./images/place${index+1}.jpg`;
    card.alt = `Красоты замечательного места ${placesName[index]}`;
})

// @todo: Функция создания карточки
function createCard(item, removeCard) {
    // тут создаете карточку и возвращаете ее

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__image').alt = item.alt;
    cardElement.querySelector('.card__description').textContent = item.placeName;
    
    const resetButton = cardElement.querySelector('.card__delete-button');

    resetButton.addEventListener('click', removeCard);
    return cardElement
}

cardInfo.forEach(function (item) {
    let index = placesName.indexOf(item);

    const newCard = createCard(item, removeCard);
    cardContainer.append(newCard);
}
)
// @todo: DOM узлы
// @todo: Функция удаления карточки

function removeCard() {
    let card = this.closest('.card');
    card.remove();
}

// @todo: Вывести карточки на страницу


