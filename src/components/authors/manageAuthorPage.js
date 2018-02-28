const React = require('react');
const AuthorForm = require('./authorForm');
const AuthorActions = require('../../actions/authorActions');
const AuthorStore = require('../../stores/authorStore');
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
            error: {},
            dirty: false
        };
    },
    mixins: [
        Navigation
    ],
    setAuthorState(event) {
        this.setState({
            dirty: true
        });

        const field = event.target.name;
        const value = event.target.value;

        this.state.author[field]= value;
        this.setState ({
            author: this.state.author,
        });
    },
    isFormValid() {
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

        if (!this.isFormValid()) {
            return;
        }

        let saveMessage = 'Author Saved!';
        if (this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
            saveMessage = 'Author Created!';
        }

        toastr.success(saveMessage);

        this.setState({
            dirty: false
        });
        this.transitionTo('authors');
    },
    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} error={this.state.error}/>
            </div>
        );
    },
    componentWillMount() {
        const authorId = this.props.params.id;
        
        if (authorId) {
            this.setState({
                author: AuthorStore.getAuthorById(authorId),
            });
        }
    },
    statics: {
        willTransitionFrom: (transition, component) => {
            if (component.state.dirty && !confirm('Left withot saving!?')) {
                transition.abort();
            }
        },
    }
});

module.exports = ManageAuthorPage;