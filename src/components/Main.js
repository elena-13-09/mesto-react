import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-cell">
                    <img className="profile__avatar" alt="Аватарка" src={currentUser.avatar} />
                    <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
                </div>
                <div className="profile__info">
                    <div className="profile__cell">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
                    </div>
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
            </section>
            <section className="elements">
                {props.cards.map((item) =>
                    <Card
                        key={item._id}
                        card={item}
                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}
                    />
                )}
            </section>
        </main>
    );
}

export default Main;

