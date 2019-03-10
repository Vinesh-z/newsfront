import { HttpHeaders } from '@angular/common/http';

export const GET_HEADERS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    responseType: 'json' as 'json'
};

const httpsHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
});

export const GET_HEADERS_OPTION = {
    headers: httpsHeaders,
    observe: 'response' as 'response'
};

export const GET_HEADERS_TEXT = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    responseType: 'text' as 'json'
};

export const POST_HEADERS = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS'
    }),
    responseType: 'json' as 'json',
    observe: 'response' as 'response'
};

export const DELETE_HEADERS = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'
    }),
    responseType: 'text' as 'json'
};

export const IMAGE_HEADERS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    responseType: 'json' as 'json'
};


