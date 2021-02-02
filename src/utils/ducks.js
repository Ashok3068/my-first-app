

export const    GET_CUSTOMER_DETAILS="GET.CUSTOMER.DETAILS";
export const    INSERT_CUSTOMER_DETAILS="UPDATE.CUSTOMER.DETAILS";
export const    DELETE_CUSTOMER_DETAILS="DELETE.CUSTOMER.DETAILS";
export const    NUMBER_CUSTOMER_INSERTED="NUMBER.CUSTOMER.INSERTED";
export const    NUMBER_CUSTOMER_DELETED="NUMBER.CUSTOMER.DELETE";

const DEFAULT={
    customer:{},
    deleted:false,
    insertedRows:0
}


const  appStore =( action:any={},response: any =DEFAULT)=> {
    switch (action.type) {
        case GET_CUSTOMER_DETAILS:
            return {...response,customer:action.get}
        case INSERT_CUSTOMER_DETAILS:
            return {...response,customer:action.insert}
        case DELETE_CUSTOMER_DETAILS:
            return {...response,customer:action.delete}
        case NUMBER_CUSTOMER_INSERTED:
            return  {...response,insertedRows:action.increment}
        case NUMBER_CUSTOMER_DELETED:
            return  {...response,deleted:action.decrement}
        default : return {...response,deleted:action.decrement}
    }

}
export default appStore;
export function getCustomerDetails(customer: any[]) {
    return {customer,type:GET_CUSTOMER_DETAILS}
}
export function insertCustomerDetails(customer: any[]) {
    return {customer,type:INSERT_CUSTOMER_DETAILS}
}
export function deleteCustomerDetails(customer: any[]) {
    return {customer,type:DELETE_CUSTOMER_DETAILS}
}
export function getDetails() {
    return (dispatch:any, getState:() =>void)=>{

    fetch('http://localhost:8090/blogs/1234', {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            dispatch(getCustomerDetails(data));
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

}
export function updateDetails() {
    return (dispatch:any, getState:() =>void)=>{

    fetch('http://localhost:8090/blogs/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body:{}
    })
        .then((response) => response.json())
        .then((data) => {
            dispatch(getCustomerDetails(data));
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }

}
export function deleteDetails() {
    return (dispatch:any, getState:() =>void)=>{

        fetch('http://localhost:8090/blogs/1234', {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body:{}
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(getCustomerDetails(data));
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }


}



