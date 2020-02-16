function setCookie(name, stringData) {
    document.cookie = `${name}=` + btoa(stringData);
}

function getCookie(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
  
    if (parts.length === 2)
        return parts
            .pop()
            .split(';')
            .shift();
}
  
function decodeCookieData(data) {
    // decode base64 & parse json
    return atob(data);
}

function decodeJsonCookieData(data) {
    // decode base64 & parse json
    return JSON.parse(atob(data));
}
  
function resetCookie() {
    // const initialData = {
    // };

    // document.cookie = 'key=' + btoa(JSON.stringify(initialData));
}
  
export { 
    setCookie, 
    getCookie, 
    decodeCookieData, 
    decodeJsonCookieData, 
    resetCookie 
};
  