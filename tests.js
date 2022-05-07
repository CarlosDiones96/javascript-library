import {invoke} from './invoke.js';


let num = 0;

function add1(){
    console.log(num+=10);
}

invoke(add1, 0, 100, 5000);