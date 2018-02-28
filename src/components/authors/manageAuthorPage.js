const React = require('react');
const AuthorForm = require('./authorForm');
const AuthorApi = require('../../api/authorApi');
const { Navigation } = require('react-router');
const toastr = require('toastr');

const ManageAuthorPage = React.createClass({
    getInitialState() {
        return {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            },
            error: {}
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
    isAuthorFormValid() {
        let formIsValid = true;
        this.state.error = {}; // clear any previous errors;

        if (this.state.author.firstName.length < 3) {
            this.state.error.firstName = 'First name must be at least 3 symbols';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.error.lastName = 'Last name must be at least 3 symbols';
            formIsValid = false;
        }

        this.setState({
            error: this.state.error
        });

        return formIsValid;
    },
    saveAuthor(event) {
        event.preventDefault();

        if(!this.isAuthorFormValid()) {
            return;
        }

        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author Saved!');
        this.transitionTo('authors');
    },
    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} error={this.state.error}/>
            </div>
        );
    }
});

module.exports = ManageAuthorPage;