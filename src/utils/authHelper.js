import cookies from './cookies';
import {
    ACCESS_TOKEN
} from '../common';
export const getAccessToken = () => cookies.getItem(ACCESS_TOKEN);