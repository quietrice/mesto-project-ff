// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;
const contentMain = document.querySelector('.content');
const cardContainer = contentMain.querySelector('.places__list');

// popup
// const popup = document.querySelectorAll('.popup');

// редактирование карточек
const addCardButton = contentMain.querySelector('.profile__add-button');
const windowFormAddCard = document.querySelector('.popup_type_new-card');

// Массив кнопок закрытия
const popupCloseButton = document.querySelectorAll('.popup__close');

// редактирование профиля
const editProfileButton = contentMain.querySelector('.profile__edit-button'); 
const windowEditProfile = document.querySelector('.popup_type_edit')

// редактирование картинок
const cardForm = 0;


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

function popupOpenWithButton(element) {
    element.classList.add("popup_is-opened");
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

// функция убирает видимость
// function addCloseButton(elementParent, windowContent) {
//     const popup = document.querySelectorAll('.popup');
    
//     console.log('window внизу');
//     console.log(windowContent)
//     console.log('функция начата');
//     console.log('Popup')
//     console.log(popup);
//     console.log('elementParent Внизу')
//     console.log(elementParent);
    
//     elementParent.addEventListener('click', (event) => {
//         console.log('условие на наличие');
//         event.stopPropagation();
//         // console.log(event.target in windowContent)

        
//         elementParent.classList.remove("popup_is-opened");
        

//     })

// }



const popupList = document.querySelectorAll('.popup');
console.log('лох пидор');

// function closeFormHandler(event) {
//     // stopPropogation()
//     if (((event.target.classList.contains('popup__content')===false)) && ((event.target.classList.contains('popup__input')===false))) {
//         console.log('условие выполнено  ')
//         element.classList.remove("popup_is-opened");
//     }
// }

function addCloseSpace(element) {
    console.log('функция есть')
    element.addEventListener('click', (event) => {
        if (((event.target.classList.contains('popup__content')===false)) && ((event.target.classList.contains('popup__input')===false))) {
            console.log('условие выполнено  ')
            element.classList.remove("popup_is-opened");
        }
    });
    element.addEventListener('keydown' , (event) => {
        console.log(event);
        console.log(event.key)
        if (((event.key === "Escape")) || ((event.key === "Control"))) {
            
            element.classList.remove("popup_is-opened");
        }
    });
    
}

console.log(popupList)
popupList.forEach((element) => {
    console.log('Перебор попап')
    addCloseSpace(element);
})


// popupCloseButton.forEach((element) => {
//     // нашел родителя
//     const elementParent = element.parentElement.parentElement
//     const windowContent = elementParent.querySelector('.popup__content');
//     addCloseButton(elementParent, windowContent)
// })

windowFormAddCard.addEventListener('click', (evt) => {
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


