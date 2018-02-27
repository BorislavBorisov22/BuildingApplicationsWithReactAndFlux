const React = require('react');
const { Link } = require('react-router');

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>Pluralsight administration</h1>
                    <p>React, React Router, Flux</p>
                    <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
                </div>
            </div>
        );
    }
}

module.exports = Home;