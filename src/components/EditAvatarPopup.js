import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

React.useEffect(() => {
    avatarRef.current.value = '';
  }, [currentUser]);

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='avatar'
      button='Создать'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}>
      <fieldset
        className="form__field">
        <input
          className="form__input form__input_link-avatar"

          ref={avatarRef}
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

export default EditAvatarPopup;
