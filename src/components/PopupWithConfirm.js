import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupWithConfirm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }
  return (
    <PopupWithForm
      title='Вы уверены?'
      name='confirm'
      button='Да'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default PopupWithConfirm;
