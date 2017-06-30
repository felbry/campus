var access_token = window.localStorage.getItem('access_token') || '';

function get(url) {
    // url = url + '?access_token=' + access_token;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + access_token,
        }
    }).then(res => {
        return res.json();
    }, err => {
        console.log(err);
    });
}

function post(url, data) {
    // data['access_token'] = access_token;
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + access_token,
        },
    }).then(res => {
        if(res.status != 200)
            return res.status;
        else
            return res.json();
    }, err => {
        console.log(err);
    })
}

function postFile(url, data) {
    // data['access_token'] = access_token;
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            // "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + access_token,
        },
    }).then(res => {
        if(res.status != 200)
            return res.status;
        else
            return res.json();
    }, err => {
        console.log(err);
    })
}

function updateToken(v) {
    access_token = v;
}

export default {
    get, post, updateToken, postFile
}