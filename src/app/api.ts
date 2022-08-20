import axios from 'axios';

export type Abortable<T = {}> = {signal: AbortSignal} & T;

export default axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',
});
