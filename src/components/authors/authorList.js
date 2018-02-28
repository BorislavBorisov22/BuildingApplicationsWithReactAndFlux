const React = require('react');
const { Link } = require('react-router');
const toastr = require('toastr');
const AuthorActions = require('../../actions/authorActions');

class AuthorList extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteAuthor(authorId, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(authorId);
        toastr.success('Author deleted successfully!');
    }

    render() {
        const createAuthorRow = (author) => {
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={(event) => this.deleteAuthor(author.id, event)}>Delete</a></td>
                    <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <table className="table">
                    <thead>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow)}
                    </tbody>
            </table>
        );
    }
}

AuthorList.propTypes = {
    authors: React.PropTypes.array.isRequired
};

module.exports = AuthorList;