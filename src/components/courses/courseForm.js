const React = require('react');
const Input = require('../common/textInput');
const Dropdown = require('../common/textDropdown');

class CourseForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form>
                <Input name="title" label="Title" value={this.props.course.title} onChange={this.props.onChange} error={this.props.error.title}/>
                <Dropdown name="author" title="Authors" onChange={this.props.onChange} collection={this.props.authors} mapDropdownItem={(author) => `${author.firstName} ${author.lastName}`}/>
                <Input name="category" label="Category" value={this.props.course.category} onChange={this.props.onChange} error={this.props.error.category}/>
                <Input name="length" label="Length" value={this.props.course.length} onChange={this.props.onChange} error={this.props.error.length}/>
                <input value="Save" type="button" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
}

module.exports = CourseForm;