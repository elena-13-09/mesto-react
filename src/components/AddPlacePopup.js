import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: name,
      link: link,
    })
  }

  return (
    <PopupWithForm
      title='Новое место'
      name='image'
      button='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}>
      <fieldset
        className="form__field">
        <input
          className="form__input form__input_name-image"
          onChange={handleName}
          type="text"
          name="name"
          id="image-input"
          placeholder="Название"
          minLength="1"
          maxLength="30"
          pattern="^[A-Za-zА-ЯЁа-яё\s-]+$"
          required
        />
        <span
          className="form__input-error"
          id="image-input-error">
        </span>
        <input
          className="form__input form__input_link-image"
          onChange={handleLink}
          type="url"
          name="link"
          id="link-input"
          placeholder="Ссылка на картинку"
          required
        />
        <span
          className="form__input-error"
          id="link-input-error">
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
