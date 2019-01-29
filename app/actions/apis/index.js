
// const baseUrl = 'http://localhost:3001'
let baseUrl = 'http://192.168.0.47:8000'

export const fetchDataService = (url,authentication_token) => {
    return fetch(baseUrl + url, {
        method: 'GET',
        headers: {
            'Accept': '*',
            'Content-Type': 'application/json',
            'authentication_token': authentication_token
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        return err;
    })
}

export const postDataService = (url, item, authentication_token ) => {
    return fetch(baseUrl + url, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'POST',
            'authentication_token': authentication_token
        },
        body: JSON.stringify(item)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        return err;
    })
}

export const deleteDataService = (url, authentication_token) => {
    return fetch(baseUrl + url, {
        method: 'DELETE',
        headers: {
            'Accept': '*',
            'Content-Type': 'application/json',
            'authentication_token': authentication_token
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        return err;
    })
}

export const updateDataService = (url, item, authentication_token) => {
    return fetch(baseUrl + url , {
        method: 'PUT',
        headers: {
            'Accept': '*',
            'Content-Type': 'application/json',
            'authentication_token': authentication_token
        },
        body: item
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        return err;
    })
}