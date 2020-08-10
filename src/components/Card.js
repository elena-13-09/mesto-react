import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="element">
            <img className="element__image" src={props.card.link} alt={`${props.card.name}`} onClick={handleClick} />
            <div className="element__cell">
                <h3 className="element__title">{props.card.name}</h3>
                <div className="element__like-cell">
                    <button className="element__like" type="button"></button>
                    <p className="element__like-number">{props.card.likes.length}</p>
                </div>
            </div>
            <button className="element__trash" type="button"></button>
        </div>
    );
}

export default Card;