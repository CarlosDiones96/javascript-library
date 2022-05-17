/**
 * Issue a synchronous HTTP GET request for the contents of the specified URL.
 * Return the response text or throw an error if the request was not sucessful
 * or if the response was not text.
 */
export function getTextSync(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);

    if (request.status !== 200) {
        throw new Error(request.statusText);
    }

    const type = request.getResponseHeader('Content-Type');
    if (!type.match(/^text/)) {
        throw new Error(`Expected textual response; got: ${type}`);
    }

    return request.responseText;
} // function needs to be tested