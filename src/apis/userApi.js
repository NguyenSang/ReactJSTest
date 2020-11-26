import { loginApiClient as apiClient } from '../apis/apiClient';

export const login = params =>
    apiClient
        .post('verifyPassword?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY', {
            'email': params['email'],
            'password': params['password'],
            returnSecureToken: true
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (err) {
            console.error('Error login', err);
            throw err;
        });