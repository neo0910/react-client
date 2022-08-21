import axios from 'axios';

export type Abortable<T = {}> = {signal: AbortSignal} & T;

export default axios.create({
    baseURL: process.env.REACT_APP_API,
});
