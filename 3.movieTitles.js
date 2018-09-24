const https = require('https');

const httpGet = (url) => {
    return new Promise((resolve, rej) => {
        let data = '';
        https.get(url, (response) => {
            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => resolve(JSON.parse(data)));
        });
    });
};

async function getMovieTitles(substr) {
    try {
        const searchString = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`;
        const { total_pages } = await httpGet(searchString);

        const getMoviesPromises = Array.from({ length: total_pages }).map((_, index) => {
            return httpGet(searchString + `&page=${index + 1}`);
        });

        const moviesByPages = await Promise.all(getMoviesPromises);
        const movieTitles = moviesByPages.reduce((movieTitles, { data }) => {
            return movieTitles.concat(data.map(mfcp => mfcp.Title));
        }, []);

        return movieTitles.sort((a, b) => a.localeCompare(b));
    } catch (err) {
        return err;
    }
}

getMovieTitles('spiderman')
    .then(console.log.bind(console));