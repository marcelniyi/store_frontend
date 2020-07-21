let BASE_URL, SECOND_URL;

if(window.location.host === '127.0.0.1:3000') {
    BASE_URL = 'http://localhost:8000/api/v0/';
} else {
    BASE_URL = 'http://localhost:8000/api/v0/';

}

SECOND_URL = '';

export const API_BASE_URL = BASE_URL;
export const API_SECOND_URL = SECOND_URL;
