/**
 * Created by reza on 2/4/17.
 */

const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const SHUTTER_CLIENT_ID = '55a49c6f35fd5fd32645';
const SHUTTER_CLIENT_SECRET = '193fe2fafa5cd96b2d67061b20efd7e25b257c58';

const basicAuth = () => 'Basic'.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
const authParameter = {
    headers: {
        Authorization: basicAuth()
    }
};

export const shutterStockVideos = (searchQuery) => {
    const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?
    query=${searchQuery}&page=1&per_page=10`;

    return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameter)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.data.map(({id, assets, description}) => ({
                id,
                mediaUrl: assets.preview_mp4.url,
                description
            }));
        });
};

export const flickrImages = (searchQuery) => {
    const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&
    text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;


    return fetch(FLICKR_API_ENDPOINT)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.photos.photo.map(({farm, server, id, secret, title}) => ({
                id,
                title,
                mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
            }));
        });
};