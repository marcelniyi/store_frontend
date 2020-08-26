import * as types from './constants.jsx';


export function getSingleProd() {
    return {
        type: types.GET_CAT,
        payload: {
            client: 'default',
            request: {
                url: `/SingleProduct`,
                method: "GET",
            }
        }
    };
}

export function getFeaturedProd() {
    return {
        type: types.GET_CAT,
        payload: {
            client: 'default',
            request: {
                url: `/featured`,
                method: "GET",
            }
        }
    };
}

export function getSlideProd() {
    return {
        type: types.GET_CAT,
        payload: {
            client: 'default',
            request: {
                url: `/slidings`,
                method: "GET",
            }
        }
    };
}

export function getTrendsProd() {
    return {
        type: types.GET_CAT,
        payload: {
            client: 'default',
            request: {
                url: `/trends`,
                method: "GET",
            }
        }
    };
}

export function resetErrorUsers() {
    return { type: types.RESET_USER_ERROR };
}
