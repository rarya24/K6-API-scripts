import http from 'k6/http';
import {sleep} from 'k6';
import {check} from 'k6';

export const options={

    vus : 1,
    duration : '30s',
}

export default function(){

    const url = 'https://dummyjson.com/c/cc78-ebfd-42a6-9cf7';
    const payload = JSON.stringify(
        {
            "username": "RA",
            "password": "K6-demo"
          }
    );

    const params = {
        headers:{
            'Content-Type':'application/json',
        }
    }
    
    const response = http.post(url,payload,params);

    //Assertions

    check(response,{

        'is status 200': (r) => r.status === 200,
        'is response has username':(r) => r.body.includes('RA')  
    
    });
}
 