// This test script tests shared execution among virtual users for a test duration of 30s,no of iteration is not fixed 
// and depends on how fast a user executes one iteration 

import http from 'k6/http';
import {sleep} from 'k6';
import exec from  'k6/execution';

export const options={
    executor : 'shared-Execution',
    vus : 10,              //Number of virtual users
    duration : '30s',       //test duration
}


export default function(){
    http.get('https://dummyjson.com/c/cc78-ebfd-42a6-9cf7');
    sleep(1);
}
 
