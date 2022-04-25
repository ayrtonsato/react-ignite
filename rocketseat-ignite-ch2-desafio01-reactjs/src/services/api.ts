import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://172.21.66.28:3333',
});
