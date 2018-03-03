const React = require('react');
const Input = require('../common/textInput');

class CourseForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form>
                <Input name="title" label="Title" value={this.props.course.title} onChange={this.props.onChange} error={this.props.error.title}/>
                <Input name="author" label="Author" value={this.props.course.author.name} onChange={this.props.onChange} error={this.props.error.author}/>
                <Input name="category" label="Category" value={this.props.course.category} onChange={this.props.onChange} error={this.props.error.category}/>
                <Input name="length" label="Length" value={this.props.course.length} onChange={this.props.onChange} error={this.props.error.length}/>
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
}

module.exports = CourseForm;