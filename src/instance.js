import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://fyplatest.firebaseio.com/'
    }
);