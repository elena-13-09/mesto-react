import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isZoomPopupOpen, setIsZoomPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(true);
    setIsZoomPopupOpen(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title='Редактировать профиль'
        name='profile'
        button='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="form__field">
          <input className="form__input form__input_name" type="text" name="name" id="name-input"
            placeholder="Имя" minLength="2" maxLength="40" pattern="^[A-Za-zА-ЯЁа-яё\s-]+$" required
          />
          <span className="form__input-error" id="name-input-error"></span>
          <input className="form__input form__input_profession" type="text" name="profession" id="profession-input"
            placeholder="О себе" minLength="2" maxLength="200" required
          />
          <span className="form__input-error" id="profession-input-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title='Новое место'
        name='image'
        button='Сохранить'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="form__field">
          <input className="form__input form__input_name-image" type="text" name="name" id="image-input"
            placeholder="Название" minLength="1" maxLength="30" pattern="^[A-Za-zА-ЯЁа-яё\s-]+$" required
          />
          <span className="form__input-error" id="image-input-error"></span>
          <input className="form__input form__input_link-image" type="url" name="link" id="link-input"
            placeholder="Ссылка на картинку" required
          />
          <span className="form__input-error" id="link-input-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title='Обновить аватар'
        name='avatar'
        button='Создать'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="form__field">
          <input className="form__input form__input_link-avatar" type="url" name="link" id="link-input"
            placeholder="Ссылка на картинку" required
          />
          <span className="form__input-error" id="link-input-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title='Вы уверены?'
        name='confirm'
        button='Да'
        onClose={closeAllPopups}
      />

      <ImagePopup
        isOpen={selectedCard}
        card={isZoomPopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
