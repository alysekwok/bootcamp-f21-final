import fetch from "isomorphic-unfetch";
import urls from "../../utils/urls";

export const findApplication = (id) => {
    fetch(urls.dbUrl + urls.adopt.application + `?id=${id}`, {
        method: "GET",
        mode: "same-origin",
        credentials: "include"
    })
        .then((response) => response.json())
        .then((json) => {
            if (json == null) {
                throw new Error("Could not connect to API!")
            } else if (!json.success) {
                throw new Error(json.message)
            } 
            return json.payload
    });
}

export const findApplicationofCat = (catname) => {
    fetch(urls.dbUrl + urls.adopt.application + `?catid=${catid}`, {
        method: "GET",
        mode: "same-origin",
        credentials: "include"
    })
        .then((response) => response.json())
        .then((json) => {
            if (json == null) {
                throw new Error("Could not connect to API!")
            } else if (!json.success) {
                throw new Error(json.message)
            } 
            return json.payload
    });
}

export const submit = (application) => {
    fetch(urls.dbUrl + urls.adopt.submit, {
        method: "POST",
        mode: "same-origin",
        credentials: "include",
        body: JSON.stringify({ application })
    })
        .then((response) => response.json())
        .then((json) => {
            if (json == null) {
                throw new Error("Could not connect to API!")
            } else if (!json.success) {
                throw new Error(json.message)
            } 
            return json.payload
    });
}

export const setApproved = (id) => {
    fetch(urls.dbUrl + urls.adopt.application + `?id=${id}`, {
        method: "PUT",
        mode: "same-origin",
        credentials: "include"
    })
        .then((response) => response.json())
        .then((json) => {
            if (json == null) {
                throw new Error("Could not connect to API!")
            } else if (!json.success) {
                throw new Error(json.message)
            } 
            return json.payload
    });
}
