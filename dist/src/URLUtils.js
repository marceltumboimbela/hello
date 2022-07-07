"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class URLUtils {
    static addQueryParam(url, name, value) {
        //https://stackoverflow.com/a/6021027
        var i = url.indexOf('#');
        var hash = i === -1 ? '' : url.substr(i);
        url = i === -1 ? url : url.substr(0, i);
        var re = new RegExp("([?&])" + name + "=.*?(&|$)", "i");
        var separator = url.indexOf('?') !== -1 ? "&" : "?";
        if (url.match(re)) {
            url = url.replace(re, '$1' + name + "=" + value + '$2');
        }
        else {
            url = url + separator + name + "=" + value;
        }
        return url + hash;
    }
}
exports.default = URLUtils;
