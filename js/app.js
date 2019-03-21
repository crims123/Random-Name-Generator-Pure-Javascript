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
