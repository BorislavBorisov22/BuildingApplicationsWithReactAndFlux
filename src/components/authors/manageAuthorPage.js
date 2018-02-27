const React = require('react');
const AuthorForm = require('./authorForm');
const AuthorApi = require('../../api/authorApi');
const { Navigation } = require('react-router');

const ManageAuthorPage = React.createClass({
    getInitialState() {
        return {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            }
        };
    },
    mixins: [
        Navigation
    ],
    setAuthorState(event) {
        const field = event.target.name;
        const value = event.target.value;

        this.state.author[field]= value;
        this.setState ({
            author: this.state.author
        });
    },
    saveAuthor(event) {
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        this.transitionTo('authors');
    },
    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor}/>
            </div>
        );
    }
});

module.exports = ManageAuthorPage;