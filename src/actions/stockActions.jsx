import * as types from './constants.jsx';


export function getStock(marker) {
    return {
        type: types.GET_STOCK,
        payload: {
            client: 'default',
            request: {
                url: `/inventory/?stock=${marker}`,
                method: "GET",
            }
        }
    };
}


export function getSearchList(id) {
    return {
        type: types.GET_STOCK,
        payload: {
            client: 'default',
            request: {
                url: `/inventory/${id}`,
                method: "GET",
            }
        }
    };
}

export function searchStock(marker, prod) {
    return {
        type: types.SEARCH_STOCK,
        payload: {
            client: 'default',
            request: {
                url: `/inventory-search/?stock=${marker}${prod && prod.length !== 0 ? `&search=${prod}` : ''}`,
                method: "GET",
            }
        }
    };
}

export function patchQuantity(id, data) {
    return {
        type: types.PATCH_QUANTITY,
        payload: {
            client: 'default',
            request: {
                url: `/quantity-update/${id}/`,
                method: "PATCH",
                data
            }
        }
    };
}

export function postRequest(data) {
    return {
        type: types.POST_REQUEST,
        payload: {
            client: 'default',
            request: {
                url: `/requests/`,
                method: "POST",
                data
            }
        }
    };
}

export function getSettings() {
    return {
        type: types.POST_REQUEST,
        payload: {
            client: 'default',
            request: {
                url: `/inventory-settings/`,
                method: "GET",
            }
        }
    };
}


export function updateSetting(userId, data) {
    return {
        type: types.POST_REQUEST,
        payload: {
            client: 'default',
            request: {
                url: `/inventory-settingsUpdate/${userId}/`,
                method: "PUT",
                data
            }
        }
    };
}