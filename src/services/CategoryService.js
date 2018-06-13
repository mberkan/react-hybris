import {authToken} from './../env_config'

export default function getCategories() {
    let headers = new Headers();
    headers.append('Authorization', authToken);
    return fetch("/catalogs/apparelProductCatalog/Online/categories/collections", {headers: headers});
}
