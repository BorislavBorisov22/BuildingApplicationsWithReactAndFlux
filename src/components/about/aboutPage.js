const React = require('react');

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootsrap</li>
                    </ul>
                </p>
            </div>
        );
    }
}

module.exports = About;