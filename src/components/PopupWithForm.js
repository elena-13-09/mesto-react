import React from 'react';

function PopupWithForm(props) {
  return (
    <section className={`popup popup_${props.name} ${props.isOpen && "popup_opened"}`}>
      <form className={`form__container form__container_${props.name}`} name={props.name} noValidate>
        <button className="button__close" type="button" onClick={props.onClose}></button>
        <h3 className="form__title">{props.title}</h3>
        {props.children}
        <button className={`button__submit button__submit_${props.name}`} type="submit">{props.button}</button>
      </form>
    </section>
  );
}

export default PopupWithForm;
