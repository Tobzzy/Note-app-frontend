import axios from 'axios'


const NOTES_API_URL = 'https://math99.herokuapp.com'
//const NOTES_API_URL = 'http://localhost:5000'

class NotesDataService {

    retrieveAllNotes() {
        return axios.get(`${NOTES_API_URL}/notes`);
    }


    deleteNote(id) {
        return axios.delete(`${NOTES_API_URL}/notes/${id}`);
    }

    retrieveNotes(id) {
        return axios.get(`${NOTES_API_URL}/notes/${id}`);
    }

    createNote(note) {
        return axios.post(`${NOTES_API_URL}/notes`, note);
    }
}

export default new NotesDataService()