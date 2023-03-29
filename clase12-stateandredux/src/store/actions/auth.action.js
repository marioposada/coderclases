import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../../constant/database";

const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';

export const signUp = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_UP, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            });

            if (!response.ok) {
                throw new Error('Algo salió mal');
            }

            const data = await response.json();

            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId
            });

        } catch (error) {
            console.log(error);
        }
    }
};

export const signIn = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_IN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            });

            const data = await response.json();
            console.warn('data', data);
            dispatch({
                type: SIGN_IN,
                token: data.idToken,
                userId: data.localId
            });
        } catch (error) {
            console.log(error);
        }
    }
}