import React, { Component } from 'react';
import NoteDataService from '../service/NoteDataService';
class ListNotesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            messages: null,
        }
        this.refreshNotes = this.refreshNotes.bind(this)
        this.deleteNoteClicked = this.deleteNoteClicked.bind(this)
        this.addNoteClicked = this.addNoteClicked.bind(this)
    }

    componentDidMount() {
        this.refreshNotes();
    }


    refreshNotes() {
        NoteDataService.retrieveAllNotes()
            .then(
                response => {
                    this.setState({ notes: response.data})
                }
            )
    }


    deleteNoteClicked(id) {
        NoteDataService.deleteNote(id)
            .then(
                response => {
                    this.setState({ message: `Note Deleted` })
                    this.refreshNotes()
                }
            )
    
    }

    addNoteClicked() {
        this.props.history.push(`/notes/0`)
    }

    disableComponent() {
        this.setState({showComponent: false})
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">All Notes</h3><br />
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div class="row">
                {
                    this.state.notes.map(
                    notes =>
                    <div className="col-md-4">
                        <h5 >{notes.title}</h5>
                        <p>{notes.content}.</p>
                        <button className="btn btn-danger btn-xs" onClick={() =>{if(window.confirm('Are you sure you want to delete?')) {this.deleteNoteClicked(notes._id)};}}>Delete</button>
                    </div>
                    
                      )
                    }

                </div>
                <br />
                <div className="row">
                    <button className="btn btn-success" onClick={this.addNoteClicked}>Add</button>
                </div>
            </div>
        )
    }
}

export default ListNotesComponent