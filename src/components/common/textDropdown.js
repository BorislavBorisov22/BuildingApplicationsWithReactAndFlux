const React = require('react');

class TextDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const createDropdownOption = (item) => {
            return (
                <option>{this.props.mapDropdownItem(item)}</option>
            );
        };
        
        return (
        <div className="form-group">
        <label for="sel1">{this.props.title}</label>
        <select name={this.props.name} onChange={this.props.onChange} className="form-control" id="sel1">
          {this.props.collection.map(createDropdownOption)}
        </select>
      </div>
        );
    }
}

module.exports = TextDropdown;