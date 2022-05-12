/**
 * Posts plain text to a server
 */
export function postMessage(msg, url){
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    request.send(msg);
 } // it needs to be tested
