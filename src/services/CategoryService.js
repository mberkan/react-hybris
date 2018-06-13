import {authToken} from './../env_config'

export function getCategories() {
    let headers = new Headers();
    headers.append('Authorization', authToken);
    return fetch("/catalogs/apparelProductCatalog/Online/categories/collections", {headers: headers});
}

export function getProducts(categoryId) {
    let headers = new Headers();
    headers.append('Authorization', authToken);
    return fetch(`/products/search?query=:relevance:collection:${categoryId}`, {headers: headers});
}

export function getProduct(productCode) {
    let headers = new Headers();
    headers.append('Authorization', authToken);
    return fetch(`/product/${productCode}`, {headers: headers});
}

