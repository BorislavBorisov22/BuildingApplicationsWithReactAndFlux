const React = require('react');
const AuthorForm = require('./authorForm');
const AuthorApi = require('../../api/authorApi');

class ManageAuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            }
        };
    }

    setAuthorState(event) {
        const field = event.target.name;
        const value = event.target.value;

        this.state.author[field]= value;
        this.setState ({
            author: this.state.author
        });
    }

    saveAuthor(event) {
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
    }

    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState.bind(this)} onSave={this.saveAuthor.bind(this)}/>
            </div>
        );
    }
}

module.exports = ManageAuthorPage;