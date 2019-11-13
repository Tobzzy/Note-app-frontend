import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import NoteDataService from '../service/NoteDataService';

class NotesComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            content: '',
            message : null
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        NoteDataService.createNote(this.state.id)
          .then(response => this.setState({
            title: response.data.title,
            content: response.data.content
          }))
    }

    onSubmit(values) {
        let notes = {
            title: values.title,
            content: values.content
        }
        console.log(values.checkbox)
        NoteDataService.createNote(notes)
            .then(() => this.props.history.push('/notes'))
            this.setState({ message: `Note Added`})
    }

    validate(entries) {
        let errors = {}
        
        if (!entries.title){
            errors.title = 'Please enter note title'
        }
        if (!entries.content) {
            errors.content = 'Please enter note content'
        } 
        return errors
    }


    render() {
        let {title, content} = this.state
      return (
            <div>
                <h3>Note</h3>
                <div className="container">
                <Formik
                    initialValues={{ content, title }}
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="title" component="div" className="alert alert-warning" />
                                <ErrorMessage name="content" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Title</label>
                                    <Field className="form-control" type="text" name="title" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Note</label>
                                    <Field className="form-control" type="text" name="content" />
                                </fieldset><br />
                                <h3>Or select from checklist</h3><br />
                                <label>
                                    <Field type="checkbox" name="content" value="laundry" />
                                    laundry
                                </label><br />
                                <label>
                                    <Field type="checkbox" name="content" value="gym" />
                                    gym
                                </label><br />
                                <label>
                                    <Field type="checkbox" name="content" value="homework" />
                                    homework
                                </label><br />
                                <label>
                                    <Field type="checkbox" name="content" value="job task" />
                                    job task
                                </label>
                                <br />
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
                </div>
            </div>
      )
  }

}

export default NotesComponent