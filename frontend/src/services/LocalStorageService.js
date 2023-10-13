import {STORAGE_KEYS} from "../constants";

export const getAuthToken = () => {
    return window.localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
}

export const setAuthToken = (token) => {
    window.localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
}

export const removeAuthToken = () => {
    window.localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
}