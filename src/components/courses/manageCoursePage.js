const React = require('react');
const CourseForm = require('./courseForm');
const CourseApi = require('../../api/courseApi');
const toastr = require('toastr');

class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {
                title: '',
                author: '',
                category: '',
                length: ''
            },
            error: {},
        }
    }

    setCourseState(event) {
        const field = event.target.name;
        const value = event.target.value;

        this.state.course[field] = value;
        this.setState({
            course: this.state.course
        });
    }

    isFormValid() {
        const error = {};
        let isFormValid = true;
        if (this.state.title.length < 3) {
            error.title = 'Title must be at least 3 symbols long!';
            isFormValid = false;
        }

        if (this.state.category.length < 3) {
            error.category = 'Cateogry must be at least 3 symbols long!';
            isFormValid = false;
        }

        this.setState({
            error: error
        });

        return isFormValid;
    }

    saveCourse(course) {
        if (!this.isFormValid()) {
            return;
        }

        CourseApi.saveCourse(this.state.course);
        toastr.success('Course saved successfully!');
    }

    render() {
        console.log(this.state.course);
       return (<div>
            <h1>Manage Course</h1> 
            <CourseForm course={this.state.course} error={this.state.error} onChange={this.setCourseState.bind(this)} onSave={this.saveCourse.bind(this)}/>
        </div>
        );
    }
}

module.exports = ManageCoursePage;