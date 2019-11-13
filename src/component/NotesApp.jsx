import React, { Component } from 'react';
//import {Switch, Router, Route } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListNotesComponent from './ListNotesComponent'
import NotesComponent from './NotesComponent';


class NotesApp extends Component {
    render() {
        return (
            <Router>
            <>
             <br />
              <h1 className="text-center">99math notes app</h1><br />
                <Switch>
                    <Route path="/" exact component={ListNotesComponent} />
                    <Route path="/notes" exact component={ListNotesComponent} />
                    <Route path="/notes/:id" component={NotesComponent} />
                </Switch>
                </>
            </Router>
        )
    }
}
export default NotesApp