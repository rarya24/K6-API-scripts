import http from 'k6/http';
import {sleep} from 'k6';

export const options={

    vus : 1,
    duration : '30s',
}

export default function(){
    http.get('https://dummyjson.com/c/cc78-ebfd-42a6-9cf7');
    sleep(1);
}
 
