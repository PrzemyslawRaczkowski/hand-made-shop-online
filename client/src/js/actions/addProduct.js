const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProduct() {
    return fetch('/api/addProduct')
        .then(data => data.json())
        .then(({ title }) => ({
            type: ADD_PRODUCT,
            title
        }));
}
