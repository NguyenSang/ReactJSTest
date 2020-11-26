import axios from 'axios';
import { HTTP_AUTHORIZATION_HEADER } from '../common';
import clone from 'lodash/clone';
import * as auth from '../utils/authHelper';
const apiClient = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});
const requestInterceptors = axiosConfig => {
    const config = clone(axiosConfig);
    if (
        config.url &&
        (config.url.indexOf('auth') !== -1)
    ) {
        // Dont pass token with public API
        return config;
    }
    const token = auth.getAccessToken();
    if (token) {
        config.headers[HTTP_AUTHORIZATION_HEADER] = `Bearer ${token}`;
    }

    // let locale = getLanguage();
    // // TBD, it should be 'ko' in server for consistent
    // if (locale === 'ko') locale = 'kr';
    // config.headers['Accept-Language'] = locale || DEFAULT_LOCALE;

    return config;
};
// Add a request interceptor
apiClient.interceptors.request.use(
    axiosConfig => requestInterceptors(axiosConfig),
    error => {
        Promise.reject(error);
    },
);