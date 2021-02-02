import React, {useEffect, useState} from 'react';

const API_HOST = "http://localhost:8090/blogs/1234";
const INVENTORY_API_URL = `${API_HOST}/inventory`;



export function callAPI () {
    let data1 = null;
    fetch('http://localhost:8090/institute/1234', {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success response:', data);
            data1=data
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    console.log('Success1:', data1);
    return data1;

}
