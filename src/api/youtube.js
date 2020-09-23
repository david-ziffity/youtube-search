import axios from 'axios';

const KEY = 'AIzaSyCsPiJ10WoKLAbKue9ZJ48x4d1NjzwsYvo';


export default  axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        part: 'snippet',
        type: 'video',
        maxResults: 5
    }
});

 