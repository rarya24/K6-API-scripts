/* This test script is part of load testing
   It is a shared iteration mode where iterations are shared among the total number of Virtual Users
   It is a way to distribute load among the Virtual users
   */

import http from 'k6/http';
import {sleep} from 'k6';
import exec from  'k6/execution';

export const options={
    executor : 'per-vu-iterations',
    vus : 10,                    // Total number of Virtual Users
    iterations:200,              // Total number of iterations shared among users
    maxduration : '30s',         // The maximum duration for which the load test can run
}


export default function(){
    http.get('https://dummyjson.com/c/cc78-ebfd-42a6-9cf7');
    sleep(1);
}
 

