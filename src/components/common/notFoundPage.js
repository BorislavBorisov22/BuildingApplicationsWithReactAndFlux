const React = require('react');
const { Link } = require('react-router');

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Whoops! Sorry, there is nothing to see here.</p>
                <p><Link to="app">Back to home</Link></p>
            </div>
        );
    }
}

module.exports = NotFoundPage;