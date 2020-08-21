import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='profile'
      button='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
    >
      <fieldset
        className="form__field">
        <input
          onChange={handleName}
          value={name}
          className="form__input form__input_name"
          type="text"
          name="name"
          id="name-input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          pattern="^[A-Za-zА-ЯЁа-яё\s-]+$"
          required
        />
        <span
          className="form__input-error"
          id="name-input-error">
        </span>
        <input
          onChange={handleDescription}
          value={description}
          className="form__input form__input_profession"
          type="text"
          name="about"
          id="profession-input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          className="form__input-error"
          id="profession-input-error">
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
