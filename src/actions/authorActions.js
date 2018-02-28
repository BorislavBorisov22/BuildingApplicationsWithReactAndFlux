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
    },
    updateAuthor(author) {
        const updatedAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: actionTypes.UPDATE_AUTHOR,
            data: updatedAuthor
        });
    },
    deleteAuthor(authorId) {
        AuthorApi.deleteAuthor(authorId);

        Dispatcher.dispatch({
            actionType: actionTypes.DELETE_AUTHOR,
            data: authorId,
        });
    }
};

module.exports = AuthorActions;