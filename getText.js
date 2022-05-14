/**
 * Issue an HTTP request for the contents of the specified URL.
 * When the response arrives successfully, verify that it is plain text
 * and if so, pass it to the specified callback function
 */
export function getText(url, callback){
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const type = request.getResponseHeader('Content-Type');
            if(type.match(/^text/)){
                callback(request.responseText);
            }
        }
    };
    request.send(null);
} // code needs to be tested