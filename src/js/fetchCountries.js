const API_URL = 'https://restcountries.com/v3.1/name';

const fetchCountries = (name) => {
    return fetch(`${API_URL}/${name}?fields=name,capital,population,flags,languages`)
    .then(resp => {
            if(!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        }
    )
}

export { fetchCountries };

