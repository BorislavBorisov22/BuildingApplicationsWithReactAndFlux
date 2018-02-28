const Dispatcher = require('../dispatcher/appDispatcher');
const AuthorApi = require('../api/authorApi');
const actionTypes = require('../constants/actionTypes');

const AuthorActions = {
    createAuthor(author) {
        const newAuthor = AuthorApi.saveAuthor(author);
        // Go tell all the stores that an author was created
        Dispatcher.dispatch({
            actionType: actionTypes.CREATE_AUTHOR,
            data: newAuthor,
        });
    }
};

module.exports = AuthorActions;