
import { PropTypes } from 'prop-types';

export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=052hiWvhWWPfWDX2GVLdrgkCmgCAQQaC`;

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ({ id, title, images }) => ({
      id: id,
      title: title,
      url: images?.downsized_medium.url
    }));

    return gifs;
}

getGifs.propTypes = {
    category: PropTypes.string.isRequired
}