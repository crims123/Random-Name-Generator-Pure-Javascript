const country = document.querySelector('#country');
const gender = document.querySelector('#gender');
const quantity = document.querySelector('#quantity');
const form = document.querySelector('#form');

// Event Listener
form.addEventListener('submit', handleForm);

function handleForm (e) {
    e.preventDefault();
    const listName =document.querySelector('#listNames');
    if (listName.innerHTML != '') {
        listName.innerHTML = '';
    }
    let url = 'https://uinames.com/api/?'; 
    if (country.value !== ""){
        url = `${url}region=${country.value}&`;
    }
    if (gender.value !== ""){
        url = `${url}gender=${gender.value}&`;
    }
    if (quantity.value !== ""){
        url = `${url}amount=${quantity.value}&`; 
    }
    requestApi(url);
}

function requestApi (url) {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        const names = response;
        const list =document.querySelector('#list');
        let htmlNames  = document.createElement('h2');
        htmlNames.className = 'listNames_title'
        htmlNames.innerHTML = 'Generated Names';
        list.appendChild(htmlNames)
        const listName =document.querySelector('#listNames');
        listName.appendChild(htmlNames);
        names.forEach( (item) => {
            const li = document.createElement('li');
            li.innerHTML=`${item.name}`;
            li.className = 'listNames_li';
            listName.appendChild(li);
        });
    })
}