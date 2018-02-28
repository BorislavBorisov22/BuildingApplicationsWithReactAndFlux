
const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes');
const { EventEmitter}  = require('events');

const CHANGE_EVENT = 'change';

let authors = [];

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
        return authors.find(a => a.id === id) || {};
    }
});

Dispatcher.register((action) => {
    switch(action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            authors.push(action.data);
            AuthorStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR: 
            const updatedAuthor = action.data;
            const index = authors.findIndex(a => a.id === updatedAuthor.id);
            if (index >= 0) {
                authors[index] = updatedAuthor;
                AuthorStore.emitChange();
            }
            break;
        default: break;
    }
});

module.exports = AuthorStore;