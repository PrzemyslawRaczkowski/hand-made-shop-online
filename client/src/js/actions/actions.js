const SET_CONTACT_TITLE = 'SET_CONTACT_TITLE';

export function loadContactTitle() {
    return fetch('/api/contact-title')
        .then(data => data.json())
        .then(({ title }) => ({
            type: SET_CONTACT_TITLE,
            title
        }));
}



