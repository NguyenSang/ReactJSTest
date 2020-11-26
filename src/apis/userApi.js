import { loginApiClient as apiClient } from '../apis/apiClient';

export const login = params =>
    apiClient
        .post('signupNewUser?key=AIzaSyAolVUJjPpRFj9zovG3bntuGiprOEMAt8g', {
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