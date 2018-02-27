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

    static willTransitionTo(transition, params, query, callback) {
        if(!confirm('Are you sure you want to read a page that boring?')) {
            transition.abort();
        } else {
            callback();
        }
    }
}

module.exports = About;