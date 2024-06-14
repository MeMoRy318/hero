// eslint-disable-next-line
import axios, { AxiosResponse } from 'axios';


const baseURL = 'http://localhost:3001';

const axiosService = axios.create({baseURL});

export type IRes<T> = Promise<AxiosResponse<T>>

export {axiosService};