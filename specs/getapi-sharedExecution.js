import http from 'k6/http';
import {sleep} from 'k6';
import exec from  'k6/execution';

export const options={
    executor : 'shared-iterations',
    vus : 10,
    iterations:200,
    maxduration : '30s',
}


export default function(){
    http.get('https://dummyjson.com/c/cc78-ebfd-42a6-9cf7');
    sleep(1);
}
 
