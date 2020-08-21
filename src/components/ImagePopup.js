import React from 'react';

function ImagePopup(props) {
    return (
        <section className={`popup popup_zoom ${props.isOpen && "popup_opened"}`}>
            <figure className="popup__zoom-container">
                <button className="button__close button__close_zoom" type="button" onClick={props.onClose}></button>
                <img className="popup__zoom-image" src={props.card.link} alt={`${props.card.name}`} />
                <h3 className="popup__zoom-title">{props.card.name}</h3>
            </figure>
        </section>
    );
}

export default ImagePopup;
