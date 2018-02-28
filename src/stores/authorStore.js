
const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes');
const { EventEmitter}  = require('events');

const CHANGE_EVENT = 'change';

const authors = [];

const AuthorStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange(callback) {
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors() {
        return authors;
    },
    getAuthorById(id) {
        console.log(id, 'loggin id');
        console.log(authors, 'authors list')
        return authors.find(a => a.id === id) || {};
    }
});

Dispatcher.register((action) => {
    switch(action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            authors.push(action.data);
            AuthorStore.emitChange();
        break;
    }
});

module.exports = AuthorStore;