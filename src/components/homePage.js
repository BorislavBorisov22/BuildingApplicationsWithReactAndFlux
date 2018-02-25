const React = require('react');

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight administration</h1>
                <p>React, React Router, Flux</p>
            </div>
        );
    }
}

module.exports = Home;