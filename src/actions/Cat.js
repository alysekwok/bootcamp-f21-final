import fetch from "isomorphic-unfetch";
import urls from "../../utils/urls";

export const getCats = () => {
    fetch(urls.baseUrl + urls.adopt.cats, {
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

export const getAdoptableCats = () => {
    fetch(urls.baseUrl + urls.adopt.cats, + "?isAdopted=true", {
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

export const getCat = (id) => {
    fetch(urls.baseUrl + urls.adopt.cats, + "?id=" + id, {
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