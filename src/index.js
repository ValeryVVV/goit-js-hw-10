import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { createInfoMarkup, createListMarkup } from './js/markup';



const DEBOUNCE_DELAY = 300;

const inputEl = document.getElementById('search-box');
const listEl = document.querySelector('.country-list');
const infoEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));


function onInputSearch(evt) {
    evt.preventDefault();

    const textInput = evt.target.value.trim();

    if (!textInput) {
        listEl.innerHTML = '';
        infoEl.innerHTML = '';
      return;
    }


    fetchCountries(textInput)
    .then(arr => {
        if(arr.length > 10) {
            Notify.info('Too many matches found. Please enter a more specific name.');
            return;
        }
        renderAllMarkupElement(arr);
    }
        )
    .catch(err => {
        listEl.innerHTML = '';
        infoEl.innerHTML = '';
        Notify.failure('Oops, there is no country with that name')
    })

}

const renderAllMarkupElement = arr => {
    if(arr.length === 1) {
        listEl.innerHTML = '';
        const markupInfo = createInfoMarkup(arr);
        infoEl.innerHTML = markupInfo;
    } else {
        infoEl.innerHTML = '';
        const markupList = createListMarkup(arr);
        listEl.innerHTML = markupList;
    }
}

