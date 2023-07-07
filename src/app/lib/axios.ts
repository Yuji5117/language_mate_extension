import Axios from 'axios';
import { translateApiUrl } from '../config';

export const apiClient = Axios.create({ baseURL: translateApiUrl });
