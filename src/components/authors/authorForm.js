const React = require('react');
const TextInput = require('../common/textInput');

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form>
                <label htmlFor="firstName">First Name</label>
                <input onChange={this.props.onChange} type="text" name="firstName" className="form-control" placeholder="First Name" ref="firstName" value={this.props.firstName}/>

                
                <label htmlFor="lastName">Last Name</label>
                <input onChange={this.props.onChange} type="text" name="lastName" className="form-control" placeholder="Last Name" ref="lastName" value={this.props.lastName}/>
                <br/>

                <input type="submit" value="Save" className="btn btn-default"/>
            </form>
        );
    }
}

module.exports = AuthorForm;