import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

//Lây Products từ server + lưu lên store

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return{
        type: Types.FETCH_PRODUCTS,
        products //payload: products
    }
}

//Xóa Product qua id từ server + lưu lên store

export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProducts(id));
        });
    };
}

export const actDeleteProducts = (id) => {
    return{
        type: Types.DELETE_PRODUCT,
        id //payload: id
    }
}

//THêm Product qua các filed name, price, status từ server + lưu lên store

export const actAddProductsRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProducts(res.data));
        });
    };
}

export const actAddProducts = (product) => {
    return{
        type: Types.ADD_PRODUCT,
        product //payload: id
    }
}

// Lấy product qua id từ server và sửa đổi trên store

export const actGetProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProducts(res.data));
        });
    };
}

export const actGetProducts = (product) => {
    return{
        type: Types.EDIT_PRODUCT,
        product //payload: id
    }
}

// Cap nhat tren serve va luu store

export const actUpdateProductsRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProducts(res.data));
        });
    };
}

export const actUpdateProducts = (product) => {
    return{
        type: Types.EDIT_PRODUCT,
        product //payload: id
    }
}