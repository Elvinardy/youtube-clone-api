import axios from 'axios';

const KEY = 'AIzaSyB9yCM4GWdvS6daIZZ5NsWLKDoXMXoo5Ms';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});