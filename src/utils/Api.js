class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    //получить ответ
    _response(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`error${res.status}`);
    }

    //получить массив карточек с сервера
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'GET',
            headers: this.headers,
        })
            .then(this._response)
    }

    //получить данные пользователя
    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers,
        })
            .then(this._response)
    }

    //обновить данные пользователя
    editUserInfo(userName, userProfession) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: userName,
                about: userProfession,
            }),
        })
            .then(this._response)
    }

    //добавление новой карточки на сервер
    addNewCard(cardName, cardLink) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: cardName,
                link: cardLink,
            }),
        })
            .then(this._response)
    }

    //удаление карточки
    deleteCard(id) {
        return fetch(`${this.baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(this._response)
    }

    //добавление лайков
    addLike(id) {
        return fetch(`${this.baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this.headers
        })
            .then(this._response)
    }

    //удаление лайков
    deleteLike(id) {
        return fetch(`${this.baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this.headers
        })
            .then(this._response)
    }

    //редактирование аватара
    editUserAvatar(userAvatar) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: userAvatar
            })
        })
            .then(this._response)
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-13',
    headers: {
        authorization: 'f9d42d56-f132-43be-b723-625cd27ac059',
        'Content-Type': 'application/json'
    }
})

export default api;
