import { THE_MOVIE_DB } from './constants'

export const getPopular = (page = 1) => {
    return fetch(`${THE_MOVIE_DB.url}movie/popular?api_key=${THE_MOVIE_DB.key}&language=fr-FR&page=${page}`).then(response => response.json());
}

export const getNowPlaying = (page = 1) => {
    return fetch(`${THE_MOVIE_DB.url}movie/now_playing?api_key=${THE_MOVIE_DB.key}&language=fr-FR&page=${page}`).then(response => response.json());
}

export const getTopRated = (page = 1) => {
    return fetch(`${THE_MOVIE_DB.url}movie/top_rated?api_key=${THE_MOVIE_DB.key}&language=fr-FR&page=${page}`).then(response => response.json());
}

export const getUpcoming = (page = 1) => {
    return fetch(`${THE_MOVIE_DB.url}movie/upcoming?api_key=${THE_MOVIE_DB.key}&language=fr-FR&page=${page}&region=FR`).then(response => response.json());
}

export const getCredits = (movie_id) => {
    return fetch(`${THE_MOVIE_DB.url}movie/${movie_id}/credits?api_key=${THE_MOVIE_DB.key}`).then(response => response.json());
}

export const getDetail = (movie_id) => {
    return fetch(`${THE_MOVIE_DB.url}movie/${movie_id}?api_key=${THE_MOVIE_DB.key}&language=fr-FR&page`).then(response => response.json());
}

export const getImageUrl = (path) => {
    return `${THE_MOVIE_DB.image}${path}`;
}

export const getBigImageUrl = (path) => {
    return `${THE_MOVIE_DB.bigImage}${path}`;
}