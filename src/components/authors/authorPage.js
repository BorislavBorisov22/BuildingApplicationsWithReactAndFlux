const React = require('react');
const AuthorApi = require('../../api/authorApi');
const AuthorList = require('./authorList');

const Router = require('react-router');
const { Link } = Router;

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: []
        };
    }

    componentDidMount() {
        this.setState({
            authors:  AuthorApi.getAllAuthors()
        });
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}

module.exports = AuthorPage;