import '../css/styles.css';

export const createInfoMarkup = (arr) => {
    return arr.map(
        ({ flags, name, capital, population, languages }) => 
        `
            <div class="info-wrapper">
                <img src="${flags.svg}" alt="${name.official} width="40" height="40"/>
                <h1 class="info-title">${name.official}</h1>
            </div>
            <div class="info">
            <p>Capital: ${capital}</p>
            <p>Population: ${population}</p>
            <p>Languages: ${Object.values(languages)}</p>
            </div>
    `
    ).join('');
  }

export const createListMarkup = (arr) => {
    return arr.map(
        ({flags, name}) =>
        `
        <div class="list">
            <li>
                <img src="${flags.svg}" alt="${name.official} width="40" height="40"/>
                <h2 class="info-title">${name.official}</h2>
            </li>
        </div>
    `
    ).join('');
  }
