export default function mainReducer(state, action) {
    switch (action.type) {
        case 'SET_CONTACT_TITLE':
            return Object.assign({}, state, {
                contactTitle: action.title
            });
    }

    return state;
}