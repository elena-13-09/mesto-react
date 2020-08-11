import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getInitialCards()
        ])
            .then((values) => {
                const [user, initialCards] = values;
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(initialCards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-cell">
                    <img className="profile__avatar" alt="Аватарка" src={userAvatar} />
                    <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
                </div>
                <div className="profile__info">
                    <div className="profile__cell">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" onClick={onEditProfile} type="button"></button>
                    </div>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
            </section>
            <section className="elements">
                {cards.map((item) => (
                    <Card
                        key={item._id}
                        card={item}
                        onCardClick={onCardClick}
                    />
                ))}
            </section>
        </main>
    );
}

export default Main;
