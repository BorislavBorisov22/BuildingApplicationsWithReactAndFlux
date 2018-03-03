const React = require('react');
const CourseForm = require('./courseForm');
const CourseApi = require('../../api/courseApi');
const AuthorApi = require('../../api/authorApi');
const CourseAction = require('../../actions/courseActions');
const toastr = require('toastr');
const { Navigation } = require('react-router');

const ManageCoursePage = React.createClass({
    getInitialState() {
        const authors = AuthorApi.getAllAuthors();

        return {
            course: {
                title: '',
                category: '',
                length: '',
                author: {
                    id: authors[0].id,
                    name: `${authors[0].firstName} ${authors[0].lastName}`
                },
            },
            authors: AuthorApi.getAllAuthors(),
            error: {},
        }
    },
    mixins: [
        Navigation
    ],
    componentWillMount() {
        const courseId = this.props.params.id;
        if (courseId) {
            this.setState({
                course: CourseApi.getCoursesById(courseId)
            });
        }
    },

    setCourseState(event) {
        const field = event.target.name;
        const value = event.target.value;

        if (field === 'author') {
            this.state.course.author = {
                id: this.state.authors.find(a => `${a.firstName} ${a.lastName}` === value).id,
                name: value,
            };
        } else {
            this.state.course[field] = value;
        }

        this.setState({
            course: this.state.course
        });
    },

    isFormValid() {
        const error = {};
        let isFormValid = true;
        if (this.state.course.title.length < 3) {
            error.title = 'Title must be at least 3 symbols long!';
            isFormValid = false;
        }

        if (this.state.course.category.length < 3) {
            error.category = 'Category must be at least 3 symbols long!';
            isFormValid = false;
        }

        this.setState({
            error: error
        });

        return isFormValid;
    },
    saveCourse() {
        if (!this.isFormValid()) {
            return;
        }

        console.log(this.state.course, 'coures state');

        CourseAction.createCourse(this.state.course);
        toastr.success('Course saved successfully!');
        this.transitionTo('courses');
    },
    render() {
       return (<div>
            <h1>Manage Course</h1> 
            <CourseForm authors={this.state.authors} course={this.state.course} error={this.state.error} onChange={this.setCourseState} onSave={this.saveCourse}/>
        </div>
        );
    },
});

module.exports = ManageCoursePage;