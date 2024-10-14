import axios from 'axios';
import md5 from 'md5';

import config from '../config/config';

const { BASE_URL, PUBLIC_KEY, PRIVATE_KEY } = config;

const getMarvelHash = (ts) => {
    return md5(ts + PRIVATE_KEY + PUBLIC_KEY);
};

export const fetchComics = async () => {
    try {
        const ts = new Date().getTime();
        const hash = getMarvelHash(ts);
        const response = await axios.get(`${BASE_URL}/comics`, {
            params: {
                ts,
                apikey: PUBLIC_KEY,
                hash,
            },
        });

        // Return necessary comic data
        return response.data.data.results.map(comic => ({
            id: comic.id,
            title: comic.title,
            thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            dates: comic.dates,
        }));
    } catch (error) {
        console.error('Error fetching comics:', error);
        return [];
    }
};